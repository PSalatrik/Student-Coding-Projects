$(document).ready(function(){

  //Exercise 1

  $('img').mouseenter(function(){
    $('img').fadeTo('fast', 0.5);
  });
  $('img').mouseleave(function(){
    $('img').fadeTo('fast', 1);
  });


  //Exercise 2
  //2.1
  $('.fade-button').click(function(){
    $('div').fadeOut();
  });

  //2.2
  $('.fade-button').click(function(){
    $('#fader').fadeOut();
  });

  //Bonus
  $('.box').click(function(){
    $(this).fadeOut();
  });


  //Exercise 3
  $('.longbox').mouseenter(function(){
    $(this).fadeTo('fast', 0.25);
  });

  $('.longbox').mouseleave(function(){
    $(this).fadeTo('fast', 1);
  });

  $('.longbox').click(function(){
    $(this).toggleClass('off-white');
    $(this).toggleClass('black-text');
    $(this).text('clicked!');
  });


});