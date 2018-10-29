$(document).ready(function() {
	jQuery("#all").click(function(){
		$(".jumpBox .linkbox, .mediabox").removeClass("hidden");
	});
	$("#broadway").click(function(){
		$(".jumpBox .linkbox, .mediabox").addClass("hidden");
		$(".broadway").removeClass("hidden");
	});
	$("#singles").click(function(){
		$(".jumpBox .linkbox, .mediabox").addClass("hidden");
		$(".singles").removeClass("hidden");
	});
	$("#cultural").click(function(){
		$(".jumpBox .linkbox, .mediabox").addClass("hidden");
		$(".cultural").removeClass("hidden");
	});
	$("#community").click(function(){
		$(".jumpBox .linkbox, .mediabox").addClass("hidden");
		$(".community").removeClass("hidden");
	});
	$("#passport").click(function(){
		$(".jumpBox .linkbox, .mediabox").addClass("hidden");
		$(".passport").removeClass("hidden");
	});
	$("header .toggle").click(function(){
		$(".mainMenu").toggleClass("active");
		$(".subNav").slideUp();
	});
	$(".filter").click(function(){
		$(".onFilter").removeClass("onFilter");
		$(this).toggleClass("onFilter");
	});
	$(".hasSub").click(function(){
		$(".subNav").slideToggle();
	});
	$(".toggle").click(function(){
		if ($(".mainMenu, .mainMenu.home").hasClass("active")) {
			$(".toggle").text("Close Menu");
		} else {
			$(".toggle").text("Open Menu");
		}
	});
	$(".return, .linkbox").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});