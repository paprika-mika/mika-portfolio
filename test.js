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
  $(".button").on('click tap touchstart', function () {
    document.documentElement.style.setProperty('--white-full', 'rgb(0,255,0)');
    document.documentElement.style.setProperty('--black-full', 'rgb(0,0,255)');
  });
});



$( function() {
      $( ".block" ).draggable({ grid: [ 10, 10 ] });
      $( "div, p, img, .image, .test" ).disableSelection();
} );




(function($){

	$(document).ready(function() {
		var classes = [ 'style1', 'style2', 'style3', 'style4', 'style5', 'style6' ]; // the classes you want to add
		$('#chaos').click(function(i) { // the element(s) you want to add the class to.
			$('#work_1').toggleClass(classes[ Math.floor( Math.random()*classes.length ) ] );
      $('#work_2').toggleClass(classes[ Math.floor( Math.random()*classes.length ) ] );
      $('#work_3').toggleClass(classes[ Math.floor( Math.random()*classes.length ) ] );
      $('#work_4').toggleClass(classes[ Math.floor( Math.random()*classes.length ) ] );
      $('#work_5').toggleClass(classes[ Math.floor( Math.random()*classes.length ) ] );
		});
	});

})(jQuery);


var scrollEventHandler = function()
    {
      window.scroll(0, window.pageYOffset)
    }

    window.addEventListener("scroll", scrollEventHandler, false);
