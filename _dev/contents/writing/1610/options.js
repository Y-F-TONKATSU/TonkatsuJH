var gCjsOptions = {
	'movieOptions':{
		'mcList':[
			{
				'containerId': 'back',
				'root': 'root'
			},
		],
		'docId':'writing000001',
		'root':'AntSim',
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
			$('#contMainCanvas').show();
			E000020.resetAntSim();
			$('#contBook').hide();
		},
		'Main_start':function(){
			$('#contBook').hide();
		},
		'Ex001':function(){
			$('#contMainCanvas').hide();
			$('#contBook').show();
			
			animationHandler.addTask({
				'id':'e000020_ant_bg',
				'docId': 'e000020',
				'containerId': 'back',
				'tweener':Tweeners.endless,
				'ender':Enders.endless,
				'onInit': Animators.index.ex000020_init,
				'onTicked': Animators.index.ex000020,
			});
			
		},
	},
	'labelOut':{
		'Main_start':function(){
			$('#contMainCanvas').hide();
		},
		'Main_load':function(){
			$('#contMainCanvas').hide();
			E000020.removeAntSim();
		},
		'Ex001':function(){
			$('#contBook').hide();
			animationHandler.removeTask('e000020_ant_bg');
		},
	},
	'end':function(){
		if(E000020){
			E000020.removeAntSim();
			E000020 = null;
		}
		animationHandler.removeTask('e000020_ant_bg');
		$('#contMainCanvas').hide();
		$('#contBook').hide();
	}
};