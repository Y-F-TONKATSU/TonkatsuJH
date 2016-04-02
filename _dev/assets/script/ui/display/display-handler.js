var DisplayHandler;

(function(){
	
	DisplayHandler = function(){
		
	};
	
	
	DisplayHandler.prototype = {
		
		THRESHOLD:{
			small:600,
			medium:960,
			large:1280,
		},
	
		getSize:function(){
			
			var larger;
			
			if(this.getOrientation() === 'landscape'){
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
		
		getOrientation:function(){
			var v = 'portrait';
			if(this.getWidth() >= this.getHeight()){
				v = 'landscape';
			}
			
			return	v;
		}
		
	};
	
})();

	
