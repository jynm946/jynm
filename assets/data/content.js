/* 全站内容数据：由本地可视化后台维护。
   前台只读取此文件，请勿在线上页面中直接修改内容。 */
window.SITE_CONTENT = {
  "meta": {
    "siteName": "吕懿轩",
    "updatedAt": "2026-11-07T15:38:48.606Z",
    "revision": 1794065928606
  },
  "nav": {
    "home": "首页",
    "blog": "博客",
    "footprints": "足迹",
    "skills": "技能"
  },
  "routes": {
    "home": "吕懿轩 · 前端工程师与独立开发者",
    "blog": "博客 · 吕懿轩",
    "footprints": "我的足迹 · 吕懿轩",
    "skills": "技能 · 吕懿轩"
  },
  "profile": {
    "name": "吕懿轩",
    "brandMark": "",
    "avatarChar": "吕",
    "role": "全栈工程师 · 独立开发者",
    "eyebrow": [
      "开发者",
      "构建者",
      "探索者"
    ],
    "lead": "多少事，从来急；\n天地转，光阴迫。\n一万年太久，只争朝夕。",
    "mobileTagline": "在代码与设计之间，构建有温度的数字体验。",
    "tags": [
      "全栈工程师",
      "终身学习者",
      "开源探索者"
    ],
    "years": 0.5,
    "labels": {
      "years": "年开发旅程",
      "posts": "篇技术随笔",
      "cities": "座点亮城市"
    },
    "coordinates": "北纬 30.27° · 东经 120.15°",
    "status": "在线",
    "email": "3169148462@qq.com",
    "wechat": "s3169148462",
    "github": "https://github.com/",
    "avatarImage": "assets/images/avatar-1793808089134.jpg"
  },
  "home": {
    "scrollLabel": "向下滚动",
    "socialTips": {
      "github": "代码仓库",
      "email": "复制邮箱",
      "wechat": "复制微信",
      "blog": "阅读博客"
    }
  },
  "about": {
    "eyebrowIndex": "00",
    "eyebrowLabel": "关于我",
    "paragraphs": [
      "我是吕懿轩，一名小白开发者。"
    ],
    "signatureName": "吕懿轩",
    "signatureMeta": "写于杭州 · 2026",
    "nowLabel": "现在进行时",
    "marquee": [
      "界面工程",
      "交互设计",
      "动效表达",
      "设计系统",
      "可访问性",
      "性能优化",
      "长期主义"
    ],
    "statementText": "让复杂的事情**变得清晰**，\n让清晰的界面**保留温度**。",
    "nowText": "所在城市：杭州 · 中国\n本地时间：--:--\n当前状态：找实习ing\n正在游戏：影之刃零\n最近更新：更新了blog1.0.0",
    "principlesText": "克制：先删去不需要的，再让留下来的更重要。\n可靠：漂亮的界面，也要经得起真实世界的使用。\n好奇：保持提问，保持对未知的轻微兴奋。"
  },
  "blog": {
    "eyebrowIndex": "01",
    "eyebrowLabel": "博客",
    "title": "博客",
    "asideBefore": "共",
    "asideAfter": "篇 · 慢慢写，认真写",
    "description": "关于代码、设计与日常的长期记录。把想清楚的事写下来，也把没想清楚的事留在过程里。",
    "categories": [
      "学习",
      "设计"
    ],
    "posts": [
      {
        "id": "post-1794065843691-pt1ex",
        "slug": "01-markdown",
        "title": "中小厂八股 · 高频速查手册",
        "category": "学习",
        "date": "2026-11-07",
        "tags": [],
        "glyph": "中",
        "art": "grid",
        "markdown": "> 中小厂面试 · 八股复习\n\n基于 8 份原始 PDF 重新整理：保留高频、压缩表达、标注出处页码\n\n8 份 PDF · 265 道题目 · 9 个模块\n\n- **怎么用：**先背每节“必答”题，再用“中频清单”查漏，最后按附录页码回原 PDF 看详细推导。\n- **优先级：**高 = 中小厂高频，必须能脱稿；中 = 常见追问，能说结论；低 = 了解即可，时间不够可跳过。\n- **说明：**本手册是“压缩+索引”，不是原文搬运；需要展开的细节，按题后页码回原文件。\n\n整理日期：2026-11-07\n\n## 目录\n\n| 章节 | 内容 | 原文件 |\n| --- | --- | --- |\n| 使用说明 | 优先级、答题公式、复习顺序 | — |\n| 一、JavaSE | 语言基础、String、集合、反射 | JavaSE.pdf |\n| 二、JUC | 线程、线程池、锁、CAS/AQS、ThreadLocal | JUC.pdf |\n| 三、JVM | 内存结构、GC、回收器、类加载 | JVM.pdf |\n| 四、MySQL | 索引、SQL 优化、事务、MVCC、锁、日志 | MySQL.pdf |\n| 五、Redis | 数据结构、持久化、缓存三问、分布式锁 | Redis.pdf |\n| 六、Spring 全家桶 | IOC、AOP、Bean、事务、MVC、Boot | Spring全家桶.pdf |\n| 七、MQ | 可靠性、幂等、积压、顺序 | MQ.pdf |\n| 八、计算机基础 | 网络、操作系统、数据结构、设计模式 | 计算机基础.pdf |\n| 九、冲刺计划 | 7 天复习安排与自测清单 | — |\n| 附录 | 265 道题的全量索引（含页码/难度） | 全部 |\n\n## 使用说明\n\n### 1. 三档优先级\n\n| 标记 | 含义 | 要求 |\n| --- | --- | --- |\n| 高 | 中小厂一面/二面高频 | 30 秒内说清定义、原理、场景、坑 |\n| 中 | 常见追问或基础补全 | 能说结论，能举一个例子 |\n| 低 | 了解即可 | 时间不够可最后看，能接上话即可 |\n\n### 2. 答题公式\n\n- **定义**：一句话说它是什么，解决什么问题。\n- **原理**：两到三步说清核心机制，不背源码。\n- **场景**：举一个业务例子，证明你用过。\n- **坑/对比**：说一个常见问题或与相似概念的差别。\n\n### 3. 推荐顺序\n\nJavaSE → MySQL → Redis → Spring → JUC → JVM → MQ → 计算机基础。前四块决定中小厂面试的基本盘，后四块决定追问深度。\n\n### 4. 原文件定位\n\n| 文件 | 页数 | 核心内容 | 建议 |\n| --- | --- | --- | --- |\n| JavaSE.pdf | 35 | 基础语法、String、集合、反射，后半部分与 JUC 重复 | 优先看集合与 String |\n| JUC.pdf | 28 | 线程、线程池、锁、CAS/AQS、ThreadLocal | 背线程池与锁 |\n| JVM.pdf | 23 | 内存结构、GC、回收器、类加载 | 背内存结构与 GC 流程 |\n| MySQL.pdf | 33 | 索引、SQL 优化、事务、MVCC、锁、日志 | 中小厂重点 |\n| Redis.pdf | 24 | 数据结构、持久化、缓存三问、分布式锁 | 中小厂重点 |\n| Spring全家桶.pdf | 15 | IOC/AOP、Bean、事务、MVC、MyBatis、Boot、Cloud | 背 IOC/AOP/事务 |\n| MQ.pdf | 8 | 可靠性、幂等、积压、顺序 | 背可靠性三段 |\n| 计算机基础.pdf | 50 | 网络、操作系统、数据结构、设计模式 | 背 TCP/HTTPS/进程 |\n\n## 一、JavaSE：基础与集合\n\n### Q1. == 和 equals 有什么区别？ （高 · JavaSE P4）\n\n- `==`：基本类型比较值；引用类型比较对象地址，即是否指向同一个对象。\n- `equals`：Object 默认实现等价于 `==`；重写后一般比较属性值。String、Integer 等常用类已重写为“比较值”。\n- 结论：判断值相等用 `equals`，判断是否为同一对象用 `==`；自定义对象重写 `equals` 时必须同时重写 `hashCode`。\n\n### Q2. hashCode 有什么用？为什么重写 equals 还要重写 hashCode？ （高 · JavaSE P4-5）\n\n- `hashCode` 返回哈希值，用于在 HashMap/HashSet 中快速定位桶；`equals` 用于在桶内精确比较。\n- 契约：`equals` 为 true 的两个对象，`hashCode` 必须相同；`hashCode` 相同不代表 `equals` 为 true（哈希碰撞）。\n- 只重写 `equals` 不重写 `hashCode`，相等对象会落到不同桶，导致 HashSet 去重失效、HashMap 查找不到。\n\n### Q3. String、StringBuffer、StringBuilder 有什么区别？ （高 · JavaSE P10）\n\n- String：不可变，每次修改都会产生新对象；适合少量字符串和常量。\n- StringBuffer：可变、线程安全，方法基本都加 `synchronized`；适合多线程大量拼接。\n- StringBuilder：可变、线程不安全、性能更高；适合单线程大量拼接，是最常用选择。\n\n### Q4. Java 集合体系怎么选？ （高 · JavaSE P12）\n\n- 需要存取有序、可重复：List。ArrayList 基于动态数组，适合随机访问；LinkedList 基于双向链表，适合头尾操作。\n- 需要去重：Set。HashSet 基于 HashMap，无序；TreeSet 基于红黑树，可排序。\n- 需要 key-value：Map。HashMap 无序、性能高；TreeMap 按 key 排序；ConcurrentHashMap 线程安全。\n- 需要先进先出：Queue。LinkedList 或 ArrayDeque；ArrayDeque 基于循环数组，作为栈/队列通常更高效。\n\n### Q5. ArrayList 和 LinkedList 有什么区别？ （高 · JavaSE P13）\n\n- 底层：ArrayList 是动态数组；LinkedList 是双向链表。\n- 随机访问：ArrayList 支持 O(1) 下标访问；LinkedList 必须从头/尾遍历，O(n)。\n- 增删：ArrayList 中间增删要移动元素；LinkedList 头尾增删 O(1)，但“按位置插入”仍要先 O(n) 找节点，所以不一定更快。\n- 内存：ArrayList 会预留容量；LinkedList 每个节点额外存前后指针，单元素开销更大。\n\n### Q6. HashMap 的底层结构是什么？扩容和树化规则？ （高 · JavaSE P15-20）\n\n- JDK7：数组 + 链表，头插法；JDK8：数组 + 链表/红黑树，尾插法。\n- 默认容量 16、负载因子 0.75；元素数超过“容量 × 0.75”时扩容为原来的 2 倍。\n- 定位：先对 key 的 hash 做扰动，再用 `(n-1) &amp; hash` 计算下标；容量为 2 的幂时等价于取模且分布更均匀。\n- 树化：链表长度 ≥ 8 且数组容量 ≥ 64 时转红黑树；红黑树节点数 ≤ 6 时退化为链表。红黑树查找 O(log n)，平衡二叉树自平衡开销更大。\n- 线程不安全：并发 put 可能覆盖、扩容可能丢数据；JDK7 头插法并发扩容可能形成环。并发场景用 ConcurrentHashMap。\n\n### Q7. ConcurrentHashMap 为什么线程安全？JDK7 和 JDK8 有什么区别？ （高 · JavaSE P21-24）\n\n- JDK7：Segment 分段锁，每个 Segment 一把锁，默认 16 段，最大并发度受段数限制。\n- JDK8：取消分段锁，用 CAS + `synchronized` 锁住链表头/红黑树根节点；没有 hash 冲突时可并发写入。\n- 对比 Hashtable：Hashtable 整表一把锁，并发度低；ConcurrentHashMap 粒度更细，性能更好。\n- 注意：ConcurrentHashMap 的 key/value 不允许为 null。\n\n### Q8. 基本类型、包装类、装箱拆箱、Integer 缓存 （中 · JavaSE P1-3）\n\n- 8 种基本类型：byte、short、int、long、float、double、char、boolean；都有对应包装类。\n- 包装类可以为 null、可用于泛型、对象在堆；基本类型有默认值、开销小、通常在栈上。\n- 装箱调用 `valueOf()`，拆箱调用 `xxxValue()`；`Integer` 默认缓存 -128~127，缓存范围内 `==` 可能为 true，范围外为 false，比较值统一用 `equals`。\n\n### Q9. 为什么金额用 BigDecimal 不用 double？ （中 · JavaSE P1）\n\n- double 是二进制浮点数，很多十进制小数无法精确表示，会出现精度丢失。\n- BigDecimal 用十进制精确表示（unscaled value + scale），适合金额、汇率等精确计算。\n- 注意：创建 BigDecimal 用字符串构造器 `new BigDecimal(\"0.1\")`，不要用 double 构造器。\n\n### Q10. 深拷贝、浅拷贝、引用拷贝有什么区别？ （中 · JavaSE P3）\n\n- 引用拷贝：两个引用指向同一个对象，修改互相可见。\n- 浅拷贝：新建对象，但内部引用类型属性仍指向原对象；常用 `clone()`。\n- 深拷贝：连同内部引用对象一起复制，完全独立；可用递归 clone、序列化/反序列化、JSON 转换。\n\n### Q11. 抽象类和接口有什么区别？怎么选？ （中 · JavaSE P5）\n\n- 抽象类：单继承，可以有构造器、成员变量、普通方法；适合“is-a”的继承关系。\n- 接口：多实现，变量默认 `public static final`；JDK8 支持 default/static 方法，JDK9 支持 private 方法；适合“能力/契约”抽象。\n- 选择：需要共享实现和状态用抽象类；需要多实现、解耦、定义标准用接口。\n\n### Q12. 面向对象三大特征、多态、重载与重写 （中 · JavaSE P6-7）\n\n- 封装：隐藏内部细节，暴露安全接口；继承：复用父类结构；多态：同一行为在不同对象上有不同实现。\n- 多态三条件：继承、方法重写、父类引用指向子类对象；成员方法看运行时类型，成员变量和静态方法看编译时类型。\n- 重载：方法名相同、参数列表不同，编译期绑定；重写：子类覆盖父类方法，运行期绑定，要求返回值/异常不扩大、访问权限不缩小。\n\n### Q13. String 为什么不可变？常量池和 new String 有什么区别？ （中 · JavaSE P8-11）\n\n- String 类是 final，内部字符数组是 private final，且不提供修改方法，所以不可变。\n- 不可变带来：常量池复用、线程安全、hash 可缓存、作为 HashMap key 安全。\n- 字面量 `\"abc\"` 优先复用字符串常量池；`new String(\"abc\")` 在堆上创建新对象（常量池没有时还会先创建常量）。\n- 循环拼接用 StringBuilder；`+` 在编译期可优化，但循环中会反复创建对象。\n\n### Q14. 反射是什么？平时哪里用？ （中 · JavaSE P25-26）\n\n- 反射是在运行期获取类的结构（构造器、方法、字段、注解）并操作对象的能力。\n- 获取 Class 三种方式：`Class.forName()`、`类.class`、`对象.getClass()`。\n- 用途：Spring 的 Bean 创建与依赖注入、MyBatis Mapper 代理、JDBC 驱动加载、注解处理、动态代理。\n- 缺点：绕过编译期检查、性能有开销、破坏封装；框架用得多，业务代码少用。\n\n### 中频清单（能一句话回答即可）\n\n- 面向对象和面向过程的区别：前者以对象/职责组织，后者以步骤/函数组织。\n- 类和对象：类是模板，对象是实例；对象在堆，引用在栈。\n- static：属于类，类加载时初始化，所有对象共享；不能访问非静态成员。\n- final：修饰类不可继承、方法不可重写、变量不可重新赋值；引用不可变不等于对象内容不可变。\n- String 直接赋值和 new 的区别：字面量走常量池，new 在堆上新建对象。\n- 字符串常量池作用：避免重复创建字符串，节省内存，提升比较效率。\n- 集合的线程安全版本：Vector、Hashtable 已过时；并发场景用 ConcurrentHashMap、CopyOnWriteArrayList。\n\n## 二、JUC：并发与线程池\n\n### Q1. 进程和线程有什么区别？ （高 · JUC P1）\n\n- 进程是操作系统分配资源的基本单位，拥有独立内存空间；线程是 CPU 调度的基本单位，共享进程的堆和方法区。\n- 每个线程有自己的程序计数器、虚拟机栈、本地方法栈；线程切换比进程切换轻量。\n- Java 启动 main 方法就是启动一个 JVM 进程，main 所在线程是主线程。\n\n### Q2. Java 创建线程有几种方式？start 和 run 有什么区别？ （高 · JUC P2-3）\n\n- 常见四种：继承 Thread、实现 Runnable、实现 Callable（有返回值/可抛异常）、线程池。\n- 本质只有一种：调用 `Thread.start()`，由 JVM 调用本地方法 `start0` 创建操作系统线程。\n- 直接调用 `run()` 只是普通方法调用，不会创建新线程；`start()` 才会启动新线程。\n\n### Q3. 线程有哪几种状态？ （中 · JavaSE P28 / 计算机基础 P26）\n\n- NEW、RUNNABLE、BLOCKED、WAITING、TIMED_WAITING、TERMINATED 六种。\n- BLOCKED 是等待 synchronized 锁；WAITING 是 wait/join/park 后无限等待；TIMED_WAITING 是带超时的等待。\n- 注意：Java 的 RUNNABLE 同时覆盖“可运行”和“正在运行”，还包含等待 OS 调度的状态。\n\n### Q4. wait/notify 和 sleep 有什么区别？ （中 · JUC P4）\n\n- `sleep` 是 Thread 静态方法，不释放锁，到时自动醒；`wait` 是 Object 方法，会释放监视器锁，需要 notify/notifyAll 或中断唤醒。\n- `wait/notify` 必须在 synchronized 块内调用，否则抛 IllegalMonitorStateException。\n- 它们都让线程进入等待，但 wait 依赖对象监视器，sleep 不依赖锁。\n\n### Q5. ThreadPoolExecutor 的 7 个参数是什么？ （高 · JUC P5）\n\n- corePoolSize：核心线程数；maximumPoolSize：最大线程数；keepAliveTime + unit：非核心线程空闲存活时间。\n- workQueue：任务队列；threadFactory：线程工厂；handler：拒绝策略。\n- 核心线程默认常驻；临时线程在“核心线程忙 + 队列满 + 还能扩容”时才创建，空闲超时后销毁。\n\n### Q6. 线程池的任务执行流程和拒绝策略？ （高 · JUC P6 / P9）\n\n- 流程：核心线程 → 阻塞队列 → 扩容到最大线程 → 拒绝策略。\n- 四种拒绝策略：AbortPolicy 抛异常（默认）、CallerRunsPolicy 调用者线程执行、DiscardPolicy 静默丢弃、DiscardOldestPolicy 丢弃最老任务再尝试。\n- 选择：不能丢任务用 CallerRunsPolicy 或自定义；允许丢用 Discard；核心业务建议自定义记录日志/降级。\n\n### Q7. 线程池线程数怎么设置？ （高 · JUC P7）\n\n- CPU 密集型：核心线程数约为 CPU 核数 + 1，减少上下文切换。\n- IO 密集型：核心线程数约为 CPU 核数 × 2，或按“阻塞系数”估算，因为线程大部分时间在等 IO。\n- 公式只是起点，最终要压测：看 CPU 使用率、任务队列、RT、拒绝次数来调。\n\n### Q8. Executors 有哪些常用线程池？为什么阿里规范禁用？ （高 · JUC P7-8）\n\n- newCachedThreadPool：全临时线程，最大线程数近似无界；newFixedThreadPool：固定核心线程；newSingleThreadExecutor：单核心线程；newScheduledThreadPool：支持定时/周期任务。\n- Fixed/Single 使用无界队列，任务堆积可能 OOM；Cached/Scheduled 最大线程数近似无界，线程暴涨可能 OOM。\n- 规范要求用 ThreadPoolExecutor 显式指定 7 个参数，明确队列容量和拒绝策略。\n\n### Q9. Java 中有哪些锁？怎么分类？ （高 · JUC P9-11）\n\n- 乐观锁/悲观锁：乐观锁先尝试 CAS，失败重试；悲观锁先加锁再操作，代表 synchronized。\n- 公平锁/非公平锁：公平锁按排队顺序获取，非公平锁允许插队，吞吐更高但可能饥饿。\n- 可重入锁/不可重入锁：同一线程可重复获取同一把锁；Java 的 synchronized 和 ReentrantLock 都是可重入的。\n- 读写锁：读读不互斥、读写互斥、写写互斥；适合读多写少。\n\n### Q10. synchronized 怎么用？原理是什么？ （高 · JUC P12-13）\n\n- 修饰实例方法锁当前对象 this；修饰静态方法锁 Class 对象；修饰代码块锁括号里的对象。\n- 原理：对象头 Mark Word 关联 Monitor；同步代码块用 `monitorenter`/`monitorexit` 指令，方法用 ACC_SYNCHRONIZED 标志。\n- Monitor 记录 owner、重入次数、等待队列；竞争失败线程进入阻塞/等待。\n\n### Q11. synchronized 可重入怎么实现？JDK6 做了哪些优化？ （高 · JUC P14-15）\n\n- 可重入靠 Monitor 的重入计数：进入一次加一，退出一次减一，减到 0 才真正释放锁。\n- 锁升级：无锁 → 偏向锁 → 轻量级锁 → 重量级锁；目的是减少操作系统互斥量带来的用户态/内核态切换开销。\n- 偏向锁适用于“同一线程反复进入”；轻量级锁用 CAS 自旋；竞争激烈才膨胀为重量级锁。JDK15 后偏向锁默认关闭并废弃。\n\n### Q12. Lock 和 synchronized 有什么区别？ （高 · JUC P16）\n\n- synchronized 是关键字、JVM 实现、自动释放锁；Lock 是接口、JDK 实现、必须手动 `unlock()`（放在 finally）。\n- Lock 支持可中断等待、超时 `tryLock`、公平锁、多个 Condition 条件队列。\n- synchronized 更简单、不易漏释放；需要高级功能时用 ReentrantLock。\n\n### Q13. CAS 是什么？有什么问题？ABA 怎么解决？ （高 · JUC P17-19）\n\n- CAS 包含三个值：V 内存值、E 期望值、N 新值；只有 V 等于 E 时才把 V 改为 N，否则失败重试。\n- 底层由 Unsafe 的 native 方法调用 CPU 原子指令（如 cmpxchg）保证原子性。\n- 问题：自旋失败消耗 CPU；一次只能保证一个变量原子性；ABA 问题。\n- ABA：值从 A 改成 B 又改回 A，CAS 以为没变过；用 `AtomicStampedReference` 加版本号解决。\n\n### Q14. AQS 是什么？ReentrantLock 底层怎么实现？ （高 · JUC P19-22）\n\n- AQS 是 JUC 的同步器框架，核心是 volatile 的 `state` + CAS 修改 + 双向 FIFO 等待队列。\n- 获取锁：CAS 把 state 从 0 改为 1，成功即持有；失败进入等待队列并被挂起，前驱释放时唤醒。\n- ReentrantLock 用 state 作重入计数；独占模式；可切换公平/非公平；Condition 对应条件队列。\n- AQS 还支撑 Semaphore、CountDownLatch、ReentrantReadWriteLock 等。\n\n### Q15. JMM 三大特性是什么？volatile 能保证什么？ （高 · JUC P23-24）\n\n- JMM 三大特性：原子性、可见性、有序性。\n- volatile 保证可见性（写立即刷主存、读从主存读）和有序性（内存屏障禁止重排），不保证原子性。\n- 典型用途：状态标志位、DCL 单例的实例引用；`i++` 这种复合操作要用 AtomicInteger 或加锁。\n- volatile 与 synchronized 区别：volatile 轻量、不阻塞、只作用于变量、不保证原子性；synchronized 可保证原子性和可见性，但会阻塞。\n\n### Q16. ThreadLocal 是什么？为什么会内存泄漏？ （高 · JUC P24-27）\n\n- ThreadLocal 为每个线程提供独立副本，实现线程间隔离、线程内共享；数据存在 Thread 的 ThreadLocalMap 中。\n- Entry 的 key 是 ThreadLocal 的弱引用，value 是强引用；ThreadLocal 被回收后 key 变 null，但 value 仍被线程持有。\n- 线程池线程长期存活，不调用 `remove()` 会导致 value 无法回收，造成内存泄漏；用完必须 remove。\n- 与 synchronized 区别：synchronized 是“锁共享资源”，ThreadLocal 是“每线程一份副本，不共享”。\n\n### Q17. 死锁是什么？四个必要条件？ （中 · JUC P3）\n\n- 多个线程互相持有对方需要的资源并等待，导致全部无法推进。\n- 四个条件：互斥、持有并等待、不可剥夺、循环等待；破坏任意一个即可预防。\n- 排查：`jstack` 看线程栈和锁持有关系；预防：固定加锁顺序、超时、减少锁范围。\n\n### 中频清单\n\n- 线程间通信：wait/notify、Condition、共享变量、BlockingQueue、管道流。\n- submit 和 execute：submit 返回 Future 可拿结果/异常；execute 无返回值。\n- 线程池状态：RUNNING、SHUTDOWN、STOP、TIDYING、TERMINATED。\n- 读写锁：ReentrantReadWriteLock，读读共享、读写互斥、写写互斥。\n- CountDownLatch：一个线程等 N 个任务完成，一次性；CyclicBarrier：N 个线程互相等待，可复用。\n- Semaphore：控制同时访问的线程数，适合限流。\n- 原子类：AtomicInteger、LongAdder（高并发计数更优）、AtomicReference。\n- AQS 独占/共享：独占一次一个线程（ReentrantLock），共享多个线程同时获取（Semaphore/CountDownLatch）。\n\n## 三、JVM：内存与 GC\n\n### Q1. JVM 内存结构分为哪些区域？ （高 · JVM P1-3）\n\n- 线程私有：程序计数器、虚拟机栈、本地方法栈。\n- 线程共享：堆、方法区（JDK8 起用元空间实现，位于本地内存）。\n- 程序计数器唯一不会 OOM；虚拟机栈溢出抛 StackOverflowError；堆和方法区不足抛 OutOfMemoryError。\n- JDK7 之前字符串常量池在永久代，JDK7 移到堆，JDK8 永久代被元空间替代。\n\n### Q2. 堆和栈有什么区别？ （高 · JVM P3）\n\n- 栈：线程私有，存栈帧、局部变量、方法参数、返回地址；方法结束自动出栈，生命周期确定。\n- 堆：线程共享，存对象实例和数组；对象由 GC 回收，生命周期不确定。\n- 栈空间小，递归过深会 StackOverflow；堆空间大，对象过多/泄漏会 OOM。\n\n### Q3. 大对象、字符串常量池、对象分配 （中 · JVM P4-5）\n\n- 大对象通常直接进入老年代，避免在新生代反复复制、减少 Minor GC 和内存碎片。\n- 字符串常量池用于复用字符串字面量，JDK7 起位于堆中。\n- 对象优先在 Eden 分配；经历多次 Minor GC 仍存活的对象晋升老年代。\n\n### Q4. 内存泄漏和内存溢出有什么区别？ （高 · JVM P6-7）\n\n- 内存泄漏：对象不再使用但仍被引用，GC 无法回收，可用内存逐渐减少。\n- 内存溢出：JVM 申请不到足够内存，抛出 OutOfMemoryError；泄漏长期积累也会导致溢出。\n- 常见 OOM：堆空间（对象太多/泄漏）、元空间（类太多/动态生成类）、直接内存（NIO/Netty）、栈溢出（递归过深，实际是 StackOverflowError）。\n\n### Q5. 强引用、软引用、弱引用、虚引用有什么区别？ （中 · JVM P8-10）\n\n- 强引用：普通引用，只要可达就不会回收，宁可 OOM。\n- 软引用：内存不足时才回收，适合做缓存。\n- 弱引用：下一次 GC 一定回收，ThreadLocalMap 的 key 就用弱引用。\n- 虚引用：不影响生命周期，主要用于回收时收到通知，配合引用队列做资源清理。\n\n### Q6. 如何判断对象可以被回收？ （高 · JVM P11）\n\n- 引用计数：被引用一次加一，归零可回收；缺点是无法处理循环引用。\n- 可达性分析：从 GC Roots 向下搜索，不可达的对象可回收。\n- GC Roots 包括：栈中局部变量、静态变量、常量、JNI 引用、活跃线程等。\n\n### Q7. 垃圾回收算法有哪些？ （高 · JVM P12）\n\n- 标记-清除：标记可回收对象再清除；实现简单，但会产生内存碎片。\n- 复制：把存活对象复制到另一块空间，再清空原空间；无碎片、效率高，但需要双倍空间，适合新生代。\n- 标记-整理：标记后把存活对象向一端移动，再清理边界外内存；无碎片，但移动对象有开销，适合老年代。\n- 分代收集：按对象生命周期分新生代/老年代，分别采用合适算法。\n\n### Q8. 分代收集和 Minor GC / Full GC （高 · JVM P13-14 / P20）\n\n- 新生代分 Eden + 两个 Survivor；Eden 满触发 Minor GC，存活对象复制到 Survivor，年龄加一，默认 15 岁晋升老年代。\n- 老年代满、元空间满、大对象分配失败、晋升失败、`System.gc()` 等可能触发 Full GC。\n- Minor GC 频繁但快；Full GC 慢，应尽量避免频繁发生。\n\n### Q9. CMS 和 G1 的区别？ （高 · JVM P15-19）\n\n- CMS：老年代收集器，标记-清除，追求低停顿；流程为初始标记（STW）、并发标记、重新标记（STW）、并发清除。缺点：占 CPU、浮动垃圾、内存碎片，可能触发 Full GC。\n- G1：把堆划分为 Region，整体标记-整理、局部复制；流程为初始标记、并发标记、最终标记、筛选回收；可设置期望停顿时间，适合大堆。\n- 选择：小堆、低延迟可用 CMS；大堆、想兼顾吞吐和停顿用 G1。现代 JDK 默认 G1。\n\n### Q10. 类加载器和双亲委派模型 （中/高 · JVM P21-22）\n\n- 类加载器：Bootstrap（启动类，加载 JDK 核心类）、Platform/Extension（平台/扩展类）、Application（应用 classpath）、自定义类加载器。\n- 双亲委派：加载请求先交给父加载器，父加载器加载不了才由子加载器尝试；避免类重复加载、保护核心 API 不被篡改。\n- 打破场景：JDBC SPI（核心类需要加载第三方实现）、Tomcat 应用隔离、热部署、OSGi。\n\n### 中频清单\n\n- JVM 组成：类加载子系统、运行时数据区、执行引擎、本地接口。\n- 对象创建过程：类加载检查、分配内存、零值初始化、设置对象头、执行构造方法。\n- TLAB：线程本地分配缓冲，减少堆分配竞争。\n- 逃逸分析：对象不逃逸时可栈上分配、标量替换、锁消除。\n- 常见的垃圾回收器：Serial、ParNew、Parallel Scavenge、Serial Old、Parallel Old、CMS、G1、ZGC、Shenandoah。\n- Full GC 排查：`jstat -gcutil`、`jmap`、GC 日志、堆 dump。\n\n## 四、MySQL：索引、事务与优化\n\n### Q1. InnoDB 和 MyISAM 有什么区别？ （高 · MySQL P4）\n\n- InnoDB：支持事务、行级锁、外键、MVCC、崩溃恢复（redo log），适合高并发和完整性要求高的场景。\n- MyISAM：表锁、不支持事务和外键、不支持 MVCC，崩溃恢复能力弱，适合读多写少、事务要求低的场景。\n- Memory：数据在内存、默认哈希索引、表锁，适合临时缓存，已被 Redis 替代。\n\n### Q2. MySQL 索引有哪些类型？聚簇索引和二级索引是什么？ （高 · MySQL P5）\n\n- 逻辑分类：主键索引、唯一索引、普通索引、前缀索引、联合索引、全文索引。\n- 物理分类：聚簇索引（主键索引）叶子节点存整行数据，一张表只有一个；二级索引叶子节点存索引列 + 主键值。\n- 走二级索引查非索引列时，先拿主键再回聚簇索引查整行，这个过程叫回表。\n\n### Q3. 为什么 InnoDB 用 B+ 树，不用 B 树或哈希？ （高 · MySQL P5）\n\n- B+ 树非叶子节点只存索引，扇出更大、树更矮，减少磁盘 IO。\n- 叶子节点按顺序链表连接，范围查询、排序、分页友好。\n- B 树非叶子也存数据，扇出小、树更高；哈希索引不支持范围和排序，且有哈希冲突。\n\n### Q4. 什么是回表？什么是覆盖索引？ （高 · MySQL P6）\n\n- 回表：二级索引只拿到主键，还要回主键索引查完整行。\n- 覆盖索引：查询需要的列都在索引中，直接从索引返回，不用回表。\n- 优化：把常用查询列放进联合索引，避免 `select *`，用 `explain` 看 Extra 是否出现 Using index。\n\n### Q5. 最左前缀原则和索引失效场景 （高 · MySQL P6-8）\n\n- 联合索引 (a,b,c) 从最左列 a 开始连续匹配；查询条件顺序不影响，优化器会调整。\n- 跳过 a 直接查 b/c 不走索引；a 用了范围查询后，后面的列可能用不上。\n- 索引失效：索引列做函数/运算、隐式类型转换、`%` 开头的 like、OR 两侧不全有索引、`!=`/`is null` 等可能放弃索引（以 explain 为准）。\n\n### Q6. 联合索引怎么设计？ （高 · MySQL P7-8）\n\n- 把区分度高、最常用于等值过滤的列放前面；区分度低的列放后面。\n- 尽量让联合索引覆盖常用查询列，减少回表。\n- 控制索引数量：索引越多，占空间、增删改维护成本越高。\n\n### Q7. 索引的优缺点、设计原则、什么时候不要索引 （高 · MySQL P8-14）\n\n- 优点：加速查询、加速排序/分组、唯一索引保证唯一性。\n- 缺点：占空间；增删改要维护 B+ 树；过多索引拖慢写入。\n- 适合建索引：数据量大、查询频繁、区分度高、常用于 where/order by/group by/join 的列。\n- 不适合：频繁增删改的列、大量重复值的列、表数据量很小、查询返回大部分行。\n\n### Q8. 常见 SQL 优化手段 （高 · MySQL P9-10）\n\n- 避免 `select *`，只查需要的列；尽量用覆盖索引。\n- 索引列上不做函数/运算，避免隐式转换，避免 `%` 开头 like。\n- 主键自增，避免页分裂；update/delete 的 where 用索引列，尽量走行锁。\n- 深分页用“游标/延迟关联”：先查主键再回表，或 `where id &gt; lastId`。\n- 多表关联时被驱动表字段要有索引；`count(*)` 在 InnoDB 有优化；少用子查询。\n\n### Q9. 怎么定位慢 SQL？explain 看什么？ （高 · MySQL P16-19）\n\n- 开启慢查询日志，设置 `long_query_time`（常用 1s），找到慢 SQL。\n- `explain` 重点看：`type`（const/eq_ref/ref/range/index/ALL）、`possible_keys`、`key`、`key_len`、`rows`、`filtered`、`Extra`。\n- Extra 关注：Using index（覆盖索引）、Using filesort（额外排序）、Using temporary（临时表）。\n- 索引选错时可 `force index` 强制索引，但优先分析统计信息和查询写法。\n\n### Q10. 事务 ACID 是什么？ （高 · MySQL P19）\n\n- 原子性：要么全成功、要么全回滚，靠 undo log。\n- 一致性：事务前后数据满足业务约束；是最终目标，由其他三个特性共同保证。\n- 隔离性：并发事务互不干扰，靠 MVCC + 锁。\n- 持久性：提交后永久生效，靠 redo log。\n\n### Q11. 隔离级别和脏读、不可重复读、幻读 （高 · MySQL P20-21）\n\n- 读未提交：能读到未提交数据，脏读；读已提交：避免脏读，但可能不可重复读；可重复读：同一事务快照一致，MySQL 默认；串行化：加锁串行执行。\n- 脏读：读到别的事务未提交的数据；不可重复读：同一事务两次读同一行结果不同；幻读：同一查询两次结果集行数不同。\n- 隔离级别越高，一致性越强，并发性能越低。\n\n### Q12. MVCC 是什么？ReadView 怎么判断可见性？ （中 · MySQL P23-25）\n\n- MVCC 多版本并发控制，让快照读不加锁，读写��阻塞。\n- 隐藏字段：`DB_TRX_ID` 最近修改事务 id、`DB_ROLL_PTR` 回滚指针；undo log 串成版本链。\n- ReadView 记录活跃事务 id 列表、最小/最大事务 id 等；通过比较版本链上的事务 id 判断该版本是否可见。\n- RC 每次快照读生成新 ReadView；RR 第一次快照读生成并复用，所以可重复读。\n- RR 下当前读（`for update`、update、delete）用临键锁防幻读；快照读靠 MVCC。\n\n### Q13. InnoDB 有哪些锁？ （中 · MySQL P27-29）\n\n- 按粒度：全局锁、表级锁（表锁、MDL 元数据锁）、行级锁。\n- 行锁：记录锁（锁单行）、间隙锁（锁区间，不含记录）、临键锁（记录 + 间隙，左闭右开）。\n- 按模式：共享锁 S、排他锁 X、意向锁 IS/IX。\n- InnoDB 行锁加在索引上；where 没走索引可能退化为表锁；死锁用 `SHOW ENGINE INNODB STATUS` 排查。\n\n### Q14. undo log、redo log、binlog 有什么区别？ （高 · MySQL P29-33）\n\n- undo log：逻辑日志，记录修改前状态；用于回滚和 MVCC 版本链，保证原子性。\n- redo log：InnoDB 物理日志，记录数据页修改；WAL 先写日志再刷盘，保证持久性和崩溃恢复，循环写、大小固定。\n- binlog：Server 层逻辑日志，记录 DDL/DML；用于备份、主从复制，追加写、大小不固定。\n- 两阶段提交：redo prepare → 写 binlog → redo commit，保证 redo 和 binlog 一致。\n\n### 中频清单\n\n- 三大范式：1NF 列原子性；2NF 消除部分依赖；3NF 消除传递依赖；实际可反范式冗余。\n- CHAR vs VARCHAR：CHAR 固定长度、尾补空格；VARCHAR 变长、按实际长度存储。\n- SQL 执行顺序：from → where → group by → having → select → order by → limit。\n- MySQL 架构：连接器、查询缓存（8.0 移除）、分析器、优化器、执行器、存储引擎。\n- 索引下推：在索引遍历时就过滤索引列条件，减少回表。\n- 慢查询日志：记录超过 long_query_time 的 SQL，是优化第一步。\n- 单条 update 原子性：行锁 + undo log 保证。\n\n## 五、Redis：缓存与数据结构\n\n### Q1. Redis 为什么快？为什么设计成单线程？ （高 · Redis P1 / P5）\n\n- 纯内存操作；单线程避免锁竞争和线程上下文切换；IO 多路复用（epoll）同时监听大量连接；数据结构经过优化（如跳表、SDS）。\n- Redis 6.0 引入多线程，但只用于网络 IO 读写和协议解析，命令执行仍是单线程，所以不用考虑命令级并发安全。\n- 性能瓶颈通常在网络 IO 和内存，而不是 CPU 计算。\n\n### Q2. Redis 有哪些数据类型？各自适合什么场景？ （高 · Redis P2-4）\n\n- String：缓存对象、计数器（INCR）、分布式锁、限流、Session。\n- Hash：对象字段存储、购物车；可以只更新某个字段，不用整体序列化。\n- List：简单队列（LPUSH + BRPOP）、最新列表、栈；支持两端操作。\n- Set：去重、点赞、共同好友（SINTER）、抽奖；支持交并差。\n- ZSet：排行榜、延时队列（score 存时间戳）、范围查询。\n- 扩展：Bitmap 签到/在线状态、HyperLogLog UV 估算、GEO 附近的人、Stream 消息队列。\n\n### Q3. Redis 的过期策略是什么？为什么过期 key 不立即删除？ （高 · Redis P6）\n\n- 定期删除：默认每 100ms 随机抽查一批设置了过期时间的 key，过期就删。\n- 惰性删除：访问 key 时才检查是否过期，过期则删除并返回空。\n- 不立即删除是为了避免大量 key 同时过期时删除操作占用 CPU，影响响应时间和吞吐。\n- 漏掉的过期 key 靠内存淘汰机制兜底。\n\n### Q4. Redis 内存淘汰策略有哪些？ （高 · Redis P7）\n\n- noeviction：不淘汰，内存满时写操作报错（默认）。\n- allkeys-lru / volatile-lru：按最近最少使用淘汰；allkeys 针对所有 key，volatile 只针对设置了过期时间的 key。\n- allkeys-lfu / volatile-lfu：按访问频率最低淘汰；适合有明显热点的场景。\n- allkeys-random / volatile-random：随机淘汰；volatile-ttl：优先淘汰快过期的 key。\n\n### Q5. RDB 和 AOF 有什么区别？ （高 · Redis P7-9）\n\n- RDB：定时快照，fork 子进程 + 写时复制；文件小、恢复快，但可能丢最后一次快照后的数据，fork 占内存。\n- AOF：追加写命令，`appendfsync` 可选 always/everysec/no；数据更完整，但文件大、恢复慢，需要重写。\n- 混合持久化（4.0+）：AOF 重写时前半段 RDB、后半段 AOF 增量，兼顾恢复速度和完整性。\n- 选型：纯缓存可用 RDB；要求少丢数据用 AOF everysec + 混合；生产配主从/哨兵。\n\n### Q6. 缓存击穿是什么？怎么解决？ （高 · Redis P9）\n\n- 单个热点 key 过期瞬间，大量并发请求同时打到数据库。\n- 互斥锁：缓存 miss 后 `SETNX` 拿锁，拿到锁的线程回源重建，其他线程等待/重试；适合强一致。\n- 逻辑过期：缓存不设 TTL，value 里存逻辑过期时间；过期后异步重建，先返回旧值；适合高可用、允许短暂旧数据。\n- 辅助：热点预热、热点 key 不设过期、限流。\n\n### Q7. 缓存穿透是什么？怎么解决？ （高 · Redis P10）\n\n- 查询数据库和缓存都不存在的数据，请求每次都打到数据库；常见于恶意攻击或业务 bug。\n- 缓存空值：给不存在的 key 存 null，短 TTL，避免大量无效 key 占内存。\n- 布隆过滤器：写入时同时写布隆过滤器，查询前先判断；不存在一定拦截，存在可能误判，且标准布隆过滤器不支持删除。\n- 辅助：参数校验、限流、黑名单、网关拦截。\n\n### Q8. 缓存雪崩是什么？怎么解决？ （高 · Redis P11）\n\n- 大量 key 同时过期，或 Redis 宕机，导致请求全部打到数据库。\n- 过期时间加随机值，打散失效时间；稳定数据可不设过期，异步更新。\n- Redis 高可用：主从、哨兵、Cluster；多级缓存：本地 Caffeine + Redis。\n- 兜底：限流、降级、熔断、缓存预热。\n\n### Q9. 缓存读写策略有哪些？ （高 · Redis P12-13）\n\n- Cache Aside（旁路缓存）：应用先读缓存，miss 读数据库并回写；写时先更新数据库，再删除缓存。最常用。\n- Read/Write Through：应用只和缓存交互，缓存组件负责与数据库同步。\n- Write Behind：写缓存后异步批量写数据库，性能高但可能丢数据。\n\n### Q10. 缓存和数据库一致性怎么保证？ （高 · Redis P14-16）\n\n- 推荐 Cache Aside：先更新数据库，再删除缓存；删除比更新缓存更安全，避免并发覆盖。\n- 先删缓存再更新数据库在并发下可能不一致；可用延迟双删（更新后延迟再删一次）。\n- 强一致场景不适合缓存；最终一致可用消息队列、Canal 订阅 binlog 异步刷新。\n\n### Q11. Redis 分布式锁怎么实现？ （高 · Redis P17-21）\n\n- 加锁：`SET key value NX PX 30000`，value 用唯一标识（如 UUID + 线程 id），保证互斥并避免死锁。\n- 释放：先判断 value 是自己的，再用 Lua 脚本原子删除，避免误删别人的锁。\n- 超时问题：业务没执行完锁就过期，可能被别人拿到；Redisson 用看门狗自动续期。\n- 集群主从切换可能丢锁，业务要做幂等兜底；RedLock 了解即可。\n\n### Q12. Redis 高可用方案有哪些？ （中 · Redis P22-24）\n\n- 主从复制：主写从读，全量 + 增量同步，故障时需手动切换。\n- 哨兵 Sentinel：监控主从、自动故障转移、通知客户端，解决高可用。\n- Cluster：数据分片，16384 个哈希槽，支持水平扩展和故障转移；key 通过 CRC16 取模定位槽。\n\n### 中频清单\n\n- Redis 应用场景：缓存、排行榜、计数器、分布式锁、Session、消息队列、附近的人。\n- 本地缓存 vs Redis：本地更快但容量小、多实例不一致；Redis 集中式、容量大、有网络开销。\n- 缓存预热：上线前把热点数据加载到缓存，避免冷启动打数据库。\n- 大 key：拆分、压缩、异步删除；热 key：本地缓存、读写分离、限流。\n- 过期字典：Redis 用 expires dict 保存 key 的过期时间。\n- Redis 单线程不等于一定单线程：6.0 网络 IO 多线程，命令执行单线程。\n\n## 六、Spring 全家桶\n\n### Q1. IOC 和 DI 是什么？有什么好处？ （高 · Spring P1）\n\n- IOC 控制反转：对象的创建、依赖装配、生命周期交给 Spring 容器，而不是程序员手动 new。\n- DI 依赖注入：容器在运行期把依赖注入到组件中，方式有构造器、setter、字段。\n- 好处：解耦、便于替换和测试、避免重复创建对象、统一管理生命周期；也是 AOP 的基础。\n- 实现：配置文件/注解 + 反射 + 工厂模式。\n\n### Q2. AOP 是什么？JDK 代理和 CGLIB 有什么区别？ （高 · Spring P2）\n\n- AOP 面向切面：把日志、事务、权限、监控等横切逻辑抽出来，通过代理织入目标方法前后。\n- JDK 动态代理：目标类必须实现接口，生成接口代理类，通过 `InvocationHandler` 增强。\n- CGLIB：生成目标类的子类，通过 `MethodInterceptor` 增强；final 类/方法不能代理。\n- Spring 原生：有接口用 JDK，无接口用 CGLIB；Spring Boot 默认 CGLIB。同类自调用不走代理，事务会失效。\n\n### Q3. Spring 中用到了哪些设计模式？ （中 · Spring P2）\n\n- 工厂：BeanFactory、FactoryBean；单例：Bean 默认 singleton；代理：AOP。\n- 模板方法：JdbcTemplate、RestTemplate；适配器：HandlerAdapter；观察者：ApplicationEvent。\n- 策略：Resource 实现、自定义策略注入；责任链：Spring MVC 拦截器链。\n\n### Q4. Bean 的注入方式有哪些？为什么推荐构造器注入？ （中 · Spring P3）\n\n- 构造器注入、setter 注入、字段注入（@Autowired/@Resource）。\n- 构造器注入：依赖完整、对象不可变、便于单元测试、避免空指针。\n- 字段注入写起来简单，但隐藏依赖、难以脱离容器测试，不推荐在核心业务中使用。\n\n### Q5. Bean 的生命周期？ （中 · Spring P3-5）\n\n- 实例化 → 属性填充 → Aware 回调 → BeanPostProcessor 前置 → 初始化（@PostConstruct / InitializingBean / init-method）→ BeanPostProcessor 后置 → 使用 → 销毁。\n- 销毁：@PreDestroy / DisposableBean / destroy-method。\n- 作用域：singleton、prototype、request、session、application；单例 Bean 线程安全由业务代码保证。\n\n### Q6. Spring 循环依赖怎么解决？ （中 · Spring P5）\n\n- 三级缓存：一级 singletonObjects 存完整 Bean；二级 earlySingletonObjects 存提前暴露的半成品；三级 singletonFactories 存对象工厂。\n- A 依赖 B、B 依赖 A：创建 A 时先暴露 A 的工厂，创建 B 时从二级/三级缓存拿到 A，B 完成后放入一级，再回填 A。\n- 构造器注入的循环依赖默认解决不了，需要 @Lazy 或改设计。\n\n### Q7. Spring 事务管理方式和失效场景 （中 · Spring P6-7）\n\n- 编程式事务：TransactionTemplate / TransactionManager 手动控制；声明式事务：@Transactional，本质是 AOP。\n- 失效：同类自调用、方法非 public（老版本/接口代理常见限制）、异常被 catch 没抛、抛受检异常但没配 rollbackFor、Bean 不被 Spring 管理、多线程、数据库不支持事务。\n- 事务传播：REQUIRED 默认、REQUIRES_NEW 独立事务、NESTED 嵌套保存点。\n\n### Q8. Spring MVC 请求处理流程 （中 · Spring P7-10）\n\n- DispatcherServlet 接收请求 → HandlerMapping 根据 URL 找 Handler → HandlerAdapter 执行 Handler → 返回 ModelAndView → ViewResolver 解析视图 → 渲染 → 返回。\n- 前后端分离时，@ResponseBody 直接把返回对象转 JSON，不再走视图解析。\n- 拦截器：preHandle、postHandle、afterCompletion；过滤器属于 Servlet 容器，拦截器属于 Spring MVC。\n\n### Q9. MyBatis 的 #{} 和 ${} 有什么区别？Mapper 为什么能直接调用？ （中 · Spring P10）\n\n- `#{}` 预编译占位符，替换为 `?`，用 PreparedStatement 赋值；安全、防 SQL 注入，适合参数值。\n- `${}` 字符串直接拼接，不防 SQL 注入；只适合表名、排序字段等需要动态拼接且已校验的场景。\n- Mapper 接口没有实现类，MyBatis 用 JDK 动态代理生成代理对象，根据接口全限定名 + 方法名找到 XML 中的 SQL 并执行。\n\n### Q10. Spring Boot 自动装配原理 （中 · Spring P10-11）\n\n- `@SpringBootApplication` = `@SpringBootConfiguration` + `@EnableAutoConfiguration` + `@ComponentScan`。\n- `@EnableAutoConfiguration` 通过 SPI 加载自动配置类：Spring Boot 2.7 前读 `spring.factories`，2.7 起读 `AutoConfiguration.imports`。\n- 自动配置类配合 `@ConditionalOnClass`、`@ConditionalOnMissingBean` 等条件注解，满足条件才创建 Bean。\n- starter 是依赖聚合 + 自动配置，引入后即可直接注入使用。\n\n### 中频清单（微服务/Cloud 了解即可）\n\n- Spring Boot vs Spring Cloud：Boot 构建单个应用，Cloud 构建分布式微服务治理体系。\n- 微服务组件：注册中心、负载均衡、服务通信、配置中心、链路追踪、网关、熔断限流。\n- 负载均衡策略：轮询、加权轮询、随机、加权随机、一致性哈希、最小活跃数。\n- 服务降级：B 故障时 A 不等 B，直接返回默认值；服务熔断：B 故障率过高时 A 不再调用 B，直接降级。\n- 微服务优缺点：独立开发部署扩展，但分布式复杂度、数据一致性、测试部署成本更高。\n\n## 七、MQ：消息队列\n\n### Q1. 为什么用 MQ？ （高 · MQ P1）\n\n- 异步：主流程只写本地库并发送消息，耗时操作由下游异步处理，降低接口 RT。\n- 削峰：高峰期把请求堆在 MQ，下游按能力消费，保护数据库和核心服务。\n- 解耦：生产方只发消息，谁需要谁订阅，新增/下线系统不影响生产方。\n\n### Q2. MQ 的优缺点？ （高 · MQ P2）\n\n- 优点：异步、削峰、解耦。\n- 缺点：系统可用性受 MQ 影响；复杂度提高（重复消费、丢消息、顺序）；数据一致性变难。\n\n### Q3. 如何保证消息不丢失？ （高 · MQ P2-3）\n\n- 生产端：发送确认机制（ack/confirm），失败重试；关键业务用事务消息或本地消息表。\n- Broker：开启持久化，消息落盘；做集群保证高可用。\n- 消费端：手动 ack，业务处理成功后再确认；失败重试，超过次数进入死信队列。\n\n### Q4. 如何保证消息幂等？ （高 · MQ P4-5）\n\n- 重复来源：生产端重试、消费端 ack 前宕机/网络延迟导致重发。\n- 唯一 id：发送时生成业务唯一 id，消费端用 Redis `SETNX` 去重，设置过期时间。\n- 业务唯一键：订单号、支付流水号；落库前查重或数据库唯一索引。\n- 更新类操作可用乐观锁（版本号/状态机），避免重复覆盖。\n\n### Q5. 消息积压怎么处理？ （中 · MQ P6）\n\n- 短期：增加消费者、提高单消费者处理能力（线程池/批量），但注意 CPU 和下游压力。\n- 严重积压：先修复消费者 bug，扩容队列/分区，用临时消费者快速搬运消息，再按原架构恢复。\n- 预防：监控堆积量、消费 RT、失败率，设置告警和死信队列。\n\n### Q6. 如何保证消息顺序？ （中 · MQ P7）\n\n- 单队列/单分区内通常有序，跨队列/分区不保证。\n- 局部有序：按业务 id（如订单 id）路由到同一队列/分区，再由一个消费者串行消费。\n- 全局有序：只能单队列 + 单消费者，性能差，通常不必要。\n\n### Q7. 延时队列和死信队列是什么？ （中 · MQ P3-4）\n\n- 延时队列：消息发送后延迟一定时间才可被消费，用于订单超时取消、定时提醒。\n- 死信队列：消息被拒绝、超时未消费、消费失败超过重试次数后转入的死信队列，用于人工排查和补偿。\n\n## 八、计算机基础\n\n### Q1. OSI 和 TCP/IP 分层模型？为什么要分层？ （高 · 计算机基础 P1-2）\n\n- OSI 七层：物理、数据链路、网络、传输、会话、表示、应用。\n- TCP/IP 四层：网络接口、网络、传输、应用；五层模型把网络接口拆成物理 + 数据链路。\n- 分层让各层独立、解耦、便于实现和替换，把大问题分解为小问题。\n\n### Q2. 应用层和传输层常见协议有哪些？ （高 · 计算机基础 P1-3）\n\n- 应用层：HTTP、HTTPS、DNS、DHCP、FTP、SMTP、SSH、Telnet。\n- 传输层：TCP、UDP。\n- 网络层：IP、ICMP、ARP（ARP 常归到网络层/链路层之间）。\n\n### Q3. TCP 和 UDP 有什么区别？ （高 · 计算机基础 P3）\n\n- TCP 面向连接、可靠、有序、不丢不重、有流量/拥塞控制；UDP 无连接、不可靠、尽力交付、实时性更好。\n- TCP 适合文件传输、网页、支付等可靠性要求高的场景；UDP 适合视频、直播、DNS、游戏等实时场景。\n- TCP 开销大、效率低；UDP 开销小、效率高。\n\n### Q4. TCP 如何保证可靠性？ （中 · 计算机基础 P5-6）\n\n- 序列号 + 确认应答 + 超时重传，保证不丢、不乱序。\n- 校验和检测数据损坏；流量控制用滑动窗口，防止发送方压垮接收方。\n- 拥塞控制：慢启动、拥塞避免、快重传、快恢复，防止压垮网络。\n- 连接管理：三次握手建立、四次挥手释放。\n\n### Q5. 三次握手过程？为什么不能两次？ （高 · 计算机基础 P7-8）\n\n- 第一次：客户端发 SYN（seq=x），进入 SYN_SENT；第二次：服务端回 SYN+ACK（seq=y, ack=x+1），进入 SYN_RECV；第三次：客户端回 ACK（ack=y+1），双方进入 ESTABLISHED。\n- 三次是为了确认双方“发送 + 接收”能力都正常；两次只能确认客户端发送、服务端接收。\n- 也能防止历史失效的连接请求突然到达服务端，避免建立错误连接。\n\n### Q6. 四次挥手过程？为什么 TIME_WAIT 要等 2MSL？ （高 · 计算机基础 P9）\n\n- 客户端发 FIN → 服务端回 ACK → 服务端发 FIN → 客户端回 ACK，双方关闭。\n- 为什么四次：服务端收到 FIN 后可能还有数据要发，ACK 和 FIN 不能合并。\n- 2MSL 是为了保证最后一个 ACK 能到达服务端；如果丢失，服务端会重传 FIN，客户端还能再回 ACK。\n\n### Q7. 浏览器输入 URL 到显示页面发生了什么？ （中 · 计算机基础 P10）\n\n- DNS 解析域名得到 IP；建立 TCP 连接；HTTPS 还要 TLS 握手。\n- 发送 HTTP 请求，服务端处理并返回响应；浏览器解析 HTML、CSS、JS，构建 DOM/渲染树并绘制。\n- 期间可能涉及缓存、CDN、负载均衡、重定向。\n\n### Q8. HTTP 和 HTTPS 有什么区别？HTTPS 怎么建立连接？ （高 · 计算机基础 P13-15）\n\n- HTTP 明文传输，存在窃听、篡改、冒充风险；HTTPS 在 TCP 和 HTTP 之间加 SSL/TLS，加密传输。\n- 端口：HTTP 80，HTTPS 443；HTTPS 需要 CA 证书。\n- HTTPS 握手：客户端请求 → 服务端返回证书 → 客户端验证证书 → 生成对称会话密钥 → 用服务端公钥加密会话密钥 → 服务端私钥解密 → 双方用对称密钥通信。\n- 非对称加密用于交换密钥，对称加密用于传输数据，兼顾安全和性能。\n\n### Q9. DNS 解析流程？用 TCP 还是 UDP？ （中 · 计算机基础 P16-17）\n\n- 浏览器缓存 → 系统缓存 → hosts → 本地 DNS 服务器 → 根域名服务器 → 顶级域名服务器 → 权威域名服务器。\n- 递归查询和迭代查询结合；结果逐级缓存。\n- 普通查询用 UDP 53 端口；响应过大或区域传送时用 TCP。\n\n### Q10. HTTP 是无状态的吗？Cookie、Session、JWT 有什么区别？ （中 · 计算机基础 P18-19）\n\n- HTTP 本身无状态，每次请求独立；靠 Cookie/Session/Token 维持登录态。\n- Cookie 存在客户端，容量小、可被篡改；Session 存在服务端，靠 SessionId 关联，占用服务端内存，集群需共享。\n- JWT 是无状态令牌，服务端不存，靠签名校验；适合分布式，但注销/续期较麻烦。\n\n### Q11. 什么是跨域？怎么解决？ （中 · 计算机基础 P11）\n\n- 浏览器同源策略限制：协议、域名、端口三者不同即为跨域。\n- 方案：CORS（服务端设置响应头）、JSONP（只支持 GET）、代理服务器（开发环境/网关）、PostMessage 等。\n\n### Q12. 进程状态、线程切换、死锁 （中 · 计算机基础 P22-28）\n\n- 进程状态：新建、就绪、运行、阻塞、终止；阻塞是等 IO/事件，就绪是等 CPU。\n- 线程切换比进程切换快，因为同进程线程共享地址空间，不用切换页表等资源。\n- 死锁四条件：互斥、持有并等待、不可剥夺、循环等待；预防靠破坏条件，避免靠银行家算法，检测靠资源图。\n\n### Q13. 用户态、内核态、系统调用 （中 · 计算机基础 P22）\n\n- 用户态权限受限，不能直接操作硬件；内核态可执行特权指令、访问全部资源。\n- 系统调用是用户程序请求内核服务的入口，会触发用户态到内核态切换。\n- 频繁系统调用有开销；IO 多路复用、批量读写可以减少切换。\n\n### Q14. 进程通信和调度算法 （中 · 计算机基础 P24-25）\n\n- 进程通信：共享内存、管道、消息队列、信号、Socket、信号量。\n- 调度算法：先来先服务、短作业优先、时间片轮转、优先级、多级反馈队列。\n- 目标：吞吐量、响应时间、公平性、CPU 利用率之间的平衡。\n\n### Q15. 数组、链表、栈、队列、树 （高 · 计算机基础 P36-40）\n\n- 数组：连续内存、随机访问 O(1)、插入删除 O(n)、适合查找。\n- 链表：非连续内存、插入删除 O(1)（已知节点）、查找 O(n)、适合频繁增删。\n- 栈：后进先出，用于函数调用、括号匹配、撤销；队列：先进先出，用于 MQ、任务调度、BFS。\n- 二叉搜索树：左 &lt; 根 &lt; 右，中序遍历有序，平均查找 O(log n)；可能退化成链表。\n\n### Q16. 单例模式和工厂模式 （高/中 · 计算机基础 P41-50）\n\n- 单例：私有构造器、私有静态实例、公有静态获取方法；实现有饿汉、懒汉、DCL + volatile、静态内部类、枚举。\n- 饿汉线程安全但可能浪费；懒汉要处理线程安全；DCL 必须加 volatile 防指令重排；枚举最安全，能防反射和序列化破坏。\n- 工厂：把对象创建封装起来，调用方只依赖工厂；简单工厂、工厂方法、抽象工厂，Spring 的 BeanFactory 是典型应用。\n\n## 九、7 天冲刺计划\n\n| 天数 | 任务 | 产出/自测 |\n| --- | --- | --- |\n| Day 1 | JavaSE：Q1-Q14 + 中频清单 | 能默写 HashMap 结构、String 三兄弟、==/equals/hashCode |\n| Day 2 | MySQL：Q1-Q14 + 索引/事务/MVCC | 能画 B+ 树、回表、MVCC 版本链；能说 5 条 SQL 优化 |\n| Day 3 | Redis：Q1-Q12 + 缓存三问 | 能区分穿透/击穿/雪崩并给出方案 |\n| Day 4 | Spring：Q1-Q10 + 微服务清单 | 能说 IOC/AOP/Bean 生命周期/事务失效/循环依赖 |\n| Day 5 | JUC：Q1-Q17 | 能说线程池流程、7 参数、synchronized 锁升级、ThreadLocal 泄漏 |\n| Day 6 | JVM + MQ：各 Q1-Q10 / Q1-Q7 | 能说内存结构、GC 算法、CMS/G1；MQ 可靠性三段 |\n| Day 7 | 计算机基础 + 全量错题 | 能说 TCP 三次/四次、HTTPS、进程状态；回看标记为“不会”的题 |\n\n### 最后 20 题自测\n\n1. == 和 equals 的区别？为什么重写 equals 要重写 hashCode？\n2. HashMap 的底层结构、扩容、树化条件？为什么线程不安全？\n3. ArrayList 和 LinkedList 怎么选？\n4. String 为什么不可变？StringBuilder 和 StringBuffer 区别？\n5. 线程池 7 参数和执行流程？为什么不用 Executors？\n6. synchronized 原理和锁升级？Lock 有什么区别？\n7. CAS 是什么？ABA 怎么解决？AQS 的核心是什么？\n8. volatile 保证什么、不保证什么？ThreadLocal 为什么会泄漏？\n9. JVM 内存结构？堆和栈的区别？\n10. 如何判断对象可回收？GC 算法和分代收集？\n11. CMS 和 G1 的区别？Full GC 什么时候触发？\n12. 双亲委派是什么？为什么要打破？\n13. 为什么用 B+ 树？回表和覆盖索引？\n14. 最左前缀和索引失效场景？\n15. 事务 ACID、隔离级别、MVCC 和 ReadView？\n16. undo/redo/binlog 的区别？\n17. Redis 为什么快？持久化、过期、淘汰？\n18. 穿透/击穿/雪崩的区别和方案？缓存一致性怎么做？\n19. Redis 分布式锁怎么实现？超时和误删怎么处理？\n20. IOC/AOP、Bean 生命周期、循环依赖、事务失效？\n\n## 附录：265 道题全量索引\n\n按原 PDF 分组，保留原文件页码与难度标记。题后页码可直接回原 PDF 查看详细答案；“高”优先背，“中”查漏，“低”最后看。\n\n### JavaSE.pdf（42 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 中 | Java的基本数据类型 |\n| P1 | 中 | 为什么金额用 BigDecimal 不用 double |\n| P2 | 中 | 基本类型和包装类型的区别？ |\n| P2 | 中 | 自动装箱与拆箱 |\n| P2 | 低 | Integer的缓存问题? |\n| P3 | 中 | 深拷贝和浅拷贝区别？什么是引用拷贝 |\n| P4 | 高 | == 和 equals() 的区别 |\n| P4 | 高 | hashCode() 有什么用？ |\n| P5 | 高 | 重写equals为什么要重写hashcode? |\n| P5 | 中 | 抽象类和接口的区别 |\n| P6 | 中 | 面向对象的三大特征 |\n| P6 | 中 | 面向对象和面向过程的区别 |\n| P7 | 中 | 类和对象 |\n| P7 | 中 | 说⼀说你对多态的理解 |\n| P7 | 中 | 方法的重载和重写有什么区别 |\n| P8 | 中 | 静态变量和静态方法与非静态有什么区别? |\n| P8 | 中 | final的作用 |\n| P9 | 中 | String的不可变性 |\n| P9 | 中 | String直接赋值和new对象的区别 |\n| P10 | 中 | String 创建了几个字符串对象 |\n| P10 | 高 | String和StringBuffer和StringBuilder区别 |\n| P11 | 中 | 字符串拼接用“+” 还是 StringBuilder? |\n| P11 | 中 | 字符串常量池的作用了解吗？ |\n| P12 | 高 | 集合的使用场景与实现 |\n| P13 | 高 | ArrayList |\n| P15 | 高 | HashMap |\n| P21 | 高 | ConcurrentHashMap |\n| P25 | 中 | 反射的基本思想 |\n| P26 | 中 | 你平时什么时候会用到反射 |\n| P27 | 高 | 聊聊线程和进程 |\n| P27 | 高 | Java创建线程有几种方式 |\n| P28 | 中 | 线程状态与线程生命周期 |\n| P30 | 中 | 什么是死锁 |\n| P30 | 中 | 死锁的四个必要条件 |\n| P30 | 中 | 死锁检测, 预防, 避免 |\n| P31 | 高 | ThreadPoolExecutor构造函数 |\n| P32 | 高 | 池的工作流程 |\n| P33 | 高 | 线程池线程数如何设置? |\n| P33 | 中 | 线程池中submit() 和execute()方法有什么区别 |\n| P34 | 高 | Executors中的常用线程池 |\n| P34 | 高 | Executors创建线程池会存在什么问题 |\n| P35 | 中 | 线程池的拒绝策略 |\n\n### JUC.pdf（38 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 高 | 聊聊线程和进程 |\n| P1 | 中 | 进程通信 |\n| P2 | 高 | Java创建线程有几种方式 |\n| P3 | 中 | 什么是死锁 |\n| P3 | 中 | Thread 类中的start() 和 run() 方法有什么区别 |\n| P4 | 中 | 线程间通信方式有哪些？ |\n| P5 | 高 | ThreadPoolExecutor构造函数 |\n| P6 | 高 | 池的工作流程 |\n| P7 | 高 | 线程池线程数如何设置? |\n| P7 | 中 | 线程池中submit() 和execute()方法有什么区别 |\n| P7 | 高 | Executors中的常用线程池 |\n| P8 | 高 | Executors创建线程池会存在什么问题 |\n| P9 | 中 | 线程池的拒绝策略 |\n| P9 | 高 | 常用锁的概念 |\n| P11 | 高 | Java中有哪些常用的锁，在什么场景下使用？ |\n| P12 | 高 | 说一说自己对于 synchronized 关键字的了解 |\n| P12 | 高 | 怎么使用 synchronized 关键字 |\n| P12 | 高 | synchronized原理 |\n| P14 | 高 | synchronized可重入如何实现 |\n| P14 | 高 | JDK1.6 之后的 synchronized 底层做了哪些优化？ |\n| P16 | 高 | Lock和synchronized异同? |\n| P17 | 高 | CAS了解吗 |\n| P18 | 高 | CAS原理 |\n| P18 | 高 | 乐观锁存在哪些问题？ |\n| P19 | 高 | 什么是ABA问题？ABA问题怎么解决？ |\n| P19 | 高 | AQS是什么？AQS的原理是什么？ |\n| P21 | 中 | 讲一下aqs的独占和共享模式 |\n| P22 | 高 | ReentrantLock底层原理 |\n| P22 | 高 | ReentrantLock如何实现可重入 |\n| P23 | 高 | 三大特性 |\n| P23 | 高 | Volatile和synchronized 的区别 |\n| P24 | 高 | 为什么volatile不能保证线程安全？ |\n| P24 | 高 | 原子性? |\n| P24 | 高 | 什么是 ThreadLocal / ThreadLocal 有什么用? |\n| P24 | 高 | ThreadLocal原理 |\n| P25 | 高 | threadlocal内存泄漏问题? |\n| P27 | 高 | 为什么要清除掉threadlocal？ |\n| P27 | 高 | ThreadLocal 与synchronized的不同之处 |\n\n### JVM.pdf（25 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 高 | JVM内存结构 |\n| P1 | 高 | JVM 内存结构：线程私有与共享区域 |\n| P3 | 高 | JVM内存模型里的堆和栈有什么区别 |\n| P4 | 中 | JVM内存结构的常见问题 |\n| P5 | 中 | 如果有个大对象一般是在哪个区域？ |\n| P5 | 中 | 字符串常量池是什么 |\n| P6 | 高 | 内存泄漏和内存溢出有什么不同 |\n| P7 | 中 | jvm有哪几种内存溢出的情况 |\n| P7 | 中 | JVM 的主要组成部分及其作用 |\n| P8 | 中 | 强引用、软引用、弱引用、虚引用 |\n| P11 | 高 | 垃圾回收算法是什么，为了解决了什么问题？ |\n| P11 | 高 | 如何判断对象是否死亡/如何判断对象可以被回收 |\n| P12 | 高 | 垃圾收集有哪些算法，各自的特点？ |\n| P13 | 高 | 分代收集算法 |\n| P15 | 中 | 常见的垃圾回收器有哪些？ |\n| P16 | 高 | 介绍一下 CMS |\n| P17 | 高 | 介绍一下 G1 |\n| P18 | 中 | 如何选择垃圾收集器 |\n| P18 | 中 | 什么情况下使用CMS,什么情况使用G1? |\n| P19 | 中 | G1回收器的特色是什么？ |\n| P20 | 高 | Full GC分别在什么时候发生？ |\n| P20 | 高 | 什么时候会触发fullGC |\n| P21 | 中 | 什么是类加载器? 常见的类加载器? |\n| P22 | 高 | 双亲委派模式 |\n| P22 | 高 | 为什么要打破双亲委派模型 |\n\n### MySQL.pdf（47 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 中 | 数据库三大范式 |\n| P1 | 中 | CHAR和VARCHAR有什么区别？ |\n| P2 | 中 | SQL语句的执行顺序 |\n| P3 | 中 | SQL语句的执行过程/MySQL架构是什么 |\n| P4 | 高 | 数据库存储引擎有哪些 |\n| P4 | 高 | innodb和MyISAM的区别 |\n| P5 | 高 | MySQL中的索引类型 |\n| P5 | 高 | 为什么InnoDB存储引擎选择使用B+树索引结构？ |\n| P6 | 高 | 什么是覆盖索引/什么是回表 |\n| P6 | 高 | 索引的使用原则/索引失效场景 |\n| P7 | 高 | 创建联合索引时需要注意什么？ |\n| P8 | 高 | 什么情况不走联合索引? |\n| P8 | 高 | 索引的优缺点？ |\n| P9 | 高 | 索引设计原则 |\n| P9 | 高 | 常见sql优化手段 |\n| P10 | 中 | SQL优化详解 |\n| P14 | 高 | 什么时候不要使用索引 |\n| P15 | 中 | 索引下推 |\n| P16 | 高 | 怎么找到慢sql? 可以从哪些角度优化? |\n| P17 | 高 | 什么是慢查询日志(slow query log) |\n| P17 | 高 | explain执行计划 |\n| P18 | 高 | 发现查询速度很慢，怎么解决 |\n| P19 | 高 | Explain发现执行的索引不正确的话，怎么办？ |\n| P19 | 高 | 什么是数据库事务/事务四大特性 |\n| P20 | 高 | 隔离性产生的问题 |\n| P21 | 高 | 事务的隔离级别 |\n| P22 | 中 | MySQL 的隔离级别怎么实现的 |\n| P23 | 中 | 单条update语句是原子性的吗？ |\n| P23 | 中 | 什么是 MVCC |\n| P23 | 中 | MVCC 可以为数据库解决什么问题 |\n| P24 | 中 | MVCC 的实现原理 |\n| P24 | 中 | ReadView是什么 |\n| P24 | 中 | 当前读与快照读 |\n| P25 | 中 | MVCC是怎么实现不可重复读的 |\n| P25 | 中 | MVCC是怎么防止幻读的 |\n| P27 | 中 | 锁的分类 |\n| P28 | 中 | InnoDB 有哪几类行锁？ |\n| P29 | 中 | 两个事务同时 update 同一行会怎样 |\n| P29 | 中 | 两条 update 修改不同范围会阻塞吗 |\n| P29 | 高 | 三大日志 |\n| P30 | 高 | binlog主要记录了什么？有什么用？ |\n| P30 | 高 | redo log主要记录了什么？有什么用？ |\n| P30 | 高 | redo log基本过程 |\n| P31 | 中 | redo log 为什么比直接刷磁盘快 |\n| P32 | 中 | binlog 和 redolog 有什么区别？ |\n| P32 | 高 | 为什么需要 redo log |\n| P33 | 高 | undo log |\n\n### Redis.pdf（26 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 高 | redis为什么这么快 |\n| P2 | 高 | Redis常用的数据结构有哪些？ |\n| P2 | 高 | redis每种数据类型的使用场景 |\n| P3 | 低 | 本地缓存和Redis缓存的区别, 优缺点？ |\n| P4 | 中 | redis的常见应用场景/你平时会用redis做什么 |\n| P5 | 中 | Redis 为什么设计成单线程的 |\n| P5 | 中 | Redis一定是单线程的吗 |\n| P5 | 中 | Redis 6.0 之后为什么引入了多线程？ |\n| P6 | 高 | redis的过期策略 |\n| P6 | 高 | 为什么Key过期不立即删除？ |\n| P7 | 高 | 内存淘汰机制 |\n| P7 | 高 | Redis持久化机制 |\n| P9 | 高 | 缓存击穿 |\n| P10 | 高 | 缓存穿透 |\n| P11 | 高 | 缓存雪崩 |\n| P12 | 中 | 缓存预热 |\n| P12 | 高 | 缓存读写策略 |\n| P14 | 高 | 缓存与数据库一致性的问题 |\n| P17 | 高 | 分布式锁 |\n| P22 | 中 | 如何保证Redis服务高可用？ |\n| P22 | 中 | 什么是主从复制 |\n| P22 | 中 | 主从复制与Sentinel哨兵机制 |\n| P22 | 中 | Sentinel(哨兵）有什么作用？ |\n| P23 | 中 | Redis缓存的数据量太大怎么办？ |\n| P23 | 中 | Redis Cluster的作用? |\n| P24 | 中 | Redis Cluster 数据如何分布 |\n\n### Spring全家桶.pdf（20 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 高 | IOC |\n| P2 | 高 | AOP |\n| P2 | 中 | Spring框架中都用到了哪些设计模式？ |\n| P3 | 中 | Bean的注入方式有哪些 |\n| P3 | 中 | bean的生命周期 |\n| P5 | 中 | Spring 循环依赖 |\n| P6 | 中 | Spring事务管理方式 |\n| P6 | 低 | Spring的事务失效的几种情况？ |\n| P7 | 低 | Spring中的Bean都是单例的吗 |\n| P7 | 中 | MVC分层是什么 |\n| P8 | 中 | springmvc工作原理/springmvc请求处理流程 |\n| P10 | 中 | MyBatis Mapper 动态代理原理 |\n| P10 | 中 | Mybatis里的#{}和${}的区别？ |\n| P10 | 中 | Spring Boot自动装配 |\n| P11 | 中 | springcloud和springboot的区别 |\n| P11 | 中 | 微服务的特点/优缺点 |\n| P12 | 中 | 常见的微服务组件有哪些 |\n| P13 | 中 | 负载均衡的意义 |\n| P14 | 中 | 负载均衡常见实现策略 |\n| P14 | 中 | 服务熔断、服务降级是什么, 为什么需要熔断降级 |\n\n### MQ.pdf（8 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 高 | MQ有什么作用/为什么使用MQ |\n| P2 | 高 | MQ优缺点 |\n| P2 | 高 | 如何保证消息可靠性 |\n| P3 | 低 | 什么是死信队列? 如何导致死信 |\n| P4 | 中 | 延时队列 |\n| P4 | 高 | 消息的幂等性 |\n| P6 | 中 | 消息积压如何处理 |\n| P7 | 中 | 消息的顺序性 |\n\n### 计算机基础.pdf（59 题）\n\n| 页码 | 难度 | 题目 |\n| --- | --- | --- |\n| P1 | 高 | OSI 和 TCP/IP 网络分层模型 |\n| P1 | 高 | 应用层有哪些常见的协议 |\n| P2 | 高 | 传输层常见协议 |\n| P2 | 中 | 网络层协议 |\n| P2 | 高 | 为何要分层 |\n| P3 | 高 | TCP和UDP的特点, 不同之处? |\n| P3 | 低 | 使用 TCP 的协议有哪些?使用 UDP 的协议有哪些? |\n| P3 | 中 | 说一下 TCP 粘包是怎么产生的？怎么解决粘包问题的 |\n| P5 | 中 | TCP 如何保证可靠性 |\n| P6 | 中 | TCP流量控制 |\n| P6 | 中 | TCP拥塞控制 |\n| P7 | 高 | 三次握手 |\n| P8 | 高 | 为什么一定要三次握手, 两次不行吗 |\n| P9 | 高 | 四次挥手 |\n| P10 | 中 | 在浏览器中输入url地址后显示主页的过程? |\n| P11 | 中 | 什么是跨域, 如何解决跨域 |\n| P11 | 中 | HTTP1.0和HTTP1.1 |\n| P12 | 中 | HTTP的长连接是什么？ |\n| P12 | 低 | HTTP/2.0和HTTP1.1有什么区别 |\n| P13 | 高 | HTTP为什么不安全？ |\n| P14 | 高 | HTTP和HTTPS区别 |\n| P14 | 高 | SSL/TLS怎么确保安全通信, HTTPS怎么保证安全? |\n| P15 | 中 | 什么是对称加密和非对称加密 |\n| P15 | 高 | HTTPS是如何建立连接的 |\n| P16 | 中 | DNS是什么 |\n| P16 | 中 | DNS解析流程 |\n| P17 | 中 | DNS的底层使用TCP还是UDP? |\n| P18 | 中 | HTTP到底是无状态的吗/解释一下HTTP的无状态 |\n| P18 | 中 | cookie和session的区别 |\n| P19 | 低 | JWT 令牌和Session方式有什么区别？ |\n| P20 | 中 | MAC地址, IP地址, ARP协议 |\n| P21 | 低 | ARP 协议解决了什么问题？ |\n| P22 | 低 | ARP的过程 |\n| P22 | 中 | 什么是用户态和内核态/什么是系统调用 |\n| P23 | 中 | 进程的几种状态 |\n| P24 | 中 | 进程间的通信方式 |\n| P25 | 中 | 进程的调度算法有哪些 |\n| P26 | 中 | 线程是不是越多越好 |\n| P27 | 中 | 线程切换为什么比进程切换快，节省了什么资源？ |\n| P27 | 中 | 死锁的四个必要条件 |\n| P28 | 中 | 死锁检测, 预防, 避免 |\n| P29 | 低 | 内存管理机制/内存分配方式 |\n| P30 | 低 | 分页机制和分段机制的共同点和区别 |\n| P30 | 低 | 快表和多级页表 |\n| P31 | 低 | 逻辑(虚拟)地址和物理地址 |\n| P31 | 低 | 虚拟地址空间相关 |\n| P32 | 低 | 局部性原理 |\n| P33 | 低 | 传统存储管理的缺点 |\n| P33 | 低 | 什么是虚拟内存/虚拟存储技术/虚拟存储器 |\n| P34 | 低 | 虚拟存储技术的实现 |\n| P35 | 低 | 请求分页与分页存储管理有何不同呢 |\n| P35 | 低 | 页面置换算法 |\n| P36 | 高 | 常见数据结构 |\n| P39 | 中 | 数组和链表区别是什么？ |\n| P40 | 中 | 说一下队列和栈的区别和应用场景 |\n| P40 | 中 | 有大量的数据在磁盘中, 但是内存很小, 如何排序 |\n| P40 | 中 | 海量数据求第 K 个值 |\n| P41 | 高 | 单例模式 |\n| P46 | 中 | 工厂模式 |",
        "dateLabel": "2026 年 11 月 7 日",
        "excerpt": "中小厂面试 · 八股复习 基于 8 份原始 PDF 重新整理：保留高频、压缩表达、标注出处页码 8 份 PDF · 265 道题目 · 9 个模块 怎么用：先背每节“必答”题，…",
        "read": 95
      },
      {
        "id": "post-1793871632030",
        "slug": "post-1793871632030",
        "title": "spring 常用注解",
        "category": "学习",
        "date": "2026-11-05",
        "tags": [],
        "glyph": "文",
        "art": "rain",
        "markdown": "## @SpringBootApplication\n\n@SpringBootApplication 是 Spring Boot 应用的核心注解，通常用于标注主启动类。\n``` java\n@SpringBootApplication\npublic class SpringSecurityJwtGuideApplication {\n      public static void main(java.lang.String[] args) {\n        SpringApplication.run(SpringSecurityJwtGuideApplication.class, args);\n    }\n}\n```\n我们可以把 @SpringBootApplication看作是下面三个注解的组合：\n- @EnableAutoConfiguration：启用 Spring Boot 的自动配置机制。\n- @ComponentScan：扫描 @Component、@Service、@Repository、@Controller 等注解的类。\n- @Configuration：允许注册额外的 Spring Bean 或导入其他配置类。",
        "dateLabel": "2026 年 11 月 5 日",
        "excerpt": "@SpringBootApplication @SpringBootApplication 是 Spring Boot 应用的核心注解，通常用于标注主启动类。 我们可以把 @S…",
        "read": 3
      },
      {
        "id": "post-1793807786990-tolrw",
        "slug": "redis",
        "title": "Redis",
        "category": "设计",
        "date": "2026-11-04",
        "tags": [],
        "glyph": "R",
        "art": "tokens",
        "markdown": "## 1. Redis 启动\n\n- `redis-server`\n  注释：启动 Redis 服务端。\n- `redis-cli`\n  注释：启动 Redis 命令行客户端。\n- `redis-cli --raw`\n  注释：使用原生输出格式，中文显示更直观。\n\n------\n\n## 2. 字符串（String）\n\n- `SET key value`\n  注释：设置键值；若 `key` 已存在会覆盖旧值。\n- `SETNX key value`\n  注释：仅当 `key` 不存在时设置。\n- `GET key`\n  注释：获取 `key` 的值。\n- `DEL key`\n  注释：删除指定 `key`。\n- `EXISTS key`\n  注释：判断 `key` 是否存在（存在返回 `1`，不存在返回 `0`）。\n- `INCR key`\n  注释：将 `key` 的值自增 1（仅适用于整数值）。\n- `KEYS *`\n  注释：查询所有键；生产环境慎用（可能阻塞）。\n- `EXPIRE key seconds`\n  注释：为 `key` 设置过期时间（秒）。\n- `SETEX key seconds value`\n  注释：设置值并同时设置过期时间（秒）。\n- `PERSIST key`\n  注释：移除 `key` 的过期时间。\n- `TTL key`\n  注释：查看剩余过期时间（秒）。\n- `PTTL key`\n  注释：查看剩余过期时间（毫秒）。\n- `MOVE key db`\n  注释：将 `key` 移动到目标数据库编号 `db`。\n- `RENAME key newkey`\n  注释：将 `key` 重命名为 `newkey`（若存在会覆盖）。\n- `RENAMENX key newkey`\n  注释：仅当 `newkey` 不存在时重命名。\n- `FLUSHALL`\n  注释：清空所有数据库中的全部键（危险命令）。\n- `SCAN cursor [MATCH pattern] [COUNT count]`\n  注释：增量扫描键，推荐用于替代 `KEYS *`。\n\n------\n\n## 3. 列表（List）\n\n- `LPUSH key value`\n  注释：从左侧插入元素。\n- `RPUSH key value`\n  注释：从右侧插入元素。\n- `LRANGE key start end`\n  注释：按区间读取元素，`end=-1` 表示读取到末尾。\n- `LPOP key`\n  注释：弹出并删除头部 1 个元素。\n- `LPOP key count`\n  注释：弹出并删除头部 `count` 个元素。\n- `RPOP key`\n  注释：弹出并删除尾部 1 个元素。\n- `LLEN key`\n  注释：返回列表长度。\n- `LTRIM key start end`\n  注释：仅保留 `[start, end]` 区间元素。\n\n------\n\n## 4. 集合（Set）\n\n- `SADD collection value`\n  注释：向集合添加 1 个成员。\n- `SADD collection value1 value2`\n  注释：向集合一次添加多个成员。\n- `SMEMBERS collection`\n  注释：查看集合全部成员。\n- `SISMEMBER collection key`\n  注释：判断成员是否在集合中。\n- `SREM collection key`\n  注释：删除集合中的成员。\n- `SINTER collection1 collection2 collection3`\n  注释：返回多个集合的交集。\n- `SINTERSTORE destination collection1 collection2 collection3`\n  注释：将交集保存到 `destination`。\n- `SUNION collection1 collection2 collection3`\n  注释：返回多个集合的并集。\n- `SUNIONSTORE destination collection1 collection2 collection3`\n  注释：将并集保存到 `destination`。\n\n------\n\n## 5. 有序集合（ZSet）\n\n- `ZADD collection 10 user1 20 user2 30 user3`\n  注释：添加成员并按 `score` 自动排序。\n- `ZRANGE collection 0 -1`\n  注释：按排名区间查询成员。\n- `ZRANGE collection 0 -1 WITHSCORES`\n  注释：查询成员并同时返回 `score`。\n- `ZSCORE collection user1`\n  注释：查看成员的 `score`。\n- `ZRANK collection user1`\n  注释：正向排名（从小到大，起始为 0）。\n- `ZREVRANK collection user1`\n  注释：反向排名（从大到小，起始为 0）。\n- `ZREM collection user1 user2`\n  注释：删除一个或多个成员。\n- `ZCARD collection`\n  注释：返回有序集合成员总数。\n- `ZCOUNT collection 0 100`\n  注释：统计 `score` 在 `[0,100]` 区间的成员数。\n- `ZRANGEBYSCORE collection 0 100 WITHSCORES`\n  注释：按 `score` 区间查询成员并返回分数。\n- `ZINCRBY collection 5 user1`\n  注释：给成员分数增加增量（可为负数）。\n\n------\n\n## 6. 哈希（Hash）\n\n- `HSET collection key1 value1`\n  注释：设置字段 `key1` 的值为 `value1`。\n- `HSET collection key2 value2`\n  注释：设置字段 `key2` 的值为 `value2`。\n- `HGET collection key1`\n  注释：获取字段 `key1` 的值。\n- `HGET collection key2`\n  注释：获取字段 `key2` 的值。\n- `HGETALL collection`\n  注释：获取哈希中全部字段和值。\n- `HDEL collection key1`\n  注释：删除字段 `key1`。\n- `HEXISTS collection key1`\n  注释：判断字段 `key1` 是否存在。\n- `HKEYS collection`\n  注释：获取哈希中全部字段名。\n- `HLEN collection`\n  注释：获取哈希中字段总数。\n\n------\n\n## 7. 发布订阅（Pub/Sub）\n\n- `SUBSCRIBE channel1 channel2`\n  注释：订阅 `channel1`、`channel2` 两个频道。\n- `PUBLISH channel1 \"message1\"`\n  注释：向频道 `channel1` 发布消息。\n- `PUBLISH channel2 \"message2\"`\n  注释：向频道 `channel2` 发布消息。\n- `UNSUBSCRIBE channel1`\n  注释：取消订阅 `channel1`（不传频道则取消全部）。\n\n------\n\n## 8. 消息队列（Stream）\n\n- `XADD geekhour * message \"Hello, Stream!\"`\n  注释：向 Stream `geekhour` 添加消息，`*` 表示自动生成消息 ID。\n- `XLEN geekhour`\n  注释：查看 Stream 中消息总数。\n- `XDEL geekhour 1710000000000-0`\n  注释：删除指定 ID 的消息（示例 ID）。\n- `XTRIM geekhour MAXLEN 0`\n  注释：裁剪 Stream，保留 0 条（即清空）。\n- `XRANGE geekhour - + COUNT 10`\n  注释：按 ID 区间查询前 10 条消息（`-` 最小，`+` 最大）。\n- `XREAD COUNT 2 BLOCK 1000 STREAMS geekhour 0`\n  注释：从 ID `0` 起读取，最多 2 条，阻塞 1000ms。\n- `XREAD COUNT 2 BLOCK 1000 STREAMS geekhour $`\n  注释：从最新位置开始读取后续新消息。\n- `XGROUP CREATE geekhour group1 0 MKSTREAM`\n  注释：创建消费者组 `group1`，从 ID `0` 开始消费；流不存在时自动创建。\n- `XINFO GROUPS geekhour`\n  注释：查看 `geekhour` 的消费者组信息。\n- `XGROUP CREATECONSUMER geekhour group1 consumer1`\n  注释：在组 `group1` 中创建消费者 `consumer1`。\n- `XGROUP CREATECONSUMER geekhour group1 consumer2`\n  注释：在组 `group1` 中创建消费者 `consumer2`。\n- `XREADGROUP GROUP group1 consumer1 COUNT 2 BLOCK 1000 STREAMS geekhour >`\n  注释：`consumer1` 读取 `group1` 的新消息（`>` 表示只读未投递消息）。\n- `XACK geekhour group1 1710000000000-0`\n  注释：确认消息已消费，防止消息停留在 Pending 列表。\n\n------\n\n## 9. 地理空间（GEO）\n\n- `GEOADD city 116.4074 39.9042 \"Beijing\"`\n  注释：向 `city` 添加成员 `Beijing`（经度 116.4074，纬度 39.9042）。\n- `GEOADD city 121.4737 31.2304 \"Shanghai\"`\n  注释：向 `city` 添加成员 `Shanghai`（经度 121.4737，纬度 31.2304）。\n- `GEOPOS city \"Beijing\"`\n  注释：查看成员 `Beijing` 的坐标位置。\n- `GEODIST city \"Beijing\" \"Shanghai\"`\n  注释：计算两地距离，默认单位为米。\n- `GEODIST city \"Beijing\" \"Shanghai\" KM`\n  注释：计算两地距离，单位为千米。\n- `GEOSEARCH city FROMMEMBER \"Beijing\" BYRADIUS 1000 m`\n  注释：以 `Beijing` 为中心，查询半径 1000 米内成员。\n- `GEOSEARCH city FROMLONLAT 116.4074 39.9042 BYBOX 1000 1000 m`\n  注释：以给定经纬度为中心，查询 1000m x 1000m 范围成员。\n\n------\n\n## 10. HyperLogLog\n\n- `PFADD course git docker redis`\n  注释：向 HyperLogLog `course` 添加元素 `git`、`docker`、`redis`。\n- `PFADD course2 git docker redis fastapi`\n  注释：向 HyperLogLog `course2` 添加元素 `git`、`docker`、`redis`、`fastapi`。\n- `PFCOUNT course`\n  注释：返回 HyperLogLog `course` 中不同元素的近似数量。\n- `PFMERGE course2 course`\n  注释：将 `course` 合并到 `course2`。\n- `PFMERGE course3 course course2`\n  注释：将 `course` 与 `course2` 合并到 `course3`。\n\n------\n\n## 11. 位图（Bitmap）\n\n- `SETBIT dianzan 0 1`\n  注释：将 `dianzan` 的第 `0` 位设置为 `1`（表示点赞）。\n- `SETBIT dianzan 1 0`\n  注释：将 `dianzan` 的第 `1` 位设置为 `0`（表示未点赞）。\n- `GETBIT dianzan 0`\n  注释：读取 `dianzan` 的第 `0` 位值（`1` 表示已点赞）。\n- `GETBIT dianzan 1`\n  注释：读取 `dianzan` 的第 `1` 位值（`0` 表示未点赞）。\n- `SET dianzan \"\\xF0\"`\n  注释：直接设置 `dianzan` 的二进制值（演示用）。\n- `BITCOUNT dianzan`\n  注释：统计 `dianzan` 中值为 `1` 的位数量（点赞总数）。\n- `BITPOS dianzan 0`\n  注释：返回 `dianzan` 中第一个值为 `0` 的位位置（未点赞的第一个用户）。\n- `BITPOS dianzan 1`\n  注释：返回 `dianzan` 中第一个值为 `1` 的位位置（第一个点赞的用户）。\n\n------\n\n## 12. 位域（BitField）\n\n- `BITFIELD player1 SET u8 #0 100`\n  注释：在 `player1` 的位域中，从第 `0` 位开始设置一个无符号 8 位整数值为 `100`。\n- `BITFIELD player1 GET u8 #0`\n  注释：从 `player1` 的位域中获取从第 `0` 位开始的一个无符号 8 位整数值。\n- `BITFIELD player1 SET u32 #0 10`\n  注释：在 `player1` 的位域中，从第 `0` 位开始设置一个无符号 32 位整数值为 `10`。\n- `BITFIELD player1 GET u32 #0`\n  注释：从 `player1` 的位域中获取从第 `0` 位开始的一个无符号 32 位整数值。\n\n说明：`u8`、`u32` 等类型表示不同位宽；如果操作位区间重叠会互相覆盖，不重叠就可以存不同值。\n\n------\n\n## 13. 事务（Transaction）\n\n事务特性说明：\n\n- `MULTI` 到 `EXEC` 之间的命令会进入队列，暂不立即执行。\n- 执行 `EXEC` 后，队列中的命令按顺序依次执行。\n- 语法错误会导致事务在 `EXEC` 前失败；运行时错误通常不影响队列中其他命令继续执行。\n- `MULTI`\n  注释：开启事务模式。\n- `SET k1 v1`\n  注释：事务中的第 1 条命令示例。\n- `SET k2 v2`\n  注释：事务中的第 2 条命令示例。\n- `EXEC`\n  注释：提交并执行事务队列中的所有命令。\n- `DISCARD`\n  注释：取消事务并清空当前事务队列。\n\n------\n\n## 14. 持久化\n\n持久化方式：\n\n- `AOF`（Append Only File）：每次写操作记录日志，重启时通过重放日志恢复数据。\n- `RDB`（Redis DataBase）：按策略生成数据快照，重启时通过加载快照恢复数据。\n- `SAVE`\n  注释：同步执行 RDB 持久化，会阻塞 Redis 主线程，生产环境慎用。\n- `BGSAVE`\n  注释：后台异步执行 RDB 持久化，不阻塞主线程。\n- `LASTSAVE`\n  注释：查看最近一次成功执行持久化的时间戳。\n- `BGREWRITEAOF`\n  注释：后台重写 AOF 文件，压缩体积并提升重放效率。\n- `CONFIG GET save`\n  注释：查看当前 RDB 自动保存（`save`）配置。\n- `CONFIG SET save \"900 1 300 10 60 10000\"`\n  注释：设置 RDB 自动保存策略（示例：900 秒 1 次变更，300 秒 10 次，60 秒 10000 次）。\n\n配置文件示例：\n\n- `save 900 1`\n- `save 300 10`\n- `save 60 10000`\n- `appendonly yes`\n\n------\n\n## 15. 主从复制（Replication）\n\n说明：主节点负责写操作，从节点负责读操作。主节点会异步把写命令同步到从节点，从节点回放命令以保持数据一致。\n\n从节点配置方式：\n\n- 命令行临时配置（重启后失效）。\n- 修改配置文件（推荐，重启后仍生效）。\n\n`redis.conf` 示例：\n\n- `pidfile /var/run/redis_6380.pid`\n  注释：指定从节点的 PID 文件。\n- `port 6380`\n  注释：指定从节点监听端口。\n- `dbfilename dump_6380.rdb`\n  注释：指定从节点的 RDB 文件名。\n- `replicaof 127.0.0.1 6379`\n  注释：指定主节点地址和端口，表示当前实例是 `127.0.0.1:6379` 的从节点。\n- `:%s/6380/6381/g`\n  注释：在 `vim` 中快速替换端口号，批量把 `6380` 改为 `6381`。\n\n------\n\n## 16. 哨兵模式（Sentinel）\n\n核心能力：\n\n- 监控：持续监控主从节点状态。\n- 通知：主节点异常时发送告警。\n- 自动故障转移：将某个从节点提升为新主节点，并让其他从节点重新指向它。\n\n配置示例：\n\n- `vim sentinel.conf`\n  注释：编辑哨兵配置文件。\n- `sentinel monitor master 127.0.0.1 6379 1`\n  注释：监控名为 `master` 的主节点；最后的 `1` 是法定票数（quorum）。\n\n故障转移示例：若 `6379` 下线，哨兵可自动将 `6380` 提升为主节点，并让 `6381` 复制 `6380`。",
        "dateLabel": "2026 年 11 月 4 日",
        "excerpt": "Redis 启动 redis-server 注释：启动 Redis 服务端。 redis-cli 注释：启动 Redis 命令行客户端。 redis-cli --raw 注释：…",
        "read": 19
      }
    ],
    "readerAuthor": "吕懿轩",
    "readerSignature": "写于杭州，仍在路上",
    "readMore": "继续往下读",
    "emptyText": "这个分类还在酝酿中。先去看看别的故事吧。"
  },
  "footprints": {
    "eyebrowIndex": "02",
    "eyebrowLabel": "我的足迹",
    "title": "我的足迹",
    "description": "地图上的每一个亮点，都是一次具体的抵达。点击省份，把走过的路重新点亮，也把某段记忆叫回来。",
    "currentCityAdcode": 330100,
    "overviewYears": 6,
    "labels": {
      "asidePrefix": "点亮",
      "asideMiddle": "个省份 · 抵达",
      "asideSuffix": "座城市",
      "overviewTitle": "足迹概览",
      "province": "点亮省份",
      "city": "抵达城市",
      "year": "��录年份",
      "chipTitle": "已点亮",
      "chipHint": "点击定位",
      "lit": "已点亮",
      "idle": "待探索",
      "home": "常驻",
      "arrived": "已抵达",
      "mapHint": "点击省份点亮或查看记忆，侧栏可单独熄灭",
      "reset": "恢复默认足迹",
      "memoryTitle": "最近抵达",
      "memoryAside": "三段被记住的路",
      "actionLight": "点亮这里",
      "actionExtinguish": "熄灭这段足迹",
      "hintLit": "点击地图查看其他省份",
      "hintIdle": "点击��可加入足迹",
      "genericLitNote": "这里刚刚被点亮。还没有写下具体的记忆，先把坐标留在这里。",
      "genericIdleNote": "地图上的这一块还空着。等一次真正的出发，再把它点亮。",
      "noCityLit": "刚刚点亮",
      "noCityIdle": "等待第一次抵达",
      "noRecord": "暂无抵达记录",
      "recentPrefix": "最近抵达",
      "cityPrefix": "城市",
      "cityUnit": "座城市",
      "resetToast": "已恢复默认足迹",
      "emptyChips": "还没有点亮任何省份，从地图上选一个开始吧。"
    },
    "mapTitle": "中国 · 足迹地图",
    "mapSubtitle": "每一次抵达，都会留下一个坐标",
    "disclaimer": "地图边界数据来自 DataV.GeoAtlas，仅用于个人足迹可视化示意。",
    "provinces": [
      {
        "adcode": 110000,
        "visited": false,
        "lastVisit": "2024.12",
        "note": "第一次在冬天看见呼出的白气，也第一次把自己放到地图的那么北。",
        "cities": []
      },
      {
        "adcode": 120000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 130000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 140000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 150000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 210000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 220000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 230000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 310000,
        "visited": false,
        "lastVisit": "2026.09",
        "note": "出差与看展的城市。地铁、梧桐区和便利店，构成我对它的私人地图。",
        "cities": []
      },
      {
        "adcode": 320000,
        "visited": true,
        "lastVisit": "2025.11",
        "note": "南京的城墙和苏州的园林，是两次节奏完全不同的慢。",
        "cities": [
          {
            "adcode": 320500,
            "showLabel": true
          },
          {
            "adcode": 320200,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 330000,
        "visited": true,
        "lastVisit": "2026.10",
        "note": "常驻地。西湖边走过很多次，仍然会在雨天绕远路回家。",
        "cities": [
          {
            "adcode": 330100,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 340000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 350000,
        "visited": false,
        "lastVisit": "2024.08",
        "note": "厦门的海风带着咸味，鼓浪屿的小路绕来绕去，像一段没有结论的对话。",
        "cities": []
      },
      {
        "adcode": 360000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 370000,
        "visited": true,
        "lastVisit": "2022.08",
        "note": "青岛的红瓦与海，是夏天最明亮的一页。啤酒泡沫里有一整晚的风。",
        "cities": [
          {
            "adcode": 370200,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 410000,
        "visited": true,
        "lastVisit": "",
        "note": "",
        "cities": [
          {
            "adcode": 410100,
            "showLabel": true
          },
          {
            "adcode": 410200,
            "showLabel": true
          },
          {
            "adcode": 410300,
            "showLabel": true
          },
          {
            "adcode": 410800,
            "showLabel": true
          },
          {
            "adcode": 419001,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 420000,
        "visited": true,
        "lastVisit": "2023.10",
        "note": "武汉的江风很大，热干面要趁热吃。过早是一天里最郑重的仪式。",
        "cities": [
          {
            "adcode": 420100,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 430000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 440000,
        "visited": false,
        "lastVisit": "2023.06",
        "note": "深圳的节奏很快，但凌晨的糖水铺很慢。两种时间在同一条街上并存。",
        "cities": []
      },
      {
        "adcode": 450000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 460000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 500000,
        "visited": true,
        "lastVisit": "2024.05",
        "note": "导航在山城失效，索性跟着台阶走。转角之后总还有一层楼。",
        "cities": [
          {
            "adcode": 500000,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 510000,
        "visited": true,
        "lastVisit": "2025.05",
        "note": "成都的茶馆里坐了一下午，什么也没做，却觉得时间被填满了。",
        "cities": [
          {
            "adcode": 510100,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 520000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 530000,
        "visited": true,
        "lastVisit": "2025.10",
        "note": "大理的风把云推得很快。骑车环海时，第一次觉得“远”也是具体的。",
        "cities": [
          {
            "adcode": 532900,
            "showLabel": true
          },
          {
            "adcode": 530100,
            "showLabel": true
          },
          {
            "adcode": 533400,
            "showLabel": true
          },
          {
            "adcode": 530700,
            "showLabel": true
          },
          {
            "adcode": 530600,
            "showLabel": true
          }
        ]
      },
      {
        "adcode": 540000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 610000,
        "visited": false,
        "lastVisit": "2025.03",
        "note": "西安的城墙下吃了一碗泡馍，历史从书本里站起来，走到我面前。",
        "cities": []
      },
      {
        "adcode": 620000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 630000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 640000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 650000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 710000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 810000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      },
      {
        "adcode": 820000,
        "visited": false,
        "lastVisit": "",
        "note": "",
        "cities": []
      }
    ],
    "memories": [
      {
        "city": "杭州",
        "cityAdcode": 330100,
        "province": "浙江",
        "date": "2026.07",
        "tag": "常驻",
        "note": "经历一个暑到秋，以后会在杭州吗？"
      },
      {
        "city": "昆明",
        "cityAdcode": 530100,
        "province": "云南",
        "date": "2023.08",
        "tag": "大学",
        "note": "在昆明三年，从高中到大学，人是会变很多。"
      },
      {
        "city": "大理",
        "cityAdcode": 532900,
        "province": "云南",
        "date": "2025.09",
        "tag": "旅行",
        "note": "只逛了逛洱海和大理古城，风吹麦浪倒是有"
      },
      {
        "city": "焦作",
        "cityAdcode": 410800,
        "province": "河南",
        "date": "2005.08",
        "tag": "故乡",
        "note": "我出生在这里"
      }
    ]
  },
  "skills": {
    "eyebrowIndex": "03",
    "eyebrowLabel": "专业技能",
    "title": "专业技能",
    "aside": "技术栈 · 项目实践",
    "description": "",
    "groups": [
      {
        "title": "前端",
        "note": "",
        "items": [
          "HTML/CSS/JavaScript",
          "Vue3",
          "Composition API",
          "Pinia",
          "Vue Router",
          "Element Plus",
          "Vant UI4",
          "Axios",
          "SSE",
          "前端工程化",
          "性能优化",
          "页面适配"
        ]
      },
      {
        "title": "后端",
        "note": "接口、权限与数据层",
        "items": [
          "Java",
          "Spring Boot",
          "Spring MVC",
          "MyBatis-Plus",
          "Spring Security",
          "JWT",
          "MySQL",
          "Redis",
          "RabbitMQ",
          "Maven"
        ]
      },
      {
        "title": "AI 应用",
        "note": "大模型接入与内容生成",
        "items": [
          "Prompt 工程",
          "Spring AI",
          "LangChain.js",
          "DeepSeek",
          "硅基流动",
          "流式对话",
          "结构化 JSON",
          "AI 编程工具"
        ]
      },
      {
        "title": "工程与协作",
        "note": "从设计稿到上线部署",
        "items": [
          "Git",
          "Linux",
          "接口设计",
          "异常处理",
          "前后端分离",
          "数据库设计",
          "应用部署",
          "团队协作",
          "版本迭代"
        ]
      }
    ],
    "projects": [
      {
        "title": "企业营销知识库 AI 内容生成平台",
        "date": "2026.07 - 2026.08",
        "tag": "AI 应用 · 全栈",
        "description": "面向中小企业打造营销知识库与 AI 文案生成平台，为 GEO 生成式引擎优化提供结构化知识底座。系统对企业产品资料、客户案例和行业文案进行治理，构建私有营销知识库，并结合 DeepSeek 生成可直接分发的标准化文稿。",
        "stack": [
          "Vue3",
          "Pinia",
          "Spring Boot",
          "Spring Security",
          "Spring AI",
          "MyBatis-Plus",
          "MySQL"
        ],
        "responsibilities": [
          "基于 Spring Boot 搭建 RESTful 前后端分离架构，完成三层架构与数据表设计；使用 MyBatis-Plus 实现分页、逻辑删除与批量数据清洗。",
          "集成 Spring Security + JWT 实现无状态登录，自定义拦截器完成 Token 校验与身份解析，统一异常捕获与接口返回格式。",
          "封装大模型调用服务与 Prompt 工程，结合知识库和文案模板调用 DeepSeek，输出结构化 JSON 文案并自动清洗、矫正格式。",
          "落地 Vue3 前端工程化：路由懒加载、导航守卫、代理与路径别名，拆分管理后台和运营端双布局。",
          "封装全局网络请求，统一注入 Token、拦截错误码与维护登录状态；使用 Pinia 持久化用户信息与按钮权限。",
          "使用 ECharts 搭建运营数据看板，开发 AI 文案生成、评审、反馈迭代与批量导出全流程。"
        ]
      }
    ],
    "toolbox": {
      "label": "日常工具箱",
      "items": [
        "Vue3",
        "JavaScript",
        "Spring Boot",
        "MyBatis-Plus",
        "Pinia",
        "Vite",
        "MySQL",
        "Redis",
        "Git",
        "Linux",
        "DeepSeek",
        "Spring AI"
      ]
    },
    "explore": {
      "label": "正在探索",
      "items": [
        "LangChain.js",
        "RAG",
        "Agent"
      ]
    }
  },
  "contact": {
    "eyebrowIndex": "04",
    "eyebrowLabel": "联系",
    "titleLine1": "一起做点",
    "titleLine2": "有意思的事。",
    "description": "目前找实习的学习过程，如果有好的建议请联系我",
    "copyAction": "复制邮箱",
    "status": "找实习ing",
    "identityName": "吕懿轩",
    "identityRole": "前端工程师 · 杭州",
    "labels": {
      "email": "邮箱",
      "github": "代码",
      "wechat": "微信"
    },
    "githubText": "代码仓库",
    "quote": "“好的合作，从一次坦诚的对话开始。”"
  },
  "footer": {
    "brandDescription": "Be water ，my friend",
    "browseLabel": "浏览",
    "findLabel": "找到我",
    "githubLabel": "代码仓库",
    "emailLabel": "电子邮箱",
    "wechatLabel": "复制微信",
    "copyright": "© 2026 吕懿轩 ",
    "topLabel": "回到顶部 ↑"
  }
};
