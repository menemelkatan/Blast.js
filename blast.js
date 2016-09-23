$(document).ready(function(){
  var color;
  //prevent text selecting
  $('colorsBox' ). attr('unselectable' , 'on' )
  .css('user-select' , 'none' )
  .on('selectstart' , false);

  //appear the colors box
  $('colorsBox icon').on('click', function(){
    $('colorsBox').toggleClass('appear-it');
    $(this).toggleClass('flip-it');
  });

  //store the color value in a variable
  $('.blast-color').each(function(i){
    $('.blast-color').eq(i).css('backgroundColor', $(this).text());
    $('.blast-color').eq(i).on('click', function(){
      color = $(this).css('backgroundColor');
      $(this).css('border', '2px solid black').siblings().css('border', '2px solid white');
    });
  });

  //custom colors
  $('input[name="blastCustomColor"]').on('change', function(){
    color = $(this).val();
    $('[data-blast="color"]').css('color', color);
    $('[data-blast="bgColor"]').css('backgroundColor', color);
    $('[data-blast="borderColor"]').css('border-color', color);
  });

  //fixed colors
  $('*').on('click', function(){
    $('[data-blast="color"]').css('color', color);
    $('[data-blast="bgColor"]').css('backgroundColor', color);
    $('[data-blast="borderColor"]').css('border-color', color);
  });

});
