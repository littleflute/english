function loadJs(url, callback){
	var script = document.createElement("script");
	script.type = "text/javascript";
	if(script.readyState){
		//针对ie的预加载方案
		script.onreadystatechange = function(){
			//alert('ifready');
			if(script.readyState == "loaded" || 
				script.readyState == "complete"){
					script.onreadystatechange = null;
					script.parentNode.removeChild(script);
					typeof callback == 'function' ? callback() : function(){};
				}
		};
	}else{

		//other browser
		script.onload = function(){
			typeof callback == 'function' ? callback() : function(){};
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

//--------------------------------------------------------------------------------------------
//常用function start

function date(format,timestamp){var that=this,jsdate,f,formatChr=/\\?([a-z])/gi,formatChrCb,_pad=function(n,c){if((n=n+'').length<c){return new Array((++c)-n.length).join('0')+n;}
return n;},txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];formatChrCb=function(t,s){return f[t]?f[t]():s;};f={d:function(){return _pad(f.j(),2);},D:function(){return f.l().slice(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_words[f.w()]+'day';},N:function(){return f.w()||7;},S:function(){var j=f.j();return j>4&&j<21?'th':{1:'st',2:'nd',3:'rd'}[j%10]||'th';},w:function(){return jsdate.getDay();},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5)+1;},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2);},F:function(){return txt_words[6+f.n()];},m:function(){return _pad(f.n(),2);},M:function(){return f.F().slice(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){return(new Date(f.Y(),f.n(),0)).getDate();},L:function(){return new Date(f.Y(),1,29).getMonth()===1|0;},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?-1:n===1&&W>9);},Y:function(){return jsdate.getFullYear();},y:function(){return(f.Y()+"").slice(-2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);},g:function(){return f.G()%12||12;},G:function(){return jsdate.getHours();},h:function(){return _pad(f.g(),2);},H:function(){return _pad(f.G(),2);},i:function(){return _pad(jsdate.getMinutes(),2);},s:function(){return _pad(jsdate.getSeconds(),2);},u:function(){return _pad(jsdate.getMilliseconds()*1000,6);},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return 0+((a-c)!==(b-d));},O:function(){var tzo=jsdate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4);},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return'Y-m-d\\Th:i:sP'.replace(formatChr,formatChrCb);},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);},U:function(){return jsdate.getTime()/1000|0;}};this.date=function(format,timestamp){that=this;jsdate=((typeof timestamp==='undefined')?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb);};return this.date(format,timestamp);}


function strtotime(str,now){var i,match,s,strTmp='',parse='';strTmp=str;strTmp=strTmp.replace(/\s{2,}|^\s|\s$/g,' ');strTmp=strTmp.replace(/[\t\r\n]/g,'');if(strTmp=='now'){return(new Date()).getTime()/1000;}else if(!isNaN(parse=Date.parse(strTmp))){return(parse/1000);}else if(now){now=new Date(now*1000);}else{now=new Date();}
strTmp=strTmp.toLowerCase();var __is={day:{'sun':0,'mon':1,'tue':2,'wed':3,'thu':4,'fri':5,'sat':6},mon:{'jan':0,'feb':1,'mar':2,'apr':3,'may':4,'jun':5,'jul':6,'aug':7,'sep':8,'oct':9,'nov':10,'dec':11}};var process=function(m){var ago=(m[2]&&m[2]=='ago');var num=(num=m[0]=='last'?-1:1)*(ago?-1:1);switch(m[0]){case'last':case'next':switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;default:var day;if(typeof(day=__is.day[m[1].substring(0,3)])!='undefined'){var diff=day-now.getDay();if(diff==0){diff=7*num;}else if(diff>0){if(m[0]=='last'){diff-=7;}}else{if(m[0]=='next'){diff+=7;}}
now.setDate(now.getDate()+diff);}}
break;default:if(/\d+/.test(m[0])){num*=parseInt(m[0],10);switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;}}else{return false;}
break;}
return true;};match=strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);if(match!=null){if(!match[2]){match[2]='00:00:00';}else if(!match[3]){match[2]+=':00';}
s=match[1].split(/-/g);for(i in __is.mon){if(__is.mon[i]==s[1]-1){s[1]=i;}}
s[0]=parseInt(s[0],10);s[0]=(s[0]>=0&&s[0]<=69)?'20'+(s[0]<10?'0'+s[0]:s[0]+''):(s[0]>=70&&s[0]<=99)?'19'+s[0]:s[0]+'';return parseInt(this.strtotime(s[2]+' '+s[1]+' '+s[0]+' '+match[2])+(match[4]?match[4]/1000:''),10);}
var regex='([+-]?\\d+\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)'+'|(last|next)\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))'+'(\\sago)?';match=strTmp.match(new RegExp(regex,'gi'));if(match==null){return false;}
for(i=0;i<match.length;i++){if(!process(match[i].split(' '))){return false;}}
return(now.getTime()/1000);}


