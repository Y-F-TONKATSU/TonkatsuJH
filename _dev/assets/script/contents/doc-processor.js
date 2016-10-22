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
			
			$(elem).show().css({
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
		
		$(doc).find('br').not('.m').remove();
		$(doc).find('section').css({
			fontSize: '80%'
		});
		$(doc).find('.noMobile').remove();
		
	},
	
	'initIndex':function(doc){
		
		if($(doc).data('initCompleted') === true){return;}
		
		$(doc).data('initCompleted', true);
		
		var h = DisplayUtil.getHeight();
		
		$(doc).find('section').css({
			'position':'relative',
			'marginTop': h * 0.2,
			'marginBottom': h * 0.5,
			'marginLeft':'15%',
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
		}).end().find('.widget_mainThumb, .widget_title').hide();
		
		/*$('#mainDoc').empty()
			.html($(doc).find('article').html())
			.scrollTop(0)
			.scrollLeft(0);
		*/
		
		$('#indexMainTitle').css({
			'transform': 'rotate(0deg)',
			'marginBottom': h * 0.4,
		});
		
		$('.news_mainThumb').width(100).height(100).css({
			'float':'left'
		});
		
		$('.news_date').css({
			'marginTop':'10px',
			'fontSize':'60%',
		});
		
		$('.news_title').css({
			'fontSize':'100%',
		});
		
		$('.news_description').css({
			'fontSize':'70%',
		});
		
		if(DisplayUtil.getSize() !== 'large'){
			
			
		}
		
		//$(doc).find('#indexAphorism').html(ContentsUtil.getRandomAphorism());
		
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
		});
		
		$('#mainDoc').empty()
			.html($(doc).find('article').html());
		
	},
	
	'cjsClips':function(doc){
		
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
		}).end().find('.ad').find('table').css({
			'width':'100%',
			'maxWidth':'300px'
		}).end().end().find('.right').css({
			'marginLeft':'60%'
		}).end().find('.wide').css({
			'marginLeft':'15%',
			'width':'80%',
		}).end().find('.canvasExp').css({
			'marginLeft':'76%',
			'width':'19%',
			'transform': 'rotate(0deg)'
		}).end().find('.short').css({
			'marginBottom':h * 0.2
		}).end().find('section').first()
		.css({
			'marginTop': h * 0.3
		}).end().last()
		.css({
			'marginBottom': h * 0.6,
		});
		
		$('#mainDoc').empty()
			.html($(doc).find('article').html());
		
		var canvas = $('#contMainCanvas');
		$(canvas).css({
			'position': 'fixed',
			'pointerEvents':'none'
		});
		
		DisplayUtil.setRect($('#contMainCanvas'), 125/768, 20/480, 439/768, 439/480);
		
		$('.ext').each(function(){
			
			var btn = $('<div class="extButton">コードを読む</div>');
			
			$(this).hide()
			.before(btn);
			
			var that = this;
			
			$(btn).css({
				'cursor':'pointer',
				'backgroundColor':'#00BD10',
				'fontSize':'125%'
			}).data({
				'visible':'false'
			}).click(function(){
				var visible = ($(this).data('visible') === 'true');
				console.log(this);
				if(visible){
					$(that).hide();
					$(this).text('コードを読む')
						.data({'visible':'false'});
				} else {
					$(that).show();
					$(this).text('コードを隠す')
						.data({'visible':'true'});
				}
			});
			
		});
		
		$('.book').css({
			'position': 'fixed',
			'left': (100 * 464 / 768) + '%',
			'top': (100 * 20 / 480) + '%',
			'width': (100 * 217 / 768) + '%',
			'maxHeight': (100 * 420 / 480) + '%',
			'backgroundColor':'#339933',
			'padding':'20px',
			'overflowY':'auto',
		});
			
	},
	
	'plain':function(doc){
		
		var h = DisplayUtil.getHeight();
		
		$(doc).find('section').css({
			'position':'relative',
			'marginTop': h * 0.1,
			'marginBottom': h * 0.1,
			'marginLeft':'20%',
			'backgroundColor':'#F7F4E8',
			'width':'50%',
			'box-shadow': '2px 2px 12px 4px #888888',
			'padding':'2%',
		}).end().find('.ad').find('table').css({
			'width':'100%',
			'maxWidth':'300px'
		}).end().end().find('.right').css({
			'marginLeft':'40%'
		}).end().find('pre').css({
			'paddingLeft':'10%',
		}).end().find('.canvasExp').css({
			'marginLeft':'76%',
			'width':'19%',
			'transform': 'rotate(0deg)'
		}).end().find('.short').css({
			'marginBottom':h * 0.2
		}).end().find('section').first()
		.css({
			'marginTop': h * 0.2
		}).end().last()
		.css({
			'marginBottom': h * 0.4,
		});
		
		$('#mainDoc').empty()
			.html($(doc).find('article').html());
			
	},
	
	
	'initMenu':function(doc){
		
		_.each($(doc).find('.menu_thumb'), function(thumb){
			$(thumb).attr('src', $(thumb).attr('data-src'))
		});
		
	}
	
};

