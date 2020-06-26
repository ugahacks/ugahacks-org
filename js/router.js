const Router = new (function () {
    const states = new Map();

	// public methods
	this.registerState = function (name, action) {
		states.set(name, action);
	}

	this.action = {
		scrollWindowTo(scrollTop) {
			return () => {
				scrollTop = scrollTop - $('nav').height();
				$("html, body").animate({ scrollTop });
			}
		},

		scrollWindowToElement(element) {
			return () => {
				scrollTop = $(element).offset().top - $('nav').height();
				$("html, body").animate({ scrollTop });
			}
		}
	}

	/**
	 * Manages the history state and calls registered states accordingly
	 * @param  event the state passed in through the popstate event
	 */
	function manageState(event) {
		let hash = window.location.hash.substr(1);
		let hashParts = hash.split("?");
		let hashText = hashParts[0];
		let state = states.get(hashText);

		if (hashParts.length == 2) { // pass on query data
			let hashQuery = parseQuery(hashParts[1]);
			event.queryData = hashQuery;
		}

		if (state) {
		    state.call(event);
		} else {
			console.warn('State does not exist: ' + hash);
		}
	}

	function parseQuery(queryString) {
	    var query = {};
	    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
	    for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('=');
	        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
	    }
	    return query;
	}

	/**
	 * Pushes a new state
	 */
	function pushState () {
		let link = $(this).attr('data-link');
		history.pushState(null, null, link);
	}

	$(document).ready(function () {
		// Get the current state
		manageState(null);

		$('[data-link]').on('click', pushState);
		$(window).on('popstate', manageState);
	});
})()