function time(){return Math.floor(new Date().getTime()/1000);}

function getCookie(name){
	var cookieValue = "";
	var search = name + "=";
	if(document.cookie.length > 0){
		offset = document.cookie.indexOf(search);
		if (offset != -1){
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1) end = document.cookie.length;
			cookieValue = unescape(document.cookie.substring(offset, end))
		}
	}
	return cookieValue;
}

function setCookie(name,value,seconds)//三个参数，分别是cookie的名字、值、过期时间
{
	var exp  = new Date();    //new Date("December 31, 9998");
	exp.setTime(exp.getTime() + Number(seconds)*5000 );
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function delCookie(name)//删除cookie
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

//去除字符串左右空白字符
function trim (str, charlist) {

	var whitespace, l = 0,
	i = 0;
	str += '';

	if (!charlist) {
		// default list
		whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
	} else {
		// preg_quote custom list
		charlist += '';
		whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
	}

	l = str.length;
	for (i = 0; i < l; i++) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(i);
			break;
		}
	}

	l = str.length;
	for (i = l - 1; i >= 0; i--) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(0, i + 1);
			break;
		}
	}

	return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}

function in_array (needle, haystack, argStrict) {
	var key = '',
	strict = !! argStrict;

	if (strict) {
		for (key in haystack) {
			if (haystack[key] === needle) {
				return true;
			}
		}
	} else {
		for (key in haystack) {
			if (haystack[key] == needle) {
				return true;
			}
		}
	}

	return false;
}

//获取字符串的长度
var getStrlen = function(str){
	return str.replace(/<.*?>/g, "").replace(/[^\x00-\xff]/g,"rr").replace(/&nbsp;/g, " ").length;
}

//截断函数
var cutLength = function(str, maxLen, appended, appendLength){
	appended = appended||"...";
	appendLength = appendLength||2;
	if (getStrlen(str) > maxLen){
		do{
			str = str.substring(0, str.length-1);
		}while(str && (getStrlen(str)+appendLength > maxLen));
		//说明最后不是一个闭合的tag，移除最后一个标红标记
		if (str.lastIndexOf("</") != str.lastIndexOf("<")){
			str = str.substring(0, str.lastIndexOf("<"))+str.substring(str.lastIndexOf(">")+1);
		}
		return str+appended;
	}
	return str;
}

//判断url是否是pc
var isPcUrl = function(url){
	if(url){
		if(url.indexOf('pc') != -1 || url.indexOf('dzt') != -1){
			return true;
		}
	}
	return false;
}

//按钮post提交数据
var jsPost = function(action, values) {
	var id = Math.random();
	//document.write('<form id="post' + id + '" name="post'+ id +'" action="' + action + '" method="post">');
	var html = ['<form id="post' + id + '" name="post'+ id +'" action="' + action + '" method="post"  target="_self">'];
	for (var key in values) {
		var input = ['<input type="hidden" name="' + key + '" value="' + values[key] + '" />'];
		html.push(input);
	}
	html = html.concat(['</form>']);
	html = html.join("");
	
	$(html).appendTo("body").submit().remove();
	//document.write('</form>');
	//document.getElementById('post' + id).submit();
}

