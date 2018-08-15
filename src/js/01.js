$(document).ready(function(){

   $("#toabout").click(function(){
		$('html,body').animate({scrollTop: $("#about").offset().top},1000,"easeInOutBack");
		return false;
	});

	 $("#toportfolio").click(function(){
		$('html,body').animate({scrollTop: $("#portfolio").offset().top},1000,"easeInOutBack");
		return false;
	}); 
	 
	 $("#tocontact").click(function(){
		$('html,body').animate({scrollTop: $("#contact").offset().top},1000,"easeInOutBack");
		return false;
	});

	$(document).scroll(function(){
		var vitri = $('html,body').scrollTop(); 
		
		if(vitri > 500)
		{
			$('.navbar-fixed-top').addClass("zoomsize");
		}
		else
		{
			$('.navbar-fixed-top').removeClass("zoomsize");
		}

		if(vitri > 600)
		{
			$('.portfolio').addClass("truotngang");
		}
		else {
			$('.portfolio').removeClass("truotngang");
		}
	});

	// set cho icon zoom nam o giua hinh
	$('i.fa.fa-search-plus').css("line-height", $('.docao').css('height'));

	$('[hieuung="tooltip"]').tooltip(); 
	$('[pop="popover"]').popover(); 
});