var FrameAnimationHandler;

(function(){
	
	FrameAnimationHandler = function(){
		this._taskList = {};
		this._cjsTask = null;
	}
	
	var lastTime;
	
	FrameAnimationHandler.prototype = {	
		
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
		
		setTask:function(task){
			console.log('Set Animation Task:' + task.id);	
			this._taskList[task.id] = task;
		},
		
		removeTasks:function(removes){
			
			_.each(removes, _.bind(function(id){
				this.removeTask(id);
			}, this));
				
		},
		
		removeTask:function(id){
			console.log('Remove Animation Task:' + id);	
			delete this._taskList[id];
				
		},
		
		setCjsTask:function(f){
			this._cjsTask = f;
		},
		
		removeCjsTask:function(){
			this._cjsTask = null;
		}
		
	}
	
})();
		