//删除数组中的指定元素
Array.prototype.del = function(n)
{
	if (n<0) return this;
	return this.slice(0,n).concat(this.slice(n+1,this.length));
}

//错误收集函数
window.onerror = function(err){
	return true;
}

/**
 * 下面是一些基础函数，解决mouseover与mouserout事件不停切换的问题（问题不是由冒泡产生的）
 */
function checkHover(e, target) {
	if (getEvent(e).type == "mouseover") {
		return !contains(target, getEvent(e).relatedTarget
				|| getEvent(e).fromElement)
				&& !((getEvent(e).relatedTarget || getEvent(e).fromElement) === target);
	} else {
		return !contains(target, getEvent(e).relatedTarget
				|| getEvent(e).toElement)
				&& !((getEvent(e).relatedTarget || getEvent(e).toElement) === target);
	}
}

function contains(parentNode, childNode) {
	if (parentNode.contains) {
		return parentNode != childNode && parentNode.contains(childNode);
	} else {
		return !!(parentNode.compareDocumentPosition(childNode) & 16);
	}
}

// 取得当前window对象的事件
function getEvent(e) {
	return e || window.event;
}



// base.js的代码迁移至此
//--------------------------------------------------------------------------------------------
//连续发音 start
var timer = null;
rs = null;
function callback(mp3) {
	asplay_top(mp3);
	clearTimeout(timer);
}
function onSecondDelay(mp3) {
	if(timer){
		clearTimeout(timer);
	}
	//var mp3_1 = "callback('"+mp3+"')";
	timer = setTimeout(function(){callback(mp3); return false;}, 100);
}


var mp3_arr = new Array;
var i = 0;
//音标连读开关 obj
var but_obj = new Object;
function playit(){
	if(mp3_arr[i] !=""){
		asplay_top(mp3_arr[i]);
	}
	i++;
	if(i==(mp3_arr.length)){
		clearInterval(rs);
		but_obj.attr('class','site_icon_y');
		i = 0;
	}
}

function onSecondDelay_base(mp3_array,obj) {
	mp3_arr = mp3_array;
	rs = setInterval(playit,1500);
	but_obj = obj;
	//if(i==(mp3_arr.length)){
	//	clearInterval(rs);
	//    obj.attr('class','site_icon_y');
	//	return true;
	//}
}

function check_rs(question_index,input_w,right_w){
	input_w = trim( input_w );
	right_w = trim( right_w );

	if( input_w.indexOf('’') != -1 ){
	  		input_w = input_w.replace(/’/g, "'");
	}

	if( right_w.indexOf('’') != -1 ){
	  		right_w = right_w.replace(/’/g, "'");
	}
	var reg = /\s{2,}/g;
	input_w = input_w.replace(reg," ");
	right_w = right_w.replace(reg," ");

	if( input_w.toLowerCase() == right_w.toLowerCase() ){
		exam_result[question_index]	= 1;
	}else{
		exam_result[question_index]	= 0;
	}
}


//----------------------------------------------------------------------------
var checkIfLogIn = function(){
	var userStatus = getCookie("_ustat");
	var userId = "";
	if(userStatus){
		var data = eval("("+userStatus+")");
		userId = data.i;
	}

	return (!userId) ? false : true;
}

var open_log = function(){
	var c = document.location.href;
	if(icibaLogin){
		if(isPcUrl(document.location.href)){
			icibaLogin('pc_ck', encodeURI(c));
		}else{
			icibaLogin('', encodeURI(c));
		}
	}
}
//弹窗 设置

