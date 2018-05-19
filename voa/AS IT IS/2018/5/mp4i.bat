del index.html

@echo off
echo ^<!DOCTYPE html^>	>>index.html  
echo ^<html^> >>index.html 
echo ^<body^> >>index.html
echo %1 >>index.html

echo ^<script src="https://www.w3schools.com/lib/w3.js"^>^</script^>		>>index.html

echo ^<div id="id_div_mp4i_bat_info" ^> ^<a target="_blank" href="https://github.com/littleflute/bat/edit/master/bat/mp4index/mp4i.bat"^>v1.2. 35 * ^</a^> ^</div^>			 >>index.html
echo ^<div id="DivCurTime"^>^</div^> >>index.html
echo ^<br^> >>index.html

echo ^<div id="id_div_toolbar_1" style="border:1px solid red;" ^>							>>index.html
echo ^<button onclick="getCurTime()" type="button"^>Get current time position^</button^> >>index.html 

echo ^<button onclick="setCurTime(0)" type="button"^>00^</button^>^<br^> >>index.html  
 
echo ^<button onclick="setCurTime(5)" type="button"^>Set time position to 5 seconds^</button^>^<br^>   >>index.html
echo ^</div^> 														>>index.html

@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.mp4') do (
	rem echo %%a >>index.html
	if !x! == 10 (
		echo ^<br^> >>index.html
	)
	if !x! == 20 (
		echo ^<br^> >>index.html
	)
	if !x! == 30 (
		echo ^<br^> >>index.html
	)
	if !x! == 40 (
		echo ^<br^> >>index.html
	)
	call set /a x = !x! + 1
	echo ^<button onclick="play('%%a')"^>!x!:%%a^</button^> >>index.html
)
@echo off  

echo ^<br^> 	>>index.html
echo ^<div id="id_div_4_jpg" style="border:1px solid blue;" ^>				>>index.html
@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.jpg') do (
	rem echo %%a >>index.html 
	call set /a x = !x! + 1
	echo %%a, >>index.html
)
@echo off  
echo ^</div^> 											>>index.html

echo ^<br^> >>index.html
echo ^<video id="myVideo" width="720" height="480" controls^> >>index.html
echo  ^<source src="0.mp4" type="video/mp4"^>  >>index.html
echo Your browser does not support HTML5 video. >>index.html
echo ^</video^>  >>index.html
echo ^<script^>  >>index.html
echo var vid = document.getElementById("myVideo"); >>index.html

echo function play(i) {>>index.html
    
echo     vid.src=i; >>index.html
echo     vid.load();>>index.html
echo     vid.play(); >>index.html
echo }>>index.html
 

echo function getCurTime() {  >>index.html
echo    document.getElementById("DivCurTime").innerHTML= vid.currentTime; >>index.html
echo }   >>index.html
echo function setCurTime(t) {>>index.html 
echo    vid.currentTime=t;  >>index.html
echo    getCurTime();>>index.html
echo }  >>index.html
echo function moveMS(ms) {>>index.html 
echo   vid.currentTime+=ms;>>index.html
echo   getCurTime();  >>index.html
echo }   >>index.html

echo var _loadScript = function (id,src){					>>index.html
echo	var	r = document.createElement("script");		>>index.html
echo	r.id = id;				>>index.html
echo	r.src = src; 				>>index.html
echo	document.body.appendChild(r);		>>index.html
echo	}					>>index.html

echo _loadScript ("id_script_plx","plx.js");				>>index.html
echo ^</script^> >>index.html
echo ^</body^> >>index.html