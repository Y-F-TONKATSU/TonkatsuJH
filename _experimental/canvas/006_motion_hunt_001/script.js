$(function(){
	
	var ch = new CanvasHandler($('canvas').get(0));
	var ctx = ch.getContext();
	
	var BASE_SIZE = 300;
	
	var drawFirstCircle = function(){
		
		ctx.beginPath();
		ctx.lineWidth = 200;
		ctx.strokeStyle = '#0000ff';
		ctx.arc(ch.getCenterX(), ch.getCenterY(), BASE_SIZE, 0, 2 * Math.PI);
		ctx.stroke();	
		
	};
	
	var TOTAL_FRAMES = 300;
	var frame = 0;
	
	var drawCircles = function(circles){
		
		_.each(circles, function(circle){
			
			if(frame > circle.offset){
				ctx.beginPath();
				ctx.lineWidth = circle.lineWidth;
				ctx.strokeStyle = circle.color;
				
				var r = 2 * Math.PI / TOTAL_FRAMES * (frame - circle.offset) + circle.startRad;
				
				
				ctx.arc(ch.getCenterX(), ch.getCenterY(), BASE_SIZE + circle.size, circle.startRad, r);
				ctx.stroke();
			}
			
		});
		
		frame++;
		
	};
	
	var getCircleObject = function(base){
		
		var obj = {};
		
		obj.lineWidth = Math.random() * 12;
		obj.size = Math.random() * 200 - 100;
		obj.offset = Math.random() * 100;
		obj.startRad = Math.random() * 2 * Math.PI;
		
		var r, g, b, c;
		r = (Math.floor(Math.random() * 255) << 16);
		g = (Math.floor(Math.random() * 255) << 8);
		b = (Math.floor(Math.random() * 255));
		c = (r + g + b).toString(16);
		var pad = '';
		_.times(6 - c.length, function(){pad += '0'})
		c = pad + c;
		console.log(c);
		
		obj.color = '#' + c;
		return obj
		
	}
	
	var circles = [];
	_.times(50, function(){
		circles.push(getCircleObject());
	})
	
	var draw = function(){
		drawFirstCircle();
		drawCircles(circles);
		requestAnimationFrame(draw);
	}
	
	requestAnimationFrame(draw);
	
});

