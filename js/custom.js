
// const MAIN_VISUAL_SLIDE = new Swiper('.main_visual_slide', {
//   loop: true,
//   parallax: true,
//   speed: 1000,

//   slideActiveClass: 'on',
// });

// const MAIN_VS_LEFT_BUTTON = document.querySelector('.MainVisual .main_slide_arrows .left');
// MAIN_VS_LEFT_BUTTON.addEventListener('click', () => {
//   MAIN_VISUAL_SLIDE.slidePrev();
// });

// const MAIN_VS_RIGHT_BUTTON = document.querySelector('.MainVisual .main_slide_arrows .right');
// MAIN_VS_RIGHT_BUTTON.addEventListener('click', () => {
//   MAIN_VISUAL_SLIDE.slideNext();
// });


$(function () {
  $('.MainVisual .main_visual_slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
});

$('.MainVisual .main_slide_arrows .left').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
});

$('.MainVisual .main_slide_arrows .right').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
});

$('.main_tab li').on('click', function (e) {
  e.preventDefault();
  const idx = $(this).index();
  $('.tab_content .content')
      .eq(idx)
      .addClass('on')
      .siblings()
      .removeClass('on');
  $(this)
      .addClass('on')
      .siblings()
      .removeClass('on');
});

})