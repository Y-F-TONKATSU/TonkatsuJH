$(function(){
	
	var Animator = function(){
		this._taskList = {};	
	}
	
	var lastTime;
	
	Animator.prototype = {	
		
		init:function(){
				
			var draw = _.bind(function(){
				
				var time = new Date().getTime();
				if(lastTime === undefined){lastTime = time}
				
				var delta = time - lastTime;
				var removes;
					
				_.each(this._taskList, function(task){
					
					var progress = task.tweener(delta);
					if(progress <= 1){
						task.update(progress);
					} else {
						if(!removes){removes = []}
						removes.push(task.id);
					}
				});				
				
				if(removes){this.removeTasks(removes);}
				
				lastTime = time;
				
				requestAnimationFrame(draw);
				
			}, this);
	
			requestAnimationFrame(draw);
			
		},
		
		setTask:function(task){
			this._taskList[task.id] = task;
		},
		
		removeTasks:function(removes){
			
			_.each(removes, _.bind(function(id){
				this.removeTask(id);
			}, this));
				
		},
		
		removeTask:function(id){
			console.log('Remove Task:' + id);	
			delete this._taskList[id];
				
		},
		
	}
	
	var canvas, stage, exportRoot;
	
	function init() {
		// --- write your JS code here ---
		
		canvas = document.getElementById("canvas1");
		cjsImages = cjsImages||{};
		ss = ss||{};
	
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadFile({src:"images/script_atlas_.json?1464411112955", type:"spritesheet", id:"script_atlas_"}, true);
		loader.loadManifest(cjsLib.properties.manifest);
	}
	
	function handleFileLoad(evt) {
		if (evt.item.type == "image") { cjsImages[evt.item.id] = evt.result; }
	}
	
	function handleComplete(evt) {
		var queue = evt.target;
		console.log(queue);
		ss["script_atlas_"] = queue.getResult("script_atlas_");
		console.log(ss["script_atlas_"]);
		exportRoot = new cjsLib.crouton_v006();
			
		
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
	
		createjs.Ticker.setFPS(cjsLib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
		
	}

	var animator = new Animator();
	animator.init();
	
	var t = 0;
	
	animator.setTask({
		'id':'task1',
		'ch': new CanvasHandler($('#canvas1').get(0)),
		'update':function(progress){
			var ch = this.ch;
			var ctx = ch.getContext();
			ch.clear();
			ch.setWidth(20);
			ch.setStrokeStyle(200, 100, 100, 1);
			ctx.font="200px Georgia";
			ctx.fillText('TONKATSU', 200, 200);
		},
		'tweener':function(delta){
			if(this.currentFrame === undefined){this.currentFrame = 0;}
			this.currentFrame += delta;
			return this.currentFrame / this.duration;
		},
		'duration': 2000,
	});
	
});

