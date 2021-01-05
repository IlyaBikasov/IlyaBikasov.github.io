$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		autoplayHoverPause: true,
	});

	$(".by-game").click(function(){
		$(this).attr("value", "Download");
	});
});