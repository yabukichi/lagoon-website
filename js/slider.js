$(function () {
  $('.slick').on('init', function (event, slick) {
      $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
      $('.current').text(slick.currentSlide + 1);
      $('.total').text(slick.slideCount);
    })
    .slick({
      dots: true,
      centerPadding: '0',
      slidesToShow: 3,
      centerMode: false,
      responsive: [{
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow:2,
        }
      }]
    })

  .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });
  
});