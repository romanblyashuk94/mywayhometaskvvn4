var btn = document.getElementById ('btn');

btn.onclick = function (e) {
    // var text = document.querySelector ('.offer__title');
    // text.classList.add ('red');
    // var img = document.querySelector ('.header__img');
    // img.style.display = 'none';
    e.preventDefault();
    document.querySelector ('.waiting-columns').style.justifyContent = "center";
}

$(function () {
	$(window).scroll(function() {
	    $('.section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.waiting__columns__item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.animfadainleft').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.animfadainright').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
})

