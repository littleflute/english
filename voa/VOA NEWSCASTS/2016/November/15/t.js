var v1 = bl$("id1234v1");
v1.tb = blo0.blDiv(v1, v1.id + "tb", "tb",blColor[5]);
v1.tb.b1 = blo0.blBtn(v1.tb, v1.tb.id + "b1","b1",blColor[0]);
v1.tb.b2 = blo0.blBtn(v1.tb, v1.tb.id + "b2","b2",blColor[2]);

function _add_time_Btn(d, t, s){
	if(!d.n){d.n = 0;}
	d.n++;
	var b = blo0.blBtn(d, d.id + d.n, s,blGrey[5]);
	b.onclick = function(_t){
		return function(){
			setCurTime(_t);
		}
	}(t);
} 

v1.tb.b1.onclick = function(){ 
	
	_add_time_Btn(v1,0.05,"50ms"); 
	_add_time_Btn(v1,0.1,"100ms");
	_add_time_Btn(v1,1,"1000ms");
	_add_time_Btn(v1,2,"2000ms");
	_add_time_Btn(v1,5,"5000ms");
	_add_time_Btn(v1,10,"10000ms");
}

v1.dScript= blo0.blDiv(v1, v1.id + "dScript", "dScript", blColor[5]);
v1._2do = function(txt){
	alert(txt);
}
v1.tb.b2.onclick  = function(){ 
	//alert(v1._2do);
	blo0.blAjx (v1,"http://www.beautifullover.org/readme.txt");	
}
