(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#000000",
	webfonts: {},
	manifest: [
		{src:"images/bagguet.png", id:"bagguet"},
		{src:"images/damehema_0000_foot_L.png", id:"damehema_0000_foot_L"},
		{src:"images/damehema_0001_foot_R.png", id:"damehema_0001_foot_R"},
		{src:"images/damehema_0002_hand_L.png", id:"damehema_0002_hand_L"},
		{src:"images/damehema_0003_hand_R.png", id:"damehema_0003_hand_R"},
		{src:"images/damehema_0004_eye_hema_L.png", id:"damehema_0004_eye_hema_L"},
		{src:"images/damehema_0005_eye_hema_R.png", id:"damehema_0005_eye_hema_R"},
		{src:"images/damehema_0006_nose_hema.png", id:"damehema_0006_nose_hema"},
		{src:"images/damehema_0007_mouse_hema.png", id:"damehema_0007_mouse_hema"},
		{src:"images/damehema_0008_face_hema.png", id:"damehema_0008_face_hema"},
		{src:"images/damehema_0009_eye_dame_L.png", id:"damehema_0009_eye_dame_L"},
		{src:"images/damehema_0010_eye_dame_R.png", id:"damehema_0010_eye_dame_R"},
		{src:"images/damehema_0011_nose_dame.png", id:"damehema_0011_nose_dame"},
		{src:"images/damehema_0012_mouse_dame.png", id:"damehema_0012_mouse_dame"},
		{src:"images/damehema_0013_face_dame.png", id:"damehema_0013_face_dame"},
		{src:"images/grass.png", id:"grass"},
		{src:"images/nobuteru__0001_Mouse_D.png", id:"nobuteru__0001_Mouse_D"},
		{src:"images/nobuteru__0002_Hair.png", id:"nobuteru__0002_Hair"},
		{src:"images/nobuteru__0003_Face.png", id:"nobuteru__0003_Face"},
		{src:"images/nobuteru__0003_Face_bagguet.png", id:"nobuteru__0003_Face_bagguet"},
		{src:"images/nobuteru__0004_Nose.png", id:"nobuteru__0004_Nose"},
		{src:"images/nobuteru__0005_Eye_R.png", id:"nobuteru__0005_Eye_R"},
		{src:"images/nobuteru__0006_Eye_L.png", id:"nobuteru__0006_Eye_L"},
		{src:"images/nobuteru__0007_Brow_R.png", id:"nobuteru__0007_Brow_R"},
		{src:"images/nobuteru__0008_Brow_L.png", id:"nobuteru__0008_Brow_L"},
		{src:"images/nobuteru__0009_Leaf.png", id:"nobuteru__0009_Leaf"},
		{src:"images/nobuteru__0010_Body.png", id:"nobuteru__0010_Body"},
		{src:"images/unkopad_0000_Unko.png", id:"unkopad_0000_Unko"},
		{src:"images/unkopad_0001_Boo.png", id:"unkopad_0001_Boo"},
		{src:"images/unkopad_0002_Recipe.png", id:"unkopad_0002_Recipe"},
		{src:"images/unkopad_0003_Sub.png", id:"unkopad_0003_Sub"},
		{src:"images/unkopad_0004_Main.png", id:"unkopad_0004_Main"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bagguet = function() {
	this.initialize(img.bagguet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,505);


(lib.damehema_0000_foot_L = function() {
	this.initialize(img.damehema_0000_foot_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,112);


(lib.damehema_0001_foot_R = function() {
	this.initialize(img.damehema_0001_foot_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,108);


(lib.damehema_0002_hand_L = function() {
	this.initialize(img.damehema_0002_hand_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,85);


(lib.damehema_0003_hand_R = function() {
	this.initialize(img.damehema_0003_hand_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,78);


(lib.damehema_0004_eye_hema_L = function() {
	this.initialize(img.damehema_0004_eye_hema_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.damehema_0005_eye_hema_R = function() {
	this.initialize(img.damehema_0005_eye_hema_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,38);


(lib.damehema_0006_nose_hema = function() {
	this.initialize(img.damehema_0006_nose_hema);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,70);


(lib.damehema_0007_mouse_hema = function() {
	this.initialize(img.damehema_0007_mouse_hema);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,87);


(lib.damehema_0008_face_hema = function() {
	this.initialize(img.damehema_0008_face_hema);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,385);


(lib.damehema_0009_eye_dame_L = function() {
	this.initialize(img.damehema_0009_eye_dame_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,32);


(lib.damehema_0010_eye_dame_R = function() {
	this.initialize(img.damehema_0010_eye_dame_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.damehema_0011_nose_dame = function() {
	this.initialize(img.damehema_0011_nose_dame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,54);


(lib.damehema_0012_mouse_dame = function() {
	this.initialize(img.damehema_0012_mouse_dame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,98);


(lib.damehema_0013_face_dame = function() {
	this.initialize(img.damehema_0013_face_dame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,341);


(lib.grass = function() {
	this.initialize(img.grass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1733,243);


(lib.nobuteru__0001_Mouse_D = function() {
	this.initialize(img.nobuteru__0001_Mouse_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,61);


(lib.nobuteru__0002_Hair = function() {
	this.initialize(img.nobuteru__0002_Hair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,301);


(lib.nobuteru__0003_Face = function() {
	this.initialize(img.nobuteru__0003_Face);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,422);


(lib.nobuteru__0003_Face_bagguet = function() {
	this.initialize(img.nobuteru__0003_Face_bagguet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,422);


(lib.nobuteru__0004_Nose = function() {
	this.initialize(img.nobuteru__0004_Nose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,141);


(lib.nobuteru__0005_Eye_R = function() {
	this.initialize(img.nobuteru__0005_Eye_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,52);


(lib.nobuteru__0006_Eye_L = function() {
	this.initialize(img.nobuteru__0006_Eye_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,53);


(lib.nobuteru__0007_Brow_R = function() {
	this.initialize(img.nobuteru__0007_Brow_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,67);


(lib.nobuteru__0008_Brow_L = function() {
	this.initialize(img.nobuteru__0008_Brow_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,67);


(lib.nobuteru__0009_Leaf = function() {
	this.initialize(img.nobuteru__0009_Leaf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,173);


(lib.nobuteru__0010_Body = function() {
	this.initialize(img.nobuteru__0010_Body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,437);


(lib.unkopad_0000_Unko = function() {
	this.initialize(img.unkopad_0000_Unko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,98);


(lib.unkopad_0001_Boo = function() {
	this.initialize(img.unkopad_0001_Boo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,61);


(lib.unkopad_0002_Recipe = function() {
	this.initialize(img.unkopad_0002_Recipe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,111);


(lib.unkopad_0003_Sub = function() {
	this.initialize(img.unkopad_0003_Sub);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,38);


(lib.unkopad_0004_Main = function() {
	this.initialize(img.unkopad_0004_Main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,63);


(lib.Bagguet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bagguet();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,505);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bagguet();
	this.instance.setTransform(-92.5,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-252.5,185,505);


(lib.トゥイーン14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AlTHCQgugvAAhCQAAhCAqguQA9hHBwAAQBLAABZATIAAqqIBcAAIAAD4IEVAAIAABnIkVAAIAAFiQCkA5CIBUIg0BZQhrhLiSg4QgJB6hGAzQg3AqhwAAQhxAAg9g8gAkIELQgqAlAKA0QAJBBB/AAQBGAAAhgcQA4ghgFhdQhigchLAAQg4AEgdAYg");
	this.shape.setTransform(-14.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,94.7,124.1);


(lib.トゥイーン13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AlTHCQgugvAAhCQAAhCAqguQA9hHBwAAQBLAABZATIAAqqIBcAAIAAD4IEVAAIAABnIkVAAIAAFiQCkA5CIBUIg0BZQhrhLiSg4QgJB6hGAzQg3AqhwAAQhxAAg9g8gAkIELQgqAlAKA0QAJBBB/AAQBGAAAhgcQA4ghgFhdQhigchLAAQg4AEgdAYg");
	this.shape.setTransform(-14.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,94.7,124.1);


(lib.トゥイーン12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AiAGzQC1guBQhsQBGheAAiRQAAinhsgOQhggKj9BxIgvhnIDKg9QBughBGAAQBjAABBBQQA5BBAAB9QAACyhQBwQheCEjHBLgAi8m3IAXheQBLAYBzAXQB6AcBGAFIgXBZQiIgKj2hBg");
	this.shape.setTransform(-24.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,75.9,124.1);


(lib.トゥイーン11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AiAGzQC1guBQhsQBGheAAiRQAAinhsgOQhggKj9BxIgvhnIDKg9QBughBGAAQBjAABBBQQA5BBAAB9QAACyhQBwQheCEjHBLgAi8m3IAXheQBLAYBzAXQB6AcBGAFIgXBZQiIgKj2hBg");
	this.shape.setTransform(-24.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,75.9,124.1);


(lib.トゥイーン10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Aj+G8QibgTgEmXQAAjkAXjqIBsAOQghDcAADoQAFEeBCAOQBBAOA4jFIBVBCQgmCDg9A9QgoAwg5AAIgUgBgADxhFQg4ilhHhdIBag5QBUBxA4CbQA4CUAOCfIhrAhQgOiNg0iYg");
	this.shape.setTransform(-7.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,102.2,124.1);


(lib.トゥイーン9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Aj+G8QibgTgEmXQAAjkAXjqIBsAOQghDcAADoQAFEeBCAOQBBAOA4jFIBVBCQgmCDg9A9QgoAwg5AAIgUgBgADxhFQg4ilhHhdIBag5QBUBxA4CbQA4CUAOCfIhrAhQgOiNg0iYg");
	this.shape.setTransform(-7.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,102.2,124.1);


(lib.トゥイーン8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AjRHLQB5gvA0hGQBAhHAAhmQgtAzhLAEQgvAFg4gqQhLg4AJhoQAJhNArgzQAzg+BVABQA4AEAoAYIAAhsInJAAIAAhoIHJAAIAAjAIBeAAIAADAIE+AAIAABoIk+AAIAADYQAOAxAABPQgFCghCBnQhEBwibA+gAixAXQgEBGAcAYQAcAXA9gFQBEgEAKhZQAEg7gfghQgcghggAAQheAAgKBqg");
	this.shape.setTransform(-9.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,105.9,124.1);


(lib.トゥイーン7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AjRHLQB5gvA0hGQBAhHAAhmQgtAzhLAEQgvAFg4gqQhLg4AJhoQAJhNArgzQAzg+BVABQA4AEAoAYIAAhsInJAAIAAhoIHJAAIAAjAIBeAAIAADAIE+AAIAABoIk+AAIAADYQAOAxAABPQgFCghCBnQhEBwibA+gAixAXQgEBGAcAYQAcAXA9gFQBEgEAKhZQAEg7gfghQgcghggAAQheAAgKBqg");
	this.shape.setTransform(-9.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,105.9,124.1);


(lib.トゥイーン6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ai/GoQg0gvgEhCQgFhQAvg4QAqgzBUgFQDIgJAzDzQBohGAAh/QAAhrgvgyQg0gzhnAAQhzAAhnA/Qg9AqhnB6IhChGQCDiBCEiNQCKiNBChPImIAAIAAhnIILAAIAABiQheBii1C3QA7gcBZAAQCSAFBGBUQBCBOgFCDQAFCDhnBjQhjBiiRAAIgRAAQiDAAhLhBgAijEpQAFAqAgAcQAmAdBLAEQAtAAAvgJQgciyhhgKQgNgBgMAAQhcAAAABfg");
	this.shape.setTransform(-16.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,95.6,124.1);


(lib.トゥイーン5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ai/GoQg0gvgEhCQgFhQAvg4QAqgzBUgFQDIgJAzDzQBohGAAh/QAAhrgvgyQg0gzhnAAQhzAAhnA/Qg9AqhnB6IhChGQCDiBCEiNQCKiNBChPImIAAIAAhnIILAAIAABiQheBii1C3QA7gcBZAAQCSAFBGBUQBCBOgFCDQAFCDhnBjQhjBiiRAAIgRAAQiDAAhLhBgAijEpQAFAqAgAcQAmAdBLAEQAtAAAvgJQgciyhhgKQgNgBgMAAQhcAAAABfg");
	this.shape.setTransform(-16.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,95.6,124.1);


(lib.トゥイーン4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AiLG6QhLhLAAh1IAOi3IikAAIAAhXICtAAQAKhBAJhxIikAAIAAhZICtAAQAYiWAEhPIBoAEQgTB6gOBnIC+AAIAABZIjMAAQgOBjgKBPIEFAAIAABXIkOAAQgJB6AAA5QAACfCUAJQDcAOAJifQAFheghhUIBeg0QAqBxAABeQAACDhQBGQhLBCiIAEIgQAAQh6AAhLhLg");
	this.shape.setTransform(-16,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,95.6,124.1);


(lib.トゥイーン3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AiLG6QhLhLAAh1IAOi3IikAAIAAhXICtAAQAKhBAJhxIikAAIAAhZICtAAQAYiWAEhPIBoAEQgTB6gOBnIC+AAIAABZIjMAAQgOBjgKBPIEFAAIAABXIkOAAQgJB6AAA5QAACfCUAJQDcAOAJifQAFheghhUIBeg0QAqBxAABeQAACDhQBGQhLBCiIAEIgQAAQh6AAhLhLg");
	this.shape.setTransform(-16,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,95.6,124.1);


(lib.トゥイーン2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAaFcQEZhhAKj5QAOjDhjhVQhPhFiSAAQiKAEheBsQhiB1gFCnQAABwAcA9QAcAzAmABQBLgBAziQQA0iGAqk2IBlAJQg0GphlCfQhBBshsAAQhCAAgzhLQhVh1AOi3QAOidBjiEQCIioDHAAQDGAEBwB/QBiB1AACkQAACVg9BrQhPCIi8BZg");
	this.shape.setTransform(-10.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,102.2,124.1);


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAaFcQEZhhAKj5QAOjDhjhVQhPhFiSAAQiKAEheBsQhiB1gFCnQAABwAcA9QAcAzAmABQBLgBAziQQA0iGAqk2IBlAJQg0GphlCfQhBBshsAAQhCAAgzhLQhVh1AOi3QAOidBjiEQCIioDHAAQDGAEBwB/QBiB1AACkQAACVg9BrQhPCIi8BZg");
	this.shape.setTransform(-10.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,102.2,124.1);


(lib.Title003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAQGVIAApuIiLAAIAAg4IArAAQBBAAAkglQAqgrAFgzIA4AAIAAMpg");
	this.shape.setTransform(1361,116.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB0000").s().p("ACPH+QhCAAgmgqQglgqAAhZIAAjvQAAghgVgXQgYgYglAAQgvAAgvAcQg4AhgYA4QghBLg9EQIhiglQCWojBZmXIBnAcIh+HhQBLhJBUAAQBOAAAzA8QAmAyAAA9IAADvQAAAmASASQAKAYAcgFQCNAABBm7IBZAtQgqEBhGBxQhEB+hzAAIgJAAg");
	this.shape_1.setTransform(1250.4,116);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB0000").s().p("AiAFYQBngzAfhCQhggThHhsIA5g8QAuBdBYATQAJgrgFgzIAAkcQiwAXhsDWQAAB/AYB/IhLASQgYiDgEieQAEijAcibIBQATQgXBZgKBwQBxipCrgSIAAh1IBQAAIAABwQBiAJA9BHQA0A8AFBeQAJCiheBMQg9AzhiAFQgmBrh8BHgAByA6QAAAzgFArQBLgKAhgqQAqgzgOhvQgJiRh6gTg");
	this.shape_2.setTransform(1162.4,126.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB0000").s().p("AkCGXQg5hGgEipIAAqFIBdAAIAAKFQAAB1AqAvQAqAqCEgEQBlgFA4hZQA0hLATibIBmAvQg8GAk0AAIgSABQiHAAg5hHgACOjpIAAi3IBQAAIAAC3gAAQjpIAAi3IBPAAIAAC3g");
	this.shape_3.setTransform(1085,115.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB0000").s().p("Ag5FMQhshngFiyQAAhlA9hxQBHh+B4hHInrAAIAAhYIMzAAIAABdQjdAFiIB1Qh8BwAACeQAACbBgBQQBeBKDAAAIgcBoQjcAAh4h2g");
	this.shape_4.setTransform(987.5,118.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(939.3,54,458.8,124.1);


(lib.Title002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAaFcQEZhiAKj4QAOjDhjhVQhPhGiSAAQiKAFheBsQhiB1gFCnQAABwAcA9QAcA0AmAAQBLgBAziQQA0iHAqk1IBlAJQg0GphlCfQhBBshsAAQhCAAgzhLQhVh1AOi3QAOidBjiEQCIioDHAAQDFAEBxB/QBiB1AACkQAACUg9BsQhPCIi8BZg");
	this.shape.setTransform(1441.3,117.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB0000").s().p("AiLG6QhLhLAAh1IAOi3IikAAIAAhXICtAAQAKhBAJhxIikAAIAAhZICtAAQAYiWAEhPIBoAEQgTB6gOBnIC+AAIAABZIjMAAQgOBjgKBPIEFAAIAABXIkOAAQgJB6AAA5QAACfCUAJQDcAOAJifQAFheghhUIBeg0QAqBxAABeQAACDhQBGQhLBCiIAEIgQAAQh6AAhLhLg");
	this.shape_1.setTransform(1344.6,115.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB0000").s().p("Ai/GoQg0gvgEhCQgFhQAvg4QAqgzBUgFQDIgJAzDzQBohGAAh/QAAhrgvgyQg0gzhnAAQhzAAhnA/Qg9AqhnB6IhChGQCDiBCEiNQCKiNBChPImIAAIAAhnIILAAIAABiQheBii1C3QA7gcBZAAQCSAFBGBUQBCBOgFCDQAFCDhnBjQhjBiiRAAIgRAAQiDAAhLhBgAijEpQAFAqAgAcQAmAdBLAEQAtAAAvgJQgciyhhgKQgNgBgMAAQhcAAAABfg");
	this.shape_2.setTransform(1252.3,117.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB0000").s().p("AjRHLQB5gvA0hGQBAhHAAhmQgtAzhLAFQgvAEg4gqQhLg4AJhoQAJhNArg0QAzg8BVAAQA4AEAoAYIAAhsInJAAIAAhoIHJAAIAAjAIBeAAIAADAIE+AAIAABoIk+AAIAADYQAOAxAABPQgFCghCBnQhEBwibA+gAixAXQgEBHAcAXQAcAXA9gFQBEgEAKhZQAEg7gfghQgcghggAAQheAAgKBqg");
	this.shape_3.setTransform(1158.1,115.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB0000").s().p("Aj+G8QibgTgEmXQAAjkAXjqIBsAOQghDcAADoQAFEeBCAOQBBAOA4jFIBVBCQgmCDg9A9QgoAwg5AAIgUgBgADxhFQg4ilhHhdIBag5QBUBxA4CbQA4CUAOCfIhrAhQgOiNg0iYg");
	this.shape_4.setTransform(1062.2,119.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB0000").s().p("AiAGzQC1guBQhsQBGheAAiRQAAinhsgOQhggJj9BwIgvhnIDKg9QBughBGAAQBjAABBBQQA5BBAAB9QAACyhQBwQheCEjHBLgAi8m3IAXheQBLAXBzAYQB6AcBGAFIgXBZQiIgKj2hBg");
	this.shape_5.setTransform(973.7,115.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB0000").s().p("AlTHCQgugvAAhCQAAhCAqguQA9hHBwAAQBLAABZATIAAqqIBcAAIAAD4IEVAAIAABnIkVAAIAAFiQCkA5CIBUIg0BZQhrhLiSg4QgJB6hGAzQg3AqhwAAQhxAAg9g8gAkIELQgqAlAKA0QAJBBB/AAQBGAAAhgcQA4ghgFhdQhigchLAAQg4AEgdAYg");
	this.shape_6.setTransform(893.1,116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(845.3,54,646.7,124.1);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AoHGvQFui8AXmMIAFhVImKAAIAAhnIHLAAIAAi7IBmAAQAuAJgqAcIAACWIHaAAIAABnIoZAAIgTCkIGyAAIgvGkQgTCph1AAIi8AAIgXhnIDKAAQAgAAAKhGIAmlJIlQAAQg9EslWDYg");
	this.shape.setTransform(1631.3,115.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BB0000").s().p("AiKGaQDRgmA9h1QA0hUAFjkQAEi8gqhPQgcg0g0gJQhJgKhGBQQg0BGhGCSIAADyIheAAIAAqFIBeAAIAADOQB1i3CQAAQBiAAA4BLQA9BUAFCgQAOFihZCIQhGB6jtAzg");
	this.shape_1.setTransform(1535,116.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB0000").s().p("ABdIPIAAr/IgvAAQhJCfhUBTIhZhAQC8jFAskLIBiAcQAdAOghAKQgJAugmBjIG9AAIAABZIlRAAIAACtIEnAAIAABYIknAAIAACaIE6AAIAABZIk6AAIAAEHgAlHIPIAApfQgzBShGBLIhMhOQDPjvBCkVIBmAiQAdASghAEQghBtg9B+IAcAJQATATghAFIAALQg");
	this.shape_2.setTransform(1434.4,115.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB0000").s().p("AAaFcQEZhiAKj4QAOjDhjhVQhPhGiSAAQiKAFheBsQhiB1gFCnQAABwAcA9QAcA0AmAAQBLgBAziQQA0iHAqk1IBlAJQgzGphmCfQhBBshsAAQhCAAgzhLQhVh1AOi3QAOidBjiEQCIioDHAAQDFAEBxB/QBiB1AACkQAACUg9BsQhPCIi8BZg");
	this.shape_3.setTransform(1327.2,117.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB0000").s().p("AlxFdQExg5CdifQCNiPAzkLIBjAzQhLEqifCbQijCfk+BCgAl/lzIBChQQCfBZBnBsIhPBiQhQhniphwg");
	this.shape_4.setTransform(1235.2,119.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB0000").s().p("Aj+H1IAAvpIBeAAIAAFRQD2BVCpBgIg9BnQg0glhrg0QhqgxhZghIAAIng");
	this.shape_5.setTransform(1157.2,116);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB0000").s().p("AnKGFQBjhMAlhZQA4iIAAhqIAAl/IBeAAIAAF/QAAC1g0BxQgzB1h1BVgAAAF7IAAtYIBdAAIAAMWQA5ggBYhiQBVhaBHiBIBBBcQg5Bwh0B6Qh2B6hwA9g");
	this.shape_6.setTransform(1055.7,116.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BB0000").s().p("AjWGcQDthUB2iWQB0ibABjpIAAhBIlsAAQgmDhiDCBIhLhLQBjhcAgh+QAchsgEiyIBnAAQAABLgFA9IHAAAIAACaQAAEKiNC8Qh6CtjjBUg");
	this.shape_7.setTransform(962.9,117);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB0000").s().p("AAQGVIAApuIiLAAIAAg4IArAAQBBAAAkglQAqgrAFgzIA4AAIAAMpg");
	this.shape_8.setTransform(851.1,116.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BB0000").s().p("AiiFYQhfhdAAjKIAAhcQAAjPBfhdQBBhBBhAAQBiAABBBBQBfBdAADPIAABcQAADKhfBdQhBBChiAAQhhAAhBhCgAhTkaQg9A9AACoIAABqQAACkBCBCQAlAmApAAQAuAAAmgmQA9g9AAipIAAhqQAAiog9g9QgmgmguABQgtgBgmAmg");
	this.shape_9.setTransform(796.1,117.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BB0000").s().p("AijFYQhdhdAAjKIAAhcQAAjPBdhdQBChBBhAAQBiAABCBBQBeBdgBDPIAABcQABDKheBdQhCBChiAAQhhAAhChCgAhTkaQg9A9AACoIAABqQAACkBCBCQAmAmAoAAQAuAAAmgmQA9g9AAipIAAhqQAAiog9g9QgmgmguABQgtgBgmAmg");
	this.shape_10.setTransform(736.1,117.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BB0000").s().p("AAVGQIAgjXIiZAAIggDXIhLAAIAhjXIheAAIAAhZIBnAAIAcjDIiDAAIAAhZICRAAIAdjTIBKAAIgcDTICZAAIAcjTIBLAAIgcDTIBZAAIAABZIhnAAIgcDDICDAAIAABZIiMAAIgiDXgAhaBgICYAAIAdjDIiZAAg");
	this.shape_11.setTransform(676.3,116.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(644,54,1049.4,124.1);


(lib.Grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.grass();
	this.instance.setTransform(0,0,1.502,1.502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2603.1,365);


(lib.UnkoPadSub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.unkopad_0003_Sub();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219,38);


(lib.UnkoPadLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unkopad_0004_Main.png
	this.instance = new lib.unkopad_0004_Main();
	this.instance.setTransform(109.3,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// unkopad_0003_Sub.png
	this.instance_1 = new lib.unkopad_0003_Sub();
	this.instance_1.setTransform(109.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// unkopad_0002_Recipe.png
	this.instance_2 = new lib.unkopad_0002_Recipe();
	this.instance_2.setTransform(363,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// unkopad_0001_Boo.png
	this.instance_3 = new lib.unkopad_0001_Boo();
	this.instance_3.setTransform(365.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// unkopad_0000_Unko.png
	this.instance_4 = new lib.unkopad_0000_Unko();
	this.instance_4.setTransform(0,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.8,519,114.3);


(lib.UnkoPad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.unkopad_0004_Main();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,63);


(lib.Unko = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.unkopad_0000_Unko();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,98);


(lib.Recipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.unkopad_0002_Recipe();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,111);


(lib.Boo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.unkopad_0001_Boo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,61);


(lib.Nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0004_Nose();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,141);


(lib.Mouse_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0001_Mouse_D();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,61);


(lib.Leaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0009_Leaf();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,173);


(lib.Hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0002_Hair();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372,301);


(lib.Face_Extrude = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0003_Face_bagguet();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518,422);


(lib.Face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0003_Face();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,422);


(lib.Eye_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0005_Eye_R();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,52);


(lib.Eye_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0006_Eye_L();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,53);


(lib.Brow_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0007_Brow_R();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,67);


(lib.Brow_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru__0008_Brow_L();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,67);


(lib.Body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.nobuteru__0010_Body();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,416,437);


(lib.Nose_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.damehema_0011_nose_dame();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,54);


(lib.Mouse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.damehema_0012_mouse_dame();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,98);


(lib.Face_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.damehema_0013_face_dame();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317,341);


(lib.Eye_R_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.damehema_0009_eye_dame_L();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,32);


(lib.Eye_L_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.damehema_0010_eye_dame_R();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.Nose_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.damehema_0006_nose_hema();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,70);


(lib.Mouse_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_1 = new lib.damehema_0007_mouse_hema();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201,87);


(lib.Hand_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.damehema_0003_hand_R();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,78);


(lib.Hand_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.damehema_0002_hand_L();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,85);


(lib.Foot_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.damehema_0001_foot_R();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,108);


(lib.Foot_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.damehema_0000_foot_L();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,112);


(lib.Face_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.damehema_0008_face_hema();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373,385);


(lib.Eye_R_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.damehema_0005_eye_hema_R();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,38);


(lib.Eye_L_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance_2 = new lib.damehema_0004_eye_hema_L();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.verticalLine_wave_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(5,1,1).p("EAAAi7fMAAAF2/");
	this.shape.setTransform(0,1200);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// レイヤー 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(5,1,1).p("EAAAi7fMAAAF2/");
	this.shape_1.setTransform(0,1200);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgEZi7fUARnC8lgRnC6a");
	this.shape_2.setTransform(28.2,1200);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgH+i7fUAf8C9mgf8C5Z");
	this.shape_3.setTransform(51.2,1200);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgL+i7fUAv9C1Zgv9DBm");
	this.shape_4.setTransform(76.8,1200);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgKPi7fUAo/C1Zgo/DBm");
	this.shape_5.setTransform(65.6,1200);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(5,1,1).p("EAHHi7fUgccCnBAccDP+");
	this.shape_6.setTransform(-45.6,1200);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(5,1,1).p("EANTi7fUg1LCk4A1LDSH");
	this.shape_7.setTransform(-85.1,1200);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(5,1,1).p("EALli7fUguVCoOAuVDOx");
	this.shape_8.setTransform(-74.2,1200);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgKti7fUAq4C9wgq4C5P");
	this.shape_9.setTransform(68.6,1200);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgJWi7fUAlbC8qglbC6V");
	this.shape_10.setTransform(59.9,1200);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCCCCC").ss(5,1,1).p("EAFHi7fUgUdCw4AUdDGH");
	this.shape_11.setTransform(-32.8,1200);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgD2i7fUAPdCz+gPdDDB");
	this.shape_12.setTransform(24.8,1200);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CCCCCC").ss(5,1,1).p("EABJi7fUgEjC1FAEjDB6");
	this.shape_13.setTransform(-7.3,1200);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgDFi7fUAMZC1FgMZDB6");
	this.shape_14.setTransform(19.9,1200);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CCCCCC").ss(5,1,1).p("EgC7i7fUALxC1CgLxDB9");
	this.shape_15.setTransform(18.9,1200);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CCCCCC").ss(5,1,1).p("EAC8i7fUgLxDBXALxC1o");
	this.shape_16.setTransform(-18.9,1200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

	// レイヤー 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAAAi7fMAAAF2/");
	this.shape_17.setTransform(0,1200);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgEZi7fUARnC8lgRnC6a");
	this.shape_18.setTransform(28.2,1200);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgH+i7fUAf8C9mgf8C5Z");
	this.shape_19.setTransform(51.2,1200);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgL+i7fUAv9C1Zgv9DBm");
	this.shape_20.setTransform(76.8,1200);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgKPi7fUAo/C1Zgo/DBm");
	this.shape_21.setTransform(65.6,1200);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAHHi7fUgccCnBAccDP+");
	this.shape_22.setTransform(-45.6,1200);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(5,1,1).p("EANTi7fUg1LCk4A1LDSH");
	this.shape_23.setTransform(-85.1,1200);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(5,1,1).p("EALli7fUguVCoOAuVDOx");
	this.shape_24.setTransform(-74.2,1200);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgKti7fUAq4C9wgq4C5P");
	this.shape_25.setTransform(68.6,1200);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgJWi7fUAlbC8qglbC6V");
	this.shape_26.setTransform(59.9,1200);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAFHi7fUgUdCw4AUdDGH");
	this.shape_27.setTransform(-32.8,1200);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgD2i7fUAPdCz+gPdDDB");
	this.shape_28.setTransform(24.8,1200);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(5,1,1).p("EABJi7fUgEjC1FAEjDB6");
	this.shape_29.setTransform(-7.3,1200);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgDFi7fUAMZC1FgMZDB6");
	this.shape_30.setTransform(19.9,1200);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("EgC7i7fUALxC1CgLxDB9");
	this.shape_31.setTransform(18.9,1200);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAC8i7fUgLxDBXALxC1o");
	this.shape_32.setTransform(-18.9,1200);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(5,1,1).p("EgC7i7fUALxC1CgLxDB9");
	this.shape_33.setTransform(18.9,1200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,2405);


(lib.verticalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("EAAAi7fMAAAF2/");
	this.shape.setTransform(0,1200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,2405);


(lib.horizontalLine_wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(5,1,1).p("Ekr/gFqUFFxAWtESOgWt");
	this.shape.setTransform(1920,36.4);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(5,1,1).p("Ekr/gLJUFF2AsoESJgso");
	this.shape_1.setTransform(1920,71.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(5,1,1).p("Ekr/AG3UE5jgbbEecAbb");
	this.shape_2.setTransform(1920,-43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(5,1,1).p("Ekr/gD3UFF2APhESJgPh");
	this.shape_3.setTransform(1920,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(5,1,1).p("Ekr/ABkUE2/gGPEhAAGP");
	this.shape_4.setTransform(1920,-10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(5,1,1).p("Ekr/gA/UFG/AEBERAgEB");
	this.shape_5.setTransform(1920,6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(5,1,1).p("Ekr/AAAMJX/AAA");
	this.shape_6.setTransform(1920,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(7));

	// レイヤー 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ekr/AAAMJX/AAA");
	this.shape_7.setTransform(1920,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ekr/ALKUFF2gsoESJAso");
	this.shape_8.setTransform(1920,-71.4);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(5,1,1).p("Ekr/gLJUFF2AsoESJgso");
	this.shape_9.setTransform(1920,71.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(5,1,1).p("Ekr/gLJUFF2AsoESJgso");
	this.shape_10.setTransform(1920,71.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#999999").ss(5,1,1).p("Ekr/AG3UE5jgbbEecAbb");
	this.shape_11.setTransform(1920,-43.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(5,1,1).p("Ekr/gGcUFF2AZzESJgZz");
	this.shape_12.setTransform(1920,41.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#999999").ss(5,1,1).p("Ekr/ABkUE2/gGPEhAAGP");
	this.shape_13.setTransform(1920,-10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(5,1,1).p("Ekr/gA/UFG/AEBERAgEB");
	this.shape_14.setTransform(1920,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#999999").ss(5,1,1).p("Ekr/AAAMJX/AAA");
	this.shape_15.setTransform(1920,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#666666").ss(5,1,1).p("Ekr/AAAMJX/AAA");
	this.shape_16.setTransform(1920,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:1924},0).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,3845,5);


(lib.horizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("Ekr/AAAMJX/AAA");
	this.shape.setTransform(1920,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,3845,5);


(lib.WhiteBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F4E8").s().p("EiV/BUYMAAAiovMEr+AAAMAAACovg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Bagguet_Swing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Body("synched",0);
	this.instance.setTransform(92.5,252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30.7},9).to({rotation:-2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,505);


(lib.Title002_out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// の
	this.instance = new lib.トゥイーン1("synched",0);
	this.instance.setTransform(1528.8,116);

	this.instance_1 = new lib.トゥイーン2("synched",0);
	this.instance_1.setTransform(650.6,1364.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:650.6,y:1364.3},5).wait(13));

	// も
	this.instance_2 = new lib.トゥイーン3("synched",0);
	this.instance_2.setTransform(1408.8,116);

	this.instance_3 = new lib.トゥイーン4("synched",0);
	this.instance_3.setTransform(1122.7,1388.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},5).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition:0},0).to({_off:true,x:1122.7,y:1388.4},5).wait(11));

	// る
	this.instance_4 = new lib.トゥイーン5("synched",0);
	this.instance_4.setTransform(1288.8,116);

	this.instance_5 = new lib.トゥイーン6("synched",0);
	this.instance_5.setTransform(1482.8,1350.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},5).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({startPosition:0},0).to({_off:true,x:1482.8,y:1350.3},5).wait(9));

	// す
	this.instance_6 = new lib.トゥイーン7("synched",0);
	this.instance_6.setTransform(1168.8,116);

	this.instance_7 = new lib.トゥイーン8("synched",0);
	this.instance_7.setTransform(1304.8,1374.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_7}]},5).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({startPosition:0},0).to({_off:true,x:1304.8,y:1374.4},5).wait(7));

	// い
	this.instance_8 = new lib.トゥイーン9("synched",0);
	this.instance_8.setTransform(1048.8,116);

	this.instance_9 = new lib.トゥイーン10("synched",0);
	this.instance_9.setTransform(906.7,1342.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},8).to({state:[{t:this.instance_9}]},5).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({startPosition:0},0).to({_off:true,x:906.7,y:1342.3},5).wait(5));

	// う
	this.instance_10 = new lib.トゥイーン11("synched",0);
	this.instance_10.setTransform(928.8,116);

	this.instance_11 = new lib.トゥイーン12("synched",0);
	this.instance_11.setTransform(1693,1350.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},5).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({startPosition:0},0).to({_off:true,x:1693,y:1350.3},5).wait(3));

	// よ
	this.instance_12 = new lib.トゥイーン13("synched",0);
	this.instance_12.setTransform(808.8,116);

	this.instance_13 = new lib.トゥイーン14("synched",0);
	this.instance_13.setTransform(336.7,1350.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},12).to({state:[{t:this.instance_13}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({startPosition:0},0).to({_off:true,x:336.7,y:1350.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(746.7,54,822.2,124.1);


(lib.UnkoPadLogo_Appear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Unko
	this.instance = new lib.Unko("synched",0);
	this.instance.setTransform(51,55.8,0.039,0.039,0,0,0,51,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:48.9,scaleX:1.63,scaleY:1.63,rotation:-10.5,y:55.7},5,cjs.Ease.get(1)).to({regY:49,scaleX:1,scaleY:1,rotation:0,y:55.8},2,cjs.Ease.get(1)).wait(13));

	// UnkoPad
	this.instance_1 = new lib.UnkoPad("synched",0);
	this.instance_1.setTransform(233.8,83.5,0.063,0.063,0,0,0,124.5,31.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1.47,scaleY:1.47,rotation:5.7},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},3,cjs.Ease.get(1)).wait(9));

	// UnkoPadSub
	this.instance_2 = new lib.UnkoPadSub("synched",0);
	this.instance_2.setTransform(218.8,33.3,0.077,0.447,0,0,0,109.6,19);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({regX:109.5,scaleX:1,scaleY:1},3).wait(9));

	// Recipe
	this.instance_3 = new lib.Recipe("synched",0);
	this.instance_3.setTransform(365.5,84.3,0.247,0.247,0,0,0,2.4,83.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({regX:2.5,scaleX:1.37,scaleY:1.37},4).to({scaleX:1.13,scaleY:1.13},2).to({scaleX:0.79,scaleY:0.79},2).to({scaleX:1.13,scaleY:1.13},2).to({scaleX:1,scaleY:1},2).wait(1));

	// Boo
	this.instance_4 = new lib.Boo("synched",0);
	this.instance_4.setTransform(365.4,64.3,0.364,0.201,0,0,0,0,61);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,53.9,4,3.9);


(lib.Nobuteru_Extrude = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hair
	this.instance = new lib.Hair("synched",0);
	this.instance.setTransform(203.9,148.5,1,1,0,0,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.7,x:237.7,y:152.1},3).to({rotation:0,x:203.9,y:148.5},3).wait(1));

	// Brow_L
	this.instance_1 = new lib.Brow_L("synched",0);
	this.instance_1.setTransform(111,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:18},3).to({rotation:0},3).wait(1));

	// Brow_R
	this.instance_2 = new lib.Brow_R("synched",0);
	this.instance_2.setTransform(265,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:23.7,x:285.7,y:200.3},3).to({rotation:0,x:265,y:195.6},3).wait(1));

	// Eye_L
	this.instance_3 = new lib.Eye_L("synched",0);
	this.instance_3.setTransform(104.5,252.1,1,1,0,0,0,55.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.39},3).to({scaleX:1},3).wait(1));

	// Eye_R
	this.instance_4 = new lib.Eye_R("synched",0);
	this.instance_4.setTransform(270,254.6,1,1,0,0,0,56,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.56,scaleY:0.92},3).to({scaleX:1,scaleY:1},3).wait(1));

	// Nose
	this.instance_5 = new lib.Nose("synched",0);
	this.instance_5.setTransform(191.5,314.1,1,1,0,0,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.2,x:202.7,y:301.1},3).to({scaleX:1,x:191.5,y:314.1},3).wait(1));

	// Face
	this.instance_6 = new lib.Face_Extrude("synched",0);
	this.instance_6.setTransform(203.4,314.6,1,1,0,0,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:211.1,scaleX:1.05,rotation:9,x:213.5,y:315.6},3).to({regY:211,scaleX:1,rotation:0,x:203.4,y:314.6},3).wait(1));

	// Leaf
	this.instance_7 = new lib.Leaf("synched",0);
	this.instance_7.setTransform(202.5,746.2,1,1,0,0,0,89.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},3).to({startPosition:0},3).wait(1));

	// Body
	this.instance_8 = new lib.Body_1("synched",0);
	this.instance_8.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:3.7},3).to({rotation:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,-2,520,932.6);


(lib.Nobuteru_Appear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hair
	this.instance = new lib.Hair("synched",0);
	this.instance.setTransform(203.9,148.5,1,1,0,0,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3},5).to({rotation:0},4).wait(1));

	// Mouse_D
	this.instance_1 = new lib.Mouse_D("synched",0);
	this.instance_1.setTransform(196.5,449.1,1,1,0,0,0,63.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:462.1},5).to({y:449.1},4).wait(1));

	// Brow_L
	this.instance_2 = new lib.Brow_L("synched",0);
	this.instance_2.setTransform(111,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:8.9,y:190.6},5).to({rotation:0,y:195.6},4).wait(1));

	// Brow_R
	this.instance_3 = new lib.Brow_R("synched",0);
	this.instance_3.setTransform(265,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-9.7,y:195.5},5).to({rotation:0,y:195.6},4).wait(1));

	// Eye_L
	this.instance_4 = new lib.Eye_L("synched",0);
	this.instance_4.setTransform(104.5,252.1,1,1,0,0,0,55.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},5).to({startPosition:0},4).wait(1));

	// Eye_R
	this.instance_5 = new lib.Eye_R("synched",0);
	this.instance_5.setTransform(270,254.6,1,1,0,0,0,56,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:26.1,rotation:-9.2},5).to({regY:26,rotation:0},4).wait(1));

	// Nose
	this.instance_6 = new lib.Nose("synched",0);
	this.instance_6.setTransform(191.5,314.1,1,1,0,0,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-15},5).to({rotation:0},4).wait(1));

	// Face
	this.instance_7 = new lib.Face("synched",0);
	this.instance_7.setTransform(203.4,314.6,1,1,0,0,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:183.6,regY:211.1,rotation:3,x:203.5,y:314.7},5).to({regX:183.5,regY:211,rotation:0,x:203.4,y:314.6},4).wait(1));

	// Leaf
	this.instance_8 = new lib.Leaf("synched",0);
	this.instance_8.setTransform(202.5,746.2,1,1,0,0,0,89.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:7.7,x:171.1,y:722.5},5).to({rotation:0,x:202.5,y:746.2},4).wait(1));

	// Body
	this.instance_9 = new lib.Body_1("synched",0);
	this.instance_9.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:208.1,rotation:7.7,x:190,y:702.2},5).to({regX:208,rotation:0,x:227.9,y:712.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,-2,418,932.6);


(lib.Nobuteru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hair
	this.instance = new lib.Hair("synched",0);
	this.instance.setTransform(203.9,148.5,1,1,0,0,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Mouse_D
	this.instance_1 = new lib.Mouse_D("synched",0);
	this.instance_1.setTransform(196.5,449.1,1,1,0,0,0,63.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Brow_L
	this.instance_2 = new lib.Brow_L("synched",0);
	this.instance_2.setTransform(111,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Brow_R
	this.instance_3 = new lib.Brow_R("synched",0);
	this.instance_3.setTransform(265,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Eye_L
	this.instance_4 = new lib.Eye_L("synched",0);
	this.instance_4.setTransform(104.5,252.1,1,1,0,0,0,55.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Eye_R
	this.instance_5 = new lib.Eye_R("synched",0);
	this.instance_5.setTransform(270,254.6,1,1,0,0,0,56,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Nose
	this.instance_6 = new lib.Nose("synched",0);
	this.instance_6.setTransform(191.5,314.1,1,1,0,0,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Face
	this.instance_7 = new lib.Face("synched",0);
	this.instance_7.setTransform(203.4,314.6,1,1,0,0,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Leaf
	this.instance_8 = new lib.Leaf("synched",0);
	this.instance_8.setTransform(202.5,746.2,1,1,0,0,0,89.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Body
	this.instance_9 = new lib.Body_1("synched",0);
	this.instance_9.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,-2,418,932.6);


(lib.Hemajiro_Swing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouse
	this.instance = new lib.Mouse_1("synched",0);
	this.instance.setTransform(372.1,326.1,1,1,0,0,0,100.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.96,skewX:14.4},4).to({scaleY:1,skewX:0},3).wait(1));

	// Nose
	this.instance_1 = new lib.Nose_2("synched",0);
	this.instance_1.setTransform(369.1,258.1,1,1,0,0,0,54.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:54.3,regY:35.1,scaleY:0.9,skewX:12.1,skewY:-4,x:371.8,y:256.5},4).to({regX:54.5,regY:35,scaleY:1,skewX:0,skewY:0,x:369.1,y:258.1},3).wait(1));

	// Eye_R
	this.instance_2 = new lib.Eye_R_2("synched",0);
	this.instance_2.setTransform(431.6,199.6,1,1,0,0,0,20,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:434.1,y:192.6},4).to({x:431.6,y:199.6},3).wait(1));

	// Eye_L
	this.instance_3 = new lib.Eye_L_2("synched",0);
	this.instance_3.setTransform(311.1,193.6,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:316.1,y:191.6},4).to({x:311.1,y:193.6},3).wait(1));

	// Hand_R
	this.instance_4 = new lib.Hand_R("synched",0);
	this.instance_4.setTransform(570.7,210.1,1,1,0,0,0,11,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:62.1,scaleX:1.07,rotation:7.8,x:544.7,y:184.5},4).to({regY:62,scaleX:1,rotation:0,x:565.3,y:197.6},3).wait(1));

	// Hand_L
	this.instance_5 = new lib.Hand_L("synched",0);
	this.instance_5.setTransform(118.5,229.1,1,1,0,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.15,rotation:-8,x:139.3,y:236.3},4).to({scaleX:1,rotation:0,x:118.5,y:229.1},3).wait(1));

	// Foot_R
	this.instance_6 = new lib.Foot_R("synched",0);
	this.instance_6.setTransform(436.1,406.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:8.2,x:437.2,y:409},4).to({rotation:0,x:436.1,y:406.6},3).wait(1));

	// Foot_L
	this.instance_7 = new lib.Foot_L("synched",0);
	this.instance_7.setTransform(266.1,401.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:14.4,x:284.6,y:401},4).to({rotation:0,x:266.1,y:401.6},3).wait(1));

	// Face
	this.instance_8 = new lib.Face_2("synched",0);
	this.instance_8.setTransform(357.1,201,1,1,0,0,0,186.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1,skewX:6.7,skewY:4.7,x:368.7,y:196.4},4).to({scaleY:1,skewX:0,skewY:0,x:357.1,y:201},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8.5,669.7,505.1);


(lib.Hemajiro_Swing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouse
	this.instance = new lib.Mouse_1("synched",0);
	this.instance.setTransform(372.1,326.1,1,1,0,0,0,100.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.93},3).to({scaleY:1},3).wait(1));

	// Nose
	this.instance_1 = new lib.Nose_2("synched",0);
	this.instance_1.setTransform(369.1,258.1,1,1,0,0,0,54.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:54.4,scaleY:0.87,rotation:-4},3).to({regX:54.5,scaleY:1,rotation:0},3).wait(1));

	// Eye_R
	this.instance_2 = new lib.Eye_R_2("synched",0);
	this.instance_2.setTransform(431.6,199.6,1,1,0,0,0,20,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:428.6,y:195.6},3).to({x:431.6,y:199.6},3).wait(1));

	// Eye_L
	this.instance_3 = new lib.Eye_L_2("synched",0);
	this.instance_3.setTransform(311.1,193.6,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:307.1,y:191.6},3).to({x:311.1,y:193.6},3).wait(1));

	// Hand_R
	this.instance_4 = new lib.Hand_R("synched",0);
	this.instance_4.setTransform(570.7,210.1,1,1,0,0,0,11,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-12},3).to({rotation:0},3).wait(1));

	// Hand_L
	this.instance_5 = new lib.Hand_L("synched",0);
	this.instance_5.setTransform(118.5,229.1,1,1,0,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:9.2,y:229},3).to({rotation:0,y:229.1},3).wait(1));

	// Foot_R
	this.instance_6 = new lib.Foot_R("synched",0);
	this.instance_6.setTransform(436.1,406.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:428.1,y:408.6},3).to({x:436.1,y:406.6},3).wait(1));

	// Foot_L
	this.instance_7 = new lib.Foot_L("synched",0);
	this.instance_7.setTransform(266.1,401.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:271.1},3).to({x:266.1},3).wait(1));

	// Face
	this.instance_8 = new lib.Face_2("synched",0);
	this.instance_8.setTransform(357.1,201,1,1,0,0,0,186.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-1.2,x:356.1,y:200},3).to({rotation:0,x:357.1,y:201},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8.5,669.7,505.1);


(lib.Hemajiro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouse
	this.instance = new lib.Mouse_1("synched",0);
	this.instance.setTransform(372.1,326.1,1,1,0,0,0,100.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Nose
	this.instance_1 = new lib.Nose_2("synched",0);
	this.instance_1.setTransform(369.1,258.1,1,1,0,0,0,54.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Eye_R
	this.instance_2 = new lib.Eye_R_2("synched",0);
	this.instance_2.setTransform(431.6,199.6,1,1,0,0,0,20,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Eye_L
	this.instance_3 = new lib.Eye_L_2("synched",0);
	this.instance_3.setTransform(311.1,193.6,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Hand_R
	this.instance_4 = new lib.Hand_R("synched",0);
	this.instance_4.setTransform(570.7,210.1,1,1,0,0,0,11,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Hand_L
	this.instance_5 = new lib.Hand_L("synched",0);
	this.instance_5.setTransform(118.5,229.1,1,1,0,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Foot_R
	this.instance_6 = new lib.Foot_R("synched",0);
	this.instance_6.setTransform(436.1,406.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Foot_L
	this.instance_7 = new lib.Foot_L("synched",0);
	this.instance_7.setTransform(266.1,401.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Face
	this.instance_8 = new lib.Face_2("synched",0);
	this.instance_8.setTransform(357.1,201,1,1,0,0,0,186.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8.5,669.7,505.1);


(lib.Dameo_Swing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hand_R
	this.instance = new lib.Hand_R("synched",0);
	this.instance.setTransform(469.6,170.1,1,1,0,0,0,11,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.1,rotation:-15,x:469.7},3).to({regX:11,rotation:0,x:469.6},3).wait(1));

	// Hand_L
	this.instance_1 = new lib.Hand_L("synched",0);
	this.instance_1.setTransform(118.5,189.1,1,1,0,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:118.6},3).to({rotation:0,x:118.5},3).wait(1));

	// Foot_R
	this.instance_2 = new lib.Foot_R("synched",0);
	this.instance_2.setTransform(366.1,356.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:360.1},3).to({x:366.1},3).wait(1));

	// Foot_L
	this.instance_3 = new lib.Foot_L("synched",0);
	this.instance_3.setTransform(194,349.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:204},3).to({x:194},3).wait(1));

	// damehema_0012_mouse_dame.png
	this.instance_4 = new lib.Mouse("synched",0);
	this.instance_4.setTransform(308.6,241.1,1,1,0,0,0,86.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.84},3).to({scaleY:1},3).wait(1));

	// damehema_0011_nose_dame.png
	this.instance_5 = new lib.Nose_1("synched",0);
	this.instance_5.setTransform(302.1,147.1,1,1,0,0,0,35,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:6},3).to({rotation:0},3).wait(1));

	// damehema_0010_eye_dame_R.png
	this.instance_6 = new lib.Eye_L_1("synched",0);
	this.instance_6.setTransform(251.1,70,1,1,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:254.1},3).to({x:251.1},3).wait(1));

	// damehema_0009_eye_dame_L.png
	this.instance_7 = new lib.Eye_R_1("synched",0);
	this.instance_7.setTransform(349.1,73,1,1,0,0,0,20,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:347.6,y:74},3).to({x:349.1,y:73},3).wait(1));

	// damehema_0013_face_dame.png
	this.instance_8 = new lib.Face_1("synched",0);
	this.instance_8.setTransform(284.6,171.5,1,1,0,0,0,158.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:170.6,rotation:3,x:284.7,y:171.6},3).to({regY:170.5,rotation:0,x:284.6,y:171.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,568.6,460.6);


(lib.Dameo_NoHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Foot_R
	this.instance = new lib.Foot_R("synched",0);
	this.instance.setTransform(366.1,356.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.5,x:328.6},3).to({rotation:0,x:366.1},3).wait(1));

	// Foot_L
	this.instance_1 = new lib.Foot_L("synched",0);
	this.instance_1.setTransform(194,349.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-0.1,rotation:8.2,x:187.3,y:342.9},3).to({regY:0,rotation:0,x:194,y:349.6},3).wait(1));

	// damehema_0012_mouse_dame.png
	this.instance_2 = new lib.Mouse("synched",0);
	this.instance_2.setTransform(308.6,241.1,1,1,0,0,0,86.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:35.1,scaleY:0.84,rotation:11.2,x:291.8},3).to({regY:35,scaleY:1,rotation:0,x:308.6},3).wait(1));

	// damehema_0011_nose_dame.png
	this.instance_3 = new lib.Nose_1("synched",0);
	this.instance_3.setTransform(302.1,147.1,1,1,0,0,0,35,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:26.9,rotation:23.4,x:302.2,y:147},3).to({regY:27,rotation:0,x:302.1,y:147.1},3).wait(1));

	// damehema_0010_eye_dame_R.png
	this.instance_4 = new lib.Eye_L_1("synched",0);
	this.instance_4.setTransform(251.1,70,1,1,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:282.5,y:55.2},3).to({x:251.1,y:70},3).wait(1));

	// damehema_0009_eye_dame_L.png
	this.instance_5 = new lib.Eye_R_1("synched",0);
	this.instance_5.setTransform(349.1,73,1,1,0,0,0,20,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:368.1,y:67.8},3).to({x:349.1,y:73},3).wait(1));

	// damehema_0013_face_dame.png
	this.instance_6 = new lib.Face_1("synched",0);
	this.instance_6.setTransform(284.6,171.5,1,1,0,0,0,158.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:12.2,x:284.7},3).to({rotation:0,x:284.6},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.1,1,317,460.6);


(lib.Dameo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hand_R
	this.instance = new lib.Hand_R("synched",0);
	this.instance.setTransform(469.6,170.1,1,1,0,0,0,11,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Hand_L
	this.instance_1 = new lib.Hand_L("synched",0);
	this.instance_1.setTransform(118.5,189.1,1,1,0,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Foot_R
	this.instance_2 = new lib.Foot_R("synched",0);
	this.instance_2.setTransform(366.1,356.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Foot_L
	this.instance_3 = new lib.Foot_L("synched",0);
	this.instance_3.setTransform(194,349.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// damehema_0012_mouse_dame.png
	this.instance_4 = new lib.Mouse("synched",0);
	this.instance_4.setTransform(305.1,255.1,1,1,0,0,0,83,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// damehema_0011_nose_dame.png
	this.instance_5 = new lib.Nose_1("synched",0);
	this.instance_5.setTransform(302.1,147.1,1,1,0,0,0,35,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// damehema_0010_eye_dame_R.png
	this.instance_6 = new lib.Eye_L_1("synched",0);
	this.instance_6.setTransform(251.1,70,1,1,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// damehema_0009_eye_dame_L.png
	this.instance_7 = new lib.Eye_R_1("synched",0);
	this.instance_7.setTransform(349.1,73,1,1,0,0,0,20,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// damehema_0013_face_dame.png
	this.instance_8 = new lib.Face_1("synched",0);
	this.instance_8.setTransform(284.6,171.5,1,1,0,0,0,158.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,568.6,460.6);


(lib.Hands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Hand_R("synched",0);
	this.instance.setTransform(287,114.2,1,1,-66.2,0,0,13,63);

	this.instance_1 = new lib.Hand_L("synched",0);
	this.instance_1.setTransform(71,131.7,1,1,59.8,0,0,112.5,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,339.9,157.7);


(lib.Circle__anim_extend_blur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.Circle("synched",0);
	this.instance.setTransform(2,0);
	this.instance.alpha = 0.68;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:35.94,scaleY:35.94,x:1.7,alpha:0.629},7,cjs.Ease.get(-1)).to({scaleX:127.53,scaleY:127.53,x:0,alpha:0},7).wait(9));

	// レイヤー 1
	this.instance_1 = new lib.Circle("synched",0);
	this.instance_1.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:9.7,scaleY:9.7,x:1.7},7,cjs.Ease.get(-1)).to({scaleX:127.53,scaleY:127.53,x:0,alpha:0.352},7).to({_off:true},3).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-16,32,32);


(lib.BigGrid_wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine_wave_a("synched",0);
	this.instance.setTransform(1645.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// verticalLine
	this.instance_1 = new lib.verticalLine_wave_a("synched",1);
	this.instance_1.setTransform(1371.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// verticalLine
	this.instance_2 = new lib.verticalLine_wave_a("synched",0);
	this.instance_2.setTransform(1097,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

	// verticalLine
	this.instance_3 = new lib.verticalLine_wave_a("synched",1);
	this.instance_3.setTransform(822.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// verticalLine
	this.instance_4 = new lib.verticalLine_wave_a("synched",0);
	this.instance_4.setTransform(548.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

	// verticalLine
	this.instance_5 = new lib.verticalLine_wave_a("synched",1);
	this.instance_5.setTransform(274.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24));

	// verticalLine
	this.instance_6 = new lib.verticalLine_wave_a("synched",1);
	this.instance_6.setTransform(1919.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24));

	// verticalLine
	this.instance_7 = new lib.verticalLine_wave_a("synched",0);
	this.instance_7.setTransform(0,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine_wave("synched",0);
	this.instance_8.setTransform(960,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine_wave("synched",1);
	this.instance_9.setTransform(960,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine_wave("synched",0);
	this.instance_10.setTransform(960,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine_wave("synched",1);
	this.instance_11.setTransform(960,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine_wave("synched",1);
	this.instance_12.setTransform(960,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine_wave("synched",0);
	this.instance_13.setTransform(960,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


(lib.BigGrid_make_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine("synched",0);
	this.instance.setTransform(1645.5,-1320,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:480},14).wait(1));

	// verticalLine
	this.instance_1 = new lib.verticalLine("synched",0);
	this.instance_1.setTransform(1371.3,3480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:480},14).wait(1));

	// verticalLine
	this.instance_2 = new lib.verticalLine("synched",0);
	this.instance_2.setTransform(1097,-1320,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:480},14).wait(1));

	// verticalLine
	this.instance_3 = new lib.verticalLine("synched",0);
	this.instance_3.setTransform(822.8,3480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:480},14).wait(1));

	// verticalLine
	this.instance_4 = new lib.verticalLine("synched",0);
	this.instance_4.setTransform(548.5,-1320,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:480},14).wait(1));

	// verticalLine
	this.instance_5 = new lib.verticalLine("synched",0);
	this.instance_5.setTransform(274.3,3480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:480},14).wait(1));

	// verticalLine
	this.instance_6 = new lib.verticalLine("synched",0);
	this.instance_6.setTransform(1919.8,3480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:480},14).wait(1));

	// verticalLine
	this.instance_7 = new lib.verticalLine("synched",0);
	this.instance_7.setTransform(0,-1320,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:480},14).wait(1));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine("synched",0);
	this.instance_8.setTransform(-1920,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:960},14).wait(1));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine("synched",0);
	this.instance_9.setTransform(3840,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:960},14).wait(1));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine("synched",0);
	this.instance_10.setTransform(-1920,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:960},14).wait(1));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine("synched",0);
	this.instance_11.setTransform(3840,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:960},14).wait(1));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine("synched",0);
	this.instance_12.setTransform(3840,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:960},14).wait(1));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine("synched",0);
	this.instance_13.setTransform(-1920,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:960},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3842.5,-2402.5,9605,7205);


(lib.BigGrid_leave_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine("synched",0);
	this.instance.setTransform(1645.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:7.54,scaleY:1.01,x:6115.4,y:491},48,cjs.Ease.get(-1)).wait(1));

	// verticalLine
	this.instance_1 = new lib.verticalLine("synched",0);
	this.instance_1.setTransform(1371.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:7.54,scaleY:1.01,x:4048.8,y:491},48,cjs.Ease.get(-1)).wait(1));

	// verticalLine
	this.instance_2 = new lib.verticalLine("synched",0);
	this.instance_2.setTransform(1097,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:7.54,scaleY:1.01,x:1982.1,y:491},48,cjs.Ease.get(-1)).wait(1));

	// verticalLine
	this.instance_3 = new lib.verticalLine("synched",0);
	this.instance_3.setTransform(822.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.29,x:783.2},10,cjs.Ease.get(-1)).to({scaleX:7.64,x:-89.4},38).wait(1));

	// verticalLine
	this.instance_4 = new lib.verticalLine("synched",0);
	this.instance_4.setTransform(548.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:7.64,x:-2185.4},48,cjs.Ease.get(-1)).wait(1));

	// verticalLine
	this.instance_5 = new lib.verticalLine("synched",0);
	this.instance_5.setTransform(274.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:7.64,x:-4281.3},48,cjs.Ease.get(-1)).wait(1));

	// verticalLine
	this.instance_6 = new lib.verticalLine("synched",0);
	this.instance_6.setTransform(1919.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:7.54,scaleY:1.01,x:8182.1,y:491},48,cjs.Ease.get(-1)).wait(1));

	// verticalLine
	this.instance_7 = new lib.verticalLine("synched",0);
	this.instance_7.setTransform(0,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:7.64,x:-6377.3},48,cjs.Ease.get(-1)).wait(1));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine("synched",0);
	this.instance_8.setTransform(960,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({startPosition:0},0).to({x:-1920},8,cjs.Ease.get(1)).wait(33));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine("synched",0);
	this.instance_9.setTransform(960,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({startPosition:0},0).to({x:-1920},8,cjs.Ease.get(1)).wait(17));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine("synched",0);
	this.instance_10.setTransform(960,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40).to({startPosition:0},0).to({x:-1920},8,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine("synched",0);
	this.instance_11.setTransform(960,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:3840},8,cjs.Ease.get(1)).wait(41));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine("synched",0);
	this.instance_12.setTransform(960,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(32).to({startPosition:0},0).to({x:3840},8,cjs.Ease.get(1)).wait(9));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine("synched",0);
	this.instance_13.setTransform(960,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(16).to({startPosition:0},0).to({x:3840},8,cjs.Ease.get(1)).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


(lib.BigGrid_change = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine("synched",0);
	this.instance.setTransform(1645.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:1803.7,y:871.8},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:1028.4},7).to({regX:0.1,scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:453.1,y:1175.9},7).to({regX:0,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:272.6,y:708.1},8).wait(1));

	// verticalLine
	this.instance_1 = new lib.verticalLine("synched",0);
	this.instance_1.setTransform(1371.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:1525.2,y:708.2},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:857},7).to({regX:0.1,scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:719.3,y:999.6},7).to({regX:0,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:546.8,y:712.8},8).wait(1));

	// verticalLine
	this.instance_2 = new lib.verticalLine("synched",0);
	this.instance_2.setTransform(1097,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:1246.7,y:544.7},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:685.6},7).to({scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:985.6,y:823},7).to({scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:821,y:717.6},8).wait(1));

	// verticalLine
	this.instance_3 = new lib.verticalLine("synched",0);
	this.instance_3.setTransform(822.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:968.3,y:381.2},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:514.2},7).to({scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:1251.9,y:646.8},7).to({scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:1095.2,y:722.4},8).wait(1));

	// verticalLine
	this.instance_4 = new lib.verticalLine("synched",0);
	this.instance_4.setTransform(548.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:689.8,y:217.6},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:342.8},7).to({scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:1518.1,y:470.4},7).to({scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:1369.4,y:727.2},8).wait(1));

	// verticalLine
	this.instance_5 = new lib.verticalLine("synched",0);
	this.instance_5.setTransform(274.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:411.3,y:54.1},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:171.4},7).to({scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:1784.3,y:294},7).to({scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:1643.6,y:732},8).wait(1));

	// verticalLine
	this.instance_6 = new lib.verticalLine("synched",0);
	this.instance_6.setTransform(1919.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:2082.2,y:1035.3},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:1199.8},7).to({regX:0.1,scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:186.9,y:1352.2},7).to({regX:0,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:-1.6,y:703.3},8).wait(1));

	// verticalLine
	this.instance_7 = new lib.verticalLine("synched",0);
	this.instance_7.setTransform(0,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.97,scaleY:1.97,skewX:46.8,skewY:43.2,x:132.8,y:-109.5},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1080,y:0},7).to({scaleX:2.02,scaleY:2.03,rotation:0,skewX:130.9,skewY:133.8,x:2050.5,y:117.7},7).to({scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:1917.8,y:736.8},8).wait(1));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine("synched",0);
	this.instance_8.setTransform(960,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.97,scaleY:1.97,skewX:49.4,skewY:40.6,x:350.1,y:926.7},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:384,y:600},7).to({regX:1920.1,scaleX:1.94,scaleY:1.97,rotation:0,skewX:127.4,skewY:137.5,x:314.8,y:302.2},7).to({regX:1920,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:966.3,y:240.1},8).wait(1));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine("synched",0);
	this.instance_9.setTransform(960,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:1919.9,scaleX:1.97,scaleY:1.97,skewX:49.4,skewY:40.6,x:756.6,y:708.8},7).to({regX:1920,scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:768,y:600},7).to({regX:1920.1,scaleX:1.94,scaleY:1.97,rotation:0,skewX:127.4,skewY:137.5,x:744.9,y:500.8},7).to({regX:1920,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:962.1,y:480},8).wait(1));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine("synched",0);
	this.instance_10.setTransform(960,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:1919.9,scaleX:1.97,scaleY:1.97,skewX:49.4,skewY:40.6,x:1163.3,y:491},7).to({regX:1920,scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1152,y:600},7).to({regX:1920.1,scaleX:1.94,scaleY:1.97,rotation:0,skewX:127.4,skewY:137.5,x:1175,y:699.4},7).to({regX:1920,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:958,y:720},8).wait(1));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine("synched",0);
	this.instance_11.setTransform(960,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.97,scaleY:1.97,skewX:49.4,skewY:40.6,x:1570,y:273.4},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1536,y:600},7).to({regX:1920.1,scaleX:1.94,scaleY:1.97,rotation:0,skewX:127.4,skewY:137.5,x:1605.1,y:898},7).to({regX:1920,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:953.8,y:960},8).wait(1));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine("synched",0);
	this.instance_12.setTransform(960,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1.97,scaleY:1.97,skewX:49.4,skewY:40.6,x:-56.5,y:1144.4},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:0,y:600},7).to({regX:1920.1,scaleX:1.94,scaleY:1.97,rotation:0,skewX:127.4,skewY:137.5,x:-115.3,y:103.6},7).to({regX:1920,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:970.5,y:0.1},8).wait(1));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine("synched",0);
	this.instance_13.setTransform(960,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1.97,scaleY:1.97,skewX:49.4,skewY:40.6,x:1976.7,y:55.6},7).to({scaleX:1,scaleY:1,rotation:90,skewX:0,skewY:0,x:1920,y:600},7).to({regX:1920.1,scaleX:1.94,scaleY:1.97,rotation:0,skewX:127.4,skewY:137.5,x:2035.2,y:1096.7},7).to({regX:1920,scaleX:1,scaleY:1,rotation:-179,skewX:0,skewY:0,x:949.6,y:1199.9},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


(lib.GridMaking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.BigGrid_make_a("synched",0);
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_1 = new lib.BigGrid_change("synched",0,false);
	this.instance_1.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_2 = new lib.BigGrid_wave("synched",0);
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_3 = new lib.BigGrid_leave_a("synched",0,false);
	this.instance_3.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.instance_3}]},24).to({state:[]},35).wait(392));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3842.5,-2402.5,9605,7205);


