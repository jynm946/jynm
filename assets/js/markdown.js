/* 轻量 Markdown 渲染器：给博客阅读器与本地后台预览共用。
   只支持写博客常用的语法：标题、段落、列表、引用、代码块、粗体、斜体、链接。 */
(function () {
  'use strict';

  function escapeHTML(value) {
    return String(value === undefined || value === null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function inline(text) {
    var tokens = [];
    var output = escapeHTML(text);

    output = output.replace(/`([^`]+)`/g, function (_, code) {
      tokens.push('<code>' + code + '</code>');
      return '\u0000' + (tokens.length - 1) + '\u0000';
    });

    output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    output = output.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    output = output.replace(/\u0000(\d+)\u0000/g, function (_, index) {
      return tokens[Number(index)] || '';
    });

    return output;
  }

  function render(markdown) {
    var lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var index = 0;

    function flushParagraph(buffer) {
      if (!buffer.length) return;
      html.push('<p>' + buffer.map(inline).join('<br>') + '</p>');
      buffer.length = 0;
    }

    var paragraph = [];

    while (index < lines.length) {
      var line = lines[index];

      // Fenced code block
      if (/^```/.test(line.trim())) {
        flushParagraph(paragraph);
        var codeLines = [];
        index += 1;
        while (index < lines.length && !/^```/.test(lines[index].trim())) {
          codeLines.push(lines[index]);
          index += 1;
        }
        index += 1;
        html.push('<pre><code>' + escapeHTML(codeLines.join('\n')) + '</code></pre>');
        continue;
      }

      // Headings (single # is treated as a section title so imported Markdown stays readable)
      var heading = /^(#{1,3})\s+(.+)$/.exec(line);
      if (heading) {
        flushParagraph(paragraph);
        var level = Math.max(2, heading[1].length);
        html.push('<h' + level + '>' + inline(heading[2]) + '</h' + level + '>');
        index += 1;
        continue;
      }

      // Blockquote
      if (/^>\s?/.test(line)) {
        flushParagraph(paragraph);
        var quoteLines = [];
        while (index < lines.length && /^>\s?/.test(lines[index])) {
          quoteLines.push(lines[index].replace(/^>\s?/, ''));
          index += 1;
        }
        html.push('<blockquote><p>' + quoteLines.map(inline).join('<br>') + '</p></blockquote>');
        continue;
      }

      // Unordered list
      if (/^[-*+]\s+/.test(line)) {
        flushParagraph(paragraph);
        var ulItems = [];
        while (index < lines.length && /^[-*+]\s+/.test(lines[index])) {
          ulItems.push(lines[index].replace(/^[-*+]\s+/, ''));
          index += 1;
        }
        html.push('<ul>' + ulItems.map(function (item) {
          return '<li>' + inline(item) + '</li>';
        }).join('') + '</ul>');
        continue;
      }

      // Ordered list
      if (/^\d+\.\s+/.test(line)) {
        flushParagraph(paragraph);
        var olItems = [];
        while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
          olItems.push(lines[index].replace(/^\d+\.\s+/, ''));
          index += 1;
        }
        html.push('<ol>' + olItems.map(function (item) {
          return '<li>' + inline(item) + '</li>';
        }).join('') + '</ol>');
        continue;
      }

      // Divider
      if (/^---+\s*$/.test(line)) {
        flushParagraph(paragraph);
        html.push('<hr>');
        index += 1;
        continue;
      }

      // Blank line
      if (!line.trim()) {
        flushParagraph(paragraph);
        index += 1;
        continue;
      }

      paragraph.push(line);
      index += 1;
    }

    flushParagraph(paragraph);
    return html.join('\n');
  }

  function plainText(markdown) {
    return String(markdown || '')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/^#{1,3}\s+/gm, '')
      .replace(/^>\s?/gm, '')
      .replace(/^[-*+]\s+/gm, '')
      .replace(/^\d+\.\s+/gm, '')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }

  window.JXMarkdown = {
    render: render,
    plainText: plainText
  };
})();
