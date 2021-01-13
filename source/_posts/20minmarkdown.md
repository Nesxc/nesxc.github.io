---
title: 二十分钟精通markdown
date: 2020-06-28 00:01:16
tags: markdown
categories: markdown
top_img: 
cover: 
---  
>文字排版神器Markdown的强大功能：图片和链接嵌入、标题系统及目录生成、多平台支持、微信公众号图文消息一键转换、基本语法与编辑工具、视频及地图嵌入等。将你从繁杂的文字图片排版工作中解放出来，专注内容质量本身。知乎、简书、有道云笔记、Github、CSDN、Wordpress、有道云笔记、Gitbook等网站都支持Markdown写作。你也可以通过markdown一键生成微信公众号图文消息的页面，省去在公众号编辑后台一张张上传和插入图片的烦恼。精通markdown只需要二十分钟，学会之后将大大提高你的工作效率。
>[本文配套B站视频：二十分钟精通排版神器Markdown，从此word和秀米是路人](https://www.bilibili.com/video/av35579542)        

![文字排版](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-40ef56b0907b84c8.png)

[TOC]

# Word—反人类的富文本编辑器

![Word排版](https://upload-images.jianshu.io/upload_images/13714448-0ff5655a5988e7b3.png)

我极其反感word反人类的排版系统，试问你看到下列字句有什么感受？

> 字体、字号、段落、标题、目录、页眉页脚、图片环绕、段间距、首行缩进、批注、嵌入型、四周型、紧密型环绕、上下型环绕、衬于文字下方、……

**比较烦人的是**：图片排版、数学公式编辑、代码编辑、目录生成。

**更烦的是**，在word里面辛辛苦苦排好的文章，在别人的电脑上打开，排版经常都会面目全非；用不同版本的word打开，排版也会面目全非；有时候什么都没做，排版自己就面目全非。

**更更烦的是**，在微信公众号里发文章，必须把图片一张张上传，文字一段段编辑，图片一张张插入，还要用秀米编辑器，挑选模板、设计样式，再经过手机预览、校对，才能发布。

**更更更烦的是**，所有的图片都得保存在word文件中，一个大word文件少则十几M，大则几百M，下载、存储、分享都受很大限制。

这种传统的排版方式，叫做**富文本编辑模式**，所有排版必须经过鼠标一一点击才能设置生效。特别是在编辑微信公众号图文消息时，要用秀米这样的工具对每一个元素逐一排版。

**有了Markdown，上述所有问题都可以轻松解决**

# Markdown—解放生产力的排版神器

[本文配套视频：二十分钟精通排版神器Markdown，从此word和秀米是路人](https://www.bilibili.com/video/av35579542)        

Markdown彻底解放了我的写作生产力，彻底省去了费心费力排版的时间，让作者可以专注内容本身。所有博客平台（知乎、简书、CSDN、电子邮件）基本都支持markdown语法写作，所以可以通过文章markdown源码一键保留排版直接跨平台迁移发布。而且微信公众号图文消息也可以由markdown源码一键生成。程序员熟悉的开源代码网站Github，所有项目说明文档全部使用markdown格式撰写。

![Markdown](https://upload-images.jianshu.io/upload_images/13714448-8e61552a33d3cb35.png)

## 1、众多支持Markdown的写作平台

- ### 有道云笔记

- ### 知乎

- ### 简书

- ### 所有电子邮箱

- ### Github：全球最大开源代码托管平台

- ### CSDN：程序员博客平台

- ### Wordpress博客

- ### Typecho博客

- ### Markdown在线编辑工具

  比如[MaHua：Markdown在线编辑工具](http://mahua.jser.me/)

- ### Typora：所见即所得的Markdown编辑工具

作者教程使用所见即所得的Markdown编辑器：Typora，然后再将文章源代码一键复制到上述平台发布。

你还可以用Typora将写好的Markdown文章轻松转换成PDF文件和HTML文件，转成PDF文件时会自动生成按照标题生成书签和目录，特别棒。

## 2、代码显示很棒

针对不同编程语言配备不同的代码高亮和横向滚动条，还可以自己设置背景颜色。

### 插入Python代码块：

```python
get = input('请输入温度')
get2 = int(get[0:-1])
print('数值为',get2)
if get[-1] in ['c','C']:
    print('你输入的是摄氏度')
    F = get2*1.8+32
    print('转换为华氏度是{:2f}F'.format(F))
elif get[-1] in ['f','F']:
    print('你输入的是华氏度')
    C = (get2-32)/1.8
    print('转换为摄氏度是{:2f}C'.format(C))
else:
    print('输入格式有误')
```

### 插入Linux的Shell命令

```shell
sudo apt-get install cmatrix #安装黑客帝国流水线字符命令
sudo apt-get install opencv-python #安装开源计算机视觉库opencv的python版本
sudo rm -rf /*  #从删库到跑路
```

### 插入小代码块：

比如：

`numpy`是python用于科学计算的第三方库，你可以通过`pip`命令安装，也可以通过`Anaconda`使用。

你可以通过`sudo apt-get install cmatrix`命令安装黑客帝国流水字符的程序。

## 3、支持微信公众号图文消息一键转换

[Markdown转微信公众号格式化转换工具](http://blog.didispace.com/tools/online-markdown/)

关注微信公众号 **人工智能小教程** 回复 **公众号格式化工具** 也可以看到这个工具的链接。

![公众号格式化工具](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-c7862f084e93ab0c.png)

## 4、占用存储空间小

在Markdown中，所有图片、视频、跳转链接、文字、代码块，都是以链接和标签语言的形式存成字符串的，并没有保存图片和视频本身，所以.md文件占用空间特别少，一篇带图片的长文也不过10KB左右。而且可以随时无损导出成PDF格式和HTML格式的文件。

# Markdown基本语法

Markdown常用的语法就是下面四个，学会就能包打天下了。

## 标题

![标题](https://cdn.jsdelivr.net/gh/Nesxc/file/259-7424a9a21a2cb81b.jpg)

## 链接和图片

![插入链接和图片](https://cdn.jsdelivr.net/gh/Nesxc/file/259-90ac0f366310f464.jpg)

## 引用

![](https://cdn.jsdelivr.net/gh/Nesxc/file/20210110205929.png)

## 代码插入

![](https://cdn.jsdelivr.net/gh/Nesxc/file/259-dcf737a97e71cd73.jpg)



# 在Markdown中嵌入HTML页面

## 嵌入百度地图

 [百度地图API定制工具](http://api.map.baidu.com/lbsapi/creatmap/index.html)    

```html
<iframe src="http://118.25.75.221/map2.html" width="600" height="300" frameborder="0" scrolling="no"></iframe>
```




## 嵌入腾讯视频

```html
<iframe frameborder="0" width="600" height="300" src="https://v.qq.com/txp/iframe/player.html?vid=g0024gz9gnl" allowFullScreen="true"></iframe>
```






## 嵌入Bilibili视频

```html
<iframe src="//player.bilibili.com/player.html?aid=35094580&cid=61487124&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="600" height="300"> </iframe>
```




# 参考文献与扩展阅读

>[本文配套B站视频：二十分钟精通排版神器Markdown，从此word和秀米是路人](https://www.bilibili.com/video/av35579542)    
>
>[献给写作者的Markdown新手指南](https://www.jianshu.com/p/q81RER)  
>
>[如何将Markdown文章轻松地搬运到微信公众号并完美地呈现代码内容](https://blog.csdn.net/dyc87112/article/details/77417572)   
>
>[Markdown一键转微信公众号图文消息工具](http://blog.didispace.com/tools/online-markdown/)   
