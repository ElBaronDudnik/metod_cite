
$(document).ready(function(){

	$('.scrolling_text').on('scroll',function(){
		if ($(this).scrollTop() > 2) {
	      $('.text_header .line').show(200);
	      $('.text_header h2').css({"font-size": "1.5rem", "padding-bottom": "0"});
	    } else {
	      $('.text_header h2').css('font-size', '3rem')
	      $('.text_header .line').hide(200);
	    }
		
	})
	
	$('select').awselect({
	    background: "none", 
		active_background:"rgb(0, 0, 0, .8)", // the light blue background
		placeholder_color: "#fff", // the light blue placeholder color
		placeholder_active_color: "#fff", // the dark blue placeholder color
		option_color:"#fff", // the option colors
		vertical_padding: "0px", //top and bottom padding
		horizontal_padding: "5px", // left and right padding,
        immersive: false
		});
	
	$('.fa-angle-left').on('click', function(){
		$('.left_side-blogmenu-rubrica').removeClass('initial_state').animate({'left': '0'}, 1000);
		$('.left_side-sub_blogmenu .top_five').hide()
		$('.fa-angle-left').hide()
	})

	var item = $('.blogmenu-item')
	item.each(function(i){
		console.log($(this))
		if ($(this).hasClass('active')){
		$(this).children('.left_side-sub_blogmenu').show()
	}
	})
	
});