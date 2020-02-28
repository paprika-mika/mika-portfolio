$(document).ready(function(){
  $(".image, .cross-reverse, .menu-button").click(function(){
    $("#start").removeClass("pop-up").addClass("pop-up-gone");
    $("#halfrow").removeClass("row").addClass("row-half");
    $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column").addClass("column-half");

  });
});

$(document).ready(function(){
  $(".cross").click(function(){
    $("#start").removeClass("pop-up-gone").addClass("pop-up");
    $("#halfrow").removeClass("row-half").addClass("row");
    $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column-half").addClass("column");

  });
});

$(document).ready(function(){
  $("#green").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(0,255,0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
  });
  $("#yellow").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(255, 248, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
  });
  $("#red").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(255, 67, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
  });
  $("#white").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(236, 236, 236)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
  });
  $("#grey").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(162, 162, 162)');
    document.documentElement.style.setProperty('--black-full', 'rgb(255, 255, 255)');
  });
  $("#black").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(255, 255, 255)');
    $("body").css({"cursor": "url(media/pointerwhite.png), auto"});
  });

  $("#chaos").on('click tap touchstart', function () {
    $("#work_1").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_2").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_3").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_4").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_5").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_6").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_7").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_8").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_9").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_10").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_11").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_12").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_13").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_14").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_15").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_16").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_17").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_18").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_19").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_20").animate({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
  });

  $("#clean").on('click tap touchstart', function () {
    $("#work_1").animate({"left": "0", "top": "0"});
    $("#work_2").animate({"left": "0", "top": "0"});
    $("#work_3").animate({"left": "0", "top": "0"});
    $("#work_4").animate({"left": "0", "top": "0"});
    $("#work_5").animate({"left": "0", "top": "0"});
    $("#work_6").animate({"left": "0", "top": "0"});
    $("#work_7").animate({"left": "0", "top": "0"});
    $("#work_8").animate({"left": "0", "top": "0"});
    $("#work_9").animate({"left": "0", "top": "0"});
    $("#work_10").animate({"left": "0", "top": "0"});
    $("#work_11").animate({"left": "0", "top": "0"});
    $("#work_12").animate({"left": "0", "top": "0"});
    $("#work_13").animate({"left": "0", "top": "0"});
    $("#work_14").animate({"left": "0", "top": "0"});
    $("#work_15").animate({"left": "0", "top": "0"});
    $("#work_16").animate({"left": "0", "top": "0"});
    $("#work_17").animate({"left": "0", "top": "0"});
    $("#work_18").animate({"left": "0", "top": "0"});
    $("#work_19").animate({"left": "0", "top": "0"});
    $("#work_20").animate({"left": "0", "top": "0"});
  });
});



$( function() {
      $( ".block" ).draggable({ grid: [ 10, 10 ] });
      $( ".colorblock" ).draggable({ grid: [ 10, 10 ] });
      $( "div, p, img, .image, .test" ).disableSelection();
} );



var scrollEventHandler = function()
    {
      window.scroll(0, window.pageYOffset)
    }

    window.addEventListener("scroll", scrollEventHandler, false);