function setPanel(){
	if(checkIfLogIn()){
		var content = '<div id="set_config_panel" style="display:none;" class="wordTip wordTip1"><div class="wordTip_t"><span onclick="boxy(false);return false;"></span>设置</div><div class="wordTip_c"><div class="wordTip_ct">提醒功能设置</div><div class="wordTip_c1 cl"><a class="word_list_lable2" onClick="check($(this))" title="" href="javascript:void(0)" id="beisongtixing"></a><p>开启背诵提醒  <span>（背诵提醒将按艾宾浩斯记忆曲线，背诵课程将在背完后第1天、第2天、第4天、第7天和第15天提醒。）</span></p></div><div class="wordTip_ct">音标和发音设置</div><div class="wordTip_c1 cl"><label><input type="radio" name="RadioGroup1" value="0" id="RadioGroup1_0" checked> 英式</label><label><input type="radio" name="RadioGroup1" value="1" id="RadioGroup1_1"> 美式</label></div><div class="wordTip_ct">以下测试方式一起测试</div><ul class="wordTip_c1 cl"><li><a class="word_list_lable2" onClick="check($(this))" title="" href="javascript:void(0)" name="connect" attr="ceshifs"></a>中英连连看</li><li><a class="word_list_lable" onClick="check($(this))" title="" href="javascript:void(0)" name="recall" attr="ceshifs"></a>英文回想</li><li><a class="word_list_lable" onClick="check($(this))" title="" href="javascript:void(0)" name="dictation" attr="ceshifs"></a>听写电台</li><li><a class="word_list_lable" onClick="check($(this))" title="" href="javascript:void(0)" name="sentence" attr="ceshifs"></a>单选挑战</li><!--<li><a class="word_list_lable" onClick="check($(this))" title="" href="###"></a>寻找伙伴</li>--></ul><div class="wordTip_ct">中英连连看</div><ul class="wordTip_c1 cl"><li><a class="word_list_lable2" onClick="check($(this))" title="" href="###" attr="is_modify"></a>连错允许修改</li></ul><div class="wordTip_ct">单选挑战</div><ul class="wordTip_c2 cl"><li><a class="word_list_lable2" onClick="check($(this))" title="" href="###" attr="auto_next"></a>选择后，自动进入下一题</li></ul><div class="wordTip_button"><a class="user_button_green" href="javascript:void(0)" onclick="save_setting()">保存设置</a><a class="user_button_gray" href="javascript:void(0)" onclick="boxy(false);return false;">取消</a></div></div></div>';
		boxy(true,335,525,content,'设置', '',function(){
			//根据用户配置信息初始化弹窗
			if(global_setting_bstx){
				$("#beisongtixing").attr('class','word_list_lable2');
			}else{
				$("#beisongtixing").attr('class','word_list_lable');
			}

			$("input[name=RadioGroup1]").eq(global_setting_pron).attr("checked","checked");
			//
			$("a[attr=ceshifs]").each(function(){
				var name = $(this).attr('name');
				if( in_array(name,global_setting_csfs.split(',') ) ){
					$(this).attr('class','word_list_lable2');
				}else{
					$(this).attr('class','word_list_lable');
				}
			});

			if(global_setting_modify){
				$("a[attr=is_modify]").attr('class','word_list_lable2');
			}else{
				$("a[attr=is_modify]").attr('class','word_list_lable');
			}

			if(global_setting_auto){
				$("a[attr=auto_next]").attr('class','word_list_lable2');
			}else{
				$("a[attr=auto_next]").attr('class','word_list_lable');
			}
			$("#set_config_panel").show();
		});
	}else{
		open_log();
		return false;
	}
}

