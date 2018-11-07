$(document).ready(function() {

	$('.hamburger').on('click', function() {
		let data = $(this).data('parent');
      $('.burg_menu').filter(function(){return $(this).data("parent") == data}).toggleClass('menu_state_open animated fadeIn');
      $(this).toggleClass('is-active');
      $('nav .social_menu').toggleClass('none_class');
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
	});

	$('.second_section .cont_footer').addClass('animated fadeIn');

	$(".button_next").on("click", function (event) {
		var top = $('#next').offset().top
		alert(top)
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var content = $('.content');
	$.each(content,function(index){
		let header = $(this).siblings('.header');
		let footer = $(this).siblings('.footer').css('height');
		let sum = parseFloat(header) + parseFloat(footer);
		let winHeight = $(window).height();
		let height = winHeight-sum + 'px';
		$(this).css('height', height); 	
		//console.log('index = '+index+' height = '+height)
	});
    
    
    //console.log(contentNew)

	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = $('.nine_section-content').css('height');
	$('.text-partners').css('height', textHeight-height+'px');

	/*var height = parseInt($('.forth_section-content h2').css('height'))+parseInt($('.forth_section-content h2').css('margin-top'))+parseInt($('.forth_section-content small').css('height'));
	var textHeight = parseInt($('.forth_section-content').css('height'));
	console.log(textHeight-height)
	$('form').css('height', textHeight-height+'px');*/


	$(".lang_menu").on('click', function() {
		$(".lang_submenu").toggleClass('open');
	});

	

    $('.blogmenu-item a').on('click', function(){
     	var this_item = $(this).parent()
     	if (!$('.left_side-blogmenu-rubrica').hasClass('initial_state')){
     		$('.page_overflow').show(); 
	     	var notThis = $('.blogmenu-item').not(this_item);
	     	if (notThis.hasClass('active')){
	     		notThis.children('.left_side-sub_blogmenu').hide();
	     		notThis.removeClass('active');
	     		this_item.addClass('active');
	     		$('.left_side-blogmenu').css('width', '56.7vw')
	     		this_item.children('.left_side-sub_blogmenu').show().addClass('animated fadeInLeft')
	     		//alert("if")
	     	}
	     	else if (this_item.hasClass('active')){
	     		this_item.children('.left_side-sub_blogmenu').hide();
	     		this_item.removeClass('active');
	     		$('.page_overflow').fadeOut('slow');
	     		$('.left_side-blogmenu').css('width', '31vw')
	     		//alert($('.left_side-blogmenu').css('width'))
	     	}
	     	else{
	     		this_item.addClass('active');
	     		this_item.children('.left_side-sub_blogmenu').show().addClass('animated fadeInLeft')
	     		$('.left_side-blogmenu').css('width', '56.7vw')
	     		//alert("else")
	     	}
	     }	
     	
     })

     $('.header_title i.fa-search').on('click', function(){
     	if ($('.blogmenu-item').hasClass('active')) {
     		$('.left_side-sub_blogmenu').hide();
	    	$('.page_overflow').hide();
	    	$('.blogmenu-item').removeClass('active');
	    	$('.left_side-blogmenu').css('width', '31vw')
     	}
     	$('.search_field').fadeIn(1000);
     	$('.header_title').hide();
     	$('.search_output').fadeIn(1000);
     	$('.blogmenu').hide();
     	$('.blogmenu-rubrica').hide();
     });
      $('.search_field i.fa-remove').on('click', function(){
     	$('.search_field').hide();
     	$('.header_title').fadeIn(1000);
     	$('.search_output').hide();
     	$('.blogmenu').fadeIn(1000);
     	$('.blogmenu-rubrica').fadeIn(1000);
     })

     
	

	

	var slider1 = document.getElementById('slider1');
	var slider2 = document.getElementById('slider2');
	var slider3 = document.getElementById('slider3');
	var sliders = [slider1, slider2, slider3];

		noUiSlider.create(slider1, {
	    range: {
	        'min': 0,
	        '10%': 1953.125,
	        '20%': 3906.25,
	        '30%': 7812.5,
	        '40%': 15625,
	        '50%': 31250,
	        '60%': 62500,
	        '70%': 125000,
	        '80%': 250000,
	        '90%': 500000,
	        'max': 1000000
	    },
	    behaviour: 'tap-drag',
	    tooltips: true,
	    animate: true,
   		animationDuration: 1000,
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
	        '10%': 1953.125,
	        '20%': 3906.25,
	        '30%': 7812.5,
	        '40%': 15625,
	        '50%': 31250,
	        '60%': 62500,
	        '70%': 125000,
	        '80%': 250000,
	        '90%': 500000,
	        'max': 1000000
	    },
	    behaviour: 'tap-drag',
	    step: 1000,
	    tooltips: true,
	    animate: true,
   		animationDuration: 1000,
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
	    //behaviour: 'tap-drag',
	    //step: 6,
	    animate: true,
   		animationDuration: 1000,
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

		$('.forth_section').on('mouseenter', function(){
          	setTimeout(anim_forward, 500);
          	setTimeout(anim_back, 2500);
			$('.forth_section').off('mouseenter');
		});

		
		
		function anim_forward() {
			var i = 1953;
			var j = 100000;
			var z = 24;
			var x = 0;
			var k = 0;
	      	var timerId = setTimeout(function go() {
	        //console.log(i);
	        slider1.noUiSlider.set(i);
	        slider2.noUiSlider.set(j);
	        slider3.noUiSlider.set(z);
	        if ((i < 1000000) /*|| (j < 1000000) || (z < 60)*/) setTimeout(go, 100);
	        i = calc_value(i, k)
	        j = calc_value(j, k)
	        x = x+1;
	        if (x == 2) {
	        	k=k+1;
	        	x=0;
	        }
	        console.log('x= '+x+' k= '+k+' i= '+i)
	        //j = j*1.5;
	        z = z+2 
	      }, 100);
	      	$(document).trigger('function_a_complete');
		}
		
		function calc_value(i, k){
			i= i + 976.5*Math.pow(2,k);
			return i;
		}

		function anim_back(){
			var i = 1000000;
			var j = 1000000;
			var z = 60;
	      	var timerId = setTimeout(function go() {
	        console.log('i= '+i+' j= '+j+' z= '+z);
	        slider1.noUiSlider.set(i);
	        slider2.noUiSlider.set(j);
	        slider3.noUiSlider.set(z);
	        if ((i > 488) || (j > 488) || (z > 0)) setTimeout(go, 150);
	        console.log(i+' '+j);
	        i = i/2;
	        j = j/2;
	        z = z-6; 
	        if (i<488) {i=0}
	      }, 150);
	    }
		
		
});


$(window).resize(function(){
	var content = $('.content');
	$.each(content,function(index){
		let header = $(this).siblings('.header');
		let footer = $(this).siblings('.footer').css('height');
		//console.log(header)
		//console.log('index = '+index+' header = '+header)
		let sum = parseFloat(header) + parseFloat(footer);
		let winHeight = $(window).height();
		let height = winHeight-sum + 'px';
		$(this).css('height', height); 	
		//console.log('index = '+index+' height = '+height)
	});

	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = $('.nine_section-content').css('height');
	$('.text-partners').css('height', textHeight-height+'px');

	/*var height = parseInt($('.forth_section-content h2').css('height'))+parseInt($('.forth_section-content h2').css('margin-top'))+parseInt($('.forth_section-content small').css('height'));
	var textHeight = parseInt($('.forth_section-content').css('height'));
	$('form').css('height', textHeight-height+'px');*/
	
});