$(window).on("load", function() {

  //-------------------
  //* Fotorama
  //-------------------
  $(function () {
    $('.images').fotorama();
  });

  //-------------------
  //* ScrollToId
  //-------------------

  $(function() {
    $('a[href^="#"]').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      var stop = $(target).offset().top;
      var delay = 1000;
      $('html, body').animate({scrollTop: stop + 'px'}, delay);
    });
  });

  SmoothScroll({ stepSize: 40 });

});
