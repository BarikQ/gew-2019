$(document).ready(function () {
  $(function() {
    $('.lazy').Lazy();
  });

  $('.speaker').on('click', function(e) {
    let bg = $(this).children('.speaker__content-wrap').children('.speaker__image').css('background-image');
    let name = $(this).children('.speaker__content-wrap').children('.speaker__content').children('.speaker__content__inner').children('.speaker-name').html();
    let position = $(this).children('.speaker__content-wrap').children('.speaker__content').children('.speaker__content__inner').children('.speaker-review').html();
    let review = $(this).children('.speaker__content-wrap').children('.speaker__content').children('.speaker__content__inner').children('.speaker-text__inner').html();

    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");

    $('.speaker-image').attr('src', bg);
    $('.speaker-position').html(position);
    $('.speaker-modal-text__inner').html(review);

    if ($(e.target).hasClass('mentor-button') || ($(e.target).parent().hasClass('mentor-button'))) {
      name = `Я проголосовал за ${name}`;
      $('.speaker-modal-name').html(name);
      $(".modal-vote").fadeToggle('fast');
    } else {
      $('.speaker-modal-name').html(name);
      $(".modal-speaker").not('.modal-vote').fadeToggle('fast');
    }

  });

  $(".modal-speaker").bind("click", function (e) {
    e.preventDefault();
    if ($(e.target).attr("class") === "modal-container" ||
        $(e.target).attr('class') === 'close') {
      $(".modal-speaker").fadeOut('fast');
    }
  });
});