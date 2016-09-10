var AnimationHandler;

(function(){
	
	AnimationHandler = function(containers, navigationContainer, navigationPopupContainer){
		
		this._hitAreaHandler = new HitAreaHandler(navigationContainer);
		this._hitAreaHandler_popup = new HitAreaHandler(navigationPopupContainer);
		
		this._containerList = containers;
		this._chList = {};
		
		_.each(this._containerList, _.bind(function(v, k){
			var ch = _getNewCanvasHandler(v, k);
			this._chList[k] = ch;
		}, this));
		
		this._currentDocId = 'index';
		this._activeElem = null;
		this._taskList = [];
		this._cjsStages = [];
		
		this._navigationHandler = null;
		this._shadowHandler = new ShadowHandler();
		
		this._stopped = false;
		
		this._isCjsCanceled = false;
		
	};
	
	var _getNewCanvasHandler = function(container, containerId){
		
		var canvas = $('<canvas id="' + containerId + '_canvas"></canvas>').get(0);
		$(container).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.fitCanvas();
		
		return ch;
		
	};
		
	var lastTime;
	
	AnimationHandler.prototype = {
			
		_clearAllCanvas:function(task){
			
			_.each(this._chList, function(v, k){
				v.clear();
			})
			
		},
		
		_findTaskIndex:function(id){
			
			return _.findIndex(this._taskList, function(task){
				return task.id === id;
			});
			
		},
		
		_findDocIndex:function(id){
			
			return _.findIndex(this._taskList, function(task){
				return task.docId === id;
			});
			
		},
		
		_findCjsTaskIndex:function(){
			
			return _.findIndex(this._taskList, function(task){
				return task.id.indexOf('mainCjs_') > -1;
			});
			
		},
				
		_setCjsTask:function(movieOptions){
			
			var currentScene;
			
			var that = this;
			
			this._cjsStages = _.map(movieOptions.mcList, _.bind(function(mc){
			
				var cjsStage = {};
				
				cjsStage.ch = this._chList[mc.containerId];
				cjsStage.canvas = cjsStage.ch.getCanvas();
				
				cjsStage.stage = new createjs.Stage(cjsStage.canvas);
				cjsStage.stage.autoClear = false;
				
				var animator = Animators.basic[movieOptions.type];
				var initFunc = Animators.basic[movieOptions.type + '_init'];
				
				this.addTask({
					'id':'mainCjs_' + mc.root,
					'docId':movieOptions.docId,
					'containerId': mc.containerId,
					'progress':0,
					'currentTime':0,
					'duration': 0,
					'waitTime': 0,
					'ender':function(){return false},
					'tweener':function(){return 0},
					'currentScene': '',
					'currentLabel': '',
					'onInit':function(){
						that._onCjsInitListener();
						if(!_.isUndefined(initFunc)){
							_.bind(initFunc, this)(cjsStage, movieOptions, mc);
						}
					},
					'onTicked': function(e){
						_.bind(animator, this)(e, cjsStage, that._activeElem);
						
					},
					'onComplete':function(){
					}
				});
			
				return cjsStage;
				
			}, this));
			
		},
		
		destroy:function(){
			this._navigationHandler.destroy();
			this._shadowHandler.destroy();
			this.removeAllTasks();
			this._hitAreaHandler_popup.removeAllHitAreas();
			this._hitAreaHandler.removeAllHitAreas();
		},
		
		setOnCjsInitListener:function(f){
			this._onCjsInitListener = f;
		},
		
		setActiveElem:function(elem){
			this._activeElem = elem;	
		},
		
		getActiveElem:function(){
			return this._activeElem;	
		},
		
		init:function(frameRate){
			
			createjs.Ticker.setFPS(frameRate);
			
			createjs.Ticker.addEventListener('tick', _.bind(function(e){
				
				this._clearAllCanvas();
				
				var delta = e.delta;
				
				_.each(this._taskList, function(task){
					
					if(task){
						
						var ctx = task.ch.getContext();
						
						ctx.save();
						
						task.currentTime += delta;
						
						var progress = task.tweener();
						task.progress = progress;
						if(progress >= 1 && task.waitTime){
							task.waitTime -= delta;
						}
						task.onTicked(e);
						if(task.ender()){
							task.onComplete();
						}
						
						ctx.restore();
						
					}
					
				});
				
				this._navigationHandler.draw(e);			
				
			}, this));
		
		},
			
		stop:function(){
			
		},
			
		/*
			'id':'streamScript',
			'docId': 'plainDoc',
			'containerId': 'back',
			'progress':0,
			'currentTime':0,
			'duration': 0,
			'waitTime': 0,
			'ender':function(){return false},
			'tweener':function(){return 0},
			'currentScene': '',
			'currentLabel': '',
			'vars':{
				'scroll':0,
			},
			'onInit': function(){
				_.bind(Animators.plain.scriptStream_init, this)();
			},
			'onTicked': function(e){
				this.vars.scroll = $('#mainDoc').scrollTop();
				_.bind(Animators.plain.scriptStream, this)(e, $('#backgroundText'));
				
			},
			'onComplete':function(){
			}
		*/		
		addTask:function(task){
			
			task.ch = this._chList[task.containerId];
			task.ctx = task.ch.getContext();
			
			_.defaults(task, {
				'progress': 0,
				'currentTime': 0,
				'waitTime': 0,
				'onInit':function(){},
			});
			
			if(_.isUndefined(task.ender)){
				if(task.waitTime > 0){
					task.ender = function(){
						return this.progress >= 1 && this.waitTime <= 0;
					};
				} else {
					task.ender = function(){
						return this.progress >= 1;
					};
				}
			}
			
			var i = this._findTaskIndex(task.id);
			
			if(i > -1){
				this._taskList[i] = task;
			} else {
				this._taskList.push(task);
			}
			
			task.onInit();
			
			this._taskList = _.sortBy(this._taskList, function(task){return task.tIndex || 0});
			
		},
		
		removeTask:function(id){
			
			this._taskList = _.reject(this._taskList, function(task){
				return task.id === id;
			});
			
		},
		
		removeCjsTasks:function(){
			
			this._taskList = _.reject(this._taskList, function(task){
				return 	task.id.indexOf('mainCjs_') > -1;

			});
			
		},
		
		removeDocTasks:function(docId){
			
			this._taskList = _.reject(this._taskList, function(task){
				return task.docId === docId;
			});
			
		},
		
		removeAllTasks:function(){
			
			this._taskList = [];
			
		},
		
		setTaskProgress:function(id, progress){
			
			var i = this._findTaskIndex(id);
			
			if(i > -1){
				this._taskList[i].progress = progress;
			}
		
			
		},
		
		cancelLoadingCjs:function(){
			this._isCjsCanceled = true;
		},
		
		loadCjs:function(options, buttonColor){
			
			this._isCjsCanceled = false;
					
			if(this._navigationHandler){
				this._navigationHandler.setButtonColors(buttonColor);
			}
			
			var loaderOptions = options.loaderOptions;
			var movieOptions = options.movieOptions;
		
			console.log('Start Loading a Cjs Doc');
			
			if(movieOptions.type === 'plain'){
				
				if(movieOptions.bg = 'streamScript'){
				
					$('#backgroundText').empty().show();
					
					this.addTask({
						'id':'streamScript',
						'docId': 'plainDoc',
						'containerId': 'back',
						'progress':0,
						'currentTime':0,
						'duration': 0,
						'waitTime': 0,
						'ender':function(){return false},
						'tweener':function(){return 0},
						'currentScene': '',
						'currentLabel': '',
						'vars':{
							'scroll':0,
						},
						'onInit': function(){
							_.bind(Animators.plain.scriptStream_init, this)();
						},
						'onTicked': function(e){
							this.vars.scroll = $('#mainDoc').scrollTop();
							_.bind(Animators.plain.scriptStream, this)(e, $('#backgroundText'));
							
						},
						'onComplete':function(){
						}
					});
					
				}
				
			} else {
				
				CjsUtil.load({
					'images':gCjsImages,
					'manifest':	gCjsLib.properties.manifest,
					'completeListener':_.bind(function(){
						console.log('Loading Cjs Complete');
						this.removeTask('loadingCjs');
						if(!this._isCjsCanceled){
							this._setCjsTask(movieOptions);
						}
					}, this),
					'progressListener':_.bind(function(e){
						this.setTaskProgress('loadingCjs', e.progress);
					}, this)
				});
				
				this.addTask({
					'id':'loadingCjs',
					'docId': movieOptions.docId,
					'containerId': loaderOptions.containerId,
					'progress':0,
					'currentTime':0,
					'duration': 0,
					'waitTime': 500,
					'tIndex':10,
					'tweener':loaderOptions.tweener,
					'onTicked': loaderOptions.animator,
					'onComplete':function(){
					}
				});
			
			}
			
		},
		
		stopCjs:function(){
			
			if(_.isFunction(gCjsEvents.end)){
				gCjsEvents.end();
			};
			gCjsOptions = {};
			gCjsEvents = {};
			
			$('.eventHitArea').remove();
			
			$('#backgroundText').empty().hide();
			
			this.removeCjsTasks();
			
			_.each(this._cjsStages, function(cjsStage){
				
				if(cjsStage.root){
					cjsStage.root.stop();
				}
				cjsStage.stage.removeAllChildren();
				cjsStage.stage = null;
				
			});
						
			this._cjsStages = [];
			
		},
		
		menuMode:function(containerId){
			
			var cjsStage = {};
			
			cjsStage.ch = this._chList[containerId];
			cjsStage.canvas = cjsStage.ch.getCanvas();
			cjsStage.root =  new cjsNavigationLib.MenuPanel;	
			cjsStage.stage = new createjs.Stage(cjsStage.canvas);
			cjsStage.stage.addChild(cjsStage.root);
			cjsStage.stage.autoClear = false;
			cjsStage.stage.update();
			
			var that = this;
			
			this.addTask({
				'id':'menu',
				'docId': 'menu',
				'containerId': containerId,
				'progress':0,
				'currentTime':0,
				'duration': 0,
				'waitTime': 0,
				'tIndex':10,
				'vars':{},
				'scene':'',
				'tweener':function(){return 0;},
				'ender':function(){return false;},
				'onInit':function(){
						
				},
				'onTicked': function(e){
					cjsStage.stage.update(e);
				},
				'onComplete':function(){
				}
			});
			
		},
		
		shareMode:function(containerId, url, title){
			
			this._hitAreaHandler_popup.setHitArea('share_fb', {
				left:210 * 0.4,
				top:640 * 0.4,
				width:330 * 0.4,
				height:350 * 0.4,
			}, ShareUtil.getFaceBookLink(url));
			
			this._hitAreaHandler_popup.setHitArea('share_tw', {
				left:617 * 0.4,
				top:640 * 0.4,
				width:330 * 0.4,
				height:350 * 0.4,
			}, ShareUtil.getTwitterLink(url, title));
					
			this._hitAreaHandler_popup.setHitArea('share_gp', {
				left:980 * 0.4,
				top:640 * 0.4,
				width:330 * 0.4,
				height:350 * 0.4,
			}, ShareUtil.getGooglePlusLink(url));
					
			this._hitAreaHandler_popup.setHitArea('share_hb', {
				left:1370 * 0.4,
				top:640 * 0.4,
				width:330 * 0.4,
				height:350 * 0.4,
			}, ShareUtil.getHatenaLink(url));
								
			this.addTask({
				'id':'share',
				'docId': 'share',
				'containerId': containerId,
				'progress':0,
				'currentTime':0,
				'duration': 0,
				'waitTime': 0,
				'tIndex':10,
				'vars':{},
				'scene':'',
				'tweener':function(){return 0;},
				'ender':function(){return false;},
				'onInit':function(){
					
					this.vars.stage = new createjs.Stage(this.ch.getCanvas());
					
					CjsUtil.load({
						'images':cjsNavigationImages,
						'manifest':	[
							{src:"contents/experimental/1604/e000019_crouton/images/face.png", id:"face"},
							{src:"assets/images/share/nobuteru_clip.png", id:"nobuteru_clip"}
						],
						'completeListener':_.bind(function(){
							this.vars.root = new cjsNavigationLib.SharePanel;	
							this.vars.root.shareClips.visible = false;
							this.vars.stage.addChild(this.vars.root);
							this.vars.stage.autoClear = false;
							this.vars.stage.update();
							this.vars.root.shareClips.gotoAndStop(0);
							_.each(this.vars.root.shareClips.children, function(clip){
								clip.gotoAndStop(0);
								clip.visible = false;
							});
						}, this)
					});
				},
				'onTicked': function(e){
					
					if(this.vars.root){
						this.vars.stage.update(e);
						if(this.vars.root.currentLabel === 'stop'){
							this.vars.root.stop();
							
							//pickup ranodme clips
							this.vars.root.shareClips.visible = true;
							if(!this.vars.currentShareClip){
								var num = Math.floor(Math.random() * this.vars.root.shareClips.numChildren);
								this.vars.currentShareClip = this.vars.root.shareClips.getChildAt(num);
								this.vars.currentShareClip.visible = true;
								this.vars.currentShareClip.gotoAndPlay(0);
							} else {
								if(this.vars.currentShareClip.currentFrame === this.vars.currentShareClip.totalFrames){
									this.vars.currentShareClip.gotoAndStop(0);
									this.vars.currentShareClip.visible = false;
									this.vars.currentShareClip = null;
								}
							}
							
						}
					}
					
				},
				'onComplete':function(){
				}
			});
			
		},
		
		clearIndexHitarea:function(){
			this._hitAreaHandler.removeHitArea('indexLink');
		},
		
		indexMode:function(lowerBackContainerId, backContainerId, foreContainerId, animator){
			
			if(this._navigationHandler){
				this._navigationHandler.setButtonColors({
					'r':255,
					'g':255,
					'b':255
				});
			}
			
			var that = this;
			
			this.addTask({
				'id':'indexBack',
				'docId': 'index',
				'containerId': backContainerId,
				'progress':0,
				'currentTime':0,
				'duration': 0,
				'waitTime': 0,
				'tIndex':10,
				'vars':{},
				'scene':'',
				'tweener':function(){return 0;},
				'ender':function(){return false;},
				'onInit':function(){
					
					this.vars.stage = new createjs.Stage(this.ch.getCanvas());
					
					CjsUtil.load({
						'images':cjsNavigationImages,
						'manifest':	[
							{src:"assets/images/index_bg/door_way.png", id:"door_way"},
							{src:"assets/images/index_bg/tunnel.png", id:"tunnel"},
						],
						'completeListener':_.bind(function(e){
							this.vars.root = new cjsNavigationLib.Tunnel();	
							this.vars.stage.addChild(this.vars.root);
							this.vars.stage.autoClear = false;
							this.vars.stage.update(e);
						}, this)
					});
						
				},
				'onTicked': function(e){
				
					if(this.vars.root){
						if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
							this.vars.root.stop();
						}
						this.vars.stage.update(e);
					}
					
				},
				'onComplete':function(){
				}
			});
			
			this.addTask({
				'id':'index',
				'docId': 'index',
				'containerId': backContainerId,
				'progress':0,
				'currentTime':0,
				'duration': 0,
				'waitTime': 0,
				'tIndex':10,
				'vars':{},
				'scene':'',
				'tweener':function(){return 0;},
				'ender':function(){return false;},
				'onInit':function(){
						
				},
				'onTicked': function(e){
					var currentScene = 'default';
					if(that._activeElem){
						currentScene = $(that._activeElem).attr('data-animation');
					}
					
					if(!(this.scene === currentScene)){
						
						this.vars = {};
						this.scene = currentScene;
						var anim = animator[this.scene + '_init'];
						if(anim) {_.bind(anim, this)(e);}
						
						that.clearIndexHitarea();
						
						_.each($(that._activeElem).find('.linkArea'), function(linkArea){
							var cood = $(linkArea).attr('data-link-area').split(',');
							var ref = $(linkArea).attr('href');
							var rect = {
								'left':cood[0],
								'top':cood[1],
								'width':cood[2],
								'height':cood[3]
							};
							that._hitAreaHandler.setHitArea('indexLink', rect, ref, function(){
								that.clearIndexHitarea();
							});
						});
						
					} else {
												
						var anim = animator[this.scene];
						if(anim) {_.bind(anim, this)(e);}
						
					}
					
				},
				'onComplete':function(){
				}
			});
			
			this.addTask({
				'id':'indexFore',
				'docId': 'index',
				'containerId': foreContainerId,
				'progress':0,
				'currentTime':0,
				'duration': 0,
				'waitTime': 0,
				'tIndex':10,
				'vars':{},
				'scene':'',
				'tweener':function(){return 0;},
				'ender':function(){return false;},
				'onInit':function(){
						
				},
				'onTicked': function(e){
					var currentScene = 'default';
					if(that._activeElem){
						currentScene = $(that._activeElem).attr('data-animation');
					}
					
					if(!(this.scene === currentScene)){
						
						this.vars = {};
						this.scene = currentScene;
						var anim = animator[this.scene + '_fore_init'];
						if(anim) {_.bind(anim, this)(e);}
						
					} else {
						
						var anim = animator[this.scene + '_fore'];
						if(anim) {_.bind(anim, this)(e);}
						
					}
					
				},
				'onComplete':function(){
				}
			});
			
			this.addTask({
				'id':'indexLines',
				'docId': 'index',
				'containerId': backContainerId,
				'progress':0,
				'currentTime':0,
				'duration': 100000,
				'waitTime': 0,
				'tIndex':10,
				'vars':{
					numLines:24,
					x:676,
					y:57,
					start:30
				},
				'scene':'',
				'tweener':Tweeners.basic.normal,
				'onInit':function(){
						
				},
				'onTicked': Animators.basic.lines,
				'onComplete':function(){
					that.removeTask('indexLines');
				}
			});
			
		},
		
		exitIndexMode:function(){
			this.clearIndexHitarea();
			this.removeDocTasks('index');
		},
		
		exitShareMode:function(){
			this._hitAreaHandler_popup.removeHitArea('share_fb');
			this._hitAreaHandler_popup.removeHitArea('share_tw');
			this._hitAreaHandler_popup.removeHitArea('share_gp');
			this._hitAreaHandler_popup.removeHitArea('share_hb');
			this.removeTask('share');
		},
		
		exitMenuMode:function(){
			this.removeTask('menu');
		},
		
		changeTo:function(hash){
			this.stopCjs();
		},
		
		putShadow:function(div){
			
			var ch = _getNewCanvasHandler(div, 'shadow')
			this._shadowHandler.putShadow(ch);

		},
		
		putNavigationButtons:function(div, events){
			
			var ch = _getNewCanvasHandler(div, 'navigationButtons');
			this._navigationHandler = new NavigationHandler(events, this._hitAreaHandler);
			this._navigationHandler.putButtons(ch);

		},
		
	};
	
})();