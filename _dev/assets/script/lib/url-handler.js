var UrlHandler;

(function(){
	
	UrlHandler = function(hash){
		this._currentHash = undefined;
		this._chagePageListener = function(){};
		if(!_.isEmpty(hash)){
			this.setCurrentHash(hash);
		}
	};
	
	UrlHandler.prototype = {
		
		setChangePageListener:function(f){
			this._chagePageListener = f;
		},
		
		getCurrentHash:function(){
			return this._currentHash;
		},
		
		getCurrentHashString:function(){
			if(_.isEmpty(this.getCurrentHash())){return '';}
			return this.getCurrentCategory() + this.getCurrentId() ;
		},
		
		setCurrentHash:function(hash){
			
			if(!this.validateHash(hash)){
				console.log('Hash is Default');
				hash = Hash.getDefaultHashObject();
			}
		
			if(typeof hash === 'string'){
				hash = this.processHashString(hash);
			}
			this._currentHash = hash;
			
			return this._currentHash;
			
		},
		
		getCurrentCategory:function(){
			return this._currentHash.category;
		},
		
		getCurrentId:function(){
			return this._currentHash.id;
		},
	
		validateHash:function(hash){
			
			if(_.isEmpty(hash)){
				return false;
			}
			
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
	
		isSameHash:function(hash){
			
			if(_.isEmpty(this._currentHash)){
				return false;
			}
			
			var obj;
			
			if(this.validateHash(hash)){
				
				if(typeof hash === 'string'){
					obj = this.processHashString(hash);
				} else if (typeof hash === 'object'){
					obj = hash;
				}
			
			} else {
				
				obj = Hash.getDefaultHashObject();
				
			}
			
			return obj.category === this.getCurrentCategory() &&
				obj.id === this.getCurrentId();	
						
		},
		
		processHashString:function(hash){
		
			if(!this.validateHash(hash)){return null;}
			
			var idObj = Hash.getDefaultHashObject();
			
			$.each(Hash.CATEGORY_LIST, function(index, value){
				
				if(hash.indexOf(value) == 0){
					
					idObj.category = value;
					
					idObj.category = hash.slice(0, value.length);
					idObj.id = hash.slice(value.length , value.length + Hash.ID_FIGURES);
					
				}
				
			});
			
			return idObj;
			
		},
		
		changeToCurrentHashPage:function(){
			
			this._chagePageListener(this._currentHash);
			
		},
	
		changeTo:function(hash){
			console.log('Hash Changed from:' + this.getCurrentHashString() + ' to:' + hash);
			if(!this.isSameHash(hash)){
				this.setCurrentHash(hash);
				this.changeToCurrentHashPage();
			}
			
		}
		
	};
	
})();

	
