$(document).on('click', function(e) {
	  if ((!$(e.target).closest(".left_side-blogmenu-rubrica").length) && (!$('.left_side-blogmenu-rubrica').hasClass('initial_state'))){
	    $('.left_side-sub_blogmenu').show();
	    $('.page_overflow').hide();
	    $('.left_side-blogmenu').css('width', '62vw')
	    $('.left_side-blogmenu-rubrica').addClass('initial_state');
	    //animate( $('.left_side-blogmenu-rubrica'), 'fadeInLeft')
	    $('.left_side-sub_blogmenu .top_five').show();
	    $('.fa-angle-left').show();
	    $('.left_side-sub_blogmenu').hide();
	    $('.left_side-blogmenu-rubrica').animate({'left': '-31vw'}, 500);
		showItem();
	  }
	  e.stopPropagation();
	});

function showItem(){
	$('.blogmenu-item').each(function(i){
		if ($(this).hasClass('active')){
		$(this).children('.left_side-sub_blogmenu').show()
		}
	})
}


$(document).ready(function(){
	$('.bookmark').mouseenter(function(){
		$('.bookmark-menu').stop().animate({'height': "5rem"}, 500)
	})
	$('.bookmark').mouseleave(function(){
		$('.bookmark-menu').stop().animate({'height': "0"}, 500)
	})
});	