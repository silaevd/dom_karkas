//-------------------
//* Nav
//-------------------

function navResize() {
  const header = $('header');
  const nav = $('nav');
  let headerWidth = header.width();
  nav.css('width', headerWidth);
}

navResize();

$(window).resize(function(){
  navResize();
  console.log(headerWidth);
});

$(window).scroll(function(){
  if($(this).scrollTop()>25){
    $('nav').addClass('nav_fixed');
  }
  else if ($(this).scrollTop()<25){
    $('nav').removeClass('nav_fixed');
  }
});

//-------------------
//* OnLoad
//-------------------

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
      $('html, body').animate({scrollTop: stop - 49 +'px'}, delay);
    });
  });

  //-------------------
  //* Phone Mask
  //-------------------

  // $('input[name="phone"]').inputmask({"mask": "+7(999) 999-9999"});

  //-------------------
  //* SmoothScroll
  //-------------------
  SmoothScroll({ stepSize: 40 });

});
