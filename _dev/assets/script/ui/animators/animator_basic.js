if(!Animators){var Animators = {};}

Animators.basic = {
	
	'white':function(){
		
		var progress = this.progress;
			
		var ch = this.ch;
		var ctx = ch.getContext();
		
		ch.setFillStyle(200, 200, 200, 1);
		var w = ch.getCanvasWidth();
		var h = ch.getCanvasHeight();
		
		ch.drawShape(function(ctx){
			ctx.rect(0, 0, w, h);
		}, false, true);
		
	},
	
	'wipe_square':function(){
		
		var progress = this.progress;
			
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
	
	'wipe_circle':function(){
		
		var progress = this.progress;
			
		var ch = this.ch;
		var ctx = ch.getContext();
		
		ch.setWidth(10);
		ch.setStrokeStyle(Math.floor(200 + progress * 400), Math.floor(255 - progress * 400), 0, 1);
		ch.setFillStyle(250, 250, 0, 1);
		var x = DisplayUtil.getWidth() * 0.5;
		var y = DisplayUtil.getHeight() * 0.5;
		var rad = DisplayUtil.getLonger();
		
		ch.setWidth(5);
		ch.drawShape(function(ctx){
			ctx.arc(x, y, rad * progress * 1.8, 0, Math.PI * 2);
		}, true, false);
		
		ch.drawShape(function(ctx){
			ctx.arc(x, y, rad * progress * 1.2, 0, Math.PI * 2);
		}, true, false);
		
		ch.drawShape(function(ctx){
			ctx.arc(x, y, rad * progress, 0, Math.PI * 2);
		}, false, true);
		
		ctx.save();
		
		ctx.beginPath();
		ctx.arc(x, y, rad * progress * 0.7, 0, Math.PI * 2);
		ctx.clip();
		ch.clear();
		
		ctx.restore();
		
	},
	
	'loader_circle':function(){
		
		var progress = this.progress;
			
		var ch = this.ch;
		var ctx = ch.getContext();
		
		ch.setWidth(10);
		var w = ch.getCanvasWidth();
		var h = ch.getCanvasHeight();
		var cx = w * 0.5;
		var cy = h * 0.5;
		var inprogress = (1 - progress);
		var f = (this.currentFrame % this.duration  + 1) / this.duration;
		
		ch.setFillStyle(200, 200, 100, 0.5);
		ch.drawShape(function(ctx){
			ctx.rect(0, 0, w, h);
		}, false, true);

		ctx.fillStyle = ch.rgbas(247, 244, 232, progress);
		
		ch.drawShape(_.bind(function(ctx){
			ctx.rect(cx * inprogress, cy * inprogress, w * progress, h * progress);
		}, this), false, true);
		
		var rad = w * 0.4;
		if(h < w){rad = h * 0.4;}
		
		ctx.fillStyle = this.color;
		ctx.save();
		ctx.gloabalAlpha = inprogress;
		ch.drawShape(_.bind(function(ctx){
			ctx.arc(cx, cy, rad * progress , 0 , Math.PI * 2);
		}, this), false, true);
		ctx.restore();
		
		var s = Math.PI * 0.1;
		
		var r = 200;
		var g = 0;
		var b = 0;
		var a = 1 - Math.pow(progress, 2);
		
		_.times(3 + Math.floor(10 * progress), _.bind(function(n){
					
			ch.setWidth(4 + n % 3);
			
			if(n % 5 == 0){
				r = 230;
				g = 0;
				b = 18;
			} else if (n % 4 == 1) {
				r = 235;
				g = 97;
				b = 0;
			} else if (n % 3 == 1) {
				r = 234;
				g = 210;
				b = 47;
			} else if (n % 3 == 0) {
				r = 0;
				g = 154;
				b = 62;
			} else if (n % 2 == 1) {
				r = 126;
				g = 49;
				b = 122;
			} else {
				r = 11;
				g = 49;
				b = 143;
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
		ctx.textAlign = 'center';
		ch.setFillStyle(20, 20, 250, 1);
		ctx.fillText(Math.floor(progress * 100) + '%', cx, cy);
			
	},
	
}