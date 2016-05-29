var CjsHandler;

(function(){

	var cjsLoader = {
		
		'crouton':function(root, onProgress ,onComplete){
			
			var loader = new createjs.LoadQueue(false);
			
			loader.addEventListener('progress', onProgress);
			
			loader.addEventListener("fileload", function(evt) {
				
				if (evt.item.type == "image") { 
					console.log('A Cjs Image Loaded');
					cjsImages[evt.item.id] = evt.result;
				}
				
			});
			
			var currentLabel = '';
			
			loader.addEventListener("complete", _.bind(function (evt) {
				
				console.log('Cjs Image Loading Complete');
				
				var queue = evt.target;
				ss["script_atlas_"] = queue.getResult("script_atlas_");
				
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
				
				this.mainTickListener = _.bind(function(e){
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
				}, this);
				
				createjs.Ticker.setFPS(cjsLib.properties.fps);
				createjs.Ticker.addEventListener("tick", this.fStage);
				createjs.Ticker.addEventListener("tick", this.bStage);
				createjs.Ticker.addEventListener("tick", this.mainTickListener);
				
				onComplete({
					'onSceneChanged':_.bind(function(scene){
						this.foreMc.gotoAndPlay(scene + '_start');
						this.backMc.gotoAndPlay(scene + '_start');
					}, this)
				});
				
			}, this));
			
						
			//loader.loadFile({src:"contents/experimental/1604/e000019_crouton/images/script_atlas_.json?1464411112955", type:"spritesheet", id:"script_atlas_"}, true);
			loader.loadManifest(cjsLib.properties.manifest);
			
			
		}
	};
		
	CjsHandler = function(fch, bch){
		this.foreCanvas = fch;
		this.backCanvas = bch;
	};
	
	CjsHandler.prototype = {
		
		startLoading:function(loaderType, root, onProgress, onComplete){
			cjsLoader[loaderType].call(this, root, onProgress, onComplete);
		},
		
		stop:function(){
			
			if(this.foreMc) {
				this.foreMc.stop();
			}
			if(this.backMc) {
				this.backMc.stop();
			}
			
			createjs.Ticker.removeEventListener("tick", this.fStage);
			createjs.Ticker.removeEventListener("tick", this.bStage);
			createjs.Ticker.removeEventListener("tick", this.mainTickListener);
			
		},
		
		clear:function(){
			
			if(this.foreMc) {
				this.foreMc.stop();
			}
			if(this.backMc) {
				this.backMc.stop();
			}
			
			if(this.fStage){
				this.fStage.removeAllChildren();
			}
			if(this.bStage){
				this.bStage.removeAllChildren();
			}
			
			
		}
		
	}
	
})();
