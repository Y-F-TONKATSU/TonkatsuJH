var cjsEvents = {
	'label':{
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
		'Scene006_stop':function(){
			$('.share_crouton').remove();
		}
	}
	
}