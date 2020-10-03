$(document).ready(function(){
	$('.bg1').hide(0);
	$('.bg2').hide(0);
	slideshow();

});

function Slide1() {
	$('.bg1').fadeIn(1000);
	$('.bg2').fadeOut(1000);
	$('.bg3').fadeOut(1000);
}
function Slide2() {
	$('.bg2').fadeIn(1000);
	$('.bg1').fadeOut(1000);
	$('.bg3').fadeOut(1000);
}
function Slide3() {
	$('.bg3').fadeIn(1000);
	$('.bg1').fadeOut(1000);
	$('.bg2').fadeOut(1000);
}
function slideshow() {
	setTimeout(function(){Slide1();}, 4000);
	setTimeout(function(){Slide2();}, 8000);
	setTimeout(function(){Slide3();}, 12000);

}


var interval1 = self.setInterval(function(){slideshow()},12000);


//call code bllow to stop interval
//window.clearInterval(interval);
