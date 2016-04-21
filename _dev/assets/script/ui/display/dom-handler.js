var DomHandler;

(function(){
	
	DomHandler = function(){
		
	};
	
	
	var loadDoc = function(url){
		
		$.ajax({
			'url': url,
			'dataType':'html',
		}).done(function(e) {
			var newDoc = $('<div></div>');
			newDoc.html(e);
			$(newDoc).find('section').css({
				'position':'relative',
				'height': displayHandler.getHeight(),
				'padding':'20%'
			});
			console.log('New Doc Loaded by Ajax');
			$('#mainDoc').empty().html($(newDoc).find('article').html());
			
			bgHandler.setCjs(cjsLib, cjsImages);
			
		});
		
	}
	
	DomHandler.prototype = {
		
		setMainDocMode:function(url){
			
			$('#indexContainer').hide();
			$('#mainDoc').show();
			
			loadDoc(url);
			
		},
		
		setIndexMode:function(){
			
			$('#indexContainer').show();
			$('#mainDoc').hide();
			
			bgHandler.setPage();
		},
		
	};
	
})();

	
