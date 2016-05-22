$(function(){
	
	var ch = new CanvasHandler($('canvas').get(0));
	var ctx = ch.getContext();
	
	var CICLE = 100;
	
	var Graph = function(){
		this._frame = 0;	
	}
	
	Graph.prototype = {	
		
		init:function(){
			
			ctx.beginPath();
			ctx.lineWidth = 10;
			ctx.strokeStyle = ch.getRandomColorHexString(0, 255, 0, 255, 0, 255);
			
			var r = 2 * Math.PI;
			
			
			ctx.arc(ch.getCenterX(), ch.getCenterY(), ch.getCenterY() / 2, 0, r);
			ctx.stroke();
			
			ch.saveSurface();
			
		},
		
		update:function(){
			
			ch.loadSurface();

			ctx.beginPath();
			
			ctx.lineWidth = 10;
			ctx.strokeStyle = ch.getRandomColorHexString(0, 255, 0, 255, 0, 255);
			
			var w = ch.getCanvasWidth();
			var h = ch.getCanvasHeight();
			var unitW = w * 0.8 / CICLE;
			var f = this._frame % (CICLE * 2);
			if(f > CICLE){f = CICLE - f % CICLE;}
			ctx.strokeStyle = ch.getRandomColorHexString();
			ctx.moveTo(w * 0.1 + unitW * f, h * 0.1);
			ctx.lineTo(w * 0.9 - unitW * f, h * 0.9);
			ctx.stroke();
			
			this._frame++;
			
		},
		
	}
	
	var graph = new Graph();
	graph.init();
	
	var draw = function(){
		graph.update();
		requestAnimationFrame(draw);
	}
	
	requestAnimationFrame(draw);
	
});

