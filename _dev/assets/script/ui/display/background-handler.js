var BackgroundHandler;

(function(){
	
	var ZI_SHADOW = 1000;
	
	var shadowHandler;
	var cjsHandler;
	var frameAnimationHandler;
	
	BackgroundHandler = function(fdiv, bdiv){
		
		this.foreDiv = fdiv;
		this.backDiv = bdiv;
		this.animationTaskList = [];
		
	};
	
	var _getNewFittedCanvasHandler = function(div){
		
		var canvas = $('<canvas></canvas>').get(0);
		$(div).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.fitCanvas();
		
		return ch;
	}
	
	var putShadowLandscape = function(ch, ctx, shadowWidth, w, h){
		
		var grad  = ctx.createLinearGradient(0, 0, shadowWidth, 0);
		grad.addColorStop(1.0,ch.rgbas(0, 0, 0, 0));
		grad.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad.addColorStop(0.0,ch.rgbas(0, 0, 0, 1));
		var grad2  = ctx.createLinearGradient(w - shadowWidth, 0, w, 0);
		grad2.addColorStop(1.0,ch.rgbas(0, 0, 0, 1));
		grad2.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad2.addColorStop(0.0,ch.rgbas(0, 0, 0, 0));
			
		ctx.beginPath();
		ctx.rect(0,0, shadowWidth, h);
		ctx.fillStyle = grad;
		ctx.fill();
		ctx.beginPath();
		ctx.rect(w - shadowWidth, 0, w, h);
		ctx.fillStyle = grad2;
		ctx.fill();
		
	};
	
	var putShadowPortrait = function(ch, ctx, shadowWidth, w, h){
		
		var grad  = ctx.createLinearGradient(0, 0, 0, shadowWidth);
		grad.addColorStop(1.0,ch.rgbas(0, 0, 0, 0));
		grad.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad.addColorStop(0.0,ch.rgbas(0, 0, 0, 1));
		var grad2  = ctx.createLinearGradient(0, h - shadowWidth, 0, h);
		grad2.addColorStop(1.0,ch.rgbas(0, 0, 0, 1));
		grad2.addColorStop(0.6,ch.rgbas(0, 0, 0, 0.5));
		grad2.addColorStop(0.0,ch.rgbas(0, 0, 0, 0));
		
		ctx.beginPath();
		ctx.rect(0,0, w, shadowWidth);
		ctx.fillStyle = grad;
		ctx.fill();
		ctx.beginPath();
		ctx.rect(0, h - shadowWidth, w, h);
		ctx.fillStyle = grad2;
		ctx.fill();
			
	};
	
	var cjsLoader = {
		
		'crouton':function(fch, bch, root){
			
			var loader = new createjs.LoadQueue(false);
			
			var that = this;
			
			loader.addEventListener("fileload", function(evt) {
				
				console.log('A Cjs Image Loaded');
						
				if (evt.item.type == "image") { 
					cjsImages[evt.item.id] = evt.result;
				}
				
			});
			
			var currentLabel = '';
			
			loader.addEventListener("complete", function (evt) {
				
				console.log('Cjs Image Loading Complete');
						
				var bCanvas = bch.getCanvas();
				var fCanvas = fch.getCanvas();
				
				that.foreMc = new cjsLib[root]().foreground;
				that.backMc = new cjsLib[root]().background;				
				
				that.bStage = new createjs.Stage(bCanvas);
				that.bStage.addChild(that.backMc);
				that.bStage.update();
				
				that.fStage = new createjs.Stage(fCanvas);
				that.fStage.addChild(that.foreMc);
				that.fStage.update();
				
				createjs.Ticker.setFPS(cjsLib.properties.fps);
				createjs.Ticker.addEventListener("tick", that.fStage);
				createjs.Ticker.addEventListener("tick", that.bStage);
				createjs.Ticker.addEventListener("tick", function(e){
					var label = that.foreMc.currentLabel;
					if(currentLabel !== label){
						if(cjsEvents.labelOut[currentLabel]){
							cjsEvents.labelOut[currentLabel].call(that);
						}
						if(cjsEvents.label[label]){
							cjsEvents.label[label].call(that);
						}
					}
					currentLabel = label;
					if(label.indexOf('_stop') >= 0){
						that.foreMc.stop();
						
					}
					if(that.backMc.currentLabel.indexOf('_stop') >= 0){
						that.backMc.stop();
					}
				});
				
				that.setCjsLoop(fch, that.foreMc);
				that.setCjsLoop(bch, that.backMc);
				
			});
			
			loader.loadManifest(cjsLib.properties.manifest);
			
		}
	};
		
	BackgroundHandler.prototype = {
		
		startAnimationLoop:function(){
			
			console.log('Start Animation Loop');
			
			var that = this;

			that.animationLoop = function(){
				
				_.map(that.animationTaskList, function(task){
					task();
				});
				
				window.requestAnimationFrame(that.animationLoop);
			}
				
			window.requestAnimationFrame(that.animationLoop);
			
		},
		
		setCjs:function(cjsLib, cjsImages, loaderType, root){
			
			var fch = _getNewFittedCanvasHandler(this.foreDiv);
			var bch = _getNewFittedCanvasHandler(this.backDiv);
			
			cjsLoader[loaderType].call(this, fch, bch, root);
			
		},
		
		setCjsLoop:function(ch, mc){
			
			var that = this;
			
			that.mainElem;
			
			scrollHandler.setScrollListener(function(){
				that.mainElem = scrollHandler.getActiveSection();
			});
			
			scrollHandler.triggerScroll();
			
			var currentScene;
			
			that.animationTaskList.push(function(){
									
				if(that.mainElem){
					var scene = $(that.mainElem).attr('data-cjs-scene');
					if(scene !== currentScene){
						mc.gotoAndPlay(scene + '_start');
						currentScene = scene;
					}
				}
								
			});
		
			
		},
		
		putShadow:function(){
			
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv);
			$(ch.getCanvas()).css({
				'zIndex':ZI_SHADOW,
			});
			var ctx = ch.getContext();
			
			var w = ch.getCanvasWidth();
			var h = ch.getCanvasHeight();
			var shadowWidth = w * 0.05;
			
			if(DisplayUtil.isLandscape()){
				if(DisplayUtil.isOverRatio()){
					putShadowLandscape(ch, ctx, shadowWidth, w, h);
				} else {
					putShadowPortrait(ch, ctx, shadowWidth, w, h);
				}
			} else {
				if(DisplayUtil.isOverRatio()){
					putShadowPortrait(ch, ctx, shadowWidth, w, h);
				} else {
					putShadowLandscape(ch, ctx, shadowWidth, w, h);
				}
			}
			

		}
		
	};
	
})();

	
