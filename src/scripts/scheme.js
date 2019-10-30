$(document).ready(function () {
  let Xinner = null;
  let Yinner = null;

  $('.hover-card').hover(function(e) {
    $('.scheme-content').off();
    let cardClass = `${this.id}_card`;
    let check = false;

    $('.place-info__container').each(function() {

      if ($(this).hasClass(`${cardClass}`) && $(this).hasClass('hover')) {
        check = true;
        return false;
      } else check = false;
      if ($(this).hasClass('hover')) {
        removeHover(this);
      }
    });

    $('.scheme-content').on('mousemove', function(e) {
      Xinner = e.pageX - $(this).offset().left;
      Yinner = e.pageY - $(this).offset().top - 340;
    });

    card = $(`.${cardClass}`);
    
    $(`.${this.id}`).each(function(e) {
      $(this).children().css('fill-opacity', 0.8);
    });

    if (!check) {
      if (this.id == 'g44' || this.id == 'g48')  {
        card.css('left', Xinner - $(card).width());
      } else {
        card.css('left', Xinner);
      }
      card.css('top', Yinner);
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      card.css('left', '50%');
      card.css('top', '25%');
    }

    $('.place-info__container').each(function(index) {
      if ($(this).hasClass('hover')) {
        removeHover($(this));
      }
    });

    let bgColor = $(`.${this.id}_card`).children('.place-info__inner').children('.day-head');
    let button = $(`.${this.id}_card`).children('.place-info__inner').children('.day-button-container');

    bgColor.css('background', $(e.target).css('fill'));
    button.css('border-top', `1px solid ${$(e.target).css('fill')}`);
    button.hover(() =>{
      button.css('background', $(e.target).css('fill'));
    }, () => {
      button.css('background', 'white');
    });

    $(`.${this.id}_card`).addClass( "hover" );

  }, function(e) {
    $(`.${this.id}`).each(function(e) {
      $(this).children().css('fill-opacity', 1);
    });

    let time = setTimeout(() => {
      
      removeHover(card);
    }, 4000);

    $(`.${this.id}_card`).hover(function() {
      clearTimeout(time);
    }, function() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        clearTimeout(time);
        return false;
      } else removeHover(this);
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      clearTimeout(time);
      setTimeout(() => {
        removeHover(`.${this.id}_card`);
      }, 100);
    }
  });

  function removeHover(hoverTarget) {
    $(hoverTarget).removeClass( "hover" );
    card = null;
  }
});