function bindEvent(){
	$(".setting-small").click(function(){
		setPanel();
	});
}
bindEvent();
//保存设置
function save_setting(){
	//连测方式初始化
	var csfs = new Array();
	var is_liance = 0;
	//开启背诵提醒
	var bstx = $("#beisongtixing").hasClass("word_list_lable2") ? 1 : 0;
	//音标和发音
	var pron = $("input[name=RadioGroup1]:checked").val();
	//连测是否开启 以及连测包含的方式
	$("a[attr=ceshifs]").each(function(){
		if( $(this).hasClass("word_list_lable2")){
			is_liance = 1;
			csfs.push($(this).attr('name'));
		}
	});
	//连连看是否允许修改
	var is_modify = $("a[attr=is_modify]").hasClass("word_list_lable2") ? 1 : 0;
	//单选挑战是否自动进入下一题
	var is_auto = $("a[attr=auto_next]").hasClass("word_list_lable2") ? 1 : 0;
	//提交设置信息
	$.ajax({
		type: "post",
		url : "?action=ajax.setting",
		dataType:'json',
		async: false,
		data:  'bstx='+bstx+'&pron='+pron+'&is_liance='+is_liance+'&csfs='+csfs+'&is_modify='+is_modify+'&is_auto='+is_auto,
		success: function(rs){
			//更新全局变量的值
			global_setting_bstx   = bstx;
			global_setting_pron   = pron;
			global_setting_csfs   = csfs.join(",");
			global_setting_modify = is_modify;
			global_setting_auto   = is_auto;
		}
	})
	boxy(false);
	//window.location.reload();
}

//-----------------------------------------------------------------------------
//设置背诵计划
var recite_plan = '<div class="wordTip wordTip5"><div class="wordTip_t"><span></span>背诵计划</div><div class="wordTip_c"><div class="wordTip5_c">计划背完时间：<input name="" type="text"><a href="#"></a></div><div class="wordTip4_p"><p>根据你的设置，每天需要<b>30</b>个单词</p></div><div class="wordTip_button"><a class="user_button_green" href="#">提交</a></div></div></div>';


