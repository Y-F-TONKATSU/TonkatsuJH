var n = 0;

var heavyTask = function(){
	_.each(_.range(0, 1000000), function(v){
		n = n + v;
	});
	console.log(n);
}


$(function(){
	
	var startTime = window.performance.now();
	
	var animate = function(){
		
		var currentTime = window.performance.now() - startTime;
		
		//経過時間を秒単位で算出
		var currentSec = Math.floor(currentTime / 1000);
		$('#log').text(currentSec + ' 秒経過!');
		heavyTask();
		//インターバルを 24回 / 秒 に設定
		requestAnimationFrame(animate);
		
	};
	
	requestAnimationFrame(animate);

	var animate2 = function(){
		
		var currentTime = window.performance.now() - startTime;
		
		//経過時間を秒単位で算出
		var currentSec = Math.floor(currentTime / 1000);
		$('#log2').text(currentSec + ' 秒経過!');
		heavyTask();		
		//インターバルを 24回 / 秒 に設定
		setTimeout(animate2);
		
	};
	
	setTimeout(animate2);

	/*var o = {};
	o.handleEvent = function(e){
		$('#log').text(e.delta);
		//heavyTask();
	};
	createjs.Ticker.framerate = 10;
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener('tick', o);
	*/
});