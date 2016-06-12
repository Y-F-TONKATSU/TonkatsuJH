var cjsEvents = {
	'label':{
		'Scene002_stop':function(){
			
			console.log('label event');
			ah.stopCjs();
			console.log(ah._taskList);
			console.log(ah._cjsStages);
			
		},
	},
	'labelOut':{
		'Scene001_stop':function(){
			console.log('label out event');
		},
	}
	
};