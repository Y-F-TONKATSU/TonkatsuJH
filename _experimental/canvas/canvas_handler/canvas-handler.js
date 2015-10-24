var CanvasHandler;

(function(){
	
	var _canvas, _context;
	
	CanvasHandler = function(canvas){
		
		if(!canvas){
			canvas = $('.canvas').get(0);
			if(!canvas){
				canvas = $('canvas').get(0);
			}
		}
		
		this.setCanvas(canvas);
		
	}
	
	CanvasHandler.prototype.getCenterX = function(){
		return this.getCanvasWidth() / 2;
	};
	
	CanvasHandler.prototype.getCenterY = function(){
		return this.getCanvasHeight() / 2;
	};
	
	CanvasHandler.prototype.getCanvas = function(){
		return _canvas;
	}
	
	CanvasHandler.prototype.setCanvas = function(val){
		_canvas = val;
		_context = _canvas.getContext('2d');
	}
	
	CanvasHandler.prototype.getContext = function(){
		return _context;
	}
	
	CanvasHandler.prototype.getCanvasWidth = function(){
		return parseInt($(_canvas).attr('width'));
	}
	
	CanvasHandler.prototype.getCanvasHeight = function(){
		return parseInt($(_canvas).attr('height'));
	}
	
	CanvasHandler.prototype.clear = function(){
		_context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight())
	}
		
	CanvasHandler.prototype.toImg = function(img){
		
		var url = _canvas.toDataURL();
		$(img).attr('src', url);

	}
	
	var _frame = 0;
	
	CanvasHandler.prototype.saveFrame = function(){
		
		var url = _canvas.toDataURL();
		var dl = $('<a class="downloader" download="frame' + _frame + '"><p class="anchor">a</p></a>')
		.attr('href', url)
		.appendTo('body');
		
		$('.anchor').trigger('click');
		
		$(dl).remove();
		
		_frame++;

	}
	
})();