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


(lib.Circle3 = function(mode,startPosition,loop) {
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
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Circle2 = function(mode,startPosition,loop) {
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


(lib.Circle1 = function(mode,startPosition,loop) {
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


(lib.Noise2D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

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


(lib.Noise1D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

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


(lib.Motion3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

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


(lib.Motion2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

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


(lib.Motion1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

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


(lib.Line3 = function(mode,startPosition,loop) {
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


(lib.Line2 = function(mode,startPosition,loop) {
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


(lib.Line1 = function(mode,startPosition,loop) {
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

	// noise2D
	this.noise2D = new lib.Noise2D();
	this.noise2D.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.noise2D).wait(1));

	// noise1D
	this.noise1D = new lib.Noise1D();
	this.noise1D.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.noise1D).wait(1));

	// motion3
	this.motion3 = new lib.Motion3();
	this.motion3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.motion3).wait(1));

	// motion2
	this.motion2 = new lib.Motion2();
	this.motion2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.motion2).wait(1));

	// motion1
	this.motion1 = new lib.Motion1();
	this.motion1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.motion1).wait(1));

	// circle3
	this.circle3 = new lib.Circle3();
	this.circle3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.circle3).wait(1));

	// circle2
	this.circle2 = new lib.Circle2();
	this.circle2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.circle2).wait(1));

	// circle1
	this.circle1 = new lib.Circle1();
	this.circle1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.circle1).wait(1));

	// line3
	this.line3 = new lib.Line3();
	this.line3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.line3).wait(1));

	// line2
	this.line2 = new lib.Line2();
	this.line2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1));

	// line1
	this.line1 = new lib.Line1();
	this.line1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1));

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
var E000021 = {};

E000021.init = function(){
	
	this.graphUtil = new GraphUtil('#contMainCanvas');
	
};

E000021.draw = function(out){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.drawGraph(out);
	
};

E000021.drawCircle = function(out){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.drawCircle(out);
	
};

E000021.motion = function(out){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.drawMotion2(out);
	
};

E000021.noise1D = function(){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.draw1D();
	
};

E000021.noise2D = function(){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.draw2D();
	
};

E000021.stop = function(){
	if(this.graphUtil){
		this.graphUtil.stop();
	}
};

E000021.clear = function(){
	if(this.graphUtil){
		this.graphUtil.clear();
	}
};

E000021.remove = function(){
	if(this.graphUtil){
		this.graphUtil.stop();
	}
	this.graphUtil = null;
};

var GraphUtil;

