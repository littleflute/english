 var d = bl$("blrIssue17Div");
d.mv = blo0.blMDiv(d,d.id+"mv","issue17",300,100,500,400,blGrey[0]);
d.mv.v1 = blo0.blDiv(d.mv,d.mv.id + "v1","v1",blGrey[1]);
function _jobClass(){
  this.v = "v0.0. 44";
  this.blrIssue17C1= function(b,d){	
      if(!d.v){ 
         d.v =blo0.blDiv(d,d.id + "v","17C1",blGrey[1]);
         var _f = function (o){
            eval(o[0].body);     
         }
         w3.getHttpObject("https://api.github.com/repos/littleflute/english/issues/17/comments", _f);	
      }
      _on_off_div(b,d);
  }
  this.blrIssue19= function(b,d){	
      if(!d.v){ 
         d.v =blo0.blDiv(d,d.id + "v","#19",blGrey[1]);
         var _f = function (o){
            eval(o[3].body);     
            _blVPlayer(); 
         }
         w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/7/comments", _f);	
      }
      _on_off_div(b,d);
  }
  this.blrIssue18= function(b,d){	
      if(!d.v){ 
         d.v =blo0.blDiv(d,d.id + "v","#18",blGrey[1]);
         var _f = function (o){
            eval(o[2].body);     
            api3("https://api.github.com/repos/littleflute/english/issues/18"); 
         }
         w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/7/comments", _f);	
      }
      _on_off_div(b,d);
  }
  this.blrIssue14= function(b,d){	
      if(!d.v){ 
         d.v =blo0.blDiv(d,d.id + "v","#14",blGrey[1]);
         var _f = function (o){
            eval(o[2].body);     
            api3("https://api.github.com/repos/littleflute/english/issues/14"); 
         }
         w3.getHttpObject("https://api.github.com/repos/littleflute/JavaScript/issues/7/comments", _f);	
      }
      _on_off_div(b,d);
  }
  this.blrAboutPlx= function(b,d){		
		var s = "blrAboutPlx<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/english/edit/master/Issues/17/i.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " i17.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/english/Issues/17/i.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " i17.js ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://github.com/littleflute/english/issues/17'";
		s += " style='color:yellow;'";
		s +=">";
		s += " #17 ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
}
blo0.blShowObj2Div(d.mv.v1, new _jobClass);
