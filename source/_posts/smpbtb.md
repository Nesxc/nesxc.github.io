---
title: 在树莓派上安装BOINC并参与SETI@home分布式计算项目
date: 2020-03-01 00:01:16
categories: 教程
tags: 树莓派
---
## 1.在树莓派上安装BOINC客户端

仅需要一行命令即可在树莓派或者Ubuntu操作系统上安装BOINC

```shell
sudo apt-get install boinc-client boinc
```

在跳出的对话框中输入`y`和回车`↩`，确定下载安装，需要64MB存储空间。

安装成功之后，打开树莓派桌面（或者使用VNC远程桌面），在“系统工具”中点击“BOINC Manager”。


### 2.选择你想参加的分布式计算项目

选择SETI@home，点击“下一步“


BOINC平台上各领域有趣的分布式计算项目详细介绍见后文。

### 3.注册新账号或登陆已有账号


### 4.自动从项目服务器上获取数据，开始计算


现在，你的树莓派就开始自动计算并把数据发回项目服务器了，大功告成。

树莓派性能远不及平常电脑，计算一个数据包需要19个小时，而普通笔记本电脑计算一个数据包仅需3个小时。

而且树莓派上运行SETI@home不能看到本项目标志性的高大上信号处理屏幕保护图片，

通过以下设置修改计算参数，防止CPU资源被全部占用，或CPU过烫

在命令行中输入以下命令查看实时CPU温度，在全速运行计算项目时CPU温度可能会达到100摄氏度以上，应密切注意CPU温度并调整适当计算参数。

```shell
vcgencmd measure_temp
```


## BOINC平台上各领域有趣的分布式计算项目详细介绍

![BOINC平台上的科学计算项目](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-3e2ec8af4186e54c.png)

### 几个比较经典的项目:

- #### 天文及物理

- SETI@home：分析阿雷西博射电望远镜的海量数据，寻找可能的地外文明信号。

- Einsten@home：分析LIGO和GEO600采集的海量观测数据，寻找引力波存在的证据。分析阿雷西博射电望远镜和费米伽马射线卫星传来的数据寻找脉冲星和中子星。由威斯康星大学密尔沃基分校发起。

- Milkyway@home：使用Sloan数字巡天的数据来对银河系进行高精度的三维建模。

- LHC@home：大型强子对撞机（LHC）是 CERN（欧洲核子研究组织）的一个粒子加速器装置，也是世界上最大的粒子物理实验室。它是人类现有的用于研究基本粒子特性的最强大的实验装置。LHC@home 的作用主要是对加速器进行模拟，并帮助改进 LHC 及其探测器的设计。

- Cosmology@Home：寻找描述宇宙演化的数学模型。由UIUC大学发起。

- Asteroids@home：研究小行星形状、自转周期、自转轴信息。

- Universe@home：创建宇宙天体数据库，从最初的恒星到奇特的黑洞双星。

- #### 地球物理

- Climateprediction.net：牛津大学发起，旨在优化现有大气模型对二氧化碳、硫循环等的敏感程度。预测未来全球气候变化。

- #### 生物信息学

- CAS@home：帮助中国科学家研究蛋白质结构、纳米技术、肿瘤基因组学以及高能物理。由中科院计算技术研究所、中科院高能物理研究所、清华大学牵头发起。

- RNA World：旨在识别、 分析、 结构预测和设计建立生物信息学软件的 RNA 分子。源代码全部公开，成果向公众公开。

- MindModeling@home：使用计算模拟认知过程模型，以更好地理解人类的思维。

- Rosetta@home：进行蛋白质的三维构造研究，设计出新的蛋白质以抗击艾滋病、疟疾、癌症以及阿尔茨海默氏症（老年痴呆症）。由美国华盛顿大学发起。

- GPUGrid.net：利用 NVIDIA 显卡（GPU）来进行全原子的分子动力学模拟。计算生物学的应用给生物医药学带来了新的研究方向。

