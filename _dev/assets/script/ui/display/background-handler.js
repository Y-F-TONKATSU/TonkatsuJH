var BackgroundHandler;

(function(){
	
	var shadowHandler;
	var cjsHandler;
	var navigationHandler;
	var frameAnimationHandler;
	
	BackgroundHandler = function(fdiv, bdiv){
		
		this.foreDiv = fdiv;
		this.backDiv = bdiv;
		
		this.loadingCh = null;
		this.mainFore = null;
		this.mainBack = null;
		
		shadowHandler = new ShadowHandler();
		frameAnimationHandler = new FrameAnimationHandler();
		frameAnimationHandler.init();
	};
	
	var _getNewFittedCanvasHandler = function(div){
		
		var canvas = $('<canvas></canvas>').get(0);
		$(div).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.fitCanvas();
		
		return ch;
	}
	
	var cjsLoop = function(events){
		
		//Destruct Loader Here
					
		this.mainElem;
		
		scrollHandler.setScrollListener(_.bind(function(){
			this.mainElem = scrollHandler.getActiveSection();
		}, this));
		
		scrollHandler.triggerScroll();
		
		var currentScene;
		
		frameAnimationHandler.setCjsTask(_.bind(function(){
								
			if(this.mainElem){
				var scene = $(this.mainElem).attr('data-cjs-scene');
				if(scene !== currentScene){
					events.onSceneChanged(scene);
					currentScene = scene;
				}
			}
							
		}, this));
	
		
	};
		
	BackgroundHandler.prototype = {
		
		loadingAnims:{
			'crouton':function(e){
				if(!this.loadingCh){
					this.loadingCh = _getNewFittedCanvasHandler(this.foreDiv);			
				}
				//Define Loading Anim Here
				
			}
		},
			
		setCjs:function(cjsLib, cjsImages, loaderType, root){
			
			this.mainFore = _getNewFittedCanvasHandler(this.foreDiv);
			this.mainBack = _getNewFittedCanvasHandler(this.backDiv);
						
			cjsHandler = new CjsHandler(this.mainFore, this.mainBack);
			cjsHandler.startLoading(loaderType, root, _.bind(this.loadingAnims[loaderType], this), _.bind(cjsLoop, this));
			
		},
		
		clearMain:function(){
			
			if(this.mainFore){
				frameAnimationHandler.setTask({
					'id':'mainFore',
					'ch': this.mainFore,
					'update':function(progress){
						var ch = this.ch;
						var ctx = ch.getContext();
						ch.setWidth(10);
						ch.setFillStyle(200, 200, 100, 1);
						var w = ch.getCanvasWidth();
						var h = ch.getCanvasHeight();
						
						ch.drawShape(function(ctx){
							ctx.rect(w * 0.5 * (1 - progress * 2), h * 0.5 * (1 - progress * 2), w * progress * 2, h * progress * 2);
						}, false, true);
						
						ctx.save();
						
						ctx.beginPath();
						ctx.rect(w * 0.5 * (1 - progress), h * 0.5 * (1 - progress), w * progress, h * progress);
						ctx.clip();
						ch.clear();
						
						ctx.restore();
						
					},
					'tweener':function(delta){
						if(this.currentFrame === undefined){this.currentFrame = 0;}
						this.currentFrame += delta;
						return Math.pow(this.currentFrame / this.duration, 2);
					},
					'duration': 1200,
					'onComplete':function(){
						console.log('Anim Comp');
						this.ch.destruct();
						if(cjsHandler){cjsHandler.clear();}
					}
				});
				
			}
				
			if(this.mainBack){
				
				frameAnimationHandler.setTask({
					'id':'mainBack',
					'ch': this.mainBack,
					'update':function(progress){
						var ch = this.ch;
						var ctx = ch.getContext();
						
						var w = ch.getCanvasWidth();
						var h = ch.getCanvasHeight();
						
						ctx.save();
						
						ctx.beginPath();
						ctx.rect(w * 0.5 * (1 - progress), h * 0.5 * (1 - progress), w * progress, h * progress);
						ctx.clip();
						ch.clear();
						
						ctx.restore();
						
					},
					'tweener':function(delta){
						if(this.currentFrame === undefined){this.currentFrame = 0;}
						this.currentFrame += delta;
						return Math.pow(this.currentFrame / this.duration, 2);
					},
					'duration': 1200,
					'onComplete':function(){
						console.log('Anim Comp');
						this.ch.destruct();
						if(cjsHandler){cjsHandler.clear();}
					}
				});

			}
											
		},
		
		putShadow:function(){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv);
			shadowHandler.putShadow(ch);

		},
		
		putTestAnimation:function(){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv);
			frameAnimationHandler.setTask({
				'id':'testAnim',
				'ch': ch,
				'update':function(progress){
					var ch = this.ch;
					var ctx = ch.getContext();
					ch.clear();
					ch.setWidth(10);
					ch.setStrokeStyle(100, 200, 100, 1);
					var w = ch.getCanvasWidth();
					var h = ch.getCanvasHeight();
					ch.drawShape(function(ctx){
						ctx.rect(w * 0.3 * progress, h * 0.3 * progress, w * progress, h * progress);
					});
				},
				'tweener':function(delta){
					if(this.currentFrame === undefined){this.currentFrame = 0;}
					this.currentFrame += delta;
					return Math.pow(this.currentFrame / this.duration, 2);
				},
				'duration': 10000,
				'onComplete':function(){
					console.log('Anim Comp');
					ch.destruct();
				}
			});

		},
		
		putNavigationButtons:function(events){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv);
			navigationHandler = new NavigationHandler(events);
			navigationHandler.putButtons(ch);

		},
		
		changeTo:function(hash){
			this.setNavigationButtonState(hash);
			this.clearMain();
		},
		
		setNavigationButtonState:function(hash){
			if(hash.category === 'top'){
				navigationHandler.hideHomeButton();
			} else {
				navigationHandler.showHomeButton();
			}
		},
		
	};
	
})();

	