(lib.Circle_anim_multiExtensions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Circle__anim_extend
	this.instance = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance.setTransform(-2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(30));

	// Circle__anim_extend
	this.instance_1 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_1.setTransform(-1.8,0,0.898,0.898);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(31));

	// Circle__anim_extend
	this.instance_2 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_2.setTransform(-1.8,0,0.898,0.898);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(32));

	// Circle__anim_extend
	this.instance_3 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_3.setTransform(-2,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(33));

	// Circle__anim_extend
	this.instance_4 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_4.setTransform(-1.8,0,0.898,0.898);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// Circle__anim_extend
	this.instance_5 = new lib.Circle__anim_extend_blur("synched",3,false);
	this.instance_5.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-59.7,119.4,119.4);


// stage content:
(lib.crouton_v003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Scene001_start:0,Scene001_stop:102,Scene002_start:119,Scene002_stop:130,Scene003_start:143,Scene003_stop:158,Scene004_start:169});

	// ex
	this.instance = new lib.Hands("synched",0);
	this.instance.setTransform(2228,397.3,1,1,0,0,0,169.9,78.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:false},0).to({x:1461.8,y:871.4},7).wait(95));

	// ex2
	this.instance_1 = new lib.Title002_out("synched",0,false);
	this.instance_1.setTransform(1050,109.2,1,1,0,0,0,786.6,105.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(143).to({_off:false},0).to({_off:true},18).wait(92));

	// Title
	this.instance_2 = new lib.Title("synched",0);
	this.instance_2.setTransform(-1014.1,109.2,1,1,0,0,0,786.6,105.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Title002("synched",0);
	this.instance_3.setTransform(-1094.6,109.2,1,1,0,0,0,786.6,105.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Title003("synched",0);
	this.instance_4.setTransform(1840.1,109.2,1,1,0,0,0,786.6,105.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({x:873.9},7).wait(10).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({_off:true,x:-1094.6},6).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},6).to({x:1050,mode:"independent"},5,cjs.Ease.get(1)).to({_off:true},13).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).to({x:1050},15).wait(95));

	// Logo
	this.instance_5 = new lib.UnkoPadLogo_Appear("synched",0,false);
	this.instance_5.setTransform(958.1,593.2,1.3,1.3,0,0,0,260.1,57.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.UnkoPadLogo("synched",0);
	this.instance_6.setTransform(958,586.1,0.954,0.954,0,0,0,260.1,57.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true,regY:57.6,scaleX:0.95,scaleY:0.95,x:958,y:586.1},63).wait(178));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},63).to({regX:259.6,regY:57.5,scaleX:1,scaleY:1,x:339.6,y:137.5},6).wait(4).to({startPosition:0},0).to({rotation:720},17,cjs.Ease.get(1)).wait(17).to({startPosition:0},0).to({rotation:360},6,cjs.Ease.get(1)).to({rotation:720},5,cjs.Ease.get(1)).wait(13).to({startPosition:0},0).wait(8).to({startPosition:0},0).to({startPosition:0},7).wait(95));

	// grass.png
	this.instance_7 = new lib.Grass("synched",0);
	this.instance_7.setTransform(1120.2,1328.2,1,1,0,0,0,1286.5,169);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:1101.3},81).wait(38).to({startPosition:0},0).to({regY:168.9,scaleX:1.13,scaleY:1.13,x:1132.2,y:1087.2},6,cjs.Ease.get(1)).wait(18).to({startPosition:0},0).wait(8).to({startPosition:0},0).to({startPosition:0},7).wait(95));

	// Bagguet
	this.instance_8 = new lib.Bagguet("synched",0);
	this.instance_8.setTransform(-194,583.1,1,1,0,0,0,92.5,252.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Bagguet_Swing();
	this.instance_9.setTransform(1624.6,860.6,0.545,0.545,36.7,0,0,92.7,252.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({_off:true,regX:92.7,regY:252.6,scaleX:0.55,scaleY:0.55,rotation:36.7,x:1624.6,y:860.6,mode:"independent"},6,cjs.Ease.get(1)).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},6,cjs.Ease.get(1)).wait(18).to({regX:92.5,x:1624.5,y:860.5,mode:"synched",startPosition:17},0).to({x:2106.6,y:760.5,startPosition:1},4).to({_off:true},4).wait(102));

	// hema.png
	this.instance_10 = new lib.Hemajiro("synched",0);
	this.instance_10.setTransform(2782.7,843.3,1,1,0,0,0,336,258);
	this.instance_10._off = true;

	this.instance_11 = new lib.Hemajiro_Swing();
	this.instance_11.setTransform(1000.2,843.3,1,1,0,0,0,336,258);
	this.instance_11._off = true;

	this.instance_12 = new lib.Hemajiro_Swing2();
	this.instance_12.setTransform(1023.4,820.1,1.11,1.109,0,0,-1.6,336.1,258.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},96).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_11}]},17).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_11}]},18).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},7).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96).to({_off:false},0).to({_off:true,x:1000.2,mode:"independent"},6).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96).to({_off:false},6).wait(17).to({mode:"synched",startPosition:3},0).to({x:970.2,y:1549.9,startPosition:2},6,cjs.Ease.get(1)).wait(18).to({x:-530.3,y:759.7,startPosition:5},0).to({x:2316.3,y:747.5,startPosition:4},6).wait(2).to({startPosition:6},0).to({_off:true,regX:336.1,regY:258.1,scaleX:1.11,scaleY:1.11,skewY:-1.6,x:1023.4,y:820.1,mode:"independent"},7).wait(95));

	// Nobuteru
	this.instance_13 = new lib.Nobuteru("synched",0);
	this.instance_13.setTransform(3374.9,653.2,1,1,0,0,0,224,506);
	this.instance_13._off = true;

	this.instance_14 = new lib.Nobuteru_Appear();
	this.instance_14.setTransform(1592.5,723.2,1,1,0,0,0,224,506);
	this.instance_14._off = true;

	this.instance_15 = new lib.Nobuteru_Extrude();
	this.instance_15.setTransform(1465.2,793.4,0.79,0.79,-5.2,0,0,224.1,506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},96).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_14}]},17).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_14}]},18).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},7).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96).to({_off:false},0).to({_off:true,x:1592.5,y:723.2,mode:"independent"},6).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(96).to({_off:false},6).wait(17).to({mode:"synched",startPosition:7},0).to({regX:224.2,regY:506.1,scaleX:0.54,scaleY:0.54,rotation:-43.2,x:1345.1,y:513.3,mode:"independent"},6,cjs.Ease.get(1)).wait(18).to({regY:505.9,y:513.2,mode:"synched",startPosition:0},0).to({x:2263.3,y:387.2,startPosition:3},4).wait(4).to({startPosition:7},0).to({_off:true,regX:224.1,regY:506,scaleX:0.79,scaleY:0.79,rotation:-5.2,x:1465.2,y:793.4,mode:"independent"},7).wait(95));

	// dameo.png
	this.instance_16 = new lib.Dameo("synched",0);
	this.instance_16.setTransform(2148.1,869.3,1,1,0,0,0,285.5,232);
	this.instance_16._off = true;

	this.instance_17 = new lib.Dameo_Swing();
	this.instance_17.setTransform(365.7,869.3,1,1,0,0,0,285.5,232);
	this.instance_17._off = true;

	this.instance_18 = new lib.Dameo_NoHand();
	this.instance_18.setTransform(1474.1,934.3,0.955,0.955,0,0,0,285.5,232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},96).to({state:[{t:this.instance_17}]},6).to({state:[{t:this.instance_17}]},17).to({state:[{t:this.instance_17}]},6).to({state:[{t:this.instance_17}]},18).to({state:[{t:this.instance_17}]},6).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},7).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(96).to({_off:false},0).to({_off:true,x:365.7,mode:"independent"},6).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(96).to({_off:false},6).wait(17).to({mode:"synched",startPosition:3},0).to({x:-204.3,y:1430.3,startPosition:2},6,cjs.Ease.get(1)).wait(18).to({x:-330.3,y:536.2,startPosition:5},0).to({x:2247.5,y:478.1,startPosition:4},6).wait(2).to({startPosition:6},0).to({_off:true,scaleX:0.96,scaleY:0.96,x:1474.1,y:934.3,mode:"independent"},7).wait(95));

	// ex3
	this.instance_19 = new lib.Circle_anim_multiExtensions("synched",0);
	this.instance_19.setTransform(958,600,1,1,0,0,0,-2,0);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(119).to({_off:false},0).wait(24).to({startPosition:0},0).to({_off:true},15).wait(95));

	// Box
	this.instance_20 = new lib.WhiteBox("synched",0);
	this.instance_20.setTransform(960,600,1,1.111,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:0.63,x:1040},6).wait(2).to({scaleX:0.54,x:960},0).to({regX:960.1,scaleX:0.44,scaleY:0.6,y:598.9},4).to({scaleX:0.51,scaleY:0.22,x:960.1,y:600},3).wait(60).to({startPosition:0},0).to({regX:960,scaleX:0.36,scaleY:0.22,x:348,y:117.2},6).wait(4).to({startPosition:0},0).to({scaleX:1,x:960},7).wait(2).to({startPosition:0},0).to({scaleY:1.11,y:600,mode:"independent"},8).wait(17).to({mode:"synched",startPosition:0},0).to({startPosition:0},6,cjs.Ease.get(1)).wait(18).to({startPosition:0},0).wait(8).to({startPosition:0},0).to({startPosition:0},7).wait(95));

	// GridMaking
	this.instance_21 = new lib.GridMaking("synched",0);
	this.instance_21.setTransform(902.2,1138.5,1,1,0,0,0,902.3,1138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},102).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2882.6,-1802.5,9605,7205);

})(cjsLib = cjsLib||{}, cjsImages = cjsImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsLib, cjsImages, createjs, ss;