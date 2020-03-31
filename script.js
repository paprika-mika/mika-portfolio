$(document).ready(function(){
  $("#click, #closephotos, #myface").click(function(){
    if ($("#photosheader").hasClass("photosgone")){
      $("#photosheader").removeClass("photosgone").addClass("photos");
  } else if ($("#photosheader").hasClass("photos")){
    $("#photosheader").removeClass("photos").toggleClass("photosgone");
  }
  });

});




$(document).ready(function(){
  $("#settings, #closesettings, #settings2").click(function(){
    if ($("#topunder").hasClass("topundergone")){
      $("#topunder").removeClass("topundergone").addClass("topunder");
  } else if ($("#topunder").hasClass("topunder")){
    $("#topunder").removeClass("topunder").toggleClass("topundergone");
  }
  });
});

$(document).ready(function(){
  $("#green").click(function(){
    document.documentElement.style.setProperty('--white-full', 'rgb(0, 255, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--yellow-full', 'rgb(255, 70, 0)');
    $(".footer").css({"background-color": "rgb(255, 255, 255)"});
    $(".text2 > a").css({"color": "var(--yellow-full)"});
    $(".footer > .row-list > .list > li > p").css({"color":"rgb(0,0,0)"});
  });
  $("#yellow").click(function(){
    document.documentElement.style.setProperty('--white-full', 'rgb(255, 255, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--yellow-full', 'rgb(0, 0, 255)');
    $(".footer").css({"background-color": "rgb(255, 255, 255)"});
    $(".text2 > a").css({"color": "var(--yellow-full)"});
    $(".footer > .row-list > .list > li > p").css({"color":"rgb(0,0,0)"});
  });
  $("#red").click(function(){
    document.documentElement.style.setProperty('--white-full', 'rgb(255, 70, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--yellow-full', 'rgb(0, 255, 0)');
    $(".footer").css({"background-color": "rgb(255, 255, 255)"});
    $(".text2 > a").css({"color": "var(--yellow-full)"});
    $(".footer > .row-list > .list > li > p").css({"color":"rgb(0,0,0)"});
  });
  $("#white").click(function(){
    document.documentElement.style.setProperty('--white-full', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--yellow-full', 'rgb(255, 79, 251)');
    $(".footer").css({"background-color": "rgb(255, 79, 251)"});
    $(".text2 > a").css({"color": "var(--yellow-full)"});
    $(".footer > .row-list > .list > li > p").css({"color":"rgb(0,0,0)"});
  });
  $("#grey").click(function(){
    document.documentElement.style.setProperty('--white-full', 'rgb(0, 0, 255)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--yellow-full', 'rgb(255, 255, 0)');
    $(".footer").css({"background-color": "rgb(255, 255, 255)"});
    $(".text2 > a").css({"color": "var(--yellow-full)"});
    $(".footer > .row-list > .list > li > p").css({"color":"rgb(0,0,0)"});
  });
  $("#black").click(function(){
    document.documentElement.style.setProperty('--white-full', 'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--yellow-full', 'rgb(255, 79, 251)');

    $(".text2 > a").css({"color": "rgb(255, 255, 255)"});
    $(".footer").css({"background-color": "rgb(255, 255, 255)"});
    $(".footer > .row-list > .list > li > p").css({"color":"rgb(0,0,0)"});
  });

$("#small").click(function(){
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



$("#sticker").click(function(){
  if ($("body").hasClass("background0")) {
  $("body").removeClass("background0").addClass("background1");}
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



  $("#chaos").click(function(){
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
    $(".object").animate({"left": (-200 + Math.floor(Math.random() * 250)) + 'px', "top": (-200 + Math.floor(Math.random() * 400)) + 'px'});
    $("#black").css({"transform": "rotate(" + (-190 + Math.floor(Math.random() * 80)) + "deg)"});
    $("#white").css({"transform": "rotate(" + (-10 + Math.floor(Math.random() * 60)) + "deg)"});
    $("#red").css({"transform": "rotate(" + (-70 + Math.floor(Math.random() * 80)) + "deg)"});
    $("#yellow").css({"transform": "rotate(" + (-10 + Math.floor(Math.random() * 60)) + "deg)"});
    $("#green").css({"transform": "rotate(" + (-80 + Math.floor(Math.random() * 80)) + "deg)"});
    $("#grey").css({"transform": "rotate(" + (-10 + Math.floor(Math.random() * 60)) + "deg)"});

});

  $("#clean").click(function(){
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
    $("#black").css({"transform": "rotate(0deg)"});
    $("#white").css({"transform": "rotate(0deg)"});
    $("#red").css({"transform": "rotate(0deg)"});
    $("#yellow").css({"transform": "rotate(0deg)"});
    $("#green").css({"transform": "rotate(0deg)"});
    $("#grey").css({"transform": "rotate(0deg)"});
  });
});



$(document).ready(function(){
  $(".image, .menu-button, .footer > .row-list > .list > a > li, #contact2").click(function(){
    if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("biggrid")) {
      $("#start").removeClass("pop-up").addClass("pop-up-gone");
      $("#portfolio").removeClass("row").addClass("row-half");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("biggrid").addClass("biggrid-half");
      $(".topright").css({"right": "49.5%"});

    } else if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("column")){
      $("#start").removeClass("pop-up").addClass("pop-up-gone");
      $("#portfolio").removeClass("row").addClass("row-half");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column").addClass("column-half");
      $(".topright").css({"right": "49.5%"});
}



});


});

$(document).ready(function(){
  $("#crossright, .cross-reverse").click(function(){

    if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("biggrid-half")) {
      $("#start").removeClass("pop-up-gone").addClass("pop-up");
      $("#portfolio").removeClass("row-half").addClass("row");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("biggrid-half").addClass("biggrid");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column-half");
      $(".topright").css({"right": "0px"});

    } else if ($("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").hasClass("column-half")){
      $("#start").removeClass("pop-up-gone").addClass("pop-up");
      $("#portfolio").removeClass("row-half").addClass("row");
      $("#halfcolumn1, #halfcolumn2, #halfcolumn3, #halfcolumn4").removeClass("column-half").addClass("column");
      $(".topright").css({"right": "0px"});

}

  });
});






$( function() {
      $( ".block" ).draggable({ grid: [ 10, 10 ], cancel: ".image"});
      $( "#topunder" ).draggable({ grid: [ 10, 10 ], cancel: ".allbuttons"});
      $( "#photosheader" ).draggable({ grid: [ 10, 10 ], cancel: ".allbuttons"});
      $( ".object" ).draggable({ grid: [ 10, 10 ], cancel: ".allbuttons"});


      $( "div, p, img, .image, .test" ).disableSelection();
} );
