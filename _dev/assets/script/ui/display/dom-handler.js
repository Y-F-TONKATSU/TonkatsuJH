var DomHandler;

(function(){
	
	DomHandler = function(){
		
	};
	
	
	var loadDoc = function(url){
		
		var h = displayHandler.getHeight();
		
		$.ajax({
			'url': url,
			'dataType':'html',
		}).done(function(result) {
			
			var newDoc = $('<div></div>');
			newDoc.html(result);
			
			$(newDoc).find('section').css({
				'position':'relative',
				'marginBottom': h * 0.4,
				'marginLeft':'20%',
				'backgroundColor':'yellow',
				'width':'30%',
				'box-shadow': '2px 2px 12px 4px #888888',
				'padding':'2%',
				'transform': 'rotate(2deg)',
			}).first()
			.css({
				'marginTop': h * 0.4
			}).end().last()
			.css({
				'marginBottom': h * 0.6,
			});
			
			console.log('New Doc Loaded by Ajax');
			
			$('#mainDoc').empty()
				.html($(newDoc).find('article').html());
			
			bgHandler.setCjs(cjsLib, cjsImages);
			
		});
		
	}
	
	var setMainDocMode = function(url){
			
		$('#indexContainer').hide();
		$('#mainDoc').show();
		
		loadDoc(url);
			
	}
	
	var setIndexMode = function(){
		
		$('#indexContainer').show();
		$('#mainDoc').hide();
		
		bgHandler.setPage();
			
	}
	
	
	DomHandler.prototype = {
		
		
		
		changeTo:function(hash){
			
			if(hash.category === 'top'){
				setIndexMode();
			} else {
				setMainDocMode('contents/experimental/1604/e000019_crouton/main.html');
			}
		
		},
		
		
	};
	
})();

	
