//alert("i");
var v = bl$("id_div_" + "plxName-i.js"); 
v.innerHTML = "i.js test v0.0. 41 ";
var b1	=  blo0.blBtn( v , v.id + "b1" , "b1", "gold" );
 
b1.n = 0;
b1.v1 = blo0.blDiv(v, v.id + "v1" , "v1", "lightgreen");
b1. onclick = function(){
	b1.n++;
	b1.v1.innerHTML = b1.n;	
}

var btnTitle	=  blo0.blBtn( v , v.id + "btnTitle	" , "title", "brown" );
btnTitle. onclick  = function(){
	this.v= blo0.blDiv(v, this.id + "v" , "v", "lightblue");
	this.v.innerHTML = ftnI;
	var a = this.v.innerHTML;
	var b = a.split("/*");
	var c = b[1].split(";;");
	this.v.innerHTML = c[0];	
	this.v.onclick = function(){		b1.v1.innerHTML = btnTitle.v.id;		}
}

var btnBody	=  blo0.blBtn( v , v.id + " btnBody	" , " Body	", "lightRed" );
btnBody	. onclick  = function(){
	this.v= blo0.blDiv(v, this.id + "v" , "v", "lightYellow");
	this.v.innerHTML = ftnI;
	var a = this.v.innerHTML;
	var b = a.split("/*");
	var c = b[1].split(";;");
	this.v.innerHTML = c[1];	

	this.v.onclick = function(){		b1.v1.innerHTML = btnBody.v.id;		}
}


var btnParseBody	=  blo0.blBtn( v , v.id + " btnParseBody	" , " ParseBody	", "purple" );
btnParseBody	. onclick  = function(){
	b1.v1.innerHTML = btnBody	.v.innerHTML;
	var m = document.getElementsByTagName("textarea"); var p = m[0]; p.value = this.id;
}

//=======================================================================================================
var ftnI = function(){//ftnI;
/*

Cole Porter, 1891-1964: He Wrote Songs for Broadway Musicals and Movies That Are Still Popular Today;;

By Shelley Gollust
2008-2-16
VOICE ONE:

This is Faith Lapidus.

VOICE TWO:

*/
}