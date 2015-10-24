var Clock;

(function(){
	
	var canvas = $('#canvas').get(0);
	var context = canvas.getContext('2d');
	
	var surfData;
	
	function setSurfData(){
		surfData = context.getImageData(0, 0, canvas.width, canvas.height);
	}
	
	function init(){
		context.moveTo(canvas.width, 0);
		context.lineTo(0, canvas.height);
		context.stroke();
		console.log(canvas.height)
		setSurfData();
	}
	
	var t = 0;
	
	function draw(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.putImageData(surfData, 0, 0);
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(t, t);
		context.stroke();
		t++;
	}
	
	init();
	
	setInterval(draw, 10);
	
		
})();