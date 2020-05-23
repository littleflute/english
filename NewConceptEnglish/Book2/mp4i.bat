del index.html

@echo off
echo ^<!DOCTYPE html^>	>>index.html  
echo ^<html^> >>index.html 
echo ^<body^> >>index.html
 
 
echo ^<script src="https://www.w3schools.com/lib/w3.js"^>^</script^>				>>index.html
echo ^<script src="https://littleflute.github.io/JavaScript/blclass.js"^>^</script^>		>>index.html
echo ^<script src="https://littleflute.github.io/JavaScript/blApp1.js"^>^</script^>		>>index.html

echo ^<div id="id_div_mp4i_bat_info" ^>								>>index.html
echo ^<a target="_blank" href="https://github.com/littleflute/ted1/edit/master/docs/61/mp4i.bat"^>v1.3. 112 * ^</a^>	>>index.html
echo ^<a href=".."^>[..]^</a^> ^<button id="id_btn_4_blApp" style="float:right;"^>+blApp^</button^>	>>index.html

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


echo ^<div id="DivButtons"^> 				>>index.html
@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.mkv') do (
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


echo ^<div id="DivButtons"^> 				>>index.html
@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.webm') do (
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

echo var s = '::^<div id="id_4_plxTool"^> ^</div^>';				>>index.html
echo var str4V = '^<video id="myVideo" width="720" height="480" controls^> ';				>>index.html
echo str4V += '^<source src="v1.mp4" type="video/mp4"^>Your browser does not support HTML5 video.'; 	>>index.html
echo str4V += '^</video^>';  										>>index.html
echo var md4v = blo0.blMD( "id_mdiv_4_myVideo" , s , 300,100,720,480,blColor[1]); 	>>index.html
            
echo   md4v.v = blo0.blDiv(md4v, md4v.id+"v" , str4V , blGrey[1]); 	>>index.html


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

echo var btnPlx = blo0.blBtn(bl$("id_4_plxTool"),"id_btn_Plx","+plx",blGrey[0]); >>index.html 
echo btnPlx.onclick = function() {>>index.html 
 
echo   if(btnPlx.Load){													>>index.html
echo  	if(btnPlx.n){}													>>index.html
echo  	else{btnPlx.n=true;_on_off_div(this,bl$("id_mdiv_plx"));}		>>index.html
echo    _on_off_div(this,bl$("id_mdiv_plx"));  							>>index.html
echo   }																>>index.html
echo   else  { blo0.blScript ("id_script_plx","plx.js"); btnPlx.Load=true;	}>>index.html
echo }   >>index.html
 
echo ^</script^> >>index.html


echo ^</body^> >>index.html