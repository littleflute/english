var _parseFun = function (d,txt){       
     d.innerHTML = "";
     var s = "<a href='https://github.com/littleflute/english/issues/14' target='_blank'>#14 v0.0. 124<a/> - "; 
    s += "<a href='https://github.com/littleflute/english/edit/master/Issues/14/i.js' target='_blank'>i.js* <a/> - ";
    s += "<a href='https://littleflute.github.io/english/Issues/14/i.js' target='_blank'>i.js<a/>";
     blo0.blDiv(d,d.id+"_#14_", s,blColor[4]);

     var l = txt.split("bllist:");
    if(l.length<2) {var t = blo0.blDiv(d,d.id+"_title_", txt,blColor[4]);
        return;
     }
     var str = "var a = " + l[1];

     eval(str);
     var t = blo0.blDiv(d,d.id+"_title_", a.title,blColor[4]);
     t.v = blo0.blDiv(t,t.id+"v", "v",blColor[5]);
 
     for(i in a.songs){
           var p = bl$("id_mp3Player");
           var dSong = blo0.blDiv(d,d.id+"_mp3_"+i, a.songs[i].mp3,blGrey[5]);
           dSong.style.border = "2px solid blue;";
           dSong .onclick = function(_this, _s ){ 
                return function(){ 
                   if(!p.dNow) p.dNow= null;
                   if(_this!= p.dNow){
                     p.src = _this.innerHTML;  
                    if(p.dNow) p.dNow.style.background = blGrey[5]; 
                     p.dNow = _this;
                     p.play();
                     _this.style.background = blGrey[0]; 
                     t.v.innerHTML = _s.lrc;
                   }
                   else{
                     ;
                   }
                }
           }(dSong, a.songs[i] )
           dSong .onmouseover= function(_this){                
                return function(){
                   if(!p.dNow) p.dNow= null;
                   if(_this!= p.dNow){ 
                     _this.style.background = blGrey[3];
                   }
                 }
           }(dSong )
           dSong .onmouseout= function(_this){ 
                return function(){
                   if(!p.dNow) p.dNow= null;
                   if(_this != p.dNow){ 
                     _this.style.background = blGrey[5];
                   }
                 }
           }(dSong )
      }
  }
