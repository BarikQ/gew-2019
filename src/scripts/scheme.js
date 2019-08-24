$(document).ready(function () {
  let target = null;

  $('.hover-card').hover(function(e) {
    console.log(e.target.id);
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
    console.log(e.target.id);
    $(`.${this.id}_card`).addClass( "hover" );
  });

  function removeHover(hoverTarget) {
    $(hoverTarget).removeClass( "hover" );
  }
});