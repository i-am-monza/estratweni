var $ = require('jquery');

$(document).ready(() => {
	$(window).scroll(() => {
		$('.card.signin').fadeOut(1000).delay(1000).css('display', 'none');
		$('.card.signup').fadeOut(1000).delay(1000).css('display', 'none');
	});

	$('a#signupLink').click(() => {
		$('.card.signin').fadeOut(1000).delay(1000).css('display', 'none');
		$('.card.signup').fadeIn(1000).delay(1000).css('display', 'flex');
	});

	$('button#cancel').click(() => {
		$('.card.signin').css('display', 'none');
		$('.card.signup').css('display', 'flex');
	});

	$('button#submit-signup').click(() => {
		$('.card.signup').css('display', 'none');
	});

	$('button#submit-signin').click(() => {
		$('.card.signin').css('display', 'none');
	});

	// Handle click on paging links
	$('.tm-paging-link').click(function(e){
		e.preventDefault();
		
		var page = $(this).text().toLowerCase();
		$('.tm-gallery-page').addClass('hidden');
		$('#tm-gallery-page-' + page).removeClass('hidden');
		$('.tm-paging-link').removeClass('active');
		$(this).addClass("active");
	});

	// accordion menu in 
	var acc = document.getElementsByClassName("accordion");
	var i;
	
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight) {
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    }
	  });
	}	

	$('.user-menu a').click(() => {
		$('.parallax-window').css('display', 'none');
		$('.header').css('min-height', '0');
	});

	// carousel animation
	$('li#zero').click(() => {
		$('ul.carousel-indicators li.active').removeClass('active');
		$('div.carousel-inner div.active').removeClass('active');

		$('li#zero').addClass('active');
		$('div#item-zero').addClass('active');
	});

	$('li#one').click(() => {
		$('ul.carousel-indicators li.active').removeClass('active');
		$('div.carousel-inner div.active').removeClass('active');

		$('li#one').addClass('active');
		$('div#item-one').addClass('active');
	});

	$('li#two').click(() => {
		$('ul.carousel-indicators li.active').removeClass('active');
		$('div.carousel-inner div.active').removeClass('active');

		$('li#two').addClass('active');
		$('div#item-two').addClass('active');
	});

	$('li#three').click(() => {
		$('ul.carousel-indicators li.active').removeClass('active');
		$('div.carousel-inner div.active').removeClass('active');

		$('li#three').addClass('active');
		$('div#item-three').addClass('active');
	});
});