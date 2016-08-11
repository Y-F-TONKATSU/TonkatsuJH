var cjsOptions = {
	'movieOptions':{
		'mcList':[
			{
				'containerId': 'back',
				'root': 'root'
			},
		],
		'buttonColor':{
			'r': 0,
			'g': 189,
			'b': 16,
		},
		'docId':'experimental000020',
		'root':'AntSim',
	},
	'loaderOptions':{
		'containerId':'fore',
		'animator':Animators.basic.loader_circle,
		'tweener':Tweeners.basic.progress,
	}
};

var cjsEvents = {
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
				'progress':0,
				'currentTime':0,
				'duration': 0,
				'waitTime': 0,
				'tIndex':10,
				'vars':{},
				'scene':'',
				'tweener':function(){return 0;},
				'ender':function(){return false;},
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
	}
};