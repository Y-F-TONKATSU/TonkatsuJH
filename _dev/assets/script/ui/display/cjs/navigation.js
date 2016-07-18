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
		{src:"images/door_way.jpg", id:"door_way"},
		{src:"images/face.png", id:"face"},
		{src:"images/share_pig.png", id:"share_pig"},
		{src:"images/tunnel.jpg", id:"tunnel"}
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



(lib.door_way = function() {
	this.initialize(img.door_way);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.face = function() {
	this.initialize(img.face);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,53);


(lib.share_pig = function() {
	this.initialize(img.share_pig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,81);


(lib.tunnel = function() {
	this.initialize(img.tunnel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.トゥイーン4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2C12").s().p("AFYGTQgFgjgWgSQgQgNgGgUQgFgOAAgZQAAgKgDgFIhDh6QgEgGgIgCIgOgCQgEAAgBAFIgBAKQgTBehFBYQgOARgOAJQgQAMgTACQgIABgJADIgPAHQgNAIgDgCQgCgBgDgRQgDgRACgEQACgEAPgGIAhgPIAGgCIAEgEIAWgfQALgTgBgTIABgOIACgOIABggQgBgSgGgMIgOgbQgIgQgCgNQgVANgaAFQgdAGglAAQgdAAgngEQgtgFgjgJQgpgLgigTQgFgDgCACIgDAFQgSAjAHArQAFAeAOAeQAMAaAVAdIAtBAQAZAlAQAdIg5AAQgGgRgJgOQgLgQgJgIQgMgNgOgFIgHgEQgDgCgCgFQgRgsgdgkIgQgRQgJgKgKgEQgTgGgFgJQgGgKACgTIACgTIAAgTQgCgRgGgLQgIgMgQgGQgUgHgNABQgQACgOAPQg2A9giA+QgFAJgCAHQgCATgFAZIgKArQgGAbAFAUQAGAXATAQIg5AAQAAgXgDgPQgEgVgLgOQgIgKgBgIQAAgIAFgKIACgGQAMgkACgrQADgjgFgsQgBgPAFgMQAGgMALgEQAMgEAGgIQAFgIACgNQACgXgJgVIgKgTIgKgWQgPgngCgjQgCgmAPgjIAMgdQAHgRAGgLQAEgHgBgCQgBgDgIgBQgVgDgYgPQgagRAAgfQAAgVANgTQANgUAUgJQAdgMAWARQAMAIAEAPQADALAAASQAAAHgEgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgBgEQgBgRgIgOQgIgMgLgBQgVgCgRAQQgRARACAVQABAUATAIQASAIAYABQAIABAFgDQAFgCAEgHQA3hOBXgXIAWgEQANgCAIgDIBhAAQADADAFAAIAIAAQA1AGBNAOICBAXIBWAPIBYANQB5AQBdAzQCNBOBJCjQADAGADACQADADAGACQArANAgAkQAIAJgCAGQgCAGgMAEQgKADgOAAIgZABQARBDAAA2QABBRBCAzIAAACQgFADgHAFIgLAKQgVAQgIABQgHAAgYgMIgjgSQgUgIgSABQgOAAgQgDQgNgDgQgHQgZgKgZgUQgSgOgYgZIgUgXIgUgXQgCALgBAQIAAAZQgHBSAvA9IAFAGQACADAAADgADJi1QgPADgMANQgcAcAIAvQAHAkAgALQAOAFAQgBQAOgBAQgEQAEgCACgCQABgCgBgFQgBgIgEgCQgDgDgIAEIgIACQgWADgOgIQgOgJgDgTQgBgFABgCQABgCAFAAIAjABIAYAAQAQAAADgDQADgDgCgRQgCgTgHgMQgJgOgQgHQgLgEgKAAIgLABgAl6hDIgCAHQgDAGACADQABADAGACQApAPAjgQQASgIAIgSQAIgRgGgUQgEgOgMgKQgIgHgQgIIgOgGIgOgHQgOgIACgRQACgPAQgFQAVgFAPAHQAKAEAEgDQADgDACgJQABgGgBgCQgBgDgFgBQgWgIgYADQghAFgNAZQgJASAGARQAGASASAMQAHAEANAGQAOAGAGAEQALAGAEAJQAEAJgDAKQgDAIgIAGQgIAFgLABQgZABgXgLgAglifQAQADACARQABAFgCABQgBACgGAAQgPAAgLADQgNAEgLAIQgMAJgEAPQgEAPAGAOQAFAMAMAHQAMAGAPgBQAIgBAJgFIAPgLQABAMAEACQADABARgCQgCgRAAgZIABgqQgBgRgEgLQgEgOgOgHQgfgOgkATQgEACACAFIADAIQABAFADgBIAEgCQAMgGANAAIAKABgAiZiWQAGAHABANIABBEQAAAQADADQACACARgBQAEAAACgBIABgGIAAhTQgBgXgOgOQgNgNgVABQgKABgJAFQgIAEgKAKIAAgjQAAgUABgOQAAgJgGgCIgLAAQgHAAgDACQgDACAAAIIABBVIgBBVQAAANADACQACACANAAQAHABADgDQACgDAAgHQgBgvABgeQABgLAJgIQAIgHAMAAQALAAAHAHgABNgqQAGABADgDQACgCgBgHQAAgoABgdQABgPAIgIQAIgIAPAAQAEgBACgBQABgCAAgEQgBgHABgFQABgFgDgCQgCgCgFABQgMABgIAHQgIAHgHANIAAgUIAAgDQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgMgCgFADQgEAEAAAMIAAALIAABkQAAAGACACQACACAFgBIAFAAIAFAAgAgug8QgKgBgFgHQgFgHACgLQACgMAIgFQAGgEANgDQAMgCADACQADADAAANQABAUgNAKQgHAEgHAAIgDAAgAC3h9QgBgDACgGQADgMAJgHQAJgHAKABQAKABAHAIQAHAIABAMQAAAEgBACQgBABgEAAIgYAAIgJAAIgJAAIgDAAQgFAAgBgCg");
	this.shape.setTransform(2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.9,-40.3,139,80.8);


(lib.トゥイーン3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.share_pig();
	this.instance.setTransform(-72,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-40.5,144,81);


(lib.トゥイーン2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AnPFnQgNhCgGhLQgFhMAAhhQgBhOAFhSQAFhUAKhaQAKhbAQhqICuAWQgfCWgPB9QgOB+AABrIAAAjIACAnIAQgZIAOgXIARgaIAOgYIBOBdQgpBHgdA9QgcA9gRA2IAHAmIAKArIiQAuQgVhAgNhAgAAtHCQhAgBg0gXQg1gWgegoQgggogBgwQABgqAgghQAeghA2gSQA3gUBDAAQANAAAMACIAeACIgDhkIgDg+IgEg8QgtAFglADQgjACgnAAQgjAAgegBQgegCgigDIgUiXIBVAHQAsACAwAAIA6gBIBAgEIgFj0ICqAAIACDOQAagKAUgPQAVgPANgQIBvBhQgUAjgwAcQgwAdhIASIABA3IACBXIAFCWQBDAeA0AcQA2AbAuAcIhZCOIg8gsIgrgfIgogbQgVBBgyAdQgxAdhYAAIgDAAgAgeD+QgZAJAAAPQABASAbALQAaAMAlAAQAoABAQgNQARgOACgjQgQgHgSgCQgTgEgYAAQgmABgaAIg");
	this.shape.setTransform(63.9,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AhRHVQg7gFgogMQgpgNgdgUQgpgcgWgqQgVgpgBg0QAAhKAzhEQAyhGBvhJQgHgggGgzIgKhxQgEg9gDhBQgDhAgBg7ICsAIIgBAsIAAAoQAABTACA+QADA9AGAvIBLgwIAlgYIAegRIBcCZQhAAdg1AZIhdAsQAEAZAGAcQAGAcAHASIiAA+IgSgtIgMgmQgxAhgWAfQgWAeABAiQgBAcAPAQQARAQAnAGQAnAGBFAAQBUAABJgIQBKgHBGgRIAjCuQhCALhEAFQhEAGhJAAQhTAAg7gGg");
	this.shape_1.setTransform(-59.2,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-93.3,244.2,186.8);


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AnPFnQgNhCgGhLQgFhMAAhhQgBhOAFhSQAFhUAKhaQAKhbAQhqICuAWQgfCWgPB9QgOB+AABrIAAAjIACAnIAQgZIAOgXIARgaIAOgYIBOBdQgpBHgdA9QgcA9gRA2IAHAmIAKArIiQAuQgVhAgNhAgAAtHCQhAgBg0gXQg1gWgegoQgggogBgwQABgqAgghQAeghA2gSQA3gUBDAAQANAAAMACIAeACIgDhkIgDg+IgEg8QgtAFglADQgjACgnAAQgjAAgegBQgegCgigDIgUiXIBVAHQAsACAwAAIA6gBIBAgEIgFj0ICqAAIACDOQAagKAUgPQAVgPANgQIBvBhQgUAjgwAcQgwAdhIASIABA3IACBXIAFCWQBDAeA0AcQA2AbAuAcIhZCOIg8gsIgrgfIgogbQgVBBgyAdQgxAdhYAAIgDAAgAgeD+QgZAJAAAPQABASAbALQAaAMAlAAQAoABAQgNQARgOACgjQgQgHgSgCQgTgEgYAAQgmABgaAIg");
	this.shape.setTransform(63.9,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AhRHVQg7gFgogMQgpgNgdgUQgpgcgWgqQgVgpgBg0QAAhKAzhEQAyhGBvhJQgHgggGgzIgKhxQgEg9gDhBQgDhAgBg7ICsAIIgBAsIAAAoQAABTACA+QADA9AGAvIBLgwIAlgYIAegRIBcCZQhAAdg1AZIhdAsQAEAZAGAcQAGAcAHASIiAA+IgSgtIgMgmQgxAhgWAfQgWAeABAiQgBAcAPAQQARAQAnAGQAnAGBFAAQBUAABJgIQBKgHBGgRIAjCuQhCALhEAFQhEAGhJAAQhTAAg7gGg");
	this.shape_1.setTransform(-59.2,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-93.3,244.2,186.8);


(lib.WhiteBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egv+AigMAAAhE/MBf9AAAMAAABE/g");
	this.shape.setTransform(0,220.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.2,0,614.4,441.6);


(lib.Soreha_teal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// そ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AdkHUIgwhsIAPABIAVABIASAAQAZABAIgGQAIgGAAgYIAAjwIpUAAIAAFvIh3AAIAAnEINDAAIAAF7QgBAmgcAYQgdAYg0ABgEg3aAHMQgngGgqgPQgqgOgpgcQgsgggVgoQgWgnAAguQAAgHADgaQAEgbAPgnQAPgoAiguQAiguA8grIiBAZIiBAYIh3AaIgTAEQgKACgNAFIgXhzIAtgEIBBgGIA+gIQAcgFAKgFQANgGAdgaQAdgaAkglQAlglAlgpQAlgpAdgmQhZASg7AEQg6AFglgBIguhqIA2ADQAdACAkAAQBQAABPgMQBPgLBNgaIA3BaQgSAOgfAcQggAcglAkQgmAkglAmQglAmgeAjIAwgJIBNgPIAwgKIBHgQIBGgQIAugKIAABzQgpAGgqALQgqAMgvAaQguAbg0AyQgnAmgWAqQgXAqgBAxQABAwAYAbQAXAcAjAMQAjANAkADQAjADAaAAIgWB0QgdgCgmgGgAu1FkQBwgwBFhBQBEhCAkhHQAkhJAPhDQAOhFAGg5IkyAAIAAh7IE1AAIAAhtQAAgpgCgaIB1AKQAWABALADQAMAEAAAIIAAAEIgDAFIgLAMIgLAMQgCAHgBAYIgCAxIgBAlIGFAAQAABmgDBwQgEBvgPCGQgKBlgZA3QgZA3g2AXQg3AWhjAFIg3iFQASADAYACQAXACAUAAQApAAAVgMQAVgNAJgZQAJgYAEglQAQh+AFhYQAEhaAAg4IkLAAQgEBQgUBUQgUBWgqBTQgpBUhFBJQhFBKhmA4gEA6WAF1QAdgUApgqQApgpAohNQAhhDAQhIQAQhHAAhKIgBgjQgBgdgDgwQgCgugFg5QgGg5gJg7ICCAAQADgBAJACQAJACABALQgBAHgIAFQgJAGgBAHIABATIADAbIACATQAFA5AEA5QAEA5AAA1QAAAhgEAwQgEAvgOA8QgPA9gcBDQgnBVgoA0QgpA0geAdgEgsYAC8IgdAqIgbAnIghAyIhuhLQAkghAggjQAggjAggsQAhgqAlg3IAChdIgxARIgqAQIgvAPIg1hzQBCgKAxgPQAwgOAdgMIAEjlIBqALQANACAHACQAHACAAAHQgBADgIAHIgKAKQgEAHgCAlQgDAjgCA+IBEBBIgXAvIApglQAZgWAegWQAegWAegPQAfgPAbAAQAcAAAaAOQAbAPARAcQATAcAAArIgBAVIgEAwIgKBmIgHBMIgDAvIAAAcQAAArAJAOQAJAOAVgBQAXABAdgSQAdgSAhguIAhB4QgkAogtAcQgsAcg1ABQgugBgZgWQgagWgLggQgLgfgCgcQgDgbABgLQAAgRADgnIAGhUIAHhUQADgoAAgSQAAgOgDgRQgDgQgJgMQgJgMgSAAQgeABgkAdQglAcgmAtQgnAsglAtIABCJIACB9QABA7ADA+Ih3AHgEAmKAGAQg/gkgBhCQgBgMAGgZQAGgYAYgaQAXgaA0gSQAzgRBZACIAeABIgChmIgeABIgpACIgmABQhKgCgkgVQglgUAAghQABgaATgYQAUgZAagVQAagVAWgPIA9A1QgPAKgKAJQgKAKgBAKQACALAMACQANADAOgBIApgBIAhgBIgCiFIhqAFQgtACgoAEIhUAJIgDhzIBogBIBUgBIBWgCIgDiOICCAMQAPACAGADQAGACAAAGQAAADgDADIgLAJQgDACgFAGQgEAEgCAIIAAARIgCA7IBWgEIBAgEIA5gDIBCgFIgEBxIigABIhvACIAAB+IBPgKIBEgLIBTgPIAAByIgzAIQgeAFgqAEIhpAKIACAqIABAkIACAxQAsALApAPQApAPAtAWQAsAWA3AjIhFBjQgjgYgdgSQgegSgfgPQgfgPgngPQgCA2gNAhQgOAigjAPQgjAPhDAAQhwAAg/glgEAnjAD4QgZAMAAAVQABASARAIQARAHATACQATACAHgBQAiAAAQgHQAQgHAEgRQAEgSgBgeIgVgCIgdgBQg0ABgaAMgA+HD0QgIhTAAhUQAAh9ARh9QARh9Afh6IBoApIAOAGQAKAHABAIIgBADIgDAEIgKAFIgKADQgEAEgFAPIgJAfIgGAXIgKA9IgNBbIgMBjQgEAuAAAfIAAAZIABApQABAYADAWIAsg/IBDAtIgeBCQgRAngQAtQgPAugGArIhiAQQgYhQgJhTgA3SGSQghgCgmgOQgmgOgbggQgbgggBg5QAAgvAZgfQAZgeAqgPQArgOA0AAQAQAAARACIAgACIgHhnIgEhIIgDhDQgzAGguACQgvADgxgDIgBhtQAOADAXABQAWACAlAAQAeAAAXgCIAugEIABgyIABgnIABgsIABhAIB3ATQARACAFAEQAFAEgBAFQAAAEgGAEIgOAJQgFAUgDAiIgHBOIAngJQAWgFAZgJQAZgIAVgNIAABzQgiALgkAIIg/ALIACBjQABAoADArQADArAGA7IAtATQAYALAiATQAhATAvAgIg9BpQgcgagZgTQgagTghgTQAAApgMAeQgMAggkARQgkAQhIABIgEAAQgNAAgcgDgA38DeQgXAMAAASQAAATAXAOQAXAOAvAAQAjAAAOgIQAPgIACgSQACgSgCgcIgfgGQgUgDgYAAQgnAAgWAMgAClFcQAxhHAkhAQAjg/AahEQAahDAVhRIg0ARIgtASIgwAWIgoiAIBGgLIA9gMIBKgRIAHg+IADg+QABgiAAgsICAASQAKACAHAEQAIAEAAAGQABADgDADIgJAGQgKAGgCADQgCAEgBAJIgFAlIgFAhIgGAoQANgDAUgCQAVgCAYAAQA1AAAgAVQAfAVAQAhQAPAiAFAmQAFAngBAhQAABOgLBEQgMBEgTAzQgUAygZAZQgQARgdAMQgdAMgwAAQgYAAgVgBIgjgDIgahzIAhAGQARADAXAAQAZAAARgHQASgGAOgRQASgYALghQALghAGgkQAGgkACggQACggAAgUQABg6gTgZQgTgYgxACQgSAAgPACIgZADQgaBqgdBUQgcBVgkBIQgjBIgwBJgAWhF/IAAj5IGbAAIAADSIkwAAIAAAngAYMEHIDEAAIAAg5IjEAAgEA3CADAQgZhGgMhJQgLhHAAhKQABhCAFg8QAFg9AHgxIAMhQIB1AHQAFgBAIADQAIADABAIQgBAFgFAEIgJAHQgIAIgIAjQgHAjgFAvIgJBbQgDAsAAAZQAAAXACANIAGAeIAahDQAQgnAUgtIBKAxQgiBPgfBOQgfBQgXBSgAMUAIQAegDAPgFQAQgHAAgTQABgUgjg/Qgjg/hUhjIBWg8IAzA/QAgAnAhAxQAhAxAWAyQAWAyABApQAAAfgPASQgOATgWAKQgVALgWAFQgWAEgPACgAVognIAAjTIIDAAIAADTgAXfhyIEWAAIAAg8IkWAAgAOCkYQgUgWgZgVIA6grQAXAUAUAYQAWAXARAYIg3AtQgUgcgUgWgAP0lVQgUgXgVgUIA3gpQArAkApA2Ig/AqQgRgagSgWgASnklIAAhfIGEAAIAAhMICBAKIAOACQALACABAHQAAAEgEADQgDADgFADIgIAGQgDADAAAEIAAAdIF/AAIAABfg");
	this.shape.setTransform(-57.9,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.4,-42,815.1,93.7);


(lib.Soreha_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// り
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgnFtQAdgVAngpQApgpAohNQAhhDAQhJQAQhGAAhKIgBgjQgBgegDgvQgCgvgFg5QgGg5gJg7ICCAAQADAAAJACQAJACABAKQgBAHgIAGQgJAGgBAHIABATIADAaIACAUQAFA4AEA5QAEA6AAA1QAAAggEAxQgEAvgOA8QgPA8gcBDQgnBVgoA0QgpA0geAegAj7C4QgZhGgMhKQgLhHAAhJQABhCAFg9QAFg9AHgwIAMhQIB1AHQAFgBAIADQAIACABAIQgBAGgFADIgJAHQgIAIgIAjQgHAkgFAvIgJBbQgDArAAAaQAAAWACAOIAGAeIAahDQAQgnAUgtIBKAwQgiBPgfBOQgfBQgXBTg");
	this.shape.setTransform(319.6,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ま
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AkLGJQg/gkgBhCQgBgMAGgZQAGgYAYgaQAXgaA0gSQAzgRBZACIAeABIgChmIgeABIgpACIgmABQhKgCgkgVQglgWAAgfQABgaATgYQAUgZAagVQAagVAWgPIA9A1QgPAKgKAJQgKAKgBAKQACALAMACQANADAOgBIApgBIAhgBIgCiFIhqAFQgtACgoAEIhUAJIgDhzIBogBIBUgBIBWgCIgDiOICAAMQAPACAGADQAGACAAAGQAAADgDADIgLAJQgDACgFAGQgEAEgCAIIAAARIgCA7IBWgEIBAgEIA5gDIBCgFIgEBxIigABIhvACIAAB+IBPgKIBEgLIBTgPIAAByIgzAIQgeAFgqAEIhpAKIACAqIABAkIACAxQAsALApAPQApAPAtAWQAsAWA3AjIhFBjQgjgYgdgSQgegSgfgPQgfgPgngPQgCA2gNAhQgOAigjAPQghAPhDAAQhwAAg/glgAiyEBQgZAMAAAVQABASARAIQARAHATACQATACAHgBQAiAAAQgHQAQgHAEgRQAEgSgBgeIgVgCIgdgBQg0ABgaAMg");
	this.shape_1.setTransform(213.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// 高
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AD5HSIgvhrIAOAAIAWACIASAAQAYABAIgGQAIgHAAgXIAAjwIpSAAIAAFvIh2AAIAAnEINAAAIAAF7QAAAmgdAYQgdAXg0ABgAjIF+IAAj5IGaAAIAADSIkuAAIAAAngAhcEGIDBAAIAAg6IjBAAgAkBgoIAAjUIIBAAIAADUgAiJh0IETAAIAAg7IkTAAgAnCkmIAAhfIGEAAIAAhMICAAKIANACQALACABAHQAAADgEAEQgDADgFACIgIAHQgDADABAEIAAAdIF+AAIAABfg");
	this.shape_2.setTransform(106.4,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// が
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AnXFqQAxhHAkhAQAkg/AZhEQAahDAWhRIg0ARIgtASIgxAUIgoh+IBGgLIA+gMIBKgRIAHg+IADg+QAAgiAAgsICAASQAKACAHAEQAJAEgBAGQABADgCADIgKAGQgJAGgDADQgCAEgBAJIgEAlIgGAhIgGAoQANgDAUgCQAVgCAYAAQA2AAAdAVQAfAVAQAhQAQAiAFAmQAEAngBAhQAABOgLBEQgLBEgUAzQgTAygaAZQgOARgdAMQgdAMgwAAQgXAAgWgBIgjgDIgahzIAhAGQARADAXAAQAZAAARgHQASgGAOgRQASgYALghQAMghAFgkQAHgkACggQACggAAgUQAAg6gSgZQgUgYgxACQgRAAgPACIgZADQgbBqgcBUQgdBVgjBIQgkBIgwBJgACWAWQAegDAPgHQARgHgBgRQABgUgjg/Qgjg/hUhjIBXg8IAyA/QAgAnAhAxQAhAxAWAyQAXAyAAApQAAAfgOASQgOATgWAKQgWALgVAFQgXAEgOACgAEFkKQgVgWgYgVIA5grQAXAUAVAYQAVAXARAYIg3AtQgUgcgTgWgAF2lHQgUgXgUgUIA3gpQArAkAoA2Ig/AqQgRgagSgWg");
	this.shape_3.setTransform(5.9,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// 力
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("Am1FkQBwgwBFhBQBEhCAkhHQAkhJAPhDQAOhFAGg5IkyAAIAAh7IE1AAIAAhtQAAgpgCgaIBzAKQAWABALADQAMAEAAAIIAAAEIgDAFIgLAMIgLAMQgCAHgBAYIgCAxIgBAlIGFAAQAABmgDBwQgEBvgPCGQgKBlgZA3QgZA3g2AXQg3AWhjAFIg3iFQASADAYACQAXACAUAAQApAAAVgMQAVgNAJgZQAJgYAEglQAQh+AFhYQAEhaAAg4IkLAAQgEBQgUBUQgSBWgqBTQgpBUhFBJQhFBKhmA4g");
	this.shape_4.setTransform(-109.1,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// は
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AmWD8QgIhTAAhUQAAh8ARh+QARh8Afh7IBoApIAOAGQAKAHABAIIgBADIgDAFIgKAEIgKAEQgEAEgFAPIgJAeIgGAYIgKA8IgNBcIgMBjQgEAtAAAfIAAAZIABAqQABAXADAXIAshAIBDAuIgeBBQgRAngQAtQgPAugGArIhiAQQgYhQgJhTgAAdGbQgfgDgmgOQgmgNgbghQgbgfgBg5QAAgwAZgfQAZgeAqgPQApgOA0AAQAQAAARACIAgACIgHhnIgEhIIgDhCQgzAFguADQgtACgxgCIgBhtQAOACAXABQAWACAjAAQAeAAAXgCIAugDIABgzIABgmIABgtIABhAIB3AUQARABAFAFQAFADgBAFQAAAEgGAEIgOAJQgFAUgDAiIgHBOIAngJQAWgFAZgIQAZgJAVgNIAABzQgiAMgkAHIg/ALIACBjQABApADArQADAqAGA7IAtATQAYALAiAUQAhASAvAgIg9BqQgcgbgZgSQgagUghgTQAAApgMAfQgMAfgkARQgkARhIAAIgEAAQgOAAgbgCgAgLDmQgXAMAAATQAAASAXAPQAVANAvAAQAjAAAOgIQAPgIACgSQACgSgCgcIgfgFQgUgEgYAAQgnABgUALg");
	this.shape_5.setTransform(-210,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// れ
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AjgDAIgdApIgbAoIghAxIhuhKQAkghAggkQAggjAhgrQAhgrAkg4IADhcIgyARIgqAQIgvAQIg1h0QBCgKAxgPQAxgOAdgMIADjlIBqALQANACAHACQAHACAAAHQgBAEgHAGIgLALQgEAGgCAlQgDAkgCA9IBEBBIgXAvIApglQAZgWAcgWQAegWAfgOQAegQAbAAQAcAAAaAPQAbAOARAcQATAdAAAqIgBAWIgDAvIgKBmIgHBNIgDAuIgBAcQAAArAJAPQAJAOAWgBQAWAAAdgSQAdgSAiguIAgB4QgkAogtAcQgrAcg2ABQgtgBgagVQgagXgLggQgLgfgCgbQgDgcABgLQAAgRADgmIAHhVIAGhUQADgoAAgSQAAgOgCgQQgEgRgJgLQgJgMgSgBQgeABgkAdQgiAcgnAtQgnAqglAvIABCJIACB9QABA8ADA9Ih3AHg");
	this.shape_6.setTransform(-319.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// そ
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("ACUHMQgmgGgrgPQgpgOgngcQgsgggVgoQgWgnAAguQAAgHADgaQADgbAQgnQAPgoAhguQAhguA7grIh/AZIiAAYIh3AaIgUAEQgJACgNAFIgXhzIAtgEIBBgGIA9gIQAdgFAKgFQANgGAcgaQAdgaAlglQAlglAjgpQAlgpAdgmQhXASg7AEQg7AFgkgBIguhqIA2ADQAdACAjAAQBRAABNgMQBPgLBNgaIA2BaQgSAOgeAcQggAcgmAkQglAkglAmQglAmgfAjIAxgJIBNgPIAwgKIBHgQIBGgQIAugKIAABzQgpAGgqALQgrAMguAaQgvAbgzAyQgnAmgWAqQgXAqgBAxQABAwAYAbQAWAcAjAMQAjANAkADQAkADAaAAIgWB0QgdgCgngGg");
	this.shape_7.setTransform(-427.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.1,-89.2,870.6,178.5);


(lib.Button_Twitter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuiQ/QgOgFgBgOIAAiDIA9ACQAAAMAHAGQAFADALADIABAOQABAGAFAGQAIAHAJACIAABRQgFADgGAGQgEADgGAAQg4AAgQgEgArLNIQgngUAAhGQAAgIAHgSQAIgSADgBQAGgDAAgEIBRACQAHACAOAQQAIAFAIAIQALAIAmAKIAAA5IgNAiQgEANgXAAQhWAAgagNgAqeImQlhg5i1h6QAzgpCfgbIEGgrQD6g4CFg3QBigogBgTQABgJgDgHQgHgPgUAAIgKAAQgEgBgFgDQhOgqhDgkQi+hujDiOQDyAVAKAAQARAAAIgEQANgHAAgRQABgIgIgJQgIgLgQgFQhDgVgRgJQgjgTgogxQhPhfgdg/QgUg9gTgkQBhAnA9ARQAnALAOAAQAJAAAHgEQALgHAAgNQAAgJgfgaQgxgpgagbQhxh6gmi6IJvE9IA+AiQA/AhA+AZQC+BRCTAAQAGAAAIgEQAHgFAFAAQAHAAANAPQAMAPATAAQAIAAAGgEQAMgHAAgQQAAgPgYgVQgggagTgRQhKhEgBhZQAAglAKgrIAJgkIgBgKQABgJAFgVQABgFAdghQAagfAEgDQApgkBAgUQA6gSA9AAQB1AABnBZQBbBOAeBhQAMAVAKAgQAIAaAHAJQAUAZBoAAQBYAAAmgPQAzgVALgBIgPANQhGA5hTAjQggAOgHAFQgOAJAAAOQAAAWAzAXQBBAdBsAFQgcAxiMARQhFAJgUAGQgnALAAAXQAAAFAHAEQAHAEAAAFQAAAKgGAKIglENIgLA5QgFAegCANQgEAjgrBeQg0Bwg0AvQg/A6hXA5QhWA3g0ASQjDBBhpAVQiKAbjQAAQjXAAjoglgAJ7ujQgKAEgBACQgCADgHAFIgMAJIgGAGQgCAEgBAHQAAAgAOAKQAIAGAcAAIAMABQAEAAABgGQgBgMAPgKQAQgKgBgVQABgTgIgGQgHgHgggEQAAADgJADg");
	this.shape.setTransform(149.7,146);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AkZWKQo9hokjhwQjGhMhbkfQhBjKAAj1IAHiHQAHiTADiRIAFAAIAckjQAVjgAAhAIgGgPQgHgQAAgSQAAieAciiQAfi1Avg+QBhh/CjhBQEBhoHbAAQPZAAHEDtQEMCNBBA6QAqAlAQAqQAPAlAAA8QAAAdgwF/Ig3G9QgRCMgrGJQgpFjghCUQggCOgjBWQgrBpg+BBQiKCOkxAAQldAApEhpgAu0PsQABAPAOAEQAQAFA4AAQAFAAAFgEQAGgGAFgCIAAhRQgKgCgHgHQgFgGgCgHIAAgOQgLgCgFgEQgIgGAAgMIg8gCgArjKBQgDABgIATQgHASAAAHQAABHAnATQAaAOBWAAQAWAAAFgNIAMgiIAAg6QglgKgLgHQgIgIgIgGQgOgQgHgCIhRgBQAAAEgGACgAnAhXQBDAnBOAqQAFADADAAIALABQAUAAAGAMQAEAIgBAIQAAAUhhAoQiFA3j7A4IkGArQifAbgyApQC1B6FhA4QDoAlDXAAQDQAACKgbQBpgUDDhCQA0gRBVg3QBYg5A/g6QA0gvAzhwQAshcAEglQABgOAGgeIALg5IAlkMQAGgKAAgKQAAgFgHgEQgHgEAAgFQAAgYAmgLQAVgGBEgIQCMgRAdgxQhsgGhBgdQgzgXAAgWQAAgOANgJQAIgFAggNQBTgjBGg5IAPgOQgMACgyAUQgmAQhYAAQhoAAgUgaQgHgIgIgbQgKgfgMgWQgfhghahOQhnhah1AAQg9AAg7ATQg/AUgpAjQgEAEgbAfQgcAhgBAFQgGAUAAAJIABAKIgJAlQgKArAAAkQAABZBLBEQATARAgAbQAYAVAAAPQAAAQgMAGQgGAEgJAAQgSAAgMgOQgNgPgHAAQgFAAgIAEQgIAEgFAAQiTAAi/hQQg9gahAghIg+ghIpuk9QAlC6ByB5QAaAcAwAoQAgAbAAAJQAAANgLAGQgHAEgJAAQgOAAgngKQg+gShggmQASAkAVA8QAcA/BPBgQApAwAjATQARAKBCAUQAQAFAJAMQAHAJAAAHQAAASgNAGQgJAEgQAAQgKAAjygVQDDCOC+BugAKAuLQgbAAgJgGQgNgJAAghQAAgHACgDIAHgHIAMgIQAGgFACgEQACgCAJgDQAJgDAAgEQAgAFAIAGQAHAGAAATQAAAWgPAKQgPAJAAAMQAAAHgEAAIgNgCgA1lx9IAKgUIgTA4QgBgMAKgYg");
	this.shape_1.setTransform(150,152.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,304.7);


(lib.Button_Hatena = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJfNpQgUgGg0gXQglgQgZggQgZghAAgfQAAgEADgOIACgSQABgSAGgUQAIggAQgQQAkghAlgHQAYgGAEgUQAagIArALQAYAGAnANQBPAWAVAeQARAaAABRQAABYgbAcQglAjh8AAQgaAAgNgDgAqPNMQimgZiFg+IAqjnQALgDAHgOQAHgKgBgGIBv1UQAJACAngCQBEgEBdAAQDvAACfBKQBrAyBVBiQBTBbAJALQA0BDAAApQAAAxgmAiIggAgIjPCjQgHAGgGALQgEAIgBACQABALATAJIA3AWQBjArBcBZQAvAuARBOQAKAwAABUQAABygZBnQgdBxg0BDQhbB2hlAiQhKAainAAQi7AAiMgXgAnwBRQgJAEgHALQhFAEgEACQgCABgHAZQgBAngFAcIgGAcQABARgGAXQgGAWAAAXQAAAwgHAcQgFAbAAAQQAABKgHAfQgIAgAAAHQAAAlAsAIQASAEBZAAQA5AABZgLQBhgMAcgNQBBgeA/hKQBKhXAAhRQAAhviVhCQiCg7ixAAQgMAAgIAFgAorquQgCASgBA6QgKB4gCAHIgLAuQgEAWgFAQQgDAMAAAgIgHAWQgGAVAAADQAAARAQAEQAQAFA6AAQC5AABvgoQCBgtAAhbQAAhAgdgqQgRgYgrgiQhOg6hRgQQgfgGgqACQgZACgvgHIgugHQgVABgEAagAJKEgIiHgFQgDg6gFhgIgEhcQAAg0AMiLQAPi0AtmhQAFATAMAKQAJAJALgBQAGABACgDQABgFABgBQAKgJBGAAICgAKQCdARAAAiQAAANgMCDQgNCDgBAFIgoHkQgHBGgBBCQgBAzgCAMQiEgBiggEg");
	this.shape.setTransform(161.5,143.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("APJWWQiLgFlagkQicgTrthkQrXhggngGQjkglhYinQhDh/AAkCQAAk6AvluQAUiYBQnwQAIgyAJh4QAIh3gBgvQAAhJAKgsQAUhRA7gsQAPgMAygUQA0gVAjgJQAygMDXgPQDfgPCgAAQH3AAIeBQQIwBSCyBrQA0AfA6BQQA9BTAWBPIASBGQAUBRAQBZQAzEZAAD/QAAD7gUCnQgMBwguEpQgaC7hpE5QgYBHgmAwQgUAZgtAnQgoAjidAAIhFgCgAJ0IgQgEATgYAGQglAIgkAhQgPAPgJAgQgFAVgBASIgDASQgDANAAAFQAAAfAZAgQAaAgAkAQQA1AYATAFQANADAaAAQB9AAAkgjQAbgcAAhYQAAhRgRgaQgUgehQgWQgngNgYgGQgYgGgTAAQgPAAgLAEgAtMHsQAAAGgGALQgIANgKADIgrDnQCFA+CnAaQCLAWC7AAQCoAABJgZQBlgjBbh2QA0hDAdhxQAahnAAhyQAAhTgKgxQgRhOgwguQhchZhjgrIg3gWQgTgJAAgLQAAgCAFgIQAGgLAHgGIDOijIAhgfQAlgiAAgyQAAgpg0hDQgJgLhShbQhWhihrgyQifhKjvAAQhdAAhEAEQgnADgIgDgAHuiaQgMCKAAA0IAEBcQAGBgACA7ICHAEQCgAFCEAAQADgMAAgyQABhCAHhHIAonjQACgGAMiDQANiDAAgNQAAgiiegRIiggKQhGAAgKAJQgBABgBAFQgBADgHAAQgLAAgJgIQgMgKgFgUQgsGigQC0gAotJoQgrgJAAglQAAgHAHggQAHgfAAhKQAAgPAGgcQAGgcAAgwQAAgWAGgXQAGgXAAgQIAFgdQAFgcABgnQAHgZACAAQAFgDBEgDQAHgMAJgEQAIgFAMAAQCxAACDA7QCSBCAABvQAABRhIBXQg+BKhBAeQgcANhhAMQhaALg5AAQhZAAgSgDgAojkgQgQgFAAgQQAAgEAHgVIAGgVQAAghADgLQAFgRAFgWIAKguQACgHAKh4QACg6ACgSQADgaAVAAIAvAGQAuAHAZgCQAqgCAfAGQBRAQBOA7QArAhARAYQAdAqAABBQAABaiAAtQhwAoi5AAQg6AAgQgEg");
	this.shape_1.setTransform(157.1,143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314.3,286.5);


(lib.Button_GooglePlus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtGPtQiphzAAimQAAhdBYhPQBVhNCagzQB9gqBogXQBMgRBcgMQAhgEAOgQQAJgLAAgNQgBgKgTgQQgdgUgQgOQhBg2AAhJQAFg5gCgTQgEgagkAAQgOAFgfAHQg9ANhWAAQhaAAhkgXQiGgghKg/Qg5gvgehnQgXhQAAhRQgBi3DJilQAggiARgQQAggeBCgbQAcgLAbgPQAOgIAggHQG2hfBMgWQCjgwCqgqQiOCZhcAmQgNAGgfAIQgMADgBAKQAAALAKAOQAHAMAHAEQAUAPAzAtIBBA3QBnBeAABqQAAA7g+BNQg4BGhOA3QguAgg5AbQgiAUAAAkQAAAcAgAkQAUAYA3AwQB8BsAjBDQAfA8A3AuQAfAaA9ArQAyAnAWAqQAeA4AABYQABBjhLBrQhIBqhmA0QibBSifA1Qi6A9h+AAQjBAAidhqgAnRG7IhMAWQhgAXhJBcQhFBYAABTQAABsA6AyQA6AxB6AAQBVAABwgfQBUgYDNhLQA0gbAMgKQAJgGCfiIQAPgMAMgZQAKgTAAgGQAAgvg+gqQg1gkhOgUQhMgUhmACQhtAHgygCIg2gDIgdgCQgEAAg+ATgAqTsKQgJAKgKATQgMAWgDAOIgZBXQgGAUAABTQAABeAMArQAIAbAZBDQALAgAcAXQAWARAOACIASAXQALALAPAAQC9AAAzg9QBKhXAMgVQAwhJAAhLQAAhJgRguQgJgVgqhHQg6hggRgQQgPgPgoAAIgQABIhpAPQgsACglASQgdARgCAAQgKgCgHgBIgCAAQgOAAgJALgAKDCFQAHjhgNg2QgEgWgKgEIgUAAQiFAFgmgBQAOAAAAghQgDgoAAgPIgDgeQBegDAlgEQATgCAAgBIBbACQgEgNgCglQgChJASibQAxgFAVATQAOANAAAcQAABngGAiIgHAeQABARAYAJQASAGBDALQA1AJBYAKIBSAJIAAB+Ig+ABQggAAg/gIQhAgIgxAAQgXAAgIAgQgHAhAABnQgBAHgEATQgFAUgEAIQgDAEgCAXQgEAkgEAaQgzgBhCgJg");
	this.shape.setTransform(152,148.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqGU1QqXhYhVieQg4hogIgkQgMgzgSjvIgjnRQgQj5AAkLQABifAOixQAJiCAWixIgIAIQgEADgIABQgXAAgBgvQAAhVBJhaQBShmB9ghQFGhYLEAAQK+AAFtBHQExA7DDCNQA1AlAhAxQAoA8AUBXQAUBbAMCCQARDGAAE3QAAFXggE8QgtG0heC5QglBmhKA/Qg7AzhAAQQhPASh+ANQjjAYlFAAQoDAAn8hEgAl3BtQACASgFA6QAABJBBA2QAQAOAdAUQAUAQAAAKQAAANgJAKQgOAQghAEQhbAMhMASQhpAXh9AqQiZAyhVBNQhYBQAABdQAACmCpByQCdBrDBAAQB+AAC5g+QCfg0CbhSQBng1BIhpQBKhrAAhjQAAhZgeg4QgWgpgzgoQg8gqgggaQg2gugfg8QgkhDh7huQg4gxgUgVQgfgkAAgcQgBgkAjgUQA4gbAuggQBPg4A3hFQA+hOAAg7QAAhphmheIhAg3Qg0gtgVgPQgGgFgHgMQgKgNAAgLQAAgLAMgDQAfgIANgFQBcgmCOiaQipArikAvQhLAXm2BeQggAIgOAIQgbAOgcAMQhDAbgfAdQgRARghAiQjICkAAC4QAABRAYBQQAdBnA5AvQBLA9CFAgQBlAZBaAAQBWAAA9gNQAfgHAOgHQAkAAADAcgAJahXQAKAFAFAVQAMA2gHDiQBCAIAzACQAEgaAEgkQADgXADgEQAEgJAFgTQAEgTAAgHQAAhnAHghQAIggAYAAQAwgBBAAJQBAAHAgABIA+gBIAAh+IhTgJQhYgKg0gJQhEgLgSgGQgYgJAAgRIAGgeQAHgjAAhnQgBgbgOgNQgUgTgxAEQgSCcACBJQABAlAFANIhcgCQAAABgTACQglAEhdADIACAeQAAAPADAoQAAAggNABQAlABCGgGIATAAgArlPjQg7gyAAhsQAAhUBGhXQBJhcBggYIBLgVQA+gTAEAAIAeACIA2ADQAxACBtgHQBngCBLAUQBOATA2AlQA+ApAAAwQgBAGgJATQgMAZgPAMQieCIgIAGQgOAKg0AbQjOBKhUAZQhvAfhWAAQh5AAg6gxgApehtIgSgXQgOgDgWgRQgcgWgMggQgZhDgHgbQgMgrgBhfQAAhSAHgVIAZhWQACgPAMgVQALgUAIgKQAKgLAPABQAIAAAJADQACAAAegSQAkgSAtgCIBogPIARAAQAnAAAPAPQARAQA6BgQArBHAIAVQARAtAABKQABBKgwBKQgNAUhKBYQgyA9i9AAQgPAAgLgLg");
	this.shape_1.setTransform(154,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308,280.3);


(lib.Button_FaceBook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjKQJQgtg/AAiJQAEl/ADh5QAbm7AAgjQAAhAgYgeQgYgdgzAAQgMAAgWADQgyAIgVAAQg+AAgygrQgygsAAg2QAAgmAjgTQApgWB4gRQBMgLBNgHQAmgJAAgrIgFgTQgGgVAAg/QAAiYBkh6QBviJCxAAQBiAABPAzQBGAtAoBKQAmBFgDBBQgEBDgtAeQgJAGg0AIQgrAHgOABQg5AFg2A8QgyA3gBApQExCQAYANQAUAMARANQAZANAIAcQAEAPgBANQAAAmgmAgQguAmhNAAQgsAAhpgcQhqgcgOAAQhPAAgWEzQgGBRgDE2QgEE8gVBuQgcCahYAAQhBAAgkgyg");
	this.shape.setTransform(207.9,149.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("Aq9TsQn3hJh1iHQg6hEgghDQglhNgVhwQgnjQgMozQAHgKAag2QgBgIgEgdQgGgdAAgJQAAgHAghdQAehXAZhDQAvh+Azh3QBGifAPgcQAPgbAFgLQAKgZA3hCQBAhPApgSQB5g2BsgoIDHhIIAkgOIA0gYIAdgOQAUgIAWAAIB7ABIBhAAQBEAEC8AAQDKAAB4AFQGmASETBkQBrAmBnBIQBzBPArBNIAYAwIAUAtIALAtQAKAtAEAVQASCCAMDUQAKC3gBCIQAAGUgcEOQgwHDh/CmQgfAphBAQQgnAKhDACQobAWlHAAQoPAAmng9gAE+hIQAYAdAAA+QAAAjgbG+QgCB5gFF/QABCJAtA+QAkAzBBAAQBYAAAeiaQAUhuAEk8QAEk3AFhQQAXkzBPAAQANAABqAaQBqAbAsAAQBNAAAtgkQAmgfAAgmQACgOgFgOQgHgcgZgOQgRgNgVgMQgXgMkxiQQABgqAyg3QA2g7A5gGQANAAAsgHQA0gIAJgGQAtgeADhDQAEhBgmhGQgohJhGgtQhPg0hiAAQixAAhxCKQhkB5AACYQAABAAGAUIAEATQAAAsgmAIQhMAHhNALQh3ARgqAXQggATgBAlQAAA3AxArQAyArA9AAQAVAAAzgHQAWgDAMAAQAzAAAXAdg");
	this.shape_1.setTransform(152.1,132.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.2,264.3);


(lib.tw_ball_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.298)").s().p("AA5UfQiJgHg6gFQhtgJhVgQQjEgminhdQiwhih2iSQgmgvgohAQgUgfgzhVQhLh/gkhRQhVjBgFjfQgFjWBGjQQBCjHCCi1QB7isANASIBmjJQBfhRCBgyQB1guCLgSQB1gPCQAEQBjADChAPQB+ALBUAMQByASBbAcQEhBZDPD2QDNDzAwEwQAQBoAACaQAAH1i9FdQhtDJipCLQi0CUjRAtQheATh3ACIgVAAQhGAAh8gFg");
	this.shape.setTransform(134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,263.4);


(lib.tw_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AA5UfQiJgHg6gFQhtgJhVgQQjEgminhdQiwhih2iSQgmgvgohAQgUgfgzhVQhLh/gkhRQhVjBgFjfQgFjWBGjQQBCjHCCi1QB7isANASIBmjJQBfhRCBgyQB1guCLgSQB1gPCQAEQBjADChAPQB+ALBUAMQByASBbAcQEhBZDPD2QDNDzAwEwQAQBoAACaQAAH1i9FdQhtDJipCLQi0CUjRAtQheATh3ACIgVAAQhGAAh8gFg");
	this.shape.setTransform(134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,263.4);


(lib.hb_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AA5UfQiJgHg6gFQhtgJhVgQQjEgminhdQiwhih2iSQgmgvgohAQgUgfgzhVQhLh/gkhRQhVjBgFjfQgFjWBGjQQBCjHCCi1QB7isANASIBmjJQBfhRCBgyQB1guCLgSQB1gPCQAEQBjADChAPQB+ALBUAMQByASBbAcQEhBZDPD2QDNDzAwEwQAQBoAACaQAAH1i9FdQhtDJipCLQi0CUjRAtQheATh3ACIgVAAQhGAAh8gFg");
	this.shape.setTransform(134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,263.4);


(lib.gp_ball_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,204,255,0.298)").s().p("AA5UfQiJgHg6gFQhtgJhVgQQjEgminhdQiwhih2iSQgmgvgohAQgUgfgzhVQhLh/gkhRQhVjBgFjfQgFjWBGjQQBCjHCCi1QB7isANASIBmjJQBfhRCBgyQB1guCLgSQB1gPCQAEQBjADChAPQB+ALBUAMQByASBbAcQEhBZDPD2QDNDzAwEwQAQBoAACaQAAH1i9FdQhtDJipCLQi0CUjRAtQheATh3ACIgVAAQhGAAh8gFg");
	this.shape.setTransform(134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,263.4);


(lib.gp_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AA5UfQiJgHg6gFQhtgJhVgQQjEgminhdQiwhih2iSQgmgvgohAQgUgfgzhVQhLh/gkhRQhVjBgFjfQgFjWBGjQQBCjHCCi1QB7isANASIBmjJQBfhRCBgyQB1guCLgSQB1gPCQAEQBjADChAPQB+ALBUAMQByASBbAcQEhBZDPD2QDNDzAwEwQAQBoAACaQAAH1i9FdQhtDJipCLQi0CUjRAtQheATh3ACIgVAAQhGAAh8gFg");
	this.shape.setTransform(134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,263.4);


(lib.fb_ball_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,255,0.4)").s().p("AA5UfQiJgHg6gFQhtgJhVgQQjEgminhdQiwhih2iSQgmgvgohAQgUgfgzhVQhLh/gkhRQhVjBgFjfQgFjWBGjQQBCjHCCi1QB7isANASIBmjJQBfhRCBgyQB1guCLgSQB1gPCQAEQBjADChAPQB+ALBUAMQByASBbAcQEhBZDPD2QDNDzAwEwQAQBoAACaQAAH1i9FdQhtDJipCLQi0CUjRAtQheATh3ACIgVAAQhGAAh8gFg");
	this.shape.setTransform(134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,263.4);


(lib.fb_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AA5UfQiJgHg6gFQhtgJhVgQQjEgminhdQiwhih2iSQgmgvgohAQgUgfgzhVQhLh/gkhRQhVjBgFjfQgFjWBGjQQBCjHCCi1QB7isANASIBmjJQBfhRCBgyQB1guCLgSQB1gPCQAEQBjADChAPQB+ALBUAMQByASBbAcQEhBZDPD2QDNDzAwEwQAQBoAACaQAAH1i9FdQhtDJipCLQi0CUjRAtQheATh3ACIgVAAQhGAAh8gFg");
	this.shape.setTransform(134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,263.4);


(lib.Nobuteru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.face();
	this.instance.setTransform(-38.9,0,2.106,2.106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,0,77.9,111.6);


(lib.TextShare_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AGggBIBsgHAgRg1QgPAVAWA8ACKgcIgJAIAkOgBIAABWAn9hUIgOBi");
	this.shape.setTransform(60.8,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AFzADIC3gVAIMgnIiyAWAFqASICdgcAgviOQgFBzAWA8QAWCHAQArADfgoQgvAXg6gFIgJAIAoTjSQANAUABAiQABAigWAfQgWAfALAWIAGBTAlFisQAiA7ABB0IAUCO");
	this.shape_1.setTransform(62.8,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AGQA3IC2gWAGaBqICdgfAIjgGIixATACTAcQA6AGAvgYIgCAmAgEjNQgUDlAWA+QAUCGA/BoACTAcIgKAIACTAcIAAAjAkGA3QAiBBADgjQAAA9AFB/AkJizQAgBqADCMQABAAgBABIAFARAn8lDQASC5ABAiQACAigWAfQgWAgAKATIAGBVIhCBmAkGA3IAPDQAkzi9QAsCAABB0");
	this.shape_2.setTransform(60,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AG8AXQCnA4jKAtICdgfAIxghIixAVQDpABitAiICYAIAEKAIQAngSABgKAEKAIIANCTAAKBUQAWCGA/BnAgZA2QANDqA9AmAgZA2IAjAeABmAEQgSgHBNAdIgKAIAChAaIgFCgAj3A1IAPDQAntlFQASC5gRAbQgRAbgLAjQgLAkAYAZIAHBVIAhCJQg1gghLA8Ai5icQgiBRAECMQAAAAAAABIAFAQAj3A1QAhBAAEgjQgBA+AkBmAEKAIQgvAYg6gGAkki/QArCAACB0AgZA2QgthGBPi/QgTDkAUA/");
	this.shape_3.setTransform(58.5,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AFzAeQDaA6jaAtID9AhADuAQQAngSAMgzAI5g9IjGAHQDaAzjaAhIDLADADuAQIA1EBAg0A+QgkDNBtBCAg0A+IBBATQgICQBxA2ABfhbQgmBdBMAgIgJAIACFAiIAzESAkTA9IgKCsAm+lMQg5DIgRAaQgQAbgMAkQgLAjAZAaIBgAsQA2CFhQAyQhUglhLAUAiPhoQhnAlADCLQAAABAAAAIAFARAkTA9QAiBAADgjQgBA9A9BIADuAQQgvAXg6gFAg0A+QguhHBRi+QgUDkAyA0AlyifQBeBoABB0");
	this.shape_4.setTransform(61.3,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("AJphgIkMgIQCBAuiBBSQCYA6iYBhIEHgDADYANQAngSgIgyADYANIAcDFAFdAYIDzAFABvAfIgJAIACvhdQghgCgnALQhEBUBMAfIAVDDAhKA7QgthGBQhbQgUCABLAhQgfCkBMg5AilhqQhnAkBnBuQhgBsA9BJAhKA7QgjDNA8gIAhKA7IBaAAAm2j/QhXB4gnAJQgnAKgLAjQgMAkBGA8QCOhYguCFQB2CqiQAMQhUglgehaAlWArQg1CXBYAlAlWArQBQBRBhhUADYANQgvAYg6gGAmIihQBeBngsBl");
	this.shape_5.setTransform(63.5,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("AEBgRQAngUAggpQhIhFhwAfIAIB0IgJAHAEBgRIA1CbAGGgHIAACaICtgEAIkiLIieACIAACCICZAFAghAbIAhihIA5CgIAtBrAh8iLIAACSIAACNACYAAIALCPAghAbIBagBAghAbIgKB5AktALIgFCEAktiLIAACWICxgEAmNhIQgUhZg4AIQg4AIgVAZQgjAqBGA/IBgAqQBlBCiJA5QhKAXgehbAEBgRQgvAVg6gE");
	this.shape_6.setTransform(59.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TextMenu_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AE9BQQAMhiBXASQBYAPBsA8AmlgiIhLDLIhzi3AjxBgIAAkIAAWgSICgg7");
	this.shape.setTransform(64.3,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AG+hBQANgEAUACABzhRIBAgYAlmALIgtBfIhLgjAiUAhIAKhe");
	this.shape_1.setTransform(55,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AGLCYQAMiMBXASQBYARgWBjAAohRIA8BdICgg6IBQB2AioDtIAFhuIAAkHIgKhkAkliOIh9FXIiRlX");
	this.shape_2.setTransform(56.5,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AA5hSIBQhCICgENIA8gzAGcAUQAPBrBcACQA5AAALhoAjsg7IgohVIh9FXIiRlXIgoBnAiSgFIAAiFIAeg8AiSgFIAACDIAjA7AiSgFIA3AA");
	this.shape_3.setTransform(54.8,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("ACYAlIAAi3ICgEMIAAiyAGhhHIAKBdQAPBqBcADQA5AAALhpIgFhmAjJALIg8iZIh9DfIiRjfIhGDIAiDgEIAACDIBzBGAiDgEIAAiEIBug8AiDgEIB9ge");
	this.shape_4.setTransform(53.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("ABzCKIAAkSICgENIAAkDAF8iNIAKCuQAOBqBcADQA6AAALhpIAFitAkrB6IAAj+IiHDgIiHjgIAAEFAipAFIAAiDIC9AAAipAFIAACFICuAAAipAFIClAA");
	this.shape_5.setTransform(57,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-1,127.5,38.9);


(lib.TextHome_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AADgaIgFA1");
	this.shape.setTransform(1.6,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AGHgFIAFATAE3gIIAHAnAB7AbIADAoAhPBOQAugLgTAAQgRAAgKALgAhUBPQADAAACgBAmLhOIADB/");
	this.shape_1.setTransform(40.6,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AGRAAIgBBHAFBAAIACBZAB2AiIAMBaAgjB/QAIgDgVAAQgjAAgjAAAmQh+IAMDp");
	this.shape_2.setTransform(40.2,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AGHg0IAKB8AB2gcIANCaAE8g7IAHCVAmHgXIAugEAgJBiQgSAcgUAAQgkAAgZgkIgKgOAmQh9IANDp");
	this.shape_3.setTransform(40.1,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AEyh/IARDbAGMhtIAFC4AB2hkIANDkAAYAtQgzBTgUAAQgkAAgZgkQgZgiAAgyAmHgVICXgEAmQh6IANDo");
	this.shape_4.setTransform(40.1,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("AEfh6IARDbAF5hpIAEC4AD6g3IAhhMABvhgIAaAwAAOgLQACALAAANQAAAxgXAjQgZAjgjAAQgjAAgZgjQgZgjAAgxABjhgIAMDkAj9hEIgBA0AmagQICXgEAmjh2IANDpAFxh6IAdgGAGBBlIAjgKAGBgUIAVgE");
	this.shape_5.setTransform(42,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("AEKh6IAQDbAFkhpIAEC5ADfAEIAmiHABahgIA9BvAglhRQAEAFAFAGQAZAjAAAwQAAAygZAiQgZAkgjAAQgjAAgZgkQgZgiAAgyQAAgwAZgjQADgEAEgFABNhgIANDlAmwgQICXgEAkRh6IgDCXAm4h1IAMDoAFsBmIBNgXAFsgUIBAgJAFch6IA2gK");
	this.shape_6.setTransform(44.2,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("AA3heIAMDlAgaAPQAAAygZAiQgZAkgjAAQgjAAgZgkQgZgiAAgyQAAgwAZgjQAZgjAjAAQAjAAAZAjQAZAjAAAwgACuBmIADAGAFNhnIAEC5ADzh4IARDbACuBmIBAjnABDheIBrDEAnHgOICXgEAkoh4IARDxAnPh0IAMDpAFFh4IBOgOAFVBnIB7gjAFVgSIBbgO");
	this.shape_7.setTransform(46.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,17.8,4.8,9.5);


(lib.IconShare_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AgQAXQgHgJAAgOQABgFABgGIADADIgDgEIABgCQACgEACgEQAIgKAIAAQAJAAAIAKQAGAKABAMQgBAOgGAJQgIAKgJAAQgIAAgIgKg");
	this.shape.setTransform(93.1,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AERDJQgSgaAAglQAAgTAFgPIAHAJQgHgLABgBIAAgDQAFgMAHgKQATgaAbAAQAbAAASAaQATAaAAAkQAAAlgTAaQgSAagbAAQgbAAgTgagAl4ioQgGgJAAgPQAAgOAGgKQAGgKAIAAQAJAAAFAKQACADAAADIACgBIAAABIgBABQADAIAAAJQAAAIgBAHIABACIgBACIgBACIgBACQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAgBAAQgFAKgJAAQgIAAgGgKg");
	this.shape_1.setTransform(61.1,72.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020202").s().p("ADiDuQglgoAAg6QAAgeAKgYIAOAPQgNgSAAgCIABAAIACgEQAIgSAPgRQAkgoA0AAQAzAAAkAoQAlApAAA5QAAA6glAoQgkAqgzAAQg0AAgkgqgAmgh/QgUgagBglQABglAUgaQAUgaAcAAQAdAAAUAaQAGAIAAAHIAGgDIABABIAAADIAAAAIgBACQAIAVABAYQAAAWgHARIAEAEIgDAGIgDAGIgBAGQgIgBgDADQgUAagdAAQgcAAgUgag");
	this.shape_2.setTransform(61.7,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020202").s().p("AAkG2QhXhTAAh2QAAg9AWgzQABgBAgAgQgdglABgDIABgBIADgHQAUgnAkgiQBZhRB+AAQB+AABYBRQBaBUAAB2QAAB2haBTQhYBUh+AAQh+AAhZhUgAoGAHQgkgoAAg8QAAg7AkgqQAkgrA0AAQAzAAAkArQAKALABAMIALgFIAAABIABAFIABABIgEADQARAhAAAoQAAAigMAdIAIAGIgFAKIgHAKQgCADAAAEQgOgBgFAFQgkAqgzAAQg0AAgkgqgAC+nGIgEgIIgBABIAAgBIgCgBIgBgCIAAgCIAAAAIABgPQAAgQAHgLQAHgMAIAAQAKAAAGAMQAIALAAAQQAAARgIALQgGALgKAAQgIAAgHgLg");
	this.shape_3.setTransform(67.9,62.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(15.8,1,1).p("AAgAOIg+gb");
	this.shape_4.setTransform(63.7,75.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020202").s().p("ABsHsQhUhZAAh+QAAgxANgsIADgMIAGgNQAAgCiDgyQCGAsAAgDIABgBIAEgGQAUgrAigkQBShXB2AAQB2AABSBXQBUBZABB+QgBB+hUBZQhSBah2AAQh2AAhShagAoSBdQg+g9ABhVQgBhWA+g9QA9g+BWAAQBXAAA9A+QARAQACARIARgHIAAACIACAHIABABIgGAFQAdAvgBA7QAAAygUAnIAOAJIgIAOIgMAPQgCAFgBAIQgYgCgIAIQg9A+hXgBQhWABg9g+gACllXQgOgOgIgQIgIAFIgDgDIgHgFIgFgGIgFgHIgBgBQAMgfAAgVQAAg5AngpQAngoA2AAQA4AAAmAoQAnApAAA5QAAA6gnApQgmAog4AAQg2AAgngog");
	this.shape_5.setTransform(63.2,58.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(15.8,1,1).p("AhSglICmBM");
	this.shape_6.setTransform(60,72.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020202").s().p("AB+IJQhNhQABhyQAAg3ARgvIACgFIAEgJIAEgHQASgnAfggQBOhPBuAAQBsAABOBPQBNBRAABxQAAByhNBQQhOBRhsAAQhuAAhOhRgAoDCPQg+g9ABhVQgBhWA+g9QA9g+BWAAQBXAAA9A+QARAQACARIARgHIAAACIACAHIABABIgGAFQAdAvgBA7QAAAwgUApIAOAJIgIAOIgMAPQgCAFgBAIQgYgCgIAIQg9A+hXgBQhWABg9g+gACBj0QgVgVgOgYIgNAIIgDgEIgMgIQgEgCgEgHIgHgLIgCgBQATguAAggQAAhWA9g9QA9g+BXABQBXgBA8A+QA+A9AABWQAABXg+A9Qg8A9hXAAQhXAAg9g9g");
	this.shape_7.setTransform(61.7,53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(15.8,1,1).p("Ahmg3IDOBv");
	this.shape_8.setTransform(60.8,71.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020202").s().p("ADyH3Qg8g3AAhOQAAgpAPghIAEgGIACgGQAPgaAYgWQA8g3BUAAQBVAAA7A3QA8A3AABPQAABOg8A3Qg7A4hVAAQhUAAg8g4gAn5DyQhUhUAAh4QAAh2BUhVQBWhVB4AAQB4AABVBVQAYAYADAYIBTgkIgCABQhAArABABQAoBCAABQQAABEgcA6IgBABIgBACQgUAogjAjQhVBWh4AAQh4AAhWhWgADKjJQgWgWgOgXIgUANIgQAKIgeATIAAgBIgFgLQAthTAAgyQAAhWA+g+QA9g9BWAAQBXAAA9A9QA+A+AABWQAABWg+A+Qg9A9hXAAQhWAAg9g9g");
	this.shape_9.setTransform(54.4,49.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(15.8,1,1).p("AhfjLQgCACgCABAhYBkIC8Bo");
	this.shape_10.setTransform(61.2,57.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020202").s().p("ADgH+QhFhAAAhbQAAgvASgnIADgIIAEgFQAQgeAcgbQBEg/BhAAQBhAABEA/QBFBBAABbQAABbhFBAQhEBAhhAAQhhAAhEhAgAoSEOQhchnAAiQQAAiPBchnQBchmCDAAQCCAABcBmQAcAfCZg6IgjAaIgYAQIAAABQhJA0ABACIAHAPQAiBKAABXQAABLgXA/IgGAOIAAABIAAAAQgXAygnAsQhcBniCAAQiDAAhchngADNjYQgVgWgOgXIgVANIgQAKIgdATIgBgBIgFgLQAuhTAAgyQAAhWA9g+QA9g9BXAAQBWAAA9A9QA+A+AABWQAABWg+A+Qg9A9hWAAQhXAAg9g9g");
	this.shape_11.setTransform(54.1,51);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(15.8,1,1).p("AAQjnIh9BJAhjB1IDRBz");
	this.shape_12.setTransform(60.2,54.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020202").s().p("ADGH+QhEhAAAhbQAAgvARgnIADgIIAEgFQAQgeAcgbQBFg/BhAAQBgAABEA/QBFBBABBbQgBBbhFBAQhEBAhgAAQhhAAhFhAgAoDDuQhRhZgBh+QABh8BRhZQBShaBzABQB0gBBSBaQAYAaASAeIACAEIACAFQAkBDgBBRQAABFgZA6IgBAFIgBACQgUArgiAmQhSBah0AAQhzAAhShagAC/jNIgJgMIgDgHIgSgcQgDgLgHgMIgghBIgBgYQAAhWA9g+QA9g9BXAAQBXAAA8A9QA+A+AABWQAABWg+A+Qg8A9hXAAQhOAAg6gyg");
	this.shape_13.setTransform(56.7,51);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(15.8,1,1).p("ABZj2IjkCPIgFAEAiBBgIESCX");
	this.shape_14.setTransform(56.7,52.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020202").s().p("ACuIcQg9g9AAhXQAAgsAQgmQAPgkAegdQA9g+BXABQBWgBA9A+QA+A9AABWQAABXg+A9Qg9A+hWgBQhXABg9g+gAn2DQQg9g9AAhXQAAhUA9g9QA9g+BXAAQBWAAA9A+QATASANAUIABADQAdAtAAA7QAAAygUApIgBABQgPAegaAaQg9A+hWgBQhXABg9g+gAi1grIAGgEgABgiGQgagagSgeIgCgCIAAgBQgig8AAhKQAAhxBQhRQBRhPBxAAQByAABQBPQBQBRAABxQAAByhQBPQhQBRhyAAQhxAAhRhRg");
	this.shape_15.setTransform(60.3,47.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(15.8,1,1).p("AA7jtIjGB9IgFAEAiBBXIESCX");
	this.shape_16.setTransform(56.7,53.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020202").s().p("ACcIuQg9g9AAhXQAAgsAQgmQAPgkAegeQA+g9BWAAQBXAAA9A9QA9A9AABXQAABXg9A9Qg9A9hXAAQhWAAg+g9gAoIDhQg9g8AAhXQAAhVA9g9QA+g9BWAAQBXAAA9A9QASATANAUIgFADIAFgDIACADQAcAtAAA7QAAAxgUAqIAAABQgPAdgaAaQg9A+hXAAQhWAAg+g+gAA2hbQgdgegUghIAAAAIgDgEIAAgBQgkhDAAhTQAAiABYhbQBbhaCAAAQCAAABaBaQBbBbAACAQAAB/hbBbQhaBbiAAAQiAAAhbhbgAjBgdIAAAAg");
	this.shape_17.setTransform(62.1,45.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020202").s().p("AC1IVQg9g9AAhXQAAgsAQgmQAPgkAegeQA+g9BWAAQBXAAA9A9QA9A9AABXQAABXg9A9Qg9A9hXAAQhWAAg+g9gAnvDIQg9g8AAhXQAAhVA9g9QA+g9BWAAQBXAAA9A9QASATANAUIgFADIAFgDIACADQAcAvAAA5QAAAxgUAqIAAABQgPAdgaAaQg9A+hXAAQhWAAg+g+gAiog2IAAAAgAByiXQgYgZgRgcIAAAAIgCgDIAAAAQggg5AAhGQAAhrBLhNQBMhLBsAAQBrAABMBLQBMBNAABrQAABrhMBMQhMBMhrAAQhsAAhMhMg");
	this.shape_18.setTransform(59.6,48);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(15.8,1,1).p("ACAkLIkZC1AiRBsIErCg");
	this.shape_19.setTransform(57.8,51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020202").s().p("ADBH8Qg9g9AAhXQAAgsAQgmQAPgkAegeQA9g9BXAAQBXAAA8A9QA+A9AABXQAABXg+A9Qg8A9hXAAQhXAAg9g9gAnoCvQg9g8AAhXQAAhVA9g9QA+g9BWAAQBXAAA8A9QAUATANAXQAdAvAAA5QAAAxgUApQgPAfgbAaQg8A+hXAAQhWAAg+g+gACcjTQgVgWgOgYQgaguABg4QAAhWA8g+QA+g9BXAAQBWAAA9A9QA9A+AABWQAABWg9A+Qg9A9hWAAQhXAAg+g9g");
	this.shape_20.setTransform(58.4,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.7,83.2,4.8,6.6);


(lib.IconMenu_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12,1,1).p("AhaAAIC1AA");
	this.shape.setTransform(64.1,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(12,1,1).p("AltAFILbgJ");
	this.shape_1.setTransform(69.6,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(12,1,1).p("AgbC+ICAgKAnRi9IOjAA");
	this.shape_2.setTransform(69.6,40.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(12,1,1).p("AlbC0IKmgKAqtiBIVbgy");
	this.shape_3.setTransform(67.6,37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(12,1,1).p("AuUiGQNohkPBBkArNC5IUcgK");
	this.shape_4.setTransform(71.6,36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(12,1,1).p("Ag7F/ICAgLAqblJQKHhmKEBcAuXAyIcvhY");
	this.shape_5.setTransform(72.8,55.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(12,1,1).p("AojliQH7hSHuBIArjA3IXHg6AkNGOIHKgL");
	this.shape_6.setTransform(74.8,55.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(12,1,1).p("AnogPIPwAAAprFbITXgWAnSlaIOjAA");
	this.shape_7.setTransform(69.7,55.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(12,1,1).p("An4gPIPxAAAnilaIOkAAAskFbIZJgW");
	this.shape_8.setTransform(71.3,55.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(12,1,1).p("AnLgoIPxAAAm1lzIOkAAAurF0IdXgM");
	this.shape_9.setTransform(66.8,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(12,1,1).p("AntgZIPwAAAqOFlIUdggAnXlkIOjAA");
	this.shape_10.setTransform(70.2,56.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(12,1,1).p("AnclVIOjAAAn9FWIP7gMAnygKIPwAA");
	this.shape_11.setTransform(70.7,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,19.1,30.3,12);


(lib.IconHome_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AgyooIAYgKABBIzIiBgK");
	this.shape.setTransform(72.6,56.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(7,1,1).p("AAAAAIAAAA");
	this.shape_1.setTransform(88.2,112.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(8,1,1).p("Ag7oyICSAAAD/IzIg2AAADIIzInFAA");
	this.shape_2.setTransform(68.1,56.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(7,1,1).p("AgbArIgCAAAAdgqQAEBUg7AB");
	this.shape_3.setTransform(91.2,108.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(8,1,1).p("AjuHtQg6AuB8ATIjvAAAGcIzIjeAAIgBAAAC8IzIlogFAixoyIFgAA");
	this.shape_4.setTransform(69.4,56.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(7,1,1).p("AAChDQCIBtjCAa");
	this.shape_5.setTransform(93.9,105.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(8,1,1).p("Ai3G2QhYBlB8ATImPAAAIjIrIlOAIIlogFAlHoyIKWAA");
	this.shape_6.setTransform(66.9,56.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(7,1,1).p("AgWhrQClC9jDAa");
	this.shape_7.setTransform(93.5,101.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(8,1,1).p("AnkoaIIlgYIGiASANRIrIkMAAIlPAIIlogFAh9E5QhwDiB7ATIregD");
	this.shape_8.setTransform(63.5,56.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(7,1,1).p("AgIiiQBiDKh7B7");
	this.shape_9.setTransform(91.6,96.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(8,1,1).p("AhvIuIl+gDAOUHLIjjBMAJHIrIlOAIIlogFArWokIMZgOILjAmAhrDGQjADnC8CBAp9IoIkWgy");
	this.shape_10.setTransform(63.3,56.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(7,1,1).p("AhSjeQFLC/lLD+");
	this.shape_11.setTransform(96.5,90.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(8,1,1).p("AOwDgIkvCSAh8IuIjtAAIiggmAJjH5IihA1IjWAFIlogFAhGA/QmxE+F7CxAtlokIOcgOIOXAcAqPHOIk+h9");
	this.shape_12.setTransform(64.5,56.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(7,1,1).p("AjdinQDoj8CKEJQCTDwiTDN");
	this.shape_13.setTransform(73.2,83.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(8,1,1).p("AOmh8Il1DBAikIuIjtAAIhziPAHWGGIg8CoIjWAFIlogFAivBnQidEoCoCfAuNmJIOcipINaDBAqjC2IkCiI");
	this.shape_14.setTransform(68.5,56.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(7,1,1).p("Ai5jlIFzANIAAG+");
	this.shape_15.setTransform(69.5,89.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(8,1,1).p("AMVhUIlgAjAjVIuIjtAAIhLnUAGgB4Ig3G2IjWAFIlogFAjgBnIALHHAstkRIMNkhINOE+Anzg5Ij4gP");
	this.shape_16.setTransform(73.4,56.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(8,1,1).p("AioIuIjtAAIAAqfIkbAAIK7nBIKmHFIkbgEIAAKfIjWAFgAizBnIALHH");
	this.shape_17.setTransform(68.9,56.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_17},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.1,-4,21.1,120.7);


(lib.Nanimo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhWBVQAOgYAJgUQAIgVAFgQIAIgbIgEABIgJABIgFABIgIACIgHAAIgCgXIARAAIAMgBIAMgCIAEgVQACgMAAgOIAbAHIADABIAAADIAAABIgCACIgCACIAAAGIgBADIgCAIIgCAIIARgGIARgIIAAAaQgNAFgKACIgQAFQgJAdgLAeQgLAegOAdgAAUBbQgKAAgIgDQgGgEgFgHQgFgHAAgMIAAgFIACgJIAUADIgBAEIAAAFIABADIACAEQADADAGAAIALACIAIAAQAOAAAKgCIAOgCIADAZIgOACIgbABIgGAAIgMgBgAANgPIARgCIALgBIALAAIAPABIAIAAIAAAVQgNgBgQAAQgPAAgSACgAArg8IgLgKIALgJIAKAKIAIAJIgKAJIgIgJgABFhHIgLgKIAKgLIALALIAIAJIgLAKIgHgJg");
	this.shape.setTransform(85.8,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("Ah0BhQAVgCASgJQATgHANgPIgbAAIAAhnICUAAIAABnIgoAAIAAAPQAAAEADADQACADAGAAIAcAAQAGAAACgEQADgEABgGIADgOIAbAQQgBALgDAJQgDAJgGAFQgGAGgJAAIg/AAQgKAAgGgGQgGgFAAgIIAAgiIgmAAIAUAHIADABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgGABQgDAEgJAJQgJAHgQAKQgRAJgZAHgAgpApIBVAAIAAgKIhVAAgAgpAPIBVAAIAAgJIhVAAgAgpgIIBVAAIAAgJIhVAAgAhygPIAAg4IAuAAQgDgIgFgGIgKgPIAagOIAMAQIALAPIgUAMIAyAAIgFgOIgGgMIgIgPIAagMIAIAOIAHANIAGAOIgcAMIAoAAIAMgXIAJgYIAaAJIADACIAEACIACADQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAABIgHACIgEAHIgGAKIgFAIIA0AAIAAA0IgfAAIAAgdIipAAIAAAhg");
	this.shape_1.setTransform(61.4,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AgfB4QgFAAgFgDQgGgCgDgDQgDgEAAgFIAAg2IAcACIAGAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAIgBACIgCACIgBABIgBABIAAAYQAAADADACIAFACIAFABIAiAAQADAAAFgBQAEgBADgGQADgFABgMIAaAPQAAAFgBAGQgCAGgEAIIgEAFQgDADgGADQgGADgLAAgAh2BnQAHgKAFgJIAKgVIAHgQIAaAMIACACQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIAAABIgBABIgEABIgBABQgFALgGAOQgHAOgKANgABPBTQgIgMgIgIIAbgPIAKAMIALARIAMATIgaARQgJgSgJgMgAgCBDIgNgQIAUgOIANAQIALAPIgXAOIgIgPgAh6AjQAHgLAFgLQAFgMADgOQADgRAAgXIAAgSIgBgTIBtAAIAAgOIAAgNIAbABIAHABQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIgDADIgEACIAAAFIAAAIIAAAEIAfAAIgHgHIgJgJIAYgNIAKAJIAKALIgOAJIAkAAIAAAbIhOAAQAEARADAJQADAJADAGIAJgQIAKgXIAZANIAEACIABACQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCABIgBAAIgBABIgMAVIgOATIAJAHQAFAEAEAAQADgBABgDIADgHIABgHIAYANIgCAKIgEAOQgDAHgFAFQgEAFgHAAIgIgCQgHgBgIgFQgJgGgLgKIgMANQgGAGgIAGIgWgVIgvAAIAAAJIgXAAIAAg5IBIAAIAAAtIAMgIQAHgEAKgMIgIgMQgEgJgDgMQgEgMgDgSIhVAAIgBAnQgBAQgDAMQgDANgEAKQgFALgGALgAgqAIIAeAAIAAgMIgeAAgAg/ggIAAgWIBHAAIAAAWg");
	this.shape_2.setTransform(33.8,61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgQAnIAIgDIAIgFIAKgJIAHgKQABgGABgGQgBgDgBgCQgCgDgDgBIgDgBIgJACIgIADIgKAEIgHACIgGgLIAIgDIAMgEIALgDIAMgCIAEAAIAFACIAGAEQADAEABAEIABAIQAAAHgDAJQgDAIgGAHQgFAGgFADIgKAGIgHAEgAAHggIgJgBIgMgCIgBgOIAMADIAJABIALAAIgBANIgJAAg");
	this.shape_3.setTransform(80,41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AgdAkIgEgDQgFgFgDgLQgDgKAAgOIAAgNIABgJIACgIIANAEIACABIAAABIAAACIgCAAIgCAHIAAAIIgBALQAAAIACAHQABAFACACQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAIADgFIACgGIADgEIAJAIIgGAMQgDAGgEADQgEAEgEABIgFgCgAAbgCQgDgIgDgGIgGgLIALgFIAHAKQAEAGADAJQAEAIABANIgNADQgCgLgDgIg");
	this.shape_4.setTransform(69,41.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AgIAuIgHgCIgGgCQgGgEgDgFQgDgFAAgFQAAgIADgEQAEgGAFgEIAMgFIgFgGIgCgEIgBgEIgBgEIgCgIIgCgOIAPgCIAAAIIABAKIACAJIADAGIABACIAIgDIAGgEIAGgCIAJgFIAEAOIgRAHIgPAEIgIAFIgGAEIgFAGQgCADAAAEQAAAEACADQADACAFACIAKABIAQgCIASgDIAAAOIgOACIgSACIgKgBg");
	this.shape_5.setTransform(57.4,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AgwA8IgGgFQgKgJgFgRQgEgRAAgYIAAgVIACgPIADgNIAVAGIACABIACACQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgEABIgCALIgBANIgBASQAAAQADAJQACAJADAEQADADACAAQACAAADgDIAFgIIAEgKIAEgIIAPAOIgKAVQgFAJgGAGQgGAGgHAAQgFAAgDgCgAAtgDQgFgOgFgLIgKgRIATgKIALARQAGAKAFAQQAGANACAWIgWAFQgDgTgEgMg");
	this.shape_6.setTransform(41.6,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AhOBEQAJgHAHgHIALgQIAPAMIACACIABABIgBABIgBAAIgDAAIgBABIgPARIgJAJgAgWBAQgBgIgDgJIAQgEQADAHACAJQADAHAAALIgTADIgBgQgAAyA+IgKgKIAOgMIANAMIAMAPIgPANIgOgSgAALA9IgEgMIAPgGIAEAIIAFAKIADAMIgSAFQgCgKgDgHgAhGAiIAAgSIAUAAIAAgVIgbAAIAAgSIAbAAIAAgUIgGAGIgFAFIgTgJQAMgIAIgLQAIgKAGgKIAVAGIABABIACABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgDACIgDABIgDAFIBpAAIAAARIgTAAIAAAXIAbAAIAAASIgbAAIAAAVIAUAAIAAASgAAYAQIAMAAIAAgVIgMAAgAgCAQIAJAAIAAgVIgJAAgAgfAQIALAAIAAgVIgLAAgAAYgXIAMAAIAAgXIgMAAgAgCgXIAJAAIAAgXIgJAAgAgfgXIALAAIAAgXIgLAAg");
	this.shape_7.setTransform(23.4,40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgMAiIgDAAIgCgKIADABIADAAIAEgBIACgCIADgFIABgGIABgGIAAgEQAAgCgBgDQgCgCgEAAIgDAAIgCABIgFAOIgFANIgHAMIgJgEIAHgLIAFgLIAEgLIgEABIgEACIgEAAIgEgJIAGgBIAFgBIAHgBIAAgFIABgGIAAgGIAKACIACAAIAAABIAAAAIgBABIgBABIAAAAIAAADIgBAEIAAADIADgBIADAAQAEAAACACQACABACAEIABAFIABAFIgBAMQgBAGgCAEQgCAEgCACIgCADIgGABIgEAAgAAMABIAEAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgDgGQgDgGgHgIIAIgFIAEAFIAFAHQADAFACAEQACAEAAABIgBAFIgDADIgEABIgDAAgAAVgVIgDgDIAEgEIAEAEIADADIgEAFIgEgFgAAfgaIgEgEIAFgDIAHAIIgFADIgDgEg");
	this.shape_8.setTransform(81.1,20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AgJAgIAEgFIAGgGIAHgKIAGgLIADgIIABgFIgDAAIgFANIgHAJQgDAGgDADIgHgEIAEgEIADgEIADgGIADgGIABgEIABgDIgCAAIgDAFIAAAEIgJgFIACgCIABgCIgFAAIAAANIAEgBIADgBIAAAHIgCABIgBAAIgEABIAAAeIgKAAIAAgaIgCABIgDABIgBABIgCAAIgBABIgBABIgBAAIAAAAIgBgBIgBgKIAEgBIAFgCIAEgBIAAgOIgEAAIgCAEIgBAFIgJgEIACgFIACgIIABgKIAJABIABAAIAAABIAAABIgBABIAAAAIAAABIAAACIgBACIADAAIAAgOIALAAIABAAIAAABIAAAAIAAABIgCAAIAAABIAAALIAIAAIAAAEIABgEIACgGIABgIIAKABIAAAAIABABIgBAAIAAABIgBABIAAABIgBADIgBACIgBAEIAfAAIAAAMIgBAKIAAANIgCALIgDAHQgBADgEABQgDABgHAAIgFgLIAFABIADAAIADgBIACgCIACgGIABgJIAAgJIAAgMIAAAAIgCAJIgFALIgJAQQgGAHgHAHg");
	this.shape_9.setTransform(68.7,20.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AgFAkIgFAAIgFgBQgDgBgCgCQgCgBAAgEIAAgCIAAgDIgCAAIgEgCIgDgEQgBgDAAgEQAAgGACgDQACgBACgBIAFgCIAEAAIABgEIAAgCIgHAAIgHABIgBgKIAGAAIAEAAIAFAAIAAgKIAAgGIAKABIACABIAAABIAAAAIgBABIgBAAIAAABIAAAJIAFgBIADgCIAEgBIAAAKIgGACIgHABIAAAEIAAAEIAAAEIABABIAAACIAAAFIgDAFIgCAGIAAAEQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAGABIALgBIAGgDIABgEIAAgEIgDgIIAJgDIADAIIABAHIABACQAAAFgCACIgDADIgDACIgHACIgJABIgGAAgAgWAEQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIABABIABABIADgBIACgDIABgEIgBgCIgDgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABgAAWgMIgEgEIgGgFIAGgIIAHAHIAIAHIgGAHIgFgEg");
	this.shape_10.setTransform(60.4,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("AglAmIAAhLIAcAAIAFAGIgBADIgCAEIgEAGIgCAEIgBADIgCADIAEAEIADAGQACAEAAAFIgBADIgBAFIgFAFIgFACIgFABIgEgJIAAAUgAgcAQIACABIABAAIADgBIACgBIACgDIAAgCQAAgFgBgDIgDgFIgEgFIAJgSIgLAAgAgQAlIAAgKIAMAAIAAhAIAlAAIAABAIAFAAIAAAKgAAEAbIATAAIAAgNIgTAAgAAEAFIATAAIAAgKIgTAAgAAEgPIATAAIAAgMIgTAAg");
	this.shape_11.setTransform(51.4,20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AgJBeQgJgCgJgFQgIgGgFgKQgGgJAAgQIABgOIACgMIgOgCIgPgFIAEgXIAMAEIAJADIAKACIAEgNIAFgSIgMgCIgKgCIgLgDIACgaIAMAEIAMAEIAPADIAGgRIAEgNIADgLIAYAKIAEABIACADQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgFABIgEAJIgFAJIgDAJIAKAAIAJAAIALAAIgGAZIgIAAIgKgBIgNgBIgEANIgGAPIAHABIAGAAIAOAAIANgBIgGAYIgIABIgNAAIgJAAIgJgBIgCAKIgBALIABAKQACAGAEAEQAFAEAGACIAIABQAKAAAJgDQAKgEAGgHQAHgIAAgOIgCgOIgEgMIgEgIIAVgJIAGAKQAEAHACAKQADAJAAAMQAAAOgGALQgGAKgKAHQgKAGgLAEQgMADgLAAQgHAAgJgCg");
	this.shape_12.setTransform(32.3,21.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AhGBhIAAhtIgCACIgCACIgCADIgDADIgXgMIAKgLIAKgNQAGgHAFgLQAIgNAEgKIAFgRIAWAHIAEADQABAAAAAAQAAAAAAABQABAAAAAAQAAAAgBAAIAAACIgCABIgCACIgBACIgHAPIgHANIAFADIAAACIAAADIgCABIgCACIgBADIAACFgAAhBGIAJACIAFAAQAIAAACgCQACgCAAgEIAAh5IhVAAIAAgYICBAAIAAAYIgTAAIAACEQAAAJgFAEQgEAEgIACQgJACgOAAgAgcA6IAAheIBEAAIAABOIgsAAIAAAQgAgEATIAVAAIAAgfIgVAAg");
	this.shape_13.setTransform(13.1,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.4,84);


(lib.TealCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(4,1,1).p("AcIAAQAALqoQIOQoPIQrpAAQroAAoQoQQoPoOAArqQAAroIPoPQIQoQLoAAQLpAAIPIQQIQIPAALog");
	this.shape.setTransform(180,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,204,255,0.8)").s().p("A0bUbQododgBr+QABr8IdoeQIeoeL9gBQL+ABIdIeQIeIeABL8QgBL+oeIdIAAAAQodIer+ABQr9gBoeoegAzUzUQoBIBABLTQgBLVIBIAQIBIBLTgBQLUABIBoBIAAgBQIBn/gBrVQABrToBoBQoBoBrUABIAAAAQrTAAoBIAg");
	this.shape_1.setTransform(180,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// レイヤー 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,255,0.498)").s().p("A1hViQo7o6gBsoQABsmI7o7QI7o7MmgBQMnABI7I7QI7I7ABMmQgBMoo7I6IAAAAQo7I7snABQsmgBo7o7gAyOyNQnjHkABKpQgBKrHjHjQHkHkKqgBQKrABHjnkIAAAAQHjnjAAqrQABqpnknkQnjnkqrABIAAAAQqqAAnkHjg");
	this.shape_2.setTransform(180,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,390,390);


(lib.トゥイーン26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EAKcAiaQnwgCkCkBQkGkCgCnmQgBh7APiJQATiFAjilQhrBVh/BnQh9BniwCVQiuCTj/DdQhAB7g5BqIh0DdQg7BvhPCQIpdlMQH9umHfv2QHcv1GwwnIKvEtQjaHkioFwQinFyiTE3QiSE3iZExQA5gxBdhLQBahKB4hlICUh5IIhE6QgrEYgVDHQgVDGAACaQgCETBSB2QBVB5C3gCQDaACC6haQC4haC/jQQC/jTDnlrIFgK/QlYHzl9DvQl4Dtm+AAIgMgBg");
	this.shape.setTransform(6.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.6,-409.9,545.3,819.9);


(lib.トゥイーン23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CE904").s().p("As0c4Qizhni8jSIC6onQCHB9BpBJQBpBMA0AAQA2gDA4h8QA7h7AxjGQAwjGAhjkQAfjkAAjQQADingqhEQgnhFhiACQgWAAgUADQgTAAgtAHIg2AKIhBAKQggACgnAIQjJJujuIbQjwIakAGUIovljQCTjSCWkQQCSkNCCkmQCCkkBgkSQjMAsiwAkQixAjhwATIiCppIFyg/QCJgWBdgRIC1geQBbgPCEgTQBPkXBBkpQBCklAnj/IKMBzQhCEwg4DaQg5DagzCtQBKgHApgCQAsgFApAAQF1AAC4DXQC3DYABG7QgBEcguEyQgsE1hOEQQhPEShiC6QhiC6iCBiQiEBiiRAAQipAAiwhngAYzKrQgTgxgZg0Qh6APiCAdQiBAbh4AiIjxmRQB9g2BPggQBLgiBCgbICehAQiHj1i4kDQi6kEjVjpIHjktQGRGBEmGbQEmGbC3G1IpfGMIgviGg");
	this.shape.setTransform(11.2,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.5,-390.1,519,780.3);


(lib.トゥイーン18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD3CD4").s().p("AptNfQJfg3G1ilQG1iiDuj8QDuj7ADk/QAAkdiDiGQiFiGkWAAQj9AAoWBxQoUBxsBDTQiVAqhcAYQheAVg/AIQg+AIg6gBQg8ABgygIQgxgIg3gQIiWs1QBxA2BJAVQBMAWBWgBQAtAAAvgEQAsgGBMgNIDSgsQFEhHFPg/QFRg+E4gwQE1gxD2gbQD5gdCPAAQJsAGFcFJQFcFKAGJKQACHFkFFZQkDFdoZECQkqCOlKBjQlJBklnA6g");
	this.shape.setTransform(-12.8,48.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.2,-416.9,554.6,833.9);


(lib.TU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD3CD4").s().p("AptNfQJfg3G1ilQG1iiDuj8QDuj7ADk/QAAkdiDiGQiFiGkWAAQj9AAoWBxQoUBxsBDTQiVAqhcAYQheAVg/AIQg+AIg6gBQg8ABgygIQgxgIg3gQIiWs1QBxA2BJAVQBMAWBWgBQAtAAAvgEQAsgGBMgNIDSgsQFEhHFPg/QFRg+E4gwQE1gxD2gbQD5gdCPAAQJsAGFcFJQFcFKAGJKQACHFkFFZQkDFdoZECQkqCOlKBjQlJBklnA6g");
	this.shape.setTransform(-12.8,48.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.2,-416.9,554.6,833.9);


(lib.Toha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AnPFnQgNhCgGhLQgFhMAAhhQgBhOAFhSQAFhUAKhaQAKhbAQhqICuAWQgfCWgPB9QgOB+AABrIAAAjIACAnIAQgZIAOgXIARgaIAOgYIBOBdQgpBHgdA9QgcA9gRA2IAHAmIAKArIiQAuQgVhAgNhAgAAtHCQhAgBg0gXQg1gWgegoQgggogBgwQABgqAgghQAeghA2gSQA3gUBDAAQANAAAMACIAeACIgDhkIgDg+IgEg8QgtAFglADQgjACgnAAQgjAAgegBQgegCgigDIgUiXIBVAHQAsACAwAAIA6gBIBAgEIgFj0ICqAAIACDOQAagKAUgPQAVgPANgQIBvBhQgUAjgwAcQgwAdhIASIABA3IACBXIAFCWQBDAeA0AcQA2AbAuAcIhZCOIg8gsIgrgfIgogbQgVBBgyAdQgxAdhYAAIgDAAgAgeD+QgZAJAAAPQABASAbALQAaAMAlAAQAoABAQgNQARgOACgjQgQgHgSgCQgTgEgYAAQgmABgaAIg");
	this.shape.setTransform(63.9,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AhRHVQg7gFgogMQgpgNgdgUQgpgcgWgqQgVgpgBg0QAAhKAzhEQAyhGBvhJQgHgggGgzIgKhxQgEg9gDhBQgDhAgBg7ICsAIIgBAsIAAAoQAABTACA+QADA9AGAvIBLgwIAlgYIAegRIBcCZQhAAdg1AZIhdAsQAEAZAGAcQAGAcAHASIiAA+IgSgtIgMgmQgxAhgWAfQgWAeABAiQgBAcAPAQQARAQAnAGQAnAGBFAAQBUAABJgIQBKgHBGgRIAjCuQhCALhEAFQhEAGhJAAQhTAAg7gGg");
	this.shape_1.setTransform(-59.2,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-93.3,244.2,186.8);


(lib.TO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2C12").s().p("EgG0Am9Qk6gcjWhBQjahBibhqQjXiYhzjdQhzjdAAkSQgDmHEPlsQELlvJImPQgiirgfkMQgckOgZlKQgZlGgPlWQgQlWgDk3IOaArQgGCGAABgIAADXQAAG5AMFHQAQFGAcD5IGOj/IDHh/QBEgpBdg1IHlMvQlTCYkYCGQkUCBjdBwQAWCFAiCWQAiCVAfBgIqtFKQgvhtguiDQgsh/gWhOQkCCuh2ClQh2CiADC0QgDCVBUBUQBXBUDNAjQDRAfFvAAQHEAAGHgpQGIgoF1haIC1ObQlaA7loAcQlsAcmFAAQnBAAk3gcg");
	this.shape.setTransform(4.5,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329.5,-495.5,659.1,991);


(lib.NN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EAKcAiaQnwgCkCkBQkGkCgCnmQgBh7APiJQATiFAjilQhrBVh/BnQh9BniwCVQiuCTj/DdQhAB7g5BqIh0DdQg7BvhPCQIpdlMQH9umHfv2QHcv1GwwnIKvEtQjaHkioFwQinFyiTE3QiSE3iZExQA5gxBdhLQBahKB4hlICUh5IIhE6QgrEYgVDHQgVDGAACaQgCETBSB2QBVB5C3gCQDaACC6haQC4haC/jQQC/jTDnlrIFgK/QlYHzl9DvQl4Dtm+AAIgMgBg");
	this.shape.setTransform(6.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.6,-409.9,545.3,819.9);


(lib.Nanika = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AjIFyIDtgRIAADoIjbAdgAinhVQBogjAygyQAygzAAhBQAAgzgegeQgcgehCgOQhEgNhvAAIA/i9QDpACB3BIQB2BJAACPQAABuhABTQhBBTiAA0IgJDRIioAUg");
	this.shape.setTransform(150.8,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("Aj0IoQg2geg4g/IA4ilQAoAlAfAWQAfAXAQAAQAQgBARglQASglAOg7QAPg8AJhEQAKhEAAg9QABgygNgUQgMgVgdABIgMABIgTACIgQADIgUADIgWADQg7C5hHChQhJChhMB5IinhrQArg/AuhRQArhQAnhYQAnhXAchRIhxAYIhXAQIgmi4IBugUIBFgLIA3gJIBCgKQAXhUAVhYQAThYAMhMIDCAiQgTBbgRBBQgRBBgPA0IAigDIAagBQBuAAA3BAQA3BBAACEQAABUgOBbQgOBdgXBRQgXBSgeA4QgcA3gmAeQgoAdgrAAQgzAAg0gfgAHaDMIgNgeQglAEgnAJQgmAIgkAKIhIh4IA9gaIAqgSIAwgTQgphIg3hOQg4hNg/hGICQhaQB4BzBYB7QBYB7A3CBIi2B3IgOgog");
	this.shape_1.setTransform(3.4,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CCFF").s().p("AErKVIhSjQQAUAEAdACQAdACAcAAQATABAGgJQAHgIgBgXIAAr1IovAtIgKh1QgbA1giA4QgiA3gqA8IBXAAIgKMiIjIAAIARqVQgYAdgVAWQgVAXgSARIh9isQA8gzBBhWQBChXA6hoQA7hoAohpIDCBIIgdA+QgNAbgMAXIM/hAIAQC2Ih3AIIAAM7QACBMgVAnQgUApg3AOQg0AOhhAAIgHAAgAiCFfIgno0ICjAAIAEApIEogXIgWHPIj0ANIAEBGgAAGgSIALCRIBogGIAHiUg");
	this.shape_2.setTransform(-151.3,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.1,-116.2,454.2,232.5);


(lib.KA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CE904").s().p("As0c4Qizhni8jSIC6onQCHB9BpBJQBpBMA0AAQA2gDA4h8QA7h7AxjGQAwjGAhjkQAfjkAAjQQADingqhEQgnhFhiACQgWAAgUADQgTAAgtAHIg2AKIhBAKQggACgnAIQjJJujuIbQjwIakAGUIovljQCTjSCWkQQCSkNCCkmQCCkkBgkSQjMAsiwAkQixAjhwATIiCppIFyg/QCJgWBdgRIC1geQBbgPCEgTQBPkXBBkpQBCklAnj/IKMBzQhCEwg4DaQg5DagzCtQBKgHApgCQAsgFApAAQF1AAC4DXQC3DYABG7QgBEcguEyQgsE1hOEQQhPEShiC6QhiC6iCBiQiEBiiRAAQipAAiwhngAYzKrQgTgxgZg0Qh6APiCAdQiBAbh4AiIjxmRQB9g2BPggQBLgiBCgbICehAQiHj1i4kDQi6kEjVjpIHjktQGRGBEmGbQEmGbC3G1IpfGMIgviGg");
	this.shape.setTransform(11.2,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.5,-390.1,519,780.3);


(lib.TunnelBg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.tunnel();
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.IndexBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.door_way();
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.ニーチェ_teal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// フリードリヒ・ニーチェ
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,255,0.2)").ss(1,1,1).p("ATrA6QAAgEAAgFQgBgGAAgFQAAgGAAgEQAAgEAAgCQAAgGAAgDQAAgDABgBQAAgCACgCQABgDAAAAQAAgCgDgBQgCgCgDgCQADAAAFAAQAGgBAGAAQAGAAAFgBQAFAAACgBQADAAACAAQADgCACgBQADgCAAgDQAAgCgFgDQgEgEgFgCQgGgCgDAAQgBAAgDABQgDACgDABQgDACgBAAQgCABgHABQgGABgJACQgIABgIABQgJAAgFAAQgIAAgHgBQgGgCgJgEQABAIAEAFQAFAGAEADQAEABABAAQABAAADAAQACAAABAAQACgBAEAAQAEAAAEgBQAFgBADAAQAEADAAACQABADAAAHQAAACAAAGQAAAHAAAHQAAAJAAAGQAAAHAAADQgCAAgEAAQgFABgFABQgFAAgEABQgEAAgCABQgEAAgGABQgHAAgGAAQgGAAgEgBQgEgBgCgBQgBAAgCgBQgCgBgCAAQgBgBgBAAQABAHAEAGQAFAHAFADQAEAEACAAQADAAACgBQACgBACgBQABgBAKgCQAKgCATgCQATgCAeAAQACAAAGAAQAGAAAHAAQAHABAHAAQABAAACABQADAAACAAQAEAAADgBQABgCABgCQABgBAAgBQAAgDgFgEQgEgDgFgDQgFgCgDAAQgBAAgEAAQgFABgDABQgFABgBAAQgDAAgHABQgIAAgMABgAOjBpQAEgBAIgCQAGgCAKgEQAJgEALgHQAOgJAIgNQAIgNAFgQQAEgRADgSQADgBAHAAQAHAAAGgBQAIAAAGAAIAJAAQACAAAEABQAFABAFAAQAFABAEAAQAEAAABAAQABAAACAAQACAAACgCQABgCABgEQgBgFgFgEQgFgFgGgDQgGgDgEAAQAAAAgBAAIgBAAQgBABgDABQgDABgBABQgCABgDAAQgBAAgFABQgFAAgIABQgJABgOAAQABgGAAgGQABgGACgCQABgCABgBQAAAAAAgBQAAgBgBgBQgBgBgDgDQgEgCgHgEQAEgBAJgDQAJgDAPgFQAAAAACgBQABgBABAAQABAAACABIACAAQADAAAAgBQABgBAAgBQAAgDgDgDQgBgEgEgCQgBgDgFgDQgEgEgGgDQgHgCgIAAQgCAAgCAAQgBAAAAAAQAAABABABQACAAAAABQABACABABQAAABAAABQAAACgBACQgBABgBABQgLAHgPAHQgPAGgQAFQgPAFgNAEQgOADgIABIAAADQAEAAACAAQADAAAFAAQALAAALgBQANgBAJgCQAIgBAGgBQAEAEADAFQACAGAAAGQACAGAAAFQgEABgJABQgJABgKACQgLABgKABQgLACgJABQgJABgEAAQgFAAgDgBQgEgCgCgCQgCgBgBAAQgBgBgBAAQAAAAgBABQgBAAAAABQAAABADAFQADAFAEADQAFAFAFAFQAFADAEABQACAAABgBQACAAAAgBQABAAADgBQABgBACgBQADgBAAAAQAUgGAQgDQAQgBAJAAQgBAEAAAIQgBAIgCAJQgCAJgCAHQgIATgPAPQgPAOgSAKgAKNgXQAAANAEAIQAEAGAFAFQAFAEADABQAEADACAAQACgBAEgBQADgBAEgBQAEgBABAAQADAAAIgBQAJgBAKgBQAKAAALgCQALAAAIAAQAJgBACAAQAGAAAIABQAGAAAIABQAHABAHABQADAAAEAAQAEABACAAQAEAAADgCQACgCAAgDQAAgEgFgDQgEgFgGgEQgGgDgEgBQgBABgEAAQgDACgDAAQgDABgBAAQgGAAgLABQgLAAgOABQgOABgOABQgOAAgLABQgKAAgFAAQgMAAgIgCQgHgDgEgDQgFgEgEgEgAGnBFQABAAAEgBQACgBADgCQADgBABAAQABgBALgDQALgCASgDQATgCAYgBQALAAAGAAQAIABAFAAQAFABAEAAQAEABAHABQADAAAGABQAHABAFAAQADAAADgBQAEgBACgCQADgCAAgEQAAgEgEgEQgEgDgGgDQgFgCgHgCQgGgBgEgBQgCAAgBABQgBAAgDABQgDABgEABQgEAAgCAAQgOAAgLABQgMABgKAAQgLABgLABQgNABgPABQgBAAgFABQgFAAgFABQgFABgFAAQgFABgBAAQgDAAgEgBQgDAAgEgBQgFgBgCgCQgCgBgCgDQgDgCgBgBQgBAAAAABQgBABAAABQAAAEADAGQAEAGAFAGQAFAGAFAEQAFAEAFAAgAHGgiQABAAAEgBQAEAAAGgCQAFgBAGgBQAFgBACAAQAFgBAJgBQAHAAAKgBQAKgBAJgBQAJAAAHAAQAKAAADgCQACgBAAgFQAAgDgFgEQgDgEgHgDQgFgDgFgBQgDAAgDABQgDABgGACQgFACgKACQgJABgKACQgLABgKABQgJABgFAAQgHAAgFgBQgFgBgEgBQgBgBgDgCQgDgDgCAAQgBAAAAABQAAAAAAACQAAACAAADQABADAEAEQADAEAHAHQAEADACACQADABACAAgAD6gXQgLAAgHAHQgGAGAAAKQAAAJAGAHQAHAGALABQAKgBAHgGQAHgHAAgJQAAgKgHgGQgHgHgKAAgAgngGQAAgHABgKQAAgKACgKQAAgKACgHQAAgBABgDQACgDAAgDQACgDAAgBQgBgDgGgFQgFgFgKgEQgIgDgKgBQgEABgDAAQgEABAAABIAAABQAAAAAAABIACABQACAAAAABQACABAAAAQAEABADAEQACAEABAIQABAIAAAQQABAQAAAaQAAACAAAGQAAAHABAJQAAAJAAAIQAAAIAAAEQAAADACAEQABAFADAFQACAEAFAEQAEAEAIACQAIACAJACQAKABAJABQAHAAAGAAQAUAAAQgBQAQgBAJgEQAJgEABgGQgBgFgEgEQgFgDgFgCQgGgCgEAAQgCAAgBAAQgCAAgCABQgCABgFACQgDABgIACQgHABgKABQgJABgIAAQgGABgEAAQgQAAgIgIQgHgIAAgNQAAgCAAgFQAAgFAAgFQAAgFABgFQAAgFAAgCQATgCAPgFQANgFAPgGQANgGARgIQAEgBACgCQADAAABgBQAHgBACAAQACgBgBgCQAAgDgCgEQgDgFgFgGQgGgFgGgEQgHgEgHAAQgDAAAAABIgBABQABABABABQABABABABQABACABABQAAABAAACQAAACgBABQAAACgCABQAAABgHAFQgFAGgLAHQgKAHgLAIQgOAHgQAEgAkWBoQAFgBAJgDQAKgDALgGQAMgHAKgMQAKgLAJgSQACgHADgIQACgHABgMQACgJABgSQAAgRAAgaQAAgFABgCQABgCABgCQACgDABgBQABgCAAgCQAAgCgCgBQgCgCgCgCQgJgFgIgEQgIgDgIAAQgFAAgDACQgFABAAACIAAABQABAAABAAQAFACACACQACABABACQADADAAAGQACAGAAAIQABAIABAIQABAIAAAHQAAAggHAXQgFAYgKAPQgIAQgLAJQgLAKgKAGgAlAhSQABABACACQADABABABQADACADAFQACAFACAJQABAKAAATQAAADgBAEQAAAEAAAFQAAAEgBADQgBAFgBACQgBACAAABQAAACACAEQACAEADAEQACAEAEADQADAEAEAAQAEAAACgDQABgDABgIQAAgJAAgOQAAgCAAgGQAAgGgBgFQAAgGAAgCQAAgKABgHQABgGACgFQAAgBABgCQABgCAAgBQAAgCgGgEQgGgFgIgDQgIgEgHAAQgBAAgDAAQgCABgCAAQgDABAAABgAm8hkQAKAEAHAGQAHAGAGAJQACADACACQACACAEAAQAEAAACgCQACgCAAgFQAAgHgGgFQgGgGgIgDQgJgDgIAAQgEAAgCAAQgDABgCAAgAnLhKQADACAEADQAFAEAFAFQAFAFAEAIQACAEACADQACACAEAAQAFAAABgCQACgDAAgDQAAgFgEgGQgEgGgKgFQgKgFgQgBgAn0gaQAAgNAAgIQAAgHAAgEQABgEAAgDQAAgCABgDQAAgBABgDQACgDABgEQABgDAAgBQAAgCgBgBQgBgBgBgCQgJgGgHgDQgGgDgEgBQgEAAgCAAQgJAAgCACQgDABABABQAAAAACABQACACACABQAFAEADAEQADAEAAAGQABAGAAAKQAAAWAAAYQgBAVgBAWQAAAMAAAHQgBAGAAADQgBADgBAEQgBADgBACQAAACAAACQAAADABAGQACAGAFAIQADAGADACQADADADgBQADABAEgEQAEgFAAgMQAAgCAAgEQAAgEAAgFQAAgFgBgFQAAgEAAgCQAAgYAAgTQAAgQAAgMQAEABAIAEQAIADAJAHQAKAFAIAMQAFAHADADQADADAFAAQAFAAADgCQADgCABgDQABgDAAgDQAAgKgJgHQgJgJgRgGQgRgHgYgBgAtKgXQABANAEAIQADAGAFAFQAFAEAEABQAEADABAAQACgBAEgBQAEgBAEgBQADgBACAAQADAAAHgBQAJgBAKgBQALAAALgCQALAAAIAAQAIgBADAAQAGAAAHABQAHAAAIABQAHABAGABQAEAAADAAQAEABACAAQAEAAADgCQADgCAAgDQgBgEgEgDQgFgFgGgEQgGgDgEgBQgBABgDAAQgEACgCAAQgEABgBAAQgFAAgMABQgLAAgOABQgOABgNABQgOAAgLABQgLAAgFAAQgMAAgHgCQgIgDgEgDQgFgEgEgEgAwCBoQAFgBAJgDQAKgDALgGQALgHALgMQAKgLAIgSQADgHACgIQADgHABgMQABgJABgSQABgRAAgaQAAgFABgCQABgCABgCQACgDABgBQAAgCAAgCQAAgCgBgBQgCgCgCgCQgKgFgIgEQgHgDgIAAQgFAAgEACQgFABAAACIABABIABAAQAFACADACQACABABACQACADABAGQABAGABAIQABAIABAIQAAAIAAAHQAAAggGAXQgFAYgKAPQgJAQgKAJQgLAKgLAGgAwshSQABABACACQADABABABQADACADAFQACAFABAJQACAKAAATQAAADgBAEQAAAEAAAFQAAAEgBADQgCAFAAACQgBACAAABQAAACACAEQABAEADAEQADAEAEADQADAEAEAAQAEAAACgDQABgDABgIQAAgJAAgOQAAgCAAgGQAAgGgBgFQAAgGAAgCQAAgKABgHQABgGACgFQAAgBABgCQABgCAAgBQAAgCgGgEQgGgFgIgDQgIgEgHAAQgCAAgCAAQgDABgCAAQgCABAAABgA0mBdQAbAAAWgKQAWgJAQgRQARgQAMgWQALgTAHgXQACgIADgGQACgGAGgCQAFgEACgBQACgBAAgDQAAgCgEgEQgDgEgEgFQgEgEgFgDQgEgDgDAAQgBAAgCABQgCACgDABQgCABgBABQgDABgIABQgIACgKABQgLABgMACQgMABgKABQgLABgHAAQgHABgBAAQgGAAgGgCQgFgCgEgEQgBgBgCgCQgCgCgBgBQAAAAgBABQgBAAAAACQAAAIAEAHQADAGAEAEQAFAFACACQAEADACABQACABADAAQAAAAABAAQABAAABAAQABgBACgBQADgCABAAQAEgCAJgCQAJgCAMgCQAMgCALgBQALgCAHgBQAHgBABAAQABAAAAAAQABABAAABQAAABgBAIQgCAIgDAMQgDAMgHANQgJAUgPATQgOASgTAMQgSAOgWAHg");
	this.shape.setTransform(123,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AOiBnQASgKAPgOQAPgPAIgTIAEgQIACgRIACgMIgYABQgRADgUAGIgDABIgEACIgCABIgDABIgDABQgEgBgFgDIgKgKIgHgIIgDgGIABgBIABgBIACABIADABIAFAEIAJABIANgBIAUgDIAVgCIATgDIANgCIgBgLQgBgGgCgGQgDgFgEgEIgOACQgKACgLABIgYABIgHAAIgGAAIAAgDIAWgEIAcgJQAQgFAPgGQAPgHALgHIACgCIACgEIgBgCIgCgDIgCgBIgBgCIABAAIAEAAQAIAAAGACQAHADAEAEIAGAGIAGAGQACADAAADIgBACIgDABIgDAAIgCgBIgCABIgCABIgYAIIgNAEIALAGIAEAEIAAACIAAABIgCADQgBACAAAGIgCAMIAXgBIANgBIAGgBIAFgBIAEgCIAEgCIABAAIABAAQAEAAAGADQAGADAFAFQAFAEABAFQgBAEgBACIgEACIgEAAIgEAAIgJgBIgKgBIgGgBIgJAAIgOAAIgNABIgKABQgCASgFARQgEAQgJANQgJANgNAJQgLAHgJAEIgQAGIgMADgAoEBmIgGgIQgFgIgCgGIgBgJIAAgEIACgFIACgHIABgJIABgTIABgrIABguIgBgQQgBgGgDgEQgDgEgFgEIgEgDIgCgBIACgCQACgCAJAAIAHAAIAJAEQAHADAJAGIACADIABADIgBAEIgCAHIgCAEIgBAFIgBAHIAAALIAAAVQAYABARAHQARAGAJAJQAJAHABAKIgCAGQgBADgDACQgCACgGAAQgFAAgDgDIgIgKQgIgMgJgFQgKgHgIgDIgMgFIAAAcIAAArIAAAGIABAKIAAAJIAAAGQAAAMgEAFQgDAEgEgBIgBAAQgDAAgCgCgAkWBnQAKgGALgKQALgJAJgQQAJgPAFgYQAHgXAAggIgBgPIgBgQIgDgOQgBgGgCgDIgDgDIgHgEIgBAAIgBgBQAAgCAEgBIAJgCQAIAAAIADIARAJIAEAEQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBAEIgDAEIgBAEIgBAHIgBArIgDAbIgDATIgFAPQgJASgKALQgLAMgLAHQgLAGgJADIgPAEgAwCBnQAKgGALgKQALgJAIgQQAKgPAFgYQAGgXAAggIAAgPIgBgQIgDgOIgDgJIgDgDIgHgEIgBAAIgBgBQgBgCAFgBIAJgCQAIAAAIADIARAJIAEAEQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIgDAEIgCAEIAAAHIgBArIgDAbQgBAMgCAHIgGAPQgHASgLALQgLAMgLAHQgLAGgKADIgOAEgA0lBcQAVgHASgOQATgMAPgSQAOgTAJgUQAHgNADgMIAFgUIABgJIgBgCIgBAAIgIABIgSADIgXADIgVAEIgNAEIgEACIgDACIgBAAIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBIgGgEIgGgHQgFgEgDgGQgDgHgBgIIABgCIACgBIADADIACADQAEAEAFACIAMACIAIgBIASgBIAWgCIAXgDIASgDIAMgCIACgCIAFgDIADgBQADAAAEADIAJAHIAHAJQAEAEAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgIAFQgFACgDAGQgDAGgCAIQgHAXgLATQgMAWgRAQQgQARgWAJQgWAKgaAAgAAABWIgSgCIgSgEQgIgCgEgEQgEgEgDgEQgDgFgBgFIgCgHIAAgMIgBgRIAAgQIAAgIIgBgqIAAgYQgCgIgCgEQgCgEgEgBIgCgBIgDgBIgCgBIAAgBIAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQABgBAAAAIAIgBQAKABAIADQAKAEAFAFQAGAFABADIgBAEIgDAGIgBAEIgCARIgCAUIgBARQAQgEAOgHIAWgPQAKgHAFgGIAHgGIACgDIABgDIAAgDIgCgDIgCgCIgBgCIAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAHAAAHAEQAGAEAFAFIAJALQADAEgBADQABAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgJABIgEABIgGADIgeAOQgPAGgNAFQgPAFgSACIgBAHIgBAKIAAAKIAAAHQAAANAHAIQAHAIARAAIAKgBIARgBIARgCIALgDIAHgDIADgBIAEAAQAEAAAGACQAGACAEADQAEAEABAFQAAAGgKAEQgJAEgQABIgkABIgNAAgASUBRQgFgDgEgHQgEgGgBgHIACABIAEABIADABIAFACIALABIANAAIAKgBIAGgBIAJgBIAKgCIAGAAIAAgKIAAgPIAAgOIAAgIIgCgKQAAgCgDgDIgIABIgIABIgGABIgEAAIgDAAIgFgBQgFgDgEgGQgEgFgBgIIAPAGQAHABAIAAIAOAAIAQgCIAPgDIAJgCIAEgCIAFgDIAFgBIAJACQAFACAEAEQAEADABACQAAADgDACIgFADIgFAAIgHABIgLABIgMABIgHAAIAEAEIADADIgCADIgBAEIgBAEIAAAJIAAAGIAAAKIAAALIABAJIATgBIALgBIAFgBIAJgCIAGAAIAHACIAJAGQAEAEABADIgBACIgCAEIgHABIgFAAIgDgBIgOgBIgNAAIgIAAQgeAAgTACIgdAEIgMADIgDACIgFABQgCAAgFgEgAGdBBQgFgEgFgGIgJgMQgDgGAAgEIABgCIABgBIAEADIAEAEQACACAEABIAIABIAGABIAHgBIAKgBIAKgBIAHgBIAbgCIAWgCIAWgBIAYgBIAHAAIAIgCIADgBIADgBIAKACIAMAEQAGADADADQAEAEABAEQgBAEgCACQgCACgEABIgGABIgMgBIgJgBIgLgCIgKgBIgMgBIgRAAQgYABgTACIgdAFIgMAEIgEABIgFADIgFABQgFAAgFgEgAkmAbIgGgHIgFgIIgBgGIAAgDIACgHIABgHIAAgJIABgHIgBgdQgBgJgDgFQgDgFgDgCIgDgCIgEgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAEAAQAIAAAHAEQAJADAFAFQAGAEAAACIgBADIgBADIgDALIAAARIAAAIIAAALIAAAIIAAAXQgBAIgBADQgCADgEAAQgEAAgDgEgAwSAbQgEgDgDgEIgEgIIgBgGIAAgDIACgHIABgHIAAgJIABgHQAAgTgCgKQgBgJgCgFQgCgFgEgCIgDgCIgEgDIADgCIAEgBIAEAAQAIAAAHAEQAIADAGAFQAGAEAAACIgBADIgBADQgCAFAAAGIgBARIAAAIIAAALIAAAIIAAAXQgBAIgBADQgCADgEAAQgEAAgDgEgADoAQQgGgHgBgJQABgKAGgGQAIgHAKAAQAKAAAHAHQAHAGAAAKQAAAJgHAHQgHAGgKABQgKgBgIgGgAKiAOQgDgBgFgEQgFgFgEgGQgEgIAAgNIAJAIQAEADAHADQAIACAMAAIAQAAIAYgBIAcgCIAZgBIAQgBIAFgBIAHgCIAEgBQADABAHADQAGAEAEAFQAFADABAEQAAADgDACQgDACgEAAIgGgBIgHAAIgOgCIgPgBIgMgBIgLABIgUAAIgVACIgTACIgKABIgGABIgHACIgGACIgGgDgAs0AOQgEgBgEgEQgFgFgEgGQgEgIgBgNIAJAIQAFADAHADQAIACAMAAIAPAAIAZgBIAbgCIAZgBIARgBIAFgBIAGgCIAFgBQADABAHADQAFAEAFAFQAEADABAEQAAADgDACQgCACgEAAIgGgBIgIAAIgNgCIgPgBIgNgBIgLABIgTAAIgVACIgTACIgKABIgGABIgIACIgGACIgFgDgAHBgjIgGgFIgLgLQgDgEgBgDIAAgFIAAgCIACgBIAEADIAFADIAIACIAMABIAPgBIAUgCIATgDIAQgEIAIgDIAFgBQAGABAGADQAGADAEAEQAEAEAAADQAAAFgCABQgEACgIAAIgRAAIgTACIgRABIgOACIgHABIgLACIgKACIgEABIgGgBgAmtgoIgDgHQgFgIgFgFIgJgJIgIgFQAQABALAFQAJAFAEAGQAFAGAAAFQAAADgCADQgCACgFAAQgEAAgCgCgAmahGIgEgFQgFgJgHgGQgIgGgJgEIAEgBIAGAAQAJAAAIADQAIADAGAGQAGAFAAAHQAAAFgCACQgCACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(123,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AhGA2IgJgKQgFgGgBgIIADABIAEABIACABIAGACIAKABIANAAIALgBIAGgBIAJgBIAJgBIAHgBIAAgJIAAgPIgBgNIAAgIQAAgGAAgEQgBgDgEgEIgHABIgIABIgGACIgDAAIgEABIgFgDQgFgDgEgFQgEgGgBgHIAPAFQAGACAJAAIANgBIAPgCIAQgDIAIgCIAEgBIAGgDIAEgBQADAAAFACQAGACAEADQAEADABADQgBACgCACIgFADIgFABIgHABIgMAAIgLABIgIABIAFADQACADABACIgBADIgDAEIAAAEIAAAKIAAADIAAAKIAAALIAAAJIAUgBIALgBIAFgBIAIgBIAGgBQACAAAGADIAJAGQAFADgBADIAAADIgDADQgCABgEAAIgFAAIgEAAIgNgBIgNgBIgJAAQgeAAgRACIgcAEIgLADIgFACIgDABQgDAAgFgDg");
	this.shape_2.setTransform(248.2,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AhCBlQATgKAOgOQAQgPAHgTIAEgQIADgRIABgMIgYACQgRABgTAGIgEACIgEACIgCABIgDABIgDAAQgEAAgFgEIgKgJIgHgIIgCgGIAAgCIABAAIACABIADABIAFADQAFACAEAAIANgBIAUgDIAVgCIATgDIANgCIgBgLQgBgGgCgGQgCgGgEgDIgPACIgVADIgYABIgHAAIgGAAIAAgDIAWgFIAdgIQAQgFAOgGQANgHALgIIACgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgCIgCgDIgBgCIgBgBIABgBIADAAQAIAAAHADQAGADAEADIAHAHIAFAFIACAHIgBACIgCABIgDAAIgDgBIgCABIgCABIgYAIIgOAEIAMAGIAEAEIABACIgBABIgCADQgBACAAAGIgCAMIAXgBIANgBIAHgBIAEgBIAEgCIAEgCIACAAIAAAAQAFAAAFADQAHADAEAFQAGAEAAAFQgBAEgBACIgEADIgDABIgFgBIgJgCIgKgBIgFgBIgKAAIgNAAIgNABIgLAAQgCATgEAQQgGARgIANQgGAMgNAJQgLAIgKAEIgQAGIgMADg");
	this.shape_3.setTransform(223.6,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AhIASQgEgBgFgFQgFgEgDgIQgEgHgBgMIAJAIQAEADAIADQAHACAMAAIAQgBIAYgBIAagCIAZgBIARgBIAEgBIAHgBIAEgBQAEAAAGADQAGAEAFAFQAEADABAEQAAADgDADQgDABgEABIgGgBIgHgBIgNgBIgPgCIgNgBIgLABIgTABIgUACIgSACIgLAAIgFACIgIACIgGABIgFgCg");
	this.shape_4.setTransform(198.6,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFFF").s().p("AhUBCIgLgLIgIgMQgDgFAAgEIAAgBIACgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIADADQADADAEABIAIACIAGAAIAHgBIAKgBIAKgBIAGgBIAbgCIAVgCIAVgBIAZgBIAHAAQAEgBADgBIAEgCIACAAIALACIAMAEQAGADADADQAEADAAAFQAAADgCADQgCACgEABIgHABIgLgBIgKgBIgKgCIgKgBIgMgBIgRAAQgWABgTACQgSADgLACIgMADIgEADIgGACIgEACQgFgBgFgEgAgwgjIgGgEIgLgLQgDgEgBgDIgBgFIABgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAFACIAEADIAIADIANABIAOgBIAUgCIATgDQAJgCAFgBIAJgEIAFgBQAGAAAFAEQAGADAEAEQAEAEABADQAAAFgDACQgDABgJAAIgRAAIgSACIgSABIgLACIgHABIgLADIgKABIgFABQgCAAgDgCg");
	this.shape_5.setTransform(173.7,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("AgQARQgGgHgBgKQABgJAGgHQAHgGAJgBQAKABAGAGQAHAHABAJQgBAKgHAHQgGAGgKABQgJgBgHgGg");
	this.shape_6.setTransform(148.8,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("AgBBaIgTgCIgRgDQgIgDgEgEQgFgDgDgFIgDgJIgCgIIgBgLIAAgSIAAgQIgBgIIAAgqQAAgQgBgHQgBgJgDgEQgCgDgEgCIgCAAIgCgCIgCAAIAAgCIAAgBIADgBIAIgBQAJAAAJAEQAJADAGAFQAGAFAAADIgBAFIgCAFIgCAFIgCAQIgBAUIgCASQAQgEAOgIQAMgHAKgHIAQgNIAHgHIACgCIABgEIAAgCIgCgDIgCgDIgCgCIABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAHAAAGADQAHAEAFAGQAFAFADAFQADAFAAACQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgJACIgEABIgGADIgfAOQgOAGgNAEQgQADgSAEIgBAIIAAAKIAAAKIAAAHQgBANAIAHQAHAJAQgBIAMAAIAQgBIARgDIALgDIAGgCIAEgBIAEAAQAEAAAFACQAGABAFAEQAEADAAAGQAAAGgJAEQgKADgQABQgQACgTAAIgNgBg");
	this.shape_7.setTransform(123.9,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgZBlQAKgGALgKQAJgKAJgPQAJgQAGgXQAFgVABgiIAAgPIgCgQIgCgOIgDgJIgEgEIgHgDIgBgBIgBgBQAAgBAEgCIAKgBQAHAAAIADQAIADAKAGIADADQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAEIgDAEIgBAEIgBAHIgBArIgDAbIgDATIgFAOQgIASgLAMQgLAMgLAGQgJAHgJADIgPAEgAgiAcQgDAAgEgDQgEgDgCgEIgEgIIgCgGIABgDIABgHIABgHIABgJIAAgHIgBgdQgBgKgCgEQgDgFgEgCIgDgCIgDgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEgBIAFAAQAHAAAIAEIAOAHQAFAFAAACIgBADIgBADIgCALIgBARIAAAIIAAALIABAIIgBAWQgBAJgBADQgBACgDAAIgCAAg");
	this.shape_8.setTransform(98.5,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFFF").s().p("AguBmQgCgCgEgGQgFgIgCgFIgBgJIABgFIABgEIACgHIABgKIABgSIABgsIABgtIgBgQQgBgGgDgEQgDgFgFgDIgEgDIgCgCIACgCQACgCAJAAIAHAAIAJAEQAHADAJAHIACADIABACIgBAFIgCAGIgCAFIgBAFIAAAGIgBAMIAAAUQAYACAPAHQARAGAJAIQAJAIABAJIgCAGQgBADgDADQgDACgFAAQgEAAgEgEQgDgDgFgHQgIgLgHgFQgKgHgIgEIgMgEIAAAcIAAArIABAGIAAAJIAAAJIAAAGQAAANgEAEQgDAEgEAAQgDAAgDgDgAAngoIgDgHQgFgHgFgFIgJgJIgHgGQAQACAKAEQAJAFAEAGQAFAHAAAEQAAADgCADQgDADgDAAQgEAAgDgDgAA6hFIgDgGQgGgJgIgFQgHgGgJgFIAEAAIAGgBQAIAAAJAEQAIADAGAGQAFAFABAHQAAAEgCADQgCACgDAAQgEAAgDgCg");
	this.shape_9.setTransform(76.8,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFFF").s().p("AhIASQgEgBgFgFQgFgEgDgIQgEgHgBgMIAJAIQAEADAIADQAHACAMAAIAQgBIAYgBIAagCIAZgBIARgBIAEgBIAHgBIAEgBQAEAAAGADQAGAEAFAFQAEADABAEQAAADgDADQgDABgEABIgGgBIgHgBIgNgBIgPgCIgNgBIgLABIgTABIgUACIgSACIgLAAIgFACIgIACIgGABIgFgCg");
	this.shape_10.setTransform(49,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("AgZBlQAKgGALgKQAJgKAJgPQAJgQAGgXQAGgVAAgiIAAgPIgCgQIgCgOIgDgJIgEgEIgHgDIgBgBIgBgBQAAgBAEgCIAKgBQAHAAAIADQAIADAKAGIADADQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAEIgCAEIgCAEIgBAHIgBArIgDAbIgDATIgFAOQgIASgLAMQgLAMgLAGQgJAHgKADIgNAEgAghAcQgEAAgEgDQgEgDgCgEIgEgIIgCgGIABgDIABgHIABgHIABgJIAAgHIgBgdQgBgKgCgEQgDgFgEgCIgDgCIgDgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAEgBIAEAAQAIAAAIAEIAOAHQAFAFAAACIgBADIgBADIgCALIgBARIAAAIIAAALIABAIIgBAWQgBAJgBADQgBACgDAAIgBAAg");
	this.shape_11.setTransform(23.7,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFFF").s().p("AhHBVQAWgHATgNQASgNANgSQAOgSAJgTQAHgOADgNIAFgUIABgJIAAgBIgCgBIgIABIgSADIgVAEIgVAEQgJABgEACIgEACIgDACIgCAAIgBAAIgFgBIgGgEIgGgGQgFgFgDgGQgEgHAAgIIABgCIABAAIADACIADAEQAEAEAGABQAFACAGAAIAJAAIARgCIAWgCIAVgDIATgCIAKgDIAEgCIAEgCIADgCQADAAAEADIAJAIIAIAIQADAEAAADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgHAFQgFADgDAFIgFAOQgHAYgLATQgMAVgQAQQgPARgWAKQgVAJgcABg");
	this.shape_12.setTransform(-0.9,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-3.9,288.5,41);


(lib.ニーチェ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// フリードリヒ・ニーチェ
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.2)").ss(1,1,1).p("ATrA6QAAgEAAgFQgBgGAAgFQAAgGAAgEQAAgEAAgCQAAgGAAgDQAAgDABgBQAAgCACgCQABgDAAAAQAAgCgDgBQgCgCgDgCQADAAAFAAQAGgBAGAAQAGAAAFgBQAFAAACgBQADAAACAAQADgCACgBQADgCAAgDQAAgCgFgDQgEgEgFgCQgGgCgDAAQgBAAgDABQgDACgDABQgDACgBAAQgCABgHABQgGABgJACQgIABgIABQgJAAgFAAQgIAAgHgBQgGgCgJgEQABAIAEAFQAFAGAEADQAEABABAAQABAAADAAQACAAABAAQACgBAEAAQAEAAAEgBQAFgBADAAQAEADAAACQABADAAAHQAAACAAAGQAAAHAAAHQAAAJAAAGQAAAHAAADQgCAAgEAAQgFABgFABQgFAAgEABQgEAAgCABQgEAAgGABQgHAAgGAAQgGAAgEgBQgEgBgCgBQgBAAgCgBQgCgBgCAAQgBgBgBAAQABAHAEAGQAFAHAFADQAEAEACAAQADAAACgBQACgBACgBQABgBAKgCQAKgCATgCQATgCAeAAQACAAAGAAQAGAAAHAAQAHABAHAAQABAAACABQADAAACAAQAEAAADgBQABgCABgCQABgBAAgBQAAgDgFgEQgEgDgFgDQgFgCgDAAQgBAAgEAAQgFABgDABQgFABgBAAQgDAAgHABQgIAAgMABgAOjBpQAEgBAIgCQAGgCAKgEQAJgEALgHQAOgJAIgNQAIgNAFgQQAEgRADgSQADgBAHAAQAHAAAGgBQAIAAAGAAIAJAAQACAAAEABQAFABAFAAQAFABAEAAQAEAAABAAQABAAACAAQACAAACgCQABgCABgEQgBgFgFgEQgFgFgGgDQgGgDgEAAQAAAAgBAAIgBAAQgBABgDABQgDABgBABQgCABgDAAQgBAAgFABQgFAAgIABQgJABgOAAQABgGAAgGQABgGACgCQABgCABgBQAAAAAAgBQAAgBgBgBQgBgBgDgDQgEgCgHgEQAEgBAJgDQAJgDAPgFQAAAAACgBQABgBABAAQABAAACABIACAAQADAAAAgBQABgBAAgBQAAgDgDgDQgBgEgEgCQgBgDgFgDQgEgEgGgDQgHgCgIAAQgCAAgCAAQgBAAAAAAQAAABABABQACAAAAABQABACABABQAAABAAABQAAACgBACQgBABgBABQgLAHgPAHQgPAGgQAFQgPAFgNAEQgOADgIABIAAADQAEAAACAAQADAAAFAAQALAAALgBQANgBAJgCQAIgBAGgBQAEAEADAFQACAGAAAGQACAGAAAFQgEABgJABQgJABgKACQgLABgKABQgLACgJABQgJABgEAAQgFAAgDgBQgEgCgCgCQgCgBgBAAQgBgBgBAAQAAAAgBABQgBAAAAABQAAABADAFQADAFAEADQAFAFAFAFQAFADAEABQACAAABgBQACAAAAgBQABAAADgBQABgBACgBQADgBAAAAQAUgGAQgDQAQgBAJAAQgBAEAAAIQgBAIgCAJQgCAJgCAHQgIATgPAPQgPAOgSAKgAKNgXQAAANAEAIQAEAGAFAFQAFAEADABQAEADACAAQACgBAEgBQADgBAEgBQAEgBABAAQADAAAIgBQAJgBAKgBQAKAAALgCQALAAAIAAQAJgBACAAQAGAAAIABQAGAAAIABQAHABAHABQADAAAEAAQAEABACAAQAEAAADgCQACgCAAgDQAAgEgFgDQgEgFgGgEQgGgDgEgBQgBABgEAAQgDACgDAAQgDABgBAAQgGAAgLABQgLAAgOABQgOABgOABQgOAAgLABQgKAAgFAAQgMAAgIgCQgHgDgEgDQgFgEgEgEgAGnBFQABAAAEgBQACgBADgCQADgBABAAQABgBALgDQALgCASgDQATgCAYgBQALAAAGAAQAIABAFAAQAFABAEAAQAEABAHABQADAAAGABQAHABAFAAQADAAADgBQAEgBACgCQADgCAAgEQAAgEgEgEQgEgDgGgDQgFgCgHgCQgGgBgEgBQgCAAgBABQgBAAgDABQgDABgEABQgEAAgCAAQgOAAgLABQgMABgKAAQgLABgLABQgNABgPABQgBAAgFABQgFAAgFABQgFABgFAAQgFABgBAAQgDAAgEgBQgDAAgEgBQgFgBgCgCQgCgBgCgDQgDgCgBgBQgBAAAAABQgBABAAABQAAAEADAGQAEAGAFAGQAFAGAFAEQAFAEAFAAgAHGgiQABAAAEgBQAEAAAGgCQAFgBAGgBQAFgBACAAQAFgBAJgBQAHAAAKgBQAKgBAJgBQAJAAAHAAQAKAAADgCQACgBAAgFQAAgDgFgEQgDgEgHgDQgFgDgFgBQgDAAgDABQgDABgGACQgFACgKACQgJABgKACQgLABgKABQgJABgFAAQgHAAgFgBQgFgBgEgBQgBgBgDgCQgDgDgCAAQgBAAAAABQAAAAAAACQAAACAAADQABADAEAEQADAEAHAHQAEADACACQADABACAAgAD6gXQgLAAgHAHQgGAGAAAKQAAAJAGAHQAHAGALABQAKgBAHgGQAHgHAAgJQAAgKgHgGQgHgHgKAAgAgngGQAAgHABgKQAAgKACgKQAAgKACgHQAAgBABgDQACgDAAgDQACgDAAgBQgBgDgGgFQgFgFgKgEQgIgDgKgBQgEABgDAAQgEABAAABIAAABQAAAAAAABIACABQACAAAAABQACABAAAAQAEABADAEQACAEABAIQABAIAAAQQABAQAAAaQAAACAAAGQAAAHABAJQAAAJAAAIQAAAIAAAEQAAADACAEQABAFADAFQACAEAFAEQAEAEAIACQAIACAJACQAKABAJABQAHAAAGAAQAUAAAQgBQAQgBAJgEQAJgEABgGQgBgFgEgEQgFgDgFgCQgGgCgEAAQgCAAgBAAQgCAAgCABQgCABgFACQgDABgIACQgHABgKABQgJABgIAAQgGABgEAAQgQAAgIgIQgHgIAAgNQAAgCAAgFQAAgFAAgFQAAgFABgFQAAgFAAgCQATgCAPgFQANgFAPgGQANgGARgIQAEgBACgCQADAAABgBQAHgBACAAQACgBgBgCQAAgDgCgEQgDgFgFgGQgGgFgGgEQgHgEgHAAQgDAAAAABIgBABQABABABABQABABABABQABACABABQAAABAAACQAAACgBABQAAACgCABQAAABgHAFQgFAGgLAHQgKAHgLAIQgOAHgQAEgAkWBoQAFgBAJgDQAKgDALgGQAMgHAKgMQAKgLAJgSQACgHADgIQACgHABgMQACgJABgSQAAgRAAgaQAAgFABgCQABgCABgCQACgDABgBQABgCAAgCQAAgCgCgBQgCgCgCgCQgJgFgIgEQgIgDgIAAQgFAAgDACQgFABAAACIAAABQABAAABAAQAFACACACQACABABACQADADAAAGQACAGAAAIQABAIABAIQABAIAAAHQAAAggHAXQgFAYgKAPQgIAQgLAJQgLAKgKAGgAlAhSQABABACACQADABABABQADACADAFQACAFACAJQABAKAAATQAAADgBAEQAAAEAAAFQAAAEgBADQgBAFgBACQgBACAAABQAAACACAEQACAEADAEQACAEAEADQADAEAEAAQAEAAACgDQABgDABgIQAAgJAAgOQAAgCAAgGQAAgGgBgFQAAgGAAgCQAAgKABgHQABgGACgFQAAgBABgCQABgCAAgBQAAgCgGgEQgGgFgIgDQgIgEgHAAQgBAAgDAAQgCABgCAAQgDABAAABgAnLhKQADACAEADQAFAEAFAFQAFAFAEAIQACAEACADQACACAEAAQAFAAABgCQACgDAAgDQAAgFgEgGQgEgGgKgFQgKgFgQgBgAm8hkQAKAEAHAGQAHAGAGAJQACADACACQACACAEAAQAEAAACgCQACgCAAgFQAAgHgGgFQgGgGgIgDQgJgDgIAAQgEAAgCAAQgDABgCAAgAn0gaQAAgNAAgIQAAgHAAgEQABgEAAgDQAAgCABgDQAAgBABgDQACgDABgEQABgDAAgBQAAgCgBgBQgBgBgBgCQgJgGgHgDQgGgDgEgBQgEAAgCAAQgJAAgCACQgDABABABQAAAAACABQACACACABQAFAEADAEQADAEAAAGQABAGAAAKQAAAWAAAYQgBAVgBAWQAAAMAAAHQgBAGAAADQgBADgBAEQgBADgBACQAAACAAACQAAADABAGQACAGAFAIQADAGADACQADADADgBQADABAEgEQAEgFAAgMQAAgCAAgEQAAgEAAgFQAAgFgBgFQAAgEAAgCQAAgYAAgTQAAgQAAgMQAEABAIAEQAIADAJAHQAKAFAIAMQAFAHADADQADADAFAAQAFAAADgCQADgCABgDQABgDAAgDQAAgKgJgHQgJgJgRgGQgRgHgYgBgAtKgXQABANAEAIQADAGAFAFQAFAEAEABQAEADABAAQACgBAEgBQAEgBAEgBQADgBACAAQADAAAHgBQAJgBAKgBQALAAALgCQALAAAIAAQAIgBADAAQAGAAAHABQAHAAAIABQAHABAGABQAEAAADAAQAEABACAAQAEAAADgCQADgCAAgDQgBgEgEgDQgFgFgGgEQgGgDgEgBQgBABgDAAQgEACgCAAQgEABgBAAQgFAAgMABQgLAAgOABQgOABgNABQgOAAgLABQgLAAgFAAQgMAAgHgCQgIgDgEgDQgFgEgEgEgAwCBoQAFgBAJgDQAKgDALgGQALgHALgMQAKgLAIgSQADgHACgIQADgHABgMQABgJABgSQABgRAAgaQAAgFABgCQABgCABgCQACgDABgBQAAgCAAgCQAAgCgBgBQgCgCgCgCQgKgFgIgEQgHgDgIAAQgFAAgEACQgFABAAACIABABIABAAQAFACADACQACABABACQACADABAGQABAGABAIQABAIABAIQAAAIAAAHQAAAggGAXQgFAYgKAPQgJAQgKAJQgLAKgLAGgAwshSQABABACACQADABABABQADACADAFQACAFABAJQACAKAAATQAAADgBAEQAAAEAAAFQAAAEgBADQgCAFAAACQgBACAAABQAAACACAEQABAEADAEQADAEAEADQADAEAEAAQAEAAACgDQABgDABgIQAAgJAAgOQAAgCAAgGQAAgGgBgFQAAgGAAgCQAAgKABgHQABgGACgFQAAgBABgCQABgCAAgBQAAgCgGgEQgGgFgIgDQgIgEgHAAQgCAAgCAAQgDABgCAAQgCABAAABgA0mBdQAbAAAWgKQAWgJAQgRQARgQAMgWQALgTAHgXQACgIADgGQACgGAGgCQAFgEACgBQACgBAAgDQAAgCgEgEQgDgEgEgFQgEgEgFgDQgEgDgDAAQgBAAgCABQgCACgDABQgCABgBABQgDABgIABQgIACgKABQgLABgMACQgMABgKABQgLABgHAAQgHABgBAAQgGAAgGgCQgFgCgEgEQgBgBgCgCQgCgCgBgBQAAAAgBABQgBAAAAACQAAAIAEAHQADAGAEAEQAFAFACACQAEADACABQACABADAAQAAAAABAAQABAAABAAQABgBACgBQADgCABAAQAEgCAJgCQAJgCAMgCQAMgCALgBQALgCAHgBQAHgBABAAQABAAAAAAQABABAAABQAAABgBAIQgCAIgDAMQgDAMgHANQgJAUgPATQgOASgTAMQgSAOgWAHg");
	this.shape.setTransform(123,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AOiBnQASgKAPgOQAPgPAIgTIAEgQIACgRIACgMIgYABQgRADgUAGIgDABIgEACIgCABIgDABIgDABQgEgBgFgDIgKgKIgHgIIgDgGIABgBIABgBIACABIADABIAFAEIAJABIANgBIAUgDIAVgCIATgDIANgCIgBgLQgBgGgCgGQgDgFgEgEIgOACQgKACgLABIgYABIgHAAIgGAAIAAgDIAWgEIAcgJQAQgFAPgGQAPgHALgHIACgCIACgEIgBgCIgCgDIgCgBIgBgCIABAAIAEAAQAIAAAGACQAHADAEAEIAGAGIAGAGQACADAAADIgBACIgDABIgDAAIgCgBIgCABIgCABIgYAIIgNAEIALAGIAEAEIAAACIAAABIgCADQgBACAAAGIgCAMIAXgBIANgBIAGgBIAFgBIAEgCIAEgCIABAAIABAAQAEAAAGADQAGADAFAFQAFAEABAFQgBAEgBACIgEACIgEAAIgEAAIgJgBIgKgBIgGgBIgJAAIgOAAIgNABIgKABQgCASgFARQgEAQgJANQgJANgNAJQgLAHgJAEIgQAGIgMADgAoEBmIgGgIQgFgIgCgGIgBgJIAAgEIACgFIACgHIABgJIABgTIABgrIABguIgBgQQgBgGgDgEQgDgEgFgEIgEgDIgCgBIACgCQACgCAJAAIAHAAIAJAEQAHADAJAGIACADIABADIgBAEIgCAHIgCAEIgBAFIgBAHIAAALIAAAVQAYABARAHQARAGAJAJQAJAHABAKIgCAGQgBADgDACQgCACgGAAQgFAAgDgDIgIgKQgIgMgJgFQgKgHgIgDIgMgFIAAAcIAAArIAAAGIABAKIAAAJIAAAGQAAAMgEAFQgDAEgEgBIgBAAQgDAAgCgCgAkWBnQAKgGALgKQALgJAJgQQAJgPAFgYQAHgXAAggIgBgPIgBgQIgDgOQgBgGgCgDIgDgDIgHgEIgBAAIgBgBQAAgCAEgBIAJgCQAIAAAIADIARAJIAEAEQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBAEIgDAEIgBAEIgBAHIgBArIgDAbIgDATIgFAPQgJASgKALQgLAMgLAHQgLAGgJADIgPAEgAwCBnQAKgGALgKQALgJAIgQQAKgPAFgYQAGgXAAggIAAgPIgBgQIgDgOIgDgJIgDgDIgHgEIgBAAIgBgBQgBgCAFgBIAJgCQAIAAAIADIARAJIAEAEQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIgDAEIgCAEIAAAHIgBArIgDAbQgBAMgCAHIgGAPQgHASgLALQgLAMgLAHQgLAGgKADIgOAEgA0lBcQAVgHASgOQATgMAPgSQAOgTAJgUQAHgNADgMIAFgUIABgJIgBgCIgBAAIgIABIgSADIgXADIgVAEIgNAEIgEACIgDACIgBAAIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBIgGgEIgGgHQgFgEgDgGQgDgHgBgIIABgCIACgBIADADIACADQAEAEAFACIAMACIAIgBIASgBIAWgCIAXgDIASgDIAMgCIACgCIAFgDIADgBQADAAAEADIAJAHIAHAJQAEAEAAACQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgIAFQgFACgDAGQgDAGgCAIQgHAXgLATQgMAWgRAQQgQARgWAJQgWAKgaAAgAAABWIgSgCIgSgEQgIgCgEgEQgEgEgDgEQgDgFgBgFIgCgHIAAgMIgBgRIAAgQIAAgIIgBgqIAAgYQgCgIgCgEQgCgEgEgBIgCgBIgDgBIgCgBIAAgBIAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQABgBAAAAIAIgBQAKABAIADQAKAEAFAFQAGAFABADIgBAEIgDAGIgBAEIgCARIgCAUIgBARQAQgEAOgHIAWgPQAKgHAFgGIAHgGIACgDIABgDIAAgDIgCgDIgCgCIgBgCIAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAHAAAHAEQAGAEAFAFIAJALQADAEgBADQABAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgJABIgEABIgGADIgeAOQgPAGgNAFQgPAFgSACIgBAHIgBAKIAAAKIAAAHQAAANAHAIQAHAIARAAIAKgBIARgBIARgCIALgDIAHgDIADgBIAEAAQAEAAAGACQAGACAEADQAEAEABAFQAAAGgKAEQgJAEgQABIgkABIgNAAgASUBRQgFgDgEgHQgEgGgBgHIACABIAEABIADABIAFACIALABIANAAIAKgBIAGgBIAJgBIAKgCIAGAAIAAgKIAAgPIAAgOIAAgIIgCgKQAAgCgDgDIgIABIgIABIgGABIgEAAIgDAAIgFgBQgFgDgEgGQgEgFgBgIIAPAGQAHABAIAAIAOAAIAQgCIAPgDIAJgCIAEgCIAFgDIAFgBIAJACQAFACAEAEQAEADABACQAAADgDACIgFADIgFAAIgHABIgLABIgMABIgHAAIAEAEIADADIgCADIgBAEIgBAEIAAAJIAAAGIAAAKIAAALIABAJIATgBIALgBIAFgBIAJgCIAGAAIAHACIAJAGQAEAEABADIgBACIgCAEIgHABIgFAAIgDgBIgOgBIgNAAIgIAAQgeAAgTACIgdAEIgMADIgDACIgFABQgCAAgFgEgAGdBBQgFgEgFgGIgJgMQgDgGAAgEIABgCIABgBIAEADIAEAEQACACAEABIAIABIAGABIAHgBIAKgBIAKgBIAHgBIAbgCIAWgCIAWgBIAYgBIAHAAIAIgCIADgBIADgBIAKACIAMAEQAGADADADQAEAEABAEQgBAEgCACQgCACgEABIgGABIgMgBIgJgBIgLgCIgKgBIgMgBIgRAAQgYABgTACIgdAFIgMAEIgEABIgFADIgFABQgFAAgFgEgAkmAbIgGgHIgFgIIgBgGIAAgDIACgHIABgHIAAgJIABgHIgBgdQgBgJgDgFQgDgFgDgCIgDgCIgEgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAEAAQAIAAAHAEQAJADAFAFQAGAEAAACIgBADIgBADIgDALIAAARIAAAIIAAALIAAAIIAAAXQgBAIgBADQgCADgEAAQgEAAgDgEgAwSAbQgEgDgDgEIgEgIIgBgGIAAgDIACgHIABgHIAAgJIABgHQAAgTgCgKQgBgJgCgFQgCgFgEgCIgDgCIgEgDIADgCIAEgBIAEAAQAIAAAHAEQAIADAGAFQAGAEAAACIgBADIgBADQgCAFAAAGIgBARIAAAIIAAALIAAAIIAAAXQgBAIgBADQgCADgEAAQgEAAgDgEgADoAQQgGgHgBgJQABgKAGgGQAIgHAKAAQAKAAAHAHQAHAGAAAKQAAAJgHAHQgHAGgKABQgKgBgIgGgAKiAOQgDgBgFgEQgFgFgEgGQgEgIAAgNIAJAIQAEADAHADQAIACAMAAIAQAAIAYgBIAcgCIAZgBIAQgBIAFgBIAHgCIAEgBQADABAHADQAGAEAEAFQAFADABAEQAAADgDACQgDACgEAAIgGgBIgHAAIgOgCIgPgBIgMgBIgLABIgUAAIgVACIgTACIgKABIgGABIgHACIgGACIgGgDgAs0AOQgEgBgEgEQgFgFgEgGQgEgIgBgNIAJAIQAFADAHADQAIACAMAAIAPAAIAZgBIAbgCIAZgBIARgBIAFgBIAGgCIAFgBQADABAHADQAFAEAFAFQAEADABAEQAAADgDACQgCACgEAAIgGgBIgIAAIgNgCIgPgBIgNgBIgLABIgTAAIgVACIgTACIgKABIgGABIgIACIgGACIgFgDgAHBgjIgGgFIgLgLQgDgEgBgDIAAgFIAAgCIACgBIAEADIAFADIAIACIAMABIAPgBIAUgCIATgDIAQgEIAIgDIAFgBQAGABAGADQAGADAEAEQAEAEAAADQAAAFgCABQgEACgIAAIgRAAIgTACIgRABIgOACIgHABIgLACIgKACIgEABIgGgBgAmtgoIgDgHQgFgIgFgFIgJgJIgIgFQAQABALAFQAJAFAEAGQAFAGAAAFQAAADgCADQgCACgFAAQgEAAgCgCgAmahGIgEgFQgFgJgHgGQgIgGgJgEIAEgBIAGAAQAJAAAIADQAIADAGAGQAGAFAAAHQAAAFgCACQgCACgEAAQgDAAgDgCg");
	this.shape_1.setTransform(123,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AhGA2IgJgKQgFgGgBgIIADABIAEABIACABIAGACIAKABIANAAIALgBIAGgBIAJgBIAJgBIAHgBIAAgJIAAgPIgBgNIAAgIQAAgGAAgEQgBgDgEgEIgHABIgIABIgGACIgDAAIgEABIgFgDQgFgDgEgFQgEgGgBgHIAPAFQAGACAJAAIANgBIAPgCIAQgDIAIgCIAEgBIAGgDIAEgBQADAAAFACQAGACAEADQAEADABADQgBACgCACIgFADIgFABIgHABIgMAAIgLABIgIABIAFADQACADABACIgBADIgDAEIAAAEIAAAKIAAADIAAAKIAAALIAAAJIAUgBIALgBIAFgBIAIgBIAGgBQACAAAGADIAJAGQAFADgBADIAAADIgDADQgCABgEAAIgFAAIgEAAIgNgBIgNgBIgJAAQgeAAgRACIgcAEIgLADIgFACIgDABQgDAAgFgDg");
	this.shape_2.setTransform(248.2,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhCBlQATgKAOgOQAQgPAHgTIAEgQIADgRIABgMIgYACQgRABgTAGIgEACIgEACIgCABIgDABIgDAAQgEAAgFgEIgKgJIgHgIIgCgGIAAgCIABAAIACABIADABIAFADQAFACAEAAIANgBIAUgDIAVgCIATgDIANgCIgBgLQgBgGgCgGQgCgGgEgDIgPACIgVADIgYABIgHAAIgGAAIAAgDIAWgFIAdgIQAQgFAOgGQANgHALgIIACgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAIgBgCIgCgDIgBgCIgBgBIABgBIADAAQAIAAAHADQAGADAEADIAHAHIAFAFIACAHIgBACIgCABIgDAAIgDgBIgCABIgCABIgYAIIgOAEIAMAGIAEAEIABACIgBABIgCADQgBACAAAGIgCAMIAXgBIANgBIAHgBIAEgBIAEgCIAEgCIACAAIAAAAQAFAAAFADQAHADAEAFQAGAEAAAFQgBAEgBACIgEADIgDABIgFgBIgJgCIgKgBIgFgBIgKAAIgNAAIgNABIgLAAQgCATgEAQQgGARgIANQgGAMgNAJQgLAIgKAEIgQAGIgMADg");
	this.shape_3.setTransform(223.6,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AhIASQgEgBgFgFQgFgEgDgIQgEgHgBgMIAJAIQAEADAIADQAHACAMAAIAQgBIAYgBIAagCIAZgBIARgBIAEgBIAHgBIAEgBQAEAAAGADQAGAEAFAFQAEADABAEQAAADgDADQgDABgEABIgGgBIgHgBIgNgBIgPgCIgNgBIgLABIgTABIgUACIgSACIgLAAIgFACIgIACIgGABIgFgCg");
	this.shape_4.setTransform(198.6,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AhUBCIgLgLIgIgMQgDgFAAgEIAAgBIACgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIADADQADADAEABIAIACIAGAAIAHgBIAKgBIAKgBIAGgBIAbgCIAVgCIAVgBIAZgBIAHAAQAEgBADgBIAEgCIACAAIALACIAMAEQAGADADADQAEADAAAFQAAADgCADQgCACgEABIgHABIgLgBIgKgBIgKgCIgKgBIgMgBIgRAAQgWABgTACQgSADgLACIgMADIgEADIgGACIgEACQgFgBgFgEgAgwgjIgGgEIgLgLQgDgEgBgDIgBgFIABgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAFACIAEADIAIADIANABIAOgBIAUgCIATgDQAJgCAFgBIAJgEIAFgBQAGAAAFAEQAGADAEAEQAEAEABADQAAAFgDACQgDABgJAAIgRAAIgSACIgSABIgLACIgHABIgLADIgKABIgFABQgCAAgDgCg");
	this.shape_5.setTransform(173.7,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AgQARQgGgHgBgKQABgJAGgHQAHgGAJgBQAKABAGAGQAHAHABAJQgBAKgHAHQgGAGgKABQgJgBgHgGg");
	this.shape_6.setTransform(148.8,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.2)").s().p("AgBBaIgTgCIgRgDQgIgDgEgEQgFgDgDgFIgDgJIgCgIIgBgLIAAgSIAAgQIgBgIIAAgqQAAgQgBgHQgBgJgDgEQgCgDgEgCIgCAAIgCgCIgCAAIAAgCIAAgBIADgBIAIgBQAJAAAJAEQAJADAGAFQAGAFAAADIgBAFIgCAFIgCAFIgCAQIgBAUIgCASQAQgEAOgIQAMgHAKgHIAQgNIAHgHIACgCIABgEIAAgCIgCgDIgCgDIgCgCIABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAHAAAGADQAHAEAFAGQAFAFADAFQADAFAAACQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgJACIgEABIgGADIgfAOQgOAGgNAEQgQADgSAEIgBAIIAAAKIAAAKIAAAHQgBANAIAHQAHAJAQgBIAMAAIAQgBIARgDIALgDIAGgCIAEgBIAEAAQAEAAAFACQAGABAFAEQAEADAAAGQAAAGgJAEQgKADgQABQgQACgTAAIgNgBg");
	this.shape_7.setTransform(123.9,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.2)").s().p("AgZBlQAKgGALgKQAJgKAJgPQAJgQAGgXQAFgVABgiIAAgPIgCgQIgCgOIgDgJIgEgEIgHgDIgBgBIgBgBQAAgBAEgCIAKgBQAHAAAIADQAIADAKAGIADADQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAEIgDAEIgBAEIgBAHIgBArIgDAbIgDATIgFAOQgIASgLAMQgLAMgLAGQgJAHgJADIgPAEgAgiAcQgDAAgEgDQgEgDgCgEIgEgIIgCgGIABgDIABgHIABgHIABgJIAAgHIgBgdQgBgKgCgEQgDgFgEgCIgDgCIgDgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEgBIAFAAQAHAAAIAEIAOAHQAFAFAAACIgBADIgBADIgCALIgBARIAAAIIAAALIABAIIgBAWQgBAJgBADQgBACgDAAIgCAAg");
	this.shape_8.setTransform(98.5,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.2)").s().p("AguBmQgCgCgEgGQgFgIgCgFIgBgJIABgFIABgEIACgHIABgKIABgSIABgsIABgtIgBgQQgBgGgDgEQgDgFgFgDIgEgDIgCgCIACgCQACgCAJAAIAHAAIAJAEQAHADAJAHIACADIABACIgBAFIgCAGIgCAFIgBAFIAAAGIgBAMIAAAUQAYACAPAHQARAGAJAIQAJAIABAJIgCAGQgBADgDADQgDACgFAAQgEAAgEgEQgDgDgFgHQgIgLgHgFQgKgHgIgEIgMgEIAAAcIAAArIABAGIAAAJIAAAJIAAAGQAAANgEAEQgDAEgEAAQgDAAgDgDgAAngoIgDgHQgFgHgFgFIgJgJIgHgGQAQACAKAEQAJAFAEAGQAFAHAAAEQAAADgCADQgDADgDAAQgEAAgDgDgAA6hFIgDgGQgGgJgIgFQgHgGgJgFIAEAAIAGgBQAIAAAJAEQAIADAGAGQAFAFABAHQAAAEgCADQgCACgDAAQgEAAgDgCg");
	this.shape_9.setTransform(76.8,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.2)").s().p("AhIASQgEgBgFgFQgFgEgDgIQgEgHgBgMIAJAIQAEADAIADQAHACAMAAIAQgBIAYgBIAagCIAZgBIARgBIAEgBIAHgBIAEgBQAEAAAGADQAGAEAFAFQAEADABAEQAAADgDADQgDABgEABIgGgBIgHgBIgNgBIgPgCIgNgBIgLABIgTABIgUACIgSACIgLAAIgFACIgIACIgGABIgFgCg");
	this.shape_10.setTransform(49,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.2)").s().p("AgZBlQAKgGALgKQAJgKAJgPQAJgQAGgXQAGgVAAgiIAAgPIgCgQIgCgOIgDgJIgEgEIgHgDIgBgBIgBgBQAAgBAEgCIAKgBQAHAAAIADQAIADAKAGIADADQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAEIgCAEIgCAEIgBAHIgBArIgDAbIgDATIgFAOQgIASgLAMQgLAMgLAGQgJAHgKADIgNAEgAghAcQgEAAgEgDQgEgDgCgEIgEgIIgCgGIABgDIABgHIABgHIABgJIAAgHIgBgdQgBgKgCgEQgDgFgEgCIgDgCIgDgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAEgBIAEAAQAIAAAIAEIAOAHQAFAFAAACIgBADIgBADIgCALIgBARIAAAIIAAALIABAIIgBAWQgBAJgBADQgBACgDAAIgBAAg");
	this.shape_11.setTransform(23.7,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.2)").s().p("AhHBVQAWgHATgNQASgNANgSQAOgSAJgTQAHgOADgNIAFgUIABgJIAAgBIgCgBIgIABIgSADIgVAEIgVAEQgJABgEACIgEACIgDACIgCAAIgBAAIgFgBIgGgEIgGgGQgFgFgDgGQgEgHAAgIIABgCIABAAIADACIADAEQAEAEAGABQAFACAGAAIAJAAIARgCIAWgCIAVgDIATgCIAKgDIAEgCIAEgCIADgCQADAAAEADIAJAIIAIAIQADAEAAADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgHAFQgFADgDAFIgFAOQgHAYgLATQgMAVgQAQQgPARgWAKQgVAJgcABg");
	this.shape_12.setTransform(-0.9,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-3.9,288.5,41);


(lib.MainTitleText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AgoBCIgIgOQBCgPAig2IALALQggAyhAAVQgBABAAABQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBgAg+gJIAJgNQAQAIAQAMIgKALQgTgLgMgHgAgrguIAIgNQARAKAPAKIgJANIgfgUgAAOgzIAJgGQAKAIALAMIgIAHQgLgLgLgKgAAeg9IAIgHQAKAIALALIgIAIQgLgMgKgIg");
	this.shape.setTransform(93.6,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("AhEAHIAAgNICJAAIAAANg");
	this.shape_1.setTransform(78.8,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AgFgCQgGgFgCAAQgDAAgEAFIgjAlIgMgNIAugrQAEgEAFAAQAFAAADADIBIA+IgOAMIg7g2gAAYgVQgEgFAAgIQAAgHAEgFQAGgFAHAAQAIAAAEAFQAFAFABAHQgBAIgFAFQgEAFgIAAQgHAAgGgFgAAdgqQgDADAAAFQAAAFADADQADADAFAAQAFAAAEgDQACgDABgFQgBgFgCgDQgEgDgFAAQgFAAgDADg");
	this.shape_2.setTransform(63.5,35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFFF").s().p("AAuAtIhnAJQgEAGgCgGIgFgRIAaAAQAXgvAMgzIAMAFQAGAEgHACQgKAsgUApIA/gDQgNgRgIgIIANgHQAVAVATAfIgNAKg");
	this.shape_3.setTransform(48.1,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FFFF").s().p("AhEAHIAAgNICJAAIAAANg");
	this.shape_4.setTransform(32.6,36.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FFFF").s().p("AgIBDIAAhVIg5AAIAAgNIA5AAIAAgjIALAAQAGABgFAEIAAAeIA6AAIAAANIg6AAIAABVgAhDApQAQgWAKgXIAOAFQAEADgHABQgJAVgOAXgAAWAEIAMgIQAXAVALAUIgOAKQgNgXgTgUg");
	this.shape_5.setTransform(17.7,36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FFFF").s().p("AAEAuQAVgHANgMQAMgMAAgPQAAgUgNgNQgNgNgaABIAJAFQAIAEgIADQgJA9gPAPQgIAIgJAAQgKAAgGgGQgPgOABgXQAAgZATgUQAWgVAcAAQAbAAAQAPQARASAAAYQAAAXgPAQQgMALgVAKgAgigdQgQARAAAVQAAAPAJAJQADACADAAQAEAAAEgFQAPgOAGg8QgQADgMAMg");
	this.shape_6.setTransform(100.9,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FFFF").s().p("AgTBHIgDgOIAPAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgaIhBAAIAAgMIBBAAIAAgQIAJAAIASgIIhAAAIAAgKIBLAAIABgCIALAKQABAAAAABQAAAAgBABQAAAAgBAAQgBAAgBAAQgTAKgRAIIAAAGIBBAAIAAAMIhBAAIAAAgQAAAKgIAAgAhDgGIAAgkIBZAAIANgcIANAHQADADgFAAIgKASIAeAAIAAAiIgMAAIAAgWIhsAAIAAAYgAgMg+IAMgHQAHAMADAHIgLAHQgFgLgGgIgAgxg8IAMgHQAHAHAGAKIgNAHQgGgLgGgGg");
	this.shape_7.setTransform(85.1,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FFFF").s().p("AgFBFIAAguIgpAAIAAAIIgNAAIAAhHIA2AAIAAgcIAJAAQAGABgFACIAAAZIA2AAIAABDIgMAAIAAgEIgqAAIAAAugAAFALIAqAAIAAgnIgqAAgAguALIApAAIAAgnIgpAAg");
	this.shape_8.setTransform(69,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FFFF").s().p("AgUAiQAuAAAOgPQAKgKAAgMQAAgOgKgKQgHgIgUAAQgNAAgVAIIgkAPIgHgRIAjgKQAdgJAPAAQAaAAALAMQAMAMABAVQAAASgMAMQgVAVgvABg");
	this.shape_9.setTransform(53.2,13.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FFFF").s().p("AhEA8QASgdAOgqIgbACIgBgNIAfgCQAGgUADgUIANAFQAIADgIACIgIAcIAQgBQAHABAEAEQAIAIAAAXQAAAlgLALQgFAFgHAAQgMAAgMgNIAIgMQAKALAFAAQADAAADgDQAEgHAAgfQAAgQgCgDQgBgCgGAAIgPABQgOAtgSAggAAXgeIALgIQAaAaAJAjIgNAFQgMgngVgTg");
	this.shape_10.setTransform(37.8,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FFFF").s().p("AAAArIgDgbQgCgHgHAAQgQAAgLATQgHALgHARIgOgHQAZgoAkhIIALAIQAFAEgGABQgLATgTAgQALgDAIAAQAHAAADADQAFAEAAANIAFAYQAAAIAJAAQAJAAAFgGQAMgLAHghIANAEQgHAkgLALQgNANgQAAQgTAAgCgVg");
	this.shape_11.setTransform(22,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FFFF").s().p("AgMBAQgVAAgIgHQgIgJAAgLQAAgNAKgKQAHgHASgIQgEgKAAgLIgDgqIANAAQAHACgGAEIACAeQAAAMAEAJQAQgHAdgJIAGAQQg5AJgUAUQgHAHAAAHQAAAGAEAEQAFAFANAAIA6AAIAAANg");
	this.shape_12.setTransform(8.5,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.1,48.5);


(lib.MainText_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.4)").s().p("AcQFPQgRACgTAAQjMAAAAjzIAAlyIAUAAIAAgoIAoAAIAAgKIApAAIAAAyIAKAAIAAFsQAAAaADAXQAiBwB9AAQAQAAAOgBQAlgPAXghQAPgsAAg+IAAlyIAUAAIAAgoIAoAAIAAgKIAqAAIAAAyIAKAAIAAFpQAAD8jYAAQgSAAgQgCgAcWEpIACAAIADgBIgFABgAeVEJQgJAMgLAKQApgQAXglQgTATgZAMgAabEXIgDgEIgRgKQAJAIALAGgAUTFPQgSACgUAAQgfAAgpgJQgpgKgVgNIAAgvQAjAWAjAKIAAgFQgggJgSgLIAAgvQAUAMAUAJIAAgfQBBApBCAAQAVAAARgCQARgHANgKQAIgGAGgHQADgOAAgPQAAgvgZgcQgZgbhSgwQhcgzgYgkQgZglAAgvQAAguAbgkQALgmAggdQAlghA5gIQAigNAtAAQA2AAA2ASIAAAsQgUgJgUgGIAAAIQAZAEAZAJIAAAsQgigPgkgGIAAAVQgkgRgogFQgnAHgaAWQgkAfAAAwIAAACQAFAMAJAKQAZAcBSAvQBVAuAcAlQAbAkABAuQAKAZAAAdQAABFgwAtQgxArhYAAQgPAAgRgCgAWyD0QgRAPgVAKQgHAKgJAJQATgHANgLQAPgMAJgQIgCACgATfgYIgIgIQgYgQgQgPQAPAQAhAXgAVFkcIARgCQgTgCgUAAQgNAAgLABIgCABIAMAAQASAAASACgAz/FQQgRABgSAAQiAAAhMhVQhNhVAAiIQAAhuAvhNQATgvAggkQA7hCBbgQQAvgPA5AAQB6AABMBUQA8BCAMBiQAOAwAAA3QAACWhNBWQhOBWiCAAQgSAAgRgBgA0BEpIACAAIAEAAIgGAAgAxQD5IgCACQgLANgNAKQAkgSAbgeIANgRQgXAYgbAQgA3PDhQAaAfAiASIgOgOQgegSgYgaIAIAJgA2FisQhFBNAAB5QAAAbADAZQAQA4AkApQBABKBsAAQAaAAAXgDQA0gTAlgpQANgPAKgQQAWg5AAhMQAAh+hAhIQg1g8hUgKQhTAKg5BAgAxRjKIACACIgNgQIgCgDIgIgEQALAKAKALgAz1kcIASgCQgTgCgUAAQgVAAgTADIAbgBQARAAARACgAOBFHIAAgyIgJAAIAAAKIgUAAIAAAoIgpAAIAAo1IivAAIAAgmIDDAAIAAgCIivAAIAAgmIAoAAIAAgKIGHAAIAAAmIgoAAIAAAKIiHAAIAAACIC5AAIAAAmIivAAIAAI1gAJwFHIgOgoIgXAAIAOAoIgvAAIhFi9IjAAAIhGC9IgtAAIATgyIgUAAIgEAKIgFAAIgPAoIhCAAIgkgoIgMAAIAkAoIg6AAIjGjgIAADgIgqAAIAAgyIgIAAIAAAKIgUAAIAAAoIgqAAIAApbIAUAAIAAgoIAoAAIAAgKIAqAAIAAAyIAKAAIAAC9IDNjlIAfAAIAJgKIA3AAIkIElIABABIDaj0IA3AAIj2ESID2EQIDPoiIAFAAIAPgoIAkAAIAEgKIAoAAIDhJbIgIAAIASAygAB3EqIAIgVIgbAAgAEzBkICkAAIAAgCIijAAgAi1AqIAjAlIgjgngAFGAyIB/AAIhAisgAmXFHIgegoIgLAAIAAAoIgdAAIk8mrIAAGrIgqAAIAAgyIgIAAIAAAKIgUAAIAAAoIgqAAIAApbIAUAAIAAgoIAgAAIAIAKIAAgUIAgAAIFEG0IAAmCIAUAAIAAgoIAoAAIAAgKIApAAIAAAyIAKAAIAAJbgAnpD2IACAAIgLgOIAJAOgAmsDEIABAAIgBgHgA8UFHIAAgyIgJAAIAAAKIgUAAIAAAoIgpAAIAAo1IivAAIAAgmIDDAAIAAgCIivAAIAAgmIAoAAIAAgKIGHAAIAAAmIgoAAIAAAKIiHAAIAAACIC5AAIAAAmIivAAIAAI1g");
	this.shape.setTransform(205.8,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,411.7,67.6);


(lib.MainText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AjRBAIAAlyIAqAAIAAFsQAADTCpAAQCmAAAAjNIAAlyIApAAIAAFpQABD8jWAAQjNAAAAjzg");
	this.shape.setTransform(563.1,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("AhfEvQgpgKgWgNIAAgvQBBApBCAAQBGAAAkgdQAlgeAAg0QAAgvgYgcQgagbhQgwQhbgzgZgkQgYglgBgvQAAhAAzgtQAxgsBRAAQA2AAA2ASIAAAsQg1gYg8AAQg8AAgkAfQgkAfAAAwQAAAuAZAcQAYAcBQAvQBVAuAcAlQAcAlAAAxQAABFgwAtQgxArhVAAQggAAgogJg");
	this.shape_1.setTransform(514,56.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CCFF").s().p("AgTEuIAAo1IivAAIAAgmIGFAAIAAAmIivAAIAAI1g");
	this.shape_2.setTransform(470.1,56.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("ADHEuIhFi9IkEAAIhGC9IgtAAIDkpbIAmAAIDhJbgAgOjLIhmEWIDoAAIhmkVIgIgZIgGgVIAAAAQgHAcgHARg");
	this.shape_3.setTransform(420.8,56.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("AB+EuIj/kiQgIgHgDgFIgBAAIAAEuIgqAAIAApbIAqAAIAAEdIABAAQAFgIAGgHIDykOIA3AAIkHEmIEYE1g");
	this.shape_4.setTransform(374.4,56.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CCFF").s().p("ADHEuIlmnnQgMgPgIgOIgFgJIgCAAIABAbIAAHyIgqAAIAApbIAgAAIFkHjQAMAPAOAYIACAAQgCgeAAgVIAAnXIApAAIAAJbg");
	this.shape_5.setTransform(317.5,56.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CCFF").s().p("AjNDjQhMhVAAiIQAAiPBOhXQBOhXCGAAQB6AABMBUQBLBTAACIQAACUhNBWQhOBWiAAAQiAAAhMhVgAiqjFQhEBNAAB5QAAB9BABKQBBBKBsAAQBuAABBhJQBChJAAiBQAAiAhAhIQhAhIhuAAQhoAAhEBMg");
	this.shape_6.setTransform(253.9,56.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CCFF").s().p("AgTEuIAAo1IivAAIAAgmIGFAAIAAAmIivAAIAAI1g");
	this.shape_7.setTransform(199,56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,109);


(lib.Filter_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.2)").s().p("EgO+AlgMAAAhK/Id9AAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-240,192,480);


(lib.Filter_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.2)").s().p("EgO+AlgMAAAhK/Id9AAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-240,192,480);


(lib.Filter_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,255,0.2)").s().p("EgO/AlgMAAAhK/Id/AAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-240,192.1,480);


(lib.Filter_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,204,0,0.2)").s().p("EgO+AlgMAAAhK/Id9AAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-240,192,480);


(lib.Polar_single = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,255,255,0.2)").ss(1,1,1).p("EBoRiS0QNcJXMPMPUAeOAePAMpAljECIBg0SQJnYOAAcMUAAAA6ggpVApVQytSt2NKPEAtKhViQHRDgGuE4QEPDFEADoQB+ByB7B7UAaoAaoABAAlSEgLkhwqQHzhBINAAQeMAAYhNpQIIEiHhGDEATYgywQMfDlJ4J3QPePeAAV3QAADugdDjEBFqgahQE/MRAAOTQAAdH0kUlQ0lUk9HAAQlSAAlCgsEgpBg1iQTRwpaJAAQdHAAUlUlQAwAwAuAwEA4rAH5QgEAdgEAdEAeOAuRQgVALgUALEA1UBRPQuKIuwhDCQoyBnpdAAQpUAAothlEBeXhF1UAX5AeBAAAAn7QAAWenkTVEAqPiIQUAirAJPAbOAbKEgqKiFjQSjmYU0g8EgxKipWQZPnzcdAAUAlRAAAAfvANXEh+kh3QQCxjBC9i9QVg1hZPsmEgmhhUbQTaqBXhAAQHHAAGwA7Eh4/hBcQJyyZP3v3QKxqxL7n9EgxOAtdQwmzRAA6JQAAnPBSmuA9Gx/QClktEFkFQLGrGPrAAQBxAABuAJEgvXgLEQDAu3LZrZQK+q+OMjMEhVtgdPQGNziPBv2EhsUCJGQmblZmHmIUgz8gz7AAAhJfQAAlHARlBEiEkAjUQkHwwAAycQAA5qH+2YEhmZAoUQmbxPggzsEga/AqnQjHiWi4i4QoXoXj2qPEAdHAu4QrJF/tnAAQobAAngiUEBS/BSgUggwAfbgtzAAAUgvJAAAghUghVQpSpRmtqXEg/KBCKUgY+gZdgB0gjEEhrVgWPQFO73St2PECkFBOzQsnZQ1iViUgvoAvohBxAD9EAHICNRQhVABhVAAUgxzAAAglYgd/");
	this.shape.setTransform(-29.8,-7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1136.7,-1142.6,2213.8,2269.6);


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,170,255,0.298)").ss(10,1,1).p("AAAj5IAAHz");
	this.shape.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#33AAFF").ss(1,1,1).p("AAAj5IAAHz");
	this.shape_1.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,60);


(lib.ｔｗ_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.instance = new lib.tw_ball_a("synched",0);
	this.instance.setTransform(162.3,-619.2,1,1,0,0,0,134.1,131.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:1.27,scaleY:0.88,y:116},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},2).to({regX:134.2,scaleX:1.2,x:167.7,y:74},3).to({scaleX:1.23,scaleY:0.72,y:116},3).to({_off:true},1).wait(9));

	// レイヤー 5
	this.instance_1 = new lib.tw_ball("synched",0);
	this.instance_1.setTransform(162.3,-629.7,1,1,0,0,0,134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:116},13,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:0.6,y:173.8},2).to({scaleX:1,scaleY:1,y:-15.3},3).to({y:116},2).to({regY:131.9,scaleX:1.51,scaleY:0.56,y:168.6},2).to({regX:133.9,regY:131.7,scaleX:2.06,scaleY:0.44,x:162,y:179},2).to({regY:131.8,scaleX:3.66,scaleY:3.21,x:162.1,y:178.6,alpha:0.301},5).to({_off:true},1).wait(2));

	// Button_FaceBook
	this.instance_2 = new lib.Button_Twitter();
	this.instance_2.setTransform(152,132.1,4.097,4.097,0,0,0,152,132);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({regX:152.1,regY:132.1,scaleX:1,scaleY:1,x:152.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// Button_FaceBook
	this.instance_3 = new lib.Button_Twitter();
	this.instance_3.setTransform(152.2,132.3,2.354,2.354,0,0,0,152.1,132.1);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({scaleX:1,scaleY:1,x:152.1,y:132.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.2,-761.4,268.3,263.4);


(lib.hb_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.instance = new lib.gp_ball_a("synched",0);
	this.instance.setTransform(162.3,-619.2,1,1,0,0,0,134.1,131.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:1.27,scaleY:0.88,y:116},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},2).to({regX:134.2,scaleX:1.2,x:167.7,y:74},3).to({scaleX:1.23,scaleY:0.72,y:116},3).to({_off:true},1).wait(9));

	// レイヤー 5
	this.instance_1 = new lib.hb_ball("synched",0);
	this.instance_1.setTransform(162.3,-629.7,1,1,0,0,0,134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:116},13,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:0.6,y:173.8},2).to({scaleX:1,scaleY:1,y:-15.3},3).to({y:116},2).to({regY:131.9,scaleX:1.51,scaleY:0.56,y:168.6},2).to({regX:133.9,regY:131.7,scaleX:2.06,scaleY:0.44,x:162,y:179},2).to({regY:131.8,scaleX:3.66,scaleY:3.21,x:162.1,y:178.6,alpha:0.301},5).to({_off:true},1).wait(2));

	// Button_FaceBook
	this.instance_2 = new lib.Button_Hatena();
	this.instance_2.setTransform(152,132.1,4.097,4.097,0,0,0,152,132);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({regX:152.1,regY:132.1,scaleX:1,scaleY:1,x:152.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// Button_FaceBook
	this.instance_3 = new lib.Button_Hatena();
	this.instance_3.setTransform(152.2,132.3,2.354,2.354,0,0,0,152.1,132.1);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({scaleX:1,scaleY:1,x:152.1,y:132.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.2,-761.4,268.3,263.4);


(lib.gp_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.instance = new lib.gp_ball_a("synched",0);
	this.instance.setTransform(162.3,-619.2,1,1,0,0,0,134.1,131.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:1.27,scaleY:0.88,y:116},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},2).to({regX:134.2,scaleX:1.2,x:167.7,y:74},3).to({scaleX:1.23,scaleY:0.72,y:116},3).to({_off:true},1).wait(9));

	// レイヤー 5
	this.instance_1 = new lib.gp_ball("synched",0);
	this.instance_1.setTransform(162.3,-629.7,1,1,0,0,0,134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:116},13,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:0.6,y:173.8},2).to({scaleX:1,scaleY:1,y:-15.3},3).to({y:116},2).to({regY:131.9,scaleX:1.51,scaleY:0.56,y:168.6},2).to({regX:133.9,regY:131.7,scaleX:2.06,scaleY:0.44,x:162,y:179},2).to({regY:131.8,scaleX:3.66,scaleY:3.21,x:162.1,y:178.6,alpha:0.301},5).to({_off:true},1).wait(2));

	// Button_FaceBook
	this.instance_2 = new lib.Button_GooglePlus();
	this.instance_2.setTransform(152,132.1,4.097,4.097,0,0,0,152,132);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({regX:152.1,regY:132.1,scaleX:1,scaleY:1,x:152.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// Button_FaceBook
	this.instance_3 = new lib.Button_GooglePlus();
	this.instance_3.setTransform(152.2,132.3,2.354,2.354,0,0,0,152.1,132.1);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({scaleX:1,scaleY:1,x:152.1,y:132.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.2,-761.4,268.3,263.4);


(lib.fb_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.instance = new lib.fb_ball_a("synched",0);
	this.instance.setTransform(162.3,-619.2,1,1,0,0,0,134.1,131.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:1.27,scaleY:0.88,y:116},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},2).to({regX:134.2,scaleX:1.2,x:167.7,y:74},3).to({scaleX:1.23,scaleY:0.72,y:116},3).to({_off:true},1).wait(9));

	// レイヤー 5
	this.instance_1 = new lib.fb_ball("synched",0);
	this.instance_1.setTransform(162.3,-629.7,1,1,0,0,0,134.1,131.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:116},13,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:0.6,y:173.8},2).to({scaleX:1,scaleY:1,y:-15.3},3).to({y:116},2).to({regY:131.9,scaleX:1.51,scaleY:0.56,y:168.6},2).to({regX:133.9,regY:131.7,scaleX:2.06,scaleY:0.44,x:162,y:179},2).to({regY:131.8,scaleX:3.66,scaleY:3.21,x:162.1,y:178.6,alpha:0.301},5).to({_off:true},1).wait(2));

	// Button_FaceBook
	this.instance_2 = new lib.Button_FaceBook();
	this.instance_2.setTransform(152,132.1,4.097,4.097,0,0,0,152,132);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({regX:152.1,regY:132.1,scaleX:1,scaleY:1,x:152.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// Button_FaceBook
	this.instance_3 = new lib.Button_FaceBook();
	this.instance_3.setTransform(152.2,132.3,2.354,2.354,0,0,0,152.1,132.1);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({scaleX:1,scaleY:1,x:152.1,y:132.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.2,-761.4,268.3,263.4);


(lib.ShareAnim_nobuteru = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2C12").s().p("AgNBQIAAgeIAbAAIAAAegAgFAkIgIhGIAAgtIAbAAIAAAtIgIBGg");
	this.shape.setTransform(-334.7,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2C12").s().p("AgNBQIAAgeIAbAAIAAAegAgGAkIgHhGIAAgtIAbAAIAAAtIgHBGg");
	this.shape_1.setTransform(-356.7,80.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2C12").s().p("AhPBOQAOgWAHgTQAIgSAEgPIAIgZIgEABIgIABIgFABIgHABIgHAAIgBgVIAPAAIALgBIALgBIAEgTQACgMAAgNIAZAHIACABIAAACIAAABIgBADIgCABIAAAFIgBAEIgCAHIgCAHIAPgFIAQgIIAAAYIgUAHIgPADQgJAbgJAcQgKAcgOAbgAASBUQgIgBgHgDQgGgDgFgGQgEgHAAgLIAAgFIABgIIASADIAAAEIgBAFIABACIACADQAEADAEABIAKABIAHAAQAOAAAJgBIANgDIADAXIgNACIgZABIgRAAgAAMgOIAPgCIAMAAIAKgBIAMABIAIAAIAAATIgagBIgfADgAAog3IgKgJIAKgJIAJAJIAIAJIgJAIIgIgIgAA/hBIgKgJIAKgKIAKAJIAGAIIgJAJIgHgHg");
	this.shape_2.setTransform(-378.7,79.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2C12").s().p("AhGA3QAWgLANgKQAOgKAJgIIANgQIgFgFIgLgKIgSgMIAPgUIASAOIAQAOIALgSQAFgJADgJIAHgTIAYAKIADACQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABIgEABIgIATIgJARIgNAUIAOANIAPASIgUAUIgLgRIgOgQIgSATQgIAKgMAJQgMAJgRAKg");
	this.shape_3.setTransform(-401.3,79.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF2C12").s().p("AhSA7IASgJQALgGAOgJQANgJAOgPQAMgLAFgLQAIgLADgJIAIgQIhSAAIAAgaIBcAAQADABADgCIAGgDIAQATIgGAEIgFAIIgHARIgIAPIgLAQQAQAMAOANIAdAdIgUAVIgcgfIgagYIgQATQgKAJgNAJQgOAKgUAJg");
	this.shape_4.setTransform(-422.8,80);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF2C12").s().p("AhTA7IATgJQALgGANgJQAOgJAOgPQALgLAGgLQAHgLAFgJIAGgQIhSAAIAAgaIBeAAQADABACgCIAGgDIARATIgHAEIgFAIIgHARIgHAPIgMAQQAQAMAOANIAcAdIgTAVIgbgfIgbgYIgQATQgJAJgOAJQgNAKgVAJg");
	this.shape_5.setTransform(-444.8,80);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF2C12").s().p("AgPA+IAGABIAJABQAGgBACgBQADgCAAgDIgBg6QgJALgKAMQgLAMgNAKQgNAJgOAJIgTgTQARgIAPgLQAOgLALgMQALgLAIgNIhEAAIAAgYIBQAAIgBgpIAaACIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAABIgCABIgCADIgBABIABAfIAtAAIAAAYIgsAAIABBRQAAAPgEAGQgFAGgKACQgKACgNAAg");
	this.shape_6.setTransform(-467,79.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF2C12").s().p("AgIBbQgKgCgIgFQgIgFgFgKQgFgJAAgQIAAgNIACgLIgNgDIgOgFIADgWIAMAEIAJADIAJABIAEgMIAFgRIgMgCIgJgCIgLgDIACgZIAMAEIALAEIAOADIAGgRIAEgMIADgLIAYAJIADACQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgFABIgEAIIgEAJIgDAIIAJABIAJAAIAKAAIgFAXIgHABIgKgBIgNgBIgEAMIgFAPIAGABIAGAAIANAAIANgBIgFAXIgIABIgNAAIgJAAIgJgBIgCAKIgBAKIACAKQABAFAEAFQAFAEAGABIAIABQAJAAAKgDQAJgDAGgHQAGgIAAgNQAAgIgCgGIgEgMIgEgHIAVgJIAGAKIAGAQQACAJAAALQAAAOgGALQgGAKgJAGQgJAGgLADQgMADgKAAIgEABQgEAAgHgCg");
	this.shape_7.setTransform(-180.8,44.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF2C12").s().p("AhXBdIAAi5ICtAAIAAAXIhLAAIAAAdIA9AAIAABOIgZAAIAAgIIgkAAIAAAeIBNAAIAAAYIiWAAIAAAJgAg+A8IAxAAIAAgeIgxAAgAg+AHIBtAAIAAgZIhtAAgAg+goIAwAAIAAgdIgwAAg");
	this.shape_8.setTransform(-202.5,44.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF2C12").s().p("AhiBMQAZgKARgNQAQgOAKgSQAJgRAFgVIhLAAIAAgYIBOAAIABgKIAAgJIAAgFIAAgRIgBgNIAcACIACAAIABADIgBACIgDADIAAADIAAADIAAAHIAAAGIgBANIAAAMIBTAAIAAAYIhRAAQAFAPAGALQAHANAJALQAKALANAKQAOAJAUAKIgWAVQgWgNgOgMQgOgMgJgOQgKgNgHgRQgIAVgLAPQgLAPgOAMQgOALgTAJg");
	this.shape_9.setTransform(-224.9,44.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF2C12").s().p("AA5BfIAAgHIiMAAIAAgXICMAAIAAgVIh5AAIAAgXIB5AAIAAgSIiLAAIAAgUIBGAAIAAhNIAZACIAEABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAACgDADIgEADIAAA/IBIAAIAABwgAAbggQAMgOAHgNQAHgNAEgMIAXAGIADABQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBACIgCABIgCAAIgBADQgIASgIAMIgLAQgAhEg1QgIgMgGgIIAVgMIAPAWQAIAMAIARIgWAMQgIgSgIgNg");
	this.shape_10.setTransform(-246.7,44.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF2C12").s().p("AhWBFIAIABIAJAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgmIgGACIgHABIgEACIgCABIgBACIgDADIgBABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgCgGIgCgXIAGgCIAJgCIAJgCIAHAAIAAgiIgdAAIAAgYIAdAAIAAgkIATABIAFABQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAACIgCACIgCACIAAACIAAAYIAXAAIAAAYIgXAAIAAAcIAHgCIAJgDIAHgDIAAAWIgLAEIgMAFIAAA+QAAAGgFAEQgEADgIABQgHACgKAAgAgfBYIAAgYIB+AAIAAAYgAA8AyIAAgGIgwAAIAAAGIgVAAIAAiMIBdAAIAACMgAAMAUIAwAAIAAgeIgwAAgAAMgiIAwAAIAAghIgwAAg");
	this.shape_11.setTransform(-268.8,44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF2C12").s().p("AhYBbIAAgWIBSAAIAAgqIgyAAIAAgXIAyAAIAAghIgvAAIgJAQIgLAQIgYgLIAIgJIAGgJIAHgLQAIgQAEgMIAHgWIAXAHIAEABQABABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAACIgCABIgDACIgCACIgCAIIgEALIAkAAIAAgnIAZABIAEABQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIgBABIgBACIgDACIgBACIAAAbIBGAAIAAAWIhGAAIAAAhIAxAAIAAAXIgxAAIAAAqIBQAAIAAAWg");
	this.shape_12.setTransform(-291.2,44.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF2C12").s().p("AhIBbIAAg1IgWAAIAAgXIAWAAIAAhFIA9AAIAAgPIhPAAIAAgVIC1AAIAAAVIhPAAIAAAPIA+AAIAABFIAVAAIAAAXIgVAAIAAAbQAAAMgDAFQgDAGgIABQgIACgQAAIgKgbIAFABIAFAAQAIAAADgCQACgCAAgFIAAgSIhgAAIAAA1gAAMAPIAlAAIAAgPIglAAgAgvAPIAkAAIAAgPIgkAAgAAMgSIAlAAIAAgQIglAAgAgvgSIAkAAIAAgQIgkAAg");
	this.shape_13.setTransform(-312.7,44.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF2C12").s().p("AhFBgIgCgBIgTgJQAKgRAGgRQAHgSAFgSIAWAMIgIAXQgFAOgIAQIgCAGIgBADIAAACIAAACIgBACIgBAAIgDAAgAgsBSQAMgKAFgLQAGgLABgOIABgfIgIACIgGABIgLgVQAMgBAMgDQAMgCAMgGQgEgEgEgGQgGgFgIgMIgTAAIAAgUIAxAAIAAgXIAYACIAEABIABABIAAABIgBABIgCACIgBABIAAAOIA+AAIAAAUIgbAAIgOAQIgOAMQANAEAOADQANACAPABIgJAVIgJgCIgFAAIAABZIgYAAIAAgkIg1AAQgDANgGAIQgGAJgHAIgAACAiIgBAFIAzAAIAAgLIgyAAIAAAGgAAQgHIgNAGIAAAJIAxAAIAAgIIgQgGIgMgFIgIAEgAAOgsIAKAJIALgIIAHgJIgjAAIAHAIgAhQgGIgSgMIANgTQANAGAHAGIAKAJIgPASIgKgIgAhMhHIgKgHIAPgRQAIAFAGAGQAHAEAGAIIgRARIgPgQg");
	this.shape_14.setTransform(-335.2,44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF2C12").s().p("AhABdIAAhUIgGABIgFABIgEAAIgEABIgCAAIgCADIgCAAIgCAAIAAgCIgDgUIAGAAIAIAAIAHgIIAGgIIgPgKIgQgKIALgRIAEACIAEADQAHgKAEgIIAIgTIAWAJIABABIABABIgBABIgBABIgDABIgDADIgLASIgIANIAEADIADADIALgPIAGgJIADgHIAVAKIABABIAAABIgBADIgCAAIgDABIgDADIgFAIIgGAIIgLANIgKANIALgBIAGAAIgDgJIgCgFIATgDIAHAPQADAJABALIgTADIgBgEIgBgFIgDABIgEABIAABYgAgRBcIAAgVIAwAAIAAgcIggAAIAAgVIAgAAIAAgTIAYABIACAAIABACIgBACIgBABIAAABIgBADIAAAJIAiAAIAAAVIgiAAIAAAcIApAAIAAAVgAhkBIQAGgOACgMQADgMABgNIASAEIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBABIgCACQgBANgDAMIgHAYgAgfAtIgDgXIASgFQACAPADAMIAEARIgTAFIgFgVgABGADIgPgEIgPgLIgOAIIgNAEIgOAFIgMgTQALgBAHgDQAIgEAKgFIgKgNIgMgRIAOgHIgXAAIAAgWIBaAAIALALIgNAWIgLAOIgKAMIANAIIANAFIAQAGIgPARIgQgGgAAgg0IAJAKIAHgJIAIgNIghAAIAJAMg");
	this.shape_15.setTransform(-356.9,44.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF2C12").s().p("AhTAzQgCgRABgRQAAgYADgaQAEgaAGgZIAVAJIADABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAIgBAAIAAACIgCABIgCAAIgCAEIgCAHIgBAEIgCANIgDATIgCAUIgBAOIAAAGIAAAIIABAKIAJgOIAOAKIgHANIgGASIgFASIgUADQgFgRgCgRgAAFBVQgFgBgHgDQgIgDgGgHQgFgGgBgMQABgJAFgHQAFgGAJgDQAHgDAKAAIAHAAIAHAAIgCgUIgBgOIAAgNIgUABIgSAAIAAgXIAHACIAKAAIALAAIAKgCIAAgKIAAgIIABgJIAAgNIAYADIAFACIABACIgCACIgCABIgCALIgCAQIAIgBIAKgDIAKgFIAAAZIgPADIgNACIABAVIAAAQIACAVIAKADIALAGIARALIgMAWIgLgJIgNgIQAAAIgCAGQgDAHgHAEQgIADgOAAIgKAAgAgBAvQgFACAAAEQAAAEAFADQADADAJAAQAHAAADgCQADgCABgDIAAgJIgHgBIgJgCQgIAAgCADg");
	this.shape_16.setTransform(-378.1,44.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF2C12").s().p("AgiBIIAJABIAHAAIAFgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABgBAAAAIAAgHIhEAAIAAgSIBEAAIAAgJIhQAAIAAgRIBQAAIAAgJIhEAAIAAgPIBEAAIAAgIIg2AAIAAgoIA2AAIAAgIIhQAAIAAgTIBQAAIAAgPIAYAEIACABIAAABIAAABIgCACIgBAAIAAACIAAAEIBPAAIAAATIhPAAIAAAIIA2AAIAAAoIg2AAIAAAIIBEAAIAAAYIAMAAIAAARIgMAAIAAAhIgXAAIAAgGIgtAAIAAAQQAAAGgDAEQgCAEgHACQgHACgQABgAAMAsIAtAAIAAgJIgtAAgAAMASIAtAAIAAgJIgtAAgAAMgdIAfAAIAAgLIgfAAgAgrgdIAgAAIAAgLIggAAg");
	this.shape_17.setTransform(-400.7,44.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF2C12").s().p("AhcBcIAAhGIBMAAIAABEIgYAAIAAgHIgcAAIAAAJgAhEA+IAcAAIAAgUIgcAAgAAYBYQgMAAgGgFQgGgGAAgNIAAhVIA+AAIAAguIg9AAIAAgXIBXAAIAABiIgaAAIAAgHIgmAAIAAA3QAAAFACACQACADAGAAIAfAAQAGgBACgDQADgEAAgGIABgKIAUALQgBARgHAJQgGAJgOAAgAhVAMIAAgQIBBAAIAAAQgAhVgOIAAgSIBAAAIAAASgAhggsIAAgTIBXAAIAAATgAhShJIAAgSIA9AAIAAASg");
	this.shape_18.setTransform(-422.4,44.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF2C12").s().p("AAHA8IAMgEQAHgDAHgEQAHgFAHgIQAHgIADgIQADgIACgIIABgKQAAgJgEgKQgDgKgJgJQgHgHgHgDQgHgDgGgBIgLgBQgDAagFATQgDASgFANIgJAUIgHAOQgFAIgFAFQgFAFgGAAQgDAAgHgEQgHgDgIgIQgIgHgFgLQgGgLAAgPQABgRAGgQQAHgRANgNQANgNASgIQASgHATAAQAXAAATAJQASAKALASQALASAAAZQAAAMgEAMQgEAMgGAJQgIAMgKAHQgJAIgJAEIgQAHgAgbgyQgGADgIAIQgIAHgFAJQgFAJgCAIQgCAHgBAHQAAAJADAGQADAGADADQAEADACAAQADAAAFgGQADgHAEgKQAFgKADgKIAHgYIAFgXQgGABgHAEg");
	this.shape_19.setTransform(-444.7,44.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF2C12").s().p("AgOBOIgSgCIgQgEQgIgDgFgFIgFgGQgCgEAAgHQAAgJADgIQADgIAFgGIALgKIAUAQIgGAFIgFAHIgCAHIABAEIACACQADAEAHABIAPABIALAAIAegBIAVgCIARgDIABAbIggADIgkACIgPgBgAgIggIAVgTIgcAAIgUgBIgPAAIgFgaQAOADAPABQAPABANABIAYgBIAYgCIALATIgUAOIgTAPIgQAMg");
	this.shape_20.setTransform(-467,44.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(5,1,1).p("A3QmsMAyxAAAQDIAAAADIIAAHJQAADIjIAAMgyxAAAQjIAAAAjIIAAgiQi/AWhRhFQCIgRCIiSIAAjVQAAjIDIAAg");
	this.shape_21.setTransform(-328.9,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},73).wait(74));

	// レイヤー 1
	this.instance = new lib.Nobuteru("synched",0);
	this.instance.setTransform(42.4,83.2,1,1,0,0,0,0,55.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-586.8,y:68.2},19).wait(72).to({regX:-2.5,regY:49.6,x:-589.3,y:69.5},0).to({x:-838.5},18).to({_off:true},1).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,27.4,77.9,111.6);


(lib.ButtonShare_in_no_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,stop:12});

	// TextShare
	this.instance = new lib.TextShare_in_a("synched",0,false);
	this.instance.setTransform(103.4,149.5,1,1,0,0,0,57,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// IconShare
	this.instance_1 = new lib.IconShare_in_a("synched",0,false);
	this.instance_1.setTransform(101.8,77.1,1,1,0,0,0,68.9,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.5,104,4.8,6.6);


(lib.ButtonMenu_no_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"stop":12});

	// TextMenu
	this.instance = new lib.TextMenu_in_a("synched",0,false);
	this.instance.setTransform(104.5,142.7,1,1,0,0,0,57,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// IconHome
	this.instance_1 = new lib.IconMenu_in_a("synched",0,false);
	this.instance_1.setTransform(101.8,77.1,1,1,0,0,0,68.9,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48,39.9,127.5,126.6);


(lib.ButtonHome_in_no_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,start_stop:12,end:17,end_stop:25});

	// TextHome_in
	this.instance = new lib.TextHome_in("synched",0,false);
	this.instance.setTransform(105.5,158,1,1,0,0,0,46.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({startPosition:7},0).to({x:-134.5},8,cjs.Ease.get(-1)).wait(1));

	// IconHome
	this.instance_1 = new lib.IconHome_in("synched",0,false);
	this.instance_1.setTransform(101.8,77.1,1,1,0,0,0,68.9,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({startPosition:9},0).to({x:-138.3},8,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.3,16.8,57.8,155);


(lib.Nanika_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Nanika("synched",0);
	this.instance.setTransform(0,0,2.295,2.295);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.46,scaleY:1.46},4,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-521.1,-266.6,1042.2,533.4);


(lib.CircleExtention = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.TealCircle("synched",0);
	this.instance.setTransform(384.1,240.1,0.087,0.087,0,0,0,180.1,180.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:179.8,regY:179.8,scaleX:2.97,scaleY:2.97,x:383.4,y:239.4},11,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367.1,223.1,33.9,33.9);


(lib.TU_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TO
	this.instance = new lib.TU("synched",0);
	this.instance.setTransform(0,0,1.606,1.606);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

	// TO
	this.instance_1 = new lib.TU("synched",0);
	this.instance_1.setTransform(0,0,1.549,1.549);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// TO
	this.instance_2 = new lib.TU("synched",0);
	this.instance_2.setTransform(0,0,1.404,1.404);
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.1,-585.2,778.5,1170.5);


(lib.Toha_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.トゥイーン1("synched",0);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.instance_1 = new lib.トゥイーン2("synched",0);
	this.instance_1.setTransform(0,119.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true,y:119.9,alpha:1},5,cjs.Ease.get(-1)).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},5,cjs.Ease.get(-1)).to({scaleX:1.88,scaleY:1.88,alpha:0},4).to({_off:true},1).wait(1));

	// レイヤー 1
	this.instance_2 = new lib.トゥイーン1("synched",0);
	this.instance_2.alpha = 0.199;
	this.instance_2._off = true;

	this.instance_3 = new lib.トゥイーン2("synched",0);
	this.instance_3.setTransform(0,119.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true,y:119.9,alpha:1},5,cjs.Ease.get(-1)).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},5,cjs.Ease.get(-1)).to({scaleX:1.32,scaleY:1.32,alpha:0},5).to({_off:true},1).wait(1));

	// レイヤー 1
	this.instance_4 = new lib.トゥイーン1("synched",0);

	this.instance_5 = new lib.トゥイーン2("synched",0);
	this.instance_5.setTransform(0,119.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},5).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,y:119.9},5,cjs.Ease.get(-1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-93.3,244.2,186.8);


(lib.TO_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TO
	this.instance = new lib.TO("synched",0);
	this.instance.setTransform(0,0,1.606,1.606);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

	// TO
	this.instance_1 = new lib.TO("synched",0);
	this.instance_1.setTransform(0,0,1.549,1.549);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// TO
	this.instance_2 = new lib.TO("synched",0);
	this.instance_2.setTransform(0,0,1.404,1.404);
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-462.6,-695.5,925.2,1391.2);


(lib.NN_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TO
	this.instance = new lib.NN("synched",0);
	this.instance.setTransform(0,0,1.606,1.606);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

	// TO
	this.instance_1 = new lib.NN("synched",0);
	this.instance_1.setTransform(0,0,1.549,1.549);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// TO
	this.instance_2 = new lib.NN("synched",0);
	this.instance_2.setTransform(0,0,1.404,1.404);
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.6,-575.3,765.4,1150.8);


(lib.KA_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TO
	this.instance = new lib.KA("synched",0);
	this.instance.setTransform(0,0,1.606,1.606);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).wait(1));

	// TO
	this.instance_1 = new lib.KA("synched",0);
	this.instance_1.setTransform(0,0,1.549,1.549);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// TO
	this.instance_2 = new lib.KA("synched",0);
	this.instance_2.setTransform(0,0,1.404,1.404);
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.2,-547.6,728.6,1095.4);


(lib.何も阻む物が無い = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// だ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD3CD4").s().p("AhWBVQAOgYAJgUQAIgVAFgQIAIgaIgEABIgJABIgFABIgIAAIgHABIgCgXIARAAIAMgBIAMgCIAEgUQACgNAAgOIAbAHIADACIAAABIAAACIgCADIgCACIAAAEIgBAFIgCAHIgCAIIARgGIARgIIAAAaQgNAFgKACIgQAEQgJAdgLAfQgLAegOAegAAUBbQgKgBgIgDQgGgDgFgHQgFgGAAgNIAAgGIACgIIAUAEIgBADIAAAGIABADIACADQADADAGABIALABIAIAAQAOAAAKgBIAOgEIADAaIgOACIgbABIgGAAIgMgBgAANgQIARgBIALgBIALAAIAPAAIAIABIAAAVQgNgCgQABQgPAAgSADgAArg8IgLgKIALgKIAKAKIAIAKIgKAJIgIgJgABFhHIgLgKIAKgKIALAKIAIAIIgLAKIgHgIg");
	this.shape.setTransform(58.8,107.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21).to({_off:false},0).to({_off:true},7).wait(5));

	// 覚
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD3CD4").s().p("Ah0BhQAVgDASgHQATgJANgPIgbAAIAAhmICUAAIAABmIgoAAIAAAQQAAAFADACQACACAGABIAcAAQAGgBACgDQADgEABgGIADgOIAbAQQgBALgDAJQgDAJgGAGQgGAFgJAAIg/AAQgKAAgGgFQgGgGAAgIIAAgjIgmAAIAUAHIADACQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABIgGAAQgDAFgJAHQgJAJgQAJQgRAJgZAHgAgpApIBVAAIAAgKIhVAAgAgpAPIBVAAIAAgJIhVAAgAgpgIIBVAAIAAgJIhVAAgAhygQIAAg4IAuAAQgDgHgFgGIgKgOIAagQIAMAQIALARIgUAKIAyAAIgFgNIgGgMIgIgOIAagNIAIAOIAHAMIAGAQIgcAKIAoAAIAMgWIAJgXIAaAJIADAAIAEADIACADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgHACIgEAIIgGAKIgFAHIA0AAIAAA2IgfAAIAAgeIipAAIAAAgg");
	this.shape_1.setTransform(34.4,108.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(21).to({_off:false},0).to({_off:true},7).wait(5));

	// 感
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD3CD4").s().p("AgeB3QgGAAgFgBQgGgDgDgEQgDgDgBgFIAAg2IAeABIAEABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgBABIgCABIgBABIgBACIAAAYQAAAEACACIAHACIAEAAIAhAAQAEAAAEgBQAEgCAEgFQADgFABgMIAZAQQABAEgBAGQgCAFgEAJIgEAFQgDADgGADQgGADgLgBgAh2BnQAHgJAGgLIAJgTIAGgRIAaAMIAEACQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAIgBABIgBABIgEABIgCABQgDAMgHANQgHAOgKAMgABPBTQgIgMgHgHIAagRIAKAOIAMAQIAKATIgZARQgKgTgIgLgAgCBDIgNgQIATgOIAPAQIAKAOIgYAPIgHgPgAh5AjQAGgLAFgMQAFgMADgOQADgPAAgYIgBgSIAAgTIBuAAIgBgOIAAgNIAcACIAFABQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIgDACIgDAEIgBAEIAAAHIABAFIAdAAIgGgHIgJgJIAXgNIAKAJIAKAMIgMAIIAkAAIAAAbIhPAAQAEARADAJIAGAPIAKgRIAJgVIAYALIAFAEIABABQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIgCABIgDAAIgBABIgLAVIgOATIAIAHQAGADADABQAEAAACgDIACgIIAAgGIAZANIgBAJIgFANQgCAIgGAEQgEAGgHAAIgJgBQgFgCgJgGQgJgEgLgLIgMAOQgGAFgJAFIgWgTIgtAAIAAAJIgZAAIAAg7IBJAAIAAAvIAMgIQAHgGAKgKIgHgOQgEgIgEgMQgEgMgEgSIhUAAIgBAnQgBARgCAKQgDAOgFAKQgFALgGALgAgpAJIAdAAIAAgOIgdAAgAhAggIAAgVIBIAAIAAAVg");
	this.shape_2.setTransform(6.7,107.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(21).to({_off:false},0).to({_off:true},7).wait(5));

	// う
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CE904").s().p("AgQAnIAIgDIAIgFIALgJIAFgKQACgGAAgGQAAgDgBgCQgCgDgCgBIgFgBIgIACIgIADIgKAEIgIACIgFgLIAJgDIALgEIALgDIAMgCIAEAAIAGACIAFAEQADAEABAEIABAIQAAAHgDAJQgDAIgGAHQgFAGgFADIgKAGIgIAEgAAHggIgJgBIgMgCIgBgOIAMADIAIABIAMAAIgCANIgIAAg");
	this.shape_3.setTransform(53,88.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(14).to({_off:false},0).to({_off:true},14).wait(5));

	// い
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2CE904").s().p("AgdAkIgDgCQgGgGgDgKQgDgLAAgOIABgMIABgJIACgIIAMADIABAAIACACIgCABIgCACIgBAGIAAAIIgBAKQAAAKABAFQACAGACACQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBIADgFIADgFIABgGIAKAJIgGANQgDAFgEAEQgDADgFAAIgFgBgAAbgBQgCgJgEgGIgGgLIAMgGIAGAKQAEAHADAJQAEAHABANIgOAEQgBgMgDgGg");
	this.shape_4.setTransform(41.9,88.6);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(14).to({_off:false},0).to({_off:true},14).wait(5));

	// と
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2CE904").s().p("AgIAuIgHgBIgGgDQgGgEgDgFQgDgFAAgGQAAgHADgFQAEgFAFgEIAMgGIgFgEIgCgGIgBgCIgBgGIgCgHIgCgNIAPgCIAAAHIABAKIACAKIADAEIABADIAIgEIAGgCIAGgEIAJgDIAEANIgRAGIgPAFIgIAFIgGAFIgFAFQgCADAAAEQAAAEACADQADADAFABIAKABQAHAAAJgCIASgDIAAAPIgOACIgSABIgKgBg");
	this.shape_5.setTransform(30.3,88.5);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:false},0).to({_off:true},14).wait(5));

	// い
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2CE904").s().p("AgwA8IgGgFQgKgJgFgRQgEgRAAgYIAAgVIACgPIADgNIAVAGIACABIACACQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgEABIgCALIgBANIgBASQAAAQADAJQACAJADAEQADADACAAQACAAADgDIAFgIIAEgKIAEgIIAPAOIgKAVQgFAJgGAGQgGAGgHAAQgFAAgDgCgAAtgDQgFgOgFgLIgKgRIATgKIALARQAGAKAFAQQAGANACAWIgWAFQgDgTgEgMg");
	this.shape_6.setTransform(14.5,86.4);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(14).to({_off:false},0).to({_off:true},14).wait(5));

	// 無
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2CE904").s().p("AhOBEQAJgGAHgIQAGgIAFgHIAPALIACABIABACIgBABIgBABIgDAAIgBABIgPARIgJAIgAgWBAQgBgIgDgIIAQgFQADAHACAIQADAIAAAKIgTAFIgBgRgAAyA/IgKgMIAOgLIANAMIAMAPIgPANIgOgRgAALA8IgEgMIAPgFIAEAHIAFAKIADANIgSAFQgCgKgDgIgAhGAiIAAgSIAUAAIAAgVIgbAAIAAgSIAbAAIAAgUIgGAGIgFAGIgTgJQAMgJAIgKQAIgLAGgKIAVAGIABAAIACACQAAABAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIgDACIgDABIgDADIBpAAIAAASIgTAAIAAAXIAbAAIAAASIgbAAIAAAVIAUAAIAAASgAAYAQIAMAAIAAgVIgMAAgAgCAQIAJAAIAAgVIgJAAgAgfAQIALAAIAAgVIgLAAgAAYgXIAMAAIAAgXIgMAAgAgCgXIAJAAIAAgXIgJAAgAgfgXIALAAIAAgXIgLAAg");
	this.shape_7.setTransform(-3.7,86.9);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(14).to({_off:false},0).to({_off:true},14).wait(5));

	// が
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgMAiIgDAAIgCgKIADABIADAAIAEgBIACgCIADgFIABgFIABgGIAAgFQAAgCgBgCQgCgDgEAAIgDAAIgCABIgFAOIgFANIgHAMIgJgEIAHgLIAFgLIAEgLIgEACIgEABIgEAAIgEgJIAGgBIAFgBIAHgBIAAgGIABgEIAAgHIAKABIACABIAAAAIAAABIgBAAIgBABIAAABIAAAEIgBACIAAAEIADgBIADAAQAEAAACACQACABACADIABAHIABAEIgBAMQgBAGgCAEQgCAFgCACIgCACIgGABIgEAAgAAMABIAEgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgDgHQgDgFgHgIIAIgFIAEAFIAFAIQADAEACAEQACAEAAABIgBAFIgDACIgEABIgDABgAAVgVIgDgEIAEgDIAEADIADAFIgEADIgEgEgAAfgaIgEgDIAFgEIAHAHIgFAEIgDgEg");
	this.shape_8.setTransform(54,67.3);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(7).to({_off:false},0).to({_off:true},21).wait(5));

	// 物
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgKAfIAGgDIAEgIIAIgJIAGgLIADgHIABgGIgDAAIgGANIgGAKQgDAEgCAFIgIgFIADgEIAFgFIACgFIADgFIACgFIABgDIgDAAIgDAGIgBADIgIgEIACgDIABgCIgEAAIAAANIACgBIAFgCIAAAHIgDABIgCABIgCACIAAAeIgKAAIAAgbIgDABIgDABIgBAAIgBAAIgBABIgBABIgBACIgBgBIgBgBIgBgLIAFgBIADgBIAGgBIAAgOIgGAAIgBAFIgBADIgJgCIACgGIACgJIABgKIAKACIABAAIAAABIgBABIgBAAIAAABIgBABIAAACIAAABIAEAAIAAgOIAKABIAAABIABAAIAAABIgBAAIAAABIAAAAIAAAKIAHAAIAAAFIACgFIABgGIAAgIIALACIABABIAAAAIAAABIgBAAIgBABIgBABIgBADIAAADIgBADIAfAAIAAALIgBAMIgBAMIgBAKIgCAHQgCADgEACQgDABgHABIgEgLIAEAAIACAAIAEAAIACgEIABgEIABgKIABgJIAAgMIgBAAIgCAIIgEAMIgJAPQgGAIgHAIg");
	this.shape_9.setTransform(41.6,67.7);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(7).to({_off:false},0).to({_off:true},21).wait(5));

	// む
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgFAkIgFAAIgGgBQgCgBgCgCQgCgBAAgEIAAgCIAAgDIgCAAIgDgCIgEgEQgBgDAAgEQAAgGACgDQABgBADgBIAFgCIAEAAIABgEIAAgCIgHAAIgHABIgCgKIAHAAIAFAAIAEAAIAAgKIAAgGIAJABIACABIABABIgBAAIAAABIgBAAIAAABIgBAJIAHgBIACgCIAEgBIAAAKIgGACIgHABIAAAEIgBAEIAAAEIABABIABACIgBAFIgBAFIgCAGIgBAEQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAIAFABIAMgBIAGgDIABgEIgBgEIgEgIIAJgDIAEAIIACAHIAAACQgBAFgBACIgDADIgDACIgIACIgJABIgFAAgAgXAEQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIAAADIACABIACABIACgBIACgDIAAgEIAAgCIgDgBQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBABgAAXgMIgFgEIgGgFIAFgIIAJAHIAHAHIgGAHIgEgEg");
	this.shape_10.setTransform(33.3,66.7);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(7).to({_off:false},0).to({_off:true},21).wait(5));

	// 阻
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AglAmIAAhLIAcAAIAFAGIgBADIgCADIgEAHIgCAFIgBACIgCACIAEAGIADAFQACAEAAAFIgBAEIgBAEIgFAFIgFACIgFAAIgEgIIAAAUgAgcAQIACAAIABAAIADAAIACgBIACgCIAAgEQAAgEgBgEIgDgEIgEgFIAJgTIgLAAgAgQAkIAAgJIAMAAIAAhAIAlAAIAABAIAFAAIAAAJgAAEAbIATAAIAAgMIgTAAgAAEAFIATAAIAAgLIgTAAgAAEgPIATAAIAAgMIgTAAg");
	this.shape_11.setTransform(24.3,66.8);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(7).to({_off:false},0).to({_off:true},21).wait(5));

	// も
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF2C12").s().p("AgJBeQgJgCgJgFQgIgGgFgKQgGgJAAgQIABgOIACgMIgOgCIgPgFIAEgXIAMAEIAJADIAKACIAEgNIAFgSIgMgCIgKgCIgLgDIACgaIAMAEIAMAEIAPADIAGgRIAEgNIADgLIAYAKIAEABIACADQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgFABIgEAJIgFAJIgDAJIAKAAIAJAAIALAAIgGAZIgIAAIgKgBIgNgBIgEANIgGAPIAHABIAGAAIAOAAIANgBIgGAYIgIABIgNAAIgJAAIgJgBIgCAKIgBALIABAKQACAGAEAEQAFAEAGACIAIABQAKAAAJgDQAKgEAGgHQAHgIAAgOIgCgOIgEgMIgEgIIAVgJIAGAKQAEAHACAKQADAJAAAMQAAAOgGALQgGAKgKAHQgKAGgLAEQgMADgLAAQgHAAgJgCg");
	this.shape_12.setTransform(5.2,68.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},28).wait(5));

	// 何
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF2C12").s().p("AhHBhIAAhtIAAACIgCACIgDADIgDADIgXgNIAKgKIAKgMQAGgIAFgKQAIgPADgJIAGgRIAVAHIAGACQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIgBADIgCABIgCABIgCACIgGAPIgGAMIADAEIABACIgBACIgBACIgBACIgCADIAACFgAAhBGIAKACIAEAAQAHAAACgCQADgDAAgEIAAh3IhVAAIAAgYICBAAIAAAYIgUAAIAACDQAAAJgDAEQgEAFgJABQgJACgOABgAgcA5IAAhcIBFAAIAABOIgtAAIAAAOgAgEATIAVAAIAAgfIgVAAg");
	this.shape_13.setTransform(-13.9,67.1);

	this.instance = new lib.Nanimo("synched",0);
	this.instance.setTransform(-26.3,47.8,0.971,0.971,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({regX:0.4,scaleX:0.6,scaleY:0.6,x:38.7,y:58.3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,46.8,46.3,40.1);


(lib.MainText_mian_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MainText("synched",0);
	this.instance.setTransform(384,54.5,0.147,0.147,0,0,0,383.9,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:384,scaleX:1,scaleY:1},5,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,46.5,112.8,16);


(lib.MainText_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 10
	this.instance = new lib.MainText_glow("synched",0);
	this.instance.setTransform(382.3,56,1,1,0,0,0,205.8,33.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleX:1.76,scaleY:1.76,alpha:0},7).wait(19));

	// レイヤー 10
	this.instance_1 = new lib.MainText_glow("synched",0);
	this.instance_1.setTransform(382.3,56,1,1,0,0,0,205.8,33.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1.76,scaleY:1.76,alpha:0},7).wait(20));

	// レイヤー 10
	this.instance_2 = new lib.MainText_glow("synched",0);
	this.instance_2.setTransform(382.3,56,1,1,0,0,0,205.8,33.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1.76,scaleY:1.76,alpha:0},7).wait(21));

	// MainText_glow
	this.instance_3 = new lib.MainText_glow("synched",0);
	this.instance_3.setTransform(382.3,56,1,1,0,0,0,205.8,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({startPosition:0},0).wait(27));

	// MainText_mian_in
	this.instance_4 = new lib.MainText_mian_in("synched",0,false);
	this.instance_4.setTransform(384,54.5,1,1,0,0,0,384,54.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(27));

	// MainText_mian_in
	this.instance_5 = new lib.MainText_mian_in("synched",0,false);
	this.instance_5.setTransform(384,54.5,1,1,0,0,0,384,54.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(28));

	// MainText_mian_in
	this.instance_6 = new lib.MainText_mian_in("synched",0,false);
	this.instance_6.setTransform(384,54.5,1,1,0,0,0,384,54.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(29));

	// MainText_mian_in
	this.instance_7 = new lib.MainText_mian_in("synched",0,false);
	this.instance_7.setTransform(384,54.5,1,1,0,0,0,384,54.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(30));

	// MainText_mian_in
	this.instance_8 = new lib.MainText_mian_in("synched",0,false);
	this.instance_8.setTransform(384,54.5,1,1,0,0,0,384,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.5,22.2,411.7,67.6);


(lib.ColorFilter4_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Filter_pink
	this.instance = new lib.Filter_pink("synched",0);
	this.instance.setTransform(287.9,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},11,cjs.Ease.get(0.99)).wait(1));

	// Filter_green
	this.instance_1 = new lib.Filter_green("synched",0);
	this.instance_1.setTransform(95.9,480);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0},11,cjs.Ease.get(0.99)).wait(1));

	// Filter_yellow
	this.instance_2 = new lib.Filter_yellow("synched",0);
	this.instance_2.setTransform(-96,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},11,cjs.Ease.get(0.99)).wait(1));

	// Filter_red
	this.instance_3 = new lib.Filter_red("synched",0);
	this.instance_3.setTransform(-288,480);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:0},11,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-720,768,1440);


(lib.LineShoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Line("synched",0);
	this.instance.setTransform(0,25,1,1,0,0,0,0,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.02,y:120.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,60);


(lib.Polar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Polar_single("synched",0);
	this.instance.setTransform(1007.6,511.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:712.7},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.1,-631.5,2213.8,2269.6);


(lib.ShareButtons_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hb_in
	this.instance = new lib.hb_in("synched",0,false);
	this.instance.setTransform(1471.2,323.2,1,1,0,0,0,152.1,132.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(34));

	// gp_in
	this.instance_1 = new lib.gp_in("synched",0,false);
	this.instance_1.setTransform(1090.4,313.4,1,1,0,0,0,152.1,132.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(36));

	// ｔｗ_in
	this.instance_2 = new lib.ｔｗ_in("synched",0,false);
	this.instance_2.setTransform(736.1,320.7,1,1,0,0,0,152.1,132.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(38));

	// fb_in
	this.instance_3 = new lib.fb_in("synched",0,false);
	this.instance_3.setTransform(334.4,305.6,1,1,0,0,0,152.1,132.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(210.5,-587.9,268.3,263.4);


(lib.Tunnel = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Ring
	this.instance = new lib.CircleExtention("synched",0,false);
	this.instance.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({regY:240.1,scaleX:0.3,scaleY:0.3,x:384.1,y:240.1,alpha:0.199,startPosition:11},15).to({regX:384.2,regY:240.3,scaleX:0.62,scaleY:0.62,x:384.2,y:240.2},12).wait(1));

	// Ring
	this.instance_1 = new lib.CircleExtention("synched",0,false);
	this.instance_1.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({scaleX:0.55,scaleY:0.55,alpha:0.199,startPosition:11},18).to({scaleX:0.67,scaleY:0.67},12).wait(1));

	// Ring
	this.instance_2 = new lib.CircleExtention("synched",0,false);
	this.instance_2.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({regX:383.9,scaleX:0.77,scaleY:0.77,y:240.1,alpha:0.199,startPosition:11},21).to({regX:384,regY:240.1,scaleX:0.72,scaleY:0.72},12).wait(1));

	// Tunnel
	this.instance_3 = new lib.TunnelBg2("single",0);
	this.instance_3.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({regX:383.9,regY:239.8,scaleX:5.75,scaleY:5.75,x:383.5,y:239.6,alpha:0,mode:"synched"},33,cjs.Ease.get(-1)).wait(1));

	// Filter
	this.instance_4 = new lib.ColorFilter4_in("synched",0,false);
	this.instance_4.setTransform(384,240);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).wait(13));

	// Bg
	this.instance_5 = new lib.IndexBg("synched",0);
	this.instance_5.setTransform(384.1,240,0.066,0.066,0,0,0,384.1,240);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({regX:384,scaleX:1,scaleY:1,x:384},33,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TextAnimTest = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 何か
	this.instance = new lib.Nanika_in("synched",0);
	this.instance.setTransform(409.3,220.9);

	this.instance_1 = new lib.Nanika("synched",0);
	this.instance_1.setTransform(387.5,198.6,0.711,0.711,-10.7,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(3).to({scaleX:0.6,scaleY:0.6,rotation:0,x:556.4,y:267.8},0).wait(5).to({regX:0.3,regY:0.2,scaleX:0.32,scaleY:0.32,rotation:26.7,x:443.8,y:164.6},0).wait(5).to({regX:0,regY:0,scaleX:0.22,scaleY:0.22,rotation:0,x:637,y:191.1},0).wait(4));

	// とは
	this.instance_2 = new lib.Toha_in("synched",0,false);
	this.instance_2.setTransform(362.4,-207.2,3.626,3.626);

	this.instance_3 = new lib.Toha("synched",0);
	this.instance_3.setTransform(206.6,207.3,0.602,0.602,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},5).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(7).to({regX:0.2,regY:0.3,scaleX:0.43,scaleY:0.43,rotation:-10.7,x:178.7,y:245.8},0).wait(5).to({regX:0.1,scaleX:0.38,scaleY:0.38,rotation:0,x:381.5,y:263.4},0).wait(5).to({regX:0.5,regY:0.8,scaleX:0.21,scaleY:0.21,rotation:26.7,x:360.7,y:120.1},0).wait(5).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,rotation:0,x:584.2,y:162.8},0).wait(4));

	// つ
	this.instance_4 = new lib.TU_in("synched",0,false);
	this.instance_4.setTransform(531.1,210.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD3CD4").s().p("AptNfQJfg3G1ilQG1iiDuj8QDuj7ADlAQAAkdiDiFQiFiFkWgBQj9ABoWBwQoUBwsBDVQiVAqhcAXQheAVg/AIQg+AHg6AAQg8AAgygHQgxgIg3gQIiWs1QBxA2BJAWQBMAUBWABQAtAAAvgGQAsgFBMgNIDSgtQFEhGFPg/QFRg/E4gvQE1gyD2gaQD5gcCPAAQJsAFFcFJQFcFKAGJKQACHFkFFaQkDFboZEDQkqCOlKBkQlJBilnA6g");
	this.shape.setTransform(603.1,299.8);

	this.instance_5 = new lib.TU("synched",0);
	this.instance_5.setTransform(459.1,230.5,0.711,0.711,-10.7,0,0,-0.1,0.1);

	this.instance_6 = new lib.トゥイーン18("synched",0);
	this.instance_6.setTransform(546.2,161.5,0.114,0.114,0,0,0,0.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.shape}]},10).to({state:[{t:this.instance_5,p:{regX:-0.1,scaleX:0.711,scaleY:0.711,rotation:-10.7,x:459.1,y:230.5,regY:0.1}}]},13).to({state:[{t:this.instance_5,p:{regX:0.1,scaleX:0.56,scaleY:0.56,rotation:0,x:572.1,y:290.3,regY:0.1}}]},5).to({state:[{t:this.instance_5,p:{regX:0.3,scaleX:0.302,scaleY:0.302,rotation:26.7,x:445.9,y:179.2,regY:0.2}}]},5).to({state:[{t:this.instance_6}]},5).wait(4));

	// か
	this.instance_7 = new lib.KA_in("synched",0,false);
	this.instance_7.setTransform(279.1,142.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CE904").s().p("As0c4Qiyhni9jSIC6onQCHB9BpBJQBpBMAzAAQA2gDA5h8QA6h7AyjGQAwjGAhjkQAfjkAAjQQACingphEQgnhFhiACQgWAAgTADQgVAAgrAHIg2AKIhDAKQgfACgnAIQjJJujtIbQjwIakBGUIovljQCTjSCWkQQCSkNCCkmQCCkkBfkSQjLAsiwAkQiwAjhxATIiCppIFyg/QCJgWBdgRIC1geQBbgPCEgTQBOkXBCkpQBCklAoj/IKLBzQhCEwg4DaQg5DagzCtQBKgHApgCQAsgFApAAQF1AAC4DXQC3DYAAG7QAAEcguEyQgsE1hOEQQhPEShiC6QhiC6iCBiQiEBiiQAAQiqAAiwhngAYzKrQgTgxgZg0Qh6APiCAdQiCAbh4AiIjvmRQB9g2BNggQBMgiBCgbICehAQiHj1i4kDQi6kEjVjpIHiktQGSGBEmGbQElGbC4G1IpfGMIgviGg");
	this.shape_1.setTransform(609,164.5);

	this.instance_8 = new lib.KA("synched",0);
	this.instance_8.setTransform(432.6,159.5,0.711,0.711,-10.7,0,0,0.1,0.1);

	this.instance_9 = new lib.トゥイーン23("synched",0);
	this.instance_9.setTransform(516.4,146.8,0.114,0.114,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},9).to({state:[]},9).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.instance_8,p:{regY:0.1,scaleX:0.711,scaleY:0.711,rotation:-10.7,x:432.6,y:159.5,regX:0.1}}]},13).to({state:[{t:this.instance_8,p:{regY:0,scaleX:0.56,scaleY:0.56,rotation:0,x:552.4,y:230.4,regX:0.1}}]},5).to({state:[{t:this.instance_8,p:{regY:0.4,scaleX:0.302,scaleY:0.302,rotation:26.7,x:450.9,y:145.6,regX:0.4}}]},5).to({state:[{t:this.instance_9}]},5).wait(4));

	// ん
	this.instance_10 = new lib.NN_in("synched",0,false);
	this.instance_10.setTransform(423.1,202.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("EAKdAiaQnxgCkCkBQkGkCgDnmQABh7APiJQARiFAlilQhtBVh9BnQh/BnivCVQiuCTj/DdQhAB7g5BqIh0DdQg6BvhQCQIpdlMQH+umHev2QHbv1GxwnIKvEtQjaHkioFwQinFyiTE3QiSE3iYExQA4gxBdhLQBahKB5hlICSh5IIiE6QgrEYgVDHQgUDGAACaQgDETBSB2QBVB5C2gCQDbACC5haQC6haC+jQQC+jTDolrIFgK/QlYHzl9DvQl4Dtm+AAIgLgBg");
	this.shape_2.setTransform(352.1,258.6);

	this.instance_11 = new lib.NN("synched",0);
	this.instance_11.setTransform(269.9,263.2,0.711,0.711,-10.7,0,0,0.1,0.1);

	this.instance_12 = new lib.トゥイーン26("synched",0);
	this.instance_12.setTransform(473.8,155.4,0.114,0.114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},5).to({state:[]},8).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.instance_11,p:{scaleX:0.711,scaleY:0.711,rotation:-10.7,x:269.9,y:263.2,regX:0.1,regY:0.1}}]},13).to({state:[{t:this.instance_11,p:{scaleX:0.56,scaleY:0.56,rotation:0,x:406.4,y:285.8,regX:0.1,regY:0.1}}]},5).to({state:[{t:this.instance_11,p:{scaleX:0.302,scaleY:0.302,rotation:26.7,x:367.2,y:136.9,regX:0.5,regY:0.3}}]},5).to({state:[{t:this.instance_12}]},5).wait(4));

	// と
	this.instance_13 = new lib.TO_in("synched",0,false);
	this.instance_13.setTransform(255.1,176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},8).wait(15).to({_off:false,x:157.1,y:146.5,startPosition:5},0).wait(13).to({regX:0.1,regY:0.1,scaleX:0.71,scaleY:0.71,rotation:-10.7,x:124.5,y:217.8},0).wait(5).to({regX:0,scaleX:0.56,scaleY:0.56,rotation:0,x:296.2,y:227.9},0).wait(5).to({regX:0.4,regY:0.4,scaleX:0.3,scaleY:0.3,rotation:26.7,x:328.2,y:82.3},0).wait(5).to({regX:0.5,regY:0,scaleX:0.11,scaleY:0.11,rotation:0,x:439.8,y:139.7},0).wait(4));

	// レイヤー 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2C12").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_3.setTransform(384,240);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,150,137,0.502)").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_4.setTransform(384,240);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_5.setTransform(384,240);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_6.setTransform(384,240);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,128,0.502)").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_7.setTransform(384,240);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CE904").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_8.setTransform(384,240);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(150,244,130,0.502)").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_9.setTransform(384,240);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF33CC").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_10.setTransform(384,240);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,230,0.502)").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_11.setTransform(384,240);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,255,255,0.2)").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_12.setTransform(384,240);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(179,255,255,0.102)").s().p("Eg7/AlfMAAAhK+MB3+AAAMAAABK+g");
	this.shape_13.setTransform(384,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},13).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-519,975.6,1391.2);


(lib.MainText_stay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MainText_glow
	this.instance = new lib.MainText_glow("synched",0);
	this.instance.setTransform(382.3,56,1,1,0,0,0,205.8,33.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(351).to({_off:false},0).to({scaleX:1.62,scaleY:1.62,alpha:0},3).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(5));

	// MainText_glow
	this.instance_1 = new lib.MainText_glow("synched",0);
	this.instance_1.setTransform(382.3,56,1,1,0,0,0,205.8,33.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(350).to({_off:false},0).to({scaleX:1.62,scaleY:1.62,alpha:0},3).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(6));

	// MainText_glow
	this.instance_2 = new lib.MainText_glow("synched",0);
	this.instance_2.setTransform(382.3,56,1,1,0,0,0,205.8,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({regY:33.9,scaleX:1.76,scaleY:1.76,x:376.8,y:70.1},0).wait(3).to({regY:33.8,scaleX:1,scaleY:1,x:382.3,y:56},0).wait(311).to({startPosition:0},0).to({scaleX:1.62,scaleY:1.62,alpha:0},3).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(7));

	// MainText_mian_in
	this.instance_3 = new lib.MainText_mian_in("synched",5,false);
	this.instance_3.setTransform(384,54.5,1,1,0,0,0,384,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({x:398,y:67.1},0).wait(2).to({x:438.7,y:75.1},0).wait(1).to({x:384,y:54.5},0).wait(322));

	// MainText_mian_in
	this.instance_4 = new lib.MainText_mian_in("synched",5,false);
	this.instance_4.setTransform(384,54.5,1,1,0,0,0,384,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({x:343.4,y:40.5},0).wait(2).to({x:342},0).wait(1).to({x:384,y:54.5},0).wait(322));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,109);


(lib.LineShootAround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LineShoot
	this.instance = new lib.LineShoot("synched",0,false);
	this.instance.setTransform(357,357,1,1,-45,0,0,0,504.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(23));

	// LineShoot
	this.instance_1 = new lib.LineShoot("synched",0,false);
	this.instance_1.setTransform(505,0,1,1,-90,0,0,0.1,505);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true},23).wait(1));

	// LineShoot
	this.instance_2 = new lib.LineShoot("synched",0,false);
	this.instance_2.setTransform(357,-357,1,1,-135,0,0,0,504.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true},23).wait(2));

	// LineShoot
	this.instance_3 = new lib.LineShoot("synched",0,false);
	this.instance_3.setTransform(0,-505,1,1,180,0,0,0,505);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({_off:true},23).wait(3));

	// LineShoot
	this.instance_4 = new lib.LineShoot("synched",0,false);
	this.instance_4.setTransform(-357,-357,1,1,135,0,0,0,504.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({_off:true},23).wait(4));

	// LineShoot
	this.instance_5 = new lib.LineShoot("synched",0,false);
	this.instance_5.setTransform(-505,0,1,1,90,0,0,-0.1,505);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({_off:true},23).wait(5));

	// LineShoot
	this.instance_6 = new lib.LineShoot("synched",0,false);
	this.instance_6.setTransform(-357,357,1,1,45,0,0,0,504.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({_off:true},23).wait(6));

	// LineShoot
	this.instance_7 = new lib.LineShoot("synched",0,false);
	this.instance_7.setTransform(0,505,1,1,0,0,0,0,505);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},23).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,60);


(lib.Polar_multi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.instance = new lib.Polar("synched",3);
	this.instance.setTransform(-994.9,-486);
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 51, 127.5, 0, 0)];
	this.instance.cache(-131,-633,2218,2274);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// レイヤー 4
	this.instance_1 = new lib.Polar("synched",2);
	this.instance_1.setTransform(-994.9,-486);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// レイヤー 2
	this.instance_2 = new lib.Polar("synched",1);
	this.instance_2.setTransform(-994.9,-486);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// レイヤー 1
	this.instance_3 = new lib.Polar("synched",0);
	this.instance_3.setTransform(-977.7,-503.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1124.2,-1134.8,2276.7,2291.1);


(lib.SharePanel = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"in":0,"stop":37});

	// レイヤー 2
	this.instance = new lib.ShareAnim_nobuteru();
	this.instance.setTransform(782,177.8,1,1,0,0,0,0,55.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(31));

	// ShareButtons_in
	this.instance_1 = new lib.ShareButtons_in("synched",0,false);
	this.instance_1.setTransform(412.1,205.9,0.4,0.4,0,0,0,914.5,236.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:914.6,regY:236.4,x:394.4,y:257.4,startPosition:10},10).to({regX:914.5,regY:236.2,x:385.6,y:283.2,startPosition:15},5).wait(53));

	// レイヤー 1
	this.instance_2 = new lib.トゥイーン3("synched",0);
	this.instance_2.setTransform(386.4,239.6,0.123,0.123);

	this.instance_3 = new lib.トゥイーン4("synched",0);
	this.instance_3.setTransform(383.8,377.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:1,scaleY:1,x:383.8,y:377.8},3).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},3).wait(2).to({startPosition:0},0).to({x:386.4,y:146.4},5).wait(5).to({startPosition:0},0).to({x:159.6,y:138.7},5).wait(5).to({startPosition:0},0).to({x:167.1,y:73.9},4).wait(39));

	// レイヤー 4
	this.instance_4 = new lib.WhiteBox("synched",0);
	this.instance_4.setTransform(384,240.1,0.02,0.027,0,0,0,0,222.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:221.1,scaleX:0.27,scaleY:0.24,y:381.5},3).wait(2).to({startPosition:0},0).to({regY:220.8,scaleX:0.29,scaleY:0.64,y:240.1},5).wait(5).to({y:227.6},0).to({regY:220.9,scaleX:1,scaleY:0.68,y:240.1},5).wait(5).to({startPosition:0},0).to({regY:220.8,scaleY:1,y:240},4).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.4,-123.8,264.9,369.7);


(lib.Aphorism_Nietzsche = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.ニーチェ("single",0);
	this.instance.setTransform(-1243.2,-21.3,7.554,7.554,6.6,0,0,0.8,-0.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).to({regX:0.7,regY:-0.3,scaleX:9.53,scaleY:9.53,x:-1368.6,y:-66,alpha:0},7).wait(1));

	// レイヤー 2
	this.instance_1 = new lib.ニーチェ("single",0);
	this.instance_1.setTransform(-1243.2,-21.3,7.554,7.554,6.6,0,0,0.8,-0.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).to({regX:0.7,scaleX:8.91,scaleY:8.91,x:-1369,y:-66.8,alpha:0},8).wait(1));

	// フリードリヒ・ニーチェ
	this.instance_2 = new lib.ニーチェ("synched",0);
	this.instance_2.setTransform(948.2,149.9,9.978,9.978,0.1,0,0,0.8,-0.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.ニーチェ_teal("synched",0);
	this.instance_3.setTransform(403.7,401.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},81).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).to({scaleX:7.55,scaleY:7.55,rotation:6.6,x:-1243.2,y:-21.3},5).to({startPosition:0},1).to({regX:0.1,regY:0.1,scaleX:5.14,scaleY:5.14,rotation:13.2,x:-600.2,y:-60.1},4).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:403.7,y:401.2},4,cjs.Ease.get(1)).wait(1));

	// 何も阻む物が無いという感覚だ。 
	this.instance_4 = new lib.何も阻む物が無い("synched",0,false);
	this.instance_4.setTransform(368,60,3.094,3.094,0,0,0,0,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).wait(36));

	// それは力が高まり、 
	this.instance_5 = new lib.Soreha_in("single",0);
	this.instance_5.setTransform(456.3,285.2,1,1,0,0,0,0,0.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Soreha_teal("single",0);
	this.instance_6.setTransform(572.8,234.2,0.25,0.25,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},47).to({state:[{t:this.instance_6}]},7).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({_off:true,regY:0,scaleX:0.25,scaleY:0.25,rotation:-3.7,x:572.8,y:234.2},7,cjs.Ease.get(-0.99)).wait(42));

	// レイヤー 4
	this.instance_7 = new lib.LineShootAround("synched",0,false);
	this.instance_7.setTransform(356,275.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({_off:false},0).wait(7).to({x:477.3,y:270.7},0).wait(7).to({x:436.8,y:324.6},0).wait(7).to({x:453.7,y:410},0).to({_off:true},6).wait(9));

	// TONKATSU
	this.instance_8 = new lib.TextAnimTest("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-519,975.6,1391.2);


(lib.Tunnel_fore_complete = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// MainText_in
	this.instance = new lib.MainText_stay("synched",11,false);
	this.instance.setTransform(384,54.5,1,1,0,0,0,384,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MainTitleText
	this.instance_1 = new lib.MainTitleText("synched",0);
	this.instance_1.setTransform(674.2,54.7,1,1,0,0,0,55.6,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Aphorism_Nietzsche
	this.instance_2 = new lib.Aphorism_Nietzsche("synched",95,false);
	this.instance_2.setTransform(99.9,-1,1,1,0,0,0,99.9,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1608.7,-123.6,2776.4,701.6);


(lib.Tunnel_fore = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Polar_multi
	this.instance = new lib.Polar_multi("synched",13);
	this.instance.setTransform(419.8,255.6,0.062,0.034,21.9,0,0,0.3,1.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({regX:0.5,regY:1.5,scaleX:3.52,scaleY:1.93,x:420.5,y:263.9,startPosition:26},13,cjs.Ease.get(1)).to({regY:1.4,scaleX:0.4,scaleY:0.22,rotation:21.8,x:448.2,y:252.1,alpha:0.98,startPosition:27},4).to({regY:1.6,scaleX:0.3,scaleY:0.17,rotation:21.9,x:379.9,y:238.1,alpha:0,startPosition:13},68).wait(8).to({startPosition:21},0).wait(1));

	// Polar_multi
	this.instance_1 = new lib.Polar_multi("synched",9);
	this.instance_1.setTransform(419.8,255.6,0.062,0.034,21.9,0,0,0.3,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regX:0.5,regY:1.5,scaleX:3.52,scaleY:1.93,x:420.5,y:263.9,startPosition:26},17,cjs.Ease.get(1)).to({regY:1.4,scaleX:0.4,scaleY:0.22,rotation:21.8,x:448.2,y:252.1,alpha:0.98,startPosition:27},4).to({regY:1.6,scaleX:0.3,scaleY:0.17,rotation:21.9,x:379.9,y:238.1,alpha:0,startPosition:13},68).wait(8).to({startPosition:21},0).wait(1));

	// Polar_multi
	this.instance_2 = new lib.Polar_multi("synched",6);
	this.instance_2.setTransform(419.8,255.6,0.062,0.034,21.9,0,0,0.3,1.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({regX:0.5,regY:1.5,scaleX:3.52,scaleY:1.93,x:420.5,y:263.9,startPosition:26},20,cjs.Ease.get(1)).to({regY:1.4,scaleX:0.4,scaleY:0.22,rotation:21.8,x:448.2,y:252.1,alpha:0.98,startPosition:27},4).to({regY:1.6,scaleX:0.3,scaleY:0.17,rotation:21.9,x:379.9,y:238.1,alpha:0,startPosition:13},68).wait(8).to({startPosition:21},0).wait(1));

	// Polar_multi
	this.instance_3 = new lib.Polar_multi("synched",0);
	this.instance_3.setTransform(419.8,255.6,0.062,0.034,21.9,0,0,0.3,1.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:0.5,regY:1.5,scaleX:3.52,scaleY:1.93,x:420.5,y:263.9,startPosition:25},25,cjs.Ease.get(1)).to({regY:1.4,scaleX:0.4,scaleY:0.22,rotation:21.8,x:448.2,y:252.1,alpha:0.98,startPosition:26},4).to({regY:1.6,scaleX:0.3,scaleY:0.17,rotation:21.9,x:379.9,y:238.1,alpha:0,startPosition:12},68).wait(8).to({startPosition:20},0).wait(1));

	// Wave
	this.instance_4 = new lib.Polar_multi("synched",0);
	this.instance_4.setTransform(419.9,255.5,0.017,0.009,21.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({scaleX:0.38,scaleY:0.21,rotation:21.8,x:419.8,y:255.8,alpha:0.68,startPosition:16},16,cjs.Ease.get(1)).to({scaleX:0.47,scaleY:0.26,y:255.9,alpha:0.602,startPosition:29},13).to({regX:0.3,regY:0.4,scaleX:0.48,scaleY:0.26,rotation:22,y:255.8,alpha:0,startPosition:33},4,cjs.Ease.get(-1)).wait(47).to({startPosition:32},0).wait(1));

	// MainText_in
	this.instance_5 = new lib.MainText_in("synched",0,false);
	this.instance_5.setTransform(384,54.5,1,1,0,0,0,384,54.5);

	this.instance_6 = new lib.MainText_stay("synched",11,false);
	this.instance_6.setTransform(384,54.5,1,1,0,0,0,384,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},95).to({state:[{t:this.instance_6}]},11).wait(1));

	// MainTitleText
	this.instance_7 = new lib.MainTitleText("synched",0);
	this.instance_7.setTransform(674.2,54.7,1,1,0,0,0,55.6,24.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).wait(11).to({startPosition:0},0).wait(1));

	// Aphorism_Nietzsche
	this.instance_8 = new lib.Aphorism_Nietzsche("synched",0,false);
	this.instance_8.setTransform(99.9,-1,1,1,0,0,0,99.9,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(106).to({startPosition:95},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-519,975.6,1391.2);


// stage content:



(lib.navigation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Tunnel_fore
	this.instance = new lib.Tunnel_fore_complete();
	this.instance.setTransform(1572,157.3,1,1,0,0,0,1572,157.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Tunnel_fore_complete
	this.instance_1 = new lib.Tunnel_fore();
	this.instance_1.setTransform(1572,157.3,1,1,0,0,0,1572,157.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// IndexBg
	this.IndexBg = new lib.Tunnel();
	this.IndexBg.setTransform(384,240,1,1,0,0,0,384,240);

	this.timeline.addTween(cjs.Tween.get(this.IndexBg).wait(2));

	// ButtonHome
	this.homeButton = new lib.ButtonHome_in_no_base();
	this.homeButton.setTransform(48,160,0.4,0.4,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.homeButton).wait(2));

	// ButtonMenu
	this.menuButton = new lib.ButtonMenu_no_base();
	this.menuButton.setTransform(48,248,0.4,0.4,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(2));

	// ButtonShare
	this.shareButton = new lib.ButtonShare_in_no_base();
	this.shareButton.setTransform(48,336,0.4,0.4,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.shareButton).wait(2));

	// SharePanel
	this.SharePanel = new lib.SharePanel();
	this.SharePanel.setTransform(390.9,225.2,1,1,0,0,0,390.9,225.2);

	this.timeline.addTween(cjs.Tween.get(this.SharePanel).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1224.6,-279,2776.4,1391.1);

})(cjsNavigationLib = cjsNavigationLib||{}, cjsNavigationImages = cjsNavigationImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsNavigationLib, cjsNavigationImages, createjs, ss;