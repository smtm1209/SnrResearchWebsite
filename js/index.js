$(document).ready(function() {
	$('#nav_docs').hover(
		function() {
			$(this).children('#nav_dropdown').slideDown(200);
		}, 
		function() {
			$(this).children('#nav_dropdown').slideUp(200);
		}
	);
	$('#nav_paper').hover(
		function() {
			$(this).children('#paper_dropdown').slideDown(200);
		}, 
		function() {
			$(this).children('#paper_dropdown').slideUp(200);
		}
	);
});