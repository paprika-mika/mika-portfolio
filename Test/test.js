$(document).ready(function(){
  $(".image").click(function(){
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



$( function() {

      $( ".block" ).draggable({ grid: [ 10, 10 ] });

      $( "div, p, img, .image, .test" ).disableSelection();
    } );


    var scrollEventHandler = function()
    {
      window.scroll(0, window.pageYOffset)
    }

    window.addEventListener("scroll", scrollEventHandler, false);
