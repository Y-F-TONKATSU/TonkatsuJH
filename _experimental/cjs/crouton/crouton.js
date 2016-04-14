(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/dameo.png?1460516693947", id:"dameo"},
		{src:"images/grass.png?1460516693947", id:"grass"},
		{src:"images/hema.png?1460516693947", id:"hema"},
		{src:"images/nobuteru.png?1460516693947", id:"nobuteru"},
		{src:"images/unkopad.png?1460516693947", id:"unkopad"}
	]
};



// symbols:



(lib.dameo = function() {
	this.initialize(img.dameo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,464);


(lib.grass = function() {
	this.initialize(img.grass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1713,225);


(lib.hema = function() {
	this.initialize(img.hema);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,516);


(lib.nobuteru = function() {
	this.initialize(img.nobuteru);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,1012);


(lib.unkopad = function() {
	this.initialize(img.unkopad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,115);


(lib.Nobuteru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,448,1012);


(lib.Hemajiro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.hema();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,672,516);


(lib.Grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.grass();
	this.instance.setTransform(0,0,1.502,1.502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2573.1,338);


(lib.Dameo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.dameo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,571,464);


// stage content:
(lib.crouton_v002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.unkopad();
	this.instance.setTransform(32.6,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// grass.png
	this.instance_1 = new lib.Grass("synched",0);
	this.instance_1.setTransform(1120.2,1328.2,1,1,0,0,0,1286.5,169);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:1101.3},29).wait(91));

	// Nobuteru
	this.instance_2 = new lib.Nobuteru("synched",0);
	this.instance_2.setTransform(3374.9,653.2,1,1,0,0,0,224,506);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:1592.5},11).wait(91));

	// hema.png
	this.instance_3 = new lib.Hemajiro("synched",0);
	this.instance_3.setTransform(2782.7,843.3,1,1,0,0,0,336,258);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:1000.2},11).wait(91));

	// dameo.png
	this.instance_4 = new lib.Dameo("synched",0);
	this.instance_4.setTransform(2148.1,869.3,1,1,0,0,0,285.5,232);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({x:365.7},11).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(793.7,632.2,2573,1464.9);

})(cjsLib = cjsLib||{}, cjsImages = cjsImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsLib, cjsImages, createjs, ss;