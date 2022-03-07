$ (document).ready (function() {
	$(".hiddenlogin").hide ();
	$ (".login").click (function() {
        $(this).toggleClass("active").next().slideToggle("slow")
        return false;
	});

});