- DENIS@home：通过心脏电生理仿真，研究心脏的电活动。

- #### 物联网

- Quake Catcher Network：使用连接到智能手机的传感器来检测地震波。由南加利福尼亚大学发起。

- Radioactive@home：使用志愿者计算机上的传感器来建立一个免费并持续更新的辐射强度地图。你需要购买一个传感器来加入这个项目。

- #### 数学与密码学

- PrimeGrid：寻找已知最大的质数。

- NFS@home：进行大数的分解质因数。

- Collatz Conjecture：研究考拉兹猜想(Collatz conjecture)，一个尚未被证明的数学猜想。

- Enigma@home：试图破译三条二战期间的纳粹德军加密Enigma电文消息，这些消息于1942年11月25日在北大西洋截获而且一直被认为是不可破解的。该项目采用暴力破解和梯度算法(爬山法)的混合方法试图破译（[项目说明](http://www.equn.com/m4/m4_project.html)）。第一条加密信息于2006年2月20日被[**成功破译（译文）**](http://www.equn.com/m4/m4-project-first-break.html)。第二条加密信息于2006年3月7日被[**成功破译（译文）**](http://www.equn.com/m4/m4-project-second-break.html)。第三条信息尚未被破译。

> 子豪兄批注：
>
> 两条加密电文的译文都是关于当时大西洋潜艇战德军U型潜艇的位置、行动航向、速度、遭受攻击，以及战场风向、天气、能见度等战场情报。
>
> “图灵机”概念创始人、人工智能之父阿兰图灵二战期间秘密受命于英国军方，也在从事破译德军Enigma密码的工作并取得成功，使德军在大西洋的“潜艇狼群战术”破产。卷福主演的电影《模仿游戏》讲述的就是这一段历史。关于二战期间英德两国的潜艇战和密码战，以及数学天才阿兰图灵的传奇人生，教程观看[北京电视台档案栏目：二战英德密码战](https://www.iqiyi.com/w_19rqzc75pp.html)、罗辑思维[《庸众的迫害》](https://v.youku.com/v_show/id_XMTMzMjMzOTA4NA==.html)。

![几个项目的屏幕保护界面](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-ce58e5ff1690f3a7.png)

![SETI@home屏幕保护界面](https://cdn.jsdelivr.net/gh/Nesxc/file/680px-Sah_scr1.jpg)

[SETI@home屏幕保护界面解读](http://www.equn.com/wiki/SETI@home:%E5%B1%8F%E5%B9%95%E4%BF%9D%E6%8A%A4)

[BOINC各项目屏幕保护动画](http://www.equn.com/forum/thread-16446-1-1.html)



## 数字货币与BOINC科学计算的结合——GridCoin

<div align=center>
<img src='https://upload-images.jianshu.io/upload_images/13714448-eeb156d302b4460b.png' />
</div>


​         众所周知，传统的区块链数字货币（比如比特币、以太坊），为了保证区块的安全和交易速度，引入了**挖矿**的“工作量证明共识机制”（[比特币的产生与挖矿](https://mp.weixin.qq.com/s/YB1USLerYHUvOOphAqUuxA)），**挖矿本质上是区块链的参与者用计算设备、算力、电力能源换取区块链交易记账权并获取数字货币奖励的过程**。挖矿消耗了巨量的电力能源，造成显卡矿机的军备竞赛和矿池“矿霸”的出现，而用于比特币和以太坊挖矿的算力和能源并不能为实体经济产生价值。于是，基于真实科学计算平台BOINC的虚拟货币GridCoin应运而生。[GridCoin](https://www.gridcoin.us/)格雷德币于2013年10月上线，2015年3月改版升级。它依托BOINC（伯克利分布式计算）平台，这个币以去中心化机制，按照科学计算的贡献决定挖矿收益，用算力支持了BOINC平台上涉及生物医学、气候变化、天体物理、密码破译、数学证明、搜寻地外文明等众多领域的有趣的科研项目，解决了比特币挖矿被诟病的浪费能源的问题。创始人Rob Halford三年半以来一直坚持教程，带领一支活跃的教程团队，解决了初期的种种bug，保证了这个币的稳定性和科学计算功能。目前，格雷德币团队在BOINC中的所有十万支团队中近期积分排名第一[BOINC全球团队积分排行榜](http://link.zhihu.com/?target=https%3A//boincstats.com/en/stats/-1/team/list/16/0%231)总积分也达到了第六名。

​        Gridcoin格雷德币的矿工如果只是挖矿记账，而不将算力贡献给BOINC科学计算平台，那么每个BLOCK的回报只有5个格币；如果将算力贡献给BOINC科学计算平台，每个BLOCK的回报根据贡献算力的大小将达到6到150个格币。

​        Gridcoin格雷德币充分考虑了避免ASIC（专业矿机）的渗入，保证只有个人电脑的CPU和GPU才能挖矿。格币提供更快的交易确认：平均2.5分钟生成一个新区块，采用SCRYPT的POW（工作量证明）算法。

​        [数字货币Grid官方白皮书](https://gridcoin.us/assets/img/whitepaper.pdf)

​	[知乎：对格雷德币（Gridcoin，GRC）的了解与初步获取方法](https://zhuanlan.zhihu.com/p/27697266?utm_source=qq&utm_medium=social&utm_oi=571402578022109184)

## 扩展阅读与参考文献

> [Bilibili视频：科技小制作 - 树莓派的好去处——SETI@Home - by 科技小制作](https://www.bilibili.com/video/av9388526?from=search&seid=6157990192498395439)
>
> [维基百科：SETI@home](https://zh.wikipedia.org/wiki/SETI@home)
>
> [BOINC官方主页](https://boinc.berkeley.edu/)
>
> [BOINC中国分布式总站](http://www.equn.com/wiki/BOINC)
>
> [BOINC主流计算项目详细介绍](http://www.equn.com/wiki/%E6%A8%A1%E6%9D%BF:BOINC_topics)
>
> [SETI@home官方主页](https://setiathome.berkeley.edu/)
>
> [SETI@home屏幕保护界面解读](http://www.equn.com/wiki/SETI@home:%E5%B1%8F%E5%B9%95%E4%BF%9D%E6%8A%A4)
>
> [BOINC各项目屏幕保护动画](http://www.equn.com/forum/thread-16446-1-1.html)
>
> [Gridcoin格雷德币是什么|金色百科](https://www.jinse.com/news/bitcoin/85217.html)
>
> [知乎：除了比特币，还有哪些区块链的数字货币值得投资？走地鸡的回答](https://www.zhihu.com/collection/211032264)
>
> [比特币的产生与挖矿？](https://mp.weixin.qq.com/s/YB1USLerYHUvOOphAqUuxA)
>
> [数字货币Grid官方白皮书](https://gridcoin.us/assets/img/whitepaper.pdf)
>
> [知乎：对格雷德币（Gridcoin，GRC）的了解与初步获取方法](https://zhuanlan.zhihu.com/p/27697266?utm_source=qq&utm_medium=social&utm_oi=571402578022109184)
>
> [刘慈欣小说《球状闪电》漫画版，作者：*锋绘网*](http://ac.qq.com/Comic/comicInfo/id/519544)
>
> [罗辑思维第138期《庸众的迫害》](https://v.youku.com/v_show/id_XMTMzMjMzOTA4NA==.html)
>
> [北京电视台档案栏目：二战英德密码战](https://www.iqiyi.com/w_19rqzc75pp.html)
>
> [坐在家中电脑前贡献科研？蛋白质折叠小游戏 Foldit 中文版来啦！](http://tieba.baidu.com/p/3095639402)

![树莓派接线](https://cdn.jsdelivr.net/gh/Nesxc/file/pi-plug-in.gif)

![欢迎加入树莓派全球开源社区](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-9413183a2d79c2a8.png)


