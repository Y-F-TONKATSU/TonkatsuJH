(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.bg_vivid = function() {
	this.initialize(img.bg_vivid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.ex000023 = function() {
	this.initialize(img.ex000023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("Eghcgi7MBC5AAAQBkAAAABkMAAABCvQAABkhkAAMhC5AAAQhkAAAAhkMAAAhCvQAAhkBkAAg");
	this.shape.setTransform(0,223.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-1,450.1,449.1);


(lib.WidgetImageEx000023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ex000023();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Ex001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Ex001:0});

	// レイヤー 4
	this.instance = new lib.bg_vivid();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.BgFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-384,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,0,768,480);


(lib.Frame_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Frame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,218.6,0.058,0.058,-90,0,0,0,223.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:223.6,scaleX:1,scaleY:1,rotation:0,y:223.6},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,204.6,28,28);


(lib.Ex003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Ex001":0});

	// レイヤー 2
	this.instance = new lib.WidgetImageEx000023("single",0);
	this.instance.parent = this;
	this.instance.setTransform(577,284.5,0.093,0.093,90,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0,x:550},46,cjs.Ease.get(1)).wait(1));

	// レイヤー 4
	this.instance_1 = new lib.bg_vivid();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Ex002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Ex001":0});

	// レイヤー 5
	this.instance = new lib.BgFrame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(384,240,1,1,0,0,0,0,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},45).to({_off:true},1).wait(1));

	// レイヤー 4
	this.instance_1 = new lib.bg_vivid();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.CanvasPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Main_start:0,Main_load:18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(68));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_vivid();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ex003
	this.ex003 = new lib.Ex003();
	this.ex003.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex003).wait(1));

	// ex002
	this.ex002 = new lib.Ex002();
	this.ex002.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex002).wait(1));

	// ex001
	this.ex001 = new lib.Ex001();
	this.ex001.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex001).wait(1));

	// canvasPlay
	this.canvasPlay = new lib.CanvasPlay();
	this.canvasPlay.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.canvasPlay).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


