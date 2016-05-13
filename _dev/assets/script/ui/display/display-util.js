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
		}
		
	};
	
})();

	
