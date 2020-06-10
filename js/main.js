const Main = new (function () {
	const states = new Map();
	let timer;

	// public methods
	this.registerState = function (name, action) {
		states.set(name, action);
	}

	this.scrollWindow = function (scrollTop) {
		scrollTop = scrollTop - $('nav').height();
		$("html, body").animate({ scrollTop });
	}

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

	function manageState(event) {
		let hash = window.location.hash.substr(1);
		let state = states.get(hash);

		if (state) {
		    state.call(event);
		} else {
			console.warn('State does not exist: ' + hash);
		}
	}

	function pushState () {
		let link = $(this).attr('data-link');
		history.push(null, null, link);
	}

	// dom 
	$(document).ready(function () {
		manageState(null);

		$('.team-picture').on('mouseover', onProfilePictureHover);
		$('.card').on('mouseleave', onProfilePictureOut);
		$('.menu-toggle').on('click', toggleMenu);
		$('[data-link]').on('click', pushState);
		$(window).on('popstate', manageState);
	});
})();



