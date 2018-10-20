
$(document).ready(function(){

	$('.scrolling_text').on('scroll',function(){
		if ($(this).scrollTop() > 2) {
	      $('.line').show(200);
	      $('.text_header h2').css('fontSize', '1.5rem')
	    } else {
	      $('.text_header h2').css('fontSize', '3rem')
	      $('.line').hide(200);
	    }
		
	})
	
	//$('.blogmenu').hide();
	
});