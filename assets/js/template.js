jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky'); 
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};

	var initio_parallax_animation = function() { 
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
		 initio_parallax_animation();
	});

});

// === Portfolio Modal Logic ===
$('.portfolio-item').on('click', function(e) {
    e.preventDefault(); // Prevent default link
    var modal = $('#modal');
    var body = modal.find('.modal-body');

    var clone = $(this).clone();
    var link = $(this).attr('href');
    
    if (link) {
        clone.find('.tech-stack').after(`<p><a href="${link}" class="button" target="_blank">Click to View</a></p>`);
    }

    body.html(clone);
    modal.fadeIn(200);
});

$('.close-button').on('click', function() {
    $('#modal').fadeOut(200);
});

$(window).on('click', function(e) {
    if ($(e.target).is('#modal')) {
        $('#modal').fadeOut(200);
    }
});