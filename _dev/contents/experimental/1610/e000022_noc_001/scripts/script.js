var E000022 = {};

E000022.init = function(){
	
	createjs.Ticker.removeEventListener('tick', this._animator);
	this._stage = new createjs.Stage($('#contMainCanvas').get(0));
	
};

E000022.uniformVelocity001 = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this._mover = new Mover(this._stage,
		new Vector(100, 100), //初期位置
		new Vector(5, 10), //速度
		new Vector(0, 0) //加速度
	);
	
	this._animator = _.bind(function(e){
		
		this._mover.update();
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000022.uniformAcceleration001 = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this._mover = new Mover(this._stage,
		new Vector(100, 100), //初期位置
		new Vector(5, 10), //速度
		new Vector(0, 0.1) //加速度
	);
	
	this._animator = _.bind(function(e){
		
		this._mover.update();
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000022.mouse001 = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this._mover = new Mover(this._stage,
		new Vector(0, 0), //初期位置
		new Vector(0, 0), //速度
		new Vector(0, 0) //加速度
	);
	
	this._animator = _.bind(function(e){
		
		this._mover.setVelocityTo(new Vector(this._stage.mouseX, this._stage.mouseY));
		this._mover.update();
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000022.mouse002 = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this._mover = new Mover(this._stage,
		new Vector(0, 0), //初期位置
		new Vector(0, 0), //速度
		new Vector(0, 0) //加速度
	);
	
	this._animator = _.bind(function(e){
		
		this._mover.setAccelerationTo(new Vector(this._stage.mouseX, this._stage.mouseY));
		this._mover.update();
		this._stage.update(e);
		
	}, this);
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000022.mouse003 = function(){
	
	if(!this._stage){
		this.init();
	}
	
	this._mover = new Mover(this._stage,
		new Vector(0, 0), //初期位置
		new Vector(0, 0), //速度
		new Vector(0, 0) //加速度
	);
	
	this._animator = _.bind(function(e){
		
		this._mover.setAccelerationTo(new Vector(this._stage.mouseX, this._stage.mouseY));
		this._mover.update();
		this._stage.update(e);
		
	}, this);
	
	this._mover.setBlurOn();
	
	createjs.Ticker.addEventListener('tick', this._animator);
	
};

E000022.stop = function(){
	
	createjs.Ticker.removeEventListener('tick', this._animator);
	
};

E000022.clear = function(){
	if(this._mover){
		this._mover.clear();
	}
};

E000022.remove = function(){
	if(this._mover){
		this._mover.clear();
	}
	this._mover = null;
};
