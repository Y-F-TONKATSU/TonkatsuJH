var BackgroundHandler;

(function(){
	
	var shadowHandler;
	var cjsHandler;
	var navigationHandler;
	var frameAnimationHandler;
	
	BackgroundHandler = function(fdiv, bdiv){
		
		this.foreDiv = fdiv;
		this.backDiv = bdiv;
		this.animationTaskList = [];
		
		this.loadingCh = null;
		this.mainFore = null;
		this.mainBack = null;
		
		shadowHandler = new ShadowHandler();
	};
	
	var _getNewFittedCanvasHandler = function(div){
		
		var canvas = $('<canvas></canvas>').get(0);
		$(div).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.fitCanvas();
		
		return ch;
	}
	
	var cjsLoop = function(events){
		
		this.loadingCh.destruct('simple');
		this.loadingCh = null;
			
		this.mainElem;
		
		scrollHandler.setScrollListener(_.bind(function(){
			this.mainElem = scrollHandler.getActiveSection();
		}, this));
		
		scrollHandler.triggerScroll();
		
		var currentScene;
		
		this.animationTaskList.push(_.bind(function(){
								
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
				this.loadingCh.setStrokeStyle(255, 0, 0, 1);
				this.loadingCh.setWidth(30);
				this.loadingCh.drawShape(_.bind(function(ctx){
					ctx.arc(this.loadingCh.getCenterX(), this.loadingCh.getCenterY(), this.loadingCh.getCanvasHeight() * 0.4, 0, Math.PI * e.loaded);
				}, this));
			}
		},
			
		startAnimationLoop:function(){
			
			console.log('Start Animation Loop');
			
			this.animationLoop = _.bind(function(){
				
				_.map(this.animationTaskList, function(task){
					task();
				});
				
				window.requestAnimationFrame(this.animationLoop);
				
			}, this);
				
			window.requestAnimationFrame(this.animationLoop);
			
		},
		
		setCjs:function(cjsLib, cjsImages, loaderType, root){
			
			this.clearMain();
			
			this.mainFore = _getNewFittedCanvasHandler(this.foreDiv);
			this.mainBack = _getNewFittedCanvasHandler(this.backDiv);
						
			cjsHandler = new CjsHandler(this.mainFore, this.mainBack);
			cjsHandler.startLoading(loaderType, root, _.bind(this.loadingAnims[loaderType], this), _.bind(cjsLoop, this));
			
		},
		
		clearMain:function(){
			
			if(this.mainFore){
				this.mainFore.destruct('simple');
				this.mainFore = null;
			}			
			if(this.mainBack){
				this.mainBack.destruct('simple');
				this.mainBack = null;
			}
			
			this.animationTaskList = [];
			
			if(cjsHandler){cjsHandler.clear();}
								
		},
		
		putShadow:function(){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv);
			shadowHandler.putShadow(ch);

		},
		
		putNavigationButtons:function(events){
			
			var ch = _getNewFittedCanvasHandler(this.foreDiv);
			navigationHandler = new NavigationHandler(events);
			navigationHandler.putButtons(ch);

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

	
