//Loader

var win_width = $(window).width();


$(window).on('load', function() {
  setTimeout(removeLoader, 1000); //wait for page load PLUS one seconds.
});

function removeLoader() {
  $("#store_loadingDiv").fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $("#store_loadingDiv").remove(); //makes page more lightweight 
    $('body').removeClass('store_loaded');
  });
}

$(window).on('load', function() {
  //alert('window laod');
  var win_height = $(window).height();
  var header_height = $('header').outerHeight();
  var footer_height = $('footer').outerHeight();
  $('.main').css('min-height', win_height - header_height - footer_height);
  $('.header_height').css('padding-top', header_height);

  /*Filter isotop Gallery js
  var $container = $('.portfolioContainer');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.portfolioFilter a').click(function(){
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
*/

});

$(document).ready(function() {
  //$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
  // Scroll Event
  var winwidth = jQuery(window).width();
  var menu_h = $('.store__header').outerHeight();
  $('.store_header--height').css('height', menu_h);
  $(window).scroll(function() {
    var winscroll = $(window).scrollTop();
    if (winscroll > menu_h) {
      $('.store__header').addClass('header_fixed');
    } else {
      $('.store__header').removeClass('header_fixed');
    }

  });

  /*Menu Scroll js*/
  $(".munenav>li>a").click(function() {
    $(".hamburgermenu").toggleClass("open");
    $(".fullmenu").toggleClass("d-flex");
  });

  /*Menu Icon js*/
  $(".hamburgermenu").click(function() {
    $(this).toggleClass("open");
    $(".fullmenu").toggleClass("d-flex");
  });

  //alert('document laod');
  $(".menu-bar>button").click(function() {
    $(".store__header").toggleClass("mobile-nav");
  });


  jQuery('.dropdown-menu.keep-open').on('click', function(e) {
    e.stopPropagation();
  });


  // $('#testimonial-slider').owlCarousel({   
  //     items:1, 
  //     loop:true,
  //     // responsiveClass:true,
  //     nav: true,
  //     navText: [
  //       "<i class='fa fa-caret-left'></i>",
  //       "<i class='fa fa-caret-right'></i>"
  //     ],
  //     smartSpeed:450,
  //     autoplay: true,
  //     autoplayHoverPause: true,
  //     autoHeight:true
  // });





  // $('.loopwithcenter').owlCarousel({
  //   center: true,
  //   items:1,
  //   autoplay:true,
  //   loop:true,
  //   margin:10,
  //   nav: false,
  //   navText: [
  //   "<i class='fa fa-caret-left'></i>",
  //   "<i class='fa fa-caret-right'></i>"
  // ],
  //   responsive:{
  //       600:{
  //           items:1
  //       }
  //   }
  // });




  $('#shop-slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    loop: true,
    mouseDrag: false,
    dots: true,
    responsiveClass: true,
    nav: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    smartSpeed: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true
  });


  $('.items-slider').owlCarousel({
    items: 4,
    margin: 24,
    loop: false,
    nav: false,
    dots: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    smartSpeed: 450,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4
      }
    }
  });


  $('#itemgallery-slider').owlCarousel({
    items: 5,
    margin: 5,
    loop: false,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    smartSpeed: 450,
    autoplay: false,
    autoHeight: true,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 5
      }
    }
  });


  //Increament Decreament functionality
  var incrementPlus;
  var incrementMinus;

  var buttonPlus = $(".item__quantity--add");
  var buttonMinus = $(".item__quantity--minus");

  var incrementPlus = buttonPlus.click(function() {
    var $n = $(".quantity__input");
    $n.val(Number($n.val()) + 1);
  });

  var incrementMinus = buttonMinus.click(function() {
    var $n = $(".quantity__input");
    var amount = Number($n.val());
    if (amount > 1) {
      $n.val(amount - 1);
    }
  });


  //Checkout stepper
  if ($('.checkout-circle.circle__2').hasClass('active')) {
    $('#progress').css({ 'width': '50%' });
  }
  if ($('.checkout-circle.circle__3').hasClass('active')) {
    $('#progress').css({ 'width': '100%' });
  }

  //Toggle active add new address shipping address
  $('.checkout__shipping--form').hide();
  $('.checkout__shipping--new').on('click', function() {
    $(this).toggleClass('active');
    $('.checkout__shipping--form').slideToggle();
  })

  //Slide billing address on radio checked 
  $('.checkout__different--form').hide();
  $("input[name='radio-billing']").click(function() {
    if ($("#radioBillingDiff").is(":checked")) {
      $(".checkout__different--form").slideDown();
    } else {
      $(".checkout__different--form").slideUp();
    }
  });

  //Cart option
  $('.radio-basket').hide();

  $("input[name='radio-basket']").click(function() {
    if ($("#radioSaveCurrentBasket").is(":checked")) {
      $('.radioDeleteSavedBasket').slideUp();
      $(".radioRestoreSavedBasket").slideUp();
      $(".radioSaveCurrentBasket").slideDown();

    } else if ($("#radioDeleteSavedBasket").is(":checked")) {
      $(".radioSaveCurrentBasket").slideUp();
      $(".radioRestoreSavedBasket").slideUp();
      $(".radioDeleteSavedBasket").slideDown();

    } else if ($("#radioRestoreSavedBasket").is(":checked")) {
      $(".radioSaveCurrentBasket").slideUp();
      $(".radioDeleteSavedBasket").slideUp();
      $(".radioRestoreSavedBasket").slideDown();
    }
  });


  //initiate the plugin and pass the id of the div containing gallery images
  $("#img_01").elevateZoom({
    zoomType: "inner",
    gallery: 'gal1',
    cursor: 'pointer',
    galleryActiveClass: 'active',
    imageCrossfade: true,
  });

  //pass the images to Fancybox
  $("#img_01").bind("click", function(e) {
    var ez = $('#img_01').data('elevateZoom');
    $.fancybox(ez.getGalleryList());
    return false;
  });


  //Lottie Anim
  // var params1 = {
  //   container: document.getElementById('svgContainer1'), // the dom element that will contain the animation
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: 'http://localhost/StoreBuilder_BaseStore/store_wizard/js/2.json' // the path to the animation json
  // };
  // var anim1;
  // anim1 = lottie.loadAnimation(params1);

  // var params2 = {
  //   container: document.getElementById('svgContainer2'), // the dom element that will contain the animation
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: 'http://localhost/StoreBuilder_BaseStore/store_wizard/js/1.json' // the path to the animation json
  // };
  // var anim2;
  // anim2 = lottie.loadAnimation(params2);


  // var params3 = {
  //   container: document.getElementById('svgContainer3'), // the dom element that will contain the animation
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: 'http://localhost/StoreBuilder_BaseStore/store_wizard/js/4.json' // the path to the animation json
  // };
  // var anim3;
  // anim3 = lottie.loadAnimation(params3);


  // var params4 = {
  //   container: document.getElementById('svgContainer4'), // the dom element that will contain the animation
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: 'http://localhost/StoreBuilder_BaseStore/store_wizard/js/4.json' // the path to the animation json
  // };
  // var anim4;
  // anim4 = lottie.loadAnimation(params4);


  // var params5 = {
  //   container: document.getElementById('svgContainer5'), // the dom element that will contain the animation
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: 'http://localhost/StoreBuilder_BaseStore/store_wizard/js/thanks.json' // the path to the animation json
  // };
  // var params5;
  // anim4 = lottie.loadAnimation(params5);



});