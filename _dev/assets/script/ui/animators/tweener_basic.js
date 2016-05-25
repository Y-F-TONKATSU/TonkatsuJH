Tweeners.basic = {
	
	'progress':function(delta){
		return this.progress;
	},
	
	'normal':function(delta){
		return this.currentFrame / this.duration;
	},
	
	'easeIn':function(delta){
		return Math.pow(this.currentFrame / this.duration, 2);
	}
	
}