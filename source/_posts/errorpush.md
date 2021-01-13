---
title: 解决hexo的error:failed to push some refs to 'xxx'
date: 2020-04-25 00:01:16
categories: hexo
tags: 维护
---

今天我在日常上传新文档是发现使用 

```YML
hexo d
```

的命令时，跳出了这个错误：

```yml
error: failed to push some refs to 'https://e.coding.net/ranhexo/hexo/hexo.git'
```

![image-20201219222210846](https://cdn.jsdelivr.net/gh/Nesxc/file/image-20201219222210846.png)

这个错误其实很简单，是应为同步文件缺失导致的，很明显我们push的hexo静态文件会缺失README.md这个文件，所以我们只需要把远端的README.md文件同步下来或者新建一个readme.md文档即可。

这里我选择新建README.md文档，毕竟这个没有什么用。哈哈哈哈

![](https://cdn.jsdelivr.net/gh/Nesxc/file@master//20201219222611.png)

果不其然，在创建了README.md文档后同步就能正常的进行。

![image-20201219222945319](https://cdn.jsdelivr.net/gh/Nesxc/file/image-20201219222945319.png)