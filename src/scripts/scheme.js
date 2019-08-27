$(document).ready(function () {
  // let target = null;
  // let Xinner = null;
  // let Yinner = null;
  // let card = null;

  // $('.scheme-container').mousemove(function(e){
  //   var pos = $(this).offset();
  //   var elem_left = pos.left;
  //   var elem_top = pos.top;

  //   Xinner = e.pageX - elem_left;
  //   Yinner = e.pageY - elem_top;

  //   console.log(Xinner, Yinner);
  // });


  $('.hover-card').hover(function(e) {
    card = $(`.${this.id}_card`);
    $('.scheme-container');
    
    $(`#${this.id}`).children().css('fill-opacity', 0.8);


    console.log(e.clientX, e.clientY);
    card.css('top', e.clientY - 300);
    card.css('left', e.clientX);

    $('.place-info__container').each(function(index) {
      if ($(this).hasClass('hover')) {
        removeHover($(this));
      }
    });

    let bgColor = $(`.${this.id}_card`).children('.place-info__inner').children('.day-head');
    let button = $(`.${this.id}_card`).children('.place-info__inner').children('.day-button-container');

    bgColor.css('background', $(e.target).css('fill'));
    button.css('border-top', `2px solid ${$(e.target).css('fill')}`);
    button.hover(() =>{
      button.css('background', $(e.target).css('fill'));
    }, () => {
      button.css('background', 'white');
    });

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
    $(`#${this.id}`).children().css('fill-opacity', 1);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      removeHover(`.${this.id}_card`);
    }
  });

  function removeHover(hoverTarget) {
    $(hoverTarget).removeClass( "hover" );
    card = null;
  }
});