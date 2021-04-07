//-------------------
//* Nav
//-------------------

const header = $('#header-container');
const nav = $('nav');

function navResize() {
  let headerWidth = header.width();
  nav.css('width', headerWidth);
}

navResize();

$(window).resize(function(){
  navResize();
});

$(window).scroll(function(){
  if($(this).scrollTop()>25){
    nav.addClass('nav_fixed');
  }
  else if ($(this).scrollTop()<25){
    nav.removeClass('nav_fixed');
  }
});

//-------------------
//* OnLoad
//-------------------

$(window).on("load", function() {

  //-------------------
  //* Menu_Mobile
  //-------------------

  const bar = $('.menu-bar');
  const menuLinks = $('.links');
  navOffset = nav.offset().top;

  bar.click(function(e) {
    e.preventDefault();
    menuLinks.css('top', navOffset);
    menuLinks.addClass('links_mobile');
    // offset().top;
  });
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
