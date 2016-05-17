var DomHandler;

(function(){
	
	DomHandler = function(){
		
	};
	
	
	var loadDoc = function(url){
		
		$.ajax({
			'url': url,
			'dataType':'html',
		}).done(function(result) {
			
			console.log('New Doc Loaded by Ajax');
			
			var newDoc = $('<div></div>');
			newDoc.html(result);
			var type = $(newDoc).find('article').attr('data-doc-type');
			var loader = $(newDoc).find('article').attr('data-loader-type');
			var root = $(newDoc).find('article').attr('data-cjs-root');
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
				'marginLeft':'10%',
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
	
	var setMainDocMode = function(url){
			
		$('#indexContainer').hide();
		$('#mainDoc').show();
		
		loadDoc(url);
			
	};
	
	var setIndexMode = function(){
		
		$('#indexContainer').show();
		$('#mainDoc').hide();
		
	};
	
	
	DomHandler.prototype = {
		
		initDoc:function(doc){
			var rect = DisplayUtil.getStageRect();
			$(doc).css({
				'width': rect.width,
				'height': rect.height,
				'top': rect.top,
				'left': rect.left,
			});
		},
		
		changeTo:function(hash){
			
			if(hash.category === 'top'){
				setIndexMode();
			} else {
				setMainDocMode('contents/experimental/1604/e000019_crouton/main.html');
			}
		
		},
		
		changeOption:function(option){
			$('section').each(function(){
				console.log($(this).offset());
			});
			var target = $('article').find('[data-cjs-scene=' + option + ']').get(0);
			if(target){
				var t = $(target).offset().top + $('article').scrollTop() - DisplayUtil.getHeight() * 0.5;
				$('article').scrollTop(t);

			}
		
		},
		
		
	};
	
})();

	
