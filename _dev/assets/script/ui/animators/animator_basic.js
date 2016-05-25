Animators.basic = {
	
	'wipe_square':function(progress){
		
		var ch = this.ch;
		var ctx = ch.getContext();
		
		ch.setWidth(10);
		ch.setFillStyle(200, 200, 100, 1);
		var w = ch.getCanvasWidth();
		var h = ch.getCanvasHeight();
		
		ch.drawShape(function(ctx){
			ctx.rect(w * 0.5 * (1 - progress * 2), h * 0.5 * (1 - progress * 2), w * progress * 2, h * progress * 2);
		}, false, true);
		
		ctx.save();
		
		ctx.beginPath();
		ctx.rect(w * 0.5 * (1 - progress), h * 0.5 * (1 - progress), w * progress, h * progress);
		ctx.clip();
		ch.clear();
		
		ctx.restore();
		
	},
	
	'loader_circle':function(progress){
		
		var ch = this.ch;
		var ctx = ch.getContext();
		
		ch.setWidth(10);
		var w = ch.getCanvasWidth();
		var h = ch.getCanvasHeight();
		var cx = w * 0.5;
		var cy = h * 0.5;
		var inprogress = (1 - progress);
		
		var f = (this.currentFrame % this.duration  + 1) / this.duration;
		
		ctx.fillStyle = ch.rgbas(247, 244, 232, progress);
		
		ch.drawShape(_.bind(function(ctx){
			ctx.rect(cx * inprogress, cy * inprogress, w * progress, h * progress);
		}, this), false, true);
		
		var rad = w * 0.4;
		if(h < w){rad = h * 0.4;}
		
		ch.setFillStyle(160, 160, 255, inprogress);
		ch.drawShape(_.bind(function(ctx){
			ctx.arc(cx, cy, rad * progress , 0 , Math.PI * 2);
		}, this), false, true);
			
		var s = Math.PI * 0.1;
		
		var r = 200;
		var g = 0;
		var b = 0;
		var a = 1 - Math.pow(progress, 2);
		
		_.times(3 + Math.floor(10 * progress), _.bind(function(n){
					
			ch.setWidth(4 + n % 3);
			
			if(n % 3 == 0){
				r = 255;
				g = 240;
				b = 0;
			} else if (n % 4 == 1) {
				r = 30;
				g = 30;
				b = 240;
			} else if (n % 2 == 1) {
				r = 255;
				g = 20;
				b = 20;
			} else {
				r = 180;
				g = n * 25;
				b = 0;
			}
			
			ch.setStrokeStyle(r, g, b, a * 0.2);
			
			rad -= 20;
			s += n * 0.01 + n % 2 * progress * 0.1;
			
			var y = (n * w * 0.35 + this.currentFrame * 0.1) % this.duration + Math.random() * 10;
			
			ch.drawShape(_.bind(function(ctx){
				ctx.moveTo(0, y);
				ctx.lineTo(w, y);
			}, this), true, false);
			
			ch.setStrokeStyle(r, g, b, a);
			
			ch.drawShape(_.bind(function(ctx){
				ctx.arc(cx, cy, rad , s , s + Math.PI * 2 * progress);
			}, this), true, false);
			
		}, this));
		
		ctx.font="50px Georgia";
		ch.setFillStyle(20, 20, 250, 1);
		ctx.fillText(Math.floor(progress * 100) + '%', cx, cy);
				
	},
	
}