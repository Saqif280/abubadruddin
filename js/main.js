window.onload = () => {
    // $("body").delay(100).animate({ opacity: 1 }, 300);​
    // fade in content
    $(".section--hero").animate({ opacity: 1 }, 600)
    $(".content").delay(400).animate({ opacity: 1 }, 600);
    $(".footer").delay(400).animate({ opacity: 1 }, 600);
};

$(document).ready(function() {
	// ----------------------------------------
	// EVENT LISTENERS

	// slide to id
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;

		// add/remove active class
		$('a[href="'+$(this).attr("href")+'"]').addClass('active');
		$('a[href!="'+$(this).attr("href")+'"]').removeClass('active');

		$("body, html").animate({
			scrollTop: position
		}, 1000);
	});
});