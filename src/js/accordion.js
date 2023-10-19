const toggleClassActive = (itemHeader, itemArea) => {
  itemHeader.classList.toggle('accordion__quest--active');
  itemArea.classList.toggle('accordion__answer--active');
};

const getAccordeon = () => {
  if (document.querySelector('.accordion') !== null) {
    const questEl = document.querySelectorAll('.accordion__quest');
    const questArr = Array.prototype.slice.call(questEl);
    const ansEl = document.querySelectorAll('.accordion__answer');
    const ansArr = Array.prototype.slice.call(ansEl);

    for (let i = 0; i < questArr.length; i++) {
      questArr[i].addEventListener('click', () => {
        toggleClassActive(questArr[i],ansArr[i]);
      });
    }
  }
};

export { getAccordeon };
