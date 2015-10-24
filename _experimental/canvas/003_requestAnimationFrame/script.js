$(function(){
	
	var current = 0;
	var canvas = $('canvas').get(0);
	var context = canvas.getContext('2d');
	
	var preProgress = {x:0, y:200};
	var j = 10;
	var flucturation = 1;
	
	var colors = ['#ff0000', '#00ff00', '#0000ff'];
	
	function step(timestamp) {
		
		var delta = (timestamp - current) / 5000;
		for (var i = 0; i < j; i++){
			var x = preProgress.x + delta / j * i;
			var y = preProgress.y + (Math.random() * flucturation - (flucturation / 2));
			for (var s = 0; s < 3; s++){
				context.strokeStyle = colors[Math.floor(Math.random() * s)];
				context.lineWidth = 0.1;
				var r =  s * 50;
				context.moveTo(preProgress.x, preProgress.y + r);
				context.lineTo(x, y + r);
				context.stroke();
			}
			flucturation+= 0.001;
			preProgress.x = x;
			preProgress.y = y;
		}
		current = timestamp;
		j += 10;
		if(timestamp < 100000){
			window.requestAnimationFrame(step);
		}
	}
	
	window.requestAnimationFrame(step);
	
});

