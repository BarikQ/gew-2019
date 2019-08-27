$(document).ready(function () {
  let path='./src/images/speakers/';

  $('.radio-label').click(function() {
    const speakersLists = document.querySelectorAll('.speakers-list');
    const activeLabel = this.classList[1];

    speakersLists.forEach(elem => {
      if (elem.classList.contains('active-list')) elem.classList.remove('active-list');

      if (elem.classList.contains(activeLabel)) {
        const speakers = $('.speaker__image');

        speakers.each(function() {
          $(this).css({'background': $(this).attr('data-src'), 'background-size': 'cover'});
        });

        elem.classList.add('active-list');
      }
    });
  });
});