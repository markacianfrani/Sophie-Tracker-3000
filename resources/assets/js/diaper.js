$(function() {
	$('#diaperModal button').on('click', function () {
		trackEvent($('#diaperModal'), 'Diaper', $(this).data('value'));
		return false;
	});
});