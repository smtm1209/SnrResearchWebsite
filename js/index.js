$(document).ready(function() {
	$('#nav_docs').hover(
		function() {
			$(this).children('#nav_dropdown').slideDown(200);
		}, 
		function() {
			$(this).children('#nav_dropdown').slideUp(200);
		}
	);
});