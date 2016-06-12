if(!Tweeners){var Tweeners = {};}

Tweeners.basic = {
	
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