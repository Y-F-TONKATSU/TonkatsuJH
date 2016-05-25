var UrlHandler;

(function(){
	
	UrlHandler = function(hash){
		this._currentHash = undefined;
		this._chagePageListeners = [];
		this._chageOptionListeners = [];
		if(!_.isEmpty(hash)){
			this.setCurrentHash(hash);
		}
	};
	
	UrlHandler.prototype = {
		
		clearChangePageListeners:function(){
			this._chagePageListeners = [];
		},
		
		addChangePageListener:function(f){
			this._chagePageListeners.push(f);
		},
		
		clearChangeOptionListener:function(){
			this._chageOptionListeners = [];
		},
		
		addChangeOptionListener:function(f){
			this._chageOptionListeners.push(f);
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
	
		getCurrentOption:function(){
			return this._currentHash.option;
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
					Hash.ID_REGEXP.test(hash.id) &&
					(_.isEmpty(hash.option) || Hash.OPTION_REGEXP.test(hash.option))
				);
			} else {
				return false;
			}
			
		},
	
		isSameHash:function(hash, predicate){
			
			if(!this._currentHash){
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
				
				console.log('URL Validation Failed');
				obj = Hash.getDefaultHashObject();
				
			}
			
			return _.bind(predicate, this)(obj);	
						
		},
		
		isSameCont:function(hash){
			return this.isSameHash(hash, function(obj){
				return obj.category === this.getCurrentCategory() &&
				obj.id === this.getCurrentId();				
			});
		},
		
		isSameOption:function(hash){
			return this.isSameHash(hash, function(obj){
				return 	obj.option === this.getCurrentOption();
			});
		},
		
		processHashString:function(hash){
		
			if(!this.validateHash(hash)){return null;}
			
			var idObj = Hash.getDefaultHashObject();
			
			$.each(Hash.CATEGORY_LIST, function(index, value){
				
				if(hash.indexOf(value) == 0){
					
					idObj.category = value;
					
					idObj.category = hash.slice(0, value.length);
					idObj.id = hash.slice(value.length , value.length + Hash.ID_FIGURES);
					idObj.option = hash.slice(value.length + Hash.ID_FIGURES);
					
				}
				
			});
			
			return idObj;
			
		},
		
		changeToCurrentHashPage:function(){
			_.each(this._chagePageListeners, _.bind(function(listener){
				listener(this._currentHash);
			}, this));
			
		},
	
		changeToCurrentOption:function(){
			
			_.each(this._chageOptionListeners, _.bind(function(listener){
				listener(this.getCurrentOption().slice(1));
			}, this));
			
		},
	
		changeTo:function(hash){
			console.log('Hash Changed from:' + this.getCurrentHashString() + ' to:' + hash);
			if(!this.isSameCont(hash)){
				this.setCurrentHash(hash);
				this.changeToCurrentHashPage();
			} else {
				console.log('same hash');
				this.setCurrentHash(hash);
				this.changeToCurrentOption();
			}
			
		}
		
	};
	
})();

	
