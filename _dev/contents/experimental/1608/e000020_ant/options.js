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
		},
	}
};