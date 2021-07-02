$(window).on('load', function() {
	if ($(".slider").length) {
		$('.slider').on('init', function(event, slick){
		    $('.main-bunner-T-2').css('background', 'none');
		});

	
		$(".slider").slick({
	        fade: true,
	        autoplay: true,
	        infinite: true,
	        cssEase: "linear"
	    });
	};

	if ($(".js-slide-sm").length) {
		$(".js-slide-sm").slick({
			slidesToShow: 4,
			slidesToScroll: 1,
	        arrows: false,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 2000,
	    });
	}
});