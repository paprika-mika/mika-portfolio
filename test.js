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
  });
  $("#chaos").on('click tap touchstart', function () {
    $("#work_1").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_2").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_3").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_4").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_5").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_6").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_7").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_8").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_9").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_10").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_11").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_12").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_13").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_14").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_15").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_16").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_17").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_18").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_19").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_20").css({"left": (-200 + Math.floor(Math.random() * 400)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
  });

  $("#clean").on('click tap touchstart', function () {
    $("#work_1").css({"left": "0", "top": "0"});
    $("#work_2").css({"left": "0", "top": "0"});
    $("#work_3").css({"left": "0", "top": "0"});
    $("#work_4").css({"left": "0", "top": "0"});
    $("#work_5").css({"left": "0", "top": "0"});
    $("#work_6").css({"left": "0", "top": "0"});
    $("#work_7").css({"left": "0", "top": "0"});
    $("#work_8").css({"left": "0", "top": "0"});
    $("#work_9").css({"left": "0", "top": "0"});
    $("#work_10").css({"left": "0", "top": "0"});
    $("#work_11").css({"left": "0", "top": "0"});
    $("#work_12").css({"left": "0", "top": "0"});
    $("#work_13").css({"left": "0", "top": "0"});
    $("#work_14").css({"left": "0", "top": "0"});
    $("#work_15").css({"left": "0", "top": "0"});
    $("#work_16").css({"left": "0", "top": "0"});
    $("#work_17").css({"left": "0", "top": "0"});
    $("#work_18").css({"left": "0", "top": "0"});
    $("#work_19").css({"left": "0", "top": "0"});
    $("#work_20").css({"left": "0", "top": "0"});
  });
});



$( function() {
      $( ".block" ).draggable({ grid: [ 10, 10 ] });
      $( "div, p, img, .image, .test" ).disableSelection();
} );







var scrollEventHandler = function()
    {
      window.scroll(0, window.pageYOffset)
    }

    window.addEventListener("scroll", scrollEventHandler, false);
