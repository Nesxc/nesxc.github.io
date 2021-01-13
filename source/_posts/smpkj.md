---
title: 树莓派开机教程
date: 2020-03-01 00:01:16
categories: 教程
tags: 树莓派
---

# 树莓派开机

下载镜像文件2018-06-27-raspbian-stretch





格式化SD卡

![格式化已有的SD卡](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-bc7215d37c39e836.png)



![格式化SD卡成功](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-abf5e3f941d3016a.png)

烧录系统镜像

![烧录树莓派操作系统镜像](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-6d22b8fb9a2fbd6a.png)



创建`ssh`文件和`wpa_supplicant.conf`空白文件

用文本编辑器打开`wpa_supplicant.conf`,输入以下配置，可以用多个network{}来配置多个wifi：

```shell
country=GB
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
	ssid="将我替换成WiFi名字，不删除引号,不能有中文"
	psk="将我替换成WiFi密码，不删除引号"
	priority=将我替换成数字，数字越大代表优先级越高
}
```

例如这样

![配置wifi文件](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-1b37351bcd946978.png)

将ssh空白文件和wpa_supplicant.conf文件放入boot盘中

![](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-70819fe7ad131c4c.png)



拔出SD卡，插入树莓派，插好HDMI显示屏线和电源线，通电。



获取树莓派ip地址的方法：

1. 如果树莓派连接到了显示屏上，可以直接鼠标指向右上角网络图标，ip地址会自动显示
2. 如果树莓派连接到了显示屏上，可以打开树莓派命令行窗口，输入`ifconfig`
3. 如果没有显示屏，用手机连到与树莓派同一个网络的wifi下，打开dataplicity应用上扫描出树莓派的ip地址
4. 如果没有显示屏，用电脑连到与树莓派同一个网络的wif或者有线网络下，打开局域网ip扫描器，扫描出树莓派ip地址