/*******************************************************************************************************************************/
/*                               背诵计划相关函数                                        create:2013-04-19  author:wangwenwu                             */
/*******************************************************************************************************************************/
var Plan = {
	'curSetDate' : null,
	'total' : 0,
	'class_id' : 0,
	'defaultDate' : '1986-04-12',
	'classperday' : '30',
	'init' : function(total, classId, defaultDate, classperday){
		var div = '<div id="planDiv" class="wordTip wordTip5"><div class="wordTip_t"><span></span>背诵计划</div>';
		div += '<div class="wordTip_c"><div class="wordTip5_c">计划背完时间：<input id="datepicker" type="text" name=""></div>';
		div += '<div id="setClassPerDay" class="wordTip4_p"><p>根据你的设置，每天需要背诵<b>30</b>课</p></div>';
		if(this.defaultDate == '1986-04-12'){
			$("#setClassPerDay").html("");
		}
		div += '<div class="wordTip_button"><a href="#" class="user_button_green">提交</a></div></div></div>';
		if(typeof boxy == 'function'){
			boxy(true, 305, 177, div, '背诵计划');
		}
		var that = this;
		that.total = total;
		that.class_id = classId;
		that.defaultDate = date("Y-m-d", defaultDate);
		that.curSetDate = that.defaultDate;
		that.classperday = classperday;
		that.cal();
		that.regEvent();
	},
	'dateObj' : function(){
		return $("#datepicker");//日期控件绑定的input框
	},
	'cal' : function(){
		//to-do
		//var dateObj = $("#datepicker");
		var that = this;
		var dateDiv = document.getElementById("ui-datepicker-div");//日期控件html
		var input = this.dateObj().datepicker({
			showOn: "both",
			buttonImage: "../bdcstatic/images/calendar.gif",
			buttonImageOnly: true,
			buttonText : "选择日期",
			defaultDate : new Date(that.defaultDate),
			minDate : new Date(),
			onSelect : function(){
				that.curSetDate = that.getDate() || that.defaultDate;
				that.setPlan(that.total, "");
			}
		});
		//修正日期按钮样式
		var dateBtn = $(".ui-datepicker-trigger").get(0);
		if(dateBtn){
			dateBtn.style.display = "inline";
			dateBtn.style.cursor = "pointer";
		}
		this.dateObj().datepicker("setDate", this.defaultDate);
		this.setPlan(that.total, that.classperday);
	},
	'getDate' : function(){
		//to-do
		return this.dateObj().datepicker("getDate");
	},
	'setPlan' : function(total, classperday){
		//根据选择的日期，计算每天需完成的课数
		var totalClass = total || total_class;
		var Date1 = new Date();
		var curDate = Date.parse(Date1);
		var Date2 = new Date(this.curSetDate);
		Date2.setHours("23", "59", "59");
		var planDate = Date.parse(Date2);
		if(planDate >= curDate && !classperday){
			var temp = planDate - curDate;
			//alert(temp);
			var day = Number(temp/1000/3600/24);
			day = day > 1 ? Math.ceil(day) : 1;
			var needclass = Math.ceil(totalClass / day);
			$("#setClassPerDay").html("<p>根据你的设置，每天需要背诵<b>"+needclass+"</b>课</p>");
		}else{
			$("#setClassPerDay").html("<p>根据你的设置，每天需要背诵<b>"+this.classperday+"</b>课</p>");
		}
	},
	'close' : function(){
		this.curSetDate = this.getDate();
		this.hide();
		this.distroy();
	},
	'hide' : function(){
		$("#boxWrap").hide();
		$("#MboxyBg").hide();
	},
	'show' : function(){
		$("#boxWrap").show();
		$("#MboxyBg").show();
	},
	'regEvent' : function(){
		var that = this;
		$("#planDiv span").click(function(){
			that.close();
		});
	
		//将设置好的计划post给后台
		$(".user_button_green").click(function(){
			//to-do
			//$('<form action="?action=ajax.reciteplan" method="post"><input name="class_id" type="hidden" value="'+ that.class_id +'"></input><input name="complete_date" type="hidden" value="'+ $("#datepicker").val() +'"></input></form>').appendTo("body").submit().remove();
			var url_my = window.location.href;
			$.post(
			"?action=ajax.reciteplan",
			{
				class_id : parseInt(that.class_id),
				complete_date : $("#datepicker").val()
			},function(data){
				var rs = $.parseJSON(data)
				//							alert(rs['deadline'])
				$("#c_p_d").html(rs['course']);
				$("#deadline").html(rs['deadline']);
				$("#course_per_day").html(rs['course']);
				//此处为了实现业务逻辑，只能强制刷新，不太好的实现方法
				if(url_my.indexOf("action=my") != -1){
					window.location.reload();
				}
			});
			that.defaultDate = $("#datepicker").val();
			that.distroy();
	
	
			//window.location.reload();
			return false;
		});
	},
	'distroy' : function(){
		$("#boxWrap").remove();
		$("#MboxyBg").remove();
	}
};

//测试方式鼠标hover效果
var e = window.event;
$('.word_footer_test').on('mouseover', function(e){
	if(checkHover(e, this)){
		$(".word_footer_test_l").fadeIn("slow");
	}
});

$('.word_footer_test').on('mouseout', function(e){
	if(checkHover(e, this)){
		$(".word_footer_test_l").fadeOut("slow");
	}
});

//检测是否登录，否则禁止学习下一课
$("#studynextclass").click(function(){
	if(!checkIfLogIn()){
		var c = "http://word.iciba.com/"+global_app_type+"/?action=courses&classid=" + $("#subclassid").html();
		if(icibaLogin){
			icibaLogin('pc_ck', encodeURI(c));
		}
		return false;
	}else{
		return true;
	}
});

//用于（取消）选中单次列表页那类复选框
function check(obj){
	if( obj.hasClass('word_list_lable2')){
		obj.removeClass('word_list_lable2').addClass('word_list_lable');
		obj.siblings(":input").attr('disabled','disabled');
	}else{
		obj.removeClass('word_list_lable').addClass('word_list_lable2');
		obj.siblings(":input").removeAttr("disabled");
	}
	//下面这个判断用于单词列表页
	if( typeof(is_checkall) == 'function' ){
		if(is_checkall($("#word_list_1")) && is_checkall($("#word_list_2"))){
			$("#checkall").attr('class','word_list_lable2');
		}else{
			$("#checkall").attr('class','word_list_lable');
		}
	}
}

