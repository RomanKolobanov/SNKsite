$(function() {

	var trigger = $('.lili'),
		target = $('.hover-none');

	var compile = $('.social-inner');

	trigger.hover(function() {
		target.fadeOut('fast');
		compile.addClass("move_btn")
    });

    trigger.mouseleave(function() {
    	target.fadeIn('fast');
    	compile.removeClass("move_btn"); 
    });
});