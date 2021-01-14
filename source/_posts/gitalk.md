---
title: 关于hexo的评论系统以及改用Gitalk
date: 2021-01-13 15:16:51
tags: 技巧
categories: hexo
top_img:
cover:
---

### 前言

由于某种原因，我放弃了Valine，主要是休眠时间太过烦人，而且评论托管在第三方，数据管理不方便。

![image-20210113145039309](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210113145039309.png)

> 因为设置错误导致每天早上6点开始休眠，一直到中午12点45。

所以以上种种让我开始了选择其他评论系统。

### 考虑过哪些评论系统？

* Github家族：gitment、gitalk、gitter

* leancloud家族：Waline

* 国外：disqus

最终，不喜欢gitment和gitter的样子。disqus据说会被墙，waline还是基于leancloud。而选择了gitalk。

### 安装Gitalk

1.打开<a href="https://github.com/settings/applications/new">链接。</a>

![image-20210113150359282](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210113150359282.png)

> 填写完毕点击注册申请

![image-20210113150855631](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210113150855631.png)

> 成功的界面。

然后我们看看butterfly主题需要那些参数，并且往上填写即可。

``` yml
# gitalk
# https://github.com/gitalk/gitalk
gitalk:
  client_id: #上图中的客户编号
  client_secret: #上图中的客户机密
  repo: #仓库
  owner: #用户名
  admin: #管理员
  language: zh-CN # en, zh-CN, zh-TW, es-ES, fr, ru
  perPage: 10 # Pagination size, with maximum 100.
  distractionFreeMode: false # Facebook-like distraction free mode.
  pagerDirection: last # Comment sorting direction, available values are last and first.
  createIssueManually: false # Gitalk will create a corresponding github issue for your every single page automatically
```

填写完之后一顿hexo clean.....g......d....

然后进入网站：

![img](https://cdn.jsdelivr.net/gh/Nesxc/file@master/noinit.png)

> 我当时忘了截图，这是来自https://phantomt.github.io的图

登录并进行初始化。这里登录的账号一定要是创建Oauth的账户。

![image-20210113151255855](https://cdn.jsdelivr.net/gh/Nesxc/file@master/image-20210113151255855.png)

> 初始化之后就可以正常评论了。

### gitalk对比Valine有什么优势？

* 没有Leancloud的休眠政策
* 评论储存在github仓库，管理方便
* 较之Valine多了登录程序，bot炸评论的几率小了许多