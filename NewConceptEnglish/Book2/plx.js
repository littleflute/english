// file: blclass.js    by littleflute 
var s = '<a target="_blank" href="https://github.com/littleflute/ted1/edit/master/docs/61/plx.js">plx.js_v0.1. 25 * </a> ';
s += ' - <a target="_blank" href="https://littleflute.github.io/ted1/docs/61/plx.js">plx.js(online)</a>';
s += ' - <a target="_blank" href="plx.js">plx.js</a>';

var _load_plx_btn = function(blo,oBoss,plxName,src, color ){
			var idBtn	= oBoss.id + plxName + "btn";
			var b		=  blo.blBtn(oBoss,idBtn,plxName,color);
			b.onclick = function(btn_){
				var v = null;
				var n = 0; 
				return function(){
					n++; 
					var idWrap	= oBoss.id + plxName + "wrap";
					v = blo.blDiv(oBoss,idWrap,"","green");  
					var srcHTML = "<a target='_blank' href=" + src + " style='color:white;'>" + plxName + "-source</a>";
					var ds	= blo.blDiv(v,oBoss.id + plxName + "src",srcHTML,"gray");

					var id		= "id_div_" + plxName;
					var dPlx = blo.blDiv(v,id,plxName + ":" + n,"gray"); 
					blo0.blScript("id_script_" + plxName,src);
					_on_off_div(btn_,v);
				}
			}(b);
		}; 
 

var d = blo0.blMDiv(md4v,"id_mdiv_plx", s, 720,50,400,300,blGrey[1]);
d.v0 = blo0.blDiv(d,d.id + "v0", "v0",blColor[0]); 
d.v1 = blo0.blDiv(d,d.id + "v1", "v1",blColor[1]); 
d.v2 = blo0.blDiv(d,d.id + "v2", "v2",blColor[2]); 
d.v3 = blo0.blDiv(d,d.id + "v3", "v3",blColor[3]); 
d.v4 = blo0.blDiv(d,d.id + "v4", "v4",blColor[4]); 
d.v5 = blo0.blDiv(d,d.id + "v5", "v5",blColor[5]); 
d.v3.b0 = blo0.blBtn(d.v3,d.v3.id + "b0", "b0",blGrey[0]); 
d.v3.b1 = blo0.blBtn(d.v3,d.v3.id + "b1", "set",blGrey[0]); 
d.v3. btnATs = blo0.blBtn(d.v3,d.v3.id + "btnATs", "ATs",blGrey[0]); 
d.v3.now = null;
d.v3. btnATs .onclick = function(){
	var s = "var tt = [";
	var bs = d.v3.bs;
	for(i in bs){
		s += bs[i].t + ",";
	}
	s += "];";
	var ta = bl$("blrRunJSDivvta"); ta.value = s;
}
d.v3. selBtn = function(_btn){
	var bs = d.v3.bs;
	for(i in bs){
		var ii = bs[i]; ii. style. backgroundColor = blGrey[0];
		if(_btn == ii) {
			ii. style. backgroundColor = blColor[7];
			d.v3.now = _btn;
		}
	}	
}
d.v3. go2t = function( _v, _t ){ 
	var bs = d.v3.bs;
	for(i in bs){
		var ii = bs[i];
		var dt = _t - ii.t;
		if( dt < 0.5 && dt > -0.5  ) {
			ii.click();			
		}
	}	  
	_v.innerHTML = _t + " : ";
}
d.v3. b1.onclick = function(){
	d.v3.now.t = vid.currentTime;
}
d.v3.b0.onclick = function(){
	if(!d.v3.bs){d.v3.bs = [];}
	var t = vid. currentTime;
	var n = d.v3.bs.length + 1;
	var b = blo0.blBtn(d.v3, d.v3.id + n, n,blGrey[5]);
	d.v3.bs.push(b);	
	b.onclick = function(_v,_t){
		b.t = _t;
		return function(){
			_v. selBtn (this);
			setCurTime(this.t);
		}
	}(d.v3,t);
}
d.v4.btnBlApp = blo0.blBtn(d.v4, "id_btn_4_blApp", "+blApp", blGrey[0]);

d.v4.btnClearV5 = blo0.blBtn(d.v4,d.v4.id + "btnClearV5", "ClearV5",blGrey[1]); 
d.v4. btnClearV5 .onclick = function(){
	d.v5.innerHTML = "";
}

