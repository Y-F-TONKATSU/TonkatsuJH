(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 768,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/images/widget_crouton.png?1467622305148", id:"widget_crouton"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.widget_crouton = function() {
	this.initialize(img.widget_crouton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.WidgetImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.widget_crouton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.LinesB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(4,1,1).p("AEsnzIDIDJAkrnzIMfMfAnzBkIGQGQAnzEsIDIDIAnzhiIJWJWAnzkqIMeMeAhjnzIJXJXABknzIGQGRAnznyIPmPm");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,104,104);


(lib.LinesA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(4,1,1).p("AGQnzIBkBlAmPnzIODODAjHnzIK7K7AnzmOIOCOCAnzjGIK6K6AnzGQIBkBkAnzDIIEsEsAnzAAIHzH0AAAnzIH0HzADInzIEsEt");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,104,104);


(lib.FrameLine_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FFFF").ss(4,1,1).p("AgqgBIBVAD");
	this.shape.setTransform(4.3,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66FFFF").ss(4,1,1).p("AhKgEICVAJ");
	this.shape_1.setTransform(7.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#66FFFF").ss(4,1,1).p("AingEIFPAJ");
	this.shape_2.setTransform(16.8,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#66FFFF").ss(4,1,1).p("AoZgRQM7B6D4iO");
	this.shape_3.setTransform(53.8,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#66FFFF").ss(4,1,1).p("AszAVQNEBAMjh/");
	this.shape_4.setTransform(82.1,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#66FFFF").ss(4,1,1).p("AuCAoQO7iTNKB6");
	this.shape_5.setTransform(90,-4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#66FFFF").ss(4,1,1).p("A1tgFQLIifLmCfQNHCmHmiK");
	this.shape_6.setTransform(139,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#66FFFF").ss(4,1,1).p("A3bAeQL+C4Kyi4QOokxJfEx");
	this.shape_7.setTransform(150,-3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#66FFFF").ss(4,1,1).p("A3bgEQK2hDL6BDQNlBWKihW");
	this.shape_8.setTransform(150,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#66FFFF").ss(4,1,1).p("A3bAAMAu3AAA");
	this.shape_9.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,12.7,4.5);


(lib.Bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("Eg8JAAxIAAhiMB4TAAAIAABig");
	this.shape.setTransform(385,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,770,10);


(lib.Lines_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.LinesB();
	this.instance.setTransform(-50,-50,1,1,0,0,0,50,50);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:50,y:50,alpha:1},11,cjs.Ease.get(1)).wait(1));

	// レイヤー 1
	this.instance_1 = new lib.LinesA();
	this.instance_1.setTransform(150,150,1,1,0,0,0,50,50);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:50,y:50,alpha:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-102,304,304);


(lib.frame_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FrameLine_in
	this.instance = new lib.FrameLine_in("synched",0,false);
	this.instance.setTransform(300,150,1,1,-90,0,0,150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// FrameLine_in
	this.instance_1 = new lib.FrameLine_in("synched",0,false);
	this.instance_1.setTransform(150,300,1,1,180,0,0,150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// FrameLine_in
	this.instance_2 = new lib.FrameLine_in("synched",0,false);
	this.instance_2.setTransform(0,150,1,1,90,0,0,150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// FrameLine_in
	this.instance_3 = new lib.FrameLine_in("synched",0,false);
	this.instance_3.setTransform(150,0,1,1,0,0,0,150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2,305,304);


(lib.Bar_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bar
	this.instance = new lib.Bar();
	this.instance.setTransform(-385,55,1,1,0,0,0,385,25);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 26.5, 47.5, 0)];
	this.instance.cache(-2,-2,774,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:385},10).wait(1));

	// Bar
	this.instance_1 = new lib.Bar();
	this.instance_1.setTransform(1155,65,1,1,0,0,0,385,25);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 0, 117, 0)];
	this.instance_1.cache(-2,-2,774,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:385},10).wait(1));

	// Bar
	this.instance_2 = new lib.Bar();
	this.instance_2.setTransform(1155,45,1,1,0,0,0,385,25);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 74, 117, 0)];
	this.instance_2.cache(-2,-2,774,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:385},10).wait(3));

	// Bar
	this.instance_3 = new lib.Bar();
	this.instance_3.setTransform(-385,35,1,1,0,0,0,385,25);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 0, 127.5, 0)];
	this.instance_3.cache(-2,-2,774,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:385},10).wait(3));

	// Bar
	this.instance_4 = new lib.Bar();
	this.instance_4.setTransform(1155,25,1,1,0,0,0,385,25);
	this.instance_4.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 127.5, 0, 0, 0)];
	this.instance_4.cache(-2,-2,774,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:385},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(770,0,770,10);


(lib.WidgetFrame_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.frame_in("synched",0,false);
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// レイヤー 2
	this.instance_1 = new lib.WidgetImage("single",0);
	this.instance_1.setTransform(150,150,0.04,0.04,90,0,0,150,150);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2,305,304);


