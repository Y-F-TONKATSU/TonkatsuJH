var CjsHandler;

(function(){

	var cjsLoader = {
		
		'crouton':function(root, onComplete){
			
			var loader = new createjs.LoadQueue(false);
			
			loader.addEventListener("fileload", function(evt) {
				
				console.log('A Cjs Image Loaded');
						
				if (evt.item.type == "image") { 
					cjsImages[evt.item.id] = evt.result;
				}
				
			});
			
			var currentLabel = '';
			
			loader.addEventListener("complete", _.bind(function (evt) {
				
				console.log('Cjs Image Loading Complete');
				
				var bCanvas = this.backCanvas.getCanvas();
				var fCanvas = this.foreCanvas.getCanvas();
				
				this.foreMc = new cjsLib[root]().foreground;
				this.backMc = new cjsLib[root]().background;				
				
				this.bStage = new createjs.Stage(bCanvas);
				this.bStage.addChild(this.backMc);
				this.bStage.update();
				
				this.fStage = new createjs.Stage(fCanvas);
				this.fStage.addChild(this.foreMc);
				this.fStage.update();
				
				createjs.Ticker.setFPS(cjsLib.properties.fps);
				createjs.Ticker.addEventListener("tick", this.fStage);
				createjs.Ticker.addEventListener("tick", this.bStage);
				createjs.Ticker.addEventListener("tick", _.bind(function(e){
					var label = this.foreMc.currentLabel;
					if(currentLabel !== label){
						if(cjsEvents.labelOut[currentLabel]){
							cjsEvents.labelOut[currentLabel].call(this);
						}
						if(cjsEvents.label[label]){
							cjsEvents.label[label].call(this);
						}
					}
					currentLabel = label;
					if(label.indexOf('_stop') >= 0){
						this.foreMc.stop();
						
					}
					if(this.backMc.currentLabel.indexOf('_stop') >= 0){
						this.backMc.stop();
					}
				}, this));
				
				onComplete({
					'onSceneChanged':_.bind(function(scene){
						this.foreMc.gotoAndPlay(scene + '_start');
						this.backMc.gotoAndPlay(scene + '_start');
					}, this)
				});
				
			}, this));
			
			loader.loadManifest(cjsLib.properties.manifest);
			
			
		}
	};
		
	CjsHandler = function(fch, bch){
		this.foreCanvas = fch;
		this.backCanvas = bch;
	};
	
	CjsHandler.prototype = {
		
		startLoading:function(loaderType, root, onComplete){
			cjsLoader[loaderType].call(this, root, onComplete);
		},
		
	}
	
})();
