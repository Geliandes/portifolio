function sectionSelect(selection) {

	var selectors = document.querySelectorAll(".line");

	for (let i = 0; i < selectors.length; i++) {
		selectors[i].classList.remove('selected')
	}

	selectors[selection].classList.add('selected')


}

$(function() {
	var area1 = $('#firstSelector').offset().top - $(window).height();
	var area2 = $('#secondSelector').offset().top - $(window).height();
	var area3 = $('#thirdSelector').offset().top - $(window).height();
	var area4 = $('#fourthSeclector').offset().top - $(window).height();

	var selectors = document.querySelectorAll(".line");

	$(window).scroll(function() {
		if ($(window).scrollTop() > area1) {

			for (let i = 0; i < selectors.length; i++) {
				selectors[i].classList.remove('selected')
			}
			selectors[0].classList.add('selected')
		}

		if ($(window).scrollTop() > area2) {

			for (let i = 0; i < selectors.length; i++) {
				selectors[i].classList.remove('selected')
			}

			selectors[1].classList.add('selected')
		}

		if ($(window).scrollTop() > area3) {

			for (let i = 0; i < selectors.length; i++) {
				selectors[i].classList.remove('selected')
			}
			selectors[2].classList.add('selected')
		}

		if ($(window).scrollTop() > area4) {

			for (let i = 0; i < selectors.length; i++) {
				selectors[i].classList.remove('selected')
			}
			selectors[3].classList.add('selected')
		}

	});
});