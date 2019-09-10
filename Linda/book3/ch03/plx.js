// file: blclass.js    by littleflute 
var s = '<a target="_blank" href="https://github.com/littleflute/bat/edit/master/bat/mp4index/plx.js">plx.js_v0.1. 11 * </a> ';
s += ' - <a target="_blank" href="https://littleflute.github.io/bat/bat/mp4index/plx.js">plx.js(online)</a>';
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
function _move_div(oDiv,dx,dy){
			var l = oDiv.style.left;
			l = parseInt(l);
			oDiv.style.left = l + dx + "px";

			var t = oDiv.style.top;
			t = parseInt(t);
			oDiv.style.top = t + dy + "px";
		}
function bl$(id){	return document.getElementById(id); }
var QueryString = function () 
{
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}(); 

var blColor	= ["red","tomato","gold","black","green","blue","lightblue","yellow","brown","pink","gray","white","mediumpurple",
	"cyan"];
var blGrey	= ["Gainsboro","LightGray","Silver","DarkGray",
			   "DimGray","Gray","LightSlateGray","SlateGray","DarkSlateGray","black"];

	var _blMove = function(o,x,y){o.style.left = x;o.style.top = y;};
	function _on_off_div(b,d){if(d.style.display=="block"){d.style.display="none"; b.style.backgroundColor="red"; }else{d.style.display="block"; b.style.backgroundColor="green"; }};
	function _on_off_bd_1(b,d){ 
		if(b.bOnOff){
			b.bOnOff = false;
			b.style.backgroundColor="green"; 
		}
		else{
			b.bOnOff = true;
			b.style.backgroundColor="red"; 
		}
		if(d.style.display=="block"){
			d.style.display="none"; 
		}
		else{
			d.style.display="block";
		}
	}
	function _on_off_bd(b,d){  
		if(b.innerHTML=="+"){
			b.innerHTML = "-";
			b.style.backgroundColor="green"; 
		}
		else{
			b.innerHTML = "+";
			b.style.backgroundColor="red"; 
		}
		if(d.style.display=="block"){
			d.style.display="none"; 
		}
		else{
			d.style.display="block";
		}
	}
	function _getXY(){
			
			var scrlY =document.body.scrollTop;
			var scrlX =document.body.scrollLeft;
			var r = {};
			r.x=event.clientX+scrlX;
			r.y=event.clientY+scrlY; 
			return r;
	}

