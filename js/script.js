$(function() {
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? $("#menu").hide() : $("#menu").show();

  setTimeout(() => {
    $("#menu").show();
  }, 100);
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-end shows') : menu.removeClass('offcanvas offcanvas-start');
}