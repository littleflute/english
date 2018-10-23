var v = bl$("id_mdiv_by_60c5");
var d1 = blo0.blDiv(v, v.id + "_d1",  "d1", blGrey[0]); 
var s = '<div class="XDheader"><div class="XDheader-right" id="XDid_div_title">';
 s += '<a href= "https://github.com/littleflute/english/issues/126" target="_blank">#126_v0.0. 145</a> ';
s += "<a class='xd' target='_blank' href='https://github.com/littleflute/english/edit/master/Issues/126/i.js'"
s +=">";		s += " i62.js*  ";		s += "</a> "; 
		s += "  <a class='xd'    target='_blank'  href='https://littleflute.github.io/english/Issues/126/i.js'";
 
		s +=">";
		s += " i126.js ";
		s += "</a>"; 
 s += '</div></div>';
d1.innerHTML = s;

 function _comments(o) {	
	 for(i in o){
                    var d = blo0.blDiv( d1, d1.id + i, o[i].body, blGrey[0]); 
        }
}
w3.getHttpObject("https://api.github.com/repos/littleflute/english/issues/126/comments", _comments);	
