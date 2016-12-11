var gCjsOptions = {
	'movieOptions':{
		'mcList':[
			{
				'containerId': 'back',
				'root': 'root'
			},
		],
		'docId':'experimental000023',
		'root':'noc002',
	},
	'loaderOptions':{
		'containerId':'fore',
		'animator':Animators.basic.loader_circle,
		'tweener':Tweeners.progress,
	}
};

var gCjsEvents = {
	'label':{
		'Main_load':function(){
		},
		'Main_start':function(){
		},
		'GraphLine':function(){
			
			$('#contMainCanvas').hide();
			
		},
	},
	'labelOut':{
	},
	'scene':{
		'Ex001':function(){
			
			animationHandler.addTask({
				'id':'E000023_bg',
				'docId': 'E000023',
				'containerId': 'back',
				'tweener':Tweeners.endless,
				'ender':Enders.endless,
				'onInit': Animators.index.ex000022_init,
				'onTicked': Animators.index.ex000022,
			});
			
		},
	},
	'sceneOut':{
		'Ex001':function(){
			animationHandler.removeTask('e000023_bg');
		},
	},
	'end':function(){
		if(E000023){
			E000023.stop();
			E000023.clear();
			E000023 = null;
		}
		animationHandler.removeTask('E000023_bg');
		$('#contMainCanvas').hide();
	}
};

_.each(['applyForce', 'gravitate', 'bounce', 'resistance'], function(f){
	gCjsEvents.scene[f] = function(){
		$('#contMainCanvas').show();
		E000023[f]();
	};
	gCjsEvents.sceneOut[f] = function(){
		$('#contMainCanvas').hide();
		E000023.stop();
		E000023.clear();
	};
})