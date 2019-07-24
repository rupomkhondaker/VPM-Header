(function($){
	$.fn.POScenter = function () {
		this.css("position","absolute");
		this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
		this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
		return this;
	};
})(jQuery);
//Javascript codes
(function($){
	$.fn.breakingNews = function(params){
			var defaults={ 
					width			:'100%',
					modul			:'breakingnews',
					color			:'default',
					border			:false,
					effect			:'fade',
					effectspeed		:700,
					fontstyle		:'normal',
					autoplay		:false,
					timer			:4000,
					feedlabels		:false,
					feedcount		:5
				};
			var feeds=[];
			var labels=[];
			var params=$.extend(defaults,params);
			$(params).css("display", "block");
			return this.each(function(){
				//Variables------------------------------------
				params.modul=$("#"+$(this).attr("id"));
				var timername=params.modul;
				var active=0;
				var previous=0;
				var count=params.modul.find("ul li").length;
				var changestate=true;
				params.modul.find("ul li").eq(active).fadeIn();
				resizeEvent();
				
				if (params.autoplay)
				{
					timername=setInterval(function(){autoPlay()},params.timer);					
					$(params.modul).on("mouseenter",function (){
						clearInterval(timername);
					});
					
					$(params.modul).on("mouseleave",function (){
						timername=setInterval(function(){autoPlay()},params.timer);
					});
				}
				else
				{
					clearInterval(timername);
				}
				
				if (!params.border)
				{
					params.modul.addClass("bn-bordernone");
				}

				if (params.fontstyle=="italic")
					params.modul.addClass("bn-italic");
					
				if (params.fontstyle=="bold")
					params.modul.addClass("bn-bold");
					
				if (params.fontstyle=="bold-italic")
					params.modul.addClass("bn-bold bn-italic");
					
				params.modul.addClass("bn-"+params.color);
				
				//Events---------------------------------------
				$(window).on("resize",function (){
					resizeEvent();
				});
				
				params.modul.find(".bn-navi span").on("click",function(){
					if (changestate)
					{
						changestate=false;
						if ($(this).index()==0)
						{
							active--;
							if (active<0)
								active=count-1;
								
							changeNews();
						}
						else
						{
							active++;
							if (active==count)
								active=0;
							
							changeNews();
						}
					}
				});
				
				//functions------------------------------------
				function resizeEvent()
				{
					if (params.modul.width()<480)
					{
						params.modul.find(".bn-title h2").css({"display":"none"});
						params.modul.find(".bn-title").css({"width":10});
						// params.modul.find("ul").css({"left":30});
					}
					else
					{
						params.modul.find(".bn-title h2").css({"display":"inline-block"});
						params.modul.find(".bn-title").css({"width":"auto"});
						// params.modul.find("ul").css({"left":$(params.modul).find(".bn-title").width()+30});
					}
				}
				
				function autoPlay()
				{
					active++;
					if (active==count)
						active=0;
					
					changeNews();
				}
				
				function changeNews()
				{
					if (params.effect=="fade")
					{
						params.modul.find("ul li").css({"display":"none"});
						params.modul.find("ul li").eq(active).fadeIn(params.effectspeed,function (){ 
							changestate=true;
						});
					}
					else if (params.effect=="slide-h")
					{
						params.modul.find("ul li").eq(previous).animate({width:0},function(){
							$(this).css({"display":"none","width":"100%"});
							params.modul.find("ul li").eq(active).css({"width":0,"display":"block"});
							params.modul.find("ul li").eq(active).animate({width:"100%"},function(){
								changestate=true;
								previous=active;
							});
						});
					}
					else if (params.effect=="slide-v")
					{
						if (previous<=active)
						{
							params.modul.find("ul li").eq(previous).animate({top:-60});
							params.modul.find("ul li").eq(active).css({top:60,"display":"block"});
							params.modul.find("ul li").eq(active).animate({top:0},function(){
								previous=active;
								changestate=true;
							});
						}
						else
						{
							params.modul.find("ul li").eq(previous).animate({top:60});
							params.modul.find("ul li").eq(active).css({top:-60,"display":"block"});
							params.modul.find("ul li").eq(active).animate({top:0},function(){
								previous=active;
								changestate=true;
							});
						}
					}
				}

			});
		};
})(jQuery);
