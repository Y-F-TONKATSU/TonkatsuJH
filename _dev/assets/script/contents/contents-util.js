var ContentsUtil = {
		
	getWidget:function(hash){
		
		if(_.isObject(hash)){
			var hash = hash.category + hash.id;
		}
		
		var el;

		if(Hash.HASH_REGEXP.test(hash)){
			el = $('.widget_link[href="#' + hash + '"]').parent();
		}
		
		return el;
		
	},

	getContUrl:function(hash){
		return $(ContentsUtil.getWidget(hash)).attr('data-url');
			
	}
		
};

	
