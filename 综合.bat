@Echo Off
Title HEXO控制台
:begin
call move "%LOCALAPPDATA%\一键本地预览.bat" ./ 
call move "%LOCALAPPDATA%\一键上传托管.bat" ./ 
call move "%LOCALAPPDATA%\文章更新.bat" ./ 
cls
Echo. ------------------------HEXO控制台 V0.1------------------------
Echo. 请选择需要的操作
Echo.
Echo 按下 1 清理生成的静态文件　
Echo.
Echo 按下 2 生成静态文件
Echo.
Echo 按下 3 启动本地服务器
Echo.
Echo 按下 4 上传到托管平台
Echo.
Echo 按下 5 一键本地预览
Echo.
Echo 按下 6 一键上传托管
Echo.
Echo 按下 7 文章更新上传
Echo.
Echo. ------------------------HEXO控制台 V0.1------------------------
Echo.
Set /P Choice= 　　　　　请选择要进行的操作数字 ，然后按回车：
cls
If not "%Choice%"=="" (
  If "%Choice%"=="7" call 文章更新上传.bat
  If "%Choice%"=="6" call 一键上传托管.bat
  If "%Choice%"=="5" call 一键本地预览.bat
  If "%Choice%"=="4" hexo d
  If "%Choice%"=="3" hexo s
  If "%Choice%"=="2" hexo g
  If "%Choice%"=="1" hexo clean
)
Echo.
Echo.
Echo.
Echo.
Echo.
Echo. ------------------------按任意键重回选择------------------------
Echo.
Echo.                           已完成
Echo.
Echo. ------------------------按任意键重回选择------------------------
pause
goto :begin