// stage content:
(lib.noc002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// root
	this.root = new lib.Root();
	this.root.parent = this;
	this.root.setTransform(384,240,1,1,0,0,0,384,240);

	this.timeline.addTween(cjs.Tween.get(this.root).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384,240,768,480);
// library properties:
lib.properties = {
	width: 768,
	height: 480,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bg_vivid.jpg", id:"bg_vivid"},
		{src:"images/ex000023.jpg", id:"ex000023"}
	],
	preloads: []
};




})(gCjsLib = gCjsLib||{}, gCjsImages = gCjsImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var gCjsLib, gCjsImages, createjs, ss, AdobeAn;
var Vector;

(function(){
	
	Vector = function(x, y){
			
		this.x = x;
		this.y = y;
		
	};
	
	//static funcs
	_.each(['add', 'sub', 'normalize'], function(method){
		Vector[method] = function(v1, v2){
			var v3 = v1.clone();
			v3[method](v2);
			return v3;
		};
	});
	
	var getVectorFromArgs = function(args){
		if(args.length > 1){
			return new Vector(args[0], args[1])
		} else {
			return args[0];
		}
	};
	
	Vector.prototype = {
		
		'clone':function(){
			return new Vector(this.x, this.y);
		},
		
		'add':function(){
			var v = getVectorFromArgs(arguments);
			this.x += v.x;
			this.y += v.y;
			return this;
		},
			
		'sub':function(v){
			var v = getVectorFromArgs(arguments);
			this.x -= v.x;
			this.y -= v.y;
			return this;
		},
			
		'mult':function(v){
			this.x *= v;
			this.y *= v;
			return this;
		},
			
		'div':function(v){
			this.x /= v;
			this.y /= v;
			return this;
		},
			
		'mag':function(){
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		},
		
		'normalize':function(v){
			if(this.mag() === 0){
				return this;
			}
			this.div(this.mag());
			return this;
		},
		
		'dist':function(v){
			return Vector.sub(this, v).mag();
		},
			
		'dir':function(v){
			var v2 = Vector.sub(v, this);
			v2.normalize();
			return v2;
		}
			
	};
	
})();
var Mover;

(function(){
	
	Mover = function(stage, mass, density, loaction, velocity, acceleration, bounce){
		
		this._location = loaction || new Vector(0, 0);
		this._velocity = velocity || new Vector(1, 1);
		this._acceleration = acceleration || new Vector(0, 0);
		this._mass = mass || 10;
		this._density = density || 10;
		
		this._blur = false;
		this._blurs = [];
		
		//init cjs objects
		this._graphics = new createjs.Graphics();
		this._shape = new createjs.Shape(this._graphics);
		this._stage = stage;
		this._stage.addChild(this._shape);
		
		this._stageSize = new Vector(this._stage.canvas.width, this._stage.canvas.height);
		
		this._bounce = bounce || false;
		
	};
	
	Mover.prototype = {
		
		'setBounce':function(v){
			
			this._bounce = v;
			
		},
		
		'clear':function(){
			
			this._graphics.clear();
			this._stage.removeAllChildren();
			this._stage.update();
			
		},
		
		'isUnder':function(axis){
			return this._location[axis] - this.getRadius() < 0;
		},
		
		'isOver':function(axis){
			return this._location[axis] + this.getRadius() > this._stageSize[axis];
		},
		
		'isInside':function(location, size){
			return (this._location.x >= location.x &&
				   this._location.x <= location.x + size.x) &&
				(this._location.y >= location.y &&
				 this._location.y <= location.y + size.y);
		},
		
		'getMass':function(){
			
			return this._mass;
			
		},
		
		'getRadius':function(){
			
			return this._mass / this._density;
			
		},
		
		'setVelocityTo':function(v){
			
			this._velocity = this._location.dir(v).mult(this._location.dist(v) * 0.1);
			
		},
		
		'setAccelerationTo':function(v){
			
			this._velocity.mult(0.95);
			this._acceleration = this._location.dir(v).mult(this._location.dist(v) * 0.01);
			
		},
		
		'update':function(){
			
			this._acceleration.div(this._mass);
			
			this._velocity.add(this._acceleration);
			if(this._blur){this.setBlurs();}
			this._location.add(this._velocity);
						
			if(this._bounce){
				_.each(['x', 'y'], _.bind(function(axis){
					if(this.isOver(axis)){
						this._velocity[axis] *= -1;
					}
					if(this.isUnder(axis)){
						this._velocity[axis] *= -1;

					}
				}, this));
			}
			
			this.draw();
			
			this.clearForce();
			
		},
		
		'setBlurs':function(){
			
			var numBlurs = Math.floor(this._velocity.mag() * 0.5);
			this._blurs = _.map(_.range(numBlurs), _.bind(function(current){
				var position = Math.pow((current) / numBlurs, 2);
				var alpha = position * 0.4;
				return {
					'location': new Vector(
						this._location.x + this._velocity.x * position,
						this._location.y + this._velocity.y * position
					),
					'alpha': alpha
				};
			}, this));
			
		},
		
		'drawBlurs':function(){
			
			_.each(this._blurs, _.bind(function(blur){
				this._graphics.beginFill(createjs.Graphics.getRGB(255, 0, 0, blur.alpha)).
				dc(blur.location.x, blur.location.y, this.getRadius())
				.endFill();
			}, this));
			
		},
		
		'setBlurOn':function(){
			this._blur = true;
		},
		
		'getResidueLocation':function(){
			return Vector.sub(this._location, new Vector(
				Math.floor(this._location.x / this._stageSize.x) * this._stageSize.x,
				Math.floor(this._location.y / this._stageSize.y) * this._stageSize.y
			));
		},
		
		'getBounceLocation':function(){
			
			var location = this._location.clone();
			
			_.each(['x', 'y'], _.bind(function(axis){
				if(this.isOver(axis)){
					location[axis] = this._stageSize[axis] - this.getRadius();

				}
				if(this.isUnder(axis)){
					location[axis] = this.getRadius();
				}
			}, this));
			
			return location;
			
		},
		
		'draw':function(){
			
			var location;
			
			if(this._bounce){
				location = this.getBounceLocation();
			} else {
				//画面外に出た場合、反対側から出てくる
				location = this.getResidueLocation();
			}
			
			this._graphics.clear();
			
			if(this._blurs && this._blurs.length > 1){this.drawBlurs()}
			
			this._graphics.beginFill(createjs.Graphics.getRGB(255, 0, 0)).
			dc(location.x, location.y, this.getRadius())
			.endFill();
		},
		
		'applyForce':function(force){
			this._acceleration.add(force);
		},
			
		'drag':function(coefficient){
			var speed = this._velocity.mag();
			var dragMag = (Math.pow(speed, 2)) * coefficient;
			var dir = this._velocity.clone().normalize();
			var force = dir.mult(-1).mult(dragMag);
			this.applyForce(force);
		},
			
		'clearForce':function(force){
			this._acceleration.mult(0);
		}
			
	};
	
})();
var Resistance;

(function(){
	
	Resistance = function(stage, x, y, w, h, coefficient, color){
		
		//init cjs objects
		this._stage = stage;
		this._graphics = new createjs.Graphics();
		this._shape = new createjs.Shape(this._graphics);
		this._stage = stage;
		this._stage.addChildAt(this._shape, 0);
		
		this._location = new Vector(x, y);
		this._size = new Vector(w, h);
		this._coefficient = coefficient;
		this._color = color;
		
	};
	
	Resistance.prototype = {
		
		'getLocation':function(){
			return this._location;	
		},
		
		'getSize':function(){
			return this._size;	
		},
		
		'getCoefficient':function(){
			return this._coefficient;	
		},
		
		'draw':function(){
			
			this._graphics.beginFill(createjs.Graphics.getRGB(this._color.r, this._color.g, this._color.b)).
			dr(this._location.x, this._location.y, this._size.x, this._size.y)
			.endFill();
			
		},
		
	};
	
})();
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
