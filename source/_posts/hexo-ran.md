---
title: hexo主题配置整合包发布
date: 2020-12-03 23:31:18
tags: hexo-ran
categories: hexo
top_img: 
---
![image.png](https://ss.im5i.com/2020/12/03/image.png)
# hexo-ran（待更新）
预览: 👍 [Ran](https://www.ranas.cn/)   
文檔: 📖 [Butterfly Docs](https://butterfly.js.org/posts/21cfbf15/)   
项目地址: [Hexo-Ran](https://github.com/Nesxc/hexo-ran/)

  本整合包是基于[hexo-butterfly](https://github.com/jerryc127/hexo-theme-butterfly)整合而来的整合包

## 安裝

### Git 安裝

新建一个blog文件夹，在里面直接运行:

```yml
git clone https://github.com/Nesxc/hexo-ran.git
```
### exe安装
打开提供的exe程序，将文件安装在你的hexo博客目录即可
<a href="https://github.com/Nesxc/hexo-ran/releases/download/V0.1/hexo-ran.exe" target="_blank">点击下载</a>  
下载直连github  

## 前置NPM插件
>如果需要删除，把install更为uninstall即可。
>pug以及stylus的渲染器
```yml
npm install hexo-renderer-pug hexo-renderer-stylus --save
```
>[hexo-generator-search](https://github.com/wzpan/hexo-generator-search)本地搜索

```yml
npm install hexo-generator-searchdb --save
```
>[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) RSS
```yml
npm install hexo-generator-feed --save
```
>[hexo-generator-sitemap](https://github.com/coneycode/hexo-generator-baidu-sitemap) sitemap生成
```yml
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```
>[hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d) 看板娘
```yml
npm install --save hexo-helper-live2d
```
>### 整合包的好处

>1.对于小白更加的友好。  
>2.即装即用。  
>3.稳定不易出错。

## 本站的_config.butterfly.yml正在全面汉化。