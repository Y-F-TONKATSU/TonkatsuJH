var Hash;

(function(){
	
	var catList = ['top', 'writing', 'kinema', 'image', 'experimental', 'apps'];
	
	var modePattern = '(';
	$.each(catList, function(index, value){
		modePattern += value;
		if(index !== catList.length -1){
			modePattern += '|';
		} else {
			modePattern += ')';
		}
	});
	
	var idFigures = 6;
	var MAX_OPTION_LENGTH = 21;
	
	Hash = {
		
		MAX_HASH_LENGTH:40,
		
		CATEGORY_LIST:catList,
		HASH_REGEXP:new RegExp('^' + modePattern + '\\d{' + idFigures + '}(_\\w{0,' + MAX_OPTION_LENGTH + '})?$'),
		CATEGORY_REGEXP:new RegExp('^' + modePattern + '$'),
		ID_REGEXP:new RegExp('^\\d{' + idFigures + '}$'),
		OPTION_REGEXP:new RegExp('^(_\\w{0,' + MAX_OPTION_LENGTH + '})?$'),
		
		ID_FIGURES:idFigures,
		
		getDefaultHashObject:function(){
			return {
				"category":"top",
				"id":"000000",
				"option":"",
			};
		}
		
	};
	
	
})();