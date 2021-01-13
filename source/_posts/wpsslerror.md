---
title: WordPress配置完SSL证书后台重定向过多
date: 2020-11-01 00:01:15
categories: WordPress
tags: WordPress错误
---
##### Wordpress配置完SSL证书后台重定向过多

前言:在配置完cloudflash的DNS解析后，我发现我的管理员后台一直显示重定向过多。

![cd](https://cdn.jsdelivr.net/gh/Nesxc/file@master/8ARN.png)

后来发现是我的HTTPS配置问题。

##### 解决方法

首先打开你的网站根目录。找到一个名为wp-config.php的文件。

![wj](https://cdn.jsdelivr.net/gh/Nesxc/file/8ARR.png)

打开它，然后拉到最下面。添加以下代码。

```php
$_SERVER['HTTPS'] = 'on';
define('FORCE_SSL_LOGIN', true);
define('FORCE_SSL_ADMIN', true);
```

然后回到后台地址

https://exp.com/wp-admin/

按住

```
ctrl + F5
```

刷新即可。

![cg](https://cdn.jsdelivr.net/gh/Nesxc/file/8ARV.png)