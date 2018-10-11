$(document).ready(function() {

	$('.hamburger').on('click', function() {
		let data = $(this).data('parent');
      $('.burg_menu').filter(function(){return $(this).data("parent") == data}).toggleClass('menu_state_open');
      $(this).toggleClass('is-active');
      $('nav .social_menu').toggle();
    });

	$('.owl-carousel').owlCarousel({
	    margin:10,
	    loop:true,
	    autoWidth:true,
	    items:4,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    paginationSpeed : 400,
	    smartSpeed: 1500,
	})


	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = parseInt($('.nine_section-content').css('height'));
	$('.text-partners').css('height', textHeight-height+'px');

	var height = parseInt($('.forth_section-content h2').css('height'))+parseInt($('.forth_section-content h2').css('margin-top'))+parseInt($('.forth_section-content small').css('height'));
	var textHeight = parseInt($('.forth_section-content').css('height'));
	$('form').css('height', textHeight-height+'px');

	$(".lang_menu").on('click', function() {
		$(".lang_submenu").toggleClass('open');
	});

	
     $('select').awselect({
	    background: "none", 
		active_background:"rgb(0, 0, 0, .8)", // the light blue background
		placeholder_color: "#fff", // the light blue placeholder color
		placeholder_active_color: "#fff", // the dark blue placeholder color
		option_color:"#fff", // the option colors
		vertical_padding: "5px", //top and bottom padding
		horizontal_padding: "5px", // left and right padding,
        immersive: false
		});
	
     $('.blogmenu-item').on('click', function(){
     	$('.page_overflow').show();
     	var notThis = $('.blogmenu-item').not(this);
     	if (notThis.hasClass('active')){
     		notThis.children('.left_side-sub_blogmenu').hide();
     		notThis.removeClass('active');
     		$(this).addClass('active');
     		$(this).children('.left_side-sub_blogmenu').show()
     	}
     	else{
     		$(this).addClass('active');
     		$(this).children('.left_side-sub_blogmenu').show()
     	}
     	
     });

     $('.header_title i').on('click', function(){
     	$('.search_field').show();
     	$('.header_title').hide();
     	$('.search_output').show();
     	$('.blogmenu').hide();
     });
      $('.search_field i').on('click', function(){
     	$('.search_field').hide();
     	$('.header_title').show();
     	$('.search_output').hide();
     	$('.blogmenu').show();
     })



     /*$(document).mouseup(function (e) {
	    var container = $(".left_side-sub_blogmenu");
	    if (container.has(e.target).length === 0){
	        container.hide();
	    }
	});*/


	$(document).on('click', function(e) {
	  if (!$(e.target).closest(".left_side-blogmenu").length) {
	    $('.left_side-sub_blogmenu').hide();
	    $('.page_overflow').hide();
	    $('.blogmenu-item').removeClass('active');
	  }
	  e.stopPropagation();
	});

	var slider1 = document.getElementById('slider1');
	var slider2 = document.getElementById('slider2');
	var slider3 = document.getElementById('slider3');
	var sliders = [slider1, slider2, slider3];

		noUiSlider.create(slider1, {
	    range: {
	        'min': 0,
	        '10%': 100,
	        '20%': 250,
	        '30%': 500,
	        '40%': 1000,
	        '50%': 2500,
	        '60%': 5000,
	        '70%': 10000,
	        '80%': 100000,
	        '90%': 500000,
	        'max': 1000000
	    },
	    behaviour: 'tap-drag',
	    tooltips: true,
    	format: {
		    from: function(value) {
		            value = parseInt(value);
		            return value;
		        },
		    to: function(value) {
		    		value = parseInt(value); 	
		    		if (value>999999) {
		            	value = value/1000000>>0;
		            	value = value + 'ML';
		            }
		            if (value>9999) {
		            	value = value/1000>>0;
		            	value = value + 'K';
		            }
		        
		            return value;
		        }
		    },
	    start: [2500],
	    connect: [true, true]
	    });

		noUiSlider.create(slider2, {
	    range: {
	        'min': 0,
	        '10%': 100,
	        '20%': 250,
	        '30%': 500,
	        '40%': 1000,
	        '50%': 2500,
	        '60%': 5000,
	        '70%': 10000,
	        '80%': 100000,
	        '90%': 500000,
	        'max': 1000000
	    },
	    behaviour: 'tap-drag',
	    step: 1000,
	    tooltips: true,
    	format: {
		    from: function(value) {
		            value = parseInt(value);
		            return value;
		        },
		    to: function(value) {
		    		value = parseInt(value); 	
		    		if (value>999999) {
		            	value = value/1000000>>0;
		            	value = value + 'ML';
		            }
		            if (value>9999) {
		            	value = value/1000>>0;
		            	value = value + 'K';
		            }
		        
		            return value;
		        }
		    },
	    start: [100000],
	    connect: [true, true]
	    });

	    noUiSlider.create(slider3, {
	   range: {
	        min: 0,
	        max: 60
	    },
	    behaviour: 'tap-drag',
	    step: 6,
	    tooltips: true,
    	format: {
		    from: function(value) {
		            value = parseInt(value);
		            return value;
		        },
		    to: function(value) {
		    		value = parseInt(value);
		            return value;
		        }
		    },
	    start: [24],
	    connect: [true, true]
	    });
	
	    sliders.forEach(function(slider){
		var connect = slider.querySelectorAll('.noUi-connect');
		var classes = ['c-1-color', 'c-2-color'];

		for (let i = 0; i < connect.length; i++) {
		    connect[i].classList.add(classes[i]);}
		});
});


$(window).resize(function(){
	var content = $('.content');
	$.each(content,function(index){
		let header = $(this).siblings('.header').css('height');
		let footer = $(this).siblings('.footer').css('height');
		let sum = parseFloat(header) + parseFloat(footer);
		let winHeight = $(window).height();
		let height = winHeight-sum + 'px';
		$(this).css('height', height); 	
	});

	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = parseInt($('.nine_section-content').css('height'));
	$('.text-partners').css('height', textHeight-height+'px');

	var height = parseInt($('.forth_section-content h2').css('height'))+parseInt($('.forth_section-content h2').css('margin-top'))+parseInt($('.forth_section-content small').css('height'));
	var textHeight = parseInt($('.forth_section-content').css('height'));
	$('form').css('height', textHeight-height+'px');
	
});