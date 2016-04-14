var CjsLoader;

(function(){
	
		
	CjsLoader = function(ch){
		
		this.canvasHandler = ch;
		
		var loader = new createjs.LoadQueue(false);
		
		var that = this;
		
		loader.addEventListener("fileload", function(evt) {
			
			if (evt.item.type == "image") { 
				cjsImages_abs[evt.item.id] = evt.result;
			}
			
		});
		
		loader.addEventListener("complete", function (evt) {
			
			var canvas = that.canvasHandler.getCanvas();
			
			that.root = new cjsLib_abs.CjsAbstract();
			
			that.stage = new createjs.Stage(canvas);
			that.stage.addChild(that.root);
			that.stage.update();
			
			createjs.Ticker.setFPS(cjsLib_abs.properties.fps);
			createjs.Ticker.addEventListener("tick", that.stage);
			
		});
		
		loader.loadManifest(cjsLib_abs.properties.manifest);
		
	}
	
	CjsLoader.prototype = {
		
	}
	
	
	
})();