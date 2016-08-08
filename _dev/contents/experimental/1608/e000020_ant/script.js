(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 768,
	height: 480,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg_dark.jpg", id:"bg_dark"},
		{src:"images/bg_frame_dark2.jpg", id:"bg_frame_dark2"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg_dark = function() {
	this.initialize(img.bg_dark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.bg_frame_dark2 = function() {
	this.initialize(img.bg_frame_dark2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B3131").ss(0.6,1,1).p("EgiWAAAMBEtAAA");
	this.shape.setTransform(220,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,442,2);


(lib.Frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("Eghbgi6MBC3AAAQBkAAAABkMAAABCtQAABkhkAAMhC3AAAQhkAAAAhkMAAAhCtQAAhkBkAAg");
	this.shape.setTransform(0,223.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.098)").s().p("EghbAi7QhkAAAAhkMAAAhCtQAAhkBkAAMBC3AAAQBkAAAABkMAAABCtQAABkhkAAg");
	this.shape_1.setTransform(0,223.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-1,450.1,449.1);


(lib.BgFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg_frame_dark2();
	this.instance.setTransform(-384,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,0,768,480);


(lib.Line_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Line("synched",0);
	this.instance.setTransform(-219.9,0,0.02,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.9,-1,10.6,2);


(lib.Grind_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Line_in("synched",0,false);
	this.instance.setTransform(220,440);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(28));

	// レイヤー 1
	this.instance_1 = new lib.Line_in("synched",0,false);
	this.instance_1.setTransform(220,420);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(29));

	// レイヤー 1
	this.instance_2 = new lib.Line_in("synched",0,false);
	this.instance_2.setTransform(220,400);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(30));

	// レイヤー 1
	this.instance_3 = new lib.Line_in("synched",0,false);
	this.instance_3.setTransform(220,380);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(31));

	// レイヤー 1
	this.instance_4 = new lib.Line_in("synched",0,false);
	this.instance_4.setTransform(220,360);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(32));

	// レイヤー 1
	this.instance_5 = new lib.Line_in("synched",0,false);
	this.instance_5.setTransform(220,340);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).wait(33));

	// レイヤー 1
	this.instance_6 = new lib.Line_in("synched",0,false);
	this.instance_6.setTransform(220,320);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).wait(34));

	// レイヤー 1
	this.instance_7 = new lib.Line_in("synched",0,false);
	this.instance_7.setTransform(220,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).wait(35));

	// レイヤー 1
	this.instance_8 = new lib.Line_in("synched",0,false);
	this.instance_8.setTransform(220,280);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(36));

	// レイヤー 1
	this.instance_9 = new lib.Line_in("synched",0,false);
	this.instance_9.setTransform(220,260);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).wait(37));

	// レイヤー 1
	this.instance_10 = new lib.Line_in("synched",0,false);
	this.instance_10.setTransform(220,240);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).wait(38));

	// レイヤー 1
	this.instance_11 = new lib.Line_in("synched",0,false);
	this.instance_11.setTransform(220,220);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).wait(39));

	// レイヤー 1
	this.instance_12 = new lib.Line_in("synched",0,false);
	this.instance_12.setTransform(220,200);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).wait(40));

	// レイヤー 1
	this.instance_13 = new lib.Line_in("synched",0,false);
	this.instance_13.setTransform(220,180);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).wait(41));

	// レイヤー 1
	this.instance_14 = new lib.Line_in("synched",0,false);
	this.instance_14.setTransform(220,160);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(42));

	// レイヤー 1
	this.instance_15 = new lib.Line_in("synched",0,false);
	this.instance_15.setTransform(220,140);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).wait(43));

	// レイヤー 1
	this.instance_16 = new lib.Line_in("synched",0,false);
	this.instance_16.setTransform(220,120);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).wait(44));

	// レイヤー 1
	this.instance_17 = new lib.Line_in("synched",0,false);
	this.instance_17.setTransform(220,100);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).wait(45));

	// レイヤー 1
	this.instance_18 = new lib.Line_in("synched",0,false);
	this.instance_18.setTransform(220,80);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).wait(46));

	// レイヤー 1
	this.instance_19 = new lib.Line_in("synched",0,false);
	this.instance_19.setTransform(220,60);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).wait(47));

	// レイヤー 1
	this.instance_20 = new lib.Line_in("synched",0,false);
	this.instance_20.setTransform(220,40);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({_off:false},0).wait(48));

	// レイヤー 1
	this.instance_21 = new lib.Line_in("synched",0,false);
	this.instance_21.setTransform(220,20);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(49));

	// レイヤー 1
	this.instance_22 = new lib.Line_in("synched",0,false);
	this.instance_22.setTransform(220,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.7,2);


