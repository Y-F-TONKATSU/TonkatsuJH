var E000020 = {};

E000020.resetAntSim = function(){
	this.ch = new CanvasHandler($('#contMainCanvas').get(0));
	var antSim = new AntSim(this.ch);
	
	var lastTime;
	
	this.timer = setInterval(_.bind(antSim.update, antSim), 1000 / 24)
}

E000020.removeAntSim = function(){
	if(this.ch && this.timer){
		this.ch.clear();
		clearInterval(this.timer);
	}
}
