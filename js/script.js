$(function() {
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

  counter();

  var forms = $('.needs-validation');
  forms.each(function() {
    $(this).on('submit', function(event) {
      event.preventDefault();
      if (this.checkValidity() === false) {
        event.stopPropagation();
      }
      $(this).addClass('was-validated');
    });
  });
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? $("#menu").hide() : $("#menu").show();

  setTimeout(() => {
    $("#menu").show();
  }, 100);
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-end shows') : menu.removeClass('offcanvas offcanvas-start');
}

const counter = () => {
  const counters = $('.counter-number');
  const speed = 400;

  counters.each(function() {
    const counter = $(this);
    const target = counter.data('count');
    let count = 0;

    const updateCount = function() {
      const increment = target / speed;
      count += increment;

      if (count < target) {
        counter.text(Math.ceil(count));
        setTimeout(updateCount, 1);
      } else {
        counter.text(target);
      }
    };

    const observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.unobserve(counter[0]);
      }
    }, { threshold: 0.5 });

    observer.observe(counter[0]);
  });
}