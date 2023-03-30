const getInfoBlocks = () => {
  if (document.querySelector('.info-blocks__item') !== null) {
    const blocks = document.querySelectorAll('.info-blocks__item');

    for (const block of blocks) {
      block.addEventListener('click', function() {
        block.querySelector('.block__front').classList.toggle('block__front--active');
        block.querySelector('.block__back').classList.toggle('block__back--active');
      });
    }
  }
};

export { getInfoBlocks };

