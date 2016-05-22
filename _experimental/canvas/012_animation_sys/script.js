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
			var w = ch.getCanvasWidth();
			var h = ch.getCanvasHeight();
			ch.drawShape(function(ctx){
				ctx.rect(w * 0.5 * progress, h * 0.5 * progress, w * progress, h * progress);
			});
		},
		'tweener':function(delta){
			if(this.currentFrame === undefined){this.currentFrame = 0;}
			this.currentFrame += delta;
			return this.currentFrame / this.duration;
		},
		'duration': 2000,
	});
	
	animator.setTask({
		'id':'task2',
		'ch': new CanvasHandler($('#canvas2').get(0)),
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
	});
	
});

