$(document).ready(function(){

  $('.header').slideDown(2000);

  $('.vanish-button').click(function(){
    $('.vanishing').toggle(400);
  });

  $('.slideToggle-button').click(function(){
    $('.slideToggle').slideToggle('slow');
  });

  $('.fade-guy').click(function(){
    $(this).fadeTo('slow', 0.25);
  });

  $('.css').click(function(){
    $(this).css({
      'background-color': '#036'
    });
  });

  $('.delay').click(function(){
    $(this).fadeOut('slow').delay(500).fadeIn('slow');
  });


});