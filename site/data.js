/* ============================================================
   六个月机器人工程师 · 中文学习站 数据文件
   数据来源：
     英文原文  Ronin (@DeRonin_) "How to become a Robotics Engineer
               in 6 months (RESOURCES)"  2026-09-02
               https://x.com/DeRonin_/status/2095180126359105955
     中文核查  进化三部曲《六个月自学机器人：完整路线、真实花费
               与三处需要修正的地方》 2026-09-25
               https://mp.weixin.qq.com/s/0DaRYVxONc7XodmpVXornw
   所有链接、价格均来自上述两篇，未作推测性添加。
   ============================================================ */

const SITE = {};

/* ---------- 元信息 ---------- */
SITE.meta = {
  title: '六个月机器人工程师',
  subtitle: '完整路线 · 116 项学习资源 · 27 个动手项目 · 三处勘误',
  built: '2026-09-30',
  srcArticle: {
    label: '中文核查文章',
    author: '进化三部曲',
    date: '2026-09-25',
    url: 'https://mp.weixin.qq.com/s/0DaRYVxONc7XodmpVXornw'
  },
  srcOrigin: {
    label: 'X 英文原文',
    author: 'Ronin (@DeRonin_)',
    date: '2026-09-02',
    words: 11237,
    urls: 116,
    projects: 27,
    url: 'https://x.com/DeRonin_/status/2095180126359105955'
  },
  authorChannel: {
    label: '原作者视频频道',
    url: 'https://www.youtube.com/@deronin_23'
  }
};

/* ---------- 为什么是机器人 ---------- */
SITE.why = {
  lead: '你身边的人现在都是 AI 工程师了，这本身就是问题。子智能体凌晨三点花几毛钱就能做完的事，你没法拿它当护城河。',
  reasons: [
    { t: '模型已经够用了', d: '缺的是有人能把它们装进一个身体里。' },
    { t: '物理世界爬不下来', d: '数据得有人真的驱动一台机器去产生。' },
    { t: '夹爪为什么老打滑', d: 'Stack Overflow 上没有这个答案。' },
    { t: '机器人摔倒了', d: '你没法把它丢给一个子智能体去解决。' },
    { t: '没人能抄走', d: '没有一个周末能把你的机器人克隆出去。' }
  ],
  cost: {
    head: '本体只占四分之一',
    body: '在机器人工作站里，机器人本体平均只占整个项目成本的四分之一，剩下四分之三是工程、安全和集成。一台 3.5 万美元的机械臂做成能用的系统要 8 万美元——中间那 4.5 万，卖的是工程能力，而且它比本体本身更贵。',
    note: '注意：原文把「25% 行业平均值」和「3.5 万 → 8 万（占四成多）」两个口径并排写却未说明，二者不能同时成立。结论不受影响：中间那段差价就是你要卖的东西。'
  },
  specialisms: [
    '感知与计算机视觉', '控制与状态估计', '运动规划与操作',
    '机器人学习', '嵌入式与固件', '仿真', '系统与集成', '部署与运维'
  ],
  reqs: [
    { t: 'C++ 和 Python 都要', d: '不是二选一' },
    { t: '真实硬件经验', d: '只做仿真不算高级' },
    { t: '一个方向有深度，其余有素养', d: '' },
    { t: '调试被单独列为一项技能', d: '' }
  ],
  reqNote: '注意这份要求清单里没有的东西：没有写具体学历。'
};

/* ---------- 术语表 ---------- */
SITE.glossary = [
  { k: 'CAD', v: '计算机辅助设计，在电脑里把零件画出来、标好尺寸' },
  { k: 'CAM', v: '计算机辅助制造，把图纸变成机床加工指令' },
  { k: 'ROS 2', v: '机器人操作系统第二代，机器人行业通用的软件框架' },
  { k: 'PID', v: '最常用的自动控制算法，靠比例、积分、微分三项配合让机器人稳定达到目标' },
  { k: 'SLAM', v: '同步定位与建图，机器人边走边画地图、同时知道自己在图上哪里' },
  { k: 'URDF', v: '统一机器人描述格式，告诉软件你的机器人有几个关节、每段多长' },
  { k: 'VLA', v: '视觉-语言-动作模型，看图、听指令、直接输出动作' },
  { k: 'IMU', v: '惯性测量单元，用加速度计和陀螺仪测姿态' },
  { k: 'H 桥', v: '用四个开关管控制直流电机正反转的电路' },
  { k: 'xacro', v: 'URDF 的宏语言，用来避免手写几百行 XML' },
  { k: 'tf2', v: 'ROS 2 的坐标变换系统，管理机器人上所有坐标系' },
  { k: 'ros2_control', v: 'ROS 2 的控制框架，URDF 与真实执行器之间的那一层' },
  { k: 'RViz', v: 'ROS 2 的三维可视化工具' },
  { k: 'QoS', v: 'ROS 2 的服务质量设置，「话题发出去了但没人收到」几乎总是它不匹配' },
  { k: 'FEM', v: '有限元方法' },
  { k: 'LQR', v: '线性二次型调节器，一套有原则的选增益方法' },
  { k: 'MPC', v: '模型预测控制，买到的是能处理约束，代价是算力' },
  { k: '奇异位形', v: '机械臂突然没法往侧面动，丢掉一个自由度' }
];

/* ============================================================
   六个月路线图
   ============================================================ */
