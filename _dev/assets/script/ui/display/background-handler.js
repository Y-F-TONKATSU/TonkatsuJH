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
		ch.setCanvasHeight(1080);
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
		
		setCjs:function(cjsLib, cjsImages){
			
			var loader = new createjs.LoadQueue(false);
			
			var that = this;
			
			var ch = _getNewFittedCanvasHandler(that.backDiv);
			
			loader.addEventListener("fileload", function(evt) {
				
				console.log('A Cjs Image Loaded');
						
				if (evt.item.type == "image") { 
					cjsImages[evt.item.id] = evt.result;
				}
				
			});
			
			loader.addEventListener("complete", function (evt) {
				
				console.log('Cjs Image Loading Complete');
						
				var canvas = ch.getCanvas();
				
				that.root = new cjsLib.crouton_v003();
				that.root.gotoAndPlay('Scene002_start');
				
				that.stage = new createjs.Stage(canvas);
				that.stage.addChild(that.root);
				that.stage.update();
				
				createjs.Ticker.setFPS(cjsLib.properties.fps);
				createjs.Ticker.addEventListener("tick", that.stage);
				createjs.Ticker.addEventListener("tick", function(e){
					if(that.root.currentLabel.indexOf('_stop') >= 0){
						that.root.stop();
					}
				});
				
				that.setCjsLoop(ch);
				
			});
			
			loader.loadManifest(cjsLib.properties.manifest);
			
		},
		
		setCjsLoop:function(ch){
			
			var that = this;
			
			var mainElem;
			
			domUtil.setScrollListener(function(lists){
				mainElem = lists.hidden[0];
			});
			
			domUtil.triggerScroll();
			
			
			var currentScene;
			
			that.animationTaskList.push(function(){
									
				if(mainElem){
					var scene = $(mainElem).attr('data-cjs-scene');
					if(scene !== currentScene){
						console.log(scene);
						that.root.gotoAndPlay(scene + '_start');
						currentScene = scene;
					}
				}
								
			});
		
			
		},
		
		playCjsScene:function(scene){
			
		},
		
		setPage:function(w, h){
			
			console.log('Setting Page..');
			
			domUtil.resetFrames();
			
			this._animationList = [];
			
			domUtil.triggerScroll();
									
		},
		
	};
	
})();

	
