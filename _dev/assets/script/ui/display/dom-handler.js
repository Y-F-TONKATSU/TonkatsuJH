var DomHandler;

(function(){
	
	DomHandler = function(){
		
	};
	
	
	var loadDoc = function(url){
		
		$.ajax({
			'url': url,
			'context': $('#mainDoc_cont'),
			'dataType':'html',
		}).done(function(e) {
			var newDoc = $('<div></div>');
			newDoc.html(e);
			console.log(newDoc);
			$('#mainDoc_cont').empty().html($(newDoc).find('article'));
		});
		
	}
	
	DomHandler.prototype = {
		
		setMainDocMode:function(url){
			
			$('.sidebar').hide();
			$('#indexContainer').hide();
			$('#mainDocContainer').show();
			
			loadDoc(url);
			
		},
		
		setIndexMode:function(){
			
			$('.sidebar').hide();
			$('#indexContainer').show();
			$('#mainDocContainer').hide();
			
			//bgHandler.startAnimation();
		},
		
	};
	
})();

	
