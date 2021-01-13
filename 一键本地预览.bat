@echo off
title 正在进行本地预览
cd 
call hexo clean
cls
call hexo g
cls
start http://localhost:4000
call hexo s
Echo. ------------------------按任意键重回选择------------------------
Echo.
Echo.                           已完成
Echo.
Echo. ------------------------按任意键重回选择------------------------
pause
