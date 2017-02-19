$(document).ready(function(){

  /// search list games ///

  $('#s').keyup(function(){
   var valThis = $(this).val().toLowerCase();
    $('.s-games>li').each(function(){
     var text = $(this).text().toLowerCase();
        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300){ //use `this`, not `document`
      $('.submenu').fadeOut(250);
      $('.menu-toggles').removeClass('toggle-active'); 
    }
  });

  /// search list games ///



  ///  menu toggles  ///

  $('#games-toggle').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('toggle-active');
    $('#search-list').slideToggle(150);
    if ($('#comingSoon-submenu').is(':visible')){
      $('#comingSoon-submenu').slideUp(150);
      $('#comingSoon-toggle').removeClass('toggle-active');
    }
  })

  $('#comingSoon-toggle').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('toggle-active');
    $('#comingSoon-submenu').slideToggle(150);
    if ($('#search-list').is(':visible')){
      $('#search-list').slideToggle(150);
      $('#games-toggle').removeClass('toggle-active');
    }
  })

  $('.menu-toggles').on('click', function(){
    if ($('.cart-details').is(':visible')){
      $('.cart-details').slideUp(150);
      $('.cart').removeClass('cart-active');
      $('.basket').attr('src','images/shoppingCart2.png');
      $('#count').css('color','#e9e9e9');
    }
  })

  /// menu toggles  ///


///   Cart   ///

  $('.basket').on('click',function(){
    $('#count').css('color','#000');
    $('.cart-details').slideToggle(150);
    $('.cart').toggleClass('cart-active');
      if ($('.cart').hasClass('cart-active')){
        $('.basket').attr('src','images/shoppingCart1.png');
      }
      else {
        $('.basket').attr('src','images/shoppingCart2.png');
        $('#count').css('color','#e9e9e9');
      }

      if ($('.submenu').is(':visible')){
        $('.submenu').slideUp(150);
        $('.menu-toggles').removeClass('toggle-active');
      }
  })

  $('.content-left').hover(function(){
    $(this).addClass('active');  
    },
    function(){
      $(this).removeClass('active');
  });

///   Cart   ///



