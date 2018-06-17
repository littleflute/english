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

	var t1 = bl$("id1234v1t1"); t1.value = _txt;
	blo0.blAjx (v1,"http://www.beautifullover.org/readme.txt");	
}

var _txt = function(){
/*

From Washington, this is VOA News. I’m Frances Alonzo reporting.

President Barack Obama is in Athens Tuesday. It’s a start of his final foreign trip as U.S. leader. He said that he would press upon European allies that his view that austerity alone "cannot deliver prosperity."

Speaking with the Greek Prime Minister, Alexis Tsipras, at the start of his final trip, he said:

"In my message to the rest of Europe I will continue to emphasize our view that austerity alone cannot deliver prosperity."

Meanwhile, before leaving Washington Monday, Mr. Obama discussed his trip.

Aside from Greece, he will meet European leaders in Germany and take part in a two-day Asia-Pacific Economic Cooperation summit in Peru:

"I'll meet with the leaders of countries that have been the focus of our foreign policy through our re-balance in the Asia-Pacific. This is a time of great change in the world, but America's always been a pillar of strength and a beacon of hope to peoples around the globe, and that's what it must continue to be..."

You can read more details on the president’s trip at VOANews.com.

An Egyptian appeals court has overturned a death sentence handed down against ousted Islamist President Mohamed Morsi in one of four trials since his 2013 overthrow, according to a judicial official.

The Court of Cassation ordered that Morsi be retried on charges of taking part in prison breaks and violence against policemen during a 2011 uprising.

Russia's Investigative Committee said Tuesday that it had charged the country’s Economy Minister with bribe-taking. He was detained on suspicion of taking a two-million-dollar bribe over a deal involving state oil giant Rosneft.

The committee, in a statement, charged the minister with "receiving bribes."

This is VOA News.

We want to hear from you. Write to us in the Comments Section.
*/
}
