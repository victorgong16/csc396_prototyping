(function($){
	$(document).ready(function(){
		

	    //stick in the fixed 100% height behind the navbar but don't wrap it
	    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
	    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));  


	    $("#slide-nav").on("click", '.navbar-toggle', function (e) {
	        var selected = $(this).hasClass('slide-active');
	        $('#slidemenu').stop().animate({
	            left: selected ? '-100%' : '0px'
	        });
	        $('#navbar-height-col').stop().animate({
	            left: selected ? '-80%' : '0px'
	        });
	        $('#page-content').stop().animate({
	            left: selected ? '0px' : '80%'
	        });
	        $('.navbar-header').stop().animate({
	            left: selected ? '0px' : '80%'
	        });
	        $(this).toggleClass('slide-active', !selected);
	        $('#slidemenu').toggleClass('slide-active');
	        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
	    });

	    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
	    $(window).on("resize", function () {
	        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
	            $(selected).removeClass('slide-active');
	        }
	    });
	    /**************/
	    $("#slidemenu").on("click", 'a', function (e) {
	    	var id=$(this).attr('id');
	    	$(this).closest('ul').find('li').removeClass('active');
	    	$(this).closest('li').addClass('active');
	    	$("#slide-nav .navbar-toggle").trigger('click');
	    	$('#page-content iframe').attr('src', id+'.html');
	    });

	});
})(jQuery); // end of jQuery name space