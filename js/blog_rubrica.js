
$(document).ready(function(){

	$('.scrolling_text').on('scroll',function(){
		if ($(this).scrollTop() > 2) {
	      $('.text_header .line').show(200);
	      $('.text_header h2').stop().animate({fontSize: '1.5rem'})
	      $('.text_header .text-attr').css('padding-bottom', '2rem');
	    } else {
	     	$('.text_header h2').stop().animate({fontSize: '3rem'});
	      $('.text_header .text-attr').css('padding-bottom', '1rem');
	      $('.text_header .line').hide(200);
	    }
		
	})
	

	$('.left_side-blogmenu').addClass('animated fadeInLeft delay-half-1s');
	$('.blog-content').addClass('animated fadeIn delay-02s slower');
	$('.left_side-blogmenu-rubrica').css('left', '-31vw')

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

	function animate(elem,effect){
	    //var effect = elem.data("effect");
	    //if(!effect || elem.hasClass(effect)) return false;
	    elem.addClass(effect);
	    setTimeout( function(){
	        elem.removeClass(effect);
	    }, 1000);
	}
	

	
	$('.fa-angle-left').on('click', function(){
		$('.left_side-blogmenu-rubrica').removeClass('initial_state fadeInLeft delay-half-1s');
		animate($('.left_side-blogmenu-rubrica'), 'fadeIn');
		$('.left_side-sub_blogmenu .top_five').hide();
		$('.fa-angle-left').hide();
	    $('.left_side-blogmenu').css('width', '56.7vw');
	    $('.left_side-blogmenu-rubrica').animate({'left': '0'}, 500)
		$('.page_overflow').show();
	
	})

	showItem();

	function showItem(){
	$('.blogmenu-item').each(function(i){
		if ($(this).hasClass('active')){
		$(this).children('.left_side-sub_blogmenu').show()
	}
	})}
	

	$(function(){
    // клик по кнопке шаринга
		    $(".share_btn").click(function(){
		        var social = $(this).data("social");
		        // урл текущей страницы
		        var url_share = location.href;
		        // если задан атрибут data-url, то берем урл из него
		        if (typeof $(this).attr("data-url") !== typeof undefined && $(this).attr("data-url") !== false) {
		            url_share = $(this).data("url");        
		        }
		        // открываем окно для репоста
		        share(social, url_share);
		    });
		});
		 
		 
		/**
		* Создание нового окна браузера для репоста в соц.сеть
		*
		* @param string social - социальная сеть, в которую будет сделан репост
		* @param string url_share - url страницы, которая будет опубликована в соц.сети
		*/
		function share(social, url_share){
		    // определяем ссылку для нужной соц.сети
		    var url_soc = false;
		    switch (social) {
		        case "tl":
		            url_soc = "https://t.me/share/url?url="+url_share;
		            break;
		        case "fb":
		            url_soc = "https://www.facebook.com/sharer/sharer.php?u="+url_share;
		            break;
		        case "tw":
		            url_soc = "https://twitter.com/intent/tweet?url="+url_share;
		            break;
		    }
		     
		    // открытие нового окна для шаринга
		    if(url_soc){
		        // размеры окна
		        var width = 800, height = 500;
		        // центруем окно
		        var left = (window.screen.width - width) / 2;
		        var top = (window.screen.height - height) / 2;
		        // открываем окно
		        social_window = window.open(url_soc, "share_window", "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left);
		        // устанавливаем на окно фокус
		        social_window.focus();
		    }
		}

});