 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 10,
		    margin: 30,
		    smartSpeed: 1000,
		    autoplay:true,
				autoplayTimeout:1000,
				autoplayHoverPause:false,

		    nav: true,
				navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
		    responsive:{
	        600:{
	        	margin: 30,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
			smartSpeed: 1000,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();
});