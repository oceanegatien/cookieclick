$(document).ready(function() {
	var count = 0;
	var message = ['oui', 'non', 'maybe', 'dont known']
	$('#img').on('click', function() {
		count++;
		$("#counter").html('nombre de clic: ' + count);
		//console.log(count);
		var random = Math.round(Math.random()*3);
		console.log(random);
		if (count %5 === 0) {
		$('#message').html(message[random]);
			
		}
	});


$("#img").on({
	'click': function() {
		$("img").attr('src','http://orig00.deviantart.net/d02a/f/2013/360/3/c/kawaii_cookie_png_by_adminwookielover-d6zhcvd.png');
	}
})
});









