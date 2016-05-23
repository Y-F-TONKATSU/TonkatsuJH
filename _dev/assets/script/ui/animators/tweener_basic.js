Tweeners.basic = {
	
	'easeIn':function(delta){
		if(this.currentFrame === undefined){this.currentFrame = 0;}
		this.currentFrame += delta;
		return Math.pow(this.currentFrame / this.duration, 2);
	}
	
}