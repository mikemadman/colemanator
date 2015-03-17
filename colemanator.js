/*! Colemanator - v1.1.1 - 2014-01-24
 * https://github.com/mikemadman/colemanator
 * Mike Coleman
 * Ekko Media
 * Copyright 2014 M3 Holdings; Licensed MIT
 * USAGE: <div class="colemanator" data-ct-click="myToggleClass" data-ct-hover="myToggleClass" data-ct-target="myTargetElement"></div>
 * data-ct-click is used to toggle specified class on click
 * data-ct-hover is used to toggle specified class on hover
 * data-ct-target is optional target element to apply the css class to. if no target class will be toggled on element.
 * test
 */

console.log('hola world 3');

[].forEach.call(
	document.querySelectorAll('.colemanator'),
	function(el) {

		if (el.hasAttribute('data-ct-click')) {
			el.addEventListener('click', function(e) {
				if (el.hasAttribute('data-ct-target')) {
					document.getElementById(el.getAttribute('data-ct-target')).classList.toggle(el.getAttribute('data-ct-click'));
				} else {
					el.classList.toggle(el.getAttribute('data-ct-click'));
				};

			});
		}

		if (el.hasAttribute('data-ct-hover')) {

			el.addEventListener('mouseenter', function(e) {
				if (el.hasAttribute('data-ct-target')) {
					document.getElementById(el.getAttribute('data-ct-target')).classList.add(el.getAttribute('data-ct-hover'));
				} else {
					el.classList.add(el.getAttribute('data-ct-hover'));
				}
			});

			el.addEventListener('mouseleave', function(e) {
				if (el.hasAttribute('data-ct-target')) {
					document.getElementById(el.getAttribute('data-ct-target')).classList.remove(el.getAttribute('data-ct-hover'));
				} else {
					el.classList.remove(el.getAttribute('data-ct-hover'));
				}
			});
		}
	}
);

// helloo