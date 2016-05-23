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
		
	}
	
}