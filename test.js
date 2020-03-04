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
    document.documentElement.style.setProperty('--white-full', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
  });
  $("#grey").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(0, 0, 255)');
    document.documentElement.style.setProperty('--black-full', 'rgb(255, 255, 255)');
  });
  $("#black").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(255, 255, 255)');
  });

$("#small").on('click tap touchstart', function () {
  if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("column")) {
    $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column").addClass("biggrid");
  } else if($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("biggrid")){
    $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("biggrid").addClass("column");
  } else if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("biggrid-half")) {
    $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("biggrid-half").addClass("column-half");
  } else if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("column-half")){
    $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("colum-half").addClass("biggrid-half");
  }
});

$("#sticker").on('click tap touchstart', function () {
  if ($("body").hasClass("background0")) {
  $("body").switchClass("background0", "background1");}
   else if ($("body").hasClass("background1")) {
  $("body").switchClass("background1", "background2");}
  else if ($("body").hasClass("background2")) {
  $("body").switchClass("background2", "background3");}
  else if ($("body").hasClass("background3")) {
  $("body").switchClass("background3", "background4");}
  else if ($("body").hasClass("background4")) {
  $("body").switchClass("background4", "background5");}
  else if ($("body").hasClass("background5")) {
  $("body").switchClass("background5", "background0");}
})


  $("#chaos").on('click tap touchstart', function () {
    $("#work_1").animate({"left": (-50 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_2").animate({"left": (-50 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_3").animate({"left": (-50 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_4").animate({"left": (-50 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_5").animate({"left": (-50 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
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
    $("#work_16").animate({"left": (-200 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_17").animate({"left": (-200 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_18").animate({"left": (-200 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_19").animate({"left": (-200 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#work_20").animate({"left": (-200 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#black").css({"transform": "rotate(" + (-190 + Math.floor(Math.random() * 80)) + "deg)"});
    $("#white").css({"transform": "rotate(" + (-10 + Math.floor(Math.random() * 60)) + "deg)"});
    $("#red").css({"transform": "rotate(" + (-70 + Math.floor(Math.random() * 80)) + "deg)"});
    $("#yellow").css({"transform": "rotate(" + (-10 + Math.floor(Math.random() * 60)) + "deg)"});
    $("#green").css({"transform": "rotate(" + (-80 + Math.floor(Math.random() * 80)) + "deg)"});
    $("#grey").css({"transform": "rotate(" + (-10 + Math.floor(Math.random() * 60)) + "deg)"});

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
    $("#black").css({"transform": "rotate(-180deg)"});
    $("#white").css({"transform": "rotate(0deg)"});
    $("#red").css({"transform": "rotate(0deg)"});
    $("#yellow").css({"transform": "rotate(0deg)"});
    $("#green").css({"transform": "rotate(0deg)"});
    $("#grey").css({"transform": "rotate(-10deg)"});
  });
});

$(document).ready(function(){
  $(".image, .cross-reverse, .menu-button").click(function(){
    if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("biggrid")) {
      $("#start").removeClass("pop-up").addClass("pop-up-gone");
      $("#portfolio").removeClass("row").addClass("row-half");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("biggrid").addClass("biggrid-half");

    } else if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("column")){
      $("#start").removeClass("pop-up").addClass("pop-up-gone");
      $("#portfolio").removeClass("row").addClass("row-half");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column").addClass("column-half");

}

  });
});

$(document).ready(function(){
  $(".cross").click(function(){

    if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("biggrid-half")) {
      $("#start").removeClass("pop-up-gone").addClass("pop-up");
      $("#portfolio").removeClass("row-half").addClass("row");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("biggrid-half").addClass("biggrid");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column-half");

    } else if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("column-half")){
      $("#start").removeClass("pop-up-gone").addClass("pop-up");
      $("#portfolio").removeClass("row-half").addClass("row");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column-half").addClass("column");

}

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
