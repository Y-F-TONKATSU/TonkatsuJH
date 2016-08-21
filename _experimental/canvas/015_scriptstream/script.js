$(function(){
		
	var canvas = $('#canvas');
	var ch = new CanvasHandler(canvas.get(0));	
	
	$.ajax({
		'url': 'text.txt',
		'dataType':'text',
	}).done(_.bind(function(result) {
		
		var r = result.toString();
		var t = 0;
		
		setInterval(function(){
			var text = r.substring(t, t+50000);
			$('#log').text(text);
			t+= 1;
		}, 1000 / 24)
		
	}, this));
	
	
});

