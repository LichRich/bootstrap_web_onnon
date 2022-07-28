$('#tablist li').click(function(e) {
  e.preventDefault();
  $('.masonry-container').masonry({
      itemSelector: '.cards'
  });
});

$('.carousel-indicators button').click(function(e) {
  e.preventDefault();
  $('.masonry-container').masonry({
      itemSelector: '.cards'
  });
});

/* ---------------------------------------------- /*
 * Scroll
/* ---------------------------------------------- */
jQuery(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $('.scroll-up').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });

    $('.nav-items-go').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:$($(this).data('linkValue')).offset().top-$('#top-navbar').height()}, 0);
    });
});