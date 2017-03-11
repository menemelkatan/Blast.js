$(document).ready(function(){
  //prevent text selecting
  $('.blast-box' ). attr('unselectable' , 'on' )
  .css('user-select' , 'none' )
  .on('selectstart' , false);

  //appear the colors box
  $('.blast-box .blast-icon').on('click', function(){
    $('.blast-box').toggleClass('appear-it');
    $(this).toggleClass('flip-it');
  });

  //store the color value in a variable
  $('.blast-color').each(function(i){
    $('.blast-color').eq(i).css('backgroundColor', $(this).text());
    $('.blast-color').eq(i).on('click', function(){
      color = $(this).css('backgroundColor');
      // Save the color in local storage
      localStorage.setItem('my_custom_color', color);
      $(this).css('border', '2px solid black').siblings().css('border', '2px solid white');
    });
  });

  //custom colors
  $('input[name="blastCustomColor"]').on('change', function(){
    color = $(this).val();
    // Save the color in local storage
    localStorage.setItem('my_custom_color', color);
    setColor(color);
  });

  //fixed colors
  $('*').on('click', function(){
    setColor(color);
  });
});

var color;

// Get custom color
var my_custom_color = localStorage.getItem('my_custom_color');
if(my_custom_color) {
  color = my_custom_color;
  setColor(color);
}

//change elements colors
function setColor(color){
  $('[data-blast="color"]').css('color', color);
  $('[data-blast="bgColor"]').css('backgroundColor', color);
  $('[data-blast="borderColor"]').css('border-color', color);
}
