//-------------------
//* Nav
//-------------------

const header = $('#header-container');
const nav = $('nav');
let navHeight = nav.height();

function navResize() {
  let headerWidth = header.width();
  nav.css('width', headerWidth);
}

navResize();

$(window).resize(function() {
  navResize();
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 25) {
    nav.addClass('nav_fixed');
  } else if ($(this).scrollTop() < 25) {
    nav.removeClass('nav_fixed');
  }
  // navOffset = nav.offset().top;
  navHeight = nav.height();
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
  const menuLink = $('.link');


  bar.click(function(e) {
    e.preventDefault();
    menuLinks.css('top', navHeight);
    menuLinks.toggleClass('links_mobile');
    nav.toggleClass('nav_open');
    // offset().top;
  });

  menuLink.click(function() {
    menuLinks.removeClass('links_mobile');
    nav.removeClass('nav_open');
  });

  //-------------------
  //* Fotorama
  //-------------------
  $(function() {
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
      $('html, body').animate({
        scrollTop: stop - 49 + 'px'
      }, delay);
    });
  });

  //-------------------
  //* Phone Mask
  //-------------------

  // $('input[name="phone"]').inputmask({"mask": "+7(999) 999-9999"});

  //-------------------
  //* SmoothScroll
  //-------------------
  SmoothScroll({
    stepSize: 40
  });

  /* ---------------------------------------------- /*
         * Request PopUp
    /* ---------------------------------------------- */

  $('#callToMe').magnificPopup({
    items: {
      src: $('#requestPopUp'),
      type: 'inline',
    },
    preloader: false,
    showCloseBtn: false,
    autoFocusLast: true,
    fixedContentPos: false,
  });

  /* ---------------------------------------------- /*
         * Request PopUp
    /* ---------------------------------------------- */

  $('.order-btn').magnificPopup({
    items: {
      src: $('#requestPopUp'),
      type: 'inline',
    },
    preloader: false,
    showCloseBtn: false,
    autoFocusLast: true,
    fixedContentPos: false,
  });

  /* ---------------------------------------------- /*
       * PopUp close
  /* ---------------------------------------------- */

  $('.popUp__close').on('click', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


});
