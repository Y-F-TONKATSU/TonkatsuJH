var cjsOptions = {
	'movieOptions':{
		'mcList':[
			{
				'containerId': 'fore',
				'root': 'foreground'
			},{
				'containerId': 'back',
				'root': 'background'
			},
		],
		'docId':'experimental000019',
		'root':'crouton_v006',
	},
	'loaderOptions':{
		'containerId':'fore',
		'animator':Animators.basic.loader_circle,
		'tweener':Tweeners.basic.progress,
	}
};
console.log(cjsOptions);
var cjsEvents = {
	'label':{
		'Scene004_stop':function(){
			
			cjsEvents.hitAreaHandler = new HitAreaHandler($('#navigation_hitarea'));
			
			if($(cjsEvents.hitAreaHandler.getHitArea('crouton')).length > 0){return;}
			
			cjsEvents.hitAreaHandler.setEventHitArea('crouton', {
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
			
			cjsEvents.hitAreaHandler = new HitAreaHandler($('#navigation_hitarea'));
			
			if($(cjsEvents.hitAreaHandler.getHitArea('crouton_fb')).length > 0){return;}
			
			var URL = 'ton-katsu.net/contents/experimental/1604/e000019_crouton/main.html'
						
			cjsEvents.hitAreaHandler.setEventHitArea('crouton_fb', {
				left:285 * 0.4,
				top:275 * 0.4,
				width:320 * 0.4,
				height:255 * 0.4
			}, ShareUtil.getFaceBookLink(URL));
			
			cjsEvents.hitAreaHandler.setEventHitArea('crouton_tw', {
				left:606 * 0.4,
				top:275 * 0.4,
				width:320 * 0.4,
				height:255 * 0.4
			}, ShareUtil.getTwitterLink(URL, 'クルトンの作り方 - とんかつひろば'));
			
			cjsEvents.hitAreaHandler.setEventHitArea('crouton_gp', {
				left:390 * 0.4,
				top:543 * 0.4,
				width:320 * 0.4,
				height:255 * 0.4
			}, ShareUtil.getGooglePlusLink(URL));
			
			cjsEvents.hitAreaHandler.setEventHitArea('crouton_hb', {
				left:676 * 0.4,
				top:543 * 0.4,
				width:320 * 0.4,
				height:255 * 0.4
			}, ShareUtil.getHatenaLink(URL));
			
		}
	},
	'labelOut':{
		'Scene004_stop':function(){
			cjsEvents.hitAreaHandler.removeHitArea('crouton');
		},
		'Scene006_stop':function(){
			cjsEvents.hitAreaHandler.removeHitArea('crouton_fb');
			cjsEvents.hitAreaHandler.removeHitArea('crouton_tw');
			cjsEvents.hitAreaHandler.removeHitArea('crouton_gp');
			cjsEvents.hitAreaHandler.removeHitArea('crouton_hb');
		}
	}
	
};