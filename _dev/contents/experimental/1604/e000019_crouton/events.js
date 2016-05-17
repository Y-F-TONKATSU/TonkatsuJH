var cjsEvents = {
	'label':{
		'Scene004_stop':function(){
			
			cjsEvents.hitAreaHandler = new HitAreaHandler($('#navigation'));
			
			cjsEvents.hitAreaHandler.setHitArea('crouton', {
				width:500,
				height:500,
				left:300,
				top:40
			}, '#experimental000019_Scene005');

		},
		'Scene006_stop':function(){
			var shareDiv = ShareUtil.getAllTags('http://ton-katsu.net/public/contents/experimental/1604/e000019_crouton/main.html', 'クルトンの作り方');

			$(shareDiv).addClass('share_crouton').css({
				'position':'fixed',
				'width':'22%',
				'height':'31%',
				'top':'27%',
				'left':'20%',
				'overflowY':'auto'
			});
			$('article').append(shareDiv);
			
			ShareUtil.render();
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