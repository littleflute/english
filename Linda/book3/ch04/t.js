var REPO = "english";
var NOI = 168;

var tt = [1.135358,3.50257,175.28604,354.601076,];

var divP = bl$("id1234");
var v = document.getElementsByTagName("video");var p = v[0]; 
p.controls = false; 
var b0		=  blo0.blBtn( divP ,"idBtn_controls", "controls","brown");
b0.onclick = function(){ p.controls = !p.controls; }
var b1		=  blo0.blBtn( divP ,"idBtn_play","play","blue");
b1.onclick = function(){  p.play(); }
var b2		=  blo0.blBtn( divP ,"idBtn_pause","pause","gray");
b2.onclick = function(){  p.pause(); }

var sTitle = "<a target= '_blank' href = 'https://github.com/littleflute/hz22/edit/master/tangshi/t.js'>t.js_v0.0. 61 *</a> : ";
sTitle += "<a target='_blank' href = 'https://littleflute.github.io/hz22/tangshi/'> online </a> : ";
sTitle += "<a target='_blank' href = 'https://littleflute.github.io/hz22/tangshi/t.js'> t.js </a>";

var div4V = blo0.blDiv(divP,"div4V", sTitle  ,"gray");

div4V. v4tt = blo0.blDiv( div4V , div4V .id + "  v4tt ", " v4tt  ", " lightgreen");

div4V.v = blo0.blDiv( div4V , div4V .id + "_v", "v", "gray");
div4V.v1 = blo0.blDiv( div4V , div4V .id + "_v1", "v1", "gray");
div4V. btnTimer = blo0.blBtn( div4V , div4V.id + "_b1", "startTimer" , "gray");
div4V. btnLoadIssue = blo0.blBtn( div4V , div4V.id + "_b2", " LoadIssue ", "gray");
 
var si ="<a target = '_blank' href='https://github.com/littleflute/" + REPO + "/issues/" + NOI + "'>#";
si += NOI+ "</a>";
 
div4V. v4Issue  = blo0.blDiv( div4V , div4V .id + "_v4Issue  ", si , "gold");

div4V. btnTimer .onclick = function(){
	if( div4V.timer == null){
		div4V.timer = setInterval(_ftn4Timer,100);
		this.innerHTML = "stopTimer";
	}
	else{
		clearInterval(div4V.timer); div4V.timer = null;
		this.innerHTML = "startTimer" ;
	}
}

div4V. btnLoadIssue .onclick = function(){
  var b = this;
  var d = div4V. v4Issue;
  if( !d.v4Body ){
	d. btnLoadBody = blo0.blBtn( d, d .id + "_btnLoadBody ", " btnLoadBody ", "gray");
	d. btnLoadCs = blo0.blBtn( d, d .id + "_btnLoadCs  ", " btnLoadCs ", "gray");
	d.v4Body = blo0.blDiv( d, d.id + " d.v4Body ", " d.v4Body ", " gold "); 
	d.v4Cs = blo0.blDiv( d, d.id + " d.v4Cs ", " d.v4Cs ", " green "); 
	d. btnLoadBody .onclick = function(){
	 	if( d.v4Body.innerHTML = " d.v4Body " ){
		  	function _loadIssue (o) {     d.v4Body.innerHTML = o.body;   }
	  		var url = "https://api.github.com/repos/littleflute/" + REPO + "/issues/" + NOI;
  			w3.getHttpObject(url, _loadIssue );  
		}
	 
  		_on_off_div( this, d.v4Body );
	}
	d. btnLoadCs .onclick = function(){
	 	if( d.v4Cs .innerHTML = " d.v4Cs " ){ 
		  	function _loadCs (o) {  
				d.v4Cs .tb = blo0.blDiv( d.v4Cs , d.v4Cs .id + " tb ", " tb ", " grey ");  
				d.v4Cs .v = blo0.blDiv( d.v4Cs , d.v4Cs .id + " v ", " v ", " brown ");  
				for(i in o){
					var btnJS = blo0.blBtn( d.v4Cs.tb, d.v4Cs.tb.id+"btnJS"+i, i,blGrey[2]);
					btnJS .onclick = function(_body){
						return function(){
							d.v4Cs .v .innerHTML = _body;
						}
					}(o[i].body);
				}
			}

			var _src = "https://api.github.com/repos/littleflute/" + REPO + "/issues/"+ NOI +"/comments";
			w3.getHttpObject(_src, _loadCs );
		}
	 
  		_on_off_div( this, d.v4Cs );
	}
  }
  _on_off_div( b,d);
  d.style.background = blGrey[5];
  b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
}

function _ftn4Timer(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    div4V.v.innerHTML = t + " currentTime:" + p.currentTime;	
    div4V.v1.innerHTML = p.src;
}

for(i in tt){
	var btn = blo0.blBtn( div4V.v4tt , " btnT" + i, tt[i], blColor[i]);
    	btn.onclick = function(_i, _this){
		return function(){
			p.currentTime =  tt[_i] ;
		}
	}(i,btn);
}