var BackgroundHandler;

(function(){
	
	BackgroundHandler = function(fdiv, bdiv){
		
		this.foreDiv = fdiv;
		this.backDiv = bdiv;
		
		this.loadingCh = null;
		this.mainFore = null;
		this.mainBack = null;
		
		this.mainCjsHandler = null;
		this.endingCjsHandler = null;
		
		this.shadowHandler = new ShadowHandler();
		this.frameAnimationHandler = new FrameAnimationHandler();
		this.frameAnimationHandler.init();
		this.navigationHandler = null;
	};
	
	var _getNewFittedCanvasHandler = function(div, id){
		
		var canvas = $('<canvas id="' + id + '"></canvas>').get(0);
		$(div).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.fitCanvas();
		
		return ch;
	}
	
	var destructLoader = function(){
		
	}
	
	var cjsLoop = function(events){
		
		destructLoader();
					
		this.mainElem;
		
		scrollHandler.setScrollListener(_.bind(function(){
			this.mainElem = scrollHandler.getActiveSection();
		}, this));
		
		scrollHandler.triggerScroll();
		
		var currentScene;
		
		this.frameAnimationHandler.setCjsTask(_.bind(function(){
								
			if(this.mainElem){
				var scene = $(this.mainElem).attr('data-cjs-scene');
				if(scene !== currentScene){
					events.onSceneChanged(scene);
					currentScene = scene;
				}
			}
							
		}, this));
	
		
	};
	
	var i = 0;
	
	BackgroundHandler.prototype = {
		
		loadingAnims:{
			'crouton':function(e){
				if(!this.loadingCh){
					this.loadingCh = _getNewFittedCanvasHandler(this.foreDiv, 'loading');			
				}
				//Define Loading Anim Here
				
			}
		},
			
		setCjs:function(cjsLib, cjsImages, loaderType, root){
			
			this.mainFore = _getNewFittedCanvasHandler(this.foreDiv, 'mainFore');
			this.mainBack = _getNewFittedCanvasHandler(this.backDiv, 'mainBack');
						
			this.mainCjsHandler = new CjsHandler(this.mainFore, this.mainBack);
			this.mainCjsHandler.startLoading(loaderType, root, _.bind(this.loadingAnims[loaderType], this), _.bind(cjsLoop, this));
			
		},
		
		clearMain:function(){
			
			var endingFore = this.mainFore;
			var endingBack = this.mainBack;
			var endingCjsHandler = this.mainCjsHandler;
			if(endingCjsHandler){endingCjsHandler.stop();}
			
			i++;
			
			if(endingFore){
				this.frameAnimationHandler.setTask({
					'id':'endingFore' + i,
					'ch': endingFore,
					'update':Animators.basic.wipe_square,
					'tweener':Tweeners.basic.easeIn,
					'duration': 1200,
					'onComplete':function(){
						console.log('Anim Comp');
						endingFore.destruct();
						endingCjsHandler.clear();
					}
				});
				
			}
				
			if(endingBack){
				
				this.frameAnimationHandler.setTask({
					'id':'endingBack' + i,
					'ch': endingBack,
					'update':Animators.basic.wipe_square,
					'tweener':Tweeners.basic.easeIn,
					'duration': 1200,
					'onComplete':function(){
						endingBack.destruct();
					}
				});

			}
											
		},
		
		putShadow:function(){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv, 'shadow');
			this.shadowHandler.putShadow(ch);

		},
		
		putNavigationButtons:function(events){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv, 'navigationButtons');
			this.navigationHandler = new NavigationHandler(events);
			this.navigationHandler.putButtons(ch);

		},
		
		changeTo:function(hash){
			this.setNavigationButtonState(hash);
			this.clearMain();
		},
		
		setNavigationButtonState:function(hash){
			if(hash.category === 'top'){
				this.navigationHandler.hideHomeButton();
			} else {
				this.navigationHandler.showHomeButton();
			}
		},
		
		putTestAnimation:function(){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv, 'testAnim');
			this.frameAnimationHandler.setTask({
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
		
	};
	
})();

	
