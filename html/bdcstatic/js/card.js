	var _inner_html = '<div class="pop_mod" style="">';
	    _inner_html += '<div class="pop_tit cl"><span class="pop_tit_text">词条报错</span><a class="close" href="javascript:void(0)" onclick="javascript:boxy(false);return false;"></a></div>';
	    _inner_html += '<input type=hidden id="class_id" name="info[class_id]" value="__classid__">';
	     _inner_html += '<input type=hidden id="course_id" name="info[course_id]" value="__courseid__">';
	      _inner_html += '<input type=hidden id="wid" name="info[wid]" value="__wid__">';
	    _inner_html += '<div class="pop_con06"><div class="error_tit">__word__</div><div class="error_list_tit">需要改进的内容：</div><div class="error_list"><ul class="cl"><li><input type="hidden" name="fayin" value="0" class="rep_type"><a class="word_list_lable" href="#" onclick="rep_checked($(this))"></a>发音</li><li><input type="hidden" name="yinbiao" value="0" class="rep_type"><a class="word_list_lable" href="#" onclick="rep_checked($(this))"></a>音标</li><li><input type="hidden" name="liju" value="0" class="rep_type"><a class="word_list_lable" href="#" onclick="rep_checked($(this))"></a>例句</li><li><input type="hidden" name="pinxie" value="0" class="rep_type"><a class="word_list_lable" href="#" onclick="rep_checked($(this))"></a>单词大小写</li><li><input type="hidden" name="shiyi" value="0" class="rep_type"><a class="word_list_lable" href="#" onclick="rep_checked($(this))"></a>释义</li><li><input type="hidden" name="qita" value="0" class="rep_type"><a class="word_list_lable" href="#" onclick="rep_checked($(this))"></a>其他</li></ul></div><div class="error_des">错误描述：</div><div class="error_text"><textarea id=e_desc cols="" rows="" onfocus="_i_focus($(this))" onblur="_i_blur($(this))">您还可在这里补充说明下O(∩_∩)O~</textarea> <div><div class="error_btn"><a class="word_button_blue" href="#" onclick="error_report_submit($(this))">提交</a><span id="e_notice" style="display:none">请您至少选择一项内容</span></div></div>';
	    _inner_html += '</div>';
	
	
	function error_report(class_id, course_id, wid, word){
	   var  _content = _inner_html;
	   _content = _content.replace(/__classid__/,class_id);
	   _content = _content.replace(/__courseid__/,course_id);
	    _content = _content.replace(/__word__/,word);
	    _content = _content.replace(/__wid__/,wid);
	    boxy(true,415,375,_content,'词条报错')
	}
	
	function error_report_submit(obj){
	    var rs = rep_is_checked();
	    //错误描述
	    var e_desc = $("#e_desc").val();
	
	    if(!rs && (e_desc == "" || e_desc == "您还可在这里补充说明下O(∩_∩)O~")){
	        obj.siblings("span").show();
	        obj.siblings("span").fadeOut(1500);
	        return false;
	    }else{
	        //如果为默认值 则置为空
	        if(e_desc == "您还可在这里补充说明下O(∩_∩)O~"){
	            e_desc = ""; 
	        }
	        //单词ID
	        var w_id      = $("#wid").val();
	        var class_id  = $("#class_id").val();
	        var course_id = $("#course_id").val();
	        $.ajax({
	             type: "post", 
	             url : "bdc.php?action=ajax.ereport", 
	             dataType:'text',
	             data:  'desc='+e_desc+'&wid='+w_id+'&qtype='+rs+'&class_id='+class_id+'&course_id='+course_id, 
	             success: function(rs){
	
	             }   
	        })
	        boxy(false);return false;
	    }
	}
	
	function rep_checked(obj){
	   var _cur_class = obj.attr('class');
	   if(_cur_class == 'word_list_lable2'){
	        obj.attr('class','word_list_lable');
	        obj.siblings('.rep_type').val('0');
	   }else{
	        obj.attr('class','word_list_lable2')
	        obj.siblings('.rep_type').val('1');
	   }
	}
	
	function rep_is_checked(){
	    var is_checked = 0;
	    var e_type = '';
	    var rep_type_len = $(".rep_type").length;
	    $(".rep_type").each(function(i){
	        if($(this).val() == '1'){
	            is_checked +=1;
	            e_type += $(this).attr('name')+',';
	        }
	    });
	    if(is_checked > 0){
	        return e_type;
	    }else{
	        return false;
	    }
	}
	
	function _i_focus(obj){
	    var default_content = "您还可在这里补充说明下O(∩_∩)O~";
	    var content = obj.val();
	    if(default_content == content){
	        obj.val("");
	    }
	    obj.css("color","#333");
	}
	
	function _i_blur(obj){
	    var default_content = "您还可在这里补充说明下O(∩_∩)O~";
	    var content = obj.val();
	    if(content == ""){
	        obj.val(default_content);
	    }
	    obj.css("color","#999");
	}
	
	//---------------------------------------------------------------------------------------
	//从原wordlist.js中迁过来的
	//切换卡片学习 上一个 下一个
	function preornext(condition,current_id){
	  	$("div [c_id="+current_id+"]").hide();
	  var next_c = current_id + 1;
	  var pre_c = current_id - 1;
	  $(".divScrollBar").remove();
	  if(condition == 'pre'){
	    $("div [c_id="+pre_c+"]").show();
	    $("div [c_id="+pre_c+"] input:first").focus();
	    var contentDiv = document.getElementById('change-pic-mid-'+ pre_c);
	    jsScroll(contentDiv, 7, 'divScrollBar');
	    jsScrollReset(contentDiv);
	    var _obj = $("div [c_id="+pre_c+"]"); 
	  }else{
	    $("div [c_id="+next_c+"]").show();
	    $("div [c_id="+next_c+"] input:first").focus();
	    var contentDiv = document.getElementById('change-pic-mid-'+ next_c);
	    jsScroll(contentDiv, 7, 'divScrollBar');
	    jsScrollReset(contentDiv);
	    var _obj = $("div [c_id="+next_c+"]");
	  }
	  var _pron = _obj.children("div.change-pic-mid").find("div.word_sound_list a").attr("id");
	  //alert(_pron);
	  if(_pron){
	        _pron = _pron.replace("\r","");
	        _pron = _pron.replace("\n","");
	        _pron = _pron.replace(/\s/g,"");
	        asplay_top(_pron);
	    }
	    __pv(2233);
	    init_img_upload();
	    ctrl_img_upload_btn();
	}

	//如果已有图片显示则把上传图片隐藏反之显示
	function ctrl_img_upload_btn(){
		var upldBox_lenth = $(".change-pic").not(":hidden").find(".upldBox").length;
		var img_exists	  = $(".change-pic").not(":hidden").find(".word_img_status").length;
		var img_status 	  = $(".change-pic").not(":hidden").find(".word_img_status").attr("status");

		if(img_exists > 0 && img_status >0 ){
			$("#upload_img").hide();
			$("#examine_img").hide();
		}else if(img_exists >0 && img_status==0){
			$("#upload_img").hide();
			$("#examine_img").show();
		}else{
			if(checkIfLogIn()){
				$("#upload_img").show();
			}	
			$("#examine_img").hide();
		}
	}
	//页面初始化
	ctrl_img_upload_btn();
	
	function init_img_upload(){
		var _upload_button = $('#upload_img');
		var _upload_action = '?action=ajax.uploadimg';
		var _global_upload_img = new AjaxUpload(_upload_button,{	 
		    action: _upload_action, 
		    name: 'uploadimg',
		    data: {
		    	'word':$(".change-pic").not(":hidden").find(".word").html()
		    },
		    onSubmit : function(file, ext){	 
		        this.disable();
		    },
		    onComplete: function(file, response){
		        var rs = eval('('+response+')');
		        if(rs.code == 0){
		        	alert(rs.msg);
		        }else{
		        	$("#upload_img").hide();
					$("#examine_img").show();
					$(".change-pic").not(":hidden").prepend('<span class="word_img_status" status="0" style="display:none;"></span>');
		        }
		    }
		});
	}
	init_img_upload();

	//滚动条初始化时位置置顶
	function jsScrollReset(obj){
	  var $scrollBar = $(".divScrollBar").children()[0];
	  if($scrollBar){
		  $scrollBar.style.top = "0px";//滚动条回到顶部
	  }
	  obj.scrollTop = 0;//内容页也回到顶部
	}
	
	function study_submit(event){
	    var max_q = $(".change-pic").length;
	    var current_q = $(".change-pic").not(":hidden").index();
	    var e = event ? event :(window.event ? window.event : null);
	    if(e.keyCode==13){
	    if(current_q < max_q){
	      preornext('next',current_q);
	    }else{
	      alert('已经是最后一题了~');
	      return false; 
	    }
	    }
	}
	
	
	function compare_words(obj){
	  var words_input = trim( obj.val() );
	  var words_correct = trim(obj.siblings(".correct_words").html());

	  if( words_correct.indexOf('’') != -1 ){
	  		words_correct = words_correct.replace(/’/g, "'");
	  }

	  if( words_input.indexOf('’') != -1 ){
	  		words_input = words_input.replace(/’/g, "'");
	  }

	  if( words_input.toLowerCase() == words_correct.toLowerCase() ){
	    obj.parent().siblings("em").attr('class','word_result_correct');
	  }else{
	    obj.parent().siblings("em").attr('class','word_result_error');
	  }
	  if(words_input == ""){
	    obj.parent().siblings("em").attr('class','');
	  }
	}
	$(function(){
	  var _obj = $("div [c_id="+0+"]");
	  var _pron = _obj.children(".change-pic-mid").children(".word_sound_list").children("a").attr('id');
	  if(_pron){
	        asplay_top(_pron);
	    }
	  
	})
	//光标切换前一个、后一个单词
	 document.onkeydown=function(b){
	    b=(b)?b:window.event;
	  	var max_q = $(".change-pic").length;
	  	var current_q = $(".change-pic").not(":hidden").index();
	  	
	    if(b.keyCode == "37"){
	        if(current_q == 1){
	            alert("已经是第一题了~");
	            return false;
	        }else{
	      		preornext('pre',current_q);
	        }
	    }else if(b.keyCode == "39"){
		    if(current_q < max_q){
		      preornext('next',current_q);
		    }else{
		      alert('已经是最后一题了~');
		      return false; 
		    }
	    }else if(b.keyCode == "119"){
	        var current_q = $(".change-pic").not(":hidden").index();
	        var _pron = $(".ljfy_"+(current_q)).not(":hidden").attr('id');
			if(_pron){
	            asplay_top(_pron);
	        }
	    }
	    //f9单词发音
	    else if(b.keyCode == "120"){
	    	var current_q = $(".change-pic").not(":hidden").index();
	    	var word_pron = $(".icon_s2").not(":hidden").eq(0).attr("id");
	    	if(word_pron){
	    		asplay_top(word_pron);
	    	}
	    }
	    //crtl+shift+C 下一条例句
	    else if(b.ctrlKey == true && b.altKey == true && b.keyCode == "67"){
	    	var dd = $(".word_sound_list").not(":hidden").parent().children('.word_lj').children('dd');
	    	var sententse_num = dd.length;
	    	var cur = dd.not(":hidden").index();
	    	$('.card_dj_' + (cur-1)).hide();
	    	if(cur < sententse_num){
	    		$('.card_dj_'+ cur).show();
	    	}else{
	    		cur = 0;
	    		$('.card_dj_'+ cur).show();
	    	}
	    }
	}
	
	//点击立即测试 或者某种测试方式
	$(".exam_now_link").click(function(){
	  var type = $(this).attr('exam_type');
	  var args = {'type':type,'word_ids':word_ids,'class_id':exam_class_id,'course':exam_course};
	  if( type == 'liance' ){
	    args['mode'] = 1;
	  }
	  jsPost('?action=exam',args);
	});
	
	//切换例句
	function switch_sentense($this){
		 var cur = $this;
		 var dj_num = cur.attr('dj_change');
		 cur.parent().siblings(".card_dj_"+dj_num).show().siblings("dd").hide();
	}
	$(".word_lj_change").click(function(){
		switch_sentense($(this));
	});
	
	//本页面总的初始化函数
	function cardtest_init(){
		//页面加载时播放第一条
		var prons = $("#change-pic-mid-1").find("a.icon_s2").first().attr("id");
		asplay_top(prons);
		
		$(".clone_words").focus();
	}
	cardtest_init();
//---------------------------------------------------------------------------
/* S 20131009 图片上传 */
$(function (){
  if($('.upldBox .ico a'))
  {
    $('.upldBox .ico a').each(function (i){
      $('.upldBox').hover(function (){
        setTimeout(function (){
          $('.upldBox .upld_pic').eq(i).show();
        },500);
      },function (){
        $('.upldBox .upld_pic').eq(i).hide();
      });
    });
  }
});
/* E 20131009 图片上传 */

//背单词
$(".nonsupport").click(function(){
	var word_hash = $(this).attr('wordhash');
	var child = $(this).children("span");
	$.ajax({
         type: "post", 
         url : "?action=ajax.nonsupport", 
         dataType:'json',
         data:  'wordhash='+word_hash, 
         success: function(rs){         	
         	if( rs.code != 1){
         		alert(rs.msg);
         	}else{
         		child.html(rs.msg);
         	}
         }   
    })
});