(lib.TitleBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDCKQgEgEgBgGQABgEABgCQABgDAEgCIABgBIAFgEQAXgQAQgRQAQgRAIgVQAKgVAEgZQAEgbAAgkIhYAAQgGAAgCgDQgDgEAAgGQAAgFADgEQACgDAGgBIByAAIAAgjQABgGAEgDQAEgEAGAAQAFAAAEAEQAEADABAGIAAAjIB2AAQAFABADADQADAEAAAGQAAAFgDAEQgDADgFAAIiPAAIgBAbIgDAWIBkAAIAJABIAIAEQAGAEACAGQACAEAAANQAAAUgCAVQgCAVgDAQQgDARgFAJQgEALgLAFQgJAFgTAAIgRgBIgVgBIgPgCQgFgBgEgEQgEgEABgFQAAgHADgEQAEgEAFAAIACAAIAEABIAOACIAQABIANAAQAKAAAFgDQAGgEACgIQAEgIACgOIADgcIABgdQAAgHgCgCQgCgDgEAAIhcAAQgEAWgHASQgGATgLAPQgMATgPAPQgRAQgTAMIgHADIgFABQgGgBgEgEg");
	this.shape.setTransform(733.7,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5CEQgEgEAAgIQAAgFADgCQACgDAHgDQAbgLASgKQAQgKAMgMQAMgKAFgKQAHgKABgOQADgNAAgTQAAgfgCgcQgBgbgDgWIgBgCIAAgBQAAgGAEgEQAEgDAIAAQAGAAADADQAEADABAGQACAGAAAOIACAfIACAiIAAAfQAAAWgEARQgEARgIAOQgKAOgQAPQgIAHgJAGQgKAGgMAHQgLAHgSAHIgIAEIgFACIgEAAQgHAAgEgFgAhEAUQgDgCgCgEQgDgKgCgMQgCgNAAgPIABgVIACgXIADgVIABgFIAAgDIAAgDIgBgEIAAgBIAAgCQABgFAEgDQAEgEAHAAQAHAAAEAGQAEAGAAAKIAAAGIgCAJIgCAVIgCAWIAAATIAAATQABAIACAFIABAEIAAAEQAAAGgEAEQgFAEgGABQgFgBgDgCg");
	this.shape_1.setTransform(702.5,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaCNQgDgDAAgFIAAjLIgXAAIgLAdIgMAWQgHAOgEAEQgFACgEgBQgGAAgEgBQgDgEAAgFIAAgGIAEgHQAQgaAKgaQALgbAGgeQACgGADgDQADgCADAAQAHAAAEAEQADADAAAFIgBAIIgDANIgFAPIB/AAQAFAAADAEQADAEAAAFQABAFgEAEQgDADgFAAIhUAAIAAAsIBLAAQAFAAADAEQADADAAAGQAAAFgDAEQgDADgFAAIhLAAIAAArIBNAAQAFABADADQADADAAAFQAAAGgDADQgDAEgFAAIhNAAIAABCQgBAFgDADQgDADgHAAQgGAAgEgDgAheCNQgEgDAAgFIAAifIgKAQIgLALQgEAEgDACQgCACgEgBQgFAAgEgDQgDgFAAgCIAAgGIAGgHQALgPAMgTQANgUALgWQAKgWAHgUQACgGACgCQADgCAFgBQAGABAEADQAEADAAAFQgBAEgDAJIgIAUIgLAZIAADPQgBAFgDADQgEADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(671.5,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHCAQgDgEAAgGQAAgEABgCIADgFIACgCIAFgCIAYgNQAKgGAIgHIAQgPQAQgRAHgRQAIgSAAgSQAAgUgGgSQgGgRgLgMQgNgOgUgIQgUgIgWAAQgVAAgVAJQgVAKgRASQgPAQgHATQgHATAAAXQAAAQAEAMQADALAIAIQAIAIAHADQAHAEAJAAQAKAAAHgGQAHgFAFgMQAEgKADgQQAEgQACgPQACgSAAgRIgBgRQABgHADgEQAEgEAGAAQAGAAADAEQADAFAAALQAAAVgCAVQgBATgEASQgDARgDANQgIAXgOAMQgPALgUAAQgOAAgLgFQgMgFgKgLQgNgOgHgSQgGgRAAgUQAAgbALgZQALgaATgUQATgTAZgMQAZgLAbAAQAQAAARAEQAQAEAPAHQAPAIAKAJQAMALAIAOQAIAPAFARQAEARAAARQAAAagMAaQgNAagYAXQgLALgNAIQgMAJgMAFQgKAFgHABQgHgBgEgDg");
	this.shape_3.setTransform(640.5,51.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8B+IgIgBQgDgBgDgEQgCgEAAgFQAAgGADgFQAEgDAGAAIACAAIABAAIABAAQAFAAAKgGQAKgFAMgJIAZgTIAYgVQAWgWASgYQASgcAMggQACgEADgEQAEgCAEAAQAGAAAFAEQAEAFAAAHQAAADgEAJIgKAVIgNAYIgNAUQgQAXgYAWQgXAYgbATQgSANgLAGQgMAFgJABIgFgBgAgWhGIgegIIgggIIgbgKQgIgDgCgEQgDgCAAgGQAAgGAEgEQAEgFAGABIADAAIAEACIALADQAJAEAQAFIAhAIIAiAHQAEABADADQADAEAAAFQAAAHgDAEQgEAEgFAAQgGAAgOgCg");
	this.shape_4.setTransform(609.5,52);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFCHQgFgEAAgGIABgIIAAgJIABhRIABhuIABgaIAAgOIABgFIAAgCQACgDADgDQAEgCAEAAIAGACQADAAACADIAEAFIABAIIgBAGIAAAtIAAAOIAAAQQAOAKASAJIAjASQATAGASAGQAGACACAEQAEADAAAGQgBAHgEAEQgEAFgHAAIgFAAIgKgFQgYgKgUgLQgWgMgUgLIAAAjIAAAWIAAAOIgBANIgBAdIAAAPIAAAGIgBAEQgCAEgDACQgEADgFAAQgGAAgEgEg");
	this.shape_5.setTransform(581.4,51.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiECBQgEgFgBgHQABgEACgCIAHgGQAbgSAOgOQAQgOAGgNQAGgNAAgOIADhwQABgFADgEQAEgDAHAAQADAAAEACQAEABABADIACAEIAAABIAAABIgEByQAAAMgDAKQgBAJgHAJQgFAJgJALIgRASIgVARQgJAIgIAFQgIAFgDAAQgGAAgFgFgAAMCAQgEgEAAgHIACgFIACgGIAAjiQAAgGAFgDQADgEAHAAQAGAAAEAEQADADAAAGIAADTIABABQAKgGALgNQAKgMAKgRQAJgQAIgSQAGgRAFgRQABgFADgDQADgDAFAAQAHAAAEAEQAEAEAAAGQAAAFgCAJIgIAUIgJAXQgNAdgPAUQgQAVgTANQgJAHgIADQgIADgGAAQgHAAgFgEg");
	this.shape_6.setTransform(547.5,51.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWCAQgEgEAAgHQAAgEACgDQABgDADgBIADgCIAIgEQA8gaAkgxQAlgwAQhIQgMABgVABIgxACQgMAYgRAWQgRAUgYASIgKAHQgEAAgEAAQgGAAgDgCQgEgEAAgGQAAgDACgDIAEgGIABgBIAHgDQAVgPAPgQQAOgPAIgPQAHgPgBgNQAAgFAEgEQAEgEAGgBQAGAAAEAEQADADAAAGIAAABIAAAAQAZAAAWgBQAVgBANgCIAFgFIAIgCQAHAAAEAFQAFAFAAAIQAAAGgDAMIgIAbIgLAdIgMAcQgLAWgNAUQgNATgQAQQgQAQgTAOIgZARIgXALQgKAFgEAAQgGAAgEgEg");
	this.shape_7.setTransform(516.2,51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

	// Bar
	this.instance = new lib.Bar_in("synched",0,false);
	this.instance.setTransform(385,50,1,1,0,0,0,385,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660099").s().p("Eg8JAD5IAAnxMB4TAAAIAAHxg");
	this.shape_8.setTransform(385,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_8}]},14).wait(1));

	// Lines
	this.instance_1 = new lib.Lines_in("synched",0,false);
	this.instance_1.setTransform(750,50,1,1,0,0,0,50,50);

	this.instance_2 = new lib.Lines_in("synched",0,false);
	this.instance_2.setTransform(650,50,1,1,0,0,0,50,50);

	this.instance_3 = new lib.Lines_in("synched",0,false);
	this.instance_3.setTransform(550,50,1,1,0,0,0,50,50);

	this.instance_4 = new lib.Lines_in("synched",0,false);
	this.instance_4.setTransform(450,50,1,1,0,0,0,50,50);

	this.instance_5 = new lib.Lines_in("synched",0,false);
	this.instance_5.setTransform(350,50,1,1,0,0,0,50,50);

	this.instance_6 = new lib.Lines_in("synched",0,false);
	this.instance_6.setTransform(250,50,1,1,0,0,0,50,50);

	this.instance_7 = new lib.Lines_in("synched",0,false);
	this.instance_7.setTransform(150,50,1,1,0,0,0,50,50);

	this.instance_8 = new lib.Lines_in("synched",0,false);
	this.instance_8.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-102,1642,304);


// stage content:



(lib.widget = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TitleBar
	this.instance = new lib.TitleBar("synched",0,false);
	this.instance.setTransform(400,60,1,1,0,0,0,400,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// レイヤー 4
	this.instance_1 = new lib.WidgetFrame_in("synched",0,false);
	this.instance_1.setTransform(590,310,1,1,0,0,0,150,150);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282,148,1642,304);

})(cjsWidgetLib = cjsWidgetLib||{}, cjsWidgetImages = cjsWidgetImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsWidgetLib, cjsWidgetImages, createjs, ss;