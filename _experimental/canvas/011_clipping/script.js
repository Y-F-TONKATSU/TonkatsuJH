$(function(){
	
	var ch = new CanvasHandler($('canvas').get(0));
	var ctx = ch.getContext();
	
	var CICLE = 100;
	
	var Graph = function(){
		this._frame = 0;	
	}
	
	Graph.prototype = {	
		
		init:function(){
			
			ch.setFillStyle(200, 100, 100, 1);
			ch.drawShape(function(ctx){
				ctx.rect(0, 0, ch.getCanvasWidth(), ch.getCanvasHeight());
			}, false, true);
						
		},
		
		update:function(){
			
			ctx.save();
			
			var x = Math.floor(Math.random() * ch.getCanvasWidth());
			var y = Math.floor(Math.random() * ch.getCanvasHeight());
			
			console.log(x, y);
			
			ctx.beginPath();
			ctx.rect(x, y, 10, 10);
			ctx.clip();
			ctx.clearRect(0, 0, ch.getCanvasWidth(), ch.getCanvasHeight());
			
			ctx.restore();			
						
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

