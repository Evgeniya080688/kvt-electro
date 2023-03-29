const getInfoBlocks = () => {
  if (document.querySelector('.info-blocks__item') !== null) {
    let blocks = document.querySelectorAll('.info-blocks__item');

    for(let block of blocks) {
      block.addEventListener( "click", function(e) {
        block.querySelector('.block__front').classList.toggle('block__front--active');
        block.querySelector('.block__back').classList.toggle('block__back--active');
      });
    }
  }
}

export {getInfoBlocks};

