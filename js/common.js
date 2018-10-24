$(document).ready(function() {

	$('.hamburger').on('click', function() {
		let data = $(this).data('parent');
      $('.burg_menu').filter(function(){return $(this).data("parent") == data}).toggleClass('menu_state_open');
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
	})

	$(".button_next").on("click", function (event) {
		var top = $('#next').offset().top
		alert(top)
        $('body,html').animate({scrollTop: top}, 1500);
    });
    

	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = parseInt($('.nine_section-content').css('height'));
	$('.text-partners').css('height', textHeight-height+'px');

	var height = parseInt($('.forth_section-content h2').css('height'))+parseInt($('.forth_section-content h2').css('margin-top'))+parseInt($('.forth_section-content small').css('height'));
	var textHeight = parseInt($('.forth_section-content').css('height'));
	console.log(textHeight-height)
	$('form').css('height', textHeight-height+'px');

	$(".lang_menu").on('click', function() {
		$(".lang_submenu").toggleClass('open');
	});

	
     
	
     $('.blogmenu-item').on('click', function(){
     	if (!$('.left_side-blogmenu-rubrica').hasClass('initial_state')){$('.page_overflow').show(); }
     	var notThis = $('.blogmenu-item').not(this);
     	if (notThis.hasClass('active')){
     		notThis.children('.left_side-sub_blogmenu').hide();
     		notThis.removeClass('active');
     		$(this).addClass('active');
     		$(this).children('.left_side-sub_blogmenu').show(500)
     	}
     	else{
     		$(this).addClass('active');
     		$(this).children('.left_side-sub_blogmenu').show(500)
     	}
     	
     });

     $('.header_title i.fa-search').on('click', function(){
     	$('.search_field').show();
     	$('.header_title').hide();
     	$('.search_output').show();
     	$('.blogmenu').hide();
     	$('.blogmenu-rubrica').hide();
     });
      $('.search_field i.fa-remove').on('click', function(){
     	$('.search_field').hide();
     	$('.header_title').show();
     	$('.search_output').hide();
     	$('.blogmenu').show();
     	$('.blogmenu-rubrica').show();
     })

     
	

      /*Scripts for blog-rubrica*/
      //$('.left_side-blogmenu-rubrica .header_title h2').hide();
      //$('.blogmenu-rubrica').css('left','-500px');
      //$('.left_side-sub_blogmenu-rubrica').show().css({"left":"0", "background":"none"})
      
      	/*$('.left_side-blogmenu-rubrica .header_title h2').html('Новости').addClass('h3').before('<i class="fa fa-angle-left"></i>')
      	$('.blogmenu-rubrica').html('<li class="sub_blogmenu-item"><a href="#">Самоинкапсуляция поля</a></li><li class="sub_blogmenu-item"><a href="#">Замена простого поля объектом</a></li><li class="sub_blogmenu-item"><a href="#">Замена значения ссылкой</a></li><li class="sub_blogmenu-item"><a href="#">Замена ссылки значением</a></li><li class="sub_blogmenu-item"><a href="#">Замена поля-массива объектом</a></li><li class="sub_blogmenu-item"><a href="#">Дублирование видимых данных</a></li><li class="sub_blogmenu-item"><a href="#">Замена однонаправленной связи</a></li><li class="sub_blogmenu-item"><a href="#">Инкапсуляция поля</a></li><li class="sub_blogmenu-item"><a href="#">Инкапсуляция данных</a></li><li class="sub_blogmenu-item"><a href="#">Замена кодирования типа классом</a></li><li class="sub_blogmenu-item"><a href="#">Замена кодирования типа подклассом</a></li><li class="sub_blogmenu-item"><a href="#">Замена подкласса полями</a></li>')
     	$('.blogmenu-rubrica').addClass('sub_blogmenu').removeClass('blogmenu')*/
  	
    /*$('.left_side-blogmenu-rubrica').css('left','-500px');
    $('.left_side-sub_blogmenu-rubrica').filter(function(){return $(this).data("value") == 'news'}).css('left', '0').show().addClass('left_side-blogmenu') 	


     $('.fa-angle-left').on('click', function(){
     	$('.left_side-blogmenu-rubrica .header_title h2').html('Blog').removeClass('h3')
     	console.log('Hello')
     })
     /*the end*/


     /*$(document).mouseup(function (e) {
	    var container = $(".left_side-sub_blogmenu");
	    if (container.has(e.target).length === 0){
	        container.hide();
	    }
	});*/


	$(document).on('click', function(e) {
	  if ((!$(e.target).closest(".left_side-blogmenu").length) && (!$('.left_side-blogmenu-rubrica').hasClass('initial_state'))){
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