///   Slider   ///

  $('.arrow-next').click(function(e) {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if (nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(600).removeClass('active-slide')
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    e.preventDefault();
  });


  $('.arrow-prev').click(function(e) {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if (prevSlide.length === 0) {
      prevSlide = $('.slide').last();
	    prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(600).removeClass('active-slide')
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
    e.preventDefault();
  });	

  ///   Slider   ///



///// Clickable Bullets /////

  $('#b1').click(function() {               ///// Bullet#1 /////
    var currentSlide = $('.active-slide');
    var firstSlide = $('.slide').first();
    var currentDot = $('.active-dot');
    var firstDot = $('.dot').first();

    currentSlide.fadeOut(600).removeClass('active-slide')    
    firstSlide.fadeIn(600).addClass('active-slide')
    currentDot.removeClass('active-dot')
    firstDot.addClass('active-dot')
  });

  $('#b2').click(function() {              ///// Bullet#2 /////
    var currentSlide = $('.active-slide')
    var secondSlide = $('.slide').eq(1);
    var currentDot = $('.active-dot');
    var secondDot = $('.dot').eq(1)
    
    currentSlide.fadeOut(600).removeClass('active-slide')
    secondSlide.fadeIn(600).addClass('active-slide')
    currentDot.removeClass('active-dot')
    secondDot.addClass('active-dot')
  });

  $('#b3').click(function() {                ///// Bullet#3 /////
    var currentSlide = $('.active-slide')
    var thirdSlide = $('.slide').eq(2);
    var currentDot = $('.active-dot');
    var thirdDot = $('.dot').eq(2)
    
    currentSlide.fadeOut(600).removeClass('active-slide')
    thirdSlide.fadeIn(600).addClass('active-slide')
    currentDot.removeClass('active-dot')
    thirdDot.addClass('active-dot')
  });

  $('#b4').click(function() {                  ///// Bullet#4 /////
    var currentSlide = $('.active-slide');
    var fourthSlide = $('.slide').eq(3);
    var currentDot = $('.active-dot');
    var fourthDot = $('.dot').eq(3)
    
    currentSlide.fadeOut(600).removeClass('active-slide')
    fourthSlide.fadeIn(600).addClass('active-slide')
    currentDot.removeClass('active-dot')
    fourthDot.addClass('active-dot')
  });


  $('#b5').click(function() {                 ///// Bullet#4 /////
    var currentSlide = $('.active-slide');
    var lastSlide = $('.slide').last();
    var currentDot = $('.active-dot');
    var lastDot = $('.dot').last();
    
    currentSlide.fadeOut(600).removeClass('active-slide')
    lastSlide.fadeIn(600).addClass('active-slide')
    currentDot.removeClass('active-dot')
    lastDot.addClass('active-dot')
  });

///// Clickable Bullets /////



		// Filter //

  $(".filter-options :checkbox").click(function(){
    $(".gamesContent .game li a").hide();

      var genres = [];
      var platforms = [];
      var publishers = [];
      var year = [];
      var price = [];

    $("#genre-filters :checkbox:checked").each(function(){
      genres.push($(this).val());
    });

    $("#platform-filters :checkbox:checked").each(function(){
      platforms.push($(this).val());
    });

    $("#publisher-filters :checkbox:checked").each(function(){
      publishers.push($(this).val());
    });

    $("#year-filters :checkbox:checked").each(function(){
      year.push($(this).val());
    });

    $("#price-filters :checkbox:checked").each(function(){
      price.push($(this).val());
    });

    $(".gamesContent .game li a").filter(function(index){

      var game = $(this);
      var hasGenre = false;
      var hasPlatform = false;
      var hasPublisher = false;
      var hasYear = false;
      var hasPrice = false;

      if (genres.length > 0){
        $.each(genres, function(index, genre){
          if (game.hasClass(genre)) hasGenre = true;
        });
      }
      else {
        hasGenre = true
      }

      if (platforms.length > 0){
        $.each(platforms, function(index, platform){
          if (game.hasClass(platform)) hasPlatform = true;
        });
      }
      else {
        hasPlatform = true
      }

      if (publishers.length > 0){
        $.each(publishers, function(index, publisher){
          if (game.hasClass(publisher)) hasPublisher = true;
        });
      }
      else {
        hasPublisher = true
      }

      if (year.length > 0){
        $.each(year, function(index, yr){
          if (game.hasClass(yr)) hasYear = true;
        });
      }
      else {
        hasYear = true
      }

      if (price.length > 0){
        $.each(price, function(index, pricing){
          if (game.hasClass(pricing)) hasPrice = true;
        });
      }
      else {
        hasPrice = true
      }

      return hasGenre && hasPlatform && hasPublisher && hasYear & hasPrice;
    }).fadeIn();

    if ($('.filter-options :checkbox').filter(':checked').length == 0){
      $(".gamesContent .game li").fadeIn();
    }

  });


  $('#category').on('click',function(){
     $('#genre-filters').slideToggle(120, function(){
      if ($(this).is(':visible')) {
        $('#genre').attr('src', 'images/close_round.png');
      } else {
        $('#genre').attr('src', 'images/open_round.png');
      }
    });
  })

  $('#platform').on('click',function(){
     $('#platform-filters').slideToggle(120, function(){
      if ($(this).is(':visible')) {
        $('#systems').attr('src', 'images/close_round.png');
      } else {
        $('#systems').attr('src', 'images/open_round.png');
      }
    });
   })

  $('#publisher').on('click',function(){
   $('#publisher-filters').slideToggle(120, function(){
    if ($(this).is(':visible')) {
     $('#publish').attr('src', 'images/close_round.png');
    } else {
     $('#publish').attr('src', 'images/open_round.png');
    }
   });
  })

  $('#year').on('click',function(){
   $('#year-filters').slideToggle(120, function(){
    if ($(this).is(':visible')) {
     $('#yr_release').attr('src', 'images/close_round.png');
    } else {
     $('#yr_release').attr('src', 'images/open_round.png');
    }
   });
  })

$('#price').on('click',function(){
   $('#price-filters').slideToggle(120, function(){
    if ($(this).is(':visible')) {
     $('#pricing').attr('src', 'images/close_round.png');
    } else {
     $('#pricing').attr('src', 'images/open_round.png');
    }
   });
  })


  $('#reset').on('click',function(){
   $('.filter-options :checkbox').prop('checked', false);
    $(".gamesContent .game li a").fadeIn(); 
  })

		// Filter //



    /// Overlay & Popups ///

  $('.showpopup').click(function(e){
    e.preventDefault();
    var docHeight = $(document).height();
    var scrollTop = $(document).scrollTop();
    var selectedPopup = $(this).data('showpopup');

    $('.overlay-bg').show().css({'height': docHeight});
    $('.popup'+selectedPopup).fadeIn(500).css({'top':'200px'});


    if ($('.cart').hasClass('cart-active')){
      $('.cart').removeClass('cart-active');
      $('.basket').attr('src','images/shoppingCart2.png');
      $('#count').css('color','#e9e9e9');
    }

    if ($('.cart-details').is(':visible')){
      $('.cart-details').slideUp(150);
    }
  });


  $('.popupCloseBtn, .overlay-bg').click(function(){
    $('.overlay-bg, .popupContainer').fadeOut(300);	
  });

  $(document).keyup(function(e){
    if (e.keyCode == 27) {
      $('.overlay-bg, .popupContainer').fadeOut(300);
    }
  });

  /// Overlay & Popups ///



  ///  BUY  ///

  $('.buy').on('click', function(){

    $('.overlay-bg, .popupContainer').fadeOut(300); 

    var num = $("#table").find("tr").length;
    $('#count').html(num);

    var el = $('#count');
    el.animate({opacity:'1', fontSize:'22px'},200).delay(2000);
    el.animate({opacity:'0.6', fontSize:'15px'},200);

    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = $(this).parent('.popupContent').find('.popupContentTitle>.gametitle').html();
    cell2.innerHTML =  $(this).parent('.popupContent').find('.popupPrice>.gameprice').html();
    cell3.innerHTML = "<img class='remove' src='images/trashbin.png'>";

    var sum = 0;

    $("#table tr:gt(0) td:nth-child(2)").each(function(){
      $(this).addClass('totalprice');
    })

    $('.totalprice').each(function(){
      sum += parseInt($(this).html());
    })

    var nextRow = $('#table tr:gt(0)');

    $('#total').html('Total '+sum+'$');
  
    $('.remove').on('click',function(){
      
      var num = $("#table").find("tr:gt(0)").length;

      $('#count').html(num);

      $(this).parents('tr').remove();

      var newSum=0;

      $('.totalprice').each(function(){
       newSum += parseInt($(this).html()); 
      })

        sum = newSum;

      if (nextRow.is(':visible')){
        $('#total').html('Total '+sum+'$');
      } 
      else {
        $('#total').html('No items');
        $('#count').html('');
      }
    })
  })

///  BUY  ///



  /// Sign Up ///

  $('#email').on('click focus',  function(){ 
    $('#submit').animate({ opacity:1},200); 
    $(this).animate({ opacity:1},200); 
  })

  .on('mouseleave blur', function(){ 
    if ($(this).val() == '' && !$(this).is(':focus')){
       $(this).animate({opacity:.6},200);
	     $('#submit').animate({opacity:.6},200); 
     }
  })

   /// Sign Up ///



    /// Scroll to top ///

  $(window).scroll(function(){
   if ($(this).scrollTop() > 1600) {
     $('#scrollToTop').fadeIn();
    }
    else {
     $('#scrollToTop').fadeOut();
    }
  }); 
  
  $('#scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  }); 

    /// Scroll to top ///



});

function swap(image){
image.src='images/info-hovered.jpg';
}

function swapback(image){
image.src='images/info.jpg';
}



