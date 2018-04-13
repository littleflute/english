
var s = '<div class="XDheader"><div class="XDheader-right" id="XDid_div_title">';
 s += '<a href= "https://github.com/littleflute/english/issues/62" target="_blank">#62_v0.0. 144</a> ';
s += "<a class='xd' target='_blank' href='https://github.com/littleflute/english/edit/master/Issues/62/i.js'"
s +=">";		s += " i62.js*  ";		s += "</a> "; 
		s += "  <a class='xd'    target='_blank'  href='https://littleflute.github.io/english/Issues/62/i.js'";
 
		s +=">";
		s += " i62.js ";
		s += "</a>"; 
 s += '</div></div>';
bl$("id_div_v3").innerHTML = s;

 function _comments(o) {	
	 for(i in o){
                    var d = blo0.blDiv(bl$("id_div_v3"),"id_div_v3_v_" + i, o[i].body, blGrey[0]); 
        }
}
w3.getHttpObject("https://api.github.com/repos/littleflute/english/issues/62/comments", _comments);	
