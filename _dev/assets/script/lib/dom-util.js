var DomUtil;

(function(){
	
	DomUtil = function(parent){
		
		var that = this;
		that._parent = parent;
		that._scrollListener = function(){};
		
		$(parent).scroll(function(){
			
			that._scrollListener();
			
		});
		
	};
	
	DomUtil.prototype = {
		
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
			var width = $(elem).width() + $(elem).css('marginLeft') + $(elem).css('marginRight');
			
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
			return center >= rect.top;
			
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
	
		getOnScreenState : function(elem, handler){
			
			var rect = this.getElemRect(elem);
			
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

		getActiveElem : function(){
			
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
