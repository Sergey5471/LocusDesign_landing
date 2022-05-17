const burger = document.getElementById('burger');
const burgerClose = document.getElementById('burger-close');
const burgerOpen = document.getElementById('burger-open');

window.ontouchstart = function (event) {
	if (event.target == burgerOpen) {
		burger.classList.add('active');
	}
	if (event.target == burgerClose) {
		burger.classList.remove('active')
	}
}