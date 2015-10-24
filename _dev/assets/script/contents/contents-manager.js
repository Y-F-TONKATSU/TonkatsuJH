var ContentsManager;

(function(){
	
	ContentsManager = function(){
		
	};
	
	var getWidgetsByCategory = function(category){
		
	}
			
	ContentsManager.prototype = {
		
		getWidget:function(hash){
			
			var el;
			
			if(Hash.HASH_REGEXP.test(hash)){
				el = $('.widget_link[data-id="#' + hash + '"]');
			}
			
			return el;
			
		},
	
		getCont:function(hash){
			
		}
		
	};
	
})();

	
