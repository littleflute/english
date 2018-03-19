del index.html
echo ^<!DOCTYPE html^>  >>index.html
echo ^<html^>		>>index.html
echo ^<head^>		>>index.html
echo ^<title^>		>>index.html
echo v0.1.1	>>index.html 
echo ^</title^>		>>index.html

echo ^<style^>				>>index.html

echo body {margin:0;}			>>index.html
echo .topnav {				>>index.html
echo   overflow		: hidden;	>>index.html
echo   background-color	: #333;		>>index.html
echo }					>>index.html
echo .topnav a {			>>index.html
echo   float		: left;		>>index.html
echo   display		: block;	>>index.html
echo   color		: #f2f2f2;	>>index.html
echo   text-align	: center;	>>index.html
echo   padding		: 14px 16px;	>>index.html
echo   text-decoration	: none;		>>index.html
echo   font-size	: 17px;		>>index.html
echo }					>>index.html
echo .topnav a:hover {			>>index.html
echo   background-color	: #ddd;		>>index.html
echo   color		: black;	>>index.html
echo }					>>index.html
echo .topnav .icon {			>>index.html
echo   display	: none;			>>index.html
echo }							>>index.html
echo @media screen and (max-width: 600px) {		>>index.html
echo   .topnav a:not(:first-child) {display: none;}	>>index.html
echo   .topnav a.icon {					>>index.html
echo     float: right;					>>index.html
echo     display: block;				>>index.html
echo   }						>>index.html
echo }							>>index.html
echo @media screen and (max-width: 600px) {		>>index.html
echo   .topnav.responsive {position: relative;}		>>index.html
echo   .topnav.responsive .icon {			>>index.html
echo     position: absolute;				>>index.html
echo     right: 0;					>>index.html
echo     top: 0;					>>index.html
echo   }						>>index.html
echo   .topnav.responsive a {				>>index.html
echo     float: none;					>>index.html
echo     display: block;				>>index.html
echo     text-align: left;				>>index.html
echo   }						>>index.html
echo }							>>index.html
echo ^</style^>						>>index.html							>>index.html

echo ^</head^>	>> 	index.html
echo ^<body^>	>> 	index.html


echo ^<div class="topnav" id="myTopnav"^>						>>index.html
echo   ^<a href="%1"^>Home^</a^>							>>index.html
echo   ^<a href="#news"^>News^</a^>							>>index.html
echo   ^<a href="#contact"^>Contact^</a^>						>>index.html
echo   ^<a href="#about"^>About^</a^>							>>index.html
echo   ^<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()"^>^&#9776;^</a^> 	>>index.html
echo ^</div^>							>>index.html


echo ^<div style="padding-left:16px"^>							>>index.html
echo   ^<h2^>Responsive Topnav Example^</h2^>							>>index.html
echo   ^<p^>Resize the browser window to see how it works.^</p^>							>>index.html
echo   ^<div id = "fileListID" style="border:1px red solid;"^>^</div^>				>>index.html

echo ^</div^>							>>index.html


echo ^<script^>							>>index.html
echo function myFunction() {							>>index.html
echo    var x = document.getElementById("myTopnav");							>>index.html
echo    if (x.className === "topnav") {							>>index.html
echo        x.className += " responsive";							>>index.html
echo    } else {							>>index.html
echo        x.className = "topnav";							>>index.html
echo    }							>>index.html
echo }							>>index.html

echo function addDiv2Div(ParentID,newID,newHTML) {			>>index.html
echo    var x = document.getElementById(ParentID);			>>index.html
echo    if (x) {							>>index.html
echo        var e = document.createElement("div");			>>index.html
echo        e.id = newID;						>>index.html
echo        e.innerHTML = newHTML;					>>index.html
echo        x.appendChild(e);						>>index.html
echo    }								>>index.html
echo }									>>index.html
echo ^</script^>							>>index.html

echo ^<script src="m.js"^>							>>index.html
echo ^</script^>							>>index.html

echo ^<script id="s1"^>							>>index.html
echo     addDiv2Div("fileListID","xddbg","title");				>>index.html
 
echo     for (var i = 0; i ^< f.length; i++){				>>index.html
echo         addDiv2Div("fileListID","f"+i,f[i]);				>>index.html
echo     }   								>>index.html
echo ^</script^>							>>index.html


echo para 1: %1 ^<br^>	>> 	index.html

echo ^<a href="http://www.beautifullover.org" target="_blank"^>	>> 	index.html
echo beautifullover ^</a^>	>>	index.html
echo ^</br^>	>>index.html

echo ^<a href="https://github.com/littleflute/BlCDs/issues/519" target="_blank"^>	>> 	index.html
echo issue519 ^</a^>	>>	index.html

echo ^<div id="curSong" style="border:1px solid green;"^>^</div^>	>>index.html
echo ^<p id="demo" style="border:1px solid red;"^>^</p^>		>> index.html
 
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0

for /F "delims=" %%a in ('dir /b *.mp3') do (
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
	if !x! == 1 (
		 echo ^<br^> ^<div id='song1'^>%%a^</div^>	>>index.html
	)
	echo ^<button id = "!x!" onclick="me.play(this)"^>!x!:%%a^</button^> >>index.html
)
 

echo ^<br^>^<audio id="mp3Player" controls^> 	>>index.html
echo 	^<source src="01 Owner of a Lonely Heart.mp3" type="audio/mpeg"^>	>>index.html
echo	Your browser does not supoort hte audio element!	>>index.html
echo ^</audio^>		>>index.html

