var CanvasHandler;

(function(){
	
	
	CanvasHandler = function(canvas){
		
		this._canvas = {};
		this._context = {};
		this._frame = 0;
		
		if(!canvas){
			canvas = $('.canvas').get(0);
			if(!canvas){
				canvas = $('canvas').get(0);
			}
		}
		
		this.setCanvas(canvas);
		
	}
		
	CanvasHandler.prototype = {
		
		getCenterX:function(){
			return this.getCanvasWidth() / 2;
		},
	
		getCenterY:function(){
			return this.getCanvasHeight() / 2;
		},
	
		getCanvas:function(){
			return this._canvas;
		},
		
		setCanvas:function(val){
			this._canvas = val;
			this._context = this._canvas.getContext('2d');
		},
		
		getContext:function(){
			return this._context;
		},
		
		getCanvasWidth:function(){
			return parseInt($(this._canvas).attr('width'));
		},
		
		getCanvasHeight:function(){
			return parseInt($(this._canvas).attr('height'));
		},
		
		setCanvasWidth:function(v){
			return parseInt($(this._canvas).attr('width', v));
		},
		
		setCanvasHeight:function(v){
			return parseInt($(this._canvas).attr('height', v));
		},
		
		clear:function(){
			this._context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight())
		},
			
		rgbas:function(r, g, b, a){
			a = a.toString();
			if(a.length > 10){a = a.slice(0, 10);}
			return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
		},
			
		toImg:function(img){
			
			var url = this._canvas.toDataURL();
			$(img).attr('src', url);
	
		},
		
		getRatio:function(){
			return $(this._canvas).attr('height') / $(this._canvas).attr('width');
		},
		
		fitCanvas:function(){
			
			var ratio = DisplayUtil.getRatio();
			
			var w, h, t, l;
			
			if(DisplayUtil.isLandscape()){
				if(DisplayUtil.isOverRatio()){
					h = DisplayUtil.getHeight();
					w = h * DisplayUtil.getInvertedRatio();
					l = (DisplayUtil.getWidth() - w) * 0.5
					t = 0;					
				} else {
					w = DisplayUtil.getWidth();
					h = w * DisplayUtil.getRatio();
					t = (DisplayUtil.getHeight() - h) * 0.5
					l = 0;
				}
			} else {
				if(DisplayUtil.isOverRatio()){
					w = DisplayUtil.getWidth();
					h = w * DisplayUtil.getInvertedRatio();
					t = (DisplayUtil.getHeight() - h) * 0.5
					l = 0;
				} else {
					h = DisplayUtil.getHeight();
					w = h * DisplayUtil.getRatio();
					l = (DisplayUtil.getWidth() - w) * 0.5
					t = 0;					
				}
			}
			
			$(this._canvas).attr({
				'width': DisplayUtil.RATIO_X,
				'height': DisplayUtil.RATIO_Y
			}).css({
				'position':'fixed',
				'width': w,
				'height': h,
				'top':t,
				'left':l
			});
	
		},
	
		
		saveFrame:function(){
			
			var url = this._canvas.toDataURL();
			var dl = $('<a class="downloader" download="frame' + this._frame + '"><p class="anchor">a</p></a>')
			.attr('href', url)
			.appendTo('body');
			
			$('.anchor').trigger('click');
			
			$(dl).remove();
			
			this._frame++;
	
		},
		
		resetFrame:function(){
			
			this._frame = 0;
	
		}
		
	}
	
})();