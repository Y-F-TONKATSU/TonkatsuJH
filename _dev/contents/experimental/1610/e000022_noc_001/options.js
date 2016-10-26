var gCjsOptions = {
	'movieOptions':{
		'mcList':[
			{
				'containerId': 'back',
				'root': 'root'
			},
		],
		'docId':'experimental000022',
		'root':'noc001',
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
				'id':'e000022_bg',
				'docId': 'e000022',
				'containerId': 'back',
				'tweener':Tweeners.endless,
				'ender':Enders.endless,
				'onInit': Animators.index.ex000022_init,
				'onTicked': Animators.index.ex000022,
			});
			
		},
		'UniformVelocity001':function(){
			$('#contMainCanvas').show();
			E000022.uniformVelocity001();
		},
		'UniformAcceleration001':function(){
			$('#contMainCanvas').show();
			E000022.uniformAcceleration001();
		},
		'Mouse001':function(){
			$('#contMainCanvas').show();
			E000022.mouse001();
		},
		'Mouse002':function(){
			$('#contMainCanvas').show();
			E000022.mouse002();
		},
		'Mouse003':function(){
			$('#contMainCanvas').show();
			E000022.mouse003();
		},
	},
	'sceneOut':{
		'Ex001':function(){
			animationHandler.removeTask('e000021_bg');
		},
		'UniformVelocity001':function(){
			$('#contMainCanvas').hide();
			E000022.stop();
			E000022.clear();
		},
		'UniformAcceleration001':function(){
			$('#contMainCanvas').hide();
			E000022.stop();
			E000022.clear();
		},
		'Mouse001':function(){
			$('#contMainCanvas').hide();
			E000022.stop();
			E000022.clear();
		},
		'Mouse002':function(){
			$('#contMainCanvas').hide();
			E000022.stop();
			E000022.clear();
		},
		'Mouse003':function(){
			$('#contMainCanvas').hide();
			E000022.stop();
			E000022.clear();
		},
	},
	'end':function(){
		if(E000022){
			E000022.stop();
			E000022.clear();
			E000022 = null;
		}
		animationHandler.removeTask('e000022_bg');
		$('#contMainCanvas').hide();
	}
};