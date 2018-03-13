
 var d = bl$("blrIssue17Div");
d.mv = blo0.blMDiv(d,d.id+"mv","issue17",300,100,500,400,blGrey[0]);
d.mv.v1 = blo0.blDiv(d.mv,d.mv.id + "v1","v1",blGrey[1]);
function _jobClass(){
  this.v = "v0.0. 11";
  this.blrAboutPlx= function(b,d){		
		var s = "blrAboutPlx<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/english/edit/master/Issues/17/i.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " i17*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/english/Issues/17/i.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " i17 ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
}
blo0.blShowObj2Div(d.mv.v1, new _jobClass);
