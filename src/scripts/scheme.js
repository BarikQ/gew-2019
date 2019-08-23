$(document).ready(function () {
  let target = null;

  $('.g52').hover(function() {
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
    }, 1000);
  });

  function removeHover(hoverTarget) {
    $(hoverTarget).removeClass( "hover" );
  }
});