/**
* 回到页面顶部
* @param acceleration 加速度
* @param time 时间间隔 (毫秒)
**/
var goTop = function(acceleration, time) {
	acceleration = acceleration || 0.1;
	time = time || 16;

	var x1 = 0,
	y1 = 0,
	x2 = 0,
	y2 = 0,
	x3 = 0,
	y3 = 0;

	//针对ie
	if (document.documentElement) {
		x1 = document.documentElement.scrollLeft || 0;
		y1 = document.documentElement.scrollTop || 0;
	}

	//针对火狐
	if (document.body) {
		x2 = document.body.scrollLeft || 0;
		y2 = document.body.scrollTop || 0;
	}
	var x3 = window.scrollX || 0;
	var y3 = window.scrollY || 0;

	// 滚动条到页面顶部的水平距离
	var x = Math.max(x1, Math.max(x2, x3));
	// 滚动条到页面顶部的垂直距离
	var y = Math.max(y1, Math.max(y2, y3));

	// 滚动距离 = 目前距离 / 速度
	var speed = 1 + acceleration;
	window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

	// 如果距离不为零, 继续调用迭代本函数
	if(x > 0 || y > 0) {
		window.setTimeout(arguments.callee, time);
	}
}

//点击我的词吧，判断是否登录
$("#myciba").click(function(){
	if(!checkIfLogIn()){
		var cur_href = document.location.href;
		if(cur_href.indexOf('dzt') == -1){
			var c = "http://word.iciba.com/?action=index&reselect=y";
		}else{
			var c = "http://word.iciba.com/dzt/?action=index&reselect=y";
		}
		if(icibaLogin){
			if(isPcUrl(document.location.href)){
				icibaLogin('pc_ck', encodeURI(c));
			}else{
				icibaLogin('', encodeURI(c));
			}
		}
		return false;
	}else{
		return true;
	}
});



/****************************************************************************************************/
/* 以下为抽奖逻辑相关函数              author:wangwenwu       date:2013-07-01 */
/***************************************************************************************************/
var award = {};
award.type = ['visit', 'score', 'share'];
award.login_awardTimes = 0;
award.visit_awardTimes = 0;
award.install_awardTimes = 0;

award.visitTimes = 0;
award.loginTimes = 0;

function buildTips(){
	var html = ['<div class="word_resultV_cont word_resultV_right">', '<span class="word_resultV_right_hua">'
	            , '</span>', '<strong>', '恭喜您获得了一次抽奖机会，免费电影票等你拿哦~', '</strong>'
	            , '<div class="wordTip_button">', '<a target="_blank" href="http://zt.iciba.com/2013/movie" id="getwinning" class="user_button_green">去抽奖</a>' 
	            ,'<a href="#" id="cancelwinning" class="user_button_gray">取消</a>', '</div>', '</div>'];
	html = html.join("");
	return html;
}

//获取用户的抽奖资格信息
function getUserInfo(userId, query_type, func){
	$.get("?action=ajax.userinfo",{uid : userId, type : query_type}, function(data){
		var temp = eval("(" + data + ")");
		if(temp && temp[userId] && temp[userId][query_type]){
			var times = temp[userId][query_type];
			//alert("award.loginTimes : " + award.loginTimes);
			func(times);
		}
	})
}

//huoqu 

