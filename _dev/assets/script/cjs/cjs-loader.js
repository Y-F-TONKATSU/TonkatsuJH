var CjsLoader;

(function(){
	
		
	CjsLoader = function(ch, lib, cjsImages){
		
		this.canvasHandler = ch;
		
		var loader = new createjs.LoadQueue(false);
		
		var that = this;
		
		loader.addEventListener("fileload", function(evt) {
			
			if (evt.item.type == "image") { 
				cjsImages[evt.item.id] = evt.result;
			}
			
		});
		
		loader.addEventListener("complete", function (evt) {
			
			var canvas = that.canvasHandler.getCanvas();
			
			that.root = new lib.CjsAbstract();
			
			that.stage = new createjs.Stage(canvas);
			that.stage.addChild(that.root);
			that.stage.update();
			
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", that.stage);
			
		});
		
		loader.loadManifest(lib.properties.manifest);
		
	}
	
	CjsLoader.prototype = {
		
	}
	
	
	
})();