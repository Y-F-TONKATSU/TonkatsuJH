var DomUtil;

(function(){
	
	DomUtil = function(parent){
		
		var that = this;
		that._parent = parent;
		that._scrollListener = function(){};
		
		$(parent).scroll(function(){
			
			that._scrollTop = $(this).scrollTop();
			that._scrollBottom = $(this).scrollTop() + displayHandler.getHeight();
			that._scrollListener(that.getElemLists());
			
		});
		
	};
	
	DomUtil.prototype = {
		
		setScrollListener : function(f){
			this._scrollListener = f;
		},
		
		getElemRect :  function(elem){
			return {
				'top':$(elem).position().top,
				'bottom':$(elem).position().top + $(elem).height(),
				'height': $(elem).height(),
				'left':$(elem).position().left,
				'right':$(elem).position().left + $(elem).width(),
				'width':$(elem).width(),
			}
		},
		
		isTopHidden : function(rect){
			
			return this._scrollTop > rect.top;
			
		},
	
		isBottomHidden : function(rect){
			
			return this._scrollBottom < rect.bottom;
			
		},
	
		isOnScreen : function(rect){
			
			return this._scrollTop <= rect.top &&
			this._scrollBottom >= rect.bottom;
			
		},
	
		isOffScreen : function(rect){
			
			return this._scrollTop > rect.bottom ||
			this._scrollBottom < rect.top;
			
		},
	
		getOnScreenState : function(elem, handler){
			
			var rect = this.getElemRect(elem);
			
			console.log(elem);
			
			var buffer = 0;
			
			if(this.isOffScreen(rect)){
				handler.offScreen(elem);
			} else {
				if(this.isOnScreen(rect)){
					handler.onScreen(elem);
				} else {
					if(this.isTopHidden(rect) && this.isBottomHidden(rect)){
						handler.bothHidden(elem);
					} else if(this.isTopHidden(rect)){
						handler.topHidden(elem);
					} else if(this.isBottomHidden(rect)){
						handler.bottomHidden(elem);
					} else {
						handler.error();
					}
				}
			}
			
		},
	
		getParent : function(){
			return this._parent;
		},
		
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

		getElemLists : function(){
			
			var onScreenList = [];
			var offScreenList = [];
			var hiddenList = [];
			
			var that = this;
			
			$(that._parent).find('.widget')
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

	};
	
})();
