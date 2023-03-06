const getAccordeon = () => {
	if (document.querySelector('.accordion') !== null) {
		let questEl = document.querySelectorAll('.accordion__quest');
		let questArr = Array.prototype.slice.call(questEl);
		let ansEl = document.querySelectorAll('.accordion__answer');
		let ansArr = Array.prototype.slice.call(ansEl);

		for (let i=0; i<questArr.length; i++) {
			questArr[i].addEventListener( "click", function(e) {
				questArr[i].classList.toggle('accordion__quest--active');
				ansArr[i].classList.toggle('accordion__answer--active');
			});
		}

	}
}

export {getAccordeon};
