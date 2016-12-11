var E000023 = {};

E000023.init = function(){
	
	createjs.Ticker.removeEventListener('tick', this._animator);
	this._stage = new createjs.Stage($('#contMainCanvas').get(0));
	
};

E000023.initMovers = function(doesBounce){

	this._movers = [
		//アルミ
		new Mover(this._stage, 
			27, //質量
			2.7, //密度
			new Vector(40,50), //初期位置
			new Vector(0, 0), //速度
			new Vector(0, 0) //加速度
		),
		//鉄
		new Mover(this._stage, 
			78.7, //質量
			7.87, //密度
			new Vector(190,50), //初期位置
			new Vector(0, 0), //速度
			new Vector(0, 0) //加速度
		),
		//金
		new Mover(this._stage, 
			193, //質量
			19.3, //密度
			new Vector(340,50), //初期位置
			new Vector(0, 0), //速度
			new Vector(0, 0) //加速度
		),
	];
	
	if(doesBounce){
		_.each(this._movers, function(mover){
			mover.setBounce(true);	
		});
	}
	
}

E000023.applyForce = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this.initMovers();
	
	_.each(this._movers, function(mover){
		mover.applyForce(new Vector(5, 20));	
	});
	
	this._animator = _.bind(function(e){
		
		_.each(this._movers, function(mover){
			mover.update();	
		});
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000023.gravitate = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this.initMovers();
	
	this._animator = _.bind(function(e){
		
		var g = 9.8 * e.delta * 0.001;
		
		_.each(this._movers, function(mover){
			var m = mover.getMass();
			mover.applyForce(new Vector(0, m * g));
			mover.update();	
		});
		
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000023.bounce = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this.initMovers(true);
	
	var noiseSeed = 0;
	
	this._animator = _.bind(function(e){
		
		noiseSeed += 0.01;
		var wind = 100 * (0.5 - noise(noiseSeed));
		
		var g = 9.8 * e.delta * 0.001;
		
		_.each(this._movers, function(mover){
			var m = mover.getMass();
			mover.applyForce(new Vector(wind, m * g));
			mover.update();	
		});
		
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000023.resistance = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this.initMovers(true);
	
	this._sky = new Resistance(this._stage, 0, 0, this._stage.canvas.width, this._stage.canvas.height * 0.85, 0.01, {r:200, g:200, b:230});
	this._sea = new Resistance(this._stage, 0, this._stage.canvas.height * 0.85, this._stage.canvas.width, this._stage.canvas.height * 0.15, 0.44, {r:180, g:180, b:250});
	
	this._resistances = [this._sky, this._sea];
	
	var noiseSeed = 0;
	
	this._animator = _.bind(function(e){
		
		this._stage.clear();
		
		_.each(this._resistances, function(resistance){
			resistance.draw();
		});
		
		noiseSeed += 0.01;
		var wind = 100 * (0.5 - noise(noiseSeed));
		
		var g = 9.8 * e.delta * 0.001;
		
		_.each(this._movers, _.bind(function(mover){
			
			_.each(this._resistances, function(resistance){
				if(mover.isInside(resistance.getLocation(), resistance.getSize())){
					mover.drag(resistance.getCoefficient());
				}
			});
			
			var m = mover.getMass();
			mover.applyForce(new Vector(wind, m * g));
			mover.update();
			
		}, this));
		
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000023.stop = function(){
	
	createjs.Ticker.removeEventListener('tick', this._animator);
	
};

E000023.clear = function(){
	if(this._movers){
		_.each(this._movers, function(mover){
			mover.clear();	
		});
	}
};

E000023.remove = function(){
	this.clear();
	this._movers = null;
};
