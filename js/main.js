const Main = (function () {
	let timer;

	// public methods
	

	// private methods
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

	function onProfilePictureHover () {
		clearTimeout(timer);
		let t = $(this);

		$('.card').removeClass('fade-in');
		$('.card').next().removeClass('flip');
		t.addClass('flip');

		timer = setTimeout(function () {
			t.prev().show();
			setTimeout(function () {
				t.prev().addClass('fade-in');
			}, 50)
		}, 150);
	}

	function onProfilePictureOut () {
		clearTimeout(timer);
		$('.card').removeClass('fade-in');
		timer = setTimeout(() => {
			$('.card').hide();
			$('.card').next().removeClass('flip');
		}, 200);
	}

	// dom 
	$(document).ready(function () {
		$('.team-picture').on('mouseover', onProfilePictureHover);
		$('.card').on('mouseleave', onProfilePictureOut);
		$('.menu-toggle').on('click', toggleMenu);
	});
})();
