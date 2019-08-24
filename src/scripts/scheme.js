$(document).ready(function () {
  let target = null;

  $('.hover-card').hover(function(e) {
    console.log($(e.target).css('fill'));
    console.log($(`.${this.id}_card`).children('.place-info__inner').children('.day-button-container').css('border-top'));
    let bgColor = $(`.${this.id}_card`).children('.place-info__inner').children('.day-head');
    let button = $(`.${this.id}_card`).children('.place-info__inner').children('.day-button-container');

    bgColor.css('background', $(e.target).css('fill'));
    button.css('border-top', `2px solid ${$(e.target).css('fill')}`);

    $(`.${this.id}_card`).addClass( "hover" );

    target = 'card';
    $(`.${this.id}_card`).hover(function() {
      target = 'card';
    }, function() {
      target = null;
      removeHover(this);
    });

  }, function() {
    target = null;
    setTimeout(() => {
      if (target === null) {
        removeHover(`.${this.id}_card`);
      }
    }, 1);
  });

  $('.scheme__inner').on('click', (e) => {
    $(`.${this.id}_card`).addClass( "hover" );
  });

  function removeHover(hoverTarget) {
    $(hoverTarget).removeClass( "hover" );
  }
});