// Write your Javascript code.
$(document).ready( function()
{
	$("#navbar").css("height", $("#navbarHead").height());
	
	var section;
	var navHeight = $(".navbar").height();
	
	$("#navbar a").click(function()
	{
		section = $(this).attr("data-section");
		
		$('html, body').animate(
		{
			scrollTop: $('#'+section).offset().top - navHeight - 10
		}, 500);
	});
	

	var whatIsJitsu = $("#whatIsJitsu").offset().top - navHeight;
	var whyDoJitsu = $("#whyDoJitsu").offset().top - navHeight;
    var instructors = $("#instructors").offset().top - navHeight;
    var trainingTimes = $("#trainingTimes").offset().top - navHeight;
	
	$(document).scroll(function()
	{
		var win = $(window).scrollTop() + $(window).height() / 3;
		
		if (win < whatIsJitsu)
		{
			$("#navbar :nth-child(1)").removeClass("active");
			$("#navbar :nth-child(2)").removeClass("active");
			$("#navbar :nth-child(3)").removeClass("active");
            $("#navbar :nth-child(4)").removeClass("active");
		}
		else if (win >= whatIsJitsu && win < whyDoJitsu)
		{
			$("#navbar :nth-child(1)").addClass("active");
			$("#navbar :nth-child(2)").removeClass("active");
			$("#navbar :nth-child(3)").removeClass("active");
            $("#navbar :nth-child(4)").removeClass("active");
		}
		else if (win >= whyDoJitsu && win < instructors)
		{
			$("#navbar :nth-child(1)").removeClass("active");
			$("#navbar :nth-child(2)").addClass("active");
			$("#navbar :nth-child(3)").removeClass("active");
            $("#navbar :nth-child(4)").removeClass("active");
		}
		else if (win >= instructors && win < trainingTimes)
		{
			$("#navbar :nth-child(1)").removeClass("active");
			$("#navbar :nth-child(2)").removeClass("active");
			$("#navbar :nth-child(3)").addClass("active");
            $("#navbar :nth-child(4)").removeClass("active");
		}
        else if (win >= trainingTimes)
		{
			$("#navbar :nth-child(1)").removeClass("active");
			$("#navbar :nth-child(2)").removeClass("active");
            $("#navbar :nth-child(3)").removeClass("active");
			$("#navbar :nth-child(4)").addClass("active");
		}
		
		
	});
	
});