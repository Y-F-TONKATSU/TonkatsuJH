var AnimationHandler;

(function(){
	
	AnimationHandler = function(containers, navigationContainer, navigationPopupContainer){
		
		this._hitAreaHandler = new HitAreaHandler(navigationContainer);
		this._hitAreaHandler_popup = new HitAreaHandler(navigationPopupContainer);
		
		this._forgetRate = 0;
		
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
				cjsStage.root = new cjsLib[movieOptions.root]()[mc.root];	
				cjsStage.stage = new createjs.Stage(cjsStage.canvas);
				cjsStage.stage.addChild(cjsStage.root);
				cjsStage.stage.autoClear = false;
				cjsStage.stage.update();
				
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
					'onTicked': function(e){
						
						that.onCjsInitListener();
						
						cjsStage.stage.update(e);
						
						if(that._activeElem){
							
							var scene = $(that._activeElem).attr('data-cjs-scene');
							
							if(scene !== this.currentScene){
								cjsStage.root.gotoAndPlay(scene + '_start');
								this.currentScene = scene;
							}
						}
											
						var label = cjsStage.root.currentLabel;
						if(this.currentLabel !== label){
							if(cjsEvents.labelOut[this.currentLabel]){
								cjsEvents.labelOut[this.currentLabel].call(this);
							}
							if(cjsEvents.label[label]){
								cjsEvents.label[label].call(this);
							}
						}
						this.currentLabel = label;
						if(label.indexOf('_stop') >= 0){
							cjsStage.root.stop();
							
						}
						
					},
					'onComplete':function(){
					}
				});
			
				return cjsStage;
				
			}, this));
			
		},
		
		setForgetRate:function(v){
			this._forgetRate = v;
			this.navigationHandler.setForgetRate(v);
		},
		
		setOnCjsInitListener:function(f){
			this.onCjsInitListener = f;
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
				
				if(Math.random() > this._forgetRate){
					this._clearAllCanvas();
				}
				
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
				
				this.navigationHandler.draw(e);			
				
			}, this));
		
		},
			
		stop:function(){
			
		},
			
		addTask:function(task){
			
			task.ch = this._chList[task.containerId];
			task.ctx = task.ch.getContext();
			
			if(task.currentTime === undefined){
				task.currentTime = 0;
			}
			
			if(task.ender === undefined){
				if(task.waitTime){
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
			
			if(task.onInit){
				task.onInit();
			}
			
			this._taskList = _.sortBy(this._taskList, function(task){return task.tIndex || 0});
			
		},
		
		removeTask:function(id){
			
			var i = this._findTaskIndex(id);
			
			if(i > -1){
				this._taskList.splice(i, 1);
			}
			
		},
		
		removeCjsTasks:function(){
			
			var i = this._findCjsTaskIndex();
			
			while(i > -1){
				
				this._taskList.splice(i, 1);
				i = this._findCjsTaskIndex();
				
			}
			
		},
		
		removeDocTasks:function(docId){
			
			var i = this._findDocIndex(docId);
			
			while(i > -1){
				
				this._taskList.splice(i, 1);
				i = this._findDocIndex(docId);
				
			}
			
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
			
		loadCjs:function(options){
			
			if(this.navigationHandler){
				this.navigationHandler.setButtonColors(options.movieOptions.buttonColor);
			}
			
			var loaderOptions = options.loaderOptions;
			var movieOptions = options.movieOptions;
		
			console.log('Start Loading a Cjs Doc');
			
			var loader = new createjs.LoadQueue(false);
			
			loader.addEventListener('progress', _.bind(function(e){
				this.setTaskProgress('loadingCjs', e.progress);
			}, this));
			
			loader.addEventListener("fileload", function(e) {
				
				if (e.item.type == "image") { 
					//console.log('A Cjs Image Loaded:' + e.item.id);
					cjsImages[e.item.id] = e.result;
				}
				
			});
			
			var that = this;
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
					console.log('Loading Cjs Complete');
					that.removeTask('loadingCjs');
					that._setCjsTask(movieOptions);
				}
			});
			
			loader.loadManifest(cjsLib.properties.manifest);
			
		},
		
		stopCjs:function(){
			
			$('.eventHitArea').remove();
			
			this.removeCjsTasks();
			
			_.each(this._cjsStages, function(cjsStage){
				
				cjsStage.root.stop();
				cjsStage.stage.removeAllChildren();
				cjsStage.stage = null;
				
			});
			
			this._cjsStages = [];
			
		},
		
		menuMode:function(containerId){
			
			var cjsStage = {};
			
			cjsStage.ch = this._chList[containerId];
			cjsStage.canvas = cjsStage.ch.getCanvas();
			cjsStage.root =  new cjsNavigationLib.navigation().SharePanel;	
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
			}, ShareUtil.getTwitterLink(url. title));
					
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
					
			var cjsStage = {};
			
			cjsStage.ch = this._chList[containerId];
			cjsStage.canvas = cjsStage.ch.getCanvas();
			cjsStage.root =  new cjsNavigationLib.navigation().SharePanel;	
			cjsStage.stage = new createjs.Stage(cjsStage.canvas);
			cjsStage.stage.addChild(cjsStage.root);
			cjsStage.stage.autoClear = false;
			cjsStage.stage.update();
			
			var that = this;
			
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
						
				},
				'onTicked': function(e){
					cjsStage.stage.update(e);
					if(cjsStage.root.currentLabel === 'stop'){
						cjsStage.root.stop();
					}
				},
				'onComplete':function(){
				}
			});
			
		},
		
		indexMode:function(lowerBackContainerId, backContainerId, foreContainerId, animator){
			
			if(this.navigationHandler){
				this.navigationHandler.setButtonColors({
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
				},
				'onTicked': function(e){
					
					if(this.vars.stage){
						if(this.vars.root){
							if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
								this.vars.root.stop();
							}
							this.vars.stage.update(e);
						}
									
					} else {
						
						this.vars.stage = new createjs.Stage(this.ch.getCanvas());
						
						var loader = new createjs.LoadQueue(false);
						
						loader.addEventListener("fileload", function (evt) {	
							if (evt.item.type == "image") { cjsNavigationImages[evt.item.id] = evt.result; }	
						});
						
						loader.addEventListener("complete", _.bind(function(){
							this.vars.root = new cjsNavigationLib.Tunnel();	
							this.vars.stage.addChild(this.vars.root);
							this.vars.stage.autoClear = false;
							this.vars.stage.update(e);
						}, this));
						
						loader.loadManifest( [
							{src:"assets/images/index_bg/door_way.png", id:"door_way"},
							{src:"assets/images/index_bg/tunnel.png", id:"tunnel"},
						]);
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
				'onTicked': function(){
					var currentScene = 'default';
					if(that._activeElem){
						currentScene = $(that._activeElem).attr('data-animation');
					}
					
					if(!(this.scene === currentScene)){
						this.vars = {};
						this.scene = currentScene;
					}
					
					var anim = animator[this.scene];
					if(anim) {_.bind(anim, this)(this.vars);}
					
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
				'onTicked': function(){
					var currentScene = 'default';
					if(that._activeElem){
						currentScene = $(that._activeElem).attr('data-animation');
					}
					
					if(!(this.scene === currentScene)){
						this.vars = {};
						this.scene = currentScene;
					}
					
					var anim = animator[this.scene + '_fore'];
					if(anim) {_.bind(anim, this)();}
				},
				'onComplete':function(){
				}
			});
			
		},
		
		exitIndexMode:function(){
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
			this.navigationHandler = new NavigationHandler(events, this._hitAreaHandler);
			this.navigationHandler.putButtons(ch);

		},
		
	};
	
})();