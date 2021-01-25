$(document).ready(function () {
    //slide the background black 
   $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('.main-header').css({background:'black'});
            $('header .social-media').slideUp(700);
            $('header .logo img').css({width:'45%'});
            
        }
        else {
            $('.main-header').css({background:'linear-gradient(rgba(0,0,0,0.99),rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0))'});
            $('header .social-media').slideDown(700);
            $('header .logo img').css({width:'50%'});
            
        }
    });
    
    //drop down menu 
    $('.nav .menu').click(function(){
        $('.nav .menu .drop-menu').slideToggle(500);
    });
    
    // call slider
    $('.main-carousel').flickity({
  // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        fade:true,
        wrapAround: true,
        freeScrollFriction: 0.3
});

    // search-area 
    $('.social-media .search-button').click(function(){
        $('.search-area').fadeIn();
    });
    $('.search-area > a').click(function(){
        $('.search-area').fadeOut();
    });
    
    //marquee
    $('.marquee').marquee({
		speed: 50,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'right',
		pauseOnHover: true,
	});
    
    
     $('.initiatives .main-carousel').flickity({
  // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        fade:true,
        wrapAround: true,
        freeScrollFriction: 0.3
});
    
    //scroll to top
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scroll-to-top').fadeIn();
        }
        else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});
var preloader = document.getElementById('loading');
    function loadFunc() {
        preloader.style.display = 'none';
    }