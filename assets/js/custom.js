$(document).ready(function(){

  "use strict";

  $('.fa-bars').on('click', toggleNav)

  function toggleNav(){
    $(".menu").toggleClass('is-opened');
  }

  function movePng(img, speed){
    var i = 0
    setInterval(function(){
        i++
        $(img).css('background-position', i + 'px 0')
    }, speed)
  }

  function anchorScroll(){
    $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){

      var target = $(this.hash);
      
      target = target.length ? target:$('[name='+this.hash.slice(1)+']');
      if(target.length){$('html, body').animate({
        scrollTop:target.offset().top - 50
      },1000);
        toggleNav()
        return false;
      }}
    });
  }

  movePng('.cloud', 50);
  movePng('.twinkling', 20)
  anchorScroll();

});