//每天登陆爱词霸账号获得抽奖机会+1
function login_award(uid){
	//to-do
	getUserInfo(uid, award.type[0],function(times){
		if(times <= 1){
			//第一次登陆，抽奖机会+1
			award.login_awardTimes += 1;
			$.post("?action=ajax.savewininfo", {user_id : uid, type : award.type[0]}, function(data){
				var data = eval("(" + data + ")");
				if(data && data[uid] && data[uid][award.type[0]] > 0){
					OpenTips(uid, award.type[0]);
				}
			});
		}
	});
	//var login_times = 0;
	//alert(award.loginTimes);
}

//登陆状态下访问背单词频道获得抽奖机会+1
function visitbdc_award(uid){
	//to-do
	getUserInfo(uid, award.type[0],function(times){
		if(times <= 1){
			//访问背单词频道，抽奖机会+1
			award.visit_awardTimes += 1;
			$.post("?action=ajax.savewininfo", {user_id : uid, type : award.type[0]}, function(data){
				var data = eval("(" + data + ")");
				if(data && data[uid] && data[uid][award.type[0]] > 0){
					OpenTips(uid, award.type[0]);
				}
			});
		}
	});
}

//登陆状态下安装词霸桌面版获得抽奖机会
function install_award(uid){
	//to-do
	$("#choujiang_install").click(function(){
		$.ajax({
			type: "post", 
			async:false,
			url : "?action=ajax.installtimes", 
			dataType:'text',
			data:  'uid='+uid, 
			success: function(data){
				if(data > 0){
					OpenTips(uid, 'install');
				}
			}   
		});
		return true;
	});
}

//检测是否由抽奖资格并弹出提示
function OpenTips(uid, type){
		var div = buildTips();
		if(typeof boxy == 'function'){
			boxy(true, 305, 177, div, '抽奖提示', '', function(){
				$("#getwinning").click(function(){
					//subAwardTimes(uid, type);
					boxy(false);
					return true;
				});
				
				$("#cancelwinning").click(function(){
					boxy(false);
					return true;
				});
			});
		}else{
			setTimeout(arguments.callee, 100);
			return;
		}
}

//如果选择去抽奖，则抽奖机会减一
function subAwardTimes(uid, subtype){
	//to-do
	if(uid && subtype){
		if(subtype == 'install'){
			$.post("http://zt.iciba.com/2013/movie/subinstalltimes", {user_id : uid}, function(){
				//to-do
			})
		}else{
			$.post("?action=ajax.subwininfo", {user_id : uid, type : subtype}, function(msg){
				var temp = eval("(" + msg + ")");
				//console.log(temp);
			});
		}
	}
}

//抽奖活动初始化函数
function award_init(){
	//to-do
	if(checkIfLogIn()){
		var user_cookie = eval("(" + getCookie("_ustat") + ")"),
		user_id = user_cookie['i'],
		user_name = user_cookie['n'];
		if(user_id){
			//login_award(user_id);
			visitbdc_award(user_id);
			install_award(user_id);
		}
	}
}
//award_init();

//
var t_submit = function(cur_class, cur_course){
	var word_ids = '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19';
	var args = {'type':'connect','word_ids':word_ids,'class_id':cur_class,'course':cur_course,'mode':0};
	jsPost('?action=exam', args)
};

$(".star_bg03").click(function(){
	var obj = $(".star_bg03")[0];
	var cur_course = obj.getAttribute("course_id") - 1;
	var cur_class  = document.getElementById('current_class_id').innerHTML;
	var inner_div = '<div id="msg_box" class="wordTip wordTip5"><div class="wordTip_t"><span onclick="javascript:boxy(false);"></span>提示</div>';
		inner_div += '<div class="wordTip_c"><div class="wordTip5_c"></div>';
		inner_div += '<div id="setClassPerDay" class="wordTip4_p"><p>亲，请先把上一课进行一项测试，检验下学习效果，再学习新的课程吧！</p></div>';		
		inner_div += '<div class="wordTip_button"><a href="#" class="user_button_green" onclick="t_submit('+cur_class+', '+cur_course+');boxy(false)">马上测试</a></div></div></div>';
		boxy(true, 305, 177, inner_div, '背诵计划');	
});





















