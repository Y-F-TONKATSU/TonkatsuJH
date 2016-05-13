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

		_drawFrame:function(elem, animator){
			
			var frame = $(elem).data('frame');
			
			animator(this._frontCanvasHandler, this._backCanvasHandler, frame, elem);
			
		},
		
