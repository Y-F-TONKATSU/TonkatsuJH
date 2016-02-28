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
		
		fitCanvas:function(){
			
			$(this._canvas).attr({
				'width': $(window).innerWidth(),
				'height': $(window).innerHeight()
			}).css('position', 'fixed');
	
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