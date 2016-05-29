var cjsEvents = {
	'label':{
		'Scene004_stop':function(){
			
			cjsEvents.hitAreaHandler = new HitAreaHandler($('#navigation'));
			
			cjsEvents.hitAreaHandler.setHitArea('crouton', {
				width:180,
				height:100,
				left:460,
				top:500
			}, '#experimental000019_Scene005',
			function(){
				Tonkatsu.onHashChanged();
			});

		},
		'Scene006_stop':function(){
			var shareDiv = ShareUtil.getAllTags('http://ton-katsu.net/public/contents/experimental/1604/e000019_crouton/main.html', 'クルトンの作り方');

			$(shareDiv).addClass('share_crouton').addClass('contElem').css({
				'position':'fixed',
				'width':'25%',
				'height':'32%',
				'top':'31%',
				'left':'18%',
				'overflowY':'auto',
				'backgroundColor':'red'
			});
			$('#foreground').append(shareDiv);
			
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