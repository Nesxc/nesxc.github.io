---
title: Gridea + vercel超简单超详细博客部署教程
date: 2021-01-15 10:58:10
tags: 技巧
categories: 站点
top_img:
cover: https://cdn.jsdelivr.net/gh/Nesxc/file@master/v2-0d9eb92f67ba93b514f2555a70eacebe_1440w.jpg
sticky: 101
---

### 前言:

如过你是一个电脑小白，但是你也想写博客。但是觉得hexo博客的搭建极其烦人，那么你可以试一试Gridea这款博客程序：

<a href="https://nesxc.vercel.app/">演示地址</a>

![image-20210115095332583](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115095332583.png)

### Gridea是什么？

**Gridea** 一个静态博客写作客户端。他在windos电脑上以exe程序运行。他打开长这个样：

![image-20210115095903014](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115095903014.png)

可以看出这款程序十分的易上手，比hexo对小白来说十分的友好。

而且它还内置了多款主题，并且集成了gitalk和disqus评论插件。

![image-20210115100245332](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115100245332.png)

![image-20210115100306809](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115100306809.png)

而且他还有NexT主题，喜欢这个主题但是不会弄hexo的小伙伴有福了！

![image-20210115100445764](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115100445764.png)

### 安装Gridea

Gridea支持三种部署方式：

> Github pages
>
> coding pages
>
> SFTP

![image-20210115100609542](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115100609542.png)

这次我打算将这个博客部署到Github然后通过<a href="https://vercel.com/">vercel</a>加速国内访问

#### 一、创建仓库

首先我们要先去Github<a href="https://github.com/new">创建</a>一个部署Girdea的仓库。

![image-20210115101023769](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115101023769.png)

因为我是通过vercel部署，所以不用加上.github.io。然后仓库一定要选择Public(公开)

#### 创建Token

因为要通过Gridea的程序上传到Github，所以我们要去创建一个<a href="https://github.com/settings/tokens/new">Token</a>。

![image-20210115101416682](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115101416682.png)

我们这里只勾上**repo**即可。

![image-20210115101528806](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115101528806.png)

注意Token只会在这里显示一次，下一次就不会显示了，所以这里一定要**复制**一下！！！！

#### 配置Gridea

这时我们回到Gridea的远程配置界面，填写相关的信息：

![image-20210115102129401](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102129401.png)

然后点击远程连接测试，通过了就会显示这个，然后保存即可:

![image-20210115102106654](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102106654.png)

#### 上传到Github

这个时候我们点击程序左下角的同步按钮成功了也会提示：

![image-20210115102258791](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102258791.png)![image-20210115102319988](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102319988.png)

然后去仓库看看原文件是否存在。

![image-20210115102415544](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102415544.png)

可以看到，上传成功了。

#### 配置vercel

上传成功了，但是想要访问还是不行。我们得去配置vercel。我们点击官网上的Start Deploying(开始部署)

![image-20210115102613266](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102613266.png)

选择Github登录。然后再仪表盘找到你的仓库点击import导入。

![image-20210115102735153](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102735153.png)

选择个人。

![image-20210115102810657](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102810657.png)

点击continue。

![image-20210115102848832](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102848832.png)

然后点击Deploy部署即可。

![image-20210115102946128](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115102946128.png)

部署成功后进入你的网站。你可能会看到这样一幕：

![image-20210115103514569](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115103514569.png)

怎么解决？复制你的网址。然后粘贴到这里：

![image-20210115103607654](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115103607654.png)

然后点击同步，同步到Github之后Vercel会自动重新部署，你只需要一直刷新等待结果即可。

![image-20210115103736449](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115103736449.png)

> 大功告成！

### 给你的博客添加Gitalk评论系统

1.打开<a href="https://github.com/settings/applications/new">链接。</a>

![image-20210113150359282](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210113150359282.png)

> 填写完毕点击注册申请

![image-20210113150855631](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210113150855631.png)

> 成功的界面。

然后把数据往这里面填即可：

![image-20210115104720835](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115104720835.png)

> Client ID就是上图中的客户编号。
>
> Client Secret就是上图中的客户机密。
>
> 仓库名称填写你Gridea的仓库名。
>
> Owner填写你的用户名。

保存同步刷新网页，进入Hello World帖子查看评论。

![image-20210115105257623](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210115105257623.png)

成功~

