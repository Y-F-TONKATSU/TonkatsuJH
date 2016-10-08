$(function(){
	
	var Player = function(action, playButton, stopButton){
		
		console.log('init');
		
		$(playButton).click(function(){
			createjs.Ticker.addEventListener('tick', action);
		});
		
		$(stopButton).click(function(){
			createjs.Ticker.removeEventListener('tick', action);
		});
	};
	
	var player = new Player(function(){
		console.log('playing');
	}, $('#playButton'), $('#stopButton'));

});