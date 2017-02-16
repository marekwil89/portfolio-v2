$(document).ready(function(){
  var startCount = true;
  
  function countMe(element, add){
    if(startCount == true){
      var plus = '';
      if(add){
        plus = add;
      }
      var finish = parseInt($(element).attr('finish'));
      var start = parseInt($(element).attr('start'));
      var speed = parseInt($(element).attr('speed'));
      var count = setInterval(function(){
      start+=2
      if(start >= finish){
        clearInterval(count);
      }
      $(element).html(start + plus);
      }, speed);
    }
  }

  function resizeNav(wScroll){
    if(wScroll > 0){
      $('nav').addClass('bg-moved')
    }
    else{
      $('nav').removeClass('bg-moved')
    }
  }

  function showHeroAtributs(){
      $('.hover-me').addClass('pulse')
      $('.hero-atr').each(function(i){
        setTimeout(function(){
          $('.hero-atr').eq(i).addClass('is-showing')
        }, 300 * i)
      })
  }

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    resizeNav(wScroll)

    if(wScroll > $('.hero-box').offset().top - ($(window).height()/1.9)){
      showHeroAtributs();
    }

    if(wScroll > $('.stats-box').offset().top - ($(window).height()/1.9)){
      countMe('.count1', '+');
      countMe('.count2', '/160');
      countMe('.count3');
      countMe('.count4', '+');
      startCount = false;
    }
  });
});
