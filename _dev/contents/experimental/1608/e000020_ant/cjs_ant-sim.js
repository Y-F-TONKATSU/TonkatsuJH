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
		{src:"images/bg_2.jpg", id:"bg_2"},
		{src:"images/bg_dark.jpg", id:"bg_dark"},
		{src:"images/bg_frame_dark2.jpg", id:"bg_frame_dark2"}
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



(lib.bg_2 = function() {
	this.initialize(img.bg_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


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
	this.instance.parent = this;
	this.instance.setTransform(-384,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,0,768,480);


(lib.Line_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Line("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-219.9,0,0.02,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.9,-1,10.6,2);


(lib.Grind_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Line_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(220,440);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(28));

	// レイヤー 1
	this.instance_1 = new lib.Line_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(220,420);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).wait(29));

	// レイヤー 1
	this.instance_2 = new lib.Line_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(220,400);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(30));

	// レイヤー 1
	this.instance_3 = new lib.Line_in("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(220,380);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(31));

	// レイヤー 1
	this.instance_4 = new lib.Line_in("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(220,360);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(32));

	// レイヤー 1
	this.instance_5 = new lib.Line_in("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(220,340);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).wait(33));

	// レイヤー 1
	this.instance_6 = new lib.Line_in("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(220,320);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).wait(34));

	// レイヤー 1
	this.instance_7 = new lib.Line_in("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(220,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).wait(35));

	// レイヤー 1
	this.instance_8 = new lib.Line_in("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(220,280);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(36));

	// レイヤー 1
	this.instance_9 = new lib.Line_in("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(220,260);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).wait(37));

	// レイヤー 1
	this.instance_10 = new lib.Line_in("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(220,240);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).wait(38));

	// レイヤー 1
	this.instance_11 = new lib.Line_in("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(220,220);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).wait(39));

	// レイヤー 1
	this.instance_12 = new lib.Line_in("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(220,200);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).wait(40));

	// レイヤー 1
	this.instance_13 = new lib.Line_in("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(220,180);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).wait(41));

	// レイヤー 1
	this.instance_14 = new lib.Line_in("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(220,160);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(42));

	// レイヤー 1
	this.instance_15 = new lib.Line_in("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(220,140);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).wait(43));

	// レイヤー 1
	this.instance_16 = new lib.Line_in("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(220,120);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).wait(44));

	// レイヤー 1
	this.instance_17 = new lib.Line_in("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(220,100);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).wait(45));

	// レイヤー 1
	this.instance_18 = new lib.Line_in("synched",0,false);
	this.instance_18.parent = this;
	this.instance_18.setTransform(220,80);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).wait(46));

	// レイヤー 1
	this.instance_19 = new lib.Line_in("synched",0,false);
	this.instance_19.parent = this;
	this.instance_19.setTransform(220,60);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).wait(47));

	// レイヤー 1
	this.instance_20 = new lib.Line_in("synched",0,false);
	this.instance_20.parent = this;
	this.instance_20.setTransform(220,40);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({_off:false},0).wait(48));

	// レイヤー 1
	this.instance_21 = new lib.Line_in("synched",0,false);
	this.instance_21.parent = this;
	this.instance_21.setTransform(220,20);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(49));

	// レイヤー 1
	this.instance_22 = new lib.Line_in("synched",0,false);
	this.instance_22.parent = this;
	this.instance_22.setTransform(220,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.7,2);


(lib.Frame_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Frame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,218.6,0.058,0.058,0,0,0,0,223.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:223.6,scaleX:1,scaleY:1,y:223.6},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,204.6,28,28);


(lib.Ex001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Ex001:0});

	// レイヤー 5
	this.instance = new lib.BgFrame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(384,240,1,1,0,0,0,0,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},45).to({_off:true},1).wait(1));

	// レイヤー 4
	this.instance_1 = new lib.bg_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47));

	// レイヤー 6
	this.instance_2 = new lib.bg_dark();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Main_start:0,Main_load:39});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(68));

	// レイヤー 16
	this.instance_3 = new lib.Grind_in("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(566.7,20.4,1,1,90);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(64));

	// レイヤー 14
	this.instance_4 = new lib.Grind_in("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(564.8,18.5,1,1,90);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).wait(64));

	// レイヤー 15
	this.instance_5 = new lib.Grind_in("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(126.7,20.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).wait(64));

	// レイヤー 13
	this.instance_6 = new lib.Grind_in("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(124.8,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(64));

	// レイヤー 5
	this.instance_7 = new lib.BgFrame("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_7.alpha = 0.199;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_8 = new lib.bg_dark();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ex001
	this.ex001 = new lib.Ex001();
	this.ex001.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex001).wait(1));

	// Main
	this.main = new lib.Main();
	this.main.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


// stage content:
(lib.AntSim = function(mode,startPosition,loop) {
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