SITE.months = [
  /* ---------------- 第 1 月 ---------------- */
  {
    n: 1,
    theme: '电子基础、工具台、Python 与 Git',
    themeEn: 'Electronics, the bench, and the tools you build everything with',
    goal: '能看懂原理图、搭出能工作的电路，并在它不工作的时候找到故障。',
    deliverable: '能看懂原理图、用万用表找出断点、焊一个干净的焊点',
    why: '几乎每份路线图都跳过这一步直接上 Arduino，所以很多人能照着图接线，却修不了任何东西。',
    warn: '机器人是唯一一个「bug 有时候是一根松了的线」的领域。电机堵转的一瞬间会猛抽电流，把电压拉垮，单片机直接重启——你在代码里永远找不到这个 bug。',
    budget: [
      { tier: '零元档', usd: 0, cn: '0 元', items: 'Falstad、Tinkercad、All About Circuits 在线教材。真的先做这一档。' },
      { tier: '入门档', usd: '45–60', cn: '约 100–200 元', items: '一套 Arduino 兼容学习套件加一只数字万用表。国内凑齐比美国便宜得多，且都是免焊接的，这时还不需要烙铁。' },
      { tier: '进阶档', usd: '110–160', cn: '约 300–500 元', items: '加温控烙铁、焊锡、斜口钳、剥线钳、辅助夹和万能板。国产 T12 一类两三百元就很能用了。' },
      { tier: '完整档', usd: '200–300', cn: '约 700–1200 元', items: '加可调直流电源、更好的万用表、吸锡枪、零件盒和一个小车底盘。' }
    ],
    channel: {
      us: '原文建议：第一单别省钱，从 Amazon 或原厂直发买，几天到手就能开工；等你知道 10k 电阻是干什么的，再去 AliExpress 慢慢等（2–6 周）。',
      cn: '国内要反过来读：我们这里就是原文说的那个「便宜 3–10 倍」的供货地，淘宝和拼多多当天下单次日到货。国内读者在第 1 月是净赚的。',
      cost: '代价要说清楚：国内低价套件的元件一致性差，电阻标称和实测偏差、传感器批次差异都常见。这不完全是坏事——它恰好逼你在第一个月就学会用万用表验货，而这是原文第 1 月最看重的技能。'
    },
    sections: [
      {
        name: '电子基础',
        focus: ['欧姆定律和分压，做到不用想', '电流需求，以及为什么电机堵转会把单片机拉垮', '看懂原理图：电阻、电容、二极管、三极管、地、Vcc', '上拉和下拉电阻，你每周都会用', '去耦电容是什么，为什么每个 IC 都需要一个', '电池化学基础：LiPo 节数、C 值，以及为什么绝不能无人看守充电'],
        rtype: 'sim',
        resources: [
          { n: 'Falstad Circuit Simulator', u: 'https://www.falstad.com/circuit/', p: '免费 · 浏览器内', d: '电子流动是动画的，电压有实时颜色，所以你是在看电流真的在动，而不是想象它。这是建立直觉最快的办法。' },
          { n: 'Tinkercad Circuits', u: 'https://www.tinkercad.com/circuits', p: '免费 · 需账号', d: '唯一一个把虚拟面包板、虚拟 Arduino 和虚拟万用表同时给你的模拟器，能在你还没买任何零件之前抓住接线错误。' },
          { n: 'All About Circuits《Lessons in Electric Circuits》', u: 'https://www.allaboutcircuits.com/textbook/', p: '免费 · 六卷本', d: '完整开放授权的电子学教材。当某个视频糊弄过去、而你需要真正搞懂某件事时，这就是你的参考。' },
          { n: 'Afrotechmods 教程', u: 'https://afrotechmods.com/tutorials/', p: '免费 · 视频', d: '短、快、有趣，按初级/中级/高级分类。如果你听不进去讲座式教学，这是对的选择。' },
          { n: 'Make: Electronics 第 3 版 — Charles Platt', rt: 'book', u: 'https://www.makershed.com/products/make-electronics-3rd-edition-print', p: '$29.99 · 书', d: '给从没摸过万用表的人最好的单本纸质书，全书围绕「故意搞坏元件来认识它们的极限」来写。' }
        ]
      },
      {
        name: '工具台与成本',
        focus: [],
        rtype: 'hardware',
        resources: [
          { n: 'Elegoo UNO R3 Super Starter Kit', u: 'https://www.elegoo.com/products/elegoo-uno-r3-super-starter-kit', p: '$42.99', d: '性价比首选，也是大多数入门课程针对的套件，带预焊接 LCD、电源模块和一份 22 课 PDF。' },
          { n: 'Elegoo UNO Basic Starter Kit', u: 'https://www.elegoo.com/products/elegoo-uno-basic-starter-kit', p: '$19.99', d: '真缺钱时最便宜的正经入口，含 Uno 克隆板和基础无源件。' },
          { n: 'SparkFun Inventor\'s Kit v4.1.2', u: 'https://www.sparkfun.com/sparkfun-inventor-s-kit-v4-1-2.html', p: '$99.95', d: '所有套件里课程体系最好的：16 个电路、5 个项目，最后收尾是一台能动的机器人。即使你买了更便宜的套件，免费的指南也能读。' },
          { n: 'Adafruit 数字万用表 9205B+', u: 'https://www.adafruit.com/product/2034', p: '$17.50', d: '电压、20A 以内电流、通断、电阻、电容——你未来几年需要的一切。' },
          { n: 'Pinecil V2 恒温烙铁', u: 'https://pine64.com/product/pinecil-smart-mini-portable-soldering-iron/', p: '$25.99 社区版 / $35.99 零售', d: '以玩具烙铁的价格给你一把真正的恒温烙铁，USB-C 供电，用标准 TS100 和 Hakko T12 头。' }
        ]
      },
      {
        name: '焊接',
        focus: ['给烙铁头挂锡并保持干净', '加热的是接点，不是焊锡', '用眼睛识别冷焊点', '先做通孔插件，SMD 放到很后面', '用助焊剂——它能解决大部分被新手怪到烙铁头上的问题'],
        rtype: 'doc',
        resources: [
          { n: 'Adafruit 优秀焊接指南', u: 'https://learn.adafruit.com/adafruit-guide-excellent-soldering', p: '免费', d: '烙铁选择、接头手法、每种常见失效的照片，以及安全规范。全行业都指向这一份。' },
          { n: 'SparkFun：怎么用万用表', u: 'https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter', p: '免费', d: '电压、电阻、电流、通断讲得很正，包括「烧了保险丝该怎么办」——而你一定会烧。' }
        ]
      },
      {
        name: 'Python、终端与 Git',
        focus: ['Python：函数、类、文件 I/O、JSON、虚拟环境、pip', '终端：cd、ls、grep、跑脚本、环境变量、ssh', 'Git：init、add、commit、push、分支，以及写一份别人能看懂的 README'],
        rtype: 'course',
        resources: [
          { n: 'CS50P：Python 编程入门（哈佛）', u: 'https://cs50.harvard.edu/python/', p: '免费', d: '比大多数入门课更扎实，有习题集和期末项目，而正是这个结构让人能学完。' },
          { n: 'Python for Everybody（Coursera）', u: 'https://www.coursera.org/specializations/python', p: '免费旁听', d: '如果 CS50P 显得太陡，这是最和缓的起点，讲师是网上对新手最友好的之一。' },
          { n: 'The Missing Semester of Your CS Education（MIT）', u: 'https://missing.csail.mit.edu/', p: '免费', d: 'Shell、脚本和命令行熟练度——大学课程会跳过而机器人全靠命令行。' },
          { n: 'Learn Git Branching', u: 'https://learngitbranching.js.org/', p: '免费 · 交互式', d: '理解分支和合并最好的可视化工具，而 Git 里最让人困惑的正是这部分。' }
        ]
      }
    ],
    tasks: [
      { t: '在 Falstad 里搭一个分压电路', d: '先手算输出电压，再对照仿真结果。然后搭一个三极管开关，用逻辑电平点亮 LED——第二个电路后面一直会用到，3.3V 的单片机引脚带不动的负载都得靠它。' },
      { t: '买套件和万用表，然后去量东西', d: '量电池电压，量五个随机电阻的阻值并对照色环，再用通断档找出你自己弄断的一根线。听着trivial，但这是未来六个月能给你省下最多小时的单项技能。' },
      { t: '给一块廉价转接板焊排针', d: '然后用通断档测每一个引脚，整套做三遍。再拆掉一个重焊一次——拆元件拆坏是新手毁板子的头号方式。' },
      { t: '从今天起，每个项目都住在一个 GitHub 仓库里', d: 'README 要有照片、接线说明，以及一段「什么坏了、你怎么修好的」。最后那部分才是让一个仓库看起来像工程而不是教程的东西。' }
    ],
    milestone: [
      '能读懂原理图并在面包板上搭出它描述的电路',
      '插上去之前就能算出电阻值对不对',
      '用万用表找出短路、断路或失效元件',
      '焊一个干净的通孔接头并用电测验证',
      '写一个 Python 脚本，从终端跑起来，推到 GitHub',
      '能出声解释为什么电机堵转会让单片机复位'
    ]
  },

  /* ---------------- 第 2 月 ---------------- */
  {
    n: 2,
    theme: '单片机、电机、传感器',
    themeEn: 'Microcontrollers, motors and sensors, and your first moving robot',
    goal: '造一台会动、能感知环境、能自我纠正的机器人。',
    deliverable: '一台巡线小车 + 一台自平衡车，都在 GitHub 上',
    insight: '一台巡线小车就是一个闭环控制系统，有传感器输入、执行器输出和一个调参问题，这和一台人形机器人是同一件事，只是更小、摔坏了更便宜。',
    sections: [
      {
        name: 'Arduino',
        focus: ['digitalWrite / digitalRead / analogRead / analogWrite，以及 PWM 到底是什么', '中断，以及为什么在循环里轮询按钮早晚会坑你', 'I2C 和 SPI：怎么接线，以及怎么从传感器数据手册里找到地址', '串口调试，未来几个月你的主力工具', '用 millis() 做非阻塞计时，别用 delay()'],
        rtype: 'course',
        resources: [
          { n: 'Paul McWhorter 的 Arduino 课程', u: 'https://toptechboy.com/arduino-lessons/', p: '免费', d: '100 多节课，讲得慢，每节带作业。对曾经学 Arduino 失败过的真·新手，这是最佳选择。' },
          { n: 'Arduino 内置示例（官方）', u: 'https://docs.arduino.cc/built-in-examples/', p: '免费', d: 'IDE 里自带的可跑例程，从「装好了」到「有东西动了」最快的路。' },
          { n: 'Arduino 官方文档 Learn 板块', u: 'https://docs.arduino.cc/learn/', p: '免费', d: '数字/模拟 IO、PWM、I2C、SPI、UART 的权威参考，当查询手册用而不是当课程。' },
          { n: 'Arduino Project Hub', u: 'https://projecthub.arduino.cc/', p: '免费', d: '6000 多个项目带接线和代码。教程结束、你要开始造自己的东西时，就是这里。' }
        ]
      },
      {
        name: 'ESP32',
        focus: [],
        rtype: 'course',
        resources: [
          { n: 'Random Nerd Tutorials：ESP32 入门', u: 'https://randomnerdtutorials.com/getting-started-with-esp32/', p: '免费', d: '这颗芯片现存最高信噪比的免费教程库，几乎每种新手翻车模式都有对应的专门解法，另附 250+ 项目索引。' },
          { n: 'ESP-IDF 编程指南（乐鑫官方）', u: 'https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html', p: '免费', d: '一旦你超出 Arduino 这一层，这就是唯一的事实来源，覆盖真实工具链、menuconfig 和构建系统。' },
          { n: 'Arduino ESP32 Core 文档（乐鑫官方）', u: 'https://docs.espressif.com/projects/arduino-esp32/en/latest/', p: '免费', d: '乐鑫自己写的 Arduino 层文档，让「Arduino vs ESP-IDF」成为一条光谱而不是一道岔路。' },
          { n: 'DroneBot Workshop ESP32 中心', u: 'https://dronebotworkshop.com/esp32-2/', p: '免费', d: '长文、接线图密集，每个视频都有对应的文字版，覆盖 ESP-NOW、OTA 升级和低功耗模式。' },
          { n: 'ESP32-S3-DevKitC-1，8MB flash', u: 'https://www.adafruit.com/product/5312', p: '$15.95 @ Adafruit', d: '主力开发板。' },
          { n: '经典 ESP32 开发板', u: 'https://www.adafruit.com/product/3269', p: '$15.00 @ Adafruit', d: '再买一块，让老教程的代码能原样跑。' },
          { n: 'Seeed XIAO ESP32-C3', u: 'https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html', p: '$4.99', d: '需要极小体积时用。' },
          { n: 'ESP32 通用克隆板', u: '', p: '约 $4–9（AliExpress）', d: '原文标注为「未核验但众所周知的街价」。' }
        ],
        decision: [
          { t: 'Arduino 框架', d: '求最快做出能动的机器人，库生态最大。' },
          { t: 'ESP-IDF', d: '需要真正控制任务、双核、功耗和时序时。' },
          { t: 'MicroPython', d: '快速做传感器实验，但别用来跑平衡环——垃圾回收停顿会毁掉你的时序。' }
        ]
      },
      {
        name: '电机、驱动与执行',
        focus: [],
        rtype: 'doc',
        resources: [
          { n: 'DroneBot Workshop：用 L298N 控制直流电机', u: 'https://dronebotworkshop.com/dc-motors-l298n-h-bridge/', p: '免费', d: '直流电机原理、PWM、H 桥内部结构、三个完整例程，最后收尾是一台摇杆控制的小车。' },
          { n: 'SparkFun TB6612FNG 接线指南', u: 'https://learn.sparkfun.com/tutorials/tb6612fng-hookup-guide/all', p: '免费', d: '你真正该用的那块驱动板：引脚、接线和库，以及为什么是它。' },
          { n: 'DroneBot Workshop：Arduino 驱动步进电机', u: 'https://dronebotworkshop.com/stepper-motors-with-arduino/', p: '免费', d: '单极 vs 双极、微步进、NEMA 尺寸，以及跨三种驱动的四个演示。' },
          { n: 'SimpleFOC 文档', u: 'https://docs.simplefoc.com/', p: '免费 · 开源', d: '现存对磁场定向控制（FOC）最清楚的免费解释，也是将来上无刷电机最省钱的入口。' },
          { n: 'Adafruit DRV8833 电机驱动', u: 'https://www.adafruit.com/product/3297', p: '$5.95', d: '清单上最便宜的好驱动。' },
          { n: 'SparkFun TB6612FNG  breakout', u: 'https://www.sparkfun.com/sparkfun-motor-driver-dual-tb6612fng-1a.html', p: '$14.77', d: 'L298N 的正确默认替代品。' },
          { n: 'Pololu 带编码器减速电机组件', u: 'https://www.pololu.com/product/3675', p: '$19.95 / 个', d: '编码器接线已经解决好了。' },
          { n: 'Pololu A4988 步进驱动板', u: 'https://www.pololu.com/product/1182', p: '$8.95', d: '' },
          { n: 'FeeTech STS3215 智能舵机，12V，30 kg·cm', u: 'https://www.robotshop.com/products/feetech-12v-30kgcm-magnetic-encoding-servo-sts3215', p: '$31.71 @ RobotShop', d: '开源 SO-101 机械臂用的就是这颗舵机。' }
        ],
        motors: [
          { t: '有刷直流减速电机', d: '最便宜，要配 H 桥；不加编码器就没有位置反馈。第一台小车的默认选择。' },
          { t: ' hobby 舵机', d: '内部自带闭环，约 180 度行程，反馈出不来。' },
          { t: '总线智能舵机', d: '可串联，位置/速度/电流全能读回，带 12 位磁编码器。现在的低成本机械臂都用这个。' },
          { t: '步进电机', d: '开环绝对定位，保持力矩大。' }
        ],
        memorize: '教程里到处都在用 L298N，而你不该用它。它是过时的双极型三极管 H 桥，输出端要白掉将近 2V 电压，发热、费电。处理方式很务实：学它，因为教程绕不开；然后换成 TB6612FNG 或 DRV8833。（2V 压降是数据手册典型值，中文核查已复核。）'
      },
      {
        name: '传感器',
        focus: [],
        rtype: 'doc',
        resources: [
          { n: 'Adafruit BNO085 九轴 IMU 指南', u: 'https://learn.adafruit.com/adafruit-9-dof-orientation-imu-fusion-breakout-bno085/overview', d: '讲的是一颗在片上做传感器融合、直接给你四元数的 IMU——这是「用钱买掉数学」的选项。' },
          { n: 'Kalman and Bayesian Filters in Python — Roger Labbe', u: 'https://rlabbe.github.io/Kalman-and-Bayesian-Filters-in-Python/', p: '免费 · CC-BY', d: 'Jupyter notebook 带可运行代码和已解习题，覆盖 g-h、离散贝叶斯、KF、EKF、UKF 和粒子滤波。现存最好的免费滤波教育材料。' },
          { n: 'MathWorks：理解传感器融合与跟踪', u: 'https://www.mathworks.com/videos/series/understanding-sensor-fusion-and-tracking.html', p: '免费', d: '六个短单元，从「什么是传感器融合」到融合 IMU 和 GPS 求位姿。动代码之前先建立概念的那一步。' },
          { n: 'HC-SR04 超声波', u: '', p: '$3.95', d: '便宜的避障，锥角很宽，在软表面表现很差。' },
          { n: 'VL53L0X 飞行时间激光', u: '', p: '$14.95', d: '35 度窄锥角，没有双重成像的问题。' },
          { n: 'MPU-6050 六轴 IMU', u: '', p: '$12.95', d: '经典便宜款，融合自己做——而这正是重点。' },
          { n: 'BNO085 九轴 IMU', u: '', p: '$29.50', d: '片上融合，带为机器人设计的 UART 模式。' },
          { n: 'Pololu 磁编码器对', u: '', p: '$8.95', d: '给没有编码器的电机加里程计。' },
          { n: 'RPLIDAR C1 360 度激光雷达', u: '', p: '$69.00 @ DFRobot', d: '比经典的 A1 更新也更便宜。' }
        ],
        tip: '做平衡车时，先写互补滤波，再写卡尔曼。四行：angle = a * (angle + gyro * dt) + (1 - a) * accelAngle，a 取 0.98 左右，就管用。等你搞懂互补滤波什么时候会失效，再上卡尔曼。'
      },
      {
        name: '你的前两台机器人',
        focus: [],
        rtype: 'hardware',
        bom: [
          {
            name: '巡线小车',
            usd: '优质版约 $105 / 省钱版约 $38',
            items: [
              '优质版：ESP32-S3 $15.95、Pololu Romi 底盘套件 $39.95、TB6612FNG $14.77、QTR-8RC 反射阵列 $12.95、电池和支架约 $12、线材和排针约 $10',
              '省钱版：通用 ESP32 约 $6、2WD 亚克力底盘约 $12、DRV8833 $5.95、5 个 TCRT5000 约 $3、电池约 $6、线材约 $5'
            ]
          },
          {
            name: '自平衡车',
            usd: '优质版约 $134 / 省钱版约 $62',
            items: [
              '优质版：ESP32 $15.95、两套带编码器减速电机组件 $39.90、TB6612FNG $14.77、MPU-6050 $12.95、打印或激光切割底盘约 $10、LiPo 加充电器加轮子约 $30、杂项约 $10'
            ]
          }
        ]
      }
    ],
    tasks: [
      { t: '做一个反应计时游戏', d: 'LED 在随机延迟后亮，按钮停表，毫秒数打到串口。用到中断、去抖和非阻塞计时，还有分数——15 秒视频就能演示完。' },
      { t: '做一个 Arduino Uno 上不可能存在的东西', d: '用 ESP32 起一个网页，实时显示传感器读数，页面上有按钮驱动舵机，然后在同一网络下用手机访问。WiFi、HTTP 处理和异步工作一次学完。' },
      { t: '用 PWM 让一个直流电机以五个不同速度正反转', d: '然后加编码器，写一个函数让轮子精确转一整圈，不管电池电压多少。后半段是你的第一个真正的闭环，而且比听起来难得多。' },
      { t: '把 IMU 装在板子上，打印俯仰角到串口', d: '把板子拿得完全不动，看着那个数字照样漂。然后加上互补滤波，看着漂移消失——这是状态估计里最重要的单课，只花了你二十分钟。' },
      { t: '先做巡线车：只用 P 控制器调一遍，再加上 D 项看震荡消失，两版都录下来', d: '调坏的机器人和调好的同一个机器人并排对照，是初学者能放进作品集里最有说服力的东西，因为它证明你理解这个环，而不是抄了一组参数。然后做自平衡车——在你的滤波和循环时序都对之前，它完全立不起来。原文说那份挫败感就是重点。' }
    ],
    milestone: [
      '能以受控速度驱动电机，并知道 PWM 占空比和实际 RPM 的区别',
      '能读编码器并在它外面闭一个位置环',
      '能照着数据手册接线并读懂一个 I2C 传感器，不看教程',
      '能把加速度计和陀螺仪数据融合成稳定的姿态估计',
      '能通过描述「你改参数时机器人做了什么」来解释 P、I、D 各自的作用',
      '能在 GitHub 上展示两台能动的机器人，带接线、代码和一份「什么坏了」的记录'
    ]
  },

  /* ---------------- 第 3 月 ---------------- */
  {
    n: 3,
    theme: '机械设计、CAD、3D 打印',
    themeEn: 'Mechanical design, CAD and manufacturing your own parts',
    goal: '在 CAD 里设计一个零件，把它造出来，而且装得上。',
    deliverable: '一条自己装好并改造过的机械臂',
    why: '这是分水岭：装套件的人和造机器人的人在这里分开。以后你造的每台机器人，都会包含一些只因为你设计了它才存在的零件。',
    sections: [
      {
        name: 'CAD：选一个深挖',
        focus: ['完全约束的草图——欠约束的草图以后一改就飘，毁你一天', '变量驱动的参数化设计，改一个尺寸整个零件跟着更新', '镜像真实关节的装配和配合：旋转、滑轨、固定', '围绕你真正拥有的硬件做设计，从舵机数据手册的尺寸开始', '导出 STEP 用于分享、STL 用于打印，并知道两者区别'],
        rtype: 'course',
        resources: [
          { n: 'Onshape Learning Center：Fundamentals: CAD', u: 'https://learn.onshape.com/learning-paths/onshape-fundamentals-cad', p: '免费 · 需账号', d: '唯一一个免费、有结构、而且结业证书能写进简历的 CAD 课程，还专门配了一条机器人竞赛学习路径。' },
          { n: 'Product Design Online：30 天学会 Autodesk Fusion', u: 'https://productdesignonline.com/learn-autodesk-fusion-360-in-30-days-official-course/', p: '免费', d: '三十天三十个建模对象，从没打开过 CAD 到有把握做参数化草图最快的路。' },
          { n: 'MangoJelly Solutions 的 FreeCAD 教程', u: 'https://www.youtube.com/@MangoJellySolutions', p: '免费 · 视频', d: '面向创客最好的 FreeCAD 教师，组织成短而精准的课程而不是一整门大课。' },
          { n: 'Protolabs Network：为 3D 打印而设计', u: 'https://www.hubs.com/knowledge-base/design-for-3d-printing/', p: '免费', d: 'CAD 的可制造性那一半：壁厚、方向、公差、支撑、卡扣，以及什么时候该用 STL / 3MF / STEP。' }
        ],
        decision: [
          { t: 'Onshape Free', d: '如果你接受在公开环境里画图。跑在浏览器里，Chromebook 也能用，装配和配合系统的行为方式就像真实的机器人关节。代价是真实的：免费版每个文档都是公开的。' },
          { t: 'Fusion Personal', d: '如果你以后要接 CAM 和 3D 打印。非商业、年收入一千美元以下可免费续三年，代价是导入导出格式受限。' },
          { t: 'FreeCAD', d: '如果你不方便用云 CAD 或刷卡付款，或者你反对一份可能被撤销的授权。⚠ 勘误见下。' },
          { t: 'SOLIDWORKS for Makers', d: '$48/年，如果你想用工业界标准工具，代价是原生文件带水印、且在商业版 SOLIDWORKS 里打不开。' }
        ],
        errata: '中文核查修正①：原文说 FreeCAD 1.1 是「2026 年 3 月落地」，这准确（1.1.0 发布于 2026-03-25）。但原文漏了后续：1.1.1 在 4 月、1.1.2 和 1.1.3 都在 7 月连续发布。你现在装应该装 1.1.3，不是 1.1.0。'
      },
      {
        name: '3D 打印',
        focus: [],
        rtype: 'hardware',
        resources: [
          { n: 'Creality Ender-3 V3 SE', u: 'https://store.creality.com/products/ender-3-v3-se-3d-printer', p: '$199', d: '国产品牌，国内买更便宜，不用换推荐。' },
          { n: 'Bambu Lab A1 mini', u: 'https://www.bestbuy.com/product/bambu-lab-a1-mini-3d-printer-silver/CZTZV9ZGGV', p: '$219.99', d: '国产品牌。' },
          { n: 'Bambu Lab A1', u: 'https://www.bestbuy.com/product/bambu-lab-a1-3d-printer-silver/CZW2ZH33H4', p: '$299.99', d: '256mm 行程，做大支架时你会想要这个。国产品牌。' },
          { n: 'Creality K1C', u: 'https://store.creality.com/products/k1c-3d-printer', p: '$369', d: '封闭腔体 + 硬化喷嘴，能打碳纤耗材。国产品牌。' },
          { n: 'Bambu Lab P1S', u: 'https://us.store.bambulab.com/products/p1s', p: '$799', d: '封闭 CoreXY，ABS 和 ASA。国产品牌。' },
          { n: 'OrcaSlicer 校准 wiki', u: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration', p: '免费', d: '温度、流量、压力提前、回抽和公差校准，按推荐的顺序来。这是任何想让零件装得上的人最有用的一份切片文档。' },
          { n: 'Teaching Tech 3D 打印机校准', u: 'https://teachingtechyt.github.io/calibration.html', p: '免费 · 交互式', d: '与打印机型号无关的交互式走查，带你按顺序走完每一项校准。' },
          { n: 'CNC Kitchen', u: 'https://www.youtube.com/@CNCKitchen', p: '免费 · 视频', d: '对填充率、壁厚、螺纹嵌件和打印方向做仪器化、可重复的强度测试——打印方向就是在这里从民间传说变成数据的。' },
          { n: '间隙与公差 3D 打印量规（免费 STL）', u: 'https://www.printables.com/model/57067-clearance-and-tolerance-3d-printer-gauge', p: '免费 STL', d: '打一次，你就知道自己机器做压配和滑配的真实间隙——你之后设计的每一个支架和轴承座都依赖这个数。' }
        ],
        filament: [
          { t: 'PLA / PLA+', u: '原型支架、夹具，以及 SO-101 机械臂本体本身（官方规格：PLA+，15% 填充，0.2mm 层高）。易打印材料里最硬的，缺点是持续受力会蠕变，55–60°C 开始软。' },
          { t: 'PETG', u: '真正机器人零件的默认选择：底板、齿轮箱壳、舵机座、任何摔一下不能碎的地方。比 PLA 韧得多、层间粘接好得多，缺点是拉丝。' },
          { t: 'ABS / ASA', u: '靠近发热电机和户外用。没有封闭腔体会翘得很厉害。' },
          { t: '尼龙', u: '齿轮和线缆导向。买现成的比自己打省事。' },
          { t: '碳纤填充', u: '结构连杆。需要硬化喷嘴，因为它是磨料。' },
          { t: 'TPU', u: '脚垫、缓冲和柔性夹爪指——软的、可以捏的那种。' }
        ],
        nomachine: {
          cn: '国内直接可用的两条：一、本地创客空间和高校实验室；二、在线打印服务——嘉立创三维，JLC3DP 是它的海外站，起价 1 美元一件、三天出货，国内直接用嘉立创三维价格更低。',
          list: [
            { n: 'Fab Labs 全球实验室', u: 'https://fablabs.io/labs', p: '约 2875 个，可按国家搜', d: '按国家搜索的全球创客实验室目录。' },
            { n: '公共图书馆创客空间', u: 'https://action.everylibrary.org/how_to_find_a_makerspace_near_you', p: '美国多地免费或近乎免费', d: '' },
            { n: 'Craftcloud', u: 'https://craftcloud3d.com/', p: '覆盖 95 个国家', d: '跨厂商比价并路由到离你最近的制造商，在美国和欧盟之外这是正确选择。' },
            { n: 'JLC3DP', u: 'https://jlc3dp.com/', p: '$1.00/件起，三天', d: 'MJF 尼龙和 FDM。国内读者改用嘉立创三维，更便宜。' }
          ]
        },
        economics: '一条 SO-101 机械臂大约要用掉 1 千克 PLA+，自己打大约 20–25 美元耗材，买现成打印件是 30.99 美元。一台打印机不可能靠打一套臂回本，它回本靠的是迭代：夹爪指的第十版在家里打，耗材 40 美分、25 分钟；找服务打，8 美元、一星期。差的是二十倍价钱和一星期时间。'
      },
      {
        name: '执行器、传动与「机器人为什么难」',
        focus: ['齿比，以及速度与扭矩的取舍', '齿隙，以及它为什么以软件无法完全修复的方式摧毁位置精度', '轴承选择与预紧', '同步带 vs 齿轮 vs 直驱', '为什么便宜舵机的塑料齿轮组是任何机械臂最先坏的东西'],
        rtype: 'doc',
        resources: [
          { n: 'OpenCycloid：3D 打印开源机器人执行器', u: 'https://www.instructables.com/OpenCycloid-3D-printed-Open-Source-Robotic-Actuato/', p: '免费', d: '参考设计。Instructables 和 Hackaday 上有起步几何可用。' }
        ]
      },
      {
        name: '造一条真正的机械臂',
        focus: [],
        rtype: 'hardware',
        headline: '这是整个路线图里最值得的一笔硬件支出',
        resources: [
          { n: 'SO-ARM100 官方仓库', u: 'https://github.com/TheRobotStudio/SO-ARM100', p: '开源', d: 'SO-101 是 TheRobotStudio 和 Hugging Face 联合出的开源五自由度机械臂加夹爪，设计成主从一对——你手动拖动主臂，从臂跟着复现。这套遥操作是第 6 月采集示教数据的前提。官方物料清单已核验：主从一对 $229.88，单条从臂 $121.94，均不含 3D 打印。' },
          { n: 'Seeed Studio SO-ARM101 Pro 舵机套件', u: 'https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html', p: '$277.99', d: '含电机和控制板，不含打印件。' },
          { n: 'Seeed Studio 打印件套装', u: 'https://www.seeedstudio.com/SO-ARM101-3D-printed-Enclosure-p-6428.html', p: '$30.99', d: '没有打印机就买这个。' },
          { n: 'Robonine SO-ARM101 完整套件', u: 'https://robonine.com/shop/so-arm101-black-robotic-arm-kit/', p: '$349.00', d: '从特拉华发货。' },
          { n: 'WowRobo via OpenELAB', u: 'https://openelab.com/products/wowrobo-robotics-so-arm101-diykit', p: '$325.99 打印件+舵机 / $419.99 未组装全件 / $489.99 全组装', d: '' },
          { n: 'EEZYbotARM MK2', u: 'https://www.thingiverse.com/thing:1454048', p: '$50–80 档 · 免费 STL', d: '用 MG996R  hobby 舵机和打印件搭的臂，教的是连杆运动学而不是舵机总线协议。' },
          { n: 'Hiwonder xArm 1S', u: 'https://www.hiwonder.com/products/xarm-1s', p: '$199.99', d: '最便宜的一条带智能总线舵机（能读位置和电压）的臂。' }
        ],
        tiers: [
          { t: '$0', d: 'LeRobot 栈里的一切在硬件存在之前都能在 MuJoCo 仿真里跑——如果你什么都买不了，这是答案。' },
          { t: '$50–80', d: 'EEZYbotARM MK2，免费 STL，MG996R 舵机 + 打印件。' },
          { t: '$122', d: '自己打印零件的单条 SO-101 从臂。你失去遥操作，但保留整条软件路径。' },
          { t: '$199.99', d: 'Hiwonder xArm 1S。' }
        ],
        cnPrice: {
          head: '官方清单本身就列了人民币价格和淘宝链接——这是原文完全没写、对中文读者却最有价值的信息',
          pair: '主从一对：1343.16 元',
          single: '单条从臂：682.23 元',
          compare: '229.88 美元按当前汇率约合 1600 多元人民币，而淘宝渠道只要 1343 元，便宜了将近两成。',
          regions: [
            { r: '美国', v: '$121.94' }, { r: '欧洲', v: '€124.30' },
            { r: '日本', v: '¥24,414' }, { r: '中国', v: '682.23 元' }
          ],
          insight: '省下来的钱不在核心件。那颗 STS3215 舵机，官方清单给 Alibaba $13.89、欧洲 €12.20、淘宝 97.72 元、日本 ¥2,980，按汇率折算分别是 98.6 / 101.3 / 97.7 / 143 元——这颗深圳产舵机在中国、美国、欧洲三地几乎同价，只有日本贵了四成半。核心件早就是全球一个价了。',
          insight2: '真正省下来的是周围那一圈杂件。一条从臂要六颗舵机，在国内清单里这六颗占总价的 86%，在美国清单里只占 68%——国内那张单子几乎只剩舵机钱，轴承、线材、紧固件、连接板便宜到快可以忽略；美国那张单子里同样这些件要占掉三分之一。结论：国内真正的优势不在核心件单价上，在它周围那一圈杂件的供应链密度上。',
          fx: '四地价格来自 SO-ARM100 官方仓库同一份物料清单，按 1 美元≈7.1 元折算。'
        }
      }
    ],
    tasks: [
      { t: '建一个夹住你买的那颗舵机的支架', d: '螺丝孔开对尺寸、留出轴孔间隙，照着厂商数据手册的图纸而不是凭眼睛。然后打印出来看能不能装上——第一次大概率不能，而那次失败就是这节课。' },
      { t: '打印公差量规，写下你机器的真实间隙数字', d: '然后为 ESP32 设计并打印一个两件式卡扣外壳，不上胶就能合上。一直迭代到它咔哒一声正好到位。所有机械设计都是这个循环做成的。' },
      { t: '为 NEMA17 步进或 hobby 电机设计并打印一个简单的行星或摆线减速器', d: '并接受第一个一定会很难看。握住输出端晃一晃测出齿隙，然后重新设计把它降下来。' },
      { t: '装 SO-101，标定每一颗舵机，用主臂遥操作从臂', d: '然后设计并打印你自己的 TPU 夹爪指换掉原装的，拿三种不同形状的物体测。这条臂是第 5、6 月的平台，而那双自定义的手指是证明你「会设计而不只是会拼装」的那个零件。' }
    ],
    milestone: [
      '能照着数据手册在 CAD 里建模，草图完全约束',
      '能说出你打印机的真实间隙数字，而不是猜',
      '能为 FDM 专门设计零件，考虑方向、悬垂和层间粘接',
      '能为一个零件在 PLA / PETG / ABS / TPU 之间做出选择并给出理由',
      '能解释什么是齿隙，并在自己造的东西上演示它',
      '能展示一条自己装配、标定、并且用自己设计的零件改造过的机械臂'
    ]
  },

  /* ---------------- 第 4 月 ---------------- */
  {
    n: 4,
    theme: 'ROS 2、仿真、导航',
    themeEn: 'ROS 2, simulation, and building robots the way companies do',
    goal: '在 ROS 2 里建一个机器人，仿真它，让它建图并自主导航。',
    deliverable: '自己建的机器人在仿真里自主导航',
    zerocost: '这一月的全部内容，你可以完全不用硬件、在一台普通笔记本上、不需要英伟达显卡，全部做完。',
    ros2distro: [
      { v: 'Lyrical Luth', rel: '2026-05-22', eol: '2031-05', pick: '最新长期支持版，新的生产项目选它', note: '目标 Ubuntu 26.04' },
      { v: 'Kilted Kaiju', rel: '2025-05-23', eol: '2026-12-31', pick: '别从这里开始，今年底就到期', note: '' },
      { v: 'Jazzy Jalisco', rel: '2024-05-23', eol: '2029-05', pick: '自学首选', note: '目标 Ubuntu 24.04' },
      { v: 'Humble Hawksbill', rel: '2022-05-23', eol: '2027-05', pick: '遗留项目', note: '' }
    ],
    ros2rule: 'ROS 2 每年 5 月发一版，偶数年是长期支持版支持五年；奇数年只支持约十八个月。中文核查补充了原文没写的一句：Lyrical 的目标系统是 Ubuntu 26.04。',
    gazeboPair: [
      { r: 'Humble', g: 'Fortress' }, { r: 'Jazzy', g: 'Harmonic' },
      { r: 'Kilted', g: 'Ionic' }, { r: 'Lyrical', g: 'Jetty' }
    ],
    gazeboNote: 'Gazebo Classic 第 1–11 版 2025 年 1 月停止支持。它被重写后短暂叫 Ignition Gazebo，2022 年 4 月又改回叫 Gazebo，所有 ign 命令变成 gz。看到教程里写 roslaunch gazebo_ros 或 ign gazebo，就是过时的。',
    sections: [
      {
        name: '选哪个 ROS 2，以及 ROS 1 的陷阱',
        focus: [],
        rtype: 'doc',
        trap: 'ROS 1 已经死了。Noetic 在 2025-05-31 停止支持，没有后继版本。麻烦在于搜索引擎里排名最高的大量教程都是 ROS 1 的，你得学会一眼认出来：看到 catkin_make、roscore、rosrun、rospy 或纯 XML 的 launch 文件，直接关掉。ROS 2 用 colcon build、没有 master 节点、用 ros2 run 和 Python 写的 launch 文件。',
        pick: '从 Jazzy 开始学。Lyrical 更新，生产项目会选它，但目前几乎所有课程、书和视频序列仍然针对 Jazzy，而它还有两年半以上支持期。等你的教程栈跟上去了再迁。'
      },
      {
        name: 'ROS 2 核心概念',
        focus: ['节点、话题、服务和动作，以及知道某个问题该用三者中的哪一个', '自定义消息和服务定义', '参数和 YAML 配置文件', 'Python 写的 launch 文件，传入参数和重映射话题', 'colcon 工作区和包结构', 'ros2 bag 录制与回放——调试任何只是偶发的问题都靠它'],
        rtype: 'doc',
        resources: [
          { n: 'ROS 2 官方教程', u: 'https://docs.ros.org/en/jazzy/Tutorials.html', p: '免费', d: '规范参考，结构上正好围绕节点、话题、服务、动作、参数、launch、tf2 和 URDF 展开。它是参考级而不是教学级，所以要配视频看。' },
          { n: 'The Construct', u: 'https://www.theconstruct.ai/', p: '免费档 · 付费从 €39.97/月', d: '一切都在浏览器里的 ROS 环境和仿真机器人上跑，消除了新手最大的摩擦点：不用双系统 Ubuntu、不用装一个周末、不用显卡。免费档包含三门完整课程。' },
          { n: 'Edouard Renard：ROS 2 for Beginners Level 1（Udemy）', u: 'https://www.udemy.com/course/ros2-for-beginners/', p: '约 $10–20（打折）', d: '十三小时，Python 和 C++ 双语，覆盖节点、包、话题、服务、自定义接口、参数和 launch 文件。永远不要按原价买，Udemy 基本一直在打折。' },
          { n: 'Articulated Robotics — Josh Newans', u: 'https://articulatedrobotics.xyz/tutorials/', p: '免费', d: '现存最好的免费端到端叙事：设计一个机器人、写 URDF、仿真它、加 ros2_control、放到树莓派上接激光雷达，然后 SLAM 和导航。在 ros2_control 上尤其好，而几乎所有别的资源在这块都搞砸。' },
          { n: 'MOGI-ROS：完整大学课程', u: 'https://github.com/orgs/MOGI-ROS/repositories', p: '免费 · Apache 2.0', d: '基于 ROS 2 Jazzy + Gazebo Harmonic 的真实一学期课程大纲，从发布/订阅一路到 URDF、传感器、导航和 MoveIt 2 机械臂，每一周都有能跑的代码。' },
          { n: 'Automatic Addison', u: 'https://automaticaddison.com/tutorials/', p: '免费', d: '按发行版组织的菜谱式指南，值得注意的是它已经同时带上了 Lyrical 轨道。需要「在 Jazzy 里怎么写一个 action」时来这里，而不是上一整门课。' }
        ],
        gap: '原文点出的诚实空白：DDS 和 QoS 设置所有资源都讲得很烂，没有一门课讲好了。当你遇到「我的话题明明发出去了但没人收到」这种诡异问题，答案几乎总是 QoS 不匹配，而你只能去读官方概念页，没有教程能救你。'
      },
      {
        name: 'URDF、TF 与描述一个机器人',
        focus: [],
        rtype: 'doc',
        resources: [
          { n: 'Articulated Robotics：机器人坐标变换专题', u: 'https://articulatedrobotics.xyz/category/coordinate-transforms-for-robotics', p: '免费', d: '关于坐标系和变换的专门系列，而这正是卡住大多数人理解 URDF 的那个概念。' },
          { n: 'Edouard Renard Level 2：TF、URDF、RViz、Gazebo（Udemy）', u: 'https://www.udemy.com/course/ros2-tf-urdf-rviz-gazebo/', p: '约 $10–20（打折）', d: '最好的单一 URDF 资源，覆盖 xacro 宏、robot_state_publisher、RViz 配置和 Gazebo 插件，最后收尾是一台带机械臂的移动底盘。' },
          { n: '官方 URDF 教程（配 robot_state_publisher）', u: 'https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/Using-URDF-with-Robot-State-Publisher-cpp.html', p: '免费', d: '规范走查，C++ 和 Python 两个版本都有。' }
        ],
        errors: [
          { t: '把 joint_state_publisher 和 robot_state_publisher 搞混', f: '前者编造关节位置，后者根据位置算变换。' },
          { t: '漏了惯量标签', f: '没有质量惯量，你的机器人会在 Gazebo 里炸开或穿过地板。' },
          { t: '漏了到激光雷达坐标系的静态变换', f: '这个导致的 SLAM 失败比所有算法问题加起来都多。' },
          { t: '手写 400 行 XML', f: '第一天就该用 xacro 宏。' }
        ]
      },
      {
        name: '仿真',
        focus: [],
        rtype: 'sim',
        resources: [
          { n: 'Gazebo 文档与教程', u: 'https://gazebosim.org/docs/latest/getstarted/', p: '免费', d: '建自己的机器人、让它动起来、SDF 世界、传感器，以及生成 URDF。' },
          { n: 'MuJoCo', u: 'https://mujoco.readthedocs.io/en/stable/overview.html', p: '免费 · 开源', d: '现存最快、最准的接触动力学，CPU 优先所以不需要显卡，是运动和操作学习的研究标准。' },
          { n: 'NVIDIA Isaac Sim', u: 'https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/requirements.html', p: '免费下载', d: '照片级仿真和合成数据生成。先读那个 requirements 链接再激动：最低是 RTX 4080 + 16GB 显存，而且没有 RT 核心的数据中心卡（A100、H100）根本不支持。' }
        ],
        decision: [
          { t: '先学 Gazebo', d: '它是唯一原生接进 ROS 2 的仿真器，跑在你已经有的笔记本上。' },
          { t: '要做强化学习或足式运动就上 MuJoCo', d: '它同样不需要显卡。' },
          { t: 'Isaac Sim / Isaac Lab 只在你确实有 RTX 硬件和明确理由时再碰', d: '' },
          { t: '跳过 PyBullet', d: '⚠ 勘误见下。' },
          { t: '可以关注 Genesis，但先别在上面建作品集', d: 'v1.0 刚发布，还没有 ROS 2 集成。' }
        ],
        errata: '中文核查修正②：原文说 PyBullet「2022 年之后没有新版本，维护者关掉了 issue 区」，这个理由不准确。GitHub 上 bullet3 的正式 release 确实停在 2022 年 4 月，但 PyPI 上的 pybullet 包最新版本是 3.2.7，上传于 2025-01-30；仓库最后推送在 2025 年 10 月，issue 区现在是开着的，有 430 个未关闭的 issue。准确的说法是：PyBullet 维护节奏很慢、活跃度远不如 MuJoCo。结论不变（新人确实不必投资 PyBullet），但理由要换，否则面试里被问「你怎么知道 PyBullet 停更了」就会露馅。'
      },
      {
        name: 'ros2_control',
        focus: [],
        rtype: 'doc',
        gap: '原文点出一个很准的空子：ros2_control 是大多数自学者从没碰过的部分，所以它是最快做出差异的地方。',
        resources: [
          { n: 'ros2_control 文档', u: 'https://control.ros.org/rolling/index.html', p: '免费', d: 'URDF 与执行器的交界处：硬件接口、控制器管理器，以及写进 xacro 的 <ros2_control> 标签。' },
          { n: 'Articulated Robotics：真机上的 ros2_control', u: 'https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-real/', p: '免费', d: '唯一一个把「仿真到真机」这个过渡讲清楚的资源。' }
        ]
      },
      {
        name: 'SLAM 与导航',
        focus: ['建图和定位的区别，以及什么时候把 SLAM Toolbox 切到定位模式', '里程计质量——SLAM Toolbox 依赖它，而地图糊掉几乎总是里程计问题而不是算法问题', '代价地图调参：膨胀半径、障碍物图层、局部与全局的划分', '行为树——Nav2 用它编排一切，也是新手最搞不懂的部分'],
        rtype: 'doc',
        resources: [
          { n: 'Nav2 入门', u: 'https://docs.nav2.org/rolling/getting_started/index.html', p: '免费', d: '五分钟内在仿真里跑起 Nav2，还带一个预配置好的 VS Code 开发容器，把所有安装痛苦都消掉了。' },
          { n: 'Nav2 教程', u: 'https://docs.nav2.org/rolling/tutorials/', p: '免费', d: '覆盖 SLAM、禁行区、限速、碰撞监控、停靠、GPS 导航，以及写自己的规划器、控制器或行为树节点。' },
          { n: 'SLAM Toolbox', u: 'https://github.com/SteveMacenski/slam_toolbox', p: '免费 · 开源', d: '目前受支持的 ROS 2 SLAM 库，有同步、异步、lifelong 和纯定位四种模式，支持多机器人。' },
          { n: 'RTAB-Map for ROS 2', u: 'https://github.com/introlab/rtabmap_ros', p: '免费 · 开源', d: '基于外观的 RGB-D 和双目 SLAM，带回环检测。当你手上是深度相机而不是激光雷达、或者你想要 3D 地图时用它。' }
        ],
        hardware: [
          { t: '$0', d: 'Gazebo 加一个仿真激光雷达。先把整套 SLAM 和 Nav2 课程在这里做完。' },
          { t: '$250–450', d: 'DIY：RPLIDAR C1 $69、树莓派 4 或 5、带编码器的差速底盘、电机驱动和一块电池。每块钱学到的最多，也最磨人。' },
          { t: '$300–535', d: '成品平台。Hiwonder MentorPi M1 $299.99 起，在 Pi 5 上跑 ROS 2 Humble 带激光雷达和深度相机。Waveshare UGV Rover ROS 2 套件 $534.99，把 Pi 主机和 ESP32 实时控制器分开——真实机器人就是这么架构的。' }
        ],
        hwlinks: [
          { n: 'Hiwonder MentorPi M1', u: 'https://www.hiwonder.com/products/mentorpi-m1', p: '$299.99 起' },
          { n: 'Waveshare UGV Rover ROS 2 套件', u: 'https://www.waveshare.com/ugv-rover-ros2-kit.htm', p: '$534.99' }
        ]
      }
    ],
    tasks: [
      { t: '搭一个既没有机器人也没有仿真器的多节点系统', d: '传感器发布节点、处理节点、基于服务的配置节点、带参数的聚合节点，自己定义 .msg 和 .srv，用一个能接收参数的 Python launch 文件串起来，再用 ros2 bag 录下来重放。零成本，而且它证明你理解计算图，而不只是会跑 turtlesim。' },
      { t: '用 xacro 描述你自己的机器人，不要用 TurtleBot', d: '差速底盘、一根传感器桅杆、一个两自由度的云台，惯量要对，碰撞几何和视觉几何要分开。用 joint_state_publisher_gui 驱动关节，在 RViz 里看完整的 TF 树。你自己的机器人在 RViz 里的截图，是初学者作品集里最易读的信号。' },
      { t: '把上一步的 xacro 机器人放进 Gazebo', d: '加激光雷达插件和相机插件，为它建一个带障碍物的自定义 SDF 世界。确认传感器数据出现在 ROS 2 话题上并在 RViz 里渲染出来。' },
      { t: '给机器人加 <ros2_control> 标签', d: '用 YAML 配好 diff_drive_controller 和 joint_state_broadcaster，在 Gazebo 里用键盘遥控开起来。然后写一个动作服务器，让它走指定距离并汇报进度，带反馈和取消。动作 + ros2_control 一个项目，是真正有分量的作品集条目。' },
      { t: '在你的 Gazebo 世界里跑 SLAM Toolbox', d: '遥控走一圈，存图，切到定位模式，从 RViz 发导航目标，调代价地图直到它不再切角，然后录屏。一台机器人在自己建的地图里自主导航的视频，是自学者能产出的最有说服力的东西。' }
    ],
    milestone: [
      '能用 Python 和 C++ 写 ROS 2 节点，用到话题、服务和动作',
      '能用正确的坐标系、惯量和碰撞几何在 xacro 里描述自己的机器人',
      '能把这个机器人在 Gazebo 里仿真出来，激光雷达和相机都工作',
      '能配置 ros2_control，并通过控制器而不是原始指令驱动机器人',
      '能用 SLAM Toolbox 建图，并用 Nav2 自主导航',
      '能诊断一棵坏掉的 TF 树——这是整条栈里最常见的故障'
    ]
  },

  /* ---------------- 第 5 月 ---------------- */
  {
    n: 5,
    theme: '控制、运动学、视觉',
    themeEn: 'The maths that makes robots actually work',
    goal: '理解并实现你之前四个月一直在用的那层控制与感知。',
    deliverable: 'PID 三种参数的阶跃响应对比图、相机标定、抓取规划',
    why: '会配置 Nav2 的人和会修 Nav2 的人，差的就是这个月的内容。',
    sections: [
      {
        name: '控制理论，从 PID 开始',
        focus: ['P、I、D 各自在物理上做什么，以及各自的失效模式', '积分饱和，以及为什么机械臂脱离限位时会猛地一甩', '为什么微分项放大传感器噪声、需要滤波', '稳态误差，以及什么时候该加积分、什么时候该做重力补偿', '前馈——大多数人从来不加，而它是最便宜的性能提升'],
        rtype: 'course',
        resources: [
          { n: 'Understanding PID Control（MATLAB Tech Talks / Brian Douglas）', u: 'https://www.mathworks.com/videos/series/understanding-pid-control.html', p: '免费', d: '七个单元：什么是 PID、积分饱和、微分滤波、调参，以及手动与自动调参。从零到本周就能用的控制器最快的路。' },
          { n: 'Brian Douglas：控制系统讲义', u: 'https://www.youtube.com/@BrianBDouglas/playlists', p: '免费', d: '直觉优先的讲解，横跨 PID、状态空间、鲁棒控制和无人机控制。对没有任何正式控制课背景的人最合适。' },
          { n: 'The Fundamentals of Control Theory — Brian Douglas', u: 'https://engineeringmedia.com/books', p: '免费 · Creative Commons', d: '视频的文字配套，是连贯的叙事而不是散落的课。' },
          { n: 'Control Bootcamp — Steve Brunton', u: 'https://www.youtube.com/playlist?list=PLMrJAkhIeNNR20Mz-VpzgfQs5zrYi085m', p: '免费', d: '39 个视频，进入状态空间、可控性、可观测性、LQR 和卡尔曼滤波的正确起点。' },
          { n: 'Feedback Systems — Åström & Murray', rt: 'book', u: 'https://fbswiki.org/wiki/index.php/Feedback_Systems:_An_Introduction_for_Scientists_and_Engineers', p: '免费 PDF', d: '严格的那本教材，由普林斯顿大学出版社免费放出，想要不花钱的正式版本时用它。' }
        ]
      },
      {
        name: '状态空间、LQR 与 MPC',
        focus: ['把系统表示成状态、输入、输出，而不是传递函数', 'LQR 就是一套有原则的选增益方法', 'MPC 买到的是约束，付出的是算力', '欠驱动，以及执行器少于自由度的机器人为什么需要完全不同的思路'],
        rtype: 'course',
        resources: [
          { n: 'Understanding Model Predictive Control（MATLAB Tech Talks）', u: 'https://www.mathworks.com/videos/series/understanding-model-predictive-control.html', p: '免费', d: '七个单元，从为什么用 MPC 到自适应和非线性变体，以及怎么让它跑到足够快以便实时使用。' },
          { n: 'Underactuated Robotics — Russ Tedrake, MIT', u: 'https://underactuated.csail.mit.edu/index.html', p: '免费', d: '这是控制理论变成机器人学的地方：摆、小车倒立摆、行走、奔跑和人形，配动态规划、LQR、Lyapunov 分析和轨迹优化。笔记、PDF 和讲课视频全部免费。' }
        ]
      },
      {
        name: '运动学与动力学',
        focus: ['齐次变换以及它们的复合——这是一切的语言', '正运动学（容易）和逆运动学（不容易）', '雅可比矩阵，以及奇异位形在物理上到底意味着什么——你的机械臂突然没法往侧面动了', '工作空间限制，关节限位 vs 可达性', '轨迹生成，以及为什么有时在关节空间插值、有时在笛卡尔空间'],
        rtype: 'course',
        resources: [
          { n: 'Modern Robotics — Kevin Lynch, Northwestern', u: 'http://hades.mech.northwestern.edu/index.php/Modern_Robotics', p: '免费书 + 代码 + 视频', d: '标准教材的免费预印本，配 Python、MATLAB 和 Mathematica 的配套库和全套视频课。它用螺旋理论和指数积而不是 DH 参数，这更干净、也是现在的工业界主流。' },
          { n: 'Modern Robotics 专项课程（Coursera）', u: 'https://www.coursera.org/specializations/modernrobotics', p: '可免费旁听', d: '同样的内容组织成六门有考核的课，如果你需要deadline才能把东西学完。' },
          { n: 'Robotics Toolbox for Python — Peter Corke', u: 'https://github.com/petercorke/robotics-toolbox-python', p: '免费 · MIT', d: '正运动学、雅可比、数值 IK、轨迹生成，以及 50 多个真实机器人模型（含 Franka 和 UR），所以你是靠对着真臂跑代码来学。' },
          { n: 'QUT Robot Academy — Peter Corke', u: 'https://robotacademy.net.au', p: '免费', d: '200 多个不到十分钟的短视频，按先修级别标注，是 DH 参数、雅可比和位姿表示这些短小原子化解释的最好来源。' }
        ]
      },
      {
        name: '感知与计算机视觉',
        focus: ['相机内参和畸变，用打印的棋盘格做一次真实标定', '针孔投影，以及图像坐标和世界坐标的区别', '双目、结构光、飞行时间的差别', '点云基础：下采样、平面拟合（找桌面）、聚类（找桌上物体）', '为什么昨天还好用的视觉流程今天光照一变就崩'],
        rtype: 'course',
        resources: [
          { n: 'OpenCV 官方 Bootcamp', u: 'https://courses.opencv.org/courses/course-v1:OpenCV+Bootcamp+CV0/about', p: '免费', d: 'OpenCV 自己出的两到三小时官方课程，覆盖图像处理、滤波、边缘检测、跟踪和 DNN 模块。从这个开始，而不是买付费课。' },
          { n: 'OpenCV 相机标定教程（官方文档）', u: 'https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html', p: '免费', d: '规范走查，含完整 Python 代码，从棋盘格角点到去畸变再到重投影误差。每个机器人工程师都必须能凭记忆做出来。' },
          { n: 'Cyrill Stachniss 讲课，University of Bonn', u: 'https://www.ipb.uni-bonn.de/online-training-robotics/', p: '免费', d: '完整的大学课程录像，覆盖移动感知、摄影测量和 SLAM，是几何那一侧最好的免费来源：投影几何、光束法平差、EKF 和图 SLAM。' },
          { n: 'Open3D 点云教程', u: 'https://www.open3d.org/docs/release/tutorial/geometry/pointcloud.html', p: '免费', d: '体素下采样、法向估计、ICP 配准、平面分割和聚类，对已经在 Python 里的人比 PCL 少太多摩擦。' }
        ]
      },
      {
        name: '操作与 MoveIt 2',
        focus: [],
        rtype: 'doc',
        resources: [
          { n: 'MoveIt 2 入门', u: 'https://moveit.picknik.ai/main/doc/tutorials/getting_started/getting_started.html', p: '免费 · 开源', d: '官方入口，文档推荐 Jazzy + Ubuntu 24.04 体验最顺。' },
          { n: '用 MoveIt Task Constructor 做抓取放置', u: 'https://moveit.picknik.ai/main/doc/tutorials/pick_and_place_with_moveit_task_constructor/pick_and_place_with_moveit_task_constructor.html', p: '免费', d: 'ROS 2 里最有用的操作教程，教你如何把一个任务分解成阶段，并实现抓取生成、IK 和碰撞管理。' },
          { n: 'Robotic Manipulation — Russ Tedrake, MIT', u: 'https://manipulation.csail.mit.edu/', p: '免费', d: '十二章把硬件、运动学、感知、抓取、规划和控制连成一条连贯的栈，而且现在把基于模型和学习的方法一起教——这正是行业现在的工作方式。' },
          { n: 'Contact-GraspNet — NVIDIA', u: 'https://github.com/NVlabs/contact_graspnet', p: '免费代码', d: '从深度图在杂乱场景中生成六自由度抓取，学习式抓取的标准基线。' }
        ]
      }
    ],
    tasks: [
      { t: '把第 2 月那台自平衡车拿出来，在同一套硬件上实现三个控制器', d: '纯 P、PD、带前馈的 PID。把三者的阶跃响应记成 CSV，画在一张图上，写清楚你会选哪个、为什么。原文的判断是：这张图在面试里比任何证书都值钱。' },
      { t: '用 Python 为一个仿真的小车倒立摆实现 LQR', d: '然后用手调的 PID 实现同一件事，比较两者各自怎么处理一个扰动。Tedrake 的笔记给了你模型，所以你是实现而不是推导。' },
      { t: '手算你那条 SO-101 的正运动学，再用 Robotics Toolbox 验算', d: '然后写一个数值逆运动学求解器，让末端去某个 XYZ，看它在奇异点附近的表现。亲手感觉到机械臂丢掉一个自由度，这个概念才算真懂了。' },
      { t: '用打印的棋盘格标定一台真实的相机，存下内参', d: '然后写一个脚本检测一个彩色物体，并估计它相对相机的 3D 位置。然后移动光照，看着它崩掉，再修好。那份「失败与修复」的记录就是作品集材料。' },
      { t: '让 MoveIt 2 为一条仿真的机械臂规划运动', d: '往规划场景里加碰撞物体，执行一次抓取放置。然后在唯一可行的路径上放一个障碍物，让它失败，观察规划器的行为。理解规划器怎么失败，比看它成功更有价值。' }
    ],
    milestone: [
      '能实现并调一个 PID 控制器，并用实测数据解释每一项',
      '能在状态空间里描述一个系统，并在仿真被控对象上实现 LQR',
      '能手算正运动学，并用数值方法解 IK',
      '能标定一台相机，把一个像素变成一个 3D 位置',
      '能在 MoveIt 2 里规划并执行一次无碰撞抓取放置',
      '能指着一条正在这么做的机器人解释什么是奇异位形'
    ]
  },

  /* ---------------- 第 6 月 ---------------- */
  {
    n: 6,
    theme: '机器人学习、选方向、找工作',
    themeEn: 'Robot learning, specialisation, and becoming hireable',
    goal: '选一个方向，在这个方向上做出一件作品集，然后开始投简历。',
    deliverable: '一个自己采数据训出来的策略 + 三个能扛住追问的项目',
    parts: [
      {
        name: 'Part one：现代机器人学习',
        sub: 'LeRobot',
        body: 'LeRobot 是 Hugging Face 的真实世界机器人 PyTorch 库，低成本机器人学习这一圈基本都汇聚到它上面了。工作流四步：遥操作、录制、训练、部署。你手动驱动机器人，示范被存成同步的视频和动作数据，一个策略学着模仿它们，然后自己跑。最值钱的是最后那条回头箭头：第一轮训出来的策略大概只能成一半，你要专门去补录失败的那些情况，再训一遍。前后两个成功率数字，加上「你测了它」这件事，本身就是作品集。',
        rtype: 'doc',
        resources: [
          { n: 'LeRobot 文档', u: 'https://huggingface.co/docs/lerobot/index', p: '免费', d: '主文档，覆盖完整管线和所有支持的机器人。' },
          { n: 'LeRobot 仓库', u: 'https://github.com/huggingface/lerobot', p: '免费 · Apache 2.0', d: '中文核查于 2026-09-25 实测：27773 颗星、5741 个 fork、356 位贡献者、287 个项目在用。原文写作时的 26000+ 是真的，但涨得很快——看策略到底怎么实现的就去这里。' },
          { n: 'Hugging Face 机器人课程', u: 'https://huggingface.co/learn/robotics-course/unit0/1', p: '免费 · 不需要任何硬件', d: '全程跑在仿真环境和公开数据集上，每个单元 30–45 分钟。也就是说第 6 月的核心内容，你在没买机械臂之前就能先过一遍。' },
          { n: 'SO-101 安装指南', u: 'https://huggingface.co/docs/lerobot/so101', p: '免费', d: '针对你第 3 月装的那条臂：找端口、电机设置、标定和录制的具体命令。' }
        ],
        focus: ['在你自己的臂上完整跑通 record-train-deploy 环', '数据集质量——用潦草示范训出来的策略就是潦草的策略', 'ACT，官方文档推荐的入门策略，以及为什么预测一段未来动作比预测单步更好', 'Diffusion Policy，把策略表示成一个去噪过程。⚠ 中文核查：原文说它在十二个任务上平均提升 46.9%，arXiv 原始摘要的口径是「横跨 4 个机器人操作基准的 12 个任务」。数字准确，但漏了「4 个基准」这个限定，转述时容易被误读成「随便十二个任务」。']
      },
      {
        name: '视觉-语言-动作（VLA）模型',
        body: '这些是机器人的基础模型，知道哪些你真能跑起来很重要。原文在这块做了件有用的事——把开源许可和硬件门槛标清楚了，因为这块的媒体报道经常是错的。',
        rtype: 'data',
        resources: [
          { n: 'π₀ / π₀-FAST / π₀.₅ — Physical Intelligence', u: 'https://github.com/Physical-Intelligence/openpi', p: 'Apache 2.0 · 权重开放', d: '用 1 万多小时机器人数据预训练。仓库自己很老实地提醒：这些是为他们自家机器人开发的，迁移到别的机器人不保证有效。' },
          { n: 'OpenVLA', u: 'https://openvla.github.io/', p: '70 亿参数 · 完全开放', d: '用 Open X-Embodiment 的 97 万条机器人轨迹训练，是开源 VLA 里文档最全、最值得读代码的一个。' },
          { n: 'GR00T N1.7 — NVIDIA', u: 'https://github.com/Nvidia/Isaac-GR00T', p: '代码 Apache 2.0 · 权重走英伟达开放模型许可', d: '⚠ 这个区别经常被报错成「完全开源」。推理需要 16GB 以上显存。中文核查复核：许可标记确实是 Apache-2.0（指代码），星数 8128。' },
          { n: 'SmolVLA — Hugging Face', u: 'https://huggingface.co/lerobot/smolvla_base', p: '紧凑 · 专为便宜硬件设计', d: '在 SO-101 上要微调就用它，别上 70 亿参数的模型。这条建议很实在。' },
          { n: 'RT-2 — Google DeepMind', u: '', p: '无公开权重', d: '有历史意义但没有公开权重，看论文就行，练手用上面几个。' }
        ]
      },
      {
        name: '机器人的强化学习',
        sub: '',
        body: '',
        rtype: 'repo',
        resources: [
          { n: 'MuJoCo Playground', u: 'https://github.com/google-deepmind/mujoco_playground', p: '免费 · Apache 2.0', d: 'GPU 加速的运动、操作和视觉任务环境，配四个 Colab 教程，比其他替代品容易跑起来得多。从这里开始。' },
          { n: 'NVIDIA Isaac Lab', u: 'https://github.com/isaac-sim/IsaacLab', p: '免费 · BSD-3', d: '16 个机器人模型、30 多个预置训练环境，集成 RSL RL、skrl、RL Games 和 Stable Baselines。足式和人形 sim-to-real 的行业标准，需要第 4 月那套 RTX 硬件。' },
          { n: 'CS 285：深度强化学习 — Sergey Levine, UC Berkeley', u: 'https://rail.eecs.berkeley.edu/deeprlcourse', p: '免费', d: '现存最好的 RL 课程，而 Levine 本身就是机器人研究者，所以整个框架都是机器人本位的，覆盖模仿学习、策略梯度、actor-critic、基于模型和离线 RL。' }
        ]
      }
    ],
    tasks: [
      { t: '在你的 SO-101 上录 50 次同一个简单任务的示范', d: '比如把方块抓起来丢进盒子。训一个 ACT 策略，部署。它大概会有一半的成功率。然后针对失败的情况再录 50 次，重新训练。把前后的成功率都记下来。原文说得很直接：那个数字，以及「你测了它」这件事，就是作品集本身。' },
      { t: '在 MuJoCo Playground 里训一个四足运动策略', d: '从 Colab 教程开始，然后改掉奖励函数，观察步态怎么变。你不需要硬件，也不需要超出 Colab 免费给你的那点算力。' },
      { t: '把你最好的三个项目的 README 重写一遍', d: '每个都要在最上面放一个视频、一张接线或架构图、你自己实测的数字，以及一节标题就叫「什么坏了、我是怎么修的」。最后那节是自学作品集里性价比最高的东西，因为它是从教程里造不出来的部分。' },
      { t: '找个人就你自己的仓库审你二十分钟', d: '不是问概念，是问你的具体代码：为什么是这个增益、为什么选这个传感器、电池电压掉了会怎样、在成功之前你先试过什么。答不到三层深，这个项目就不该上你的简历。' }
    ],
    milestone: [
      '能录一份示范数据集，训出一个跑在自己硬件上的策略',
      '能解释行为克隆、ACT 和 diffusion policy 的区别',
      '能说出哪些 VLA 模型有开放权重、哪些没有',
      '能说清你在三个方向里选哪个，以及为什么',
      '能展示三个带视频、指标和故障分析文档的作品集项目',
      '能对自己代码的任意一行回答三层追问'
    ],
    directions: [
      { t: '方向一：机器人学习与具身智能', d: '面向前沿公司，天花板最高，也最挤。重点：LeRobot、VLA 微调、模仿学习、强化学习、仿真、PyTorch。原文有句话说得好：在这个方向上，你自己采集的一份真实数据集，比任何证书都值钱。' },
      { t: '方向二：自主导航与移动机器人', d: '岗位数量最多。重点：ROS 2、Nav2、SLAM、感知、传感器融合、C++。控制工程师和现场服务工程师加起来占全部机器人招聘的 20% 以上，这个方向同时服务这两类岗位。' },
      { t: '方向三：嵌入式、机电与系统集成', d: '最快能上岗，包括接外包。重点：固件、电机控制、实时系统、PLC、功能安全、系统集成。这是最不光鲜但最稳定就业的方向，也是技术员转工程师的实际通道。原文还点出一个空子：66% 的机器人项目会因为认证问题延期，所以功能安全是一个真实存在又没人愿意做的专长。' }
    ],
    portfolio: {
      high: [
        'GitHub 仓库里有记录的指标，以及显示出迭代式调试的提交历史，而不是一次提交丢进去的成品 demo',
        '真实机器人部署的证据 + 可靠性数据，不只是仿真',
        'LeRobot Hub 上的公开数据集，那里已经有数万份社区数据集',
        '对雇主依赖的包做贡献：ROS 2 core、Nav2、MoveIt、Isaac Lab、LeRobot',
        '把传感器、执行器、规划、控制串起来的系统集成工作，带视频和清晰的文档'
      ],
      red: [
        '还在用已经 EOL 的 ROS 1，且没有任何迁移证据',
        '宣称的项目扛不过三层追问',
        '纯深度学习背景，没有任何运动学或具身（embodiment）理解',
        '教程结业证书——权重远低于真实贡献'
      ]
    },
    interview: {
      body: '机器人面试不是软件面试，leetcode 在这里的预测力弱得多。',
      expect: ['逆运动学问题', 'PID 和反馈回路', '传感器融合与卡尔曼滤波', 'SLAM 概念', '路径规划，包括 RRT', 'C++ 与 Python 的取舍'],
      expect2: '好公司还会给：一个基于仿真的调试练习——他们给你一个 MuJoCo 或 Isaac 场景，里面有一个故意写坏的控制器；一个结合真实岗位的 ROS 2 架构问题；以及一段很长的、关于某次具体失败和你怎么诊断它的对话。',
      link: { n: 'Glassdoor 机器人工程师面试题库', u: 'https://www.glassdoor.com/Interview/robotics-engineer-interview-questions-SRCH_KO0,17.htm', p: '877 家公司、1721 道真题' }
    }
  }
];

/* ============================================================
   行业数据
   ============================================================ */
SITE.data = {
  ifr: {
    title: '中国与全球（国际机器人联合会 IFR）',
    src: '一手数据：IFR 2026-09-24 发布的 World Robotics 2026 新闻稿，以及该机构 2026 年 5 月和 4 月的两份稿件。',
    global: [
      { k: '全球在役工业机器人存量', v: '首次达到 500 万台', d: '2025 年同比增长 9%；IFR 新任主席 Jane Heffner 说这个数字是七年前的两倍多' },
      { k: '全球年装机量', v: '超过 60 万台', d: '2025 年跳增 11%' }
    ],
    cn: [
      { k: '2025 年装机量', v: '35.4 万台', d: '同比增长 20%，占全球装机量的 59%，比上年的历史纪录还多了近 6 万台' },
      { k: '国产厂商装机量', v: '19.5 万台', d: '本土厂商增长 15%，在本国市场份额 55%' },
      { k: '制造业机器人在役存量', v: '约 200 万台', d: '约为全球第二的日本的 4.5 倍（IFR 2026 年 5 月）' },
      { k: '十五五规划', v: '机器人进入现代化产业体系核心位置', d: '目标是把 AI 研究转向物理应用' }
    ],
    other: [
      { k: '美国', v: '2025 年装机约 3.85 万台', d: '增长 12%，全球第二' },
      { k: '日本', v: '2025 年装机 36219 台', d: '跌了 19%，从全球第二掉到第三' }
    ],
    density: [
      { k: '中国', v: '166 台 / 每万名制造业员工', d: '全球第 22 位、亚洲第 6 位' },
      { k: '西欧', v: '267 台', d: '' },
      { k: '北美', v: '204 台', d: '' },
      { k: '美国', v: '307 台', d: '全球第 8' }
    ],
    summary: '这几组数字放在一起：设备在中国，产线在中国，装机量占全球六成，国产供应链已经拿下本国一半以上份额，而人均密度还排在全球二十名开外。',
    headline: '中国一年装的工业机器人是美国的九倍以上。五个主要市场 2025 年的新装机量里，中国一家占全球的 59%，而美、日、韩三国相加不到中国的三成。'
  },
  us: {
    title: '美国市场（原文口径，含一处口径修正）',
    capital: [
      { k: 'Physical AI 初创融资', v: '2026 上半年 474 亿美元 / 521 笔', d: '超过 2022–2024 三年总和（Crunchbase）' },
      { k: '单笔融资', v: 'Neura Robotics 14 亿 / Skild AI 14 亿 / Apptronik 5.2 亿美元', d: 'Figure 投后估值 390 亿美元（The Robot Report 2026 展望）' },
      { k: '北美机器人订单', v: '上半年按台数只增长 2.0%', d: '招聘落后于融资（A3）' }
    ],
    labor: 'BLS 预测软件开发者每年 106,100 个岗位空缺，而机械、电气、工业工程师三者相加约 57,200 个。机器人的劳动力市场比软件小得多。',
    salary: [
      { k: 'O*NET/BLS 中位数', v: '$122,930', d: '⚠ 口径见勘误③' },
      { k: '入门级', v: '约 $80k–$100k', d: 'Payscale 和 Salary.com 口径，沿海和资金充足雇主更高' },
      { k: '中级，3–6 年', v: '$120k–$165k', d: '传统雇主' },
      { k: '高级', v: '$160k–$230k', d: '主流市场' },
      { k: '前沿 physical-AI 公司', v: '明显更高', d: 'Figure 在招的 Helix AI Engineer / Robot Learning 岗位基本工资 $200k–$400k，感知岗位 $200k–$350k' },
      { k: '机器人基础模型专家', v: '$280k–$475k 总包', d: '⚠ 招聘方自报数据，不是调查数据，且高度依赖股权' },
      { k: '遥操作与数据采集', v: '平均 $28.24/小时', d: '多数在 $22.12–$32.93。Figure 招 Humanoid Robot Operator $25–$35/小时且未写学历要求，Weave Robotics $25/小时' }
    ],
    abroad: '德国约 €70,000 中位（Glassdoor）；瑞士约 CHF 95,000；英国基本工资 £32,000–£50,000；印度约 ₹653,000。',
    freelance: 'Upwork 上机器人工程师 $22–$70/小时，集中在 $30–$50。ROS 项目按交付物计价：单个节点实现 $500–$1,200，launch 配置 $1,200–$2,500，传感器集成管线 $4,500–$7,000，完整系统架构 $7,000–$12,000。ZipRecruiter 给 ROS 开发者 $52.84/小时。',
    entries: '不需要学位和经验的入口：遥操作与数据采集（中位 $28.24/小时）、机器人技术员（BLS 中位 $73,900，通常从副学位入行）。按 O*NET，机器人技术员岗位中 68% 由副学位或证书满足，而按招聘量算最大的机器人岗位类别是 Automation and Robotics Technician，占 3,113 个招聘的 20.3%。',
    honest: '原文对遥操作那一条的诚实提醒要一起看：那档工资大多在美国最贵的都市，往往是现场、体力要求高。它是前沿公司的一个真实入口，但不是旧金山的舒适生活。'
  },
  method: '作者列薪资时同时标了来源，并说明各来源互相矛盾，所以给区间而不给一个好看的数。中文核查在这一点上明确拒绝把美国数字换算成人民币——汇率换算和岗位定义都对不上，硬搬等于编数字。国内的机器人岗位薪资，去招聘平台按城市和方向自己拉一遍，比看任何一篇文章里的数字都准。'
};

/* ============================================================
   勘误
   ============================================================ */
SITE.errata = [
  {
    n: 1,
    title: 'FreeCAD 版本',
    where: '第 3 月 · CAD 选型',
    orig: '原文说 FreeCAD 1.1 是「2026 年 3 月落地的」。',
    verdict: '1.1.0 确为 2026-03-25 发布，这个说法准确。但原文漏了后续迭代。',
    fact: '1.1.1 在 4 月、1.1.2 和 1.1.3 都在 7 月连续发布。你现在装 FreeCAD，该装的是 1.1.3，不是 1.1.0。',
    why: '教程里写着版本号的东西，隔半年就会过期，这是这类路线图的通病，不是作者的错。',
    impact: '按原文版本号安装会拿到过时版本'
  },
  {
    n: 2,
    title: 'PyBullet 停更的理由',
    where: '第 4 月 · 仿真器选型',
    orig: '原文说要跳过 PyBullet，理由是「2022 年之后没有新版本，维护者关掉了 issue 区」。',
    verdict: '结论对，理由不成立。',
    fact: 'GitHub 上 bullet3 的正式 release 确实停在 2022 年 4 月，但 PyPI 上的 pybullet 包最新版本是 3.2.7，上传时间 2025-01-30；仓库最后提交推送是 2025 年 10 月，issue 区现在是开着的，有 430 个未关闭的 issue。',
    why: '准确的说法是：PyBullet 维护节奏很慢、活跃度远不如 MuJoCo。',
    impact: '面试里被问「你怎么知道 PyBullet 停更了」会露馅'
  },
  {
    n: 3,
    title: '美国官方薪资与增长数据的口径',
    where: '原文「诚实地说需求」一节',
    orig: '原文把 122,930 美元当作「机器人工程师的官方薪资中位数」，也把 1%–2% 当作机器人工程师的增长预测。',
    verdict: '⚠ 中文核查的定性：讽刺的是，作者专门写了一节去戳别人不核数字，而他自己引的那个「唯一官方数字」，口径也是错的。',
    fact: 'O*NET 上机器人工程师的职业条目（编号 17-2199.08）页面上确实是这两个数字，但每一处都标着同一行小字：数据来自「Engineers, All Other」，也就是「其他所有工程师」这个兜底大类。同一页显示这个大类十年的预计岗位空缺是 9,300 个。',
    why: '美国官方统计里根本没有「机器人工程师」这个独立职业的薪资和增长数据，它被并进了一个装剩下所有工程师的大类。所以这个数字既不能证明机器人岗位涨得慢，也不能证明涨得快——它根本不在统计机器人岗位。',
    impact: '这不怪作者，怪统计体系还没给这个职业单独设格子。一个新职业在官方统计里没有位置，本身就是它还年轻的证据。'
  }
];

SITE.verified = [
  { item: 'ROS 2 各版本的发布与停止支持时间', src: 'ROS 2 官方发布页', r: '与原文一致。中文核查补了一项原文没写的：Lyrical 的目标系统是 Ubuntu 26.04。' },
  { item: 'Gazebo 与 ROS 2 的配对关系', src: 'Gazebo 官方文档兼容表', r: '与原文完全一致，且官方对新用户的推荐组合就是 Ubuntu 24.04 + Jazzy + Harmonic。' },
  { item: 'SO-101 物料清单价格', src: 'TheRobotStudio SO-ARM100 官方仓库 README', r: '$229.88（主从一对）与 $121.94（单条从臂）均准确。' },
  { item: 'SO-101 淘宝价与四地价格', src: '同一份物料清单', r: '淘宝 1343.16 元（对）/ 682.23 元（单臂）确实在官方清单里；四地价格来自同一份清单，按 1 美元≈7.1 元折算。' },
  { item: 'STS3215 舵机四地报价与占比', src: '按物料清单逐项折算', r: 'Alibaba $13.89 / 欧洲 €12.20 / 淘宝 97.72 元 / 日本 ¥2,980，折算后三地同价、日本偏高；六颗舵机占单臂总价在国内为 86%、在美国为 68%。可自行复算。' },
  { item: 'Diffusion Policy 的 46.9% 平均提升', src: 'arXiv 论文原始摘要', r: '数字准确，但原文漏了「4 个操作基准」这个限定。' },
  { item: 'L298N 的约 2V 压降', src: '数据手册典型值', r: '对 L298N 的批评站得住。' },
  { item: 'Isaac Sim 最低配置', src: 'NVIDIA Isaac Sim 官方系统要求页', r: 'RTX 4080 + 16GB 显存，且无 RT 核心的 A100 / H100 完全不受支持。' },
  { item: 'LeRobot 仓库星数', src: 'GitHub API 实时查询（2026-09-25）', r: '27773 颗星、5741 个 fork、356 位贡献者、287 个项目在用。原文写作时的 26000+ 是真的，差值说明它涨得很快。' },
  { item: 'GR00T 与 openpi 的许可证', src: 'GitHub 仓库实时查询', r: 'GR00T 代码确为 Apache-2.0、权重走英伟达开放模型许可（星数 8128）；openpi 为 Apache 2.0 权重开放。' },
  { item: 'PyBullet 的实际维护状态', src: 'GitHub bullet3 + PyPI', r: '3.2.7 版发布于 2025-01-30，最后推送 2025 年 10 月，issue 区开放且有 430 个未关闭条目。' },
  { item: '中国与全球机器人装机数据', src: 'IFR World Robotics 2026 新闻稿（2026-09-24）及 2026 年 5 月、4 月稿件', r: '一手数据。' }
];

SITE.notVerified = '原文中的 Upwork 报价、Glassdoor 面试题数量、Crunchbase 融资额和各家招聘启事薪资，没有逐条复核，这部分以原文标注的来源为准。本站同样不做逐条复核，引用时保留原文口径。';

SITE.closing = [
  { t: '把项目造出来，不要读它们', d: '每个月挑一个造出来。巡线车、平衡车、机械臂、ROS 2 导航栈、训出来的策略。弄坏它们、修好它们、录下来、推到 GitHub。原文查过的每一个招聘来源都说了同一句话：作品集优先的招聘比关键词搜索有效，而真正让人拿到工作的项目，是那些有记录指标和可见调试历史的项目。' },
  { t: '把坏掉的地方写下来', d: '如果这份路线图你只带走一条建议，就是这条。谁都能贴一个跑通的演示，几乎没人会记录最先坏掉的那四件事以及自己怎么一个个诊断出来的。那份记录是「你真的会工程」的最接近的证明，也是你的仓库能扛住面试里第三层追问的原因。' },
  { t: '在觉得准备好了之前就开始', d: '投技术员岗位、接遥操作的班、给 Nav2 提一个小修复、给那个三个人的机器人初创公司创始人发消息。「我在学机器人」和「我做机器人」之间的差距，几乎完全是胆量的差距，而且这个领域里没有人会告诉你你已经学够了。' }
];

SITE.lastLine = '去造一个会动的东西。';
SITE.lastLineCn = '中文读者的具体优势：这条路线图上每一个月的硬件，你都能在下单后第二天拿到手。原文作者想买便宜的，得接受两到六周的海运等待；你在同一个源头下单，隔天到货——六个月的路线图，光这一条就替你省下好几周。';

if (typeof module !== 'undefined') module.exports = SITE;

/* ============================================================
   核验状态（2026-09-30 由本机实测）
   vf 字段语义：
     'bot' —— 站点有反爬/人机验证，返回 403；主机在线但内容页我没能打开
     'net' —— 本机沙箱出网被拦（DNS 全部解析到 172.19.x.x 私有段），
              浏览器与 curl 均失败；既不能证实也不能证伪
     'src' —— 原文自己标注为「未核验」
   没有 vf 字段 = 我亲自打开过并返回 200
   ============================================================ */
SITE.verif = {
  testedAt: '2026-09-30',
  method: '本机 curl（跟随重定向，18–45 秒超时，真实浏览器 UA）+ Chrome DevTools 浏览器二次确认',
  bot: [
    { u: 'https://www.allaboutcircuits.com/textbook/', n: 'All About Circuits《Lessons in Electric Circuits》', m: 1 },
    { u: 'https://www.mathworks.com/videos/series/understanding-pid-control.html', n: 'Understanding PID Control（MATLAB Tech Talks）', m: 5 },
    { u: 'https://www.mathworks.com/videos/series/understanding-sensor-fusion-and-tracking.html', n: 'MathWorks：理解传感器融合与跟踪', m: 2 },
    { u: 'https://www.mathworks.com/videos/series/understanding-model-predictive-control.html', n: 'Understanding Model Predictive Control（MATLAB Tech Talks）', m: 5 },
    { u: 'https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html', n: 'OpenCV 相机标定教程', m: 5 },
    { u: 'https://courses.opencv.org/courses/course-v1:OpenCV+Bootcamp+CV0/about', n: 'OpenCV 官方 Bootcamp', m: 5 },
    { u: 'https://www.udemy.com/course/ros2-for-beginners/', n: 'Edouard Renard：ROS 2 for Beginners Level 1', m: 4 },
    { u: 'https://www.udemy.com/course/ros2-tf-urdf-rviz-gazebo/', n: 'Edouard Renard Level 2：TF、URDF、RViz、Gazebo', m: 4 },
    { u: 'https://www.glassdoor.com/Interview/robotics-engineer-interview-questions-SRCH_KO0,17.htm', n: 'Glassdoor 机器人工程师面试题库', m: 6 },
    { u: 'https://www.robotshop.com/products/feetech-12v-30kgcm-magnetic-encoding-servo-sts3215', n: 'FeeTech STS3215 智能舵机', m: 2 },
    { u: 'https://www.thingiverse.com/thing:1454048', n: 'EEZYbotARM MK2', m: 3 },
    { u: 'https://action.everylibrary.org/how_to_find_a_makerspace_near_you', n: '公共图书馆创客空间', m: 3 }
  ],
  net: [
    { u: 'https://www.bestbuy.com/product/bambu-lab-a1-mini-3d-printer-silver/CZTZV9ZGGV', n: 'Bambu Lab A1 mini', m: 3 },
    { u: 'https://www.bestbuy.com/product/bambu-lab-a1-3d-printer-silver/CZW2ZH33H4', n: 'Bambu Lab A1', m: 3 },
    { u: 'https://www.printables.com/model/57067-clearance-and-tolerance-3d-printer-gauge', n: '间隙与公差 3D 打印量规', m: 3 },
    { u: 'https://robonine.com/shop/so-arm101-black-robotic-arm-kit/', n: 'Robonine SO-ARM101 完整套件', m: 3 }
  ],
  src: [
    { u: '', n: 'ESP32 通用克隆板', m: 2, note: '原文原文即标注「未核验但为众所周知的街价」，我照实转述，未做核实' }
  ],
  note: '我没有为这些条目编造任何补充内容——说明与价格都是两篇原文的转述。占位待你协助通过验证后，按上表逐条回填实际页面信息。'
};

/* 来源可信度分级：区分「官方数据」与「作者估算」，避免二者看起来同样可信 */
SITE.provenance = [
  {
    lv: 'A', t: '官方一手数据，可直接引用', c: 'ok', items: [
      'ROS 2 各版本发布与 EOL 时间（ROS 2 官方发布页）',
      'Gazebo 与 ROS 2 配对关系（Gazebo 官方兼容表）',
      'SO-101 官方物料清单：$229.88 / $121.94，以及清单自带的淘宝链接与四地价格（SO-ARM100 仓库 README）',
      'LeRobot 星数 / fork / 贡献者数（GitHub API，2026-09-25 实测 27773 / 5741 / 356）',
      'GR00T 许可标记与星数（GitHub API）',
      'Isaac Sim 最低配置（NVIDIA 官方系统要求页）',
      'FreeCAD 1.1.x 发布节奏、PyBullet 实际维护状态（GitHub + PyPI）',
      '中国与全球机器人装机数据（IFR World Robotics 2026 新闻稿）'
    ]
  },
  {
    lv: 'B', t: '由官方数据折算 / 推导，依赖明示假设', c: 'no', items: [
      'STS3215 舵机四地折算价与「国内舵机占单臂总价 86%、美国 68%」——按 1 美元≈7.1 元逐项折算得出，汇率一变数字就变',
      'L298N 约 2V 压降——数据手册典型值，非最坏情况',
      'Diffusion Policy 46.9%——论文摘要口径为「4 个基准的 12 个任务」'
    ]
  },
  {
    lv: 'C', t: '中文核查文作者的经验估算，非官方数据', c: 'bad', items: [
      '工具台四档预算的国内价格（「零元 / 一两百 / 两三百 / 完整档」）：原作者自己写明「按目前常见的电商价格区间给，具体金额会随店铺浮动」',
      '国产 T12 温控烙铁「两三百元」'
    ]
  },
  {
    lv: 'D', t: '仅转述，且我未能独立核验', c: 'bad', items: [
      '原文自述未核验的 ESP32 克隆板街价',
      '原文的 Upwork 报价、Glassdoor 题库数量、Crunchbase 融资额、各家招聘启事薪资（中文核查文明确声明未逐条复核）',
      '上表 16 条访问受限链接所对应的页面内容'
    ]
  }
];

/* 未收录内容：明确说明我拿不到什么，而不是让它悄悄消失 */
SITE.omitted = [
  { t: '中文核查文中的全部插图', d: '原文包含 SO-101 主从臂实拍照片、巡线车 P / PD 阶跃响应对照图（中英双图）、ROS 2 版本表截图、IFR 五大市场装机量柱状图等。图片无法从文本中还原，本站不含任何图片。P / PD 那张对照图的结论已用文字转述：只用 P 冲过目标一半多、来回晃三四次才停；加 D 后过冲压到一成半、一次稳住。' },
  { t: '英文原文第 44 行引用的「27 个项目」之外的补充图表', d: 'X 原文为纯文本长文，无图片。' },
  { t: '两个来源页的评论区', d: 'X 线程下有 3 条回复（Roan、Chase、ArchiveExplorer），其中 Chase 用 Grok 做了一个第三方站点 shale-summit-spring-slate.grok.me。本站未采集这些内容。' }
];
