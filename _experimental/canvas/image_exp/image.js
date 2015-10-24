(function(){
	
	var _canvas, _context;
	
	_canvas = $('#canvas').get(0);
	_context = _canvas.getContext('2d');
	
	var image = new Image();
	image.src = 't01.jpg';
	image.onload = function(e){
		var x = 0;
		var y = 0;
		var r = 50;
		setInterval(function(){
			_context.drawImage(image, Math.cos(x) * r + 100, Math.sin(y) * r + 100, 100 + x, 200 + y);
			x+= 0.1;
			y+= 0.1;
		}, 10);
	}
	
})();