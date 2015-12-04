$(document).ready(function(){
	$("#html-info").removeClass('hidden');
	$("#html").addClass('green-font');

	$("#html").mouseover(function() {
		$("#info").find("fieldset").addClass('hidden');
		$("#options").find("li").removeClass('green-font');
		$("#html-info").removeClass('hidden');
		$(this).addClass('green-font');
	});

	$("#css").mouseover(function() {
		$("#info").find("fieldset").addClass('hidden');
		$("#options").find("li").removeClass('green-font');
		$("#css-info").removeClass('hidden');
		$(this).addClass('green-font');
	});

	$("#js").mouseover(function() {
		$("#info").find("fieldset").addClass('hidden');
		$("#options").find("li").removeClass('green-font');
		$("#js-info").removeClass('hidden');
		$(this).addClass('green-font');
	});

	$("#html5").mouseover(function() {
		$("#info").find("fieldset").addClass('hidden');
		$("#options").find("li").removeClass('green-font');
		$("#html5-info").removeClass('hidden');
		$(this).addClass('green-font');
	});

	$("#css3").mouseover(function() {
		$("#info").find("fieldset").addClass('hidden');
		$("#options").find("li").removeClass('green-font');
		$("#css3-info").removeClass('hidden');
		$(this).addClass('green-font');
	});

	$("#jquery").mouseover(function() {
		$("#info").find("fieldset").addClass('hidden');
		$("#options").find("li").removeClass('green-font');
		$("#jquery-info").removeClass('hidden');
		$(this).addClass('green-font');
	});

});