---
title: 一劳永逸配置树莓派
date: 2020-02-28 00:01:16
categories: 教程
tags: 树莓派
---



换源

```shell
sudo nano /etc/apt/sources.list
```

在第一行开头加一个`#`，把下面的内容拷贝到最后一行之后，如图中的效果：

```shell
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
```

![换国内源](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-6e15c90b0aa7acb5.png)

先按键盘上的`ctrl`+`o`，再按回车保存，再按`ctrl`+`x`退出nano编辑器回到命令行界面。再输入以下命令更新到清华大学镜像源最新的软件列表。

```shell
sudo apt-get update 
```



给pip换源

```shell
sudo mkdir ~/.pip
ls .pip
sudo nano pip.conf
```

在打开的文件中输入以下内容：

```shell
[global]
timeout = 10
index-url =  http://mirrors.aliyun.com/pypi/simple/
extra-index-url= http://pypi.douban.com/simple/
[install]
trusted-host=
    mirrors.aliyun.com
    pypi.douban.com
```

先按键盘上的`ctrl`+`o`，再按回车保存，再按`ctrl`+`x`退出nano编辑器回到命令行界面。



## 树莓派内部设置

命令行界面输入命令，进入树莓派配置界面。用上下键和左右键切换光标位置。

```shell
sudo raspi-config
```

![树莓派配置界面](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-59742b839ab0c666.png)

### 第一行：Change User Password

按照里面的要求修改自己的密码即可。

### 第四行：Localisation Options

![Localisation Options](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-b48ae582572cdfdf.png)

#### 第一行：Change Locale 选择所在国家

这是一串很长的列表，到这个列表的最下面，让光标指在zh_CN.UTF-8 UTF-8前面，先按空格，再按回车，回到之前的界面再按回车。

![此时再按回车](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-b1dbcf02b13931d0.png)

重新选择第四行Localisation Options

#### 第二行：Change Timezone 选择所在时区

选择Asia，再选择Shanghai

![选择Asia](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-04ab876253408fc5.png)

![选择Shangh](https://upload-images.jianshu.io/upload_images/13714448-53862520982039df.png)



#### 第四行：Change Wi-fi Country 选择wifi国家

选择CN China，回车

![选择Wifi国家](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-3f99f1c817ce7396.png)



### 第五行：Interfacing Options

![Interfacing Options](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-e4c334e40682f5c2.png)

打开Camera、SSH、VNC、Serial、Remote GPIO

### 第七行：Advanced Options

![Adcanved Options](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-1d3bb4659426dce8.png)

- 选择Expand Filesystem，将根目录扩展到这个SD卡，充分利用SD卡的存储空间

- 选择Overscan，在整个屏幕上显示

- 选择Audio，选择Force 3.5mm('headphone' jack)，树莓派的声音会从耳机孔输出

- 选择Resolution，选择默认设置，自动根据显示屏调整分辨率

- 选择Pixel Doubling，增加桌面显示画质

  选择Finish，会跳出对话框问是否重新启动，直接回车确定。





安装中文字体
sudo apt-get install fonts-wqy-zenhei



安装中文输入法fcitx及Google拼音输入法（大约需要五分钟）
sudo apt-get install fcitx fcitx-googlepinyin fcitx-module-cloudpinyin fcitx-sunpinyin
安装完毕，重启即可。ctrl+空格切换为中文输入法

在跳出的对话框中输入`y`和回车`↩`，确定下载安装，需要90MB存储空间。





VNC Viewer只能在你的电脑或手机与树莓派在同一个局域网下才能远程桌面，

如果你带着电脑和手机在全世界任何地方，只要连着网，打开teamviewer，就可以

安装teamviewer，只需要五行命令。在运行第二条命令的时候会显示很多依赖包没有安装，不要慌，第三条命令就是用来干这个的。

如果命令执行过程中跳出对话框，则输入`y`和回车`↩`，确定下载安装

```shell
wget http://download.teamviewer.com/download/linux/version_11x/teamviewer-host_armhf.deb

sudo dpkg -i teamviewer-host_armhf.deb

sudo apt-get -f install

sudo apt-get install gdebi

sudo gdebi teamviewer-host_armhf.deb
```





在命令行中输入

`teamviewer info`可以查看teamviewer当前版本

在跳出的对话框选择Accept License Agreement

![teamviewer对话框](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-2bd262010506fd1d.png)



在树莓派桌面，右上角可以看到teamviewer的图标了，点击进入。再点击Grant easy access，登录你的teamviewer账户，设置连接密码。通过那一串数字（如图中的1112747434），就可以让全世界任意一台上网的电脑或手机远程桌面操控你的树莓派了。

![登录teamviewer账户](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-2830f9965d4f0ce1.png)

![点击小齿轮图标，设置](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-d5d8b43ba0bf11b9.png)

![设置连接密码](https://cdn.jsdelivr.net/gh/Nesxc/file/13714448-3dbed8171117ba60.png)



sudo apt-get upgrade 
