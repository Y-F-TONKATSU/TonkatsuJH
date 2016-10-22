(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

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
		{src:"images/bg_noframe.jpg", id:"bg_noframe"},
		{src:"images/bg_vivid.jpg", id:"bg_vivid"}
	]
};



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
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
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


(lib.bg_noframe = function() {
	this.initialize(img.bg_noframe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.bg_vivid = function() {
	this.initialize(img.bg_vivid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.Frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("Eghbgi6MBC3AAAQBkAAAABkMAAABCtQAABkhkAAMhC3AAAQhkAAAAhkMAAAhCtQAAhkBkAAg");
	this.shape.setTransform(0,223.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-1,450.1,449.1);


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


(lib.UniformVelocity001 = function(mode,startPosition,loop) {
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


(lib.UniformAcceleration001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

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
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Mouse003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

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
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Mouse002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

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
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Mouse001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

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
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ex002
	this.ex002 = new lib.Ex002();
	this.ex002.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex002).wait(1));

	// ex001
	this.ex001 = new lib.Ex001();
	this.ex001.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex001).wait(1));

	// mouse003
	this.mouse003 = new lib.Mouse003();
	this.mouse003.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mouse003).wait(1));

	// mouse002
	this.mouse002 = new lib.Mouse002();
	this.mouse002.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mouse002).wait(1));

	// mouse001
	this.mouse001 = new lib.Mouse001();
	this.mouse001.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mouse001).wait(1));

	// uniformAcceleration001
	this.uniformAcceleration001 = new lib.UniformAcceleration001();
	this.uniformAcceleration001.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.uniformAcceleration001).wait(1));

	// uniformVelocity001
	this.uniformVelocity001 = new lib.UniformVelocity001();
	this.uniformVelocity001.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.uniformVelocity001).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


// stage content:
(lib.noc001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// root
	this.root = new lib.Root();
	this.root.parent = this;
	this.root.setTransform(384,240,1,1,0,0,0,384,240);

	this.timeline.addTween(cjs.Tween.get(this.root).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384,240,768,480);

})(gCjsLib = gCjsLib||{}, gCjsImages = gCjsImages||{}, createjs = createjs||{}, ss = ss||{});
var gCjsLib, gCjsImages, createjs, ss;
var Vector;

(function(){
	
	Vector = function(x, y){
			
		this.x = x;
		this.y = y;
		
	};
	
	//static funcs
	_.each(['add', 'sub', 'nomalize'], function(method){
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
		
		'nomalize':function(v){
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
			v2.nomalize();
			return v2;
		}
			
	};
	
})();
var Mover;

(function(){
	
	Mover = function(stage, loaction, velocity, acceleration){
		
		this._location = loaction || new Vector(0, 0);
		this._velocity = velocity || new Vector(1, 1);
		this._acceleration = acceleration || new Vector(0, 0);
		this._radius = 30;
		
		this._blur = false;
		this._blurs = [];
		
		//init cjs objects
		this._graphics = new createjs.Graphics();
		this._shape = new createjs.Shape(this._graphics);
		this._stage = stage;
		this._stage.addChild(this._shape);
		
		this._stageSize = new Vector(this._stage.canvas.width, this._stage.canvas.height);
			
	};
	
	Mover.prototype = {
		
		'clear':function(){
			
			this._graphics.clear();
			this._stage.removeAllChildren();
			this._stage.update();
			
		},
		
		'setVelocityTo':function(v){
			
			this._velocity = this._location.dir(v).mult(this._location.dist(v) * 0.1);
			
		},
		
		'setAccelerationTo':function(v){
			
			this._velocity.mult(0.95);
			this._acceleration = this._location.dir(v).mult(this._location.dist(v) * 0.01);
			
		},
		
		'update':function(){
			
			this._velocity.add(this._acceleration);
			if(this._blur){this.setBlurs();}
			this._location.add(this._velocity);
						
			this.draw();
			
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
				dc(blur.location.x, blur.location.y, this._radius)
				.endFill();
			}, this));
			
		},
		
		'setBlurOn':function(){
			this._blur = true;
		},
		
		'draw':function(){
				
			//画面外に出た場合、反対側から出てくる
			var location = Vector.sub(this._location, new Vector(
				Math.floor(this._location.x / this._stageSize.x) * this._stageSize.x,
				Math.floor(this._location.y / this._stageSize.y) * this._stageSize.y
			));
		
			this._graphics.clear();
			
			if(this._blurs && this._blurs.length > 1){this.drawBlurs()}
			
			this._graphics.beginFill(createjs.Graphics.getRGB(255, 0, 0)).
			dc(location.x, location.y, this._radius)
			.endFill();
		}
			
	};
	
})();
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
