$(function() {
	var pumpType;

	$('#pumpModal').on('hidden.bs.modal', function () {
		// Reset all button states
		$('#pumpModal .pump-types button')
			.removeClass('btn-primary')
			.removeClass('btn-info')
			.addClass('btn-info');

		// Hide all sub options
		$('#pumpModal .pump-options').addClass('hide');
	});

	$('#pumpModal .pump-types button').on('click', function () {
		// Reset all button states
		$('#pumpModal .pump-types button')
			.removeClass('btn-primary')
			.removeClass('btn-info')
			.addClass('btn-info');

		// Make this button primary
		$(this).removeClass('btn-info').addClass('btn-primary');

		$('#pumpModal .pump-options').removeClass('hide');

		pumpType = $(this).data('value');

		return false;
	});

	$('#pumpModal button.save').on('click', function () {
		trackEvent($('#pumpModal'), 'Pump', pumpType, $(this).parent().find('.spinner').data('value'));
		return false;
	});
});