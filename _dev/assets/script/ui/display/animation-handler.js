var AnimationHandler;

(function(){
	
	AnimationHandler = function(containers){
		
		this._containers = containers;
		
		this._currentDocId = 'index';
		this._taskList = [];
		
		this._navigationHandler = null;
		
	};
	
	var init = function(){
		
		setTask({
			'id':'loading',
			'docId':'ex000018',
			'ch': this.loadingCh,
			'options': {
				'color':ch.getColorHexString(247, 244, 232),
			},
			'tweener':Tweeners.basic.progress,
			'progress':0,
			'currentTime':0,
			'duration': 2000,
			'ender':function(){return false;},
			'onTicked':Animators.basic.loader_circle,
			'onComplete':function(){
			}
		});
		
	}
	
	/*
	var cjsLoop = function(events){
		
		this.destructLoader();
					
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
	*/
	
	var lastTime;
	
	AnimationHandler.prototype = {
			
		_getNewCanvasHandler:function(containerId, canvasId){
			
			if(!this._containers[containerId]){return null;}
			
			var canvas = $('<canvas id="' + canvasId + '"></canvas>').get(0);
			$(this._containers[containerId]).append(canvas);
			
			var ch = new CanvasHandler(canvas);
			ch.fitCanvas();
			
			return ch;
			
		},
		
		_processTask:{
			'frameAnim':function(){
			
			},
			'cjs':function(){
			
			},
		},
		
		init:function(){
			
			var draw = _.bind(function(){
				
				var time = new Date().getTime();
				if(lastTime === undefined){lastTime = time}
				
				var delta = time - lastTime;

				_.each(this._taskList, function(task){
					
					if(task.currentFrame === undefined){task.currentFrame = 0;}
					task.currentFrame += delta;
					
					var progress = task.tweener();
					if(progress <= 1){
						task.update(progress);
					} else {
						task.onComplete();
						if(!removes){removes = []}
						removes.push(task.id);
					}
				});				
				
				if(removes){this.removeTasks(removes);}
				
				lastTime = time;
				
				if(this._cjsTask){
					this._cjsTask();
				}
				
				requestAnimationFrame(draw);
				
			}, this);
	
			requestAnimationFrame(draw);
			
		},
		
		addTask:function(task){
			
		},
		
		/*loadCjs:function(containerId, cjsLib, cjsImages, loaderType, root){
			
			this.loadingCh = _getNewFittedCanvasHandler(this._containers[containerId], 'loading');			
			
			_.bind(this.loadingAnims[loaderType + '_init'], this)();
			
			this.mainCjsHandler.startLoading(loaderType, root, _.bind(this.loadingAnims[loaderType], this), _.bind(cjsLoop, this));
			
		},
		
		setCjs:function(cjsLib, cjsImages, loaderType, root){
			
			this.loadingCh = _getNewFittedCanvasHandler(this.foreDiv, 'loading');			
			
			_.bind(this.loadingAnims[loaderType + '_init'], this)();
			
			this.mainCjsHandler.startLoading(loaderType, root, _.bind(this.loadingAnims[loaderType], this), _.bind(cjsLoop, this));
			
		},
		
		loadingAnims:{
			'crouton_init':function(e){
				
				var ch = this.loadingCh;
				
				ch.setFillStyle(200, 200, 100, 0.5);
				var w = ch.getCanvasWidth();
				var h = ch.getCanvasHeight();
				
				ch.drawShape(function(ctx){
					ctx.rect(0, 0, w, h);
				}, false, true);
				
				this.frameAnimationHandler.setTask({
					'id':'loading',
					'ch': this.loadingCh,
					'color': ch.getColorHexString(247, 244, 232),
					'update':Animators.basic.loader_circle,
					'tweener':Tweeners.basic.progress,
					'progress':0,
					'duration': 2000,
					'onComplete':function(){
					}
				});
				
			},
			'crouton':function(e){
				this.frameAnimationHandler.setParams('loading', {
					'progress': e.progress
				});
				
								
			}
		},
			
		destructLoader:function(){
			
			this.frameAnimationHandler.removeTask('loading');
			this.loadingCh.destruct();
			this.loadingCh = null;
			
		},
	
		setBackground:function(cjsLib, cjsImages, loaderType, root){
			
			this.mainFore = _getNewFittedCanvasHandler(this.foreDiv, 'mainFore');
			this.mainBack = _getNewFittedCanvasHandler(this.backDiv, 'mainBack');
						
			this.mainCjsHandler = new CjsHandler(this.mainFore, this.mainBack);
			
			if(!this.loadingCh){
				this.loadingCh = _getNewFittedCanvasHandler(this.foreDiv, 'loading');			
			}
			_.bind(this.loadingAnims[loaderType + '_init'], this)();
			
			this.mainCjsHandler.startLoading(loaderType, root, _.bind(this.loadingAnims[loaderType], this), _.bind(cjsLoop, this));
			
		},
		
		clearMain:function(){

			
			if(this.loadingCh){this.destructLoader();}
			
			var endingFore = this.mainFore;
			var endingBack = this.mainBack;
			var endingCjsHandler = this.mainCjsHandler;
			if(endingCjsHandler){endingCjsHandler.stop();}
			
			i++;
			
			if(endingFore){
				
				this.frameAnimationHandler.setTask({
					'id':'endingFore' + i,
					'ch': endingFore,
					'update':Animators.basic.wipe_circle,
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
					'update':Animators.basic.wipe_circle,
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
		*/
		
	};
	
})();