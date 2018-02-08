$(document).ready(function(){
	function detectForMobile() {
		if(window.innerWidth >= 1140){
			$('ul.nav li.dropdown').addClass("hover-menu")
		}else{
			$('ul.nav li.dropdown').removeClass("hover-menu")
		}
	};

	$(window).resize(function(){
		//console.log(window.innerWidth);
		detectForMobile();
	});

	detectForMobile();

	$('ul.nav li.dropdown').hover(function(){
		if($(this).hasClass('hover-menu')){
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
		}
	},
	function(){
		if($(this).hasClass('hover-menu')){
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
		}
	});

    ////////////////////////

    //requires jQuery easing plugin. Default is 'linear'
	$('.marquee').marquee({
		//If you wish to always animate using jQuery
		allowCss3Support: true,
		//works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
		css3easing: 'linear',
		//requires jQuery easing plugin. Default is 'linear'
		easing: 'linear',
		//pause time before the next animation turn in milliseconds
		delayBeforeStart: 300,
		//'left', 'right', 'up' or 'down'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		//speed in milliseconds of the marquee in milliseconds
		duration: 30000,
		//gap in pixels between the tickers
		gap: 100,
		//on cycle pause the marquee
		pauseOnCycle: false,
		//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
		pauseOnHover: true
	});

	$('.dailyrates').each(function(){
		$(this).on('click',function(){
			$(this).toggleClass('reveal');
		});
	});

	$('#management li a, #product li a').on('click',function(e) {
		e.preventDefault();
		
		$('#management span#details, #product span#details').hide(500, function(){
			$(this).prev().removeClass('active');
		});
		$(this).parent().find('span#details').show(200,function(){
			$(this).prev().addClass('active');//.css('display','block');
		});
	});
});