$(function(){
	
	var ch = new CanvasHandler($('canvas').get(0));
	var ctx = ch.getContext();
	
	var Walker = function(x, y){
		
		this._position = {
			'x': x,
			'y': y
		};
		this._dest = {
			'x': x,
			'y': y
		};
	}
	
	Walker.prototype = {	
		
		setDest:function(){
			this._dest.x = this._position.x + Math.random() * 19.8 - 10;	
			this._dest.y = this._position.y + Math.random() * 19.8 - 10;	
		},
		
		update:function(){
			
			this.setDest();
			
			ctx.lineWidth = Math.random() * 3;
			if(Math.random() * 2 > 1){
				ctx.strokeStyle = '#222222';
			} else {
				ctx.strokeStyle = '#ffffff';
			}
			
			ctx.beginPath();
			ctx.moveTo(this._position.x, this._position.y);
			ctx.lineTo(this._dest.x, this._dest.y);
			this._position.x = this._dest.x;
			this._position.y = this._dest.y;
			ctx.stroke();
				
		},
	}
	
	var walkers = [];
	_.times(100, function(){
		walkers.push(new Walker(ch.getCenterX(), ch.getCenterY()));
	});
	
	var draw = function(){
		_.each(walkers, function(walker){
			walker.update();
		});
		requestAnimationFrame(draw);
	}
	
	requestAnimationFrame(draw);
	
});

