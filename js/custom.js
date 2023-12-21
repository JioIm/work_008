const MAIN_SLIDE = new Swiper('.main_visual_slide', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

$(function () {
  $('.event_tab li').on('click', function (e) {
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