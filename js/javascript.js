$(document).ready(function() {

  $('#myCarousel').carousel({
    interval: 4000 //4 second slide rotation
  })

  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
		  
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
	  $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}
  });

 $('body').append('<a class="back-to-top" href="#"><i class="glyphicon glyphicon-chevron-up"></i></a>');

 var offset = 400; 
  var fadeintime = 400; // fade in duration
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(fadeintime);
    } else {
      $('.back-to-top').fadeOut(fadeintime);
    }
  });


  $('.back-to-top').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 'slow');
    return false;

  });
  
});



