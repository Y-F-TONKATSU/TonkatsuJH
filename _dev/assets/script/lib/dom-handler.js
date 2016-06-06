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
			
			if(DisplayUtil.getSize() !== 'large'){
				DocProcessor.mobileAdaption(newDoc);				
			}

			var type = $(newDoc).find('article').attr('data-doc-type');
			var loader = $(newDoc).find('article').attr('data-loader-type');
			var root = $(newDoc).find('article').attr('data-cjs-root');
			
			console.log('New Doc Loaded by Ajax');
			console.log('type: ' + type + ', loader:' + loader + ', root:' + root);
			DocProcessor[type](newDoc);
			
			bgHandler.setCjs(cjsLib, cjsImages, loader, root);
			
		});
		
	}
	
	var setMainDocMode = function(url){
		
		DocAnimator.frameIn.fromLeft($('#mainDoc'), 1000, function(){
		});
		
		if($('#indexContainer').data('state') === 'visible'){
			DocAnimator.frameOut.fromLeft($('#indexContainer'), 1000, function(){
			});
		}
		
		loadDoc(url);
		
	};
	
	var setIndexMode = function(){
		
		DocAnimator.frameIn.fromLeft($('#indexContainer'), 1000, function(){
		});
		
		if($('#mainDoc').data('state') === 'visible'){
			DocAnimator.frameOut.fromLeft($('#mainDoc'), 1000, function(){
			});
		}
		
	};
	
	DomHandler.prototype = {
		
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
		
		showMenu:function(){
			
			this.hideShare();
			this.showMenuCanceler();
			$('#menuCanceler').click(_.bind(this.hideMenu, this));
			
			if($('#menu').data('state') === 'hidden'){
				DocAnimator.frameIn.fromLeft($('#menu'), 1000, function(){
				});
			}
			
		},
		
		showShare:function(url, title){
			
			this.hideMenu();
			this.showMenuCanceler();
			$('#menuCanceler').click(_.bind(this.hideShare, this));
			
			if($('#share').data('state') === 'hidden'){
				DocAnimator.frameIn.fromLeft($('#share'), 1000, _.bind(function(){
					
					var shareDiv = ShareUtil.getAllTags(this._url, this._title);

					$('#share').empty().append(shareDiv);

					ShareUtil.render();
					
				}, this));
			}
			
		},
		
		showMenuCanceler:function(){
			
			$('#menuCanceler').show().css('opacity', 0.2);
			
		},
		
		hideMenu:function(){
			
			this.hideMenuCanceler();
			if($('#menu').data('state') === 'hidden'){return;}
			
			DocAnimator.frameOut.fromLeft($('#menu'), 1000, function(){
			});
			
		},
		
		hideShare:function(){
			
			this.hideMenuCanceler();
			if($('#share').data('state') === 'hidden'){return;}
			
			DocAnimator.frameOut.fromLeft($('#share'), 1000, function(){
			});
			
		},
		
		hideMenuCanceler:function(){
			
			$('#menuCanceler').hide();
			
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

	
