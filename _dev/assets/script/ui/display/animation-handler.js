var AnimationHandler;

(function(){
	
	AnimationHandler = function(containers){
		
		this._containerList = containers;
		this._chList = {};
		
		_.each(this._containerList, _.bind(function(v, k){
			var ch = _getNewCanvasHandler(v, k);
			this._chList[k] = ch;
		}, this));
		
		this._currentDocId = 'index';
		this._taskList = [];
		
		this._navigationHandler = null;
		
		this._stopped = false;
	};
	
	var _getNewCanvasHandler = function(container, containerId){
		
		var canvas = $('<canvas id="' + containerId + '_canvas"></canvas>').get(0);
		$(container).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.fitCanvas();
		
		return ch;
		
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
			
		_processTask:{
			'frameAnim':function(){
			
			},
			'cjs_labeled':function(){
			
			},
			'cjs':function(){
			
			},
		},
		
		_clearAllCanvas:function(task){
			
			_.each(this._chList, function(v, k){
				v.clear();
			})
			
		},
		
		init:function(){
			
			lastTime = new Date().getTime();
			
			draw = _.bind(function(){
				
				this._clearAllCanvas();
				
				var time = new Date().getTime();
				
				var delta = time - lastTime;
				
				_.each(this._taskList, function(task){
					task.currentTime += delta;
					
					var progress = task.tweener();
					task.progress = progress;
					task.onTicked();
					if(progress >= 1){
						task.onComplete();
					}
				});				
				lastTime = time;
				
				if(!this._stopped){
					requestAnimationFrame(draw);
				}
				
			}, this);
	
			requestAnimationFrame(draw);
			
		},
		
		stop:function(){
			this._stopped = true;
		},
		
		addTask:function(task){
			
			task.ch = this._chList[task.containerId];
			task.ctx = task.ch.getContext();
			if(task.currentTime === undefined){task.currentTime = 0;}
			
			var i = _.findIndex(this._taskList, function(t){
				return task.id === t.id;
			});
			
			if(i > -1){
				this._taskList[i] = task;
			} else {
				this._taskList.push(task);
			}
			
			
			
		},
		
		removeTask:function(id){
			
			var i = _.findIndex(this._taskList, function(task){
				return task.id === id;
			});
			
			if(i > -1){
				this._taskList.splice(i, 1);
			}
			
		},
		
		/*loadCjs:function(containerId, cjsLib, cjsImages, loaderType, root){
			
			this.loadingCh = _getNewFittedCanvasHandler(this._containerList[containerId], 'loading');			
			
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