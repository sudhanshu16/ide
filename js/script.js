tab_closed=0;
var win_width=$(window).width();
var container_width;
var tooltip;
$(function() {
	container_width=$('.container').width();
	tooltip=$('.tooltip_box');
	
 //    var editor = ace.edit("editor");
 //    editor.setTheme("ace/theme/chrome");
 //    editor.getSession().setMode("ace/mode/javascript");
 //    editor.setOptions({
	//   fontFamily: "Anonymous Pro",
	//   fontSize: "13pt"
	// });
	$('.tabs>div').each(function(){
		$(this).append('<div class="cross">&Cross;</div>');
	});
	$('.tabs section').click(function(){
		$(this).before('')
	});
	$('.head a').each(function(){
		var options_class='._'+$(this).attr('class');
		var options_top=$(this).offset().top+$(this).height();
		var options_left=$(this).offset().left-10;
		$(options_class).css({"top":options_top+'px',"left":options_left+'px'});
	});
	$('.head a').click(function(){
		var options_class='._'+$(this).attr('class');
		$('.options>div:not('+options_class+')').hide();
		$(options_class).toggle();
	});
});
$(document).on('click',function(e){
	var target=$(e.target);
	if(!target.is('.head a span')){
		$('.options>div').hide();
	}
	if(target.is('.add_tab')){
		var num=$('.tabs>div').length;
		var tab_num_width=(num+1)*150;
		if(tab_num_width<container_width)
			add_tab();
		else
			alert('Max number of instances are initiated. Please close existing ones to open new.');
	}
});
$(document).on('click','.tabs>div',function(){
	if(tab_closed==0){
		$('.tabs>div').removeClass('active');
		$(this).addClass('active');
	}
	else
		tab_closed=0;
});

$(document).on('click','.tabs .cross',function(){
	if($(this).parent().is('.active')){
		$(this).parent().parent().find('div').eq(0).addClass('active');
	}
	tab_closed=1;
	$(this).parent().remove();
	setTimeout(function(){
		$('.tooltip_box').fadeOut(200);
	},200);
});
var show_tooltip;
var tool_span;
$(document).on('mouseenter','.tooltip>',function(e){
	tool_span=$(this).find('span');
	if(tool_span.length>0){
		var x=$(this).offset().left+$(this).height()/2+10;
		var y=$(this).offset().top+$(this).height();
		var data=$(this).find('span').text();
		show_tooltip=setTimeout(function(){
			tooltip.text(data).fadeIn(200).css({"top":y+'px',"left":x+'px'});
		},2000);
	}
});
$(document).on('mouseleave','.tooltip>',function(){
	if(tool_span.length>0){
		clearTimeout(show_tooltip);
		tooltip.fadeOut(200);
	}
});

function add_tab(){
	$('.add_tab').before("<div><span>New Document</span><div class=\"cross\">&Cross;</div></div>");
}