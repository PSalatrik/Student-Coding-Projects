$(document).ready(function(){

  $('.longbox').mouseenter(function(){
    $(this).fadeTo('fast', 0.25);
  });

  $('.longbox').mouseleave(function(){
    $(this).fadeTo('fast', 1);
  });

  $('.longbox').click(function(){
    $(this).toggleClass('cream');
    $(this).toggleClass('black-text');
    $(this).text('clicked!');
  });

});

