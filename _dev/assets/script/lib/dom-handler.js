var DomHandler;

(function(){
	
	DomHandler = function(){
		
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
	
	var processDoc = {
		
		'cjsLabeled':function(doc, loader, root){
			
			var h = DisplayUtil.getHeight();
		
			$(doc).find('section').css({
				'position':'relative',
				'marginTop': h * 0.2,
				'marginBottom': h * 0.5,
				'marginLeft':'15%',
				'backgroundColor':'yellow',
				'width':'30%',
				'box-shadow': '2px 2px 12px 4px #888888',
				'padding':'2%',
				'transform': 'rotate(2deg)',
			}).end().find('.right').css({
				'marginLeft':'60%',
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
		
		'fromLeft':function(elem, duration, callBack){
			
			$(elem).show().scrollTop(0).css({
				'left': -DisplayUtil.getWidth(),
			}).animate({
				'left':DisplayUtil.getStageRect().left
			}, duration, callBack)
			.data({
				'state':'visible'
			});
		
		}
	}
	
	var frameOut = {
		
		'fromLeft':function(elem, duration, callBack){
			
			$(elem).show().scrollTop(0).css({
				'left':DisplayUtil.getStageRect().left,
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
	
	
	DomHandler.prototype = {
		
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
			
			if($('#menu').data('state') === 'hidden'){
				frameIn.fromLeft($('#menu'), 1000, function(){
				});
			}
			
		},
		
		showShare:function(){
			
			this.hideMenu();
			
			if($('#share').data('state') === 'hidden'){
				frameIn.fromLeft($('#share'), 1000, function(){
				});
			}
			
		},
		
		hideMenu:function(){
			
			if($('#menu').data('state') === 'hidden'){return;}
			
			frameOut.fromLeft($('#menu'), 1000, function(){
			});
			
		},
		
		hideShare:function(){
			
			if($('#share').data('state') === 'hidden'){return;}
			
			frameOut.fromLeft($('#share'), 1000, function(){
			});
			
		},
		
		changeTo:function(hash){
			
			this.hideMenu();
			this.hideShare();
			
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

	
