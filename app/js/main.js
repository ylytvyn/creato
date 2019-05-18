'use strict';

(function($){
	$(document).ready(function() {
		// Isotope
		isoImages();

		$(window).resize(function() {
			isoImages();
		});

		function isoImages() {
			$('.blocks').isotope({
				itemSelector: '.blocks__img',
				percentPosition: true,
				masonry: {
					columnWidth: '.sizer',
					gutter: 7
				}
			});

			$('.filters').on('click', 'li', function() {
				var val = $(this).data('filter');
				$('.blocks').isotope({filter: val})
			});

			if ($(window).innerWidth() < 576) {
				$('.blocks').isotope({
					masonry: {
						gutter: 0
					}
				});
			}
		}


		// Mobile menu
		$('.burger-menu').click(function() {
			$(this).toggleClass('burger-menu--active');
			$('body').toggleClass('is-menu-shown');
		});
	});
})(jQuery);
