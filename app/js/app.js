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
    menuLinks.css('top', navHeight -1);
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
  * CallMe PopUp
  /* ---------------------------------------------- */

  $('.callToMe').magnificPopup({

    items: {
      src: $('#callMePopUp'),
      type: 'inline',
    },
    preloader: false,
    showCloseBtn: false,
    autoFocusLast: true,
    fixedContentPos: false,
  });

  /* ---------------------------------------------- /*
  * Goods PopUp
  /* ---------------------------------------------- */

  $('.project').click(function() {

    const dataName = this.getAttribute('data-name');
    const title = this.querySelector('.project-title h3').textContent;
    const price = this.querySelector('.project-price').textContent;
    const desc = this.querySelector('.project-info').innerHTML;
    const popUp = document.querySelector('.goodsPopUp');
    const imgList = [{
      img: './images/goods/' + dataName + '/1.jpg'
    },
    {
      img: './images/goods/' + dataName + '/2.jpg'
    },
    {
      img: './images/goods/' + dataName + '/3.jpg'
    },
    {
      img: './images/goods/' + dataName + '/4.jpg'
    },
    {
      img: './images/goods/' + dataName + '/5.jpg'
    },
    {
      img: './images/goods/' + dataName + '/6.jpg'
    },
    {
      img: './images/goods/' + dataName + '/7.jpg'
    },
    {
      img: './images/goods/' + dataName + '/8.jpg'
    },
    {
      img: './images/goods/' + dataName + '/9.jpg'
    },
    {
      img: './images/goods/' + dataName + '/10.jpg'
    },
    {
      img: './images/goods/' + dataName + '/11.jpg'
    },
    {
      img: './images/goods/' + dataName + '/12.jpg'
    },
    {
      img: './images/goods/' + dataName + '/13.jpg'
    },
    {
      img: './images/goods/' + dataName + '/14.jpg'
    },
    {
      img: './images/goods/' + dataName + '/15.jpg'
    },
  ];

  popUp.querySelector('.goodsPopUp__title').textContent = title;
  popUp.querySelector('input[name="project_name"]').setAttribute('value', title);
  popUp.querySelector('.goodsPopUp__desc').innerHTML = desc;
  popUp.querySelector('.goodsPopUp__price').querySelector('.highlight').textContent = price;
  popUp.querySelector('.goodsPopUp__cover').innerHTML = '<div id="fotorama" class="fotorama" data-auto="false"></div>';

  $('#fotorama').fotorama({
    nav: 'thumbs',
    allowfullscreen: 'true',
    arrows: 'true',
    // click: 'true',
    loop: 'true',
    thumbwidth: '110',
    thumbheight: '60',
    width: '100%',
    height: 'auto',
    maxheight: '377',
    data: imgList
  });

});

$('.project').magnificPopup({
  items: {
    src: $('#goodsPopUp'),
    type: 'inline'
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

/* ---------------------------------------------- /*
* Form submit
/* ---------------------------------------------- */

$('form').on('submit', function () {

  const form = $(this);
  const submitBtn = form.find('button[type="submit"]');

  $.ajax({
    type: "POST",
    url: "mail.php",
    data: form.serialize()
  }).done(function() {
    $.magnificPopup.open({
      items: {
        src: $('#thankyouPopUp'),
        type: 'inline',
      },
      preloader: false,
      showCloseBtn: false,

    });
    setTimeout(function() {
      // Done Functions
      form.trigger("reset");
      $.magnificPopup.close();
    }, 4000);
  });
  return false;
});



});
