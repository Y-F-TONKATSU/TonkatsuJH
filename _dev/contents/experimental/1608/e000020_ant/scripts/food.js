var Food;

(function(){
	
	Food = function(ch, pos, amount){
		this._ch = ch;
		this._amount = amount;
		this._current = {
			'x': pos.x,
			'y': pos.y
		};
		this._spawning = 0;
	}
	
	Food.prototype = {
		
		'update':function(){

			this.draw(this._ch, this._current, this._amount);
			
		},
		
		'draw':function(ch, pos, amount){
			
			if(!this.isDead()){
				ch.setFillStyle(100, 255, 100, 0.6);
				ch.setStrokeStyle(0, 255, 0, 1);
				ch.drawShape(_.bind(function(ctx){
					ctx.arc(pos.x, pos.y, amount * 0.1 * this._spawning, 0, Math.PI * 2);
				}, this), true, true);
			}
			
			if(this._spawning < 1){
				ch.drawShape(_.bind(function(ctx){
					ch.setFillStyle(200, 255, 200, 0.3 * (1 - this._spawning));
					ctx.arc(pos.x, pos.y, amount * this._spawning, 0, Math.PI * 2);
				}, this), false, true);
				this._spawning += 0.1
			}
			
		},
		
		'isDead':function(){
			return this._amount <= 0;
		},
		
		'getPosition':function(){
			return this._current;	
		},
		
		'getAmount':function(){
			return this._amount;	
		},
		
		'eat':function(){
			this._amount -=0.02;
		}
		
	}

})();