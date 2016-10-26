var Tweeners = Tweeners || {};

Tweeners = {
	
	'endless':function(){
		return 0;
	},
	
	'progress':function(){
		return this.progress;
	},
	
	'normal':function(){
		return this.currentTime / this.duration;
	},
	
	'easeIn':function(){
		return Math.pow(this.currentTime / this.duration, 2);
	}
	
}