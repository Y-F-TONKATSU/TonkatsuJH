var ContentsUtil = {
		
	getWidget:function(hash){
		
		if(_.isObject(hash)){
			var hash = hash.category + hash.id;
		}
		
		var el;

		if(Hash.HASH_REGEXP.test(hash)){
			el = $('.widget_link[href="#!' + hash + '"]').parent();
		}
		
		return el;
		
	},

	getTitle:function(hash){
		
		return $(ContentsUtil.getWidget(hash)).find('.widget_title').text();
		
	},

	getUrl:function(hash){
		
		return $(ContentsUtil.getWidget(hash)).attr('data-url');
			
	},
	
	getRandomAphorism:function(){
		var i = Math.floor(Math.random() * $('.aphorism').length);
		return $('.aphorism').get(i);
	},
		
};

	
