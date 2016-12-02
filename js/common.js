$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$(document).ready(function(){
	$('#doh').click(function(){
		$(".email_name").toggleClass("error");
		if($(".email_name").hasClass("error")){
			$(".error_znak").css("display","block");
		}
		if(!$(".email_name").hasClass("error")){
			$(".error_znak").css("display","none");
		}	
	});
	$('#doh_ok').click(function(){
		$(".email_name").toggleClass("ok");
		if($(".email_name").hasClass("ok")){
			$(".ok_znak").css("display","block");
		}
		if(!$(".email_name").hasClass("ok")){
			$(".ok_znak").css("display","none");
		}	
	});
});