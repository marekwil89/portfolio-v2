$(document).ready(function(){

  function toggleNav(){
    $(".menu").toggleClass('is-opened');
  }

  function anchorScroll(){
    $('a[href*="#"]:not([href="#"])').click(function(e){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){

      var target = $(this.hash);
      if(e.currentTarget.className != 'arrow-bottom'){
        toggleNav()
      }
      
      target = target.length ? target:$('[name='+this.hash.slice(1)+']');
      if(target.length){$('html, body').animate({
        scrollTop:target.offset().top - 50
      },1000);
        
        return false;
      }}
    });
  }



  $('.fa-bars').on('click', toggleNav)

  anchorScroll();
});