//http://www.51voa.com/VOA_Special_English/This_is_America_21820.html
var _parseFun = function (d,txt){       
     var _p = bl$("id_mp3Player");
     d.innerHTML = "";
     var s = "<a href='https://github.com/littleflute/english/issues/26' target='_blank'>#26V0.0. 144<a/> - "; 
    s += "<a href='https://github.com/littleflute/english/edit/master/Issues/26/i.js' target='_blank'>i.js* <a/> - ";
    s += "<a href='https://littleflute.github.io/english/Issues/26/i.js' target='_blank'>i.js<a/>";
     blo0.blDiv(d,d.id+"_#26_", s,blColor[4]);

     var l = txt.split("bllist:");
    var l0= blo0.blTextarea (d, "id_ta_4_i26", l[0],blGrey[0]);

     var str = "var a = " + l[1];

     eval(str);
     var t = blo0.blDiv(d,d.id+"_title_", a.title,blColor[4]);
     t.v = blo0.blDiv(t,t.id+"v", "v",blColor[5]);
     t.v.currentTimeFun = function(){
          t.v.d1 = blo0.blDiv(t.v,t.v.id+"d1", "d1",blColor[1]);
          t.v.d1.innerHTML = p.currentTime;
     }
     _p.users.push(t.v);
 
     for(i in a.songs){
           var p = _p;
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
                     t.v.innerHTML = "id=" + t.v.id + ":" + _s.lrc; //#blrMp3ListDivv4List _title_v
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
