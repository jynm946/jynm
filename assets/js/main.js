/* ==========================================================================
   江旭 · 个人网站交互层
   原生 JavaScript，按功能拆分为独立初始化函数，统一在 boot() 中按序启动。
   ========================================================================== */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var root = document.documentElement;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var STORAGE_THEME = 'jiangxu-theme';

  /* ------------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------------ */

  function $(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function $$(selector, scope) {
    return Array.from((scope || document).querySelectorAll(selector));
  }

  function padNumber(value, length) {
    var text = String(value);
    while (text.length < length) text = '0' + text;
    return text;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      /* 隐私模式或存储不可用时静默降级 */
    }
  }

  function smoothBehavior() {
    return prefersReducedMotion.matches ? 'auto' : 'smooth';
  }

  /* ------------------------------------------------------------------------
     Toast
     ------------------------------------------------------------------------ */

  var toastElement = $('#toast');
  var toastTextElement = $('#toastText');
  var toastTimer = 0;

  function showToast(message) {
    if (!toastElement || !toastTextElement) return;
    window.clearTimeout(toastTimer);
    toastTextElement.textContent = message;
    toastElement.classList.add('is-visible');
    toastTimer = window.setTimeout(function () {
      toastElement.classList.remove('is-visible');
    }, 2400);
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', 'readonly');
      field.style.position = 'fixed';
      field.style.top = '-1000px';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();

      try {
        var copied = document.execCommand('copy');
        document.body.removeChild(field);
        if (copied) resolve();
        else reject(new Error('copy-failed'));
      } catch (error) {
        document.body.removeChild(field);
        reject(error);
      }
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  function initCopyButtons() {
    document.addEventListener('click', function (event) {
      var trigger = event.target.closest('[data-copy]');
      if (!trigger) return;

      var value = trigger.getAttribute('data-copy');
      if (!value) return;

      copyText(value).then(function () {
        showToast(value.indexOf('@') > -1 ? '邮箱已复制到剪贴板' : '微信号已复制到剪贴板');
      }).catch(function () {
        showToast('复制失败，请手动选择文本');
      });
    });
  }

  /* ------------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------------ */

  function initTheme() {
    var toggle = $('#themeToggle');
    if (!toggle) return;

    var themeMeta = $('meta[name="theme-color"]');

    function syncThemeState() {
      var isDark = root.getAttribute('data-theme') === 'dark';
      toggle.setAttribute('aria-label', isDark ? '切换到浅色模式' : '切换到深色模式');
      toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      if (themeMeta) themeMeta.setAttribute('content', isDark ? '#0a0d12' : '#fbfcff');
    }

    toggle.addEventListener('click', function () {
      var isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', 'dark');
      writeStorage(STORAGE_THEME, isDark ? 'light' : 'dark');
      syncThemeState();
      window.dispatchEvent(new CustomEvent('site:themechange'));
    });

    syncThemeState();
  }

  /* ------------------------------------------------------------------------
     Header and navigation indicator
     ------------------------------------------------------------------------ */

  var navState = {
    header: null,
    nav: null,
    indicator: null,
    links: [],
    active: 'home'
  };

  function positionNavIndicator(link) {
    if (!navState.nav || !navState.indicator || !link) return;
    navState.indicator.style.width = link.offsetWidth + 'px';
    navState.indicator.style.transform = 'translate(' + link.offsetLeft + 'px, -50%)';
    navState.indicator.style.opacity = '1';
  }

  function setActiveNav(id) {
    if (!navState.links.length) return;
    if (navState.active === id && navState.nav.dataset.active === id) return;

    navState.active = id;
    navState.nav.dataset.active = id;

    var activeLink = null;
    navState.links.forEach(function (link) {
      var isActive = link.getAttribute('data-nav') === id;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
        activeLink = link;
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (activeLink) positionNavIndicator(activeLink);
  }

  function initHeaderNav() {
    navState.header = $('#siteHeader');
    navState.nav = $('.site-nav');
    navState.indicator = $('.site-nav__indicator');
    navState.links = $$('.site-nav__link');

    var initial = navState.links.find(function (link) {
      return link.classList.contains('is-active');
    });
    if (initial) positionNavIndicator(initial);

    window.addEventListener('resize', function () {
      var activeLink = navState.links.find(function (link) {
        return link.getAttribute('data-nav') === navState.active;
      });
      if (activeLink) positionNavIndicator(activeLink);
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        var activeLink = navState.links.find(function (link) {
          return link.getAttribute('data-nav') === navState.active;
        });
        if (activeLink) positionNavIndicator(activeLink);
      });
    }
  }

  /* ------------------------------------------------------------------------
     SPA router
     ------------------------------------------------------------------------ */

  var ROUTE_CONFIG = {
    home: { title: '江旭 · 前端工程师与独立开发者' },
    blog: { title: '博客 · 江旭' },
    footprints: { title: '我的足迹 · 江旭' },
    skills: { title: '技能 · 江旭' }
  };

  var routeState = {
    active: 'home'
  };

  function parseLocationHash(hash) {
    var raw = (hash || '').replace(/^#/, '');

    if (raw.indexOf('!') === 0) raw = raw.slice(1);
    if (raw.indexOf('/') === 0) raw = raw.slice(1);

    var segments = raw.split('/');
    var first = (segments[0] || '').toLowerCase();

    if (!first) return { route: 'home', anchor: null };
    if (first === 'about') return { route: 'home', anchor: 'about' };
    if (first === 'contact') return { route: routeState.active || 'home', anchor: 'contact' };
    if (first === 'post') return { route: 'blog', anchor: null };
    if (ROUTE_CONFIG[first]) return { route: first, anchor: null };

    /* 页面内的普通锚点（如 #main）不改变当前视图 */
    return { route: routeState.active || 'home', anchor: null };
  }

  function scrollToAnchor(id) {
    var target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
    updateScrollUI();
  }

  function writeRouteHash(route, mode) {
    var hash = '#/' + route;
    try {
      if (mode === 'push') window.history.pushState({ route: route }, '', hash);
      else window.history.replaceState({ route: route }, '', hash);
    } catch (error) {
      if (mode === 'push') {
        try {
          window.location.hash = hash;
        } catch (fallbackError) {
          /* 地址栏不可写时忽略 */
        }
      }
    }
  }

  function applyRouteView(route, options) {
    var config = ROUTE_CONFIG[route];
    if (!config) return;

    $$('[data-spa]').forEach(function (section) {
      section.hidden = section.getAttribute('data-spa') !== route;
    });

    routeState.active = route;
    setActiveNav(route);
    document.title = config.title;

    if (!options || options.scroll !== false) {
      window.scrollTo(0, 0);
    }

    window.requestAnimationFrame(function () {
      if (!options || options.scroll !== false) {
        window.scrollTo(0, 0);
      }
      updateScrollUI();
      window.dispatchEvent(new CustomEvent('site:routechange', {
        detail: { route: route }
      }));
    });
  }

  function navigateTo(route, options) {
    if (!ROUTE_CONFIG[route]) return;

    var settings = options || {};
    var sameRoute = routeState.active === route;

    if (sameRoute) {
      if (settings.push) writeRouteHash(route, 'replace');
      window.scrollTo({ top: 0, behavior: smoothBehavior() });
      updateScrollUI();
      return;
    }

    if (settings.push) writeRouteHash(route, 'push');
    applyRouteView(route, { scroll: true });
  }

  function handleRouteLocation() {
    var locationInfo = parseLocationHash(window.location.hash);

    if (locationInfo.route !== routeState.active) {
      applyRouteView(locationInfo.route, { scroll: true });
    }

    if (locationInfo.anchor) {
      window.requestAnimationFrame(function () {
        scrollToAnchor(locationInfo.anchor);
      });
    }
  }

  function handleRouteClick(event) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var link = event.target.closest('a[href]');
    if (!link) return;

    if (link.hasAttribute('data-scroll-top')) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: smoothBehavior() });
      return;
    }

    if (link.getAttribute('target') === '_blank') return;

    var href = link.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return;

    var raw = href.slice(1);
    if (raw.indexOf('!') === 0) raw = raw.slice(1);
    if (raw.indexOf('/') === 0) raw = raw.slice(1);

    var first = (raw.split('/')[0] || '').toLowerCase();
    if (!ROUTE_CONFIG[first]) return;

    event.preventDefault();
    navigateTo(first, { push: true });
  }

  function initRouter() {
    var locationInfo = parseLocationHash(window.location.hash);

    applyRouteView(locationInfo.route, { scroll: true });

    if (locationInfo.anchor) {
      window.requestAnimationFrame(function () {
        scrollToAnchor(locationInfo.anchor);
      });
    }

    window.addEventListener('popstate', handleRouteLocation);
    window.addEventListener('hashchange', handleRouteLocation);
    document.addEventListener('click', handleRouteClick);
  }

  /* ------------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------------ */

  function initMobileMenu() {
    var toggle = $('#menuToggle');
    var menu = $('#mobileMenu');
    if (!toggle || !menu) return;

    var lastFocused = null;

    function openMenu() {
      lastFocused = document.activeElement;
      menu.inert = false;
      menu.setAttribute('aria-hidden', 'false');
      menu.classList.add('is-open');
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', '关闭菜单');
      document.body.classList.add('menu-open');
      var firstLink = $('.mobile-menu__nav a', menu);
      if (firstLink) window.setTimeout(function () { firstLink.focus(); }, 80);
    }

    function closeMenu(restoreFocus) {
      if (!menu.classList.contains('is-open')) return;
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      menu.inert = true;
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '打开菜单');
      document.body.classList.remove('menu-open');
      if (restoreFocus !== false && lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    $$('[data-mobile-link]', menu).forEach(function (link) {
      link.addEventListener('click', function () { closeMenu(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        event.preventDefault();
        closeMenu();
      }
    });

    var desktopQuery = window.matchMedia('(min-width: 901px)');
    var onDesktopChange = function (event) {
      if (event.matches) closeMenu(false);
    };

    if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onDesktopChange);
    else if (desktopQuery.addListener) desktopQuery.addListener(onDesktopChange);
  }

  /* ------------------------------------------------------------------------
     Scroll progress, sticky header and back-to-top
     ------------------------------------------------------------------------ */

  var scrollUI = {
    progress: $('#scrollProgress'),
    backToTop: $('#backToTop'),
    frame: 0
  };

  function updateScrollUI() {
    scrollUI.frame = 0;

    var top = window.scrollY || window.pageYOffset;
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var progress = height > 0 ? clamp(top / height, 0, 1) : 0;

    if (scrollUI.progress) {
      scrollUI.progress.style.transform = 'scaleX(' + progress.toFixed(4) + ')';
    }

    if (navState.header) {
      navState.header.classList.toggle('is-scrolled', top > 8);
    }

    if (scrollUI.backToTop) {
      scrollUI.backToTop.classList.toggle('is-visible', top > window.innerHeight * 0.65);
    }
  }

  function queueScrollUI() {
    if (scrollUI.frame) return;
    scrollUI.frame = window.requestAnimationFrame(updateScrollUI);
  }

  function initScrollEffects() {
    window.addEventListener('scroll', queueScrollUI, { passive: true });
    window.addEventListener('resize', queueScrollUI);
    updateScrollUI();
  }

  function initBackToTop() {
    if (!scrollUI.backToTop) return;
    scrollUI.backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: smoothBehavior() });
    });
  }

  /* ------------------------------------------------------------------------
     Reveal & split text
     ------------------------------------------------------------------------ */

  function initReveal() {
    var targets = $$('[data-reveal]');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (target) { target.classList.add('is-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    targets.forEach(function (target) { observer.observe(target); });
  }

  function wrapCharacters(source, target, state) {
    Array.from(source.childNodes).forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        Array.from(node.nodeValue).forEach(function (character) {
          if (character === ' ' || character === '\n') {
            target.appendChild(document.createTextNode(character));
            return;
          }
          var wrapper = document.createElement('span');
          wrapper.className = 'split-char';
          var inner = document.createElement('span');
          inner.textContent = character;
          inner.style.transitionDelay = Math.min(state.index * 0.028, 0.42) + 's';
          wrapper.appendChild(inner);
          target.appendChild(wrapper);
          state.index += 1;
        });
        return;
      }

      if (node.nodeName === 'BR') {
        target.appendChild(document.createElement('br'));
        return;
      }

      var clone = node.cloneNode(false);
      target.appendChild(clone);
      wrapCharacters(node, clone, state);
    });
  }

  function splitHeading(element) {
    if (element.dataset.splitReady === 'true') return;

    var label = element.textContent.replace(/\s+/g, ' ').trim();
    var state = { index: 0 };
    var children = Array.from(element.childNodes);

    element.textContent = '';
    children.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        Array.from(node.nodeValue).forEach(function (character) {
          if (character === ' ' || character === '\n') {
            element.appendChild(document.createTextNode(character));
            return;
          }
          var wrapper = document.createElement('span');
          wrapper.className = 'split-char';
          var inner = document.createElement('span');
          inner.textContent = character;
          inner.style.transitionDelay = Math.min(state.index * 0.028, 0.42) + 's';
          wrapper.appendChild(inner);
          element.appendChild(wrapper);
          state.index += 1;
        });
        return;
      }

      if (node.nodeName === 'BR') {
        element.appendChild(document.createElement('br'));
        return;
      }

      var clone = node.cloneNode(false);
      element.appendChild(clone);
      wrapCharacters(node, clone, state);
    });

    element.dataset.splitReady = 'true';
    element.setAttribute('aria-label', label);
    element.dataset.splitLabel = label;

    if (prefersReducedMotion.matches) {
      element.classList.add('is-split-ready');
    }
  }

  function initSplitHeadings() {
    var headings = $$('[data-split]');
    if (!headings.length) return;

    headings.forEach(splitHeading);

    if (!('IntersectionObserver' in window)) {
      headings.forEach(function (heading) { heading.classList.add('is-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    headings.forEach(function (heading) { observer.observe(heading); });
  }

  /* ------------------------------------------------------------------------
     Hero canvas, glow and intro state
     ------------------------------------------------------------------------ */

  function initHero() {
    var hero = $('#home');
    if (!hero) return;

    var glow = $('#heroGlow');
    var canvas = $('#heroCanvas');

    window.requestAnimationFrame(function () {
      hero.classList.add('is-ready');
    });

    if (glow) {
      hero.addEventListener('pointermove', function (event) {
        var rect = hero.getBoundingClientRect();
        glow.style.left = (event.clientX - rect.left) + 'px';
        glow.style.top = (event.clientY - rect.top) + 'px';
        hero.classList.add('has-pointer');
      });

      hero.addEventListener('pointerleave', function () {
        hero.classList.remove('has-pointer');
      });
    }

    if (!canvas) return;

    var context = canvas.getContext('2d');
    if (!context) return;

    var state = {
      width: 0,
      height: 0,
      dpr: 1,
      particles: [],
      mouseX: -9999,
      mouseY: -9999,
      hasMouse: false,
      frame: 0,
      lineColor: [145, 180, 255],
      nodeColor: [80, 130, 235]
    };

    function readColors() {
      var styles = window.getComputedStyle(root);
      var line = styles.getPropertyValue('--particle-line').trim();
      var node = styles.getPropertyValue('--particle-node').trim();
      var parse = function (value, fallback) {
        var parts = value.split(',').map(function (item) { return Number(item.trim()); });
        return parts.length === 3 && parts.every(function (item) { return !isNaN(item); }) ? parts : fallback;
      };
      state.lineColor = parse(line, state.lineColor);
      state.nodeColor = parse(node, state.nodeColor);
    }

    function createParticles() {
      var count = Math.round(clamp(state.width / 19, 32, 92));
      state.particles = [];
      for (var i = 0; i < count; i += 1) {
        state.particles.push({
          x: Math.random() * state.width,
          y: Math.random() * state.height,
          vx: (Math.random() - 0.5) * 0.26,
          vy: (Math.random() - 0.5) * 0.26,
          radius: Math.random() * 1.5 + 0.7,
          alpha: Math.random() * 0.45 + 0.28
        });
      }
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      state.width = rect.width;
      state.height = rect.height;
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * state.dpr);
      canvas.height = Math.round(rect.height * state.dpr);
      context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      createParticles();
      if (prefersReducedMotion.matches) drawStatic();
    }

    function drawFrame(advance) {
      context.clearRect(0, 0, state.width, state.height);

      var particles = state.particles;
      var line = state.lineColor;
      var node = state.nodeColor;
      var i;
      var j;

      for (i = 0; i < particles.length; i += 1) {
        var particle = particles[i];

        if (advance && !prefersReducedMotion.matches) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -10) particle.x = state.width + 10;
          if (particle.x > state.width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = state.height + 10;
          if (particle.y > state.height + 10) particle.y = -10;
        }

        if (state.hasMouse && advance) {
          var dx = particle.x - state.mouseX;
          var dy = particle.y - state.mouseY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150 && distance > 0.1) {
            var force = (150 - distance) / 150 * 0.012;
            particle.x += dx / distance * force * 8;
            particle.y += dy / distance * force * 8;
          }
        }

        for (j = i + 1; j < particles.length; j += 1) {
          var other = particles[j];
          var lineX = particle.x - other.x;
          var lineY = particle.y - other.y;
          var gap = Math.sqrt(lineX * lineX + lineY * lineY);

          if (gap < 118) {
            var opacity = (1 - gap / 118) * 0.2;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = 'rgba(' + line[0] + ',' + line[1] + ',' + line[2] + ',' + opacity.toFixed(3) + ')';
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(' + node[0] + ',' + node[1] + ',' + node[2] + ',' + particle.alpha.toFixed(3) + ')';
        context.fill();
      }

      if (state.hasMouse && advance) {
        for (i = 0; i < particles.length; i += 1) {
          var nodeX = particles[i].x - state.mouseX;
          var nodeY = particles[i].y - state.mouseY;
          var nodeGap = Math.sqrt(nodeX * nodeX + nodeY * nodeY);
          if (nodeGap < 170) {
            context.beginPath();
            context.moveTo(state.mouseX, state.mouseY);
            context.lineTo(particles[i].x, particles[i].y);
            context.strokeStyle = 'rgba(' + line[0] + ',' + line[1] + ',' + line[2] + ',' + ((1 - nodeGap / 170) * 0.14).toFixed(3) + ')';
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }
    }

    function drawStatic() {
      drawFrame(false);
    }

    function tick() {
      drawFrame(true);
      state.frame = window.requestAnimationFrame(tick);
    }

    function start() {
      window.cancelAnimationFrame(state.frame);
      if (prefersReducedMotion.matches) {
        drawStatic();
        return;
      }
      tick();
    }

    hero.addEventListener('pointermove', function (event) {
      var rect = canvas.getBoundingClientRect();
      state.mouseX = event.clientX - rect.left;
      state.mouseY = event.clientY - rect.top;
      state.hasMouse = true;
    });

    hero.addEventListener('pointerleave', function () {
      state.hasMouse = false;
    });

    window.addEventListener('resize', function () {
      window.cancelAnimationFrame(state.frame);
      resize();
      start();
    });

    window.addEventListener('site:themechange', function () {
      readColors();
      if (prefersReducedMotion.matches) drawStatic();
    });

    window.addEventListener('site:routechange', function () {
      if (hero.hidden) {
        window.cancelAnimationFrame(state.frame);
        return;
      }

      window.setTimeout(function () {
        if (hero.hidden) return;
        resize();
        start();
      }, 80);
    });

    if (prefersReducedMotion.addEventListener) {
      prefersReducedMotion.addEventListener('change', function () {
        window.cancelAnimationFrame(state.frame);
        start();
      });
    }

    readColors();
    resize();
    start();
  }

  /* ------------------------------------------------------------------------
     Number counters & local clock
     ------------------------------------------------------------------------ */

  function animateCounter(element) {
    if (!element || element.dataset.counted === 'true') return;

    var target = Number(element.getAttribute('data-count')) || 0;
    var pad = Number(element.getAttribute('data-pad')) || 0;
    var suffix = element.getAttribute('data-suffix') || '';
    element.dataset.counted = 'true';

    function paint(value) {
      element.textContent = padNumber(value, pad) + suffix;
    }

    if (prefersReducedMotion.matches) {
      paint(target);
      return;
    }

    var startedAt = 0;
    var duration = 1250;

    function frame(now) {
      if (!startedAt) startedAt = now;
      var progress = clamp((now - startedAt) / duration, 0, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      paint(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
  }

  function initCounters() {
    var counters = $$('[data-count]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) { observer.observe(counter); });
  }

  function setHeroCityStat(count) {
    var element = $('#statCitiesValue');
    if (!element) return;
    element.setAttribute('data-count', String(count));
    if (element.dataset.counted === 'true') {
      var pad = Number(element.getAttribute('data-pad')) || 0;
      element.textContent = padNumber(count, pad);
    }
  }

  function initClock() {
    var element = $('#localTime');
    if (!element) return;

    var formatter;
    try {
      formatter = new Intl.DateTimeFormat('zh-CN', {
        timeZone: 'Asia/Shanghai',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch (error) {
      formatter = null;
    }

    function update() {
      var now = new Date();
      if (formatter) {
        element.textContent = formatter.format(now);
        return;
      }
      element.textContent = padNumber(now.getHours(), 2) + ':' + padNumber(now.getMinutes(), 2);
    }

    update();
    window.setInterval(update, 1000);
  }

  /* ------------------------------------------------------------------------
     Content rendering
     ------------------------------------------------------------------------ */

  var SITE_CONTENT = window.SITE_CONTENT || null;
  var CITY_DATA = window.CHINA_CITY_DATA || { provinces: [], cities: [] };
  var CITY_LOOKUP = new Map();

  CITY_DATA.cities.forEach(function (city) {
    CITY_LOOKUP.set(Number(city.adcode), city);
  });

  function setText(id, value) {
    var element = document.getElementById(id);
    if (element && value !== undefined && value !== null) element.textContent = value;
  }

  function setEyebrow(sectionId, index, label) {
    var section = document.getElementById(sectionId);
    if (!section) return;
    var indexElement = $('.eyebrow__index', section);
    var labelElement = $('.eyebrow > span:last-child', section);
    if (indexElement && index !== undefined) indexElement.textContent = index;
    if (labelElement && label) labelElement.textContent = label;
  }

  function navKeyFromHref(href) {
    if (!href) return '';
    var raw = href.replace(/^#/, '').replace(/^!?\/?/, '');
    return raw.split('/')[0];
  }

  function applyNavLabels() {
    if (!SITE_CONTENT || !SITE_CONTENT.nav) return;

    $$('.site-nav__link').forEach(function (link) {
      var key = link.getAttribute('data-nav');
      if (SITE_CONTENT.nav[key]) link.textContent = SITE_CONTENT.nav[key];
    });

    $$('.mobile-menu__nav a').forEach(function (link) {
      var key = navKeyFromHref(link.getAttribute('href'));
      if (!SITE_CONTENT.nav[key]) return;
      var number = link.querySelector('span');
      if (number) {
        link.childNodes.forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) {
            node.nodeValue = SITE_CONTENT.nav[key];
          }
        });
      } else {
        link.textContent = SITE_CONTENT.nav[key];
      }
    });

    $$('.site-footer__nav a').forEach(function (link) {
      var key = navKeyFromHref(link.getAttribute('href'));
      if (SITE_CONTENT.nav[key]) link.textContent = SITE_CONTENT.nav[key];
    });
  }

  function applyAvatar(element, image, fallback) {
    if (image) {
      element.classList.add('has-image');
      element.innerHTML = '<img src="' + escapeHTML(image) + '" alt="">';
      var img = element.querySelector('img');
      if (img) {
        img.addEventListener('error', function () {
          element.classList.remove('has-image');
          element.textContent = fallback || '';
        }, { once: true });
      }
    } else {
      element.classList.remove('has-image');
      element.textContent = fallback || '';
    }
  }

  function applyAvatarImages() {
    var profile = SITE_CONTENT.profile;
    $$('[data-brand-mark]').forEach(function (element) {
      applyAvatar(element, profile.avatarImage, profile.brandMark);
    });
    $$('[data-avatar]').forEach(function (element) {
      applyAvatar(element, profile.avatarImage, profile.avatarChar);
    });
  }

  function applyIdentity() {
    var profile = SITE_CONTENT.profile;
    if (!profile) return;

    $$('[data-brand-name]').forEach(function (element) { element.textContent = profile.name; });
    applyAvatarImages();
    $$('[data-brand-link]').forEach(function (link) {
      link.setAttribute('aria-label', profile.name + ' · 回到首页');
    });

    var title = $('#heroTitle');
    if (title) {
      title.setAttribute('aria-label', profile.name);
      title.innerHTML = Array.from(profile.name).map(function (character) {
        return '<span class="hero__char"><span>' + escapeHTML(character) + '</span></span>';
      }).join('');
    }

    var heroEyebrow = $('#heroEyebrow');
    if (heroEyebrow) {
      heroEyebrow.innerHTML = (profile.eyebrow || []).map(function (item) {
        return '<span>' + escapeHTML(item) + '</span>';
      }).join('<i aria-hidden="true">·</i>');
    }

    var heroRole = $('#heroRole');
    if (heroRole) {
      heroRole.innerHTML = '<span></span>' + escapeHTML(profile.role) + '<span></span>';
    }

    setText('heroLead', profile.lead);

    var heroTags = $('#heroTags');
    if (heroTags) {
      heroTags.innerHTML = (profile.tags || []).map(function (tag) {
        return '<li>' + escapeHTML(tag) + '</li>';
      }).join('');
    }

    var yearsValue = $('#statYearsValue');
    if (yearsValue) {
      yearsValue.setAttribute('data-count', String(profile.years || 0));
      yearsValue.textContent = padNumber(profile.years || 0, 2) + '+';
    }

    var postsValue = $('#statPostsValue');
    if (postsValue) {
      postsValue.setAttribute('data-count', String(POSTS.length));
      postsValue.textContent = padNumber(POSTS.length, 2);
    }

    setText('statYearsLabel', profile.labels && profile.labels.years);
    setText('statPostsLabel', profile.labels && profile.labels.posts);
    setText('statCitiesLabel', profile.labels && profile.labels.cities);

    var emailValue = 'mailto:' + profile.email;
    $$('[data-social="github"]').forEach(function (link) {
      link.href = profile.github;
      link.setAttribute('data-tip', SITE_CONTENT.home.socialTips ? SITE_CONTENT.home.socialTips.github : '代码仓库');
      link.setAttribute('aria-label', '打开' + (profile.name || '') + '的代码仓库');
    });
    $$('[data-social="email"]').forEach(function (button) {
      button.setAttribute('data-copy', profile.email);
      button.setAttribute('data-tip', SITE_CONTENT.home.socialTips ? SITE_CONTENT.home.socialTips.email : '复制邮箱');
      button.setAttribute('aria-label', '复制邮箱');
    });
    $$('[data-social="wechat"]').forEach(function (button) {
      button.setAttribute('data-copy', profile.wechat);
      button.setAttribute('data-tip', SITE_CONTENT.home.socialTips ? SITE_CONTENT.home.socialTips.wechat : '复制微信');
    });

    setText('heroScrollLabel', SITE_CONTENT.home.scrollLabel);

    setText('mobileMenuTagline', profile.mobileTagline);
    var mobileEmail = $('#mobileMenuEmail');
    if (mobileEmail) {
      mobileEmail.href = emailValue;
      mobileEmail.textContent = profile.email;
    }
    var mobileGithub = $('#mobileMenuGithub');
    if (mobileGithub) {
      mobileGithub.href = profile.github;
      mobileGithub.textContent = SITE_CONTENT.footer.githubLabel || '代码仓库';
    }
    var mobileWechat = $('#mobileMenuWechat');
    if (mobileWechat) {
      mobileWechat.setAttribute('data-copy', profile.wechat);
      mobileWechat.textContent = SITE_CONTENT.footer.wechatLabel || '复制微信';
    }
  }

  function renderMarkedText(text) {
    return escapeHTML(text || '')
      .replace(/\*\*([^*]+)\*\*/g, '<span class="mark">$1</span>')
      .replace(/\n/g, '<br>');
  }

  function parseLabeledLines(text) {
    return String(text || '').split(/\r?\n/).map(function (line) {
      return line.trim();
    }).filter(Boolean).map(function (line) {
      var index = line.indexOf('：');
      if (index < 0) index = line.indexOf(':');
      if (index < 0) return { label: '', value: line, live: false };
      var label = line.slice(0, index).trim();
      var value = line.slice(index + 1).trim();
      return {
        label: label,
        value: value,
        live: /时间/.test(label) && (value === '--:--' || value === '')
      };
    });
  }

  function renderAboutContent() {
    var about = SITE_CONTENT.about;
    if (!about) return;

    setEyebrow('about', about.eyebrowIndex, about.eyebrowLabel);

    var statement = $('#aboutTitle');
    if (statement) {
      if (about.statementText) {
        statement.innerHTML = renderMarkedText(about.statementText);
      } else if (about.statement) {
        var one = about.statement.line1;
        var two = about.statement.line2;
        statement.innerHTML =
          escapeHTML(one.before) + '<span class="mark">' + escapeHTML(one.mark) + '</span>' + escapeHTML(one.after) +
          '<br>' +
          escapeHTML(two.before) + '<span class="mark">' + escapeHTML(two.mark) + '</span>' + escapeHTML(two.after);
      }
    }

    var copy = $('#aboutCopy');
    if (copy) {
      copy.innerHTML = (about.paragraphs || []).map(function (paragraph) {
        return '<p>' + escapeHTML(paragraph) + '</p>';
      }).join('');
    }

    var signature = $('#aboutSignature');
    if (signature) {
      signature.innerHTML = escapeHTML(SITE_CONTENT.profile.name) + ' <span>' + escapeHTML(about.signatureMeta) + '</span>';
    }

    setText('nowLabel', about.nowLabel);
    var nowStatus = $('#nowStatus');
    if (nowStatus) {
      nowStatus.innerHTML = '<i aria-hidden="true"></i>' + escapeHTML(SITE_CONTENT.profile.status || '');
    }

    var nowList = $('#nowList');
    if (nowList) {
      nowList.innerHTML = '';
      var nowItems = about.nowText ? parseLabeledLines(about.nowText) : (about.nowItems || []);
      nowItems.forEach(function (item) {
        var li = document.createElement('li');
        var label = document.createElement('span');
        label.textContent = item.label;
        var value = document.createElement('strong');
        if (item.live) {
          value.id = 'localTime';
          value.textContent = '--:--';
        } else {
          value.textContent = item.value;
        }
        li.appendChild(label);
        li.appendChild(value);
        nowList.appendChild(li);
      });
    }

    setText('nowCoordinates', SITE_CONTENT.profile.coordinates);

    var principles = $('#principles');
    if (principles) {
      principles.innerHTML = '';
      var principleItems = about.principlesText
        ? parseLabeledLines(about.principlesText)
        : (about.principles || []);
      principleItems.forEach(function (principle, index) {
        var article = document.createElement('article');
        article.className = 'principle';
        article.setAttribute('data-reveal', '');
        article.innerHTML =
          '<span class="principle__index">' + padNumber(index + 1, 2) + '</span>' +
          '<h3>' + escapeHTML(principle.label || principle.title) + '</h3>' +
          '<p>' + escapeHTML(principle.value || principle.text) + '</p>';
        principles.appendChild(article);
      });
    }

    var marquee = $('#marqueeTrack');
    if (marquee) {
      var items = about.marquee || [];
      var markup = items.map(function (item) {
        return '<span>' + escapeHTML(item) + '</span><i></i>';
      }).join('');
      marquee.innerHTML = markup + markup;
    }
  }

  function renderBlogShell() {
    var blog = SITE_CONTENT.blog;
    if (!blog) return;

    setEyebrow('blog', blog.eyebrowIndex, blog.eyebrowLabel);
    setText('blogTitle', blog.title);
    setText('blogDescription', blog.description);

    var aside = $('#postAside');
    if (aside) {
      aside.innerHTML = escapeHTML(blog.asideBefore) + ' <strong id="postCount">' + POSTS.length + '</strong> ' +
        escapeHTML(blog.asideAfter);
    }

    var updated = $('#blogUpdated');
    if (updated) {
      var latest = POSTS[0];
      updated.textContent = latest ? '最近更新 · ' + latest.dateLabel : '最近更新 · 暂无';
    }

    setText('readerAuthor', SITE_CONTENT.profile.name);
    setText('readerSignature', blog.readerSignature);
    applyAvatarImages();
  }

  function renderFootprintsShell() {
    var footprints = SITE_CONTENT.footprints;
    if (!footprints) return;

    var labels = footprints.labels || {};
    setEyebrow('footprints', footprints.eyebrowIndex, footprints.eyebrowLabel);
    setText('footprintsTitle', footprints.title);
    setText('mapTitle', footprints.mapTitle);
    setText('mapSubtitle', footprints.mapSubtitle);
    setText('mapHint', labels.mapHint);
    setText('resetMap', labels.reset);
    setText('legendLit', labels.lit);
    setText('legendIdle', labels.idle);
    setText('legendHome', labels.home);
    setText('overviewTitle', labels.overviewTitle);
    setText('overviewProvinceLabel', labels.province);
    setText('overviewCityLabel', labels.city);
    setText('overviewYearLabel', labels.year);
    setText('statYear', footprints.overviewYears);
    setText('chipTitle', labels.chipTitle);
    setText('chipHint', labels.chipHint);
    setText('memorySectionLabel', labels.memoryTitle);
    setText('memorySectionAside', labels.memoryAside);

    var description = $('#footprints .section-desc');
    if (description) description.textContent = footprints.description;

    var disclaimer = $('#mapDisclaimer');
    if (disclaimer) {
      disclaimer.textContent = footprints.disclaimer || '';
      disclaimer.hidden = !footprints.disclaimer;
    }
  }

  function renderSkillGroups() {
    var container = $('#skillGroups');
    if (!container || !SITE_CONTENT.skills) return;

    container.innerHTML = '';
    (SITE_CONTENT.skills.groups || []).forEach(function (group, groupIndex) {
      var section = document.createElement('section');
      section.className = 'skill-group';
      var headingId = 'skillGroup' + groupIndex;
      section.setAttribute('aria-labelledby', headingId);

      var head = document.createElement('div');
      head.className = 'skill-group__head';
      head.innerHTML = '<span>' + padNumber(groupIndex + 1, 2) + '</span>' +
        '<h3 id="' + headingId + '">' + escapeHTML(group.title) + '</h3><i aria-hidden="true"></i>';

      var list = document.createElement('ul');
      list.className = 'skill-list';

      (group.skills || []).forEach(function (skill) {
        var level = clamp(Number(skill.level) || 0, 0, 100);
        var item = document.createElement('li');
        item.className = 'skill';
        item.style.setProperty('--level', level + '%');
        item.innerHTML =
          '<div class="skill__row"><span class="skill__name">' + escapeHTML(skill.name) + '</span>' +
          '<span class="skill__value">' + level + '</span></div>' +
          '<span class="skill__track" aria-hidden="true"><i class="skill__bar"></i></span>' +
          '<p class="skill__note">' + escapeHTML(skill.note || '') + '</p>';
        list.appendChild(item);
      });

      section.appendChild(head);
      section.appendChild(list);
      container.appendChild(section);
    });
  }

  function renderToolbox() {
    var toolbox = $('#toolbox');
    if (!toolbox || !SITE_CONTENT.skills) return;

    var tags = function (items) {
      return (items || []).map(function (item) {
        return '<li>' + escapeHTML(item) + '</li>';
      }).join('');
    };

    toolbox.innerHTML =
      '<div class="toolbox__block">' +
        '<p class="panel-label">' + escapeHTML(SITE_CONTENT.skills.toolbox.label) + '</p>' +
        '<ul class="tag-cloud">' + tags(SITE_CONTENT.skills.toolbox.items) + '</ul>' +
      '</div>' +
      '<div class="toolbox__block toolbox__block--explore">' +
        '<p class="panel-label">' + escapeHTML(SITE_CONTENT.skills.explore.label) + '</p>' +
        '<ul class="tag-cloud tag-cloud--accent">' + tags(SITE_CONTENT.skills.explore.items) + '</ul>' +
      '</div>';
  }

  function renderTechGroups() {
    var container = $('#techGroups');
    if (!container || !SITE_CONTENT.skills) return;

    var groups = SITE_CONTENT.skills.groups || [];
    container.innerHTML = groups.map(function (group, index) {
      var chips = (group.items || []).map(function (item) {
        return '<li>' + escapeHTML(item) + '</li>';
      }).join('');

      return '<article class="tech-card">' +
        '<div class="tech-card__head">' +
          '<span class="tech-card__index">' + padNumber(index + 1, 2) + '</span>' +
          '<div><h3>' + escapeHTML(group.title) + '</h3>' +
            '<p>' + escapeHTML(group.note || '') + '</p></div>' +
        '</div>' +
        '<ul class="tech-chips">' + chips + '</ul>' +
      '</article>';
    }).join('');
  }

  function renderProjects() {
    var container = $('#projectBoard');
    if (!container || !SITE_CONTENT.skills) return;

    var projects = SITE_CONTENT.skills.projects || [];
    container.innerHTML = projects.map(function (project, index) {
      var stack = (project.stack || []).map(function (item) {
        return '<li>' + escapeHTML(item) + '</li>';
      }).join('');

      var duties = (project.responsibilities || []).map(function (item) {
        return '<li>' + escapeHTML(item) + '</li>';
      }).join('');

      return '<article class="project-proof">' +
        '<div class="project-proof__main">' +
          '<div class="project-proof__meta">' +
            '<span class="project-proof__tag">' + escapeHTML(project.tag || '项目实践') + '</span>' +
            '<span>' + escapeHTML(project.date || '') + '</span>' +
            '<span>PROJECT ' + padNumber(index + 1, 2) + '</span>' +
          '</div>' +
          '<h3>' + escapeHTML(project.title) + '</h3>' +
          '<p class="project-proof__desc">' + escapeHTML(project.description || '') + '</p>' +
          '<div class="project-proof__stack">' +
            '<span class="panel-label">技术栈</span>' +
            '<ul class="tag-cloud tag-cloud--compact">' + stack + '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="project-proof__side">' +
          '<span class="panel-label">项目职责</span>' +
          '<ol class="project-proof__duties">' + duties + '</ol>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderSkillsContent() {
    var skills = SITE_CONTENT.skills;
    if (!skills) return;

    setEyebrow('skills', skills.eyebrowIndex, skills.eyebrowLabel);
    setText('skillsTitle', skills.title);
    setText('skillsAside', skills.aside);
    setText('skillsDescription', skills.description);

    renderTechGroups();
    renderProjects();
    renderToolbox();
  }

  function renderContactContent() {
    var contact = SITE_CONTENT.contact;
    if (!contact) return;
    var profile = SITE_CONTENT.profile;
    var email = profile.email;

    setEyebrow('contact', contact.eyebrowIndex, contact.eyebrowLabel);
    var title = $('#contactTitle');
    if (title) {
      title.innerHTML = escapeHTML(contact.titleLine1) + '<br>' + escapeHTML(contact.titleLine2);
    }
    setText('contactDescription', contact.description);

    var copyButton = $('#contactCopy');
    if (copyButton) {
      copyButton.setAttribute('data-copy', email);
      copyButton.textContent = contact.copyAction;
    }

    var status = $('#contactStatus');
    if (status) {
      status.innerHTML = '<i aria-hidden="true"></i><span>' + escapeHTML(contact.status) + '</span>';
    }
    setText('contactName', profile.name);
    setText('contactRole', profile.role);
    setText('contactEmailLabel', contact.labels.email);
    setText('contactGithubLabel', contact.labels.github);
    setText('contactWechatLabel', contact.labels.wechat);

    var emailLink = $('#contactEmail');
    if (emailLink) {
      emailLink.href = 'mailto:' + email;
      emailLink.textContent = email;
    }
    var githubLink = $('#contactGithub');
    if (githubLink) {
      githubLink.href = profile.github;
      githubLink.textContent = contact.githubText;
    }
    var wechatButton = $('#contactWechat');
    if (wechatButton) {
      wechatButton.setAttribute('data-copy', profile.wechat);
      wechatButton.textContent = profile.wechat;
    }
    setText('contactQuote', contact.quote);

    applyAvatarImages();
  }

  function renderFooterContent() {
    var footer = SITE_CONTENT.footer;
    var profile = SITE_CONTENT.profile;
    if (!footer || !profile) return;

    setText('footerBrandDescription', footer.brandDescription);
    setText('footerBrowseLabel', footer.browseLabel);
    setText('footerFindLabel', footer.findLabel);
    setText('footerCopyright', footer.copyright);
    setText('footerTopLabel', footer.topLabel);

    var footerNav = $('.site-footer__nav');
    if (footerNav) {
      $$('a', footerNav).forEach(function (link) {
        var key = navKeyFromHref(link.getAttribute('href'));
        if (SITE_CONTENT.nav[key]) link.textContent = SITE_CONTENT.nav[key];
      });
    }

    var elsewhere = $('.site-footer__elsewhere');
    if (elsewhere) {
      var github = $('a[href^="https://github"]', elsewhere);
      if (github) {
        github.href = profile.github;
        github.textContent = footer.githubLabel;
      }
      var mail = $('a[href^="mailto:"]', elsewhere);
      if (mail) {
        mail.href = 'mailto:' + profile.email;
        mail.textContent = footer.emailLabel;
      }
      var wechat = $('button[data-copy]', elsewhere);
      if (wechat) {
        wechat.setAttribute('data-copy', profile.wechat);
        wechat.textContent = footer.wechatLabel;
      }
    }
  }

  function initContent() {
    if (!SITE_CONTENT || !SITE_CONTENT.profile) return;

    var profile = SITE_CONTENT.profile;
    var pageName = profile.name || '个人网站';
    ROUTE_CONFIG.home.title = pageName + ' · ' + (profile.role || '独立开发者');
    ROUTE_CONFIG.blog.title = '博客 · ' + pageName;
    ROUTE_CONFIG.footprints.title = '我的足迹 · ' + pageName;
    ROUTE_CONFIG.skills.title = '专业技能 · ' + pageName;

    POSTS = (SITE_CONTENT.blog.posts || []).slice().sort(function (a, b) {
      return String(b.date || '').localeCompare(String(a.date || ''));
    });
    BLOG_CATEGORIES = (SITE_CONTENT.blog.categories || []).slice();

    applyNavLabels();
    applyIdentity();
    renderAboutContent();
    renderBlogShell();
    renderFootprintsShell();
    renderSkillsContent();
    renderContactContent();
    renderFooterContent();
  }

  /* ------------------------------------------------------------------------
     Blog data
     ------------------------------------------------------------------------ */

  var POSTS = [];

  var BLOG_CATEGORIES = [];

  /* ------------------------------------------------------------------------
     Blog artwork
     ------------------------------------------------------------------------ */

  function renderArtwork(kind) {
    var open = '<svg class="thumb-svg" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" role="presentation" focusable="false">';
    var close = '</svg>';
    var art = '';

    if (kind === 'grid') {
      art = '<rect class="art-fill" x="24" y="24" width="120" height="48" rx="10"/>' +
        '<rect class="art-fill-strong" x="156" y="24" width="140" height="48" rx="10"/>' +
        '<rect class="art-fill" x="24" y="86" width="78" height="70" rx="10"/>' +
        '<rect class="art-fill-strong" x="114" y="86" width="182" height="32" rx="10"/>' +
        '<rect class="art-fill" x="114" y="126" width="182" height="30" rx="10"/>' +
        '<path class="art-line" fill="none" d="M38 40h70M38 52h46M24 74h272M130 102h86M130 140h58"/>' +
        '<circle class="art-coral" cx="274" cy="48" r="4"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="1.4" d="M252 96h26v22h-26z"/>';
    } else if (kind === 'tokens') {
      art = '<rect class="art-fill" x="28" y="26" width="264" height="128" rx="14"/>' +
        '<circle class="art-accent" cx="68" cy="64" r="16"/>' +
        '<circle class="art-accent" cx="112" cy="64" r="16" fill-opacity="0.72"/>' +
        '<circle class="art-accent" cx="156" cy="64" r="16" fill-opacity="0.46"/>' +
        '<circle class="art-accent" cx="200" cy="64" r="16" fill-opacity="0.24"/>' +
        '<circle class="art-accent" cx="244" cy="64" r="16" fill-opacity="0.1"/>' +
        '<path class="art-line" fill="none" d="M52 104h216M52 116h164M52 128h100"/>' +
        '<circle class="art-coral" cx="252" cy="128" r="4"/>';
    } else if (kind === 'motion') {
      art = '<path class="art-line" fill="none" d="M34 144h254M34 144V26"/>' +
        '<path class="art-line" fill="none" stroke-dasharray="3 7" d="M34 144L148 62L286 62"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="2.2" d="M48 136C102 136 96 52 168 52S242 112 286 112"/>' +
        '<circle class="art-accent" cx="48" cy="136" r="4.5"/>' +
        '<circle class="art-coral" cx="286" cy="112" r="4.5"/>' +
        '<rect class="art-fill-strong" x="160" y="132" width="52" height="4" rx="2"/>';
    } else if (kind === 'type') {
      art = '<text class="art-ink" x="34" y="116" font-family="Georgia, serif" font-size="84" font-weight="600">Aa</text>' +
        '<path class="art-line" fill="none" d="M34 128h154M34 46h154"/>' +
        '<rect class="art-fill" x="216" y="34" width="72" height="7" rx="3.5"/>' +
        '<rect class="art-fill" x="216" y="52" width="60" height="7" rx="3.5"/>' +
        '<rect class="art-fill" x="216" y="70" width="48" height="7" rx="3.5"/>' +
        '<rect class="art-accent" x="216" y="102" width="46" height="30" rx="8"/>' +
        '<path class="art-stroke-muted" fill="none" stroke-width="1.2" d="M216 146h72"/>';
    } else if (kind === 'gauge') {
      art = '<path class="art-line" fill="none" d="M68 126a92 92 0 0 1 184 0"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="2.4" d="M84 126a76 76 0 0 1 122-60"/>' +
        '<path class="art-stroke-muted" fill="none" stroke-width="1.2" d="M126 126a34 34 0 0 1 68 0"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="1.7" d="M160 126L206 76"/>' +
        '<circle class="art-coral" cx="206" cy="76" r="4.5"/>' +
        '<circle class="art-accent" cx="160" cy="126" r="4"/>' +
        '<rect class="art-fill" x="54" y="144" width="54" height="4" rx="2"/>' +
        '<rect class="art-fill-strong" x="118" y="144" width="44" height="4" rx="2"/>' +
        '<rect class="art-fill" x="172" y="144" width="34" height="4" rx="2"/>';
    } else if (kind === 'keyboard') {
      art = '<rect class="art-fill" x="36" y="112" width="70" height="34" rx="9"/>' +
        '<rect class="art-fill-strong" x="118" y="112" width="70" height="34" rx="9"/>' +
        '<rect class="art-fill" x="200" y="112" width="70" height="34" rx="9"/>' +
        '<rect class="art-accent" x="118" y="48" width="70" height="34" rx="9" fill-opacity="0.16"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="1.4" d="M108 40h90v50h-90z"/>' +
        '<path class="art-line" fill="none" d="M56 129h30M138 129h30M220 129h30"/>' +
        '<circle class="art-coral" cx="84" cy="76" r="4"/>';
    } else if (kind === 'map') {
      art = '<path class="art-line" fill="none" stroke-dasharray="3 6" d="M44 104L92 62L146 88L196 48L252 82L286 54"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="1.5" d="M70 42c18 10 30 6 44 18s-4 30 10 46 34 8 46 20"/>' +
        '<circle class="art-fill-strong" cx="44" cy="104" r="6"/>' +
        '<circle class="art-fill-strong" cx="92" cy="62" r="6"/>' +
        '<circle class="art-fill-strong" cx="146" cy="88" r="6"/>' +
        '<circle class="art-fill-strong" cx="196" cy="48" r="6"/>' +
        '<circle class="art-fill-strong" cx="252" cy="82" r="6"/>' +
        '<circle class="art-coral" cx="286" cy="54" r="7"/>' +
        '<circle class="art-coral" cx="286" cy="54" r="12" fill="none" stroke="currentColor" stroke-opacity="0.25"/>';
    } else if (kind === 'rain') {
      art = '<rect class="art-fill" x="32" y="24" width="256" height="132" rx="14"/>' +
        '<path class="art-stroke-muted" fill="none" stroke-width="1.2" d="M32 62h256M148 62v94"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="1.4" d="M56 76v34M78 88v44M100 70v26M122 96v32"/>' +
        '<path class="art-line" fill="none" d="M54 138h60M168 138h74"/>' +
        '<circle class="art-coral" cx="222" cy="88" r="9"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="1.2" d="M222 72v-8M238 88h8M206 88h-8"/>';
    } else {
      art = '<rect class="art-fill" x="28" y="26" width="264" height="128" rx="14"/>' +
        '<path class="art-line" fill="none" d="M28 58h264"/>' +
        '<circle class="art-coral" cx="46" cy="42" r="3"/>' +
        '<circle class="art-accent" cx="58" cy="42" r="3" fill-opacity="0.55"/>' +
        '<circle class="art-accent" cx="70" cy="42" r="3" fill-opacity="0.25"/>' +
        '<path class="art-stroke-accent" fill="none" stroke-width="1.4" d="M48 78h70M48 92h44M136 78h52M136 92h68M48 108h34"/>' +
        '<rect class="art-fill-strong" x="48" y="124" width="150" height="4" rx="2"/>' +
        '<circle class="art-coral" cx="252" cy="94" r="5"/>';
    }

    return open + art + close;
  }

  /* ------------------------------------------------------------------------
     Blog interactions
     ------------------------------------------------------------------------ */

  var ICON_CALENDAR = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M4 9h16M8 3v4M16 3v4"></path></svg>';
  var ICON_CLOCK = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v4l3 2"></path></svg>';
  var ICON_ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';

  var blogState = {
    category: '全部',
    visible: 5,
    rendered: 0,
    previousFocus: null,
    closeTimer: 0,
    scrollFrame: 0
  };

  var BLOG_PAGE_SIZE = 5;
  var BLOG_STEP = 4;

  function filteredPosts() {
    if (blogState.category === '全部') return POSTS;
    return POSTS.filter(function (post) { return post.category === blogState.category; });
  }

  function renderBlogFilters() {
    var container = $('#blogFilters');
    if (!container) return;

    var items = [{ name: '全部', count: POSTS.length }].concat(BLOG_CATEGORIES.map(function (category) {
      return {
        name: category,
        count: POSTS.filter(function (post) { return post.category === category; }).length
      };
    }));

    container.innerHTML = '';
    items.forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'filter-button';
      button.setAttribute('data-filter', item.name);
      button.setAttribute('aria-pressed', 'false');
      button.innerHTML = escapeHTML(item.name) + '<span class="filter-count">' + padNumber(item.count, 2) + '</span>';
      container.appendChild(button);
    });

    syncFilterButtons();
  }

  function syncFilterButtons() {
    $$('.filter-button', $('#blogFilters')).forEach(function (button) {
      var active = button.getAttribute('data-filter') === blogState.category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function buildPostCard(post, index) {
    var excerpt = post.excerpt;
    if (!excerpt && window.JXMarkdown && post.markdown) {
      var plain = window.JXMarkdown.plainText(post.markdown);
      excerpt = plain.slice(0, 86) + (plain.length > 86 ? '…' : '');
    }

    var card = document.createElement('article');
    card.className = 'post-card is-entering';
    card.setAttribute('data-post-id', post.id);
    card.style.setProperty('--i', String(index));

    card.innerHTML =
      '<div class="post-card__body">' +
        '<a class="post-card__title" href="#post/' + post.slug + '" data-post-link="' + post.id + '">' +
          escapeHTML(post.title) + ICON_ARROW +
        '</a>' +
        '<p class="post-card__excerpt">' + escapeHTML(excerpt) + '</p>' +
        '<ul class="post-card__meta">' +
          '<li>' + ICON_CALENDAR + escapeHTML(post.dateLabel) + '</li>' +
          '<li>' + ICON_CLOCK + post.read + ' 分钟阅读</li>' +
          '<li class="post-card__category">' + escapeHTML(post.category) + '</li>' +
        '</ul>' +
      '</div>' +
      '<div class="post-card__thumb" aria-hidden="true">' +
        '<span class="thumb-index">NO.' + padNumber(index + 1, 2) + '</span>' +
        '<span class="thumb-glyph">' + escapeHTML(post.glyph) + '</span>' +
        renderArtwork(post.art) +
      '</div>' +
      '<span class="post-card__arrow" aria-hidden="true">' + ICON_ARROW + '</span>';

    return card;
  }

  function updateBlogFooter(posts) {
    var loadMore = $('#loadMore');
    var status = $('#postStatus');

    if (loadMore) {
      var remaining = posts.length - blogState.rendered;
      if (remaining > 0) {
        loadMore.hidden = false;
        var readMoreLabel = (SITE_CONTENT && SITE_CONTENT.blog && SITE_CONTENT.blog.readMore) || '继续往下读';
        loadMore.innerHTML = escapeHTML(readMoreLabel) + '<span class="btn__count">' + padNumber(Math.min(BLOG_STEP, remaining), 2) + '</span>';
      } else {
        loadMore.hidden = true;
      }
    }

    if (status) {
      if (posts.length === 0) {
        status.textContent = '这个分类还没有文章，换一个看看。';
      } else if (blogState.rendered >= posts.length) {
        status.textContent = '已经读到这个分类的最后一篇 · 共 ' + posts.length + ' 篇';
      } else {
        status.textContent = (blogState.category === '全部' ? '全部文章' : '分类 · ' + blogState.category) +
          ' · 已显示 ' + blogState.rendered + ' / ' + posts.length + ' 篇';
      }
    }
  }

  function renderBlog(reset) {
    var list = $('#postList');
    if (!list) return;

    var posts = filteredPosts();

    if (reset) {
      list.innerHTML = '';
      blogState.rendered = 0;
      blogState.visible = Math.min(BLOG_PAGE_SIZE, Math.max(posts.length, 0));
      syncFilterButtons();
    }

    if (!posts.length) {
      if (!list.querySelector('.post-list__empty')) {
        var empty = document.createElement('div');
        empty.className = 'post-list__empty';
        empty.textContent = (SITE_CONTENT && SITE_CONTENT.blog && SITE_CONTENT.blog.emptyText) ||
          '这个分类还在酝酿中。先去看看别的故事吧。';
        list.appendChild(empty);
      }
      updateBlogFooter(posts);
      return;
    }

    var emptyState = list.querySelector('.post-list__empty');
    if (emptyState) emptyState.remove();

    var target = Math.min(blogState.visible, posts.length);
    var startIndex = blogState.rendered;

    for (var i = startIndex; i < target; i += 1) {
      list.appendChild(buildPostCard(posts[i], i));
    }

    blogState.rendered = target;

    if (reset) {
      window.requestAnimationFrame(function () {
        $$('.post-card.is-entering', list).forEach(function (card, index) {
          card.style.setProperty('--i', String(index));
        });
      });
    }

    updateBlogFooter(posts);
  }

  function initFilterEvents() {
    var filters = $('#blogFilters');
    if (!filters) return;

    filters.addEventListener('click', function (event) {
      var button = event.target.closest('.filter-button');
      if (!button) return;

      var category = button.getAttribute('data-filter');
      if (!category || category === blogState.category) return;

      blogState.category = category;
      blogState.visible = BLOG_PAGE_SIZE;
      renderBlog(true);
    });
  }

  function initPostEvents() {
    var list = $('#postList');
    var loadMore = $('#loadMore');

    if (list) {
      list.addEventListener('click', function (event) {
        var link = event.target.closest('a[data-post-link]');
        if (link) {
          event.preventDefault();
          openReaderById(link.getAttribute('data-post-link'), true);
          return;
        }

        var card = event.target.closest('.post-card');
        if (card) openReaderById(card.getAttribute('data-post-id'), true);
      });
    }

    if (loadMore) {
      loadMore.addEventListener('click', function () {
        blogState.visible += BLOG_STEP;
        renderBlog(false);
      });
    }
  }

  /* ------------------------------------------------------------------------
     Reader dialog
     ------------------------------------------------------------------------ */

  function populateReader(post) {
    var category = $('#readerCategory');
    var title = $('#readerTitle');
    var excerpt = $('#readerExcerpt');
    var meta = $('#readerMeta');
    var cover = $('#readerCover');
    var body = $('#readerBody');
    var tags = $('#readerTags');

    if (category) category.textContent = post.category;
    if (title) title.textContent = post.title;
    if (excerpt) excerpt.textContent = post.excerpt;
    if (meta) {
      meta.innerHTML = '<span>' + escapeHTML(post.dateLabel) + '</span>' +
        '<span>' + post.read + ' 分钟阅读</span>' +
        '<span>' + escapeHTML((SITE_CONTENT && SITE_CONTENT.profile && SITE_CONTENT.profile.name) || '江旭') + '</span>';
    }
    if (cover) cover.innerHTML = renderArtwork(post.art);
    if (body) {
      body.innerHTML = window.JXMarkdown ? window.JXMarkdown.render(post.markdown || '') : '';
    }
    if (tags) {
      tags.innerHTML = '';
      post.tags.forEach(function (tag) {
        var chip = document.createElement('span');
        chip.textContent = tag;
        tags.appendChild(chip);
      });
    }
  }

  function setReaderProgress() {
    var scroll = $('#readerScroll');
    var bar = $('#readerProgress');
    if (!scroll || !bar) return;

    var max = scroll.scrollHeight - scroll.clientHeight;
    var progress = max > 0 ? clamp(scroll.scrollTop / max, 0, 1) : 0;
    bar.style.transform = 'scaleX(' + progress.toFixed(4) + ')';
    blogState.scrollFrame = 0;
  }

  function requestReaderProgress() {
    if (blogState.scrollFrame) return;
    blogState.scrollFrame = window.requestAnimationFrame(setReaderProgress);
  }

  function findPost(id) {
    return POSTS.find(function (post) { return post.id === id; }) ||
      POSTS.find(function (post) { return post.slug === id; }) || null;
  }

  function writePostHash(post, push) {
    var hash = '#/blog/post/' + post.slug;
    try {
      if (push) window.history.pushState({ post: post.id }, '', hash);
      else window.history.replaceState({ post: post.id }, '', hash);
    } catch (error) {
      /* file:// 等环境下 history API 可能受限，退化为不写地址 */
    }
  }

  function clearPostHash() {
    try {
      window.history.replaceState({ route: 'blog' }, '', '#/blog');
    } catch (error) {
      /* 地址栏保持不变即可 */
    }
  }

  function openReaderById(id, pushHash) {
    var post = findPost(id);
    if (post) openReader(post, pushHash !== false);
  }

  function openReader(post, pushHash) {
    var reader = $('#reader');
    if (!reader || !post) return;

    window.clearTimeout(blogState.closeTimer);
    reader.classList.remove('is-closing');

    populateReader(post);

    if (!reader.open) {
      blogState.previousFocus = document.activeElement;
      try {
        reader.showModal();
      } catch (error) {
        return;
      }
      document.body.classList.add('reader-open');
    }

    var scroll = $('#readerScroll');
    var bar = $('#readerProgress');
    if (scroll) scroll.scrollTop = 0;
    if (bar) bar.style.transform = 'scaleX(0)';

    if (pushHash) writePostHash(post, true);

    window.requestAnimationFrame(function () {
      var backButton = $('#readerBack');
      if (backButton) backButton.focus({ preventScroll: true });
    });

    document.documentElement.classList.add('reader-active');
  }

  function closeReader(clearHash) {
    var reader = $('#reader');
    if (!reader || !reader.open) return;

    reader.classList.add('is-closing');
    window.clearTimeout(blogState.closeTimer);

    var finalize = function () {
      if (reader.open) reader.close();
      reader.classList.remove('is-closing');
      document.body.classList.remove('reader-open');
      document.documentElement.classList.remove('reader-active');

      if (clearHash !== false) clearPostHash();

      var previous = blogState.previousFocus;
      if (previous && previous.isConnected && typeof previous.focus === 'function') {
        previous.focus({ preventScroll: true });
      }
    };

    if (prefersReducedMotion.matches) finalize();
    else blogState.closeTimer = window.setTimeout(finalize, 230);
  }

  function parsePostHash() {
    var match = /^#(?:\/blog)?\/?post\/([^\s/]+)$/.exec(window.location.hash);
    if (!match) return null;
    var slug = match[1];
    try {
      slug = decodeURIComponent(slug);
    } catch (error) {
      /* 保留原值 */
    }
    return POSTS.find(function (post) { return post.slug === slug; }) || null;
  }

  function syncReaderFromHash() {
    var post = parsePostHash();
    if (post) {
      openReader(post, false);
    } else {
      var reader = $('#reader');
      if (reader && reader.open) closeReader(false);
    }
  }

  function initReader() {
    var reader = $('#reader');
    var closeButton = $('#readerClose');
    var backButton = $('#readerBack');
    var copyButton = $('#copyPostLink');
    var scroll = $('#readerScroll');

    if (!reader) return;

    if (closeButton) closeButton.addEventListener('click', function () { closeReader(true); });
    if (backButton) backButton.addEventListener('click', function () { closeReader(true); });

    if (copyButton) {
      copyButton.addEventListener('click', function () {
        copyText(window.location.href).then(function () {
          showToast('文章链接已复制');
        }).catch(function () {
          showToast('复制失败，请手动复制地址');
        });
      });
    }

    reader.addEventListener('cancel', function (event) {
      event.preventDefault();
      closeReader(true);
    });

    reader.addEventListener('click', function (event) {
      if (event.target === reader) closeReader(true);
    });

    reader.addEventListener('close', function () {
      document.body.classList.remove('reader-open');
      document.documentElement.classList.remove('reader-active');
    });

    if (scroll) scroll.addEventListener('scroll', requestReaderProgress, { passive: true });
    window.addEventListener('resize', requestReaderProgress);

    window.addEventListener('hashchange', syncReaderFromHash);
    window.addEventListener('popstate', syncReaderFromHash);
  }

  function initBlog() {
    renderBlogFilters();
    blogState.visible = BLOG_PAGE_SIZE;
    blogState.rendered = 0;
    renderBlog(true);
    initFilterEvents();
    initPostEvents();
    initReader();

    if (parsePostHash()) {
      window.setTimeout(syncReaderFromHash, 120);
    }
  }

  /* ------------------------------------------------------------------------
     Footprint map
     ------------------------------------------------------------------------ */

  var MAP_STORAGE_KEY = 'jiangxu-footprints-v2';
  var DEFAULT_LIT = [];

  var REGION_NAMES = {
    110000: '华北', 120000: '华北', 130000: '华北', 140000: '华北', 150000: '华北',
    210000: '东北', 220000: '东北', 230000: '东北',
    310000: '华东', 320000: '华东', 330000: '华东', 340000: '华东', 350000: '华东', 360000: '华东', 370000: '华东',
    410000: '中南', 420000: '中南', 430000: '中南', 440000: '中南', 450000: '中南', 460000: '中南',
    500000: '西南', 510000: '西南', 520000: '西南', 530000: '西南', 540000: '西南',
    610000: '西北', 620000: '西北', 630000: '西北', 640000: '西北', 650000: '西北',
    710000: '东南', 810000: '东南', 820000: '东南'
  };

  var mapState = {
    data: null,
    content: null,
    lit: new Set(),
    selected: 330000,
    nodes: new Map(),
    cityNodes: [],
    route: null,
    hovered: null,
    lastChipsKey: '',
    stage: null,
    tooltip: null
  };

  function footprintContent() {
    return (SITE_CONTENT && SITE_CONTENT.footprints) || null;
  }

  function provinceContentFor(adcode) {
    var content = footprintContent();
    if (!content) return null;
    return (content.provinces || []).find(function (province) {
      return Number(province.adcode) === Number(adcode);
    }) || null;
  }

  function defaultLitSet() {
    var content = footprintContent();
    if (content) {
      return new Set((content.provinces || []).filter(function (province) {
        return province.visited && (province.cities || []).length > 0;
      }).map(function (province) { return Number(province.adcode); }));
    }
    return new Set(DEFAULT_LIT);
  }

  function svgNode(tag, attributes) {
    var element = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attributes || {}).forEach(function (key) {
      element.setAttribute(key, String(attributes[key]));
    });
    return element;
  }

  function loadFootprints() {
    var content = footprintContent();
    var revision = content && SITE_CONTENT.meta ? SITE_CONTENT.meta.revision : 0;
    var raw = readStorage(MAP_STORAGE_KEY);
    var valid = new Set(content
      ? (content.provinces || []).filter(function (province) {
          return (province.cities || []).length > 0;
        }).map(function (province) { return Number(province.adcode); })
      : (mapState.data.provinces || []).map(function (province) { return Number(province.adcode); }));

    if (raw) {
      try {
        var parsed = JSON.parse(raw);
        if (parsed && !Array.isArray(parsed) &&
            Number(parsed.revision) === Number(revision) &&
            Array.isArray(parsed.lit)) {
          return new Set(parsed.lit.map(Number).filter(function (code) { return valid.has(code); }));
        }
      } catch (error) {
        /* 数据损坏或版本变化时回到内容数据 */
      }
    }

    return defaultLitSet();
  }

  function saveFootprints() {
    var revision = SITE_CONTENT && SITE_CONTENT.meta ? SITE_CONTENT.meta.revision : 0;
    writeStorage(MAP_STORAGE_KEY, JSON.stringify({
      revision: revision,
      lit: Array.from(mapState.lit)
    }));
  }

  function cityCountForProvince(adcode) {
    var content = provinceContentFor(adcode);
    if (content) return (content.cities || []).length;
    if (!mapState.data || !mapState.data.cities) return 0;
    return mapState.data.cities.filter(function (city) { return Number(city.province) === Number(adcode); }).length;
  }

  function provinceCities(adcode) {
    var content = provinceContentFor(adcode);
    if (content) {
      return (content.cities || []).map(function (entry) {
        var city = CITY_LOOKUP.get(Number(entry.adcode));
        return city ? Object.assign({ showLabel: entry.showLabel }, city) : null;
      }).filter(Boolean);
    }
    if (!mapState.data || !mapState.data.cities) return [];
    return mapState.data.cities.filter(function (city) { return Number(city.province) === Number(adcode); });
  }

  function buildProvincePaths(svg) {
    mapState.data.provinces.forEach(function (province) {
      var adcode = Number(province.adcode);
      var path = svgNode('path', {
        class: 'province',
        d: province.path,
        'data-adcode': adcode,
        role: 'button',
        tabindex: '0'
      });
      svg.appendChild(path);
      mapState.nodes.set(adcode, path);
    });
  }

  function buildCityNodes(svg) {
    var layer = svgNode('g', { class: 'city-layer', 'aria-hidden': 'true' });
    mapState.cityNodes = [];

    var content = footprintContent();
    var candidates = [];

    if (content) {
      var currentCity = Number(content.currentCityAdcode);
      (content.provinces || []).forEach(function (province) {
        (province.cities || []).forEach(function (entry) {
          var city = CITY_LOOKUP.get(Number(entry.adcode));
          if (!city) return;
          candidates.push({
            city: city,
            current: Number(city.adcode) === currentCity,
            showLabel: Boolean(entry.showLabel)
          });
        });
      });
    } else {
      (mapState.data.cities || []).forEach(function (city) {
        candidates.push({ city: city, current: Boolean(city.current), showLabel: Boolean(city.current) });
      });
    }

    candidates.sort(function (a, b) {
      if (a.current !== b.current) return a.current ? -1 : 1;
      return (a.city.y || 0) - (b.city.y || 0);
    });

    var labelRects = [];

    function labelRect(dx, dy, width, anchor) {
      var left = anchor === 'start' ? dx : anchor === 'end' ? dx - width : dx - width / 2;
      return {
        left: left - 2,
        right: left + width + 2,
        top: dy - 8,
        bottom: dy + 8
      };
    }

    function overlapScore(rect) {
      return labelRects.reduce(function (total, placed) {
        var width = Math.max(0, Math.min(rect.right, placed.right) - Math.max(rect.left, placed.left));
        var height = Math.max(0, Math.min(rect.bottom, placed.bottom) - Math.max(rect.top, placed.top));
        return total + width * height;
      }, 0);
    }

    function placeLabel(name) {
      var offsets = [
        [0, -13], [9, -6], [11, 8], [-9, -6], [-11, 8],
        [0, 15], [0, -24], [18, 0], [-18, 0], [14, 14], [-14, 14],
        [24, -8], [-24, -8], [0, -34]
      ];
      var width = Array.from(name).length * 12.5 + 4;
      var best = null;
      var bestScore = Infinity;

      for (var index = 0; index < offsets.length; index += 1) {
        var dx = offsets[index][0];
        var dy = offsets[index][1];
        var anchor = dx > 6 ? 'start' : dx < -6 ? 'end' : 'middle';
        var rect = labelRect(dx, dy, width, anchor);
        var score = overlapScore(rect);

        if (score === 0) {
          labelRects.push(rect);
          return { dx: dx, dy: dy, anchor: anchor };
        }

        if (score < bestScore) {
          bestScore = score;
          best = { dx: dx, dy: dy, anchor: anchor, rect: rect };
        }
      }

      if (best) {
        labelRects.push(best.rect);
        return best;
      }

      return null;
    }

    candidates.forEach(function (candidate) {
      var city = candidate.city;
      var group = svgNode('g', {
        class: 'city' + (candidate.current ? ' city--current' : ''),
        transform: 'translate(' + city.x + ' ' + city.y + ')',
        'data-province': city.province
      });

      group.appendChild(svgNode('circle', { class: 'city-halo', cx: 0, cy: 0, r: 8.5 }));

      if (candidate.current) {
        group.appendChild(svgNode('circle', { class: 'city-pulse', cx: 0, cy: 0, r: 6.4 }));
      }

      group.appendChild(svgNode('circle', { class: 'city-dot', cx: 0, cy: 0, r: candidate.current ? 3.6 : 3.1 }));

      if (candidate.showLabel || candidate.current) {
        var placement = placeLabel(city.name, candidate.current);
        if (placement) {
          var label = svgNode('text', {
            class: 'city-label',
            x: placement.dx,
            y: placement.dy,
            'text-anchor': placement.anchor,
            'dominant-baseline': 'middle'
          });
          label.textContent = city.name;
          group.appendChild(label);
        }
      }

      group.setAttribute('data-city', city.adcode);
      layer.appendChild(group);
      mapState.cityNodes.push({
        city: city,
        current: candidate.current,
        node: group
      });
    });

    svg.appendChild(layer);
  }

  function orderCitiesForRoute(cities) {
    if (cities.length < 2) return cities.slice();

    var content = footprintContent();
    var currentCode = content ? Number(content.currentCityAdcode) : 0;
    var remaining = cities.slice();
    var startIndex = remaining.findIndex(function (city) { return Number(city.adcode) === currentCode; });
    if (startIndex < 0) startIndex = 0;

    var ordered = [remaining.splice(startIndex, 1)[0]];

    while (remaining.length) {
      var last = ordered[ordered.length - 1];
      var nearestIndex = 0;
      var nearestDistance = Infinity;

      remaining.forEach(function (city, index) {
        var dx = city.x - last.x;
        var dy = city.y - last.y;
        var distance = dx * dx + dy * dy;
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      ordered.push(remaining.splice(nearestIndex, 1)[0]);
    }

    return ordered;
  }

  function calculateRoutePath(points) {
    if (points.length < 2) return '';

    var path = 'M' + points[0].x + ',' + points[0].y;

    for (var i = 0; i < points.length - 1; i += 1) {
      var p0 = points[i - 1] || points[i];
      var p1 = points[i];
      var p2 = points[i + 1];
      var p3 = points[i + 2] || p2;
      var c1x = p1.x + (p2.x - p0.x) / 6;
      var c1y = p1.y + (p2.y - p0.y) / 6;
      var c2x = p2.x - (p3.x - p1.x) / 6;
      var c2y = p2.y - (p3.y - p1.y) / 6;
      path += 'C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' +
        c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' +
        p2.x + ',' + p2.y;
    }

    return path;
  }

  function buildRoute(svg) {
    var route = svgNode('path', { class: 'route-line', 'aria-hidden': 'true' });
    svg.appendChild(route);
    mapState.route = route;
  }

  function provinceLabel(province) {
    var adcode = Number(province.adcode);
    var isLit = mapState.lit.has(adcode);
    var count = cityCountForProvince(adcode);
    var labels = (footprintContent() && footprintContent().labels) || {};
    var cityText = count ? '，' + count + ' 座城市' : '';
    return province.name + '，' + (isLit
      ? (labels.lit || '已点亮') + cityText
      : (labels.idle || '待探索') + '，点击或按回车点亮');
  }

  function refreshProvinceTooltip(adcode) {
    var tooltip = mapState.tooltip;
    if (!tooltip || !adcode) return;

    var province = mapState.data.provinces.find(function (item) { return Number(item.adcode) === Number(adcode); });
    if (!province) return;

    var labels = (footprintContent() && footprintContent().labels) || {};
    var isLit = mapState.lit.has(Number(adcode));
    var count = cityCountForProvince(adcode);
    var status = isLit
      ? (labels.lit || '已点亮') + ' · ' + (count ? count + ' 座城市' : '等待第一次抵达')
      : (count
          ? (labels.idle || '待探索') + ' · 点击点亮'
          : (labels.idle || '待探索') + ' · 暂无城市记录');

    tooltip.innerHTML = '<strong>' + escapeHTML(province.name) + '</strong><span>' + escapeHTML(status) + '</span>';
  }

  function positionTooltip(clientX, clientY) {
    var tooltip = mapState.tooltip;
    var stage = mapState.stage;
    if (!tooltip || !stage) return;

    var rect = stage.getBoundingClientRect();
    var x = clamp(clientX - rect.left, 62, Math.max(62, rect.width - 62));
    var y = Math.max(clientY - rect.top, 68);

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.classList.add('is-visible');
    tooltip.setAttribute('aria-hidden', 'false');
  }

  function showProvinceTooltip(adcode, clientX, clientY) {
    mapState.hovered = Number(adcode);
    refreshProvinceTooltip(adcode);
    positionTooltip(clientX, clientY);
  }

  function hideProvinceTooltip() {
    mapState.hovered = null;
    if (!mapState.tooltip) return;
    mapState.tooltip.classList.remove('is-visible');
    mapState.tooltip.setAttribute('aria-hidden', 'true');
  }

  function renderProvinceDetail() {
    var panel = $('#provinceDetail');
    if (!panel || !mapState.data) return;

    var province = mapState.data.provinces.find(function (item) {
      return Number(item.adcode) === Number(mapState.selected);
    });
    if (!province) return;

    var adcode = Number(province.adcode);
    var content = provinceContentFor(adcode);
    var labels = (footprintContent() && footprintContent().labels) || {};
    var isLit = mapState.lit.has(adcode);
    var cities = provinceCities(adcode);
    var cityNames = cities.map(function (city) { return city.name; });
    var currentCity = CITY_LOOKUP.get(Number(footprintContent() && footprintContent().currentCityAdcode));
    var isHome = currentCity && Number(currentCity.province) === adcode;
    var tag = isLit ? (isHome ? (labels.home || '常驻') : (labels.arrived || '已抵达')) : (labels.idle || '待探索');
    var note = isLit
      ? ((content && content.note) || labels.genericLitNote || '这里刚刚被点亮。还没有写下具体的记忆，先把坐标留在这里。')
      : (labels.genericIdleNote || '地图上的这一块还空着。等一次真正的出发，再把它点亮。');
    var meta = [];

    if (cityNames.length) {
      meta.push((labels.cityPrefix || '城市') + ' · ' + cityNames.join('、'));
      meta.push(cityNames.length + ' ' + (labels.cityUnit || '座城市'));
    } else if (isLit) {
      meta.push(labels.noCityLit || '刚刚点亮');
      meta.push(labels.noCityIdle || '等待第一次抵达');
    } else {
      meta.push(labels.noRecord || '暂无抵达记录');
    }

    if (isLit && content && content.lastVisit) {
      meta.push((labels.recentPrefix || '最近抵达') + ' · ' + content.lastVisit);
    }

    var canLight = cities.length > 0;
    var actionLabel = isLit
      ? (labels.actionExtinguish || '熄灭这段足迹')
      : canLight
        ? (labels.actionLight || '点亮这里')
        : '暂无城市记录';
    var actionClass = isLit ? 'link-button is-danger' : 'link-button';
    var actionHint = isLit
      ? (labels.hintLit || '点击地图查看其他省份')
      : canLight
        ? (labels.hintIdle || '点击即可加入足迹')
        : '先在后台添加至少一个城市';

    panel.dataset.ghost = province.name.charAt(0);
    panel.innerHTML =
      '<div class="province-panel__top">' +
        '<span>' + escapeHTML(REGION_NAMES[adcode] || '中国') + ' · ' + adcode + '</span>' +
        '<span class="province-panel__tag">' + escapeHTML(tag) + '</span>' +
      '</div>' +
      '<h3 class="province-panel__title">' + escapeHTML(province.name) +
        '<small>' + escapeHTML(province.fullName || province.name) + '</small>' +
      '</h3>' +
      '<p class="province-panel__note">' + escapeHTML(note) + '</p>' +
      '<div class="province-panel__meta">' +
        meta.map(function (item) { return '<span>' + escapeHTML(item) + '</span>'; }).join('') +
      '</div>' +
      '<div class="province-panel__actions">' +
        '<button class="' + actionClass + '" type="button" data-province-action="' +
          (isLit ? 'remove' : 'add') + '"' + (!isLit && !canLight ? ' disabled' : '') + '>' +
          escapeHTML(actionLabel) +
        '</button>' +
        '<span class="province-panel__hint">' + escapeHTML(actionHint) + '</span>' +
      '</div>';
  }

  function renderProvinceChips() {
    var container = $('#provinceChips');
    if (!container) return;

    var litProvinces = mapState.data.provinces.filter(function (province) {
      return mapState.lit.has(Number(province.adcode));
    });

    container.innerHTML = '';

    if (!litProvinces.length) {
      var empty = document.createElement('span');
      empty.className = 'province-chips__empty';
      var labels = (footprintContent() && footprintContent().labels) || {};
      empty.textContent = labels.emptyChips || '还没有点亮任何省份，从地图上选一个开始吧。';
      container.appendChild(empty);
      return;
    }

    litProvinces.forEach(function (province) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'province-chip';
      chip.setAttribute('data-chip-adcode', String(province.adcode));
      chip.textContent = province.name;
      chip.setAttribute('aria-label', '查看' + province.fullName + '的足迹');
      container.appendChild(chip);
    });

    syncChipSelection();
  }

  function syncChipSelection() {
    $$('.province-chip', $('#provinceChips')).forEach(function (chip) {
      var active = Number(chip.getAttribute('data-chip-adcode')) === Number(mapState.selected);
      chip.classList.toggle('is-active', active);
      if (active) chip.setAttribute('aria-current', 'true');
      else chip.removeAttribute('aria-current');
    });
  }

  function refreshMap() {
    if (!mapState.data) return;

    var labels = (footprintContent() && footprintContent().labels) || {};
    var litCount = mapState.lit.size;
    var cityCount = 0;

    mapState.nodes.forEach(function (node, adcode) {
      var isLit = mapState.lit.has(adcode);
      node.classList.toggle('is-lit', isLit);
      node.classList.toggle('is-selected', adcode === mapState.selected);
      node.setAttribute('aria-pressed', isLit ? 'true' : 'false');
      node.setAttribute('aria-label', provinceLabel({
        name: node.getAttribute('data-name'),
        adcode: adcode
      }));
    });

    var visibleCities = [];

    mapState.cityNodes.forEach(function (entry) {
      var visible = mapState.lit.has(Number(entry.city.province));
      entry.node.classList.toggle('is-hidden', !visible);
      if (visible) visibleCities.push(entry.city);
    });

    (footprintContent() && footprintContent().provinces || []).forEach(function (province) {
      if (!mapState.lit.has(Number(province.adcode))) return;
      cityCount += (province.cities || []).length;
    });

    if (mapState.route) {
      var routePath = calculateRoutePath(orderCitiesForRoute(visibleCities).map(function (city) {
        return { x: city.x, y: city.y };
      }));
      mapState.route.setAttribute('d', routePath);
      mapState.route.style.display = visibleCities.length > 1 ? '' : 'none';
    }

    var statProvince = $('#statProvince');
    var statCity = $('#statCity');
    var statYear = $('#statYear');
    var litShare = $('#litShare');
    var meter = $('#litMeterBar');
    var aside = $('#footprintAside');

    if (statProvince) statProvince.textContent = String(litCount);
    if (statCity) statCity.textContent = String(cityCount);
    if (statYear) statYear.textContent = String((footprintContent() && footprintContent().overviewYears) || 0);
    if (litShare) litShare.textContent = litCount + ' / 34';
    if (meter) meter.style.width = ((litCount / 34) * 100).toFixed(2) + '%';
    if (aside) {
      aside.innerHTML = escapeHTML(labels.asidePrefix || '点亮') + ' <strong>' + litCount + '</strong> ' +
        escapeHTML(labels.asideMiddle || '个省份 · 抵达') + ' <strong>' + cityCount + '</strong> ' +
        escapeHTML(labels.asideSuffix || '座城市');
    }

    setHeroCityStat(cityCount);

    var chipsKey = Array.from(mapState.lit).sort(function (a, b) { return a - b; }).join(',');
    if (chipsKey !== mapState.lastChipsKey) {
      mapState.lastChipsKey = chipsKey;
      renderProvinceChips();
    } else {
      syncChipSelection();
    }

    renderProvinceDetail();

    if (mapState.hovered) refreshProvinceTooltip(mapState.hovered);
  }

  function selectProvince(adcode) {
    mapState.selected = Number(adcode);
    refreshMap();
  }

  function lightProvince(adcode) {
    var code = Number(adcode);
    var content = provinceContentFor(code);

    if (!content || (content.cities || []).length === 0) {
      selectProvince(code);
      showToast('这个省份还没有城市记录，先在后台添加城市');
      return;
    }

    if (mapState.lit.has(code)) {
      selectProvince(code);
      return;
    }

    mapState.lit.add(code);
    mapState.selected = code;
    saveFootprints();
    refreshMap();

    var province = mapState.data.provinces.find(function (item) { return Number(item.adcode) === code; });
    if (province) showToast(province.name + ' 已点亮');
  }

  function extinguishProvince(adcode) {
    var code = Number(adcode);
    if (!mapState.lit.has(code)) return;

    mapState.lit.delete(code);
    saveFootprints();
    refreshMap();

    var province = mapState.data.provinces.find(function (item) { return Number(item.adcode) === code; });
    if (province) showToast('已熄灭 ' + province.name + ' 的足迹');
  }

  function initMapEvents() {
    var svg = $('#chinaMap');
    var stage = mapState.stage;

    if (svg) {
      svg.addEventListener('click', function (event) {
        var path = event.target.closest('.province');
        if (!path) return;
        var adcode = Number(path.getAttribute('data-adcode'));
        if (mapState.lit.has(adcode)) selectProvince(adcode);
        else lightProvince(adcode);
      });

      svg.addEventListener('keydown', function (event) {
        var path = event.target.closest('.province');
        if (!path) return;

        var nodes = Array.from(mapState.nodes.values());
        var index = nodes.indexOf(path);

        if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
          event.preventDefault();
          var adcode = Number(path.getAttribute('data-adcode'));
          if (mapState.lit.has(adcode)) selectProvince(adcode);
          else lightProvince(adcode);
          return;
        }

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          event.preventDefault();
          var next = nodes[(index + 1) % nodes.length];
          if (next) next.focus();
          return;
        }

        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          event.preventDefault();
          var previous = nodes[(index - 1 + nodes.length) % nodes.length];
          if (previous) previous.focus();
          return;
        }

        if (event.key === 'Home') {
          event.preventDefault();
          if (nodes[0]) nodes[0].focus();
        }

        if (event.key === 'End') {
          event.preventDefault();
          if (nodes[nodes.length - 1]) nodes[nodes.length - 1].focus();
        }
      });

      svg.addEventListener('focusin', function (event) {
        var path = event.target.closest('.province');
        if (!path) return;
        var rect = path.getBoundingClientRect();
        showProvinceTooltip(
          path.getAttribute('data-adcode'),
          rect.left + rect.width / 2,
          rect.top + Math.min(rect.height / 3, 26)
        );
      });

      svg.addEventListener('focusout', function () {
        hideProvinceTooltip();
      });
    }

    if (stage) {
      stage.addEventListener('pointermove', function (event) {
        var path = event.target.closest('.province');
        if (!path) {
          hideProvinceTooltip();
          return;
        }
        showProvinceTooltip(path.getAttribute('data-adcode'), event.clientX, event.clientY);
      });

      stage.addEventListener('pointerleave', hideProvinceTooltip);
    }

    var chips = $('#provinceChips');
    if (chips) {
      chips.addEventListener('click', function (event) {
        var chip = event.target.closest('.province-chip');
        if (!chip) return;
        selectProvince(Number(chip.getAttribute('data-chip-adcode')));
      });
    }

    var detail = $('#provinceDetail');
    if (detail) {
      detail.addEventListener('click', function (event) {
        var action = event.target.closest('[data-province-action]');
        if (!action) return;

        if (action.getAttribute('data-province-action') === 'remove') {
          extinguishProvince(mapState.selected);
        } else {
          lightProvince(mapState.selected);
        }
      });
    }

    var reset = $('#resetMap');
    if (reset) {
      reset.addEventListener('click', function () {
        mapState.lit = defaultLitSet();
        var content = footprintContent();
        var currentCity = content ? CITY_LOOKUP.get(Number(content.currentCityAdcode)) : null;
        if (currentCity) {
          mapState.selected = Number(currentCity.province);
        } else {
          mapState.selected = mapState.lit.size ? mapState.lit.values().next().value : 330000;
        }
        saveFootprints();
        refreshMap();
        var labels = (footprintContent() && footprintContent().labels) || {};
        showToast(labels.resetToast || '已恢复默认足迹');
      });
    }

    var memories = $('#memoryGrid');
    if (memories) {
      memories.addEventListener('click', function (event) {
        var card = event.target.closest('[data-memory-city]');
        if (!card) return;
        var city = CITY_LOOKUP.get(Number(card.getAttribute('data-memory-city')));
        if (!city) return;
        var province = Number(city.province);
        if (!mapState.lit.has(province)) {
          mapState.lit.add(province);
          saveFootprints();
          refreshMap();
          showToast('已把这段记忆重新点亮');
        } else {
          selectProvince(province);
          showToast('已在足迹地图中定位');
        }
      });
    }
  }

  function renderMemories() {
    var grid = $('#memoryGrid');
    if (!grid) return;

    grid.innerHTML = '';
    var content = footprintContent();
    var memories = (content && content.memories) || [];

    memories.forEach(function (memory) {
      var city = CITY_LOOKUP.get(Number(memory.cityAdcode));
      var province = city ? city.provinceName : memory.province;
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'memory-card';
      card.setAttribute('data-memory-city', String(memory.cityAdcode || ''));
      card.setAttribute('aria-label', '查看' + memory.city + '的足迹记忆');
      card.innerHTML =
        '<div class="memory-card__top">' +
          '<span>' + escapeHTML(memory.date) + '</span>' +
          '<span>' + escapeHTML(province || '') + '</span>' +
        '</div>' +
        '<strong class="memory-card__city">' + escapeHTML(memory.city) + '</strong>' +
        '<span class="memory-card__note">' + escapeHTML(memory.note) + '</span>' +
        '<span class="memory-card__tag">' + escapeHTML(memory.tag) + '</span>' +
        '<span class="memory-card__arrow" aria-hidden="true">' + ICON_ARROW + '</span>';
      grid.appendChild(card);
    });
  }

  function initFootprints() {
    if (!window.CHINA_MAP_DATA) return;

    mapState.data = window.CHINA_MAP_DATA;
    mapState.content = footprintContent();
    mapState.stage = $('#mapStage');
    mapState.tooltip = $('#mapTooltip');

    var svg = $('#chinaMap');
    if (!svg) return;

    mapState.lit = loadFootprints();
    var content = footprintContent();
    var currentCity = content ? CITY_LOOKUP.get(Number(content.currentCityAdcode)) : null;
    var currentProvince = currentCity ? Number(currentCity.province) : 0;

    if (currentProvince && mapState.lit.has(currentProvince)) {
      mapState.selected = currentProvince;
    } else {
      mapState.selected = mapState.lit.size ? mapState.lit.values().next().value : (currentProvince || 330000);
    }

    svg.setAttribute('viewBox', mapState.data.viewBox);
    svg.innerHTML = '';

    buildProvincePaths(svg);
    mapState.nodes.forEach(function (node, adcode) {
      var province = mapState.data.provinces.find(function (item) { return Number(item.adcode) === adcode; });
      if (province) node.setAttribute('data-name', province.name);
    });

    buildRoute(svg);
    buildCityNodes(svg);

    var inset = $('#mapInset');
    if (inset && mapState.data.inset) {
      inset.innerHTML = '<svg viewBox="' + mapState.data.inset.viewBox + '" aria-hidden="true">' +
        '<path d="' + mapState.data.inset.path + '"></path></svg>' +
        '<span class="map-inset__label">' + escapeHTML(mapState.data.inset.label) + '</span>';
    }

    renderMemories();
    initMapEvents();
    refreshMap();
  }

  /* ------------------------------------------------------------------------
     Skill radar
     ------------------------------------------------------------------------ */

  var RADAR_LABELS = ['界面工程', '性能优化', '设计系统', '交互体验', '可访问性', '协作表达'];

  var RADAR_CONFIG = {
    engineering: {
      values: [94, 88, 86, 84, 82, 80],
      note: '以稳定与性能为锚点，把体验稳稳落在地上。'
    },
    design: {
      values: [86, 76, 94, 92, 88, 86],
      note: '让秩序与触感先发生，再用工程把它托住。'
    }
  };

  var radarState = {
    view: 'engineering',
    values: RADAR_CONFIG.engineering.values.slice(),
    target: RADAR_CONFIG.engineering.values.slice(),
    frame: 0,
    polygon: null,
    dots: [],
    valueNodes: [],
    svg: null
  };

  var RADAR_GEOMETRY = {
    cx: 200,
    cy: 172,
    radius: 116,
    labelRadius: 142
  };

  function radarPoint(index, value) {
    var angle = -Math.PI / 2 + index * Math.PI / 3;
    var distance = RADAR_GEOMETRY.radius * (value / 100);
    return {
      x: RADAR_GEOMETRY.cx + Math.cos(angle) * distance,
      y: RADAR_GEOMETRY.cy + Math.sin(angle) * distance,
      angle: angle
    };
  }

  function radarPolygonPoints(values, radius) {
    return values.map(function (value, index) {
      var angle = -Math.PI / 2 + index * Math.PI / 3;
      var distance = radius * (value / 100);
      return (RADAR_GEOMETRY.cx + Math.cos(angle) * distance).toFixed(1) + ',' +
        (RADAR_GEOMETRY.cy + Math.sin(angle) * distance).toFixed(1);
    }).join(' ');
  }

  function renderRadarChart() {
    var wrap = $('#radarChart');
    if (!wrap) return;

    var marks = '';
    [20, 40, 60, 80, 100].forEach(function (level) {
      var values = RADAR_LABELS.map(function () { return level; });
      marks += '<polygon class="radar-grid' + (level === 100 ? ' radar-grid--outer' : '') +
        '" points="' + radarPolygonPoints(values, RADAR_GEOMETRY.radius) + '"></polygon>';
    });

    RADAR_LABELS.forEach(function (label, index) {
      var angle = -Math.PI / 2 + index * Math.PI / 3;
      var axisX = RADAR_GEOMETRY.cx + Math.cos(angle) * RADAR_GEOMETRY.radius;
      var axisY = RADAR_GEOMETRY.cy + Math.sin(angle) * RADAR_GEOMETRY.radius;
      marks += '<path class="radar-axis" d="M' + RADAR_GEOMETRY.cx + ' ' + RADAR_GEOMETRY.cy +
        'L' + axisX.toFixed(1) + ' ' + axisY.toFixed(1) + '"></path>';
    });

    marks += '<circle class="radar-center" cx="' + RADAR_GEOMETRY.cx + '" cy="' +
      RADAR_GEOMETRY.cy + '" r="4"></circle>';
    marks += '<polygon class="radar-data"></polygon>';

    var labelMarkup = RADAR_LABELS.map(function (label, index) {
      var angle = -Math.PI / 2 + index * Math.PI / 3;
      var labelX = RADAR_GEOMETRY.cx + Math.cos(angle) * RADAR_GEOMETRY.labelRadius;
      var labelY = RADAR_GEOMETRY.cy + Math.sin(angle) * RADAR_GEOMETRY.labelRadius;
      var anchor = Math.cos(angle) > 0.18 ? 'start' : Math.cos(angle) < -0.18 ? 'end' : 'middle';
      return '<text class="radar-label" x="' + labelX.toFixed(1) + '" y="' + labelY.toFixed(1) +
        '" text-anchor="' + anchor + '" dominant-baseline="middle">' + escapeHTML(label) + '</text>' +
        '<text class="radar-value" x="' + labelX.toFixed(1) + '" y="' + (labelY + 13).toFixed(1) +
        '" text-anchor="' + anchor + '" dominant-baseline="middle">0</text>';
    }).join('');

    wrap.innerHTML = '<svg viewBox="0 0 400 356" role="img" aria-label="六维能力雷达图">' +
      marks + labelMarkup + '</svg>';

    radarState.svg = $('svg', wrap);
    radarState.polygon = $('.radar-data', wrap);
    radarState.dots = [];
    radarState.valueNodes = $$('.radar-value', wrap);

    RADAR_LABELS.forEach(function () {
      var dot = svgNode('circle', { class: 'radar-dot', r: 3.4, cx: RADAR_GEOMETRY.cx, cy: RADAR_GEOMETRY.cy });
      radarState.svg.appendChild(dot);
      radarState.dots.push(dot);
    });

    updateRadarGeometry(radarState.values);
    syncRadarAccessibility();
  }

  function updateRadarGeometry(values) {
    if (!radarState.polygon) return;

    radarState.polygon.setAttribute('points', values.map(function (value, index) {
      var point = radarPoint(index, value);
      return point.x.toFixed(1) + ',' + point.y.toFixed(1);
    }).join(' '));

    radarState.dots.forEach(function (dot, index) {
      var point = radarPoint(index, values[index]);
      dot.setAttribute('cx', point.x.toFixed(1));
      dot.setAttribute('cy', point.y.toFixed(1));
    });

    radarState.valueNodes.forEach(function (node, index) {
      node.textContent = String(Math.round(values[index]));
    });
  }

  function syncRadarAccessibility() {
    if (!radarState.svg) return;
    var rounded = radarState.target.map(function (value) { return Math.round(value); });
    var viewLabel = radarState.view === 'design' ? '设计视角' : '工程视角';
    radarState.svg.setAttribute('aria-label', '六维能力雷达图，' + viewLabel + '：' +
      RADAR_LABELS.map(function (label, index) { return label + ' ' + rounded[index]; }).join('，'));
  }

  function animateRadar() {
    window.cancelAnimationFrame(radarState.frame);

    if (prefersReducedMotion.matches) {
      radarState.values = radarState.target.slice();
      updateRadarGeometry(radarState.values);
      syncRadarAccessibility();
      return;
    }

    var from = radarState.values.slice();
    var to = radarState.target.slice();
    var startedAt = 0;
    var duration = 720;

    function frame(now) {
      if (!startedAt) startedAt = now;
      var progress = clamp((now - startedAt) / duration, 0, 1);
      var eased = 1 - Math.pow(1 - progress, 3);

      radarState.values = from.map(function (value, index) {
        return value + (to[index] - value) * eased;
      });

      updateRadarGeometry(radarState.values);

      if (progress < 1) {
        radarState.frame = window.requestAnimationFrame(frame);
      } else {
        radarState.values = to.slice();
        updateRadarGeometry(radarState.values);
        syncRadarAccessibility();
      }
    }

    radarState.frame = window.requestAnimationFrame(frame);
  }

  function setRadarView(view, animate) {
    if (!RADAR_CONFIG[view]) return;

    radarState.view = view;
    radarState.target = RADAR_CONFIG[view].values.slice();

    var switcher = $('.view-switch');
    if (switcher) switcher.setAttribute('data-view', view);

    $$('.view-switch__button').forEach(function (button) {
      var active = button.getAttribute('data-radar-view') === view;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    var note = $('#radarNote');
    if (note) note.textContent = RADAR_CONFIG[view].note;

    if (animate) {
      animateRadar();
    } else {
      radarState.values = radarState.target.slice();
      updateRadarGeometry(radarState.values);
      syncRadarAccessibility();
    }
  }

  function initRadar() {
    var wrap = $('#radarChart');
    if (!wrap) return;

    renderRadarChart();

    $$('.view-switch__button').forEach(function (button) {
      button.addEventListener('click', function () {
        var view = button.getAttribute('data-radar-view');
        if (!view || view === radarState.view) return;
        setRadarView(view, true);
      });
    });

    setRadarView('engineering', false);
  }

  function boot() {
    initContent();
    initTheme();
    initHeaderNav();
    initRouter();
    initMobileMenu();
    initScrollEffects();
    initBackToTop();
    initReveal();
    initSplitHeadings();
    initHero();
    initCounters();
    initClock();
    initCopyButtons();
    initBlog();
    initFootprints();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