echo ^<div id="timerShow" style="border:1px solid blue;"^>^</div^>	>>index.html
echo ^<button onclick="me.playId(1)"^>test^</button^>	>>index.html

echo ^<script^>								>> index.html

echo 	var xmlhttp = new XMLHttpRequest();				>> index.html
echo 	xmlhttp.onreadystatechange = function() {				>>index.html
echo    	if(this.readyState == 4 ^&^& this.status == 200) {		>>index.html
echo        		var myObj = JSON.parse(this.responseText); 		>>index.html
echo        		document.getElementById("demo").innerHTML = myObj.songNum;	>>index.html
echo    	}								>>index.html
echo 	};		>> index.html
echo 	xmlhttp.open("GET", "https://littleflute.github.io/Elton-John/l.json", true);	>>index.html
echo 	xmlhttp.send();							>>index.html


echo //*---------------------------------				>>index.html
echo function mp3Engine(ver){						>>index.html
echo    this.v 		= ver;						>>index.html
echo    this.p 		= document.getElementById("mp3Player");		>>index.html
echo    this.p.nTime	= 0;						>>index.html
echo	this.p.boss	= this;						>>index.html
echo    this.p.btn  	= document.createElement("button");		>>index.html
echo    this.p.btn.innerHTML	= "+";					>>index.html
echo    this.p.btn.boss	= this.p;					>>index.html
echo    document.body.appendChild(this.p.btn);				>>index.html
echo    var v = this.p.view  	= document.createElement("div");	>>index.html
echo    v.style.border 		= "1px blue solid";			>>index.html
echo    v.style.display   	= "none";				>>index.html
echo    v.id			= "playerView";				>>index.html
echo    document.body.appendChild(this.p.view);				>>index.html
echo    this.p.btn.onclick	= function(){				>>index.html
echo        if(this.innerHTML=="+"){					>>index.html
echo           this.innerHTML="-";					>>index.html
echo           this.boss.view.style.display="block";			>>index.html
echo        }								>>index.html
echo        else if(this.innerHTML=="-"){				>>index.html
echo           this.innerHTML="+";					>>index.html
echo           this.boss.view.style.display="none";			>>index.html
echo        }								>>index.html
echo    }								>>index.html

echo    this.setVolume 	= function(v){					>>index.html
echo         this.p.volume = v;						>>index.html
echo    }								>>index.html

echo    this.setLyricFile = function(filePath){				>>index.html 
echo        var t 	= document.getElementById("playerView"); 	>>index.html
echo        var divLyr 	= document.createElement("div"); 		>>index.html
echo        divLyr.id	= "divLyrID";			 		>>index.html
echo        divLyr.src 	= filePath; 					>>index.html
echo        divLyr.style.border = "1px red solid"; 			>>index.html
echo        divLyr.update	= function(c,d){			>>index.html
echo            var s	= divLyr.src + ":" + c + "/" + d;		>>index.html
echo            divLyr.innerHTML = s;					>>index.html
echo        } 								>>index.html
echo         t.appendChild(divLyr); 					>>index.html
echo        divLyr.update(0,0);						>>index.html
echo    }								>>index.html

echo    this. playId = function (id){					>>index.html
echo      var b = document.getElementById(id);				>>index.html 
echo      if(b==null) b = document.getElementById("1");			>>index.html
echo      this.play(b);							>>index.html
echo    }								>>index.html

echo     this.oldBtn = null;						>>index.html
echo     this.play	= function (o){					>>index.html
echo         if(this.oldBtn) {						>>index.html
echo             this.oldBtn.style.backgroundColor = "green";}		>>index.html
echo 	     var p = document.getElementById("mp3Player");		>>index.html
echo         var s = o.innerHTML; 					>>index.html
echo         s = s.split(":");						>>index.html
echo 	     p.src = s[1];						>>index.html
echo 	     p.play();							>>index.html
echo 	     var s = document.getElementById("curSong");		>>index.html
echo 	     if(s) s.innerHTML = p.src;					>>index.html
echo         o.style.backgroundColor="yellow";				>>index.html
echo         this.oldBtn = o;						>>index.html
echo     }								>>index.html
 
echo     this.myTimeFun = function(){	 				>>index.html
echo        var t = document.getElementById("timerShow");		>>index.html
echo        var p = document.getElementById("mp3Player"); 		>>index.html
echo        var lr = document.getElementById("divLyrID");		>>index.html
echo        lr.update(p.currentTime,p.duration);			>>index.html
echo        p.nTime++;							>>index.html
echo	    var s = p.nTime + ": " + p.currentTime + "/" + p.duration;	>>index.html 
echo        t.innerHTML = s;						>>index.html
echo	    if(p.ended) p.boss.playId(parseInt(p.boss.oldBtn.id)+1);	>>index.html
echo    }								>>index.html

echo    setInterval(this.myTimeFun, 1000);				>>index.html
echo    this.setVolume(0.2);						>>index.html
echo    this.setLyricFile("xdLrc.lrc");					>>index.html	
echo    document.title = this.v;					>>index.html
echo }									>>index.html


echo //*==================================				>>index.html
 
echo var me = new mp3Engine("v0.9.7");					>>index.html 
echo //*/	>>index.html
echo ^</script^>							>>index.html


echo ^</body^>	>> 	index.html
echo ^</html^>	>> 	index.html