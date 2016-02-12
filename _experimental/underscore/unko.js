var ch = new CanvasHandler($('canvas').get(0));
var ctx = ch.getContext();

var drawUnko = function(centerX, startY, stepMax, baseFill, baseStroke){
	
	var stepWidth = 20;
	var stepHeight = 50;
	
	noise.seed(Math.random());

	
	for(var i = Math.random() * 0.1; i <= 1; i += Math.random() * 0.1){
		
		var stepper = 0.05;
		var stepper2 = 0.1;
		var whiteNoise = 0.1
		
		for(var j = Math.random() * 0.05; j <= 1; j += Math.random() * stepper){
			
			
			whiteNoise = 0.1;
			drawSteps(centerX, startY, stepMax, stepWidth * Math.abs(1 - j), stepHeight, i, j, whiteNoise, baseFill, baseStroke);
			
			whiteNoise = 0.3;
			ctx.translate(centerX * 2, 0);
			ctx.scale(-1, 1);
			drawSteps(centerX, startY, stepMax, stepWidth * Math.abs(1 - j), stepHeight, i, j, whiteNoise, baseFill, baseStroke);
			
			ctx.restore();
			
			stepper += 0.01 + stepper2;
			stepper2 += 0.003;
			
		}
	}
	
};

var drawSteps = function (centerX, startY, stepMax, stepWidth, stepHeight, i, j, whiteNoise, baseFill, baseStroke){
	
	var n = 1 + noise.perlin2(i, j) / 5;
	
	var noisedStepHeight0 = (stepHeight + 0.8) * n;
	var noisedStepHeight01 = (stepHeight * 1.4) * n;
	var noisedStepHeight02 = stepHeight * n;
	var noisedStepHeight03 = (stepHeight + 0.4) * n;
	
	var noisedStepWidth00 = (stepWidth * 2) * n;
	var noisedStepWidth01 = (stepWidth * 3) * n;
	var noisedStepWidth02 = (stepWidth * 1) * n;
	
	ctx.beginPath();
	ctx.moveTo(centerX, startY * n);
	ctx.bezierCurveTo(centerX, startY + noisedStepHeight03 * 0.8, 
	centerX - noisedStepWidth00, startY + noisedStepHeight03 * 0.5, 
	centerX - noisedStepWidth00, startY + noisedStepHeight02);
	ctx.bezierCurveTo(centerX - noisedStepWidth00, startY + noisedStepHeight01, 
	centerX - noisedStepWidth02, startY + noisedStepHeight01, 
	centerX , startY + noisedStepHeight01);
	ctx.bezierCurveTo(centerX - noisedStepWidth02, startY + noisedStepHeight01, 
	centerX - noisedStepWidth01, startY + noisedStepHeight01, 
	centerX - noisedStepWidth01, startY + noisedStepHeight02 * 2);
		
	for(var step = 2; step <= stepMax; step++){
		var noisedStepHeight = (step + 0.4) * n;
		var noisedStepHeight2 = (step + 1.4) * n;
		var noisedStepHeight3 = (step + 1) * n;
		
		var noisedStepWidth = (step + 1) * n;
		var noisedStepWidth2 = (step + 2) * n;
		var noisedStepWidth3 = (step + 0) * n;
		var noisedStepWidth4 = (step - 1) * n;
		
		if(step > 3){
			noisedStepHeight2 = (step + 1.4) * Math.abs(n - (n - 1) * (0.6 - (step * 0.01)));
		}
		
		ctx.bezierCurveTo(
		centerX - stepWidth * noisedStepWidth, startY + stepHeight * noisedStepHeight, 
		centerX - stepWidth * noisedStepWidth4, startY + stepHeight * noisedStepHeight, 
		centerX, startY + stepHeight * noisedStepHeight);
		ctx.bezierCurveTo(
		centerX - stepWidth * noisedStepWidth3, startY + stepHeight * noisedStepHeight, 
		centerX - stepWidth * noisedStepWidth2, startY + stepHeight * noisedStepHeight, 
		centerX - stepWidth * noisedStepWidth2, startY + stepHeight * noisedStepHeight3);
		ctx.bezierCurveTo(
		centerX - stepWidth * noisedStepWidth2, startY + stepHeight * noisedStepHeight2, 
		centerX - stepWidth * noisedStepWidth3, startY + stepHeight * noisedStepHeight2, 
		centerX, startY + stepHeight * noisedStepHeight2);
	}
	
	var r = Math.floor((10 + baseFill.r * Math.abs(j)) * n);
	var g = Math.floor((10 + baseFill.g * Math.abs(1 - j)) * n);
	var b =  Math.floor((10 + baseFill.b * Math.abs(1 - j)) * n);
	var a = 0.1 * Math.abs(j) * n;
	
	ctx.fillStyle = ch.rgbas(r, g, b, a);
	ctx.fill();
	
	r = Math.floor((20 + baseStroke * Math.abs(j)) * n);
	g = Math.floor((5 + baseStroke * Math.abs(j)) * n);
	b =  Math.floor((5 + baseStroke * Math.abs(j)) * n);
	a = 0.8 * Math.abs(j) * n;
	
	if(whiteNoise * n * Math.abs(j) > Math.random()){
		r = 255;
		g = 255;
		b = 255;
		a = 0.6;
	}
	
	ctx.lineWidth = n / 10 * Math.abs(j);
	ctx.strokeStyle = ch.rgbas(r, g, b, a);
	ctx.stroke();
	
	ctx.closePath();
	
};
	
