$(document).ready(function () {
  let path='./src/images/speakers/';

  $('.radio-label').click(function() {
    const speakersLists = document.querySelectorAll('.speakers-list');
    const activeLabel = this.classList[1];

    speakersLists.forEach(elem => {
      if (elem.classList.contains('active')) elem.classList.remove('active');

      if (elem.classList.contains(activeLabel)) {
        const speakers = elem.querySelectorAll('.speaker__image');
        console.log(speakers);

        speakers.forEach((elem, i) => {
          elem.style.background = `url('${path}${activeLabel}/sp-${i+1}.png')`;
          elem.style.backgroundSize = 'cover';
        });
        elem.classList.add('active');
      }
    });
  });
});