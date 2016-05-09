var ScrollHandler;

(function(){
	
	ScrollHandler = function(parent){
		
		var that = this;
		that._parent = parent;
		that._scrollListener = function(){};
		
		$(parent).scroll(function(){
			
			that._scrollListener();
			
		});
		
	};
	
	ScrollHandler.prototype = {
		
		setScrollListener : function(f){
			this._scrollListener = f;
		},
		
		triggerScroll : function(){
			this._scrollListener();
		},
		
		getElemRect :  function(elem){
			
			var top = $(elem).position().top;
			var height = $(elem).height() + parseFloat($(elem).css('marginTop')) + parseFloat($(elem).css('marginBottom'));
			var left = $(elem).position().left;
			var width = $(elem).width() + parseFloat($(elem).css('marginLeft')) + parseFloat($(elem).css('marginRight'));
			
			return {
				'top':top,
				'bottom':top + height,
				'height': height,
				'left':left,
				'right':left + width,
				'width':width,
			}
		},
		
		isCenter : function(rect){
			var center = $(this._parent).height() / 2;
			console.log(rect);
			return center >= rect.top && center <= rect.bottom;
			
		},
	
		isTopHidden : function(rect){
			
			return 0 > rect.top;
			
		},
	
		isBottomHidden : function(rect){
			return $(this._parent).height() < rect.bottom;
			
		},
	
		isOnScreen : function(rect){
			return 0 <= rect.top &&
			$(this._parent).height() >= rect.bottom;
			
		},
	
		isOffScreen : function(rect){
			
			return 0 > rect.bottom ||
			$(this._parent).height() < rect.top;
			
		},
		
		/* NT */
		getOnScreenState : function(elem, handlers){
			
			var rect = this.getElemRect(elem);
			
			var buffer = 0;
			
			if(this.isOffScreen(rect)){
				handlers.offScreen(elem);
			} else {
				if(this.isOnScreen(rect)){
					handlers.onScreen(elem);
				} else {
					if(this.isTopHidden(rect) && this.isBottomHidden(rect)){
						handlers.bothHidden(elem);
					} else if(this.isTopHidden(rect)){
						handlers.topHidden(elem);
					} else if(this.isBottomHidden(rect)){
						handlers.bottomHidden(elem);
					} else {
						handlers.error();
					}
				}
			}
			
		},
	
		getParent : function(){
			return this._parent;
		},
		
		/* deprecated 
		getScreenRect : function(elem){
			
			var scrollTop = $(this._parent).scrollTop();
			var scrollLeft = $(this._parent).scrollLeft();
			var elemTop = $(elem).offset().top;
			var elemLeft = $(elem).offset().left;
			
			return {
				'top' : elemTop,
				'bottom' : elemTop + $(elem).height(),
				'height' : $(elem).height(),
				'left' : elemLeft,
				'right' : elemLeft + $(elem).width(),
				'width' : $(elem).width()
			};
		},
		
		resetFrames : function(){
			
			console.log('reset all div animation frames');
			
			$(this._parent).find('.widget')
				.data('frame', 0);
			
		},
		*/

		getElemLists : function(){
			
			var onScreenList = [];
			var offScreenList = [];
			var hiddenList = [];
			
			var that = this;
			
			$(that._parent).find('section')
				.each(function(){
					that.getOnScreenState(this, {
						onScreen:function(elem){
							onScreenList.push(elem);
						},
						offScreen:function(elem){
							offScreenList.push(elem);
						},
						topHidden:function(elem){
							hiddenList.push(elem);
						},
						bottomHidden:function(elem){
							hiddenList.push(elem);
						},
						bothHidden:function(elem){
							hiddenList.push(elem);
						},
						error:function(elem){
							throw new Error('wrong onScreenState');
						},
					});
				});
			
			return {
				'onScreen': onScreenList,
				'offScreen': offScreenList,
				'hidden': hiddenList,
			}
			
		},

		getActiveSection : function(){
			
			var that = this;
			var active;
			$(that._parent).find('section')
			.each(function(){
				var rect = that.getElemRect(this);
				if(that.isCenter(rect)){
					active = this;
				};
			})
			
			return active;
			
		},

	};
	
})();
