@echo off
title 正在进行本地预览
call hexo clean
call hexo g
start http://localhost:4000
call hexo s