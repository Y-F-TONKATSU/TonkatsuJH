var DocProcessor = {
	
	 'frameIn':{
		
		'fromLeft':function(elem, duration, callBack){
			
			var left = DisplayUtil.getElemRect(elem).left;
			
			$(elem).show().scrollTop(0).css({
				'left': -DisplayUtil.getWidth(),
			}).animate({
				'left': left
			}, duration, callBack)
			.data({
				'state':'visible'
			});
		
		}
	},
	
	'frameOut':{
		
		'fromLeft':function(elem, duration, callBack){
			
			var left = DisplayUtil.getElemRect(elem).left;
			
			$(elem).show().scrollTop(0).css({
				'left':left,
			}).animate({
				'left': -DisplayUtil.getWidth()
			}, duration, callBack)
			.data({
				'state':'hidden'
			});
		}
	},
	
	'mobileAdaption':function(doc){
		
		$(doc).find('br').remove();
		$(doc).find('section').css({
			fontSize: '80%'
		});
		
	},
	
	'cjsLabeled':function(doc){
		
		var h = DisplayUtil.getHeight();
			
		$(doc).find('section').css({
			'position':'relative',
			'marginTop': h * 0.2,
			'marginBottom': h * 0.5,
			'marginLeft':'15%',
			'backgroundColor':'#F7F4E8',
			'width':'30%',
			'box-shadow': '2px 2px 12px 4px #888888',
			'padding':'2%',
			'transform': 'rotate(2deg)',
		}).end().find('.ad').find('table').css({
			'width':'100%',
			'maxWidth':'300px'
		}).end().end().find('.right').css({
			'marginLeft':'60%'
		}).end().find('.short').css({
			'marginBottom':h * 0.2
		}).end().find('section').first()
		.css({
			'marginTop': h * 0.3
		}).end().last()
		.css({
			'marginBottom': h * 0.6,
		}).end().find('p');
		
		$('#mainDoc').empty()
			.html($(doc).find('article').html());
		
	}
	
};

