  jQuery(document).ready(function(){
    $(".dropdown").hover(
      function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
      function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
	
		var menuPos = $('.header-desktop-bottom').offset().top;
		//var adminMenuHeight = $('#wpadminbar').height();
		$(window).bind('scroll', function () {	
			$(window).scroll(function(){
				if ($(window).scrollTop() >= 50) {
					$('.header-desktop-bottom').addClass('fixed-header');
					$('.main-logo').fadeOut("fast");
					$('.sticky-logo').fadeIn("fast");
				}
				else {
					$('.header-desktop-bottom').removeClass('fixed-header');
					$('.sticky-logo').fadeOut("fast");
					$('.main-logo').fadeIn("fast");
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
					$("#VPMTicker").fadeIn('slow');
			  }, 5000);
        };

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
