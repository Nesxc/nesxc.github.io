---
title: Wordpress后台管理员无法访问
date: 2020-11-01 00:01:16
categories: WordPress
tags: WordPress错误
---
##### Wordpress后台管理员无法访问

这个问题，非常的致命哈哈哈哈。

原因很简单。

* 你是和我上一篇博文一样配置完https重定向的

为什么会出现这种情况呢。

他们把这串代码弄到了最底下。

```php
$_SERVER['HTTPS'] = 'on';
define('FORCE_SSL_LOGIN', true);
define('FORCE_SSL_ADMIN', true);
```

![wt](https://cdn.jsdelivr.net/gh/Nesxc/file/8AS2.png)

然后，你只需把他移动到

```php
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}
```

这串代码以上就行了。

![jj](https://cdn.jsdelivr.net/gh/Nesxc/file/8AS1.png)

