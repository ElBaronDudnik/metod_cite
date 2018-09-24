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
	console.log(textHeight)
	$('.text-partners').css('height', textHeight-height+'px');

	

	$(".lang_menu").on('click', function() {
		$(".lang_submenu").toggleClass('open');
	});

	/*range styling*/

	
	var sliders = document.getElementsByClassName('range');


	[].slice.call(sliders).forEach(function (slider, index) {

	    noUiSlider.create(slider, {
	        range: {
	        min: 0,
	        max: 1000
	    },
	    behaviour: 'tap-drag',
	    step: 100,
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
	});
	
	

});


$(window).resize(function(){
	var content = $('.content');
	$.each(content,function(index){
		let header = $(this).siblings('.header').css('height');
		console.log(header)
		let footer = $(this).siblings('.footer').css('height');
		console.log(footer)
		let sum = parseFloat(header) + parseFloat(footer);
		console.log(sum)
		let winHeight = $(window).height();
		console.log(winHeight)
		let height = winHeight-sum + 'px';
		$(this).css('height', height);
		console.log(height)
	})
	
});