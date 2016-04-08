var BackgroundHandler;

(function(){
	
	BackgroundHandler = function(fdiv, bdiv){
		
		this._frontCanvasHandler = _getNewCanvasHandler(fdiv);
		this._backCanvasHandler = _getNewCanvasHandler(bdiv);
	};
	
	var _getNewCanvasHandler = function(div){
		
		var canvas = $('<canvas></canvas>').get(0);
		$(div).empty();
		$(div).append(canvas);
		
		var ch = new CanvasHandler(canvas);
		ch.setCanvasWidth($(div).width());
		ch.setCanvasHeight($(div).height());
		
		return ch;
	}
	
	var _nextFrame = function(elem, totalFrames){
		$(elem).data('frame', $(elem).data('frame') + (1 / totalFrames));
	}
	
	var _prevFrame = function(elem, totalFrames){
		$(elem).data('frame', $(elem).data('frame') - (1 / totalFrames));
	}
	
	var _isAtStart = function(elem){
		return $(elem).data('frame') <= 0;
	}
	
	var _isAtEnd = function(elem){
		return $(elem).data('frame') >= 1;
	}
	
	BackgroundHandler.prototype = {
		
		PAGE_DATA_INDEX:{
			'id':'index',
		},
		
		_animationList:[],
		
		_drawFrame:function(elem, animator){
			
			var frame = $(elem).data('frame');
			
			animator(this._frontCanvasHandler, this._backCanvasHandler, frame, elem);
			
		},
		
		setCanvasSize:function(w, h){
			this._frontCanvasHandler.setCanvasWidth(w);
			this._frontCanvasHandler.setCanvasHeight(h);
			this._backCanvasHandler.setCanvasWidth(w);
			this._backCanvasHandler.setCanvasHeight(h);
		},
		
		fitCanvasSize:function(){
			this._frontCanvasHandler.fitCanvas();
			this._backCanvasHandler.fitCanvas();
		},
		
		getFrontCanvasHandler:function(){
			return this._frontCanvasHandler;
		},
		
		getBackCanvasHandler:function(){
			return this._backCanvasHandler;
		},
		
		setFrontCanvasHandler:function(v){
			this._frontCanvasHandler = v;
		},
		
		setBackCanvasHandler:function(v){
			this._backCanvasHandler = v;
		},
		
		startAnimationLoop:function(){
			
			console.log('Start Animation Loop');

			var that = this;
			
			domUtil.setScrollListener(function(lists){
			
				console.log(lists);
				
				that._animationList = [];
				
				_.map(lists.onScreen, function(elem){
					that._animationList.push({
						'elem': elem,
						'totalFrames': 1000,
						'animator':DRAW_REC_ANIMATOR,
						'stepper': _nextFrame,
						'ender': _isAtEnd,
					})
				});
				
				_.map(lists.hidden, function(elem){
					that._animationList.push({
						'elem': elem,
						'totalFrames': 1000,
						'animator':DRAW_REC_ANIMATOR,
						'stepper': _prevFrame,
						'ender': _isAtStart,
					})
				});
				
				_.map(lists.offScreen, function(elem){
					$(elem).data('frame', 0);
				});
				
			});
			
			var animationLoop = function(){
				
				that._frontCanvasHandler.clear();
				that._backCanvasHandler.clear();
				
				_.map(that._animationList, function(obj){
					var elem = obj.elem;
				
					if(!obj.ender(elem)){
						obj.stepper(elem, obj.totalFrames);
					}
					that._drawFrame(elem, obj.animator);
				})
				
				window.requestAnimationFrame(animationLoop);
				
			};
		
			window.requestAnimationFrame(animationLoop);
			
		},
		
		setPage:function(w, h){
			
			console.log('Setting Page..');
			
			domUtil.resetFrames();
			
			this._animationList = [];
			
			domUtil.triggerScroll();
						
						
		},
		
	};
	
})();

	
