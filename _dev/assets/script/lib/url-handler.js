var UrlHandler;

(function(){
	
	UrlHandler = function(hash){
		this._currentHash = Hash.DEAFAULT_HASH_OBJ;
		this.setHash(hash);
	};
	
	UrlHandler.prototype = {
		
		validateHash:function(hash){
			
			if(typeof hash === 'string'){
				return (
					hash.length <= Hash.MAX_HASH_LENGTH &&
					Hash.HASH_REGEXP.test(hash)
				);
			} else if (typeof hash === 'object'){
				return (
					Hash.CATEGORY_REGEXP.test(hash.category) &&
					Hash.ID_REGEXP.test(hash.id)
				);
			} else {
				return false;
			}
			
		},
	
		processHashString:function(hash){
		
			if(!this.validateHash(hash)){return null;}
			
			var idObj = Hash.DEAFAULT_HASH_OBJ;
			
			$.each(Hash.CATEGORY_LIST, function(index, value){
				
				if(hash.indexOf(value) == 0){
					
					idObj.category = value;
					
					idObj.category = hash.slice(0, value.length);
					idObj.id = hash.slice(value.length , value.length + Hash.ID_FIGURES);
					
				}
				
			});
			
			return idObj;
			
		},
		
		setHash:function(hash){
			
			if(!this.validateHash(hash)){return null;}
			
			if(typeof hash === 'string'){
				hash = this.processHashString(hash);
			}
			this._currentHash = hash;
			
			return this._currentHash;
			
		},
		
		getCurrentHash:function(){
			return this._currentHash;
		},
		
		getCurrentCategory:function(){
			return this._currentHash.category;
		},
		
		getCurrentId:function(){
			return this._currentHash.id;
		},
	
		changePage:function(){
			
		},
	
		changeTo:function(hash){
			
			if(this.setHash(hash)){
				this.changePage();
			}
			
		}
		
	};
	
})();

	
