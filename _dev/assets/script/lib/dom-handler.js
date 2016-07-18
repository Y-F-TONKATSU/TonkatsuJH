var DomHandler;

(function(){
	
	DomHandler = function(){
		
		this._url = 'http://ton-katsu.net/';
		this._title = 'とんかつひろば';
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
				});
			}
			
			this._loadCompleteListener('index');
			
		},
	
		_loadDoc:function(url){
			
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
				var loader = $(newDoc).find('article').attr('data-loader-type');
				var root = $(newDoc).find('article').attr('data-cjs-root');
				
				console.log('New Doc Loaded by Ajax');
				console.log('type: ' + type + ', loader:' + loader + ', root:' + root);
				DocProcessor[type](newDoc);
				
				this._loadCompleteListener(cjsOptions);
				
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
			})
			
		},		
		
		showMenu:function(onHideListener){
			
			this._onHideListener = onHideListener;
			
			this.hideShare();
			this.showMenuCanceler();
			$('#menuCanceler').click(_.bind(this.hideMenu, this));
			
			if($('#menu').data('state') === 'hidden'){
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
			
		},
		
		showMenuCanceler:function(){
			
			$('#menuCanceler').show().css('opacity', 0.6);
			
		},
		
		hideMenu:function(){
			
			this._onHideListener();
			
			this.hideMenuCanceler();
			
		},
		
		hideShare:function(){
			
			this._onHideListener();
			
			this.hideMenuCanceler();
			$('#share_title').hide();
			
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

	
