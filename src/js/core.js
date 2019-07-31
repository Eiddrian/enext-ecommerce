$(document).ready(function () {

  $('.btn-menu').on('click', () => {
    $('nav').addClass('on');
    $('body').addClass('noScroll');
  });

  $('.close-nav').on('click', () => {
    $('nav').removeClass('on');
    $('body').removeClass('noScroll');
  });
});