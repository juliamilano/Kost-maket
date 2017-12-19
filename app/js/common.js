$(function() {

	// Custom JS
	
	$(document).ready( function(){
  		$('.block-content-news .h1').animate({
			  "left": "0"
			}, 2000, "linear");
		$('.article-content p').animate({
			  "left": "0"
			}, 2000, "linear");
		$('.content-img img').animate({
			  "left": "0"
			}, 2000, "linear");
			
	});
	$(document).scroll(function() {
		if($( document ).width() > 992){
			if($(document).scrollTop() > 800){
			$('.link-share').css('position', 'relative');
			$(".grid-news-item p").animate({'visibility': 'hidden'}, 2000, "linear");
		}else{
			$('.link-share').css('position', 'fixed');
		}
	}
		
});
$(document).ready( function(){
	if($(document).width() < 576){
		$('.header-nav-menu').css('display', 'none');
		$('.header-nav-menu-mobile').css('display', 'block');
	}else{
		$('.header-nav-menu').css('display', 'block');
		$('.header-nav-menu-mobile').css('display', 'none');
	}
});
	$(window).resize(function(){
	if($(document).width() < 576){
		$('.header-nav-menu').css('display', 'none');
		$('.header-nav-menu-mobile').css('display', 'block');
	}else{
		$('.header-nav-menu').css('display', 'block');
		$('.header-nav-menu-mobile').css('display', 'none');
	}
	if($(document).width() > 768 && $(document).width() < 992){
		$('header').css('height', '100px');
	}else if($(document).width() < 768 && $(document).width() > 576){
		$('header').css('height', '200px');
	}else if($(document).width() > 992){
		$('header').css('height', '60px');
	}else{
		$('header').css('height', '200px');
	}
});
	$('#button-menu').click(function(){
		$('ul.menu-item-list').toggle();
		if($('header').css('height') < '250px'){
			$('header').css('height', '380px');
		}else{
			$('header').css('height', '200px');
		}
		
	});
});
