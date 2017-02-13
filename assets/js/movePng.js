$(document).ready(function(){

  function movePng(img, speed){
    var i = 0
    setInterval(function(){
        i++
        $(img).css('background-position', i + 'px 0')
    }, speed)
  }


  movePng('.cloud', 50);
  movePng('.twinkling', 20);

});