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

	var height = parseInt($('.partners').css('height'))+parseInt($('.partners').css('margin-top'));
	var textHeight = parseInt($('.text').css('height'));
	$('.text').css('height', textHeight-height+'px');


    var rangeSlider = function(){
  		var slider = $('.range-slider'),
      	range = $('.range-slider__range'),
      	value = $('.range-slider__value');

      	range.each(function(){
      		var val = $(this).val();
	      	$(this).css({'background':'-webkit-linear-gradient(left ,#f5e700 0%,#f5e700 '+val+'%,#999999 '+val+'%, #999999 100%)'});
      	})
      	
    
  		slider.each(function(){

	    value.each(function(){
	      var value = $(this).prev().attr('value');
	      $(this).html(value);
	    });

	    range.on('input', function(){
	      $(this).next(value).html(this.value);
	      var val = $(this).val();
	      $(this).css({'background':'-webkit-linear-gradient(left ,#f5e700 0%,#f5e700 '+val+'%,#999999 '+val+'%, #999999 100%)'});
	    });
	  });
	};

	

rangeSlider();


	var map;
	function initMap() {

            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
            map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                center: {lat: 50.4501, lng: 30.5234},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 13
            });
        }
});
