$(document).ready(function() {
	var count = 0;
	$('#img').on('click', function() {
		count++;
		$("#counter").html('nombre de clic: ' + count);
	});
});