(lib.Frame_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Frame("synched",0);
	this.instance.setTransform(0,218.6,0.058,0.058,0,0,0,0,223.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:223.6,scaleX:1,scaleY:1,y:223.6},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,204.6,28,28);


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(68));

	// レイヤー 16
	this.instance_3 = new lib.Grind_in("synched",0,false);
	this.instance_3.setTransform(566.7,20.4,1,1,90);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(64));

	// レイヤー 14
	this.instance_4 = new lib.Grind_in("synched",0,false);
	this.instance_4.setTransform(564.8,18.5,1,1,90);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).wait(64));

	// レイヤー 15
	this.instance_5 = new lib.Grind_in("synched",0,false);
	this.instance_5.setTransform(126.7,20.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).wait(64));

	// レイヤー 13
	this.instance_6 = new lib.Grind_in("synched",0,false);
	this.instance_6.setTransform(124.8,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(64));

	// レイヤー 5
	this.instance_7 = new lib.BgFrame("synched",0);
	this.instance_7.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_7.alpha = 0.199;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_8 = new lib.bg_dark();
	this.instance_8.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main
	this.instance = new lib.Main();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


// stage content:
(lib.AntSim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// root
	this.instance = new lib.Root();
	this.instance.setTransform(384,240,1,1,0,0,0,384,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384,240,768,480);

})(cjsLib = cjsLib||{}, cjsImages = cjsImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsLib, cjsImages, createjs, ss;
var AntSim;

(function(){	
	
	var NEST_SIZE = 10;
	var MAX_FOOD = 10;
	var DIST_FOOOD = 10;
	
	AntSim = function(ch){
		
		this._ch = ch;
		
		this._width = ch.getCanvasWidth();
		this._height = ch.getCanvasHeight();
		
		this._unitList = {
			pheromones:[],
			foods:[],
			ants:[]
		};
		
		this._nestPos = {
			'x': this._width / 2,
			'y': this._height / 2
		}
		
	};
	
	AntSim.prototype = {
		
		'getRandomPos':function(){
			return {
				'x': Math.random() * this._width,
				'y': Math.random() * this._height
			}
		},
		
		'getRandomFoodPos':function(){
			
			var pos = {
				'x': Math.random() * this._width,
				'y': Math.random() * this._width
			};
			
			while(this._ch.dist(pos, this._nestPos) < 80 ||
				this._ch.dist(pos, this._nestPos) > this._height * 0.5
			){
				pos = {
					'x': Math.random() * this._width,
					'y': Math.random() * this._width
				};
			}
			
			return pos;
			
		},
		
		'generateAnt':function(){
			
			var ant = new Ant(this._ch, this._nestPos);
			this._unitList.ants.push(ant);
				
		},
		
		'generateFood':function(){
			
			var food = new Food(this._ch, this.getRandomFoodPos(), Math.floor(Math.random() * 50) + 25);
			this._unitList.foods.push(food);
				
		},
		
		'generatePheromone':function(pos, strength){
			
			var position = {
				'x':pos.x,
				'y':pos.y
			}
			var pheromone = new Pheromone(this._ch, position, strength);
			this._unitList.pheromones.push(pheromone);
				
		},
		
		'drawNest':function(){
			
			this._ch.setStrokeStyle(200, 5, 10, 1);
			this._ch.setFillStyle(200, 200, 50, 1);
			this._ch.drawShape(_.bind(function(ctx){
				ctx.arc(this._width * 0.5, this._height * 0.5, NEST_SIZE, 0, Math.PI * 2);
			}, this), true, true);
				
		},
		
		'update':function(delta){
			
			this._ch.clear();
			
			if(Math.random() > 0.90) {
				this.generateAnt();	
			}
			
			if(Math.random() > 0.95 && this._unitList.foods.length < MAX_FOOD) {
				this.generateFood();	
			}
			
			var that = this;
						
			_.each(this._unitList, function(units, key, list){
				
				_.each(units, function(unit){
					unit.update();
				});
				
				list[key] =  _.reject(units, function(unit){
					return unit.isDead();
				});
								
			});
			
			_.each(this._unitList.ants, function(ant, key, list){
				
				if(!ant.isRunout()){
					
					_.each(that._unitList.foods, function(food){
						ant.temptate(food.getPosition(), 2.5, food.getAmount() * 0.03 + 16);
						if(that._ch.dist(ant.getPosition(), food.getPosition()) < DIST_FOOOD){
							food.eat();
							ant.setPheromoneStrength(1.1);
							ant.putFood(1);
						}
					});
					
					_.each(that._unitList.pheromones, function(pheromone){
						ant.temptate(pheromone.getPosition(), pheromone.getStrength(), pheromone.getStrength() * 20 + 10);
					});
					
				} else {
					
					if(Math.random() > 0.85 &&
						ant.getPheromoneStrength() > 0
					){
						that.generatePheromone(ant.getPosition(), ant.getPheromoneStrength());
					}
					
				}
				
			});
			
			this.drawNest();
			
		}
		
	}
	
})();
var Ant;

(function(){
	
	var dist, mdist, distX, distY;
	
	Ant = function(ch, startPos){
		
		this._ch = ch;
		if(_.isUndefined(dist)){
			dist = ch.dist;
			mdist = ch.mdist;
			distX = ch.distX;
			distY = ch.distY;
		}
		
		this._startPos = startPos;
		
		this._current = {
			'x': startPos.x,
			'y': startPos.y
		};
		this._dest = {
			'x': startPos.x,
			'y': startPos.y
		};
		
		var vx = Math.random();
		var vy = 1 - Math.random();
		if(Math.random() > 0.5){vx = -vx;}
		if(Math.random() > 0.5){vy = -vy;}
		this._vector = {
			'x':vx,
			'y':vy
		};
		
		this._speed = Math.random() * 3;
		this._stamina = Math.floor(Math.random() * 120) + 120;
		
		this._color = {
			r: 0,
			g: 0,
			b: 0,
		}
		
		this._temptated = 0;
		this._pheromone = 0;
		
		this._food = 0;
		
	}
	
	Ant.prototype = {
		
		'update':function(){
			
			if(this.isRunout()){
				this.setVector(this.getHomeVector());
				this._pheromone -= 0.005;
			}
			
			this._dest.x += this._vector.x * this._speed + (Math.random() * 4 - 2);
			this._dest.y += this._vector.y * this._speed + (Math.random() * 4 - 2);

			this.draw(this._ch, this._current, this._dest);
			
			this._current.x = this._dest.x;
			this._current.y = this._dest.y;
			
			this._stamina -= 1;
			
		},
		
		
		'draw':function(ch, prev, dest){
			
			var r,g,b;
			
			ch.setStrokeStyle(255, 255, 200, 0.5);
			ch.setFillStyle(255, 255, 255, 0.2);
			
			ch.drawShape(function(ctx){
				ctx.arc(dest.x, dest.y, 2, 0, Math.PI * 2);
			}, false, true);
			
			if(this.isRunout()){
				r = 0;
				g = 200;
				b = 255 * this._pheromone;
			} else {
				r = 255 * this._temptated;
				g = 0;
				b = 255 * (1 - this._temptated);
			}
			
			ch.setStrokeStyle(r, g, b, 1);
			ch.drawShape(function(ctx){
				ctx.moveTo(prev.x, prev.y);
				ctx.lineTo(dest.x, dest.y);
			}, true);
			
		},
		
		'getPosition':function(){
			
			return this._current;
			
		},
		
		'putFood':function(v){
			
			this._food += v;
			
		},
		
		'setPheromoneStrength':function(v){
			
			this._pheromone = v;
			
		},
		
		'getPheromoneStrength':function(){
			
			return this._pheromone;
			
		},
		
		'setVector':function(pos){
			
			this._vector.x = pos.x;
			this._vector.y = pos.y;
			
		},
		
		'isRunout':function(){
			
			return this._stamina <= 0 ;
			
		},
		
		'isDead':function(){
			
			return this.isRunout() &&
				dist(this._current, this._startPos) < 10;
			
		},
		
		
		'temptate':function(pos, str, range){
			if(dist(this._current, pos) < range &&
				this._temptated <= str &&
				Math.random() * 5 <= str
			){
				this._temptated = str;
				this.setVector(this.getVectorFor(pos));
			}
			
		},
		
		'getVectorFor':function(pos){
			
			var rpos = {
				x: pos.x + Math.random() * 8 - 4,
				y: pos.y + Math.random() * 8 - 4,
			}
			
			
			var dx = distX(rpos, this._current);
			var dy = distY(rpos, this._current);
			var md = mdist(rpos, this._current);
			
			var vx = dx / md;
			var vy = dy / md;
			
			return {
				'x': vx,
				'y': vy
			};
			
		},
		
		'getHomeVector':function(){
			
			return this.getVectorFor(this._startPos);
			
		},
		
	}

})();
var Food;

(function(){
	
	Food = function(ch, pos, amount){
		this._ch = ch;
		this._amount = amount;
		this._current = {
			'x': pos.x,
			'y': pos.y
		};
	}
	
	Food.prototype = {
		
		'update':function(){

			this.draw(this._ch, this._current, this._amount);
			
		},
		
		'draw':function(ch, pos, amount){
			
			if(!this.isDead()){
				ch.setFillStyle(100, 255, 100, 0.6);
				ch.setStrokeStyle(0, 255, 0, 1);
				ch.drawShape(function(ctx){
					ctx.arc(pos.x, pos.y, amount / 10, 0, Math.PI * 2);
				}, true, true);
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
var Pheromone;

(function(){	
	
	Pheromone = function(ch, pos, strength){
		
		this._ch = ch;
		this._current = pos;
		this._strength = strength;
	};
	
	Pheromone.prototype = {
		
		'update':function(){
			this._strength -= 0.001;
			this.draw(this._ch, this._current, this._strength);
		},
		
		'draw':function(ch, pos, amount){
			
			if(!this.isDead()){
				ch.setFillStyle(100, 100, 200, 0.01);
				ch.setStrokeStyle(0, 0, 70, 0.02);
				ch.drawShape(function(ctx){
					ctx.arc(pos.x, pos.y, amount * 100, 0, Math.PI * 2);
				}, true, true);
			}
			
		},
		
		'isDead':function(){
			return this._strength <= 0;
		},
		
		'getPosition':function(){
			return this._current;
		},
		
		'getStrength':function(){
			return this._strength;
		}
		
	}
	
})();
$(function(){
		
	var ch = new CanvasHandler($('#contMainCanvas').get(0));
	var antSim = new AntSim(ch);
	
	var lastTime;
	
	setInterval(_.bind(antSim.update, antSim), 1000 / 24)
	
});