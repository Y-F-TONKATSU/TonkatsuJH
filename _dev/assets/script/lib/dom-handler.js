var DomHandler;

(function(){
	
	DomHandler = function(){
		
		this._loadCompleteListener = null;
		this._onHideListener = function(){};
		
	};
	
	DomHandler.prototype = {
		
		_setMainDocMode:function(url){
			
			DocProcessor.frameIn.fromLeft($('#mainDoc'), 1000, function(){
			});
			
			if($('#indexContainer').data('state') === 'visible'){
				DocProcessor.frameOut.fromLeft($('#indexContainer'), 1000, function(){
				});
			}
			
			this._loadDoc(url);
			
		},
		
		_setIndexMode:function(){
			
			DocProcessor.initIndex($('#indexContainer'));
			
			if(DisplayUtil.getSize() !== 'large'){
				DocProcessor.mobileAdaption($('#indexContainer'));				
			}
						
			DocProcessor.frameIn.fromLeft($('#indexContainer'), 1000, function(){
			});
			
			if($('#mainDoc').data('state') === 'visible'){
				DocProcessor.frameOut.fromLeft($('#mainDoc'), 1000, function(){
					$('#mainDoc').empty();
				});
			}
			
			$('title').text(BASE_TITLE);
			
			this._loadCompleteListener('index');
			
		},
	
		_loadDoc:function(url){
			
			console.log('Start Loading Doc by Ajax: ' + url);
			
			$.ajax({
				'url': url,
				'dataType':'html',
			}).done(_.bind(function(result) {
				
				var newDoc = $('<div></div>');
				newDoc.html(result);
				
				if(DisplayUtil.getSize() !== 'large'){
					DocProcessor.mobileAdaption(newDoc);				
				}
	
				var type = $(newDoc).find('article').attr('data-doc-type');
				
				console.log('New Doc Loaded by Ajax');
				console.log('type: ' + type);
				console.log('title: ' + title);
				
				var title = $(newDoc).find('title').text();
				$('title').text(title + ' - ' + BASE_TITLE);
				
				DocProcessor[type](newDoc);
				if(type === 'plain'){
					var bg = $(newDoc).find('article').attr('data-doc-bg');
					gCjsOptions = {
						'movieOptions':{
							'bg':bg,
						},
						'loaderOptions':{}
					}
				}
				
				gCjsOptions.movieOptions.type = type;
				
				this._loadCompleteListener(gCjsOptions);
				
			}, this));
			
		},
		
		resetIndex:function(){
			$('#indexContainer').scrollLeft(0)
				.scrollTop(0);
		},
			
		setLoadCompleteListener:function(f){
			this._loadCompleteListener = f;
		},
		
		initElems:function(elems){
			
			_.each(elems, function(elem){
				
				var rect = DisplayUtil.getElemRect(elem);
				
				if($(elem).attr('data-layout-state') === 'hidden'){
					$(elem).data('state', 'hidden');
					rect.left = -DisplayUtil.getWidth();
				} else {
					$(elem).data('state', 'visible');
				}
				
				DisplayUtil.rectToCss(rect, elem);
				
			});
			
		},
		
		initFullScreenElems:function(elems){
			
			$(elems).css({
				'position':'fixed',
				'left':'0%',
				'top':'0%',
				'width':'100%',
				'height':'100%'
			});
						
		},		

		showMenu:function(onHideListener){
			
			this._onHideListener = onHideListener;
			
			this.hideShare();
			this.showMenuCanceler();
			$('#menuCanceler').click(_.bind(this.hideMenu, this));
			
			DocProcessor.initMenu($('#menu'));
			
			if($('#menu').data('state') === 'hidden'){
				$('#menu').css('display', 'block');
				DocProcessor.frameIn.fromLeft($('#menu'), 1000, function(){
				});
			}
			
		},
		
		showShare:function(url, title, onHideListener){
			
			this._onHideListener = onHideListener;
			
			this.hideMenu();
			this.showMenuCanceler();
			$('#menuCanceler').click(_.bind(this.hideShare, this));
			
			$('#share_title').html('『' + title + '』をシェア').show();
			
			if($('#share').data('state') === 'hidden'){
				DocProcessor.frameIn.fromLeft($('#share'), 3000, function(){
				});
			}
			
			
		},
		
		showMenuCanceler:function(){
			
			$('#menuCanceler').show().css('opacity', 0.6);
			
		},
		
		hideMenu:function(){
			
			this._onHideListener();
			
			this.hideMenuCanceler();
			
			if($('#menu').data('state') === 'visible'){
				DocProcessor.frameOut.fromLeft($('#menu'), 1000, function(){
				});
			}
			
		},
		
		hideShare:function(){
			
			this._onHideListener();
			
			this.hideMenuCanceler();
			
			if($('#share').data('state') === 'visible'){
				DocProcessor.frameOut.fromLeft($('#share'), 1000, function(){
				});
			}
			
		},
		
		hideMenuCanceler:function(){
			
			$('#menuCanceler').hide();
			
		},
		
		changeTo:function(hash){
			
			this.hideMenu();
			this.hideShare();
			
			$('.contElem').remove();
			
			if(hash.category === 'top'){
				this._setIndexMode();
			} else {
				this._setMainDocMode(ContentsUtil.getUrl(hash));
			}
		
		},
		
		changeOption:function(option){
			
			var target = $('article').find('[data-cjs-scene=' + option + ']').get(0);
			var top;
			
			if(target){
				top = $(target).offset().top + $('article').scrollTop() - DisplayUtil.getHeight() * 0.5;
			} else {
				top = 0;
			}
			
			$('article').scrollTop(top);
		},
		
		
	};
	
})();

	
