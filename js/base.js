var Helpers = (function () {
	'use strict';

	var addClass = function (element, newClass) {
			if(element.classList && !element.classList.contains(newClass)) {
				element.classList.add(newClass);
			}
			return;
		},

		removeClass = function (element, removeClass) {
			if (element.classList) {
		        element.classList.remove(removeClass);
		    }
		},

		style = function (element, property) {
			var style = window.getComputedStyle(element);
			return style.getPropertyValue(property);
		};

	return {
		addClass: addClass,
		removeClass: removeClass,
		style: style
	};
}());

(function() {
	var hash = window.location.hash,
		nav = document.getElementsByTagName('nav')[0],
		navHeight  = parseInt(Helpers.style(nav, 'height'), 10);

	window.onscroll = function() {
		if(document.body.scrollTop >=  window.innerHeight - navHeight) {
			Helpers.removeClass(nav, 'bottom');
		} else {
			Helpers.addClass(nav, 'bottom');
		}
	};
})();