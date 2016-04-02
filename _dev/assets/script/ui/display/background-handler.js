var BackgroundHandler;

(function(){
	
	BackgroundHandler = function(fdiv, bdiv){
		
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
	
	BackgroundHandler.prototype = {
		
		PAGE_DATA_INDEX:{
			'id':'index',
		},
		
		setCanvasSize:function(w, h){
			this._frontCanvasHandler.setCanvasWidth(w);
			this._frontCanvasHandler.setCanvasHeight(h);
			this._backCanvasHandler.setCanvasWidth(w);
			this._backCanvasHandler.setCanvasHeight(h);
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
			this.setCanvasSize(w, h);
			
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

	
