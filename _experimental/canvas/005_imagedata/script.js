$(function(){
	
	var ch = new CanvasHandler($('canvas').get(0));
	var ctx = ch.getContext();
	
	var copyImageData = function(){
		
		var image = new Image();
		
		image.src = 'img.jpg';
		image.onload = function(){
			ctx.drawImage(image, 0, 0);
			var imageData = ctx.getImageData(0, 0, ch.getCanvasWidth(), ch.getCanvasHeight());
			console.log(imageData.data);
			for(var i = 0; i < imageData.data.length; i++){
				var r = Math.random() * 2 + 1;
				imageData.data[i] = imageData.data[i] / r;
			};
			console.log(imageData.data);
			ctx.putImageData(imageData, 0, 0);
		}
		
		
	};
	
	setInterval(copyImageData, 100);
	
});

