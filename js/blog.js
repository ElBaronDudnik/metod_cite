$(document).on('click', function(e) {
	  if ((!$(e.target).closest(".left_side-blogmenu").length) && (!$('.left_side-blogmenu-rubrica').hasClass('initial_state'))){
	    $('.left_side-sub_blogmenu').hide();
	    $('.page_overflow').hide();
	    $('.blogmenu-item').removeClass('active');
	    $('.left_side-blogmenu').css('width', '31vw');
	  }
	  e.stopPropagation();
	});