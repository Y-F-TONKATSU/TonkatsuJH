var BackgroundHandler;

(function(){
	
	BackgroundHandler = function(fdiv, bdiv){
		
		this.foreDiv = fdiv;
		this.backDiv = bdiv;
		this.animationTaskList = [];
		
	};
	
	var _getNewCanvasHandler = function(div){
		
		var canvas = $('<canvas></canvas>').get(0);
		$(div).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.setCanvasWidth($(div).width());
		ch.setCanvasHeight($(div).height());
		$(ch.getCanvas()).css({
			width:'100%',
			height:'100%'
		});
		
		return ch;
	}
	
	var _getNewFittedCanvasHandler = function(div){
		
		var canvas = $('<canvas></canvas>').get(0);
		$(div).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.setCanvasWidth(1920);
		ch.setCanvasHeight(1200);
		$(ch.getCanvas()).css({
			width:'100%',
			height:'100%'
		});
		
		return ch;
	}
	
	var _nextFrame = function(elem, totalFrames){
		$(elem).data('frame', $(elem).data('frame') + (1 / totalFrames));
	}
	
	var _prevFrame = function(elem, totalFrames){
		$(elem).data('frame', $(elem).data('frame') - (1 / totalFrames));
	}
	
	var _isAtStart = function(elem){
		return $(elem).data('frame') <= 0;
	}
	
	var _isAtEnd = function(elem){
		return $(elem).data('frame') >= 1;
	}
	
	var cjsLoader = {
		
		'crouton':function(){
			
			var loader = new createjs.LoadQueue(false);
			
			var that = this;
			
			var fch = _getNewFittedCanvasHandler(that.foreDiv);
			var bch = _getNewFittedCanvasHandler(that.backDiv);
			
			loader.addEventListener("fileload", function(evt) {
				
				console.log('A Cjs Image Loaded');
						
				if (evt.item.type == "image") { 
					cjsImages[evt.item.id] = evt.result;
				}
				
			});
			
			loader.addEventListener("complete", function (evt) {
				
				console.log('Cjs Image Loading Complete');
						
				var bCanvas = bch.getCanvas();
				var fCanvas = fch.getCanvas();
				
				that.foreMc = new cjsLib.crouton_v006().foreground;
				that.backMc = new cjsLib.crouton_v006().background;
				that.foreMc.gotoAndPlay('Scene002_start');
				that.backMc.gotoAndPlay('Scene002_start');
				
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
					if(that.foreMc.currentLabel.indexOf('_stop') >= 0){
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
		
		PAGE_DATA_INDEX:{
			'id':'index',
		},
		
		_animationList:[],
		
		_drawFrame:function(elem, animator){
			
			var frame = $(elem).data('frame');
			
			animator(this._frontCanvasHandler, this._backCanvasHandler, frame, elem);
			
		},
		
		setCanvasSize:function(w, h){
			this._frontCanvasHandler.setCanvasWidth(w);
			this._frontCanvasHandler.setCanvasHeight(h);
			this._backCanvasHandler.setCanvasWidth(w);
			this._backCanvasHandler.setCanvasHeight(h);
		},
		
		fitCanvasSize:function(){
			this._frontCanvasHandler.fitCanvas();
			this._backCanvasHandler.fitCanvas();
		},
		
		getFrontCanvasHandler:function(){
			return this._frontCanvasHandler;
		},
		
		getBackCanvasHandler:function(){
			return this._backCanvasHandler;
		},
		
		setFrontCanvasHandler:function(v){
			this._frontCanvasHandler = v;
		},
		
		setBackCanvasHandler:function(v){
			this._backCanvasHandler = v;
		},
		
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
		
		setCjs:function(cjsLib, cjsImages, loaderType){
			cjsLoader[loaderType].call(this);
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
		
		playCjsScene:function(scene){
			
		},
		
		setPage:function(w, h){
			
			console.log('Setting Page..');
			
			scrollHandler.resetFrames();
			
			this._animationList = [];
			
			scrollHandler.triggerScroll();
									
		},
		
	};
	
})();

	
