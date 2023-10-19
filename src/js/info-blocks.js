const turnInfoBlock = function() {
  this.querySelector('.block__front').classList.toggle('block__front--active');
  this.querySelector('.block__back').classList.toggle('block__back--active');
};

const getInfoBlocks = () => {
  if (document.querySelector('.info-blocks__item') !== null) {
    const blocks = document.querySelectorAll('.info-blocks__item');

    for (const block of blocks) {
      block.addEventListener('click', turnInfoBlock);
    }
  }
};

export { getInfoBlocks };

