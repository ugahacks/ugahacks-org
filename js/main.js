const Main = (function () {
	// public methods
	

	// private methods
	function handleScroll () {
		if ($(this).scrollTop() > 5) {
			$('nav').addClass('scrolling');
		} else {
			$('nav').removeClass('scrolling');
		}
	}

	function toggleMenu () {
		$(this).toggleClass('is-active');
		if ($('nav').hasClass('slide-in')) {
			$('nav').removeClass('slide-in');
			setTimeout(function () {
				$('nav').removeClass('responsive-open');
			}, 250);
		} else {
			$('nav').addClass('responsive-open');
			setTimeout(function () {
				$('nav').addClass('slide-in');
			}, 50);
		}
	}

	// dom 
	$(document).ready(function () {
		$('.menu-toggle').on('click', toggleMenu)
		$(window).on('scroll', handleScroll);
	});
})();
