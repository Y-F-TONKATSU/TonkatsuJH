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
			
			var fch = _getNewFittedCanvasHandler(this.foreDiv);
			var bch = _getNewFittedCanvasHandler(this.backDiv);
			
			cjsHandler = new CjsHandler(fch, bch);
			cjsHandler.startLoading(loaderType, root, _.bind(cjsLoop, this));
			
		},
		
		clearCjs:function(){
			
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

	
