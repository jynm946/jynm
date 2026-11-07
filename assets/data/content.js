/* 全站内容数据：由本地可视化后台维护。
   前台只读取此文件，请勿在线上页面中直接修改内容。 */
window.SITE_CONTENT = {
  "meta": {
    "siteName": "吕懿轩",
    "updatedAt": "2026-11-07T13:26:15.466Z",
    "revision": 1794057975466
  },
  "nav": {
    "home": "首页",
    "blog": "博客",
    "footprints": "足迹",
    "skills": "技能"
  },
  "routes": {
    "home": "江旭 · 前端工程师与独立开发者",
    "blog": "博客 · 江旭",
    "footprints": "我的足迹 · 江旭",
    "skills": "技能 · 江旭"
  },
  "profile": {
    "name": "吕懿轩",
    "brandMark": "",
    "avatarChar": "旭",
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
