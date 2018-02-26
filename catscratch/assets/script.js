$(document).ready(function() {
	alert('Pet the cat! :3');
});
$(function() {
    $('.cathover').hide();
    $('.catsleep').mouseenter(function() {
      	$('.cathover').show();
      	$('body').css("background-color", "firebrick");
    });
    $('.cathover').mouseleave(function() {
      	$('.cathover').hide();
      	$('body').css("background-color", "pink");
    });
});

        $(document).ready(function(){

            //Plays the file when the mouse is over the element
            $(".cathover").mouseover (function (){

                $("#catscratchfever")[0].play();

            });

            //Pause the file when the mouse leaves the element
             $(".cathover").mouseleave (function (){

                $("#catscratchfever")[0].pause();
                $("#catscratchfever").currentTime=0;

            });

        });

var x = document.getElementById("catscratchfever");

function enableLoop() { 
    x.loop = true;
    x.load();
} 

function disableLoop() { 
    x.loop = false;
    x.load();
} 

function checkLoop() { 
    alert(x.loop);
} 
