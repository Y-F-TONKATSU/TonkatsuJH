var cjsEvents = {
	'label':{
		'Scene006_stop':function(){
			ShareUtil.init();
			var shareDiv = ShareUtil.getAllTags('http://ton-katsu.net/contents/experimental/1604/e000019_crouton/main.html', 'クルトンの作り方');

			$(shareDiv).append(tw).append(gp).css({
				'position':'fixed',
				'width':'20%',
				'height':'20%',
				'top':'25%',
				'left':'20%',
				
			});
			$('article').append(shareDiv);
			
			ShareUtil.render();
		}
	}
	
}