$(document).ready(function () {
  // VARIBALES
  var body = $('#body');
  var close = $('#close');
  var open = $('#open');
  var navUl = $('#navul');
  var socialMedia = $('#social-media');
  var lightBox = $('#light-box');
  var nav = $('#nav');
  var card01 = $('#card-01');
  var card02 = $('#card-02');
  var card03 = $('#card-03');
  var move01 = $('#card-01').find('p');
  var move02 = $('#card-02').find('p');
  var move03 = $('#card-03').find('p');
  var aboutBtn = $('#about-btn');
  var para = $('.para');

  // MOBILE-NAV-OPEN-AND-CLOSE
  open.click(function (e) {
    e.preventDefault();
    $(this).css('display', 'none');
    close.css('display', 'flex');
    navUl.css('display', 'grid');
    lightBox.css('display', 'block');
    nav.css('height', '100vh');
    body.css('overflow', 'hidden');
  });

  close.click(function (e) {
    e.preventDefault();
    $(this).css('display', 'none');
    open.css('display', 'flex');
    navUl.css('display', 'none');
    lightBox.css('display', 'none');
    nav.css('height', 'auto');
    body.css('overflow', 'auto');
  });

  // HOME-PAGE-CARDS-HOVER-EFFECT-AND-SLIDE EFFECT
  card01.hover(
    function () {
      move01.stop().stop().slideUp();
      $(this).find('button').stop().show(0);
    },
    function () {
      move01.stop().stop().slideDown();
      $(this).find('button').stop().hide();
    }
  );

  card02.hover(
    function () {
      move02.stop().slideUp();
      $(this).find('button').stop().show(0);
    },
    function () {
      move02.stop().slideDown();
      $(this).find('button').stop().hide();
    }
  );

  card03.hover(
    function () {
      move03.stop().slideUp();
      $(this).stop().find('button').show(0);
    },
    function () {
      move03.stop().slideDown();
      $(this).find('button').stop().hide();
    }
  );

  // ABOUT-ARTIST-FACTS-HOVER-EFFECT
  $('.table-facts').hover(
    function () {
      $('.box').css('display', 'block');
      $(this).css('cursor', 'pointer');
      $(this).css('color', '#FFEAA7');
      $(this).css('box-shadow', 'none');
    },
    function () {
      $('.box').css('display', 'none');
      $(this).css('color', '#fff');
      $(this).css('box-shadow', 'rgb(255 255 255 / 80%) 0px 5px 15px');
    }
  );

  // ABOUT-ARTIST-BUTTON-HOVER-EFFECT
  aboutBtn.hover(
    function () {
      para.find('p').addClass('test');
      console.log('toggle success');
    },
    function () {
      para.find('p').removeClass('test');
    }
  );
});

// CAROUSEL
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = $('.slide');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 2000);
}