function blClass ()
{ 
	var _id = "id_div_4_blClass";
    this.v = "xdvc6: 1.0.122";
	function _blhMakeLink(txt,href,style,target){
		var r = "";
		r += "<a href='" + href + "' ";
		r += " style=" + style;
		r += " target=" + target;
		r +=">" + txt; 
		r += "</a>";   
		return r;
	}
	this.blhMakeLink = function (txt,href,style,target) { return _blhMakeLink(txt,href,style,target); } 
    this.blrMax = function (b,d)
    {        
		 d.parentElement.parentElement.style.left = 0+"px";
		 d.parentElement.parentElement.style.top = 0+"px";
		 d.parentElement.parentElement.style.width = "100%";
	}
	this.blrAboutMe= function(b,d){		
		var s = ""; 
		s += _blhMakeLink('blclass.js ','https://littleflute.github.io/vc6/XdHtml/blclass.js','color:skyblue;','_blank');
		s += _blhMakeLink(' blclass.js*','https://github.com/littleflute/vc6/edit/master/XdHtml/blclass.js','color:skyblue;','_blank');
		d.innerHTML = s;
		_on_off_div(b,d);
	}
	this.blhInitUI		= function(divUI){	
		var divMove		= blo0.blMDiv(document.body,_id,"divShowMe_divMove_blClass",550,150,500,200,blColor[8]);
		var dMe			= blo0.blDiv(divMove,divMove.id + "ShowMe","divShowMe",blColor[6]);
		var dUI			= blo0.blDiv(divUI,divUI.id + "_initUI_blClass" + this.v,this.v,"green");
		var b1			= blo0.blBtn(dUI,"blhInitUI_btn1","[blClass]",blColor[8]);
		b1.onclick		= function(this_){	return function(){ 	blo0.blShowObj2Div(dMe,this_);_on_off_div(this,divMove);}}(this);
		
	};
    this.blCreatePage = function (titleTxt,bodyHtml){
		var r = "";
		r	+= "<HTML><HEAD><TITLE>";
		r	+= titleTxt;
		r	+= "</TITLE></HEAD>";
		r	+= "<body>";
		r	+= bodyHtml;
		r	+= "</body></HTML>";

		return r;
	};
    this.blPageCoor = function (element){
  	var c= { X : 0, Y : 0 }; 
 	 while (element){
    		c.X += element.offsetLeft;
    		c.Y += element.offsetTop;
    		element = element.offsetParent;
  	}
 	return c;
    }
    this.blHandle = function (oBoss,id,x,y,w,h,bkClr){
		var x1 = 0;
		var y1 = 0; 
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("div");
            r.id = id;
    	    r.innerHTML = ""; 
            r.style.backgroundColor=bkClr?bkClr:"gold";
			r.style.position = "absolute";
			r.style.left		= x+"px";
			r.style.top			= y+"px";
			r.style.width		= w+"px";
			r.style.height		= h+"px";
			r.style.cursor		= "default";
    	    if(oBoss!=null)oBoss.appendChild(r);
		}	
		var divMoveHandle	= this.blDiv(r,id+"divMoveHandle","",bkClr);
		divMoveHandle.style.cursor		= "move"; 
		
		divMoveHandle.style.width		= "100%"; 
		divMoveHandle.style.height		= "100%"; 
		var dm = r;
		divMoveHandle.onmousedown = function(){
			var c = _getXY(); 
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmousemove = function(){
			var c = _getXY(); 
			if(x1==0 &&y1==0) return false; 
			_move_div(dm,c.x-x1,c.y-y1);
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmouseup = function(){
			var c = _getXY(); 
			x1 = 0;
			y1 = 0; 
		}; 
		divMoveHandle.onmouseout = function(){
			var c = _getXY(); 
			x1 = 0;
			y1 = 0; 
		};  
        return r;
    }
    this.blMDiv = function (oBoss,id,html,x,y,w,h,bkClr){
		var x1 = 0;
		var y1 = 0; 
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("div");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gold";
			r.style.position = "absolute";
			r.style.left		= x+"px";
			r.style.top			= y+"px";
			r.style.width		= w+"px";
			r.style.height		= h+"px";
			r.style.cursor		= "default";
    	    if(oBoss!=null)oBoss.appendChild(r);
		}	
		var divMoveHandle	= this.blDiv(r,id+"divMoveHandle","divMoveHandle","skyblue");r.handle = divMoveHandle;
		divMoveHandle.style.cursor		= "move";
		var main	= this.blDiv(r,id+"main","main","lightblue");r.main = main;
		var dm = r;
		divMoveHandle.onmousedown = function(){
			var c = _getXY();
			main.innerHTML = "down:" + c.x + "," + c.y;
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmousemove = function(){
			var c = _getXY();
			main.innerHTML = "move:" + c.x + "," + c.y; 
			if(x1==0 &&y1==0) return false;
			_move_div(dm,c.x-x1,c.y-y1); 
			if(dm.followDiv){_move_div(dm.followDiv,c.x-x1,c.y-y1);}
			
			x1 = c.x;
			y1 = c.y;
			return false;
		};
		divMoveHandle.onmouseup = function(){
			var c = _getXY();
			main.innerHTML = "up:" + c.x + "," + c.y; 
			x1 = 0;
			y1 = 0; 
		}; 
		divMoveHandle.onmouseout = function(){
			var c = _getXY();
			main.innerHTML = "out:" + c.x + "," + c.y; 
			x1 = 0;
			y1 = 0; 
		};  
        return r;
    }
    _blShowObj2Div_all = function (oBoss,obj,l) //blclassdbg 1039
    {	  
        oBoss.innerHTML = "";
        for(i in obj)
		{
			var bOK = i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="r"; 
			if(!bOK) continue;

			  var b = document.createElement("button");
			  b.id = b.innerHTML = i;
			  var color = "gray";
			  if(1==l) color = "blue";
			  else if( 2==l) color = "pink";
			  else if( 3==l) color = "red";

			  b.style.backgroundColor = color;
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l") b.style.backgroundColor = "yellow";
			  oBoss.appendChild(b);
			  var d = document.createElement("div");
			  if("object" == typeof obj[i])
			  {
					_blShowObj2Div_all(d,obj[i],l+1);
			  }
			  else{
				d.innerHTML = obj[i];
			  }
			  d.style.border = "blue 1px solid";
			  d.style.backgroundColor = "green";
			  d.style.color = "yellow";
			  oBoss.appendChild(d);

			  
			  if(bOK){
				b.style.backgroundColor = "red";
				d.innerHTML = ""; 
				d.id = b.id + "Div";
				b.onclick = function(i_,b_,v_,o_){
					return function(){
						var go = obj[i_];
						if (typeof go == "function") {
			    			go(b_,v_,o_);
						}
					} 
				}(i,b,d,obj);
			  }
		}		 
	}
    this.blShowObj2Div_all = function (oBoss,obj,l) 
    {	 
        _blShowObj2Div_all(oBoss,obj,l);	 
	}
    this.blShowObj2Div = function (oDivBoss,obj)
    {	 
		_blShowObj2Div(oDivBoss,obj);
		 
	}
    _blShowObj2Div = function (oDivBoss,obj)
    {        
        var oBoss = oDivBoss;
        if(!oBoss) {
           oBoss = document.createElement("div");
           oBoss.id = "divBlShowObj";
           oBoss.style.border = "green 1px solid";
           document.body.appendChild(oBoss);
        } 
        if(!oBoss){
            alert("boss error!");return;
        }
        oBoss.innerHTML = "";
        for(i in obj)
		{
			  var b = document.createElement("button");
			  b.id = b.innerHTML = i;
			  b.style.backgroundColor = "gray";
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l") b.style.backgroundColor = "yellow";
			  oBoss.appendChild(b);
			  var d = document.createElement("div");
			  d.innerHTML = obj[i];
			  d.style.border = "blue 1px solid";
			  d.style.backgroundColor = "green";
			  d.style.color = "yellow";
			  oBoss.appendChild(d);

			  if(i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="r"){
				b.style.backgroundColor = "red";
				d.innerHTML = ""; 
				d.id = b.id + "Div";
				b.onclick = function(i_,b_,v_){
					return function(){
						var go = obj[i_];
						if (typeof go == "function") {
			    			go(b_,v_);
						}
					} 
				}(i,b,d);
			  }
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="l"){ 
					b.style.display = "none";	//v1033	 xdvc6
					d.id			= d.html;	 
			  }
			  if(i.charAt(0)=="b"&&i.charAt(1)=="l"&&i.charAt(2)=="h"){ 
					b.style.display = "none";	//v1034	 xdvc6	
					d.style.display = "none";	//v1034	 xdvc6	
			  }
		}
    }    

	this.blAudio = function (oBoss,id,src)					
 	{  								
   		var s = "";							 
	   	s += "<";						 
	   	s += "audio id=";						
   		s += id;							
	   	s += " controls>";								 
	   	s += "<source src='";
		s += src;
		s += "' type='audio/mpeg'>";		 
		s += "Your browser does not supoort hte audio element"				
	   	s += "</audio>";								 
	   	oBoss.innerHTML = s;						 
	 }	

	this.blScript = function (id,src){
    		var r = document.getElementById(id);
    		if(!r){
        		r = document.createElement("script");
        		r.id = id;
    		}
    		r.src = src; 
    		document.body.appendChild(r);
    		return r;
	}

    this.blAjx = function(worker,href)
    {
        var xmlhttp;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
               worker._2do(xmlhttp.responseText);
            }
			else{
              // worker._error("xmlhttp.status:" + xmlhttp.status);
			}
        }
        xmlhttp.open("GET",href,true);
        xmlhttp.send();
    }

    this.blDiv = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("div");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gray";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }
    this.blTextarea = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("Textarea");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gray";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }

    this.blBtn = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("button");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"green";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }
    this.blLink = function (oBoss,id,html,href,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("a");
    	    var t = document.createTextNode(html);
    	    r.setAttribute("href", href);
            r.id = id; 
    	    r.style.backgroundColor = bkClr?bkClr:"blue";
        }
        r.innerHTML = html + " "; 
        oBoss.appendChild(r);
        return r;
    }

    this.blMakeDivMovable = function (elmnt) {
      	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	var idHeader = document.getElementById(elmnt.id + "Header");
      	if (idHeader) {
        	/* if present, the header is where you move the DIV from:*/
        	idHeader.onmousedown = dragMouseDown;
      	} else {
        	/* otherwise, move the DIV from anywhere inside the DIV:*/
        	elmnt.onmousedown = dragMouseDown;
      	}

      	function dragMouseDown(e) {
        	e = e || window.event;
        	// get the mouse cursor position at startup:
        	pos3 = e.clientX;
        	pos4 = e.clientY;
        	document.onmouseup = closeDragElement;
        	// call a function whenever the cursor moves:
        	document.onmousemove = elementDrag;
		if (idHeader) {
        		idHeader.innerHTML = pos3 + "," + pos4;
      		}	
      	}

      function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
	
}//END: function blClass ()
function _addBtn(d, t, s){
	if(!d.n){d.n = 0;}
	d.n++;
	var b = blo0.blBtn(d, d.id + d.n, s,blGrey[5]);
	b.onclick = function(_t){
		return function(){
			moveMS(_t);
		}
	}(t);
} 
var blo0 = new blClass;

var d = blo0.blMDiv(document.body,"id_mdiv_plx", s, 550,50,400,300,blGrey[1]);
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
	_v.innerHTML = _t + " : " + dt1 ;
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



