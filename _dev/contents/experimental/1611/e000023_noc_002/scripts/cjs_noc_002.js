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


(lib.Frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("Eghcgi7MBC5AAAQBkAAAABkMAAABCvQAABkhkAAMhC5AAAQhkAAAAhkMAAAhCvQAAhkBkAAg");
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
		{src:"images/bg_vivid.jpg", id:"bg_vivid"}
	],
	preloads: []
};




})(gCjsLib = gCjsLib||{}, gCjsImages = gCjsImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var gCjsLib, gCjsImages, createjs, ss, AdobeAn;