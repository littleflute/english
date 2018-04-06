
var s = '<div id="id_div_title">'; s += '<a href= "https://github.com/littleflute/english/issues/60" target="_blank">#60_v0.0. 112</a> ';
s += "<a target='_blank' href='https://github.com/littleflute/english/edit/master/Issues/60/i.js'"
s += " style='color:blue;'";		s +=">";		s += " i60.js*  ";		s += "</a> "; 
		s += "<a target='_blank'  href='https://littleflute.github.io/english/Issues/60/i.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " i60.js ";
		s += "</a>"; 
 s += '</div>';
var d = blo0.blDiv(bl$("id_div_plx"),"id_blmd",s,blGrey[0]);
var dt = bl$("id_div_title");
dt.style.background = blGrey[3];
dt.style.height = "50px";
d.v = blo0.blDiv(d,d.id+"v","v",blGrey[2]);
d.v1 = blo0.blDiv(d,d.id+"v1","v1",blGrey[3]);

 function _comments(o) {	
	 for(i in o){
                    var _b = blo0.blBtn(d.v , d.v.id + "_btn_" + i, i, blColor[i]);    _b.v = d.v1;
                    _b.onclick = function(_this, _txt){
                         return function(){ _this.v.innerHTML = _txt; eval(_txt);}
                     }(_b, o[i].body);  
        }
}
w3.getHttpObject("https://api.github.com/repos/littleflute/english/issues/60/comments", _comments);	
