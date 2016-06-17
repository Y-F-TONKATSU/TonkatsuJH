var cjsOptions = {
	'movieOptions':{
		'mcList':[{
			'containerId': 'fore',
			'root': 'foreground'
		},{
			'containerId': 'back',
			'root': 'background'
		},],
		'docId':'experimental000019',
		'root':'crouton_v006',
	},
	'loaderOptions':{
		'containerId':'fore',
		'animator':Animators.basic.loader_circle,
		'tweener':Tweeners.basic.progress,
	}
};

var cjsEvents = {
	'label':{
		'Scene004_stop':function(){
			
			cjsEvents.hitAreaHandler = new HitAreaHandler($('#navigation'));
			
			if($(cjsEvents.hitAreaHandler.getHitArea('crouton')).length > 0){return;}
			
			cjsEvents.hitAreaHandler.setHitArea('crouton', {
				left:460 * 0.4,
				top:500 * 0.4,
				width:180 * 0.4,
				height:100 * 0.4
			}, '#experimental000019_Scene005',
			function(){
				Tonkatsu.onHashChanged();
			});

		},
		'Scene006_stop':function(){
			
			if($('.share_crouton').length > 0){return;}
			
			var shareDiv = ShareUtil.getAllTags('ton-katsu.net/', 'クルトンの作り方');

			$(shareDiv).addClass('share_crouton').addClass('contElem').css({
				'position':'fixed',
				'overflowY':'auto',
				'pointerEvents':'auto'
			});
			
			DisplayUtil.setRect(shareDiv, 0.15, 0.23, 0.36, 0.44);
			
			$('#foreground').append(shareDiv);
			
			//ShareUtil.render();
		}
	},
	'labelOut':{
		'Scene004_stop':function(){
			cjsEvents.hitAreaHandler.removeHitArea('crouton');
		},
		'Scene006_stop':function(){
			$('.share_crouton').remove();
		}
	}
	
};