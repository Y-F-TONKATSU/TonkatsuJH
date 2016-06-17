var DisplayUtil;

(function(){
	
	DisplayUtil = {
		
		RATIO_X: 768,
		RATIO_Y: 480,
		
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
		
		getLonger:function(){
			var w = this.getWidth();
			var h = this.getHeight();
			return	w > h ? w : h;
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
		
		setRect:function(elem, l, t, w, h){
			
			var rect = DisplayUtil.getStageRect();
			
			$(elem).css({
				'width':rect.width * w,
				'height':rect.height * h,
				'left':rect.left + rect.width * l,
				'top':rect.top + rect.height * t,
			});
			
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
				'left':l,
				'top':t,
				'width':w,
				'height':h,
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
				'left':l,
				'top':t,
				'width':w,
				'height':h,
			}
		},
		
		getElemRect:function(elem){
			
			var rect = DisplayUtil.getStageRect();
			
			var w = rect.width * parseFloat($(elem).attr('data-layout-width'));
			var h = rect.height * parseFloat($(elem).attr('data-layout-height'));
			var l = rect.left + rect.width * parseFloat($(elem).attr('data-layout-left'));
			var t = rect.top + rect.height * parseFloat($(elem).attr('data-layout-top'));
			
			return {
				'left':l,
				'top':t,
				'width':w,
				'height':h,
			}
		},
		
		setStageRect:function(elem){
			
			this.rectToCss(DisplayUtil.getStageRect(), elem);
						
		},
		
		rectToCss:function(rect, elem){
			
			$(elem).css({
				'left': rect.left,
				'top': rect.top,
				'width': rect.width,
				'height': rect.height
			});
			
		},
		
	};
	
})();

	
