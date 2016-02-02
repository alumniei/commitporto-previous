(function() {
	var hash = window.location.hash,
		nav = document.getElementsByTagName('nav')[0],
		navHeight  = nav.offsetHeight;

	window.onscroll = function() {
		if(document.body.scrollTop >=  window.innerHeight - navHeight) {
			Helpers.removeClass(nav, 'bottom');
		} else {
			Helpers.addClass(nav, 'bottom');
		} 
	};


})();

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
		};

	return {
		addClass: addClass,
		removeClass: removeClass
	}
}());

var Binds = new function () {

}