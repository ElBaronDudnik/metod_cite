$(function() {

	$('.menu__icon').on('click', function() {
      $('.menu_main').toggleClass('menu_state_open');
      $('.menu__icon').toggleClass('menu_state_open');
    });

	const bg = ['first','second', 'third','forth'];
	let i = 0

    $('.button_striped').on('click', function(){
    	(i>2)?(i=0):(i++)
    	let param = `url(../img/${bg[i]}_bg.png`;
    	$('.section').css("background-image", param);
    });

});