$(function(){
	
	GraphUtil = function(canvas, option){
		
		this._width = $(canvas).attr('width');
		this._height = $(canvas).attr('height');
		
		this._canvas = $(canvas).get(0);
		this._stage = new createjs.Stage(this._canvas);
		this._graphics = new createjs.Graphics();
		this._shape = new createjs.Shape(this._graphics);
		this._stage.addChild(this._shape);
		
		this._currentAnimator = null;
		this._stopped = false;
		
		this._option = _.defaults(option || {}, {
			'lineWidth': 0.5,
			'color': '##003399'
		});
		
	};
	
	GraphUtil.prototype = {
		
		DEFAULT_PROGRESS:0.01,
		
		init:function(){
			
			if(_.isFunction(this._currentAnimator)){
				this.stop();
			}
			
			this.clear();
			
		},
		
		stop:function(){
			this._stopped = true;
			createjs.Ticker.removeEventListener('tick', this._currentAnimator);
		},
			
		clear:function(){
			this._graphics.clear();
			this._stage.clear();
			this._stage.update();
		},
		
		play:function(animator){
			
			this._currentAnimator = animator;
			createjs.Ticker.addEventListener('tick', this._currentAnimator);
			
		},
			
		drawGraph:function(out, progress){
			
			this.init();
			
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var pv;
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				this._graphics.beginStroke(this._option.color);
				
				var v = out(s) * this._width;
				
				if(_.isUndefined(pv)){pv = v;}
				
				var progressRate = Math.pow(progress, -1);
				
				this._graphics.moveTo(s * progressRate, pv)
				.lineTo((s + progress) * progressRate, v);
				
				pv = v;
				
				s += progress;
								
				this._stage.update();
				
				if(s * progressRate >= this._height){this.stop();}
				
			}, this));
			
			
		},
	
		drawCircle:function(out, progress, progress2, progress3, noiseStr){
			
			this.init();
						
			var s = 0;
			var t = 1000;
			var u = 2000;
			var progress = progress || this.DEFAULT_PROGRESS;
			var progress2 = progress2 || this.DEFAULT_PROGRESS + 0.01;
			var progress3 = progress3 || this.DEFAULT_PROGRESS + 0.02;
			
			var px, py;
			
			var shorter = Math.min(this._height, this._width);
			var str = noiseStr || shorter * 0.2;
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				this._graphics.beginStroke(this._option.color);
				
				s += progress;
				t += progress2;
				u += progress3;
				
				var v = (0.5 - out(s)) * str;
				var w = (0.5 - out(t)) * str;
				var z = (0.5 - out(u)) * str;
				
				var cx = this._width * 0.5;
				var cy = this._height * 0.5;
				var r = shorter * 0.4 + z;
				var x = cx + Math.cos(t) * r + v;
				var y = cy + Math.sin(t) * r + w;
				
				if(_.isUndefined(px)){px = x;}
				if(_.isUndefined(py)){py = y;}
				
				this._graphics.moveTo(px, py).lineTo(x, y);
				
				px = x;
				py = y;
				
				this._stage.update();
				
			}, this));
			
			createjs.Ticker.addEventListener('tick', this._currentAnimator);
			
		},
	
		drawMotion:function(out, progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var maxSize = Math.min(this._width, this._height) * 0.4;
			var cx = this._width * 0.5;
			var cy = this._height * 0.5;
			
			var frame = 0;
			
			var c = function(p){
				this.p = p;
				this.r = 0;
			}
			
			var circles = [new c(0.1), new c(0.13), new c(0.16), new c(0.19), new c(0.22)];
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this.clear();
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				
				s += progress;
				var v = out(s);
				
				_.each(circles, _.bind(function(circle){
					circle.p += v * 0.05;
					circle.r = maxSize * Math.abs((circle.p - Math.floor(circle.p)) - (Math.floor(circle.p) % 2));;
					this._graphics.beginStroke(this._option.color);
					this._graphics.drawCircle(cx, cy, circle.r);
					this._graphics.endStroke();
				}, this));
				
				this._stage.update();
				
			}, this));
			
		},	
	
		drawMotion2:function(out, progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var r = Math.min(this._width, this._height) * 0.4;
			var cx = this._width * 0.5;
			var cy = this._height * 0.5;
			
			var a = 0;
					
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this.clear();
				
				s += progress;
				var v = Math.pow(out(s), 5);
				a += v;
				var x = cx + Math.cos(a) * (r);
				var y = cy + Math.sin(a) * (r);
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				this._graphics.beginFill(this._option.color);
				this._graphics.drawCircle(x, y, r * 0.1);
				this._graphics.endStroke();
				
				this._stage.update();
				
			}, this));
			
		},
	
		draw1D:function(progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var left = 0;
					
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				s += progress;
				var v = (noise(s) * 255).toString();
				v = v.substring(0, v.indexOf('.'));
				this._graphics.setStrokeStyle(1);
				this._graphics.beginStroke('rgba(' + v + ',' + v + ',' + v + ',1)');
				this._graphics.moveTo(left, 0).lineTo(left, this._height);
				this._graphics.endStroke();
				
				left++;
				
				this._stage.update();
				
			}, this));
			
		},
	
		draw2D:function(progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var left = 0;
					
			this._graphics.setStrokeStyle(1);
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				s += progress;
				var top = 0;
				
				var t = 0;
				
				_.times(this._height, _.bind(function(){
					t += progress;
					var v = (noise(s, t) * 255).toString();
					v = v.substring(0, v.indexOf('.'));
					this._graphics.beginStroke('rgba(' + v + ',' + v + ',' + v + ',1)');
					this._graphics.moveTo(left, top).lineTo(left, top + 1);
					top++;
				}, this));
				
				this._graphics.endStroke();
				
				left++;
				
				this._stage.update();
				
			}, this));
			
		}
	
	};
		
});