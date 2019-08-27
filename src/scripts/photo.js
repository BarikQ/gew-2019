(function($) {
  if ($( window ).width() < 1000) {
    $('.hotel-link').attr({'data-height': Math.floor($( window ).height() * 0.7), 'data-width': Math.floor($( window ).width() * 1)});
  } else {
    $('.hotel-link').attr({'data-height': Math.floor($( window ).height() * 0.9), 'data-width': Math.floor($( window ).width() * 0.9)});
  }
  

  // Init empty gallery array
  var container = [];

  // Loop over gallery items and push it to the array
  $('.hotel-slider').find('figure').each(function() {
    var $link = $(this).find('a'),
      item = {
        src: $link.attr('href'),
        w: $link.data('width'),
        h: $link.data('height'),
        title: $link.data('caption')
      };
    container.push(item);
  });

  // Define click event on gallery item
  $('.hotel-image').click(function(event) {

    // Prevent location change
    event.preventDefault();

    // Define object and gallery options
    var $pswp = $('.pswp')[0],
      options = {
        index: $(this).parent('figure').index(),
        bgOpacity: 0.2,
        showHideOpacity: true
      };

    // Initialize PhotoSwipe
    var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
    gallery.init();
  });

}(jQuery));

// $(document).ready(function() {
// 	$('.popup-gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 			}
// 		}
// 	});
// });