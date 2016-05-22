$(function(){
	
	var ch = new CanvasHandler($('canvas').get(0));
	var ctx = ch.getContext();
	
	var gaussian = function(mean, stdev) {
		var y2;
		var use_last = false;
		return function() {
			var y1;
			if(use_last) {
			   y1 = y2;
			   use_last = false;
			}
			else {
				var x1, x2, w;
				do {
					 x1 = 2.0 * Math.random() - 1.0;
					 x2 = 2.0 * Math.random() - 1.0;
					 w  = x1 * x1 + x2 * x2;               
				} while( w >= 1.0);
				w = Math.sqrt((-2.0 * Math.log(w))/w);
				y1 = x1 * w;
				y2 = x2 * w;
				use_last = true;
		   }
	
		   var retval = mean + stdev * y1;
		   if(retval > 0) 
			   return retval;
		   return -retval;
	   }
	};
	
	var standard = gaussian(50, 10);
	
	var tondom = function(s, m, x){
		
		var i = 0;
		
		console.log(Math.E);
		
		while(i < n - 1 && Math.random() * 10 > 1){
			i++;
		}
		
		return i;
		
	};
	
	var Graph = function(){
		
		this.list = {};
		this.MAX = 100;
		this.baseX = ch.getCanvasWidth() * 0.04;
		this.baseY = ch.getCanvasHeight() * 0.9;
		
		_.times(this.MAX, _.bind(function(n){
			var maxR = 255 - n;
			this.list[n] = {
				'value': 0,
				'color': ch.getRandomColorHexString(maxR - 50, maxR, 70, 150 + n, 50, 150 + n)
			};
		}, this));
		
	}
	
	Graph.prototype = {	
		
		update:function(){
			
			this.addValue();
			
			var w = 16;
			
			ctx.lineWidth = w;
			
			_.each(this.list, _.bind(function(v, k){
				ctx.strokeStyle = v.color;
				ctx.beginPath();
				var x = this.baseX + parseInt(k) * w;
				ctx.moveTo(x, this.baseY);
				ctx.lineTo(x, this.baseY - (v.value + 1));
				ctx.stroke();
			}, this));
			
				
		},
		
		addValue:function(){
			
			var v = Math.floor(standard());
			this.list[v].value += 5;
				
		},
	}
	
	var graph = new Graph();
	
	var draw = function(){
		graph.update();
		requestAnimationFrame(draw);
	}
	
	requestAnimationFrame(draw);
	
});

