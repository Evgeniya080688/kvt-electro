const getAccordeon = () => {
  if (document.querySelector('.accordion') !== null) {
    const questEl = document.querySelectorAll('.accordion__quest');
    const questArr = Array.prototype.slice.call(questEl);
    const ansEl = document.querySelectorAll('.accordion__answer');
    const ansArr = Array.prototype.slice.call(ansEl);

    for (let i = 0; i < questArr.length; i++) {
      questArr[i].addEventListener('click', function() {
        questArr[i].classList.toggle('accordion__quest--active');
        ansArr[i].classList.toggle('accordion__answer--active');
      });
    }

  }
};

export { getAccordeon };
