var BackgroundManager;

(function(){
	
	BackgroundManager = function(fdiv, bdiv){
		
		this._frontCanvasHandler = getNewCanvasHandler(fdiv);
		this._backCanvasHandler = getNewCanvasHandler(bdiv);
			
	};
	
	var getNewCanvasHandler = function(div){
		
		var canvas = $('<canvas></canvas>').get(0);
		$(div).empty();
		$(div).append(canvas);
		var ch = new CanvasHandler(canvas);
		ch.setCanvasWidth($(div).width());
		ch.setCanvasHeight($(div).height());
		
		return ch;
	}
	
	BackgroundManager.prototype = {
		
		PAGE_DATA_INDEX:{
			'id':'index',
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
		
		setPage:function(w, h){
			console.log('Setting Page..');
			var divs = $('.widget');
			var that = this;
			_.each(divs, function(div){
				that.startAnimation(div, DRAW_REC_ANIMATOR, $('.main').position().left, $('.main').position().top);
			});
		},
		
		startAnimation:function(div, animator, baseLeft, baseTop){
			var frame = 0;
			var that = this;
			var timer = setInterval(function(){
				var r = animator(that._frontCanvasHandler, that._backCanvasHandler, div, frame, baseLeft, baseTop);
				frame++;
				if(!r){clearInterval(timer)}
			}, 10);
		}
		
	};
	
})();

	
