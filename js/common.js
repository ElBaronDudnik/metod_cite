$(function() {

	$('.hamburger').on('click', function() {
      $('.menu_main').toggleClass('menu_state_open');
      $('.hamburger').toggleClass('is-active');
    });

	const bg = ['first','second', 'third','forth'];
	let i = 0

    $('.button_striped').on('click', function(){
    	(i>2)?(i=0):(i++)
    	let param = `url(../img/${bg[i]}_bg.png`;
    	$('.section').css("background-image", param);
    });

	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = parseInt($('.content').css('height'));
	$('.text-partners').css('height', textHeight-height+'px');

	

	$(".lang_menu").on('click', function() {
		$(".lang_submenu").toggleClass('open');
	});

	/*wNumb*/
	

	/*range styling*/

	
	var sliders = document.getElementsByClassName('range');


	/*[].slice.call(sliders).forEach(function (slider, index) {

	    noUiSlider.create(slider, {
	        range: {
	        min: 0,
	        max: 10000
	    },
	    behaviour: 'tap-drag',
	    step: 1000,
	    tooltips: true,
    	format: wNumb({
        	decimals: 0
    	}),
	    start: [0],
	    connect: [true, true]
	    });


	    var connect = slider.querySelectorAll('.noUi-connect');
		var classes = ['c-1-color', 'c-2-color'];

		for (let i = 0; i < connect.length; i++) {
		    connect[i].classList.add(classes[i]);
	}
	
	var sliderValue = slider.noUiSlider.options.range.max 	;
	console.log(sliderValue);

	});*/

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
		            	value = value + 'Ml';
		            }
		            if (value>9999) {
		            	value = value/1000>>0;
		            	value = value + 'K';
		            }
		        
		            return value;
		        }
		    },
	    start: [0],
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
		            	value = value + 'Ml';
		            }
		            if (value>9999) {
		            	value = value/1000>>0;
		            	value = value + 'K';
		            }
		        
		            return value;
		        }
		    },
	    start: [0],
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
    	format: wNumb({
        	decimals: 0
    	}),
	    start: [0],
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
	})
	
});