$(document).ready(function() {
	alert('welcome :)');
});

$(function() {
    $('.cathover').hide();
    $('.catsleep').mouseenter(function() {
      	$('.cathover').show();
    });
    $('.cathover').mouseleave(function() {
      	$('.cathover').hide();
    });
});