d.v4. btnLRCs = blo0.blBtn(d.v4,d.v4.id + " btnLRCs ", " btnLRCs " ,blGrey[0]); 
d.v4. btnLRCs . onclick = function(){
	var d = bl$( "id_div_4_lrcJS" );
	if(!d.v){
		d.v = blo0.blMDiv(d, d.id + " v ", "LRCs" , 50, 50, 222, 100, blGrey [1] );		 
		var tb  = blo0.blDiv(d.v, d.v.id + "_tb_" , 'tb' , blGrey [1]);		 
  		var a = d.innerHTML.split(",");
		for(var i=0; i< a.length - 1 ; i++){
			var btnV = blo0.blDiv(tb, "id_div_4_lrc" + (i+1) , a[i], blColor[i]); 
			var btn = blo0.blBtn( btnV , btnV . id + " -btn " , a[i], blGrey [i]);
			btn .onclick = function ( _this , _txt ){
				return function(){ 
					 blo0.blScript('id_script_' + _txt , _txt );
				}
			}(btn,a[i]);
		} 

	}
	var b = this;_on_off_div(b,d); b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	 
}


d.v4. btnGIFs = blo0.blBtn(d.v4,d.v4.id + "btnGIFs", "GIFs",blGrey[0]); 
d.v4. btnGIFs .onclick = function(){	 
	if(!this.v){
		this.v = blo0.blMDiv(this.parentElement, this.id + "v", "v4GIFs", 210,50,500,100, blGrey[0]);
		this.v. tbDiv = blo0.blDiv(this.v, this.v.id + "_tbDiv_" ,  "tb:", blGrey[0]);
		this.v. ViewDiv = blo0.blDiv(this.v, this.v.id + " ViewDiv " ,  "view:", blGrey[2]);
		var tb = this.v. tbDiv;

		var s = bl$("id_div_4_gif").innerHTML;
		var a = s.split(",");
		for(i in a){ 
			var btn = blo0.blBtn(tb, tb.id + "showBtn" +i, "no." + i, blGrey[0]);
			btn.onclick = function(_i, _src, _btn ){
				return function(){
					if(!this.v){
						this.v = blo0.blMDiv(this.parentElement, "id_div_4_" + _i, _i, 0, 1,500,100,blGrey[1]);
						this.v.btn1 = blo0.blBtn( this.v , this.v.id + "btn1", "no." + _i, blGrey[0]);
						this.v.btn2 = blo0.blBtn( this.v , this.v.id + "btn2", "500px" , blGrey[0]);
						this.v.btn3 = blo0.blBtn( this.v , this.v.id + "btn3", "800px" , blGrey[0]);
						this.v.btn4 = blo0.blBtn( this.v , this.v.id + "btn4", "1200px" , blGrey[0]);
						this.v.btnX = blo0.blBtn( this.v , this.v.id + "btnX", "X=" , blGrey[0]);
						this.v.v1 = blo0.blDiv(this.v,  this.v.id + "v1", _i , blGrey[1]);
						this.v.v1.innerHTML =   "<img id = 'jpg" + _i + "' src='" +_src  + "'></img>";
						this.v.btn1.onclick = function(){ _btn.click();}
						this.v.btn2.onclick = function(){ var jpg = bl$('jpg' + _i); 	jpg.style.width = "500px";
						}
						this.v.btn3.onclick = function(){ var jpg = bl$('jpg' + _i); 	jpg.style.width = "800px";
						}
						this.v.btn4.onclick = function(){ var jpg = bl$('jpg' + _i); 	jpg.style.width = "1200px";
						}
						this.v.btnX.onclick = function(){ var jpg = bl$('jpg' + _i); 	alert(jpg.style.width) ;
						}
					}
					var d = this.v;
					var b = this;_on_off_div(b,d); b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	
				}
			}(i,a[i],btn)  		
		}
	}
	var d = this.v;
	var b = this;_on_off_div(b,d); b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	
}
d.v4.btnJPGs = blo0.blBtn(d.v4,d.v4.id + "btnJPGs", "JPGs",blGrey[0]); 
d.v4.btnJPGs.onclick = function(){	 
	if(!this.v){
		this.v = blo0.blMDiv(this.parentElement, this.id + "v", "v4JPGs", 210,50,500,100, blGrey[0]);
		this.v. tbDiv = blo0.blDiv(this.v, this.v.id + "_tbDiv_" ,  "tb:", blGrey[0]);
		this.v. ViewDiv = blo0.blDiv(this.v, this.v.id + " ViewDiv " ,  "view:", blGrey[2]);
		var tb = this.v. tbDiv;
		 
		var s = bl$("id_div_4_jpg").innerHTML;
		var a = s.split(",");
		for(i in a){ 
			var btn = blo0.blBtn(tb, tb.id + "showBtn" +i, "no." + i, blGrey[0]);
			btn.onclick = function(_i, _src, _btn ){
				return function(){
					if(!this.v){
						this.v = blo0.blMDiv(this.parentElement, "id_div_4_" + _i, _i, 0, 1,500,100,blGrey[1]);
						this.v.btn1 = blo0.blBtn( this.v , this.v.id + "btn1", "no." + _i, blGrey[0]);
						this.v.btn2 = blo0.blBtn( this.v , this.v.id + "btn2", "500px" , blGrey[0]);
						this.v.btn3 = blo0.blBtn( this.v , this.v.id + "btn3", "800px" , blGrey[0]);
						this.v.btn4 = blo0.blBtn( this.v , this.v.id + "btn4", "1200px" , blGrey[0]);
						this.v.btnX = blo0.blBtn( this.v , this.v.id + "btnX", "X=" , blGrey[0]);
						this.v.v1 = blo0.blDiv(this.v,  this.v.id + "v1", _i , blGrey[1]);
						this.v.v1.innerHTML =   "<img id = 'jpg" + _i + "' src='" +_src  + "'></img>";
						this.v.btn1.onclick = function(){ _btn.click();}
						this.v.btn2.onclick = function(){ var jpg = bl$('jpg' + _i); 	jpg.style.width = "500px";
						}
						this.v.btn3.onclick = function(){ var jpg = bl$('jpg' + _i); 	jpg.style.width = "800px";
						}
						this.v.btn4.onclick = function(){ var jpg = bl$('jpg' + _i); 	jpg.style.width = "1200px";
						}
						this.v.btnX.onclick = function(){ var jpg = bl$('jpg' + _i); 	alert(jpg.style.width) ;
						}
					}
					var d = this.v;
					var b = this;_on_off_div(b,d); b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	
				}
			}(i,a[i],btn)  		
		}
	}

	var d = this.v;
	var b = this;_on_off_div(b,d); b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	
}

