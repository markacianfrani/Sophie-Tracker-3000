$(function() {
	$('.eventbutton-sleep').on('click', function () {
		trackEvent(null, 'Sleep');
		return false;
	});
});