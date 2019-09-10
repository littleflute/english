del index.html

@echo off
echo ^<!DOCTYPE html^>	>>index.html  
echo ^<html^> >>index.html 
echo ^<body^> >>index.html
 
 
echo ^<script src="https://www.w3schools.com/lib/w3.js"^>^</script^>				>>index.html
echo ^<script src="https://littleflute.github.io/JavaScript/blclass.js"^>^</script^>		>>index.html
echo ^<script src="https://littleflute.github.io/JavaScript/blApp.js"^>^</script^>		>>index.html

echo ^<div id="id_div_mp4i_bat_info" ^>								>>index.html
echo ^<a target="_blank" href="https://github.com/littleflute/bat/edit/master/bat/mp4index/mp4i.bat"^>v1.3. 21 * ^</a^>	>>index.html
echo ^<a href=".."^>[..]^</a^> ^<button id="id_btn_4_blApp"^>+++++++++++blApp+++++++++^</button^>	>>index.html

echo ^</div^>						 >>index.html
echo ^<div id="DivCurTime"^>^</div^> 			>>index.html
echo ^<br^> >>index.html 


echo ^<div id="DivButtons"^> 				>>index.html
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



@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.mp3') do (
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

@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.wav') do (
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


echo  ^</div^> 			>>index.html


echo ^<br^> 	>>index.html
echo ^<div id="id_div_4_gif" style="border:1px solid green;" ^>				>>index.html
@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.gif') do (
	rem echo %%a >>index.html 
	call set /a x = !x! + 1
	echo %%a, >>index.html
)
@echo off  
echo ^</div^> 								>>index.html	
 



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
echo ^</div^> 								>>index.html	
 



echo ^<br^> 	>>index.html
echo ^<div id="id_div_4_png" style="border:1px solid blue;" ^>				>>index.html
@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.png') do (
	rem echo %%a >>index.html 
	call set /a x = !x! + 1
	echo %%a, >>index.html
)
@echo off  
echo ^</div^> 							>>index.html	 




echo ^<br^> 	>>index.html
echo ^<div id="id_div_4_lrcJS" style="border:1px solid red;display: none;" ^>		>>index.html
@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *lrc.js') do (
	rem echo %%a >>index.html 
	call set /a x = !x! + 1
	echo %%a, >>index.html
)
@echo off  
echo ^</div^> 							>>index.html	


 
echo ^<script^>  >>index.html

echo var str4V = '^<video id="myVideo" width="720" height="480" controls^> ';				>>index.html
echo str4V += '^<source src="v1.mp4" type="video/mp4"^>Your browser does not support HTML5 video.'; 	>>index.html
echo str4V += '^</video^>';  										>>index.html
echo var md4v = blo0.blMDiv(document.body,"id_mdiv_4_myVideo" , str4V , 300,100,500,400,blColor[1]); 	>>index.html
            


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
echo	var	r = document.createElement("script");				>>index.html
echo	r.id = id;								>>index.html
echo	r.src = src; 								>>index.html
echo	document.body.appendChild(r);						>>index.html
echo	}									>>index.html

echo _loadScript ("id_script_plx","plx.js");				>>index.html
echo ^</script^> >>index.html


echo ^</body^> >>index.html