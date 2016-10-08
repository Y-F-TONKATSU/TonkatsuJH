/*$(function(){
	
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
	
	var t = 100;
	
	createjs.Ticker.addEventListener('tick', function(e){
		g.clear();
		g.setStrokeStyle(1);
		g.beginStroke(createjs.Graphics.getRGB(255,255,0));
		g.beginFill(createjs.Graphics.getRGB(255,0,0));
		t += e.delta * 0.01;
		g.drawCircle(t, 100, 50);
		stage.update();	
	})
	
});*/

$(function(){
	
	var stage = new createjs.Stage('canvas1');
	
	var g = new createjs.Graphics();
	g.setStrokeStyle(1);
	g.beginStroke(createjs.Graphics.getRGB(255,255,0));
	g.beginFill(createjs.Graphics.getRGB(255,0,0));
	
	var s = new createjs.Shape(g);
	s.x = 100;
	s.y = 100;
	
	var t = 100;
	
	stage.addChild(s);
	console.log(stage.handleEvent);
	stage.handleEvent = function(e){
		g.clear();
		g.setStrokeStyle(1);
		g.beginStroke(createjs.Graphics.getRGB(255,255,0));
		g.beginFill(createjs.Graphics.getRGB(255,0,0));
		t += e.delta * 0.01;
		g.drawCircle(t, 100, 50);
		stage.update();	
	}
	
	createjs.Ticker.addEventListener('tick', stage);
	
});