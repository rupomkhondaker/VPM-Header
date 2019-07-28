jQuery(document).ready(function(){
	$(".dropdown").hover(            
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("600");
			$(this).toggleClass('open');        
		},
		function() {
			$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("300");
			$(this).toggleClass('open');       
		}
	);

	var menuPos = $('.header-desktop-bottom').offset().top;
	//var adminMenuHeight = $('#wpadminbar').height(); {"backgroundColor": "black", "color": "white"}
	$(window).bind('scroll', function () {	
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 50) {
				$('.header-desktop-bottom,.header-mobile-bottom').addClass('fixed-header');
				$('.main-logo').hide();
				$('.sticky-logo').show();
				$('#menu-icon-scroll-search').css({"margin-top":"13px", "display": "block"}).show();
				$('#menu-icon-no-scroll-search').hide();
				$('#menu-icon-scroll-menu').css('margin-top',"13px").show();
				$('#menu-icon-no-scroll-menu').hide();
			}
			else {
				$('.header-desktop-bottom').removeClass('fixed-header');
				$('.header-mobile-bottom').removeClass('fixed-header');
				$('.sticky-logo').hide();
				$('.main-logo').show();
				$('#menu-icon-no-scroll-search').show();
				$('#menu-icon-scroll-search').hide();
				$('#menu-icon-no-scroll-menu').show();
				$('#menu-icon-scroll-menu').hide();
			}
		});
	});

	$("#VPMTicker").breakingNews({
		effect		:"fade",
		autoplay	:true,
		timer		:5000,
		effectspeed	:1000
	});
	window.onload = function(e) {
		  setTimeout(function(){ 
				$("#VPMTicker").fadeIn('slow').show();
		  }, 5000);
	};
	//Mobile menu toggleClass
	var $main_nav = $('#main-nav');
	  var $toggle = $('.toggle');
	  var defaultData = {
		maxWidth: false,
		customToggle: $toggle,
		navTitle: 'Vape Parts Mart',
		levelTitles: true,
		insertClose: 2,
		closeLevels: false
	  };
	  // call our plugin
	  var Nav = $main_nav.hcOffcanvasNav(defaultData);
});
  
  /*//fixed navigation on top when scrolling
			if (screen && screen.width > 768) {
				var menuPos = $('.vpm-header-area').offset().top;
				var adminMenuHeight = $('#wpadminbar').height();
				var pageWidth = $('.container').width()+40;
				

				//var num = adminMenuHeight; 
				$(window).bind('scroll', function () {
					if ($(window).scrollTop() > menuPos) {
					  $('.vpm-main-menu').addClass('fixed-menu');
					  $('.vpm-header-notice').addClass('display_none');
						if($('.vpm-header-area').hasClass("fixed-menu") ){
						   $('.fixed-menu').css("top", adminMenuHeight); 
						} 
					}else{
					  $('.vpm-main-menu').removeClass('fixed-menu');
					  $('.vpm-header-notice').removeClass('display_none');
				
					  $('.vpm-header-area').removeAttr("style");
					  $('.vpm-main-menu').removeAttr("style"); 
					  //$('#sticky-logo').hide();
					}
				});
			}
			
			*/
