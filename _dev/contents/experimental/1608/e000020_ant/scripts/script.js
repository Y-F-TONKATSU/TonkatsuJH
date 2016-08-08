$(function(){
		
	var ch = new CanvasHandler($('#contMainCanvas').get(0));
	var antSim = new AntSim(ch);
	
	var lastTime;
	
	setInterval(_.bind(antSim.update, antSim), 1000 / 24)
	
});