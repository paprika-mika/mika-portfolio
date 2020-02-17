$( function() {

  $( ".widget-content" ).draggable({ cancel: ".image" });

  $( "div, p, img, .image, .test" ).disableSelection();
} );

$(document).ready(function(){
  $(".image").click(function(){
    $("p:first").removeClass("pop-up").addClass("pop-up-gone");
    $("#werkteef").removeClass("all").addClass("all-small");
  });
});
