$(function() {

	var trigger = $('.lili'),
		target = $('.hover-none');

	trigger.hover(function() {
		target.fadeOut('fast');
    });

    trigger.mouseleave(function() {
    	target.fadeIn('fast');
    });
});