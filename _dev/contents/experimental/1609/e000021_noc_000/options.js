var gCjsOptions = {
	'movieOptions':{
		'mcList':[
			{
				'containerId': 'back',
				'root': 'root'
			},
		],
		'docId':'experimental000021',
		'root':'noc001',
	},
	'loaderOptions':{
		'containerId':'fore',
		'animator':Animators.basic.loader_circle,
		'tweener':Tweeners.basic.progress,
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
				'id':'e000021_bg',
				'docId': 'e000021',
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
				'onInit': Animators.index.ex000021_init,
				'onTicked': Animators.index.ex000021,
			});
			
		},
		'Line1':function(){
			$('#contMainCanvas').show();
			E000021.draw(function(input){
				return 0.5;
			});
		},
		'Line2':function(){
			$('#contMainCanvas').show();
			E000021.draw(Math.random);
		},
		'Line3':function(){
			$('#contMainCanvas').show();
			E000021.draw(noise);
		},
		'Circle1':function(){
			$('#contMainCanvas').show();
			E000021.drawCircle(function(input){
				return 0.5;
			});
		},
		'Circle2':function(){
			$('#contMainCanvas').show();
			E000021.drawCircle(Math.random);
		},
		'Circle3':function(){
			$('#contMainCanvas').show();
			E000021.drawCircle(noise);
		},
		'Motion1':function(){
			$('#contMainCanvas').show();
			E000021.motion(function(input){
				return 0.5;
			});
		},
		'Motion2':function(){
			$('#contMainCanvas').show();
			E000021.motion(Math.random);
		},
		'Motion3':function(){
			$('#contMainCanvas').show();
			E000021.motion(noise);
		},
		'Noise1D':function(){
			$('#contMainCanvas').show();
			E000021.noise1D();
		},
		'Noise2D':function(){
			$('#contMainCanvas').show();
			E000021.noise2D();
		},
	},
	'sceneOut':{
		'Ex001':function(){
			animationHandler.removeTask('e000021_bg');
		},
		'Line1':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Line2':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Line3':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Circle1':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Circle2':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Circle3':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Motion1':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Motion2':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Motion3':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Noise1D':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
		'Noise2D':function(){
			$('#contMainCanvas').hide();
			E000021.stop();
			E000021.clear();
		},
	},
	'end':function(){
		if(E000021){
			E000021.stop();
			E000021.clear();
			E000021 = null;
		}
		animationHandler.removeTask('e000021_bg');
		$('#contMainCanvas').hide();
	}
};