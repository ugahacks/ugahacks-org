/**
 * Scroll-x is a lightweight scroll controller that is configured in HTML.
 * @author Shawn Holman
 */
const SCROLLX = new (function () {
	const callables = new Map();

	const SCROLL_X_ID = 'scrollx';
	const SCROLL_X_BOOLS = [
		
	];
	const SCROLL_X_DATA = [
		'based-on',
		'offset'
	];
	const SCROLL_X_FUNCTIONS = {
		// toggle class
		'scrollx-toggle-class': function (frameperc, param, addClass) {
			if (addClass) {
				$(this).addClass(param);
			} else {
				$(this).removeClass(param);
			}
		},
		// add class
		'scrollx-add-class-in': function (frameperc, param) {
			$(this).addClass(param);
		},
		// add class
		'scrollx-add-class-out': function (frameperc, param) {
			$(this).addClass(param);
		},
		// remove class
		'scrollx-remove-class-in': function (frameperc, param) {
			$(this).removeClass(param);
		},
		// remove class
		'scrollx-remove-class-out': function (frameperc, param) {
			$(this).removeClass(param);
		},
		'scrollx-call-on': function (frameperc, param) {
			let parts = param.split(/\s*:\s*/);
			let funcName = parts[0];

			if (parts.length >= 2) {
				let args = parts[1].split(/\s*,\s*/);
				callables.get(funcName).apply(this, [frameperc, ...args]);
			} else {
				callables.get(funcName).apply(this, [frameperc]);
			}
		},
		'scrollx-call-off': function (frameperc, param) {
			let parts = param.split(/\s*:\s*/);
			let funcName = parts[0];

			if (parts.length >= 2) {
				let args = parts[1].split(/\s*,\s*/);
				callables.get(funcName).apply(this, [frameperc, ...args]);
			} else {
				callables.get(funcName).apply(this, [frameperc]);
			}
		}
	};

	this.addCallable = (name, func) => {
		if (name === '' || func === undefined) {
			throw new Error('Callable requires a name and function.');
		}
		if (callables.has(name)) {
			throw new Error('Callable already exists.');
		}
		callables.set(name, func);
	};

	/**
	 * Returns a list of scrollX booleans
	 * @param  {jQuery.Element} scrollXElement The scrollX element to get the booleans for
	 * @return {Object} list of booleans
	 */
	function getBooleans(scrollXElement) {
		let obj = {};
		for (let boolTag of SCROLL_X_BOOLS) {
			let key = boolTag.toUpperCase().replace(/-/g, '_');
			let data = scrollXElement.attr('data-' + boolTag);
			obj[key] = data === '' || data === 'true';
		}
		return obj;
	}

	/**
	 * Returns a list of scrollX data
	 * @param  {jQuery.Element} scrollXElement The scrollX element to get the booleans for
	 * @return {Object} list of data points
	 */
	function getData(scrollXElement) {
		let obj = {};
		for (let dataTag of SCROLL_X_DATA) {
			let key = dataTag.toUpperCase().replace(/-/g, '_');
			let data = scrollXElement.attr('data-' + dataTag) || '';
			if (!isNaN(parseFloat(data))) {
				obj[key] = parseInt(data);
			} else {
				obj[key] = data;
			}
		}
		return obj;
	}

	/**
	 * Returns a list of scrollX functions
	 * @param  {jQuery.Element} scrollXElement The scrollX element to get the booleans for
	 * @return {Object} list of functions
	 */
	function getFunctions(scrollXElement, frameperc) {
		let obj = {};
		for (let funcTag in SCROLL_X_FUNCTIONS) {
			let key = funcTag.toUpperCase().replace(/-/g, '_');
			let data = scrollXElement.attr('data-' + funcTag) || false;
			obj[key] = data ? SCROLL_X_FUNCTIONS[funcTag].bind(scrollXElement, frameperc, data) : false;
		}
		return obj;
	}

	function getWinX() {
		const winHeight = window.innerHeight;
		const winX = window.scrollY;

		return {
			top: winX,
			middle: winX + winHeight / 2,
			bottom: winX + winHeight,
		}
	}

	function getElX(element) {
		const elHeight = element.height();
		const elX = element.offset().top;

		return {
			top: elX,
			middle: elX + elHeight / 2,
			bottom: elX + elHeight,
		}
	}

	function handleScroll () {
		const winX = getWinX();

		$(`[data-${SCROLL_X_ID}]`).each(function () {
			// Get some information from the element
			const element = $(this);
			const position = getElX(element);
			const bools = getBooleans(element);
			const data = getData(element);
			// get the element pos based on the middle of it
			const elementPos = position['top'];

			// set up the trigger determiners
			let offset = data.OFFSET || 0;
			// the scroll offset to base the scrolling on
			let scrollX = winX[data.BASED_ON || 'middle'] + offset;

			const percentCompleted = (scrollX - elementPos) / element.height();
			const fncs = getFunctions(element, percentCompleted);
			
			if (percentCompleted >= 0 && percentCompleted <= 1) {
				if (fncs.SCROLLX_ADD_CLASS_IN) {
					fncs.SCROLLX_ADD_CLASS_IN();
				}
				if (fncs.SCROLLX_REMOVE_CLASS_IN) {
					fncs.SCROLLX_REMOVE_CLASS_IN();
				}
				if (fncs.SCROLLX_CALL_ON) {
					fncs.SCROLLX_CALL_ON();
				}
				if (fncs.SCROLLX_TOGGLE_CLASS) {
					fncs.SCROLLX_TOGGLE_CLASS(true);
				}
				element.data('hasBeenOnScreen', true);
			} else {
				if (element.data('hasBeenOnScreen')) {
					if (fncs.SCROLLX_ADD_CLASS_OUT) {
						fncs.SCROLLX_ADD_CLASS_OUT();
					}
					if (fncs.SCROLLX_REMOVE_CLASS_OUT) {
						fncs.SCROLLX_REMOVE_CLASS_OUT();
					}
					if (fncs.SCROLLX_CALL_OFF) {
						fncs.SCROLLX_CALL_OFF();
					}
					if (fncs.SCROLLX_TOGGLE_CLASS) {
						fncs.SCROLLX_TOGGLE_CLASS(false);
					}
					element.data('hasBeenOnScreen', false);
				}
			}
		});
	}

	$(document).ready(function () {
		handleScroll
		$(window).on('scroll', handleScroll);
	});
})();


SCROLLX.addCallable('opacity', function (frameperc, arg1) {
	$(this).css('opacity', frameperc);
});