d.v4.b01 = blo0.blBtn(d.v4,d.v4.id + "b01", "PNGs",blGrey[0]); 
d.v4.b01.onclick = function(){ 
	if(!this.v){
		this.v = blo0.blMDiv(this.parentElement, this.id + "v", "v4PNGs", 250,50,500,100,blGrey[0]);
		var s = bl$("id_div_4_png").innerHTML;
		var a = s.split(",");
		for(i in a){
			var v = blo0.blDiv(this.v, this.v.id + "_png_"+ i, i + ":" + a[i], blColor[i]);
			v.btn1 = blo0.blBtn(v, v.id + "showBtn" +i, "show",blGrey[0]); 
			v.btn1. v = blo0.blDiv(v, v.id + " div " , "v:", blColor[i]);
			v.btn1. v .innerHTML = a[i] + "<img src='" + a[i] + "'></img>";

			v.btn1 .onclick = function( _this ){ 
				return function(){  
					var d = _this ; var d = d.v;
					var b = this;_on_off_div(b,d); b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];						 
				};
			}( v.btn1);
			v.btn1.click();
		}
	}

	var d = this.v;
	var b = this;_on_off_div(b,d); b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];	

	 
}
d.v4.b1 = blo0.blBtn(d.v4, "id_btn_LoadIssue", "LoadIssue",blGrey[0]); 
d.v4.b1.onclick = function(){
	//alert(window.location.href);
         var _f = function (o){
		eval(o.body);
         }
	w3.getHttpObject("https://api.github.com/repos/littleflute/bluespiano/issues/1", _f);	
}
d.v4.b2 = blo0.blBtn(d.v4, "id_btn_Load_i_js" , "Load_i.js",blGrey[1]); 
d.v4.b2.onclick = function(){	 
	if(!this.vLoad_i_js) {this.vLoad_i_js = blo0.blMDiv(document.body, "id_div_4_i.js" , "load_i.js" ,150,50,400,300,blGrey[1]); }
	_on_off_div(this,this.vLoad_i_js);
}
_load_plx_btn (blo0, d.v4, "plxName-i.js", "i.js", "brown");

var _f = "a.mp3";
blo0.blAudio (d.v0, "id_mp3Player" , _f);
d.v0.d1 = blo0.blDiv(d.v0,d.v0.id + "d1", "d1",blColor[4]); 
function _TimeFun(){
	getCurTime();
	var au = bl$("id_mp3Player");
	var t = au. currentTime;
	var dt = d.v3. go2t (d.v0.d1, t );
}
setInterval(_TimeFun , 100);      


_addBtn(d.v1,0.05,"+50ms");
_addBtn(d.v1,0.1,"+100ms");
_addBtn(d.v1,0.2,"+200ms");
_addBtn(d.v1,1.0,"+1000ms");
_addBtn(d.v1,2.0,"+2000ms");
_addBtn(d.v2,-0.05,"-50ms");
_addBtn(d.v2,-0.1,"-100ms");
_addBtn(d.v2,-0.2,"-200ms");
_addBtn(d.v2,-1.0,"-1000ms");
_addBtn(d.v2,-2.0,"-2000ms");



