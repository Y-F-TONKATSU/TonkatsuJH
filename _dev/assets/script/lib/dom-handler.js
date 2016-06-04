var DomHandler;

(function(){
	
	DomHandler = function(){
		
		this._url = 'http://ton-katsu.net/';
		this._title = 'とんかつひろば';
		
	};
	
	
	var loadDoc = function(url){
		
		$.ajax({
			'url': url,
			'dataType':'html',
		}).done(function(result) {
			
			var newDoc = $('<div></div>');
			newDoc.html(result);
			var type = $(newDoc).find('article').attr('data-doc-type');
			var loader = $(newDoc).find('article').attr('data-loader-type');
			var root = $(newDoc).find('article').attr('data-cjs-root');
			
			console.log('New Doc Loaded by Ajax');
			console.log('type: ' + type + ', loader:' + loader + ', root:' + root);
			processDoc[type](newDoc, loader, root);
			
		});
		
	}
	
	var mobileAdaption = function(doc){
		
		if(DisplayUtil.getSize() !== 'large'){
			$(doc).find('br').remove();
			$(doc).find('section').css({
				fontSize: '80%'
			});
		}
		
	};
	
	var processDoc = {
		
		'cjsLabeled':function(doc, loader, root){
			
			var h = DisplayUtil.getHeight();
			console.log(DisplayUtil.getSize());
			
			mobileAdaption(doc);
				
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
			}).end().end().find('.right').css({				'marginLeft':'60%'
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
			
			bgHandler.setCjs(cjsLib, cjsImages, loader, root);
			
		},
		
	};
	
	var frameIn = {
		
		'fromLeft':function(elem, duration, left, callBack){
			
			if(_.isFunction(left)){
				callBack = left;
				left = DisplayUtil.getStageRect().left;
			}
			console.log(left);
			
			$(elem).show().scrollTop(0).css({
				'left': -DisplayUtil.getWidth(),
			}).animate({
				'left': left
			}, duration, callBack)
			.data({
				'state':'visible'
			});
		
		}
	}
	
	var frameOut = {
		
		'fromLeft':function(elem, duration, left, callBack){
			
			if(_.isFunction(left)){
				callBack = left;
				left = DisplayUtil.getStageRect().left;
			}
			
			$(elem).show().scrollTop(0).css({
				'left':left,
			}).animate({
				'left': -DisplayUtil.getWidth()
			}, duration, callBack)
			.data({
				'state':'hidden'
			});
		}
	}
	
	var setMainDocMode = function(url){
		
		frameIn.fromLeft($('#mainDoc'), 1000, function(){
		});
		
		if($('#indexContainer').data('state') === 'visible'){
			frameOut.fromLeft($('#indexContainer'), 1000, function(){
			});
		}
		
		loadDoc(url);
		
	};
	
	var setIndexMode = function(){
		
		frameIn.fromLeft($('#indexContainer'), 1000, function(){
		});
		
		if($('#mainDoc').data('state') === 'visible'){
			frameOut.fromLeft($('#mainDoc'), 1000, function(){
			});
		}
		
	};
	
	var getMenuLeft = function(){
		
		var rect = DisplayUtil.getStageRect();
		
		return rect.left + rect.width * 0.1;
			
	}
	
	DomHandler.prototype = {
		
		init:function(){
			
			var rect = DisplayUtil.getStageRect();
			
			$('#menu, #share').css({
				left:-rect.width,
				top:rect.height * 0.04,
				width:rect.width * 0.80,
				height:rect.height * 0.92,
			}).data({
				'state':'hidden'
			});
			
			$('#menuCanceler').hide().data({
				'state':'hidden'
			});
			
		},
		
		initDoc:function(doc){
			
			var rect = DisplayUtil.getStageRect();
			
			$(doc).css({
				'width': rect.width * 0.99,
				'height': rect.height,
				'top': rect.top,
				'left': -DisplayUtil.getWidth(),
			}).data({
				'state':'hidden'
			});

			
		},
		
		showMenu:function(){
			
			this.hideShare();
			this.showMenuCanceler();
			$('#menuCanceler').click(_.bind(this.hideMenu, this));
			
			if($('#menu').data('state') === 'hidden'){
				frameIn.fromLeft($('#menu'), 1000, getMenuLeft(), function(){
				});
			}
			
		},
		
		showShare:function(url, title){
			
			this.hideMenu();
			this.showMenuCanceler();
			$('#menuCanceler').click(_.bind(this.hideShare, this));
			
			if($('#share').data('state') === 'hidden'){
				frameIn.fromLeft($('#share'), 1000, getMenuLeft(), _.bind(function(){
					
					var shareDiv = ShareUtil.getAllTags(this._url, this._title);

					$('#share').empty().append(shareDiv);

					ShareUtil.render();
					
				}, this));
			}
			
		},
		
		showMenuCanceler:function(){
			
			if($('#menuCanceler').data('state') === 'hidden'){
				$('#menuCanceler').show().data('state', 'visible');
			}
			
		},
		
		hideMenu:function(){
			
			this.hideMenuCanceler();
			if($('#menu').data('state') === 'hidden'){return;}
			
			frameOut.fromLeft($('#menu'), 1000, getMenuLeft(), function(){
			});
			
		},
		
		hideShare:function(){
			
			this.hideMenuCanceler();
			if($('#share').data('state') === 'hidden'){return;}
			
			frameOut.fromLeft($('#share'), 1000, getMenuLeft(), function(){
			});
			
		},
		
		hideMenuCanceler:function(){
			
			if($('#menuCanceler').data('state') === 'hidden'){return;}
			
			$('#menuCanceler').hide().data('state', 'hidden');
			
		},
		
		changeTo:function(hash){
			
			this.hideMenu();
			this.hideShare();
			
			$('.contElem').remove();
			
			if(hash.category === 'top'){
				setIndexMode();
			} else {
				setMainDocMode('contents/experimental/1604/e000019_crouton/main.html');
			}
		
		},
		
		changeOption:function(option){
			
			var target = $('article').find('[data-cjs-scene=' + option + ']').get(0);
			if(target){
				var t = $(target).offset().top + $('article').scrollTop() - DisplayUtil.getHeight() * 0.5;
				$('article').scrollTop(t);

			}
		
		},
		
		
	};
	
})();

	
