var ShadowHandler;

(function(){

	var ZI_SHADOW = 1000;
	
	var putShadowLandscape = function(ch, ctx, shadowWidth, w, h){
		
		var grad  = ctx.createLinearGradient(0, 0, shadowWidth, 0);
		grad.addColorStop(1.0,ch.rgbas(0, 0, 0, 0));
		grad.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad.addColorStop(0.0,ch.rgbas(0, 0, 0, 1));
		var grad2  = ctx.createLinearGradient(w - shadowWidth, 0, w, 0);
		grad2.addColorStop(1.0,ch.rgbas(0, 0, 0, 1));
		grad2.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad2.addColorStop(0.0,ch.rgbas(0, 0, 0, 0));
			
		ctx.beginPath();
		ctx.rect(0,0, shadowWidth, h);
		ctx.fillStyle = grad;
		ctx.fill();
		ctx.beginPath();
		ctx.rect(w - shadowWidth, 0, w, h);
		ctx.fillStyle = grad2;
		ctx.fill();
		
	};
	
	var putShadowPortrait = function(ch, ctx, shadowWidth, w, h){
		
		var grad  = ctx.createLinearGradient(0, 0, 0, shadowWidth);
		grad.addColorStop(1.0,ch.rgbas(0, 0, 0, 0));
		grad.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad.addColorStop(0.0,ch.rgbas(0, 0, 0, 1));
		var grad2  = ctx.createLinearGradient(0, h - shadowWidth, 0, h);
		grad2.addColorStop(1.0,ch.rgbas(0, 0, 0, 1));
		grad2.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad2.addColorStop(0.0,ch.rgbas(0, 0, 0, 0));
		
		ctx.beginPath();
		ctx.rect(0,0, w, shadowWidth);
		ctx.fillStyle = grad;
		ctx.fill();
		ctx.beginPath();
		ctx.rect(0, h - shadowWidth, w, h);
		ctx.fillStyle = grad2;
		ctx.fill();
			
	};
	
	ShadowHandler = function(){
		
	};
	
	ShadowHandler.prototype = {
		
		putShadow:function(ch){
			
			$(ch.getCanvas()).css({
				'zIndex':ZI_SHADOW,
			});
			var ctx = ch.getContext();
			
			var w = ch.getCanvasWidth();
			var h = ch.getCanvasHeight();
			var shadowWidth = w * 0.05;
			
			if(DisplayUtil.isLandscape()){
				if(DisplayUtil.isOverRatio()){
					putShadowLandscape(ch, ctx, shadowWidth, w, h);
				} else {
					putShadowPortrait(ch, ctx, shadowWidth, w, h);
				}
			} else {
				if(DisplayUtil.isOverRatio()){
					putShadowPortrait(ch, ctx, shadowWidth, w, h);
				} else {
					putShadowLandscape(ch, ctx, shadowWidth, w, h);
				}
			}
			

		}
	}
	
})();
