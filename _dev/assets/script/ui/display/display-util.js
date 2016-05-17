var DisplayUtil;

(function(){
	
	DisplayUtil = {
		
		RATIO_X: 1920,
		RATIO_Y: 1200,
		
		getRatio:function(){
			return DisplayUtil.RATIO_Y / DisplayUtil.RATIO_X;
		},
		
		getInvertedRatio:function(){
			return DisplayUtil.RATIO_X / DisplayUtil.RATIO_Y;
		},
		
		THRESHOLD:{
			small:600,
			medium:960,
			large:1280,
		},
	
		getSize:function(){
			
			var larger;
			
			if(DisplayUtil.getOrientation() === 'landscape'){
				larger = this.getWidth();
			} else {
				larger = this.getHeight();
			}
		
			if(larger < this.THRESHOLD.small){
				return 'small';
			} else if (larger < this.THRESHOLD.medium){
				return 'medium';
			} else {
				return 'large';
			}
			
	
		},
		
		getWidth:function(){
			return	window.innerWidth;
		},
		
		getHeight:function(){
			return	window.innerHeight;
		},
		
		isOverRatio:function(){
			if(DisplayUtil.isLandscape()){
				return DisplayUtil.getScreenRatio() < DisplayUtil.getRatio();
			} else {
				return DisplayUtil.getScreenRatio() > DisplayUtil.getInvertedRatio();
			}
		},
		
		isPortrait:function(){
			return DisplayUtil.getOrientation() == 'portrait';
		},
		
		isLandscape:function(){
			return DisplayUtil.getOrientation() == 'landscape';
		},
		
		getOrientation:function(){
			var v = 'portrait';
			if(DisplayUtil.getWidth() >= DisplayUtil.getHeight()){
				v = 'landscape';
			}
			return	v;
		},
		
		getScreenRatio:function(){
			return	DisplayUtil.getHeight() / DisplayUtil.getWidth();
		},
		
		getStageRect:function(){
			
			var ratio = DisplayUtil.getRatio();
			
			var w, h, t, l;
			
			if(DisplayUtil.isLandscape()){
				if(DisplayUtil.isOverRatio()){
					h = DisplayUtil.getHeight();
					w = h * DisplayUtil.getInvertedRatio();
					l = (DisplayUtil.getWidth() - w) * 0.5
					t = 0;					
				} else {
					w = DisplayUtil.getWidth();
					h = w * DisplayUtil.getRatio();
					t = (DisplayUtil.getHeight() - h) * 0.5
					l = 0;
				}
			} else {
				if(DisplayUtil.isOverRatio()){
					w = DisplayUtil.getWidth();
					h = w * DisplayUtil.getInvertedRatio();
					t = (DisplayUtil.getHeight() - h) * 0.5
					l = 0;
				} else {
					h = DisplayUtil.getHeight();
					w = h * DisplayUtil.getRatio();
					l = (DisplayUtil.getWidth() - w) * 0.5
					t = 0;					
				}
			}
			
			return {
				'width':w,
				'height':h,
				'top':t,
				'left':l,
			}

		},
		
		getObjectRect:function(rect){
			
			var stageRect = DisplayUtil.getStageRect();
			
			var xr = stageRect.width / DisplayUtil.RATIO_X;
			var yr = stageRect.height / DisplayUtil.RATIO_Y;
			
			var w = rect.width * xr;
			var h = rect.height * yr;
			var l = stageRect.left + rect.left * xr;
			var t = stageRect.top + rect.top * yr;
			
			return {
				'width':w,
				'height':h,
				'left':l,
				'top':t,
			}
		},
		
	};
	
})();

	
