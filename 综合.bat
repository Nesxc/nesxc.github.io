@Echo Off
Title HEXO����̨
:begin
call move "%LOCALAPPDATA%\һ������Ԥ��.bat" ./ 
call move "%LOCALAPPDATA%\һ���ϴ��й�.bat" ./ 
call move "%LOCALAPPDATA%\���¸���.bat" ./ 
cls
Echo. ------------------------HEXO����̨ V0.1------------------------
Echo. ��ѡ����Ҫ�Ĳ���
Echo.
Echo ���� 1 �������ɵľ�̬�ļ���
Echo.
Echo ���� 2 ���ɾ�̬�ļ�
Echo.
Echo ���� 3 �������ط�����
Echo.
Echo ���� 4 �ϴ����й�ƽ̨
Echo.
Echo ���� 5 һ������Ԥ��
Echo.
Echo ���� 6 һ���ϴ��й�
Echo.
Echo ���� 7 ���¸����ϴ�
Echo.
Echo. ------------------------HEXO����̨ V0.1------------------------
Echo.
Set /P Choice= ������������ѡ��Ҫ���еĲ������� ��Ȼ�󰴻س���
cls
If not "%Choice%"=="" (
  If "%Choice%"=="7" call ���¸����ϴ�.bat
  If "%Choice%"=="6" call һ���ϴ��й�.bat
  If "%Choice%"=="5" call һ������Ԥ��.bat
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
Echo. ------------------------��������ػ�ѡ��------------------------
Echo.
Echo.                           �����
Echo.
Echo. ------------------------��������ػ�ѡ��------------------------
pause
goto :begin


