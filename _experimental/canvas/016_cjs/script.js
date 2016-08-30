$(function(){
	
	var stage = new createjs.Stage('canvas1');
	
	var g = new createjs.Graphics();
	g.setStrokeStyle(1);
	g.beginStroke(createjs.Graphics.getRGB(255,255,0));
	g.beginFill(createjs.Graphics.getRGB(255,0,0));
	
	var s = new createjs.Shape(g);
	s.x = 100;
	s.y = 100;
	
	stage.addChild(s);
	stage.update();	
	
	var t = 0;
	
	createjs.Ticker.addEventListener('tick', function(){
		t++;
		g.drawCircle(Math.random() * 20,t % 10 * 30 + Math.random() * 5,30);
		stage.update();	
	})
	
});

