(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"contents/experimental/1603/images/dameo.png?1460476022841", id:"dameo"},
		{src:"contents/experimental/1603/images/grass.png?1460476022841", id:"grass"},
		{src:"contents/experimental/1603/images/hema.png?1460476022841", id:"hema"},
		{src:"contents/experimental/1603/images/nobuteru.png?1460476022841", id:"nobuteru"}
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


(lib.NobuteruScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.grass();
	this.instance.setTransform(21.2,828.9);

	this.instance_1 = new lib.dameo();
	this.instance_1.setTransform(0,520.1);

	this.instance_2 = new lib.hema();
	this.instance_2.setTransform(597.8,468.1);

	this.instance_3 = new lib.nobuteru();
	this.instance_3.setTransform(1269.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1734.2,1053.9);


(lib.Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Ball_center_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0B0QgwgwABhEQgBhDAwgxQAxgwBDABQBEgBAwAwQAwAxAABDQAABEgwAwQgwAwhEAAQhDAAgxgwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);


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


(lib.verticalLine_short = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("EAAAiovMAAAFRf");
	this.shape.setTransform(0,540,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,1090);


(lib.verticalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAAAi7fMAAAF2/");
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


(lib.horizontalLine_1920 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("EiV/AAAMEr/AAA");
	this.shape.setTransform(960,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,1930,10);


(lib.horizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ekr/AAAMJX/AAA");
	this.shape.setTransform(1920,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,3845,5);


(lib.Boxes_side = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("EAAJAuzIAAAKEhdvgu8MC7fAAAEhQWghiMCguAAAEhC8gUJMCF8AAAEg1kgGwMBrMAAAEgoKAGnMBQbAAAA6xUAMA1qAAAEgNYAhaIa5AAEhXCgoPMCuGAAAEhJpga2MCTVAAAEg8QgNcMB4kAAAEgu3gAEMBd0AAAEgheANTMBDDAAAA0EatMAoRAAAEgGrAoGINgAA");
	this.shape.setTransform(0,-300.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605,-606,1210.1,611);


(lib.Box_Contract = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("EhdvhdvMC7fAAAMAAAC7fMi7fAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605,-605,1210.1,1210);


(lib.WhiteBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EiV/BUYMAAAiovMEr+AAAMAAACovg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.circle_centered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg3OA3PUgW4gW5gABggWUAABggVAW4gW5UAW5gW4AgVgABUAgWAABAW5AW4UAW4AW5AAAAgVUAAAAgWgW4AW5UgW5AW4ggWAAAUggVAAAgW5gW4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


(lib.Box_green_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Eg2rg2rMBtXAAAMAAABtXMhtXAAAg");
	this.shape.setTransform(350,350);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,100,0.302)").s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");
	this.shape_1.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,704,704);


(lib.Box_green_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Eg2rg2rMBtXAAAMAAABtXMhtXAAAg");
	this.shape.setTransform(350,350);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(100,255,100,0.302)").s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");
	this.shape_1.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,704,704);


(lib.Box_green_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Eg2rg2rMBtXAAAMAAABtXMhtXAAAg");
	this.shape.setTransform(350,350);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(150,255,100,0.302)").s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");
	this.shape_1.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,704,704);


(lib.Box_green_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Eg2rg2rMBtXAAAMAAABtXMhtXAAAg");
	this.shape.setTransform(350,350);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(80,255,100,0.302)").s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");
	this.shape_1.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,704,704);


(lib.Box_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Eg2rg2rMBtXAAAMAAABtXMhtXAAAg");
	this.shape.setTransform(350,350);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(100,255,100,0.302)").s().p("Eg2rA2sMAAAhtXMBtXAAAMAAABtXg");
	this.shape_1.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,704,704);


(lib.PileUpTiles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Box_green_5();
	this.instance.setTransform(485,1143.4,1,1,45,0,0,349.9,350.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:350,regY:350,rotation:0,x:-605,y:-185},9,cjs.Ease.get(1)).wait(1));

	// レイヤー 2
	this.instance_1 = new lib.Box_green_4();
	this.instance_1.setTransform(485,1143.4,1,1,45,0,0,349.9,350.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:350,regY:350,rotation:0,x:-605,y:-185},10,cjs.Ease.get(1)).wait(3));

	// レイヤー 3
	this.instance_2 = new lib.Box_green_3();
	this.instance_2.setTransform(385,1043.4,1,1,45,0,0,349.9,350.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:350,regY:350,rotation:0,x:-605,y:-185},10,cjs.Ease.get(1)).wait(5));

	// レイヤー 4
	this.instance_3 = new lib.Box_green_2();
	this.instance_3.setTransform(385,1043.4,1,1,45,0,0,349.9,350.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({regX:350,regY:350,rotation:0,x:-605,y:-185},11,cjs.Ease.get(1)).wait(6));

	// レイヤー 5
	this.instance_4 = new lib.Box_green();
	this.instance_4.setTransform(485,1143.4,1,1,45,0,0,349.9,350.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:350,regY:350,rotation:0,x:-605,y:-185},13,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,645.7,995.6,995.6);


(lib.LineAnim_forPM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine_short("synched",0);
	this.instance.setTransform(1920,2160,1,1,0,0,0,0,1080);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({y:1080},94,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_1 = new lib.verticalLine_short("synched",0);
	this.instance_1.setTransform(0,2160,1,1,0,0,0,0,1080);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({y:1080},94,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_2 = new lib.verticalLine_short("synched",0);
	this.instance_2.setTransform(1800,2160,1,1,0,0,0,0,1080);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({y:1080},101,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_3 = new lib.verticalLine_short("synched",0);
	this.instance_3.setTransform(120,2160,1,1,0,0,0,0,1080);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106).to({_off:false},0).to({y:1080},101,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_4 = new lib.verticalLine_short("synched",0);
	this.instance_4.setTransform(1680,2160,1,1,0,0,0,0,1080);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({y:1080},112,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_5 = new lib.verticalLine_short("synched",0);
	this.instance_5.setTransform(240,2160,1,1,0,0,0,0,1080);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).to({y:1080},112,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_6 = new lib.verticalLine_short("synched",0);
	this.instance_6.setTransform(360,2160,1,1,0,0,0,0,1080);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({_off:false},0).to({y:1080},144,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_7 = new lib.verticalLine_short("synched",0);
	this.instance_7.setTransform(1560,2160,1,1,0,0,0,0,1080);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({_off:false},0).to({y:1080},144,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_8 = new lib.verticalLine_short("synched",0);
	this.instance_8.setTransform(480,2160,1,1,0,0,0,0,1080);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({_off:false},0).to({y:1080},151,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_9 = new lib.verticalLine_short("synched",0);
	this.instance_9.setTransform(1440,2160,1,1,0,0,0,0,1080);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({_off:false},0).to({y:1080},151,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_10 = new lib.verticalLine_short("synched",0);
	this.instance_10.setTransform(600,2160,1,1,0,0,0,0,1080);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).to({y:1080},157,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_11 = new lib.verticalLine_short("synched",0);
	this.instance_11.setTransform(1320,2160,1,1,0,0,0,0,1080);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50).to({_off:false},0).to({y:1080},157,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_12 = new lib.verticalLine_short("synched",0);
	this.instance_12.setTransform(1200,2160,1,1,0,0,0,0,1080);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(37).to({_off:false},0).to({y:1779.2},58).to({y:1080},112,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_13 = new lib.verticalLine_short("synched",0);
	this.instance_13.setTransform(720,2160,1,1,0,0,0,0,1080);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(37).to({_off:false},0).to({y:1080},170,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_14 = new lib.verticalLine_short("synched",0);
	this.instance_14.setTransform(1080,2160,1,1,0,0,0,0,1080);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).to({y:1080},173,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_15 = new lib.verticalLine_short("synched",0);
	this.instance_15.setTransform(840,2160,1,1,0,0,0,0,1080);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(34).to({_off:false},0).to({y:1080},173,cjs.Ease.get(1)).wait(1));

	// verticalLine
	this.instance_16 = new lib.verticalLine_short("synched",0);
	this.instance_16.setTransform(960,2160,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:1080},207,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_17 = new lib.horizontalLine_1920("synched",0);
	this.instance_17.setTransform(0,1080,1,1,0,0,0,1920,0);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(113).to({_off:false},0).to({x:1920},94,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_18 = new lib.horizontalLine_1920("synched",0);
	this.instance_18.setTransform(0,960,1,1,0,0,0,1920,0);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(106).to({_off:false},0).to({x:1920},101,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_19 = new lib.horizontalLine_1920("synched",0);
	this.instance_19.setTransform(0,840,1,1,0,0,0,1920,0);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(95).to({_off:false},0).to({x:1920},112,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_20 = new lib.horizontalLine_1920("synched",0);
	this.instance_20.setTransform(0,720,1,1,0,0,0,1920,0);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(56).to({_off:false},0).to({x:1920},151,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_21 = new lib.horizontalLine_1920("synched",0);
	this.instance_21.setTransform(0,600,1,1,0,0,0,1920,0);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(50).to({_off:false},0).to({x:1920},157,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_22 = new lib.horizontalLine_1920("synched",0);
	this.instance_22.setTransform(0,480,1,1,0,0,0,1920,0);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(37).to({_off:false},0).to({x:1920},170,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_23 = new lib.horizontalLine_1920("synched",0);
	this.instance_23.setTransform(0,360,1,1,0,0,0,1920,0);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(34).to({_off:false},0).to({x:1920},173,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_24 = new lib.horizontalLine_1920("synched",0);
	this.instance_24.setTransform(0,240,1,1,0,0,0,1920,0);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(16).to({_off:false},0).to({x:1920},191,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_25 = new lib.horizontalLine_1920("synched",0);
	this.instance_25.setTransform(0,120,1,1,0,0,0,1920,0);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(8).to({_off:false},0).to({x:1920},199,cjs.Ease.get(1)).wait(1));

	// horizontalLine
	this.instance_26 = new lib.horizontalLine_1920("synched",0);
	this.instance_26.setTransform(0,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({x:1920},207,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1925,-5,2890,2170);


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


(lib.Ball_extend_inverse_B_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Ball_center_yellow();
	this.instance.setTransform(0,0,1.912,1.912);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.02,scaleY:0.02,y:-100},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.Ball_extend_B_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Ball_center_yellow();
	this.instance.setTransform(0,150,0.015,0.015);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.91,scaleY:1.91,y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,149.8,0.5,0.5);


(lib.BigGrid_wave_b_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine("synched",0);
	this.instance.setTransform(1645.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// verticalLine
	this.instance_1 = new lib.verticalLine_wave_a("synched",0);
	this.instance_1.setTransform(1371.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// verticalLine
	this.instance_2 = new lib.verticalLine("synched",0);
	this.instance_2.setTransform(1097,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	// verticalLine
	this.instance_3 = new lib.verticalLine_wave_a("synched",1);
	this.instance_3.setTransform(822.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21));

	// verticalLine
	this.instance_4 = new lib.verticalLine("synched",0);
	this.instance_4.setTransform(548.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

	// verticalLine
	this.instance_5 = new lib.verticalLine_wave_a("synched",1);
	this.instance_5.setTransform(274.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

	// verticalLine
	this.instance_6 = new lib.verticalLine_wave_a("synched",1);
	this.instance_6.setTransform(1919.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

	// verticalLine
	this.instance_7 = new lib.verticalLine("synched",0);
	this.instance_7.setTransform(0,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine("synched",0);
	this.instance_8.setTransform(960,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine("synched",0);
	this.instance_9.setTransform(960,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine("synched",0);
	this.instance_10.setTransform(960,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine("synched",0);
	this.instance_11.setTransform(960,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine("synched",0);
	this.instance_12.setTransform(960,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine("synched",0);
	this.instance_13.setTransform(960,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


(lib.BigGrid_wave_b_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine("synched",0);
	this.instance.setTransform(1645.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// verticalLine
	this.instance_1 = new lib.verticalLine("synched",0);
	this.instance_1.setTransform(1371.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// verticalLine
	this.instance_2 = new lib.verticalLine("synched",0);
	this.instance_2.setTransform(1097,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	// verticalLine
	this.instance_3 = new lib.verticalLine("synched",0);
	this.instance_3.setTransform(822.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21));

	// verticalLine
	this.instance_4 = new lib.verticalLine("synched",0);
	this.instance_4.setTransform(548.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

	// verticalLine
	this.instance_5 = new lib.verticalLine("synched",0);
	this.instance_5.setTransform(274.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

	// verticalLine
	this.instance_6 = new lib.verticalLine("synched",0);
	this.instance_6.setTransform(1919.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

	// verticalLine
	this.instance_7 = new lib.verticalLine("synched",0);
	this.instance_7.setTransform(0,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine_wave("synched",0);
	this.instance_8.setTransform(960,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine("synched",0);
	this.instance_9.setTransform(960,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine_wave("synched",0);
	this.instance_10.setTransform(960,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine("synched",0);
	this.instance_11.setTransform(960,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine("synched",0);
	this.instance_12.setTransform(960,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine_wave("synched",0);
	this.instance_13.setTransform(960,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


(lib.BigGrid_wave_b_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine_wave_a("synched",0);
	this.instance.setTransform(1645.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// verticalLine
	this.instance_1 = new lib.verticalLine("synched",0);
	this.instance_1.setTransform(1371.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// verticalLine
	this.instance_2 = new lib.verticalLine_wave_a("synched",0);
	this.instance_2.setTransform(1097,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	// verticalLine
	this.instance_3 = new lib.verticalLine("synched",0);
	this.instance_3.setTransform(822.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21));

	// verticalLine
	this.instance_4 = new lib.verticalLine_wave_a("synched",0);
	this.instance_4.setTransform(548.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

	// verticalLine
	this.instance_5 = new lib.verticalLine("synched",0);
	this.instance_5.setTransform(274.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

	// verticalLine
	this.instance_6 = new lib.verticalLine("synched",0);
	this.instance_6.setTransform(1919.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

	// verticalLine
	this.instance_7 = new lib.verticalLine_wave_a("synched",0);
	this.instance_7.setTransform(0,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine("synched",0);
	this.instance_8.setTransform(960,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine("synched",0);
	this.instance_9.setTransform(960,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine("synched",0);
	this.instance_10.setTransform(960,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine("synched",0);
	this.instance_11.setTransform(960,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine("synched",0);
	this.instance_12.setTransform(960,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine("synched",0);
	this.instance_13.setTransform(960,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


(lib.BigGrid_wave_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// verticalLine
	this.instance = new lib.verticalLine("synched",0);
	this.instance.setTransform(1645.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// verticalLine
	this.instance_1 = new lib.verticalLine("synched",0);
	this.instance_1.setTransform(1371.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// verticalLine
	this.instance_2 = new lib.verticalLine("synched",0);
	this.instance_2.setTransform(1097,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	// verticalLine
	this.instance_3 = new lib.verticalLine("synched",0);
	this.instance_3.setTransform(822.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21));

	// verticalLine
	this.instance_4 = new lib.verticalLine("synched",0);
	this.instance_4.setTransform(548.5,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

	// verticalLine
	this.instance_5 = new lib.verticalLine("synched",0);
	this.instance_5.setTransform(274.3,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

	// verticalLine
	this.instance_6 = new lib.verticalLine("synched",0);
	this.instance_6.setTransform(1919.8,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

	// verticalLine
	this.instance_7 = new lib.verticalLine("synched",0);
	this.instance_7.setTransform(0,480,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21));

	// horizontalLine
	this.instance_8 = new lib.horizontalLine("synched",0);
	this.instance_8.setTransform(960,960,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21));

	// horizontalLine
	this.instance_9 = new lib.horizontalLine_wave("synched",1);
	this.instance_9.setTransform(960,720,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	// horizontalLine
	this.instance_10 = new lib.horizontalLine("synched",0);
	this.instance_10.setTransform(960,480,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

	// horizontalLine
	this.instance_11 = new lib.horizontalLine_wave("synched",1);
	this.instance_11.setTransform(960,240,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

	// horizontalLine
	this.instance_12 = new lib.horizontalLine_wave("synched",1);
	this.instance_12.setTransform(960,1200,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21));

	// horizontalLine
	this.instance_13 = new lib.horizontalLine("synched",0);
	this.instance_13.setTransform(960,0,1,1,0,0,0,1920,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:7.64,x:-89.4},48,cjs.Ease.get(-1)).wait(1));

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


(lib.Boxes_side_Anim_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Boxes_side("synched",0);
	this.instance.setTransform(0,-601,1,1,0,0,0,0,-601);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-600.9,scaleY:0.03},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605,-606,1210.1,611);


(lib.Boxes_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Boxes_side
	this.instance = new lib.Boxes_side_Anim_open("synched",0);
	this.instance.setTransform(300.6,600.1,1,1,0,-90,90,0,-300.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Boxes_side
	this.instance_1 = new lib.Boxes_side_Anim_open("synched",0);
	this.instance_1.setTransform(601.1,900.6,1,1,180,0,0,0,-300.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Boxes_side
	this.instance_2 = new lib.Boxes_side_Anim_open("synched",0);
	this.instance_2.setTransform(901.6,600.1,1,1,90,0,0,0,-300.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// Boxes_side
	this.instance_3 = new lib.Boxes_side_Anim_open("synched",0);
	this.instance_3.setTransform(601.1,300.6,1,1,0,0,0,0,-300.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,1212.1,1211.1);


(lib.Box_anim_contract_inverse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Box_Contract("synched",0);
	this.instance.setTransform(600.5,600.5,0.001,0.001);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:600,y:600},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599,599,3,3);


(lib.Box_anim_contract = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Box_Contract("synched",0);
	this.instance.setTransform(600,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0,scaleY:0,x:600.5,y:600.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,1210.1,1210);


(lib.JumpingCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.circle_centered("synched",0);
	this.instance.setTransform(50,50,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-368.4},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.ShrinkingBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 16
	this.instance = new lib.JumpingCircle("synched",0,false);
	this.instance.setTransform(960,540,1,1,-30,0,0,50,50);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(7).to({startPosition:3},0).to({regY:49.9,scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 15
	this.instance_1 = new lib.JumpingCircle("synched",0,false);
	this.instance_1.setTransform(960,540,1,1,-60,0,0,50,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).wait(8).to({startPosition:3},0).to({regX:49.9,scaleX:0.3,scaleY:0.3,y:540.1},3).to({_off:true},1).wait(4));

	// レイヤー 14
	this.instance_2 = new lib.JumpingCircle("synched",0,false);
	this.instance_2.setTransform(960,540,1,1,-90,0,0,50,50);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(9).to({startPosition:3},0).to({scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 13
	this.instance_3 = new lib.JumpingCircle("synched",0,false);
	this.instance_3.setTransform(960,540,1,1,-90,0,0,50,50);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).wait(10).to({startPosition:3},0).to({scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 12
	this.instance_4 = new lib.JumpingCircle("synched",0,false);
	this.instance_4.setTransform(960,540,1,1,-120,0,0,50,50);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).wait(11).to({startPosition:3},0).to({regX:50.1,scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 11
	this.instance_5 = new lib.JumpingCircle("synched",0,false);
	this.instance_5.setTransform(960,540,1,1,-150,0,0,50,50);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).wait(12).to({startPosition:3},0).to({regX:50.1,scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 10
	this.instance_6 = new lib.JumpingCircle("synched",0,false);
	this.instance_6.setTransform(960,540,1,1,0,-180,180,50,50);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).wait(13).to({startPosition:3},0).to({scaleX:0.3,scaleY:0.3,rotation:180,skewX:0,skewY:0},3).to({_off:true},1).wait(4));

	// レイヤー 9
	this.instance_7 = new lib.JumpingCircle("synched",0,false);
	this.instance_7.setTransform(960,540,1,1,150,0,0,50,50);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).wait(14).to({startPosition:3},0).to({regX:50.1,scaleX:0.3,scaleY:0.3,x:959.9},3).to({_off:true},1).wait(4));

	// レイヤー 8
	this.instance_8 = new lib.JumpingCircle("synched",0,false);
	this.instance_8.setTransform(960,540,1,1,120,0,0,50,50);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).wait(15).to({startPosition:3},0).to({regY:50.1,scaleX:0.3,scaleY:0.3,x:959.9},3).to({_off:true},1).wait(4));

	// レイヤー 7
	this.instance_9 = new lib.JumpingCircle("synched",0,false);
	this.instance_9.setTransform(960,540,1,1,90,0,0,50,50);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).wait(16).to({startPosition:3},0).to({scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 6
	this.instance_10 = new lib.JumpingCircle("synched",0,false);
	this.instance_10.setTransform(960,540,1,1,60,0,0,50,50);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).wait(17).to({startPosition:3},0).to({regY:50.1,scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 5
	this.instance_11 = new lib.JumpingCircle("synched",0,false);
	this.instance_11.setTransform(960,540,1,1,30,0,0,50,50);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25).to({_off:false},0).wait(18).to({startPosition:3},0).to({regY:50.1,scaleX:0.3,scaleY:0.3,y:540.1},3).to({_off:true},1).wait(4));

	// レイヤー 4
	this.instance_12 = new lib.JumpingCircle("synched",0,false);
	this.instance_12.setTransform(960,540,1,1,0,0,0,50,50);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).wait(19).to({startPosition:3},0).to({scaleX:0.3,scaleY:0.3},3).to({_off:true},1).wait(4));

	// レイヤー 3
	this.instance_13 = new lib.circle_centered("synched",0);
	this.instance_13.setTransform(1010,590,0.1,0.1,0,0,0,499.9,499.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({regX:500,regY:500,scaleX:0.6,scaleY:0.6,x:1260,y:840},3).wait(23).to({startPosition:0},0).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01,x:960,y:540},2).to({_off:true},1).wait(3));

	// レイヤー 2
	this.instance_14 = new lib.WhiteBox("synched",0);
	this.instance_14.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:0.54},2).wait(4).to({startPosition:0},0).to({scaleY:0.37},2).wait(4).to({startPosition:0},0).to({scaleX:0.21},3).to({_off:true},29).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.CircleOfBallsExtension_A_Yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ball_extend_yellow
	this.instance = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance.setTransform(-57.3,-138.5,1,1,-22.5);

	this.instance_1 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_1.setTransform(-57.3,-138.5,1,1,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},11).to({state:[]},6).wait(15));

	// Ball_extend_yellow
	this.instance_2 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_2.setTransform(-106,-106.1,1,1,-45);

	this.instance_3 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_3.setTransform(-106,-106.1,1,1,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},13).to({state:[]},6).wait(14));

	// Ball_extend_yellow
	this.instance_4 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_4.setTransform(-138.5,-57.3,1,1,-67.5);

	this.instance_5 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_5.setTransform(-138.5,-57.3,1,1,-67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_5}]},15).to({state:[]},6).wait(13));

	// Ball_extend_yellow
	this.instance_6 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_6.setTransform(-150,0,1,1,-90);

	this.instance_7 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_7.setTransform(-150,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},12).to({state:[{t:this.instance_7}]},17).to({state:[]},6).wait(12));

	// Ball_extend_yellow
	this.instance_8 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_8.setTransform(-138.5,57.4,1,1,-112.5);

	this.instance_9 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_9.setTransform(-138.5,57.4,1,1,-112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},11).to({state:[{t:this.instance_9}]},19).to({state:[]},6).wait(11));

	// Ball_extend_yellow
	this.instance_10 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_10.setTransform(-106,106.1,1,1,-135);

	this.instance_11 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_11.setTransform(-106,106.1,1,1,-135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},21).to({state:[]},6).wait(10));

	// Ball_extend_yellow
	this.instance_12 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_12.setTransform(-57.3,138.6,1,1,-157.5);

	this.instance_13 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_13.setTransform(-57.3,138.6,1,1,-157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_13}]},23).to({state:[]},6).wait(9));

	// Ball_extend_yellow
	this.instance_14 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_14.setTransform(0,150,1,1,180);

	this.instance_15 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_15.setTransform(0,150,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},8).to({state:[{t:this.instance_15}]},25).to({state:[]},6).wait(8));

	// Ball_extend_yellow
	this.instance_16 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_16.setTransform(57.4,138.6,1,1,157.5);

	this.instance_17 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_17.setTransform(57.4,138.6,1,1,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},7).to({state:[{t:this.instance_17}]},27).to({state:[]},6).wait(7));

	// Ball_extend_yellow
	this.instance_18 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_18.setTransform(106.1,106.1,1,1,135);

	this.instance_19 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_19.setTransform(106.1,106.1,1,1,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},6).to({state:[{t:this.instance_19}]},29).to({state:[]},6).wait(6));

	// Ball_extend_yellow
	this.instance_20 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_20.setTransform(150,0,1,1,90);

	this.instance_21 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_21.setTransform(150,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},5).to({state:[{t:this.instance_21}]},31).to({state:[]},6).wait(5));

	// Ball_extend_yellow
	this.instance_22 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_22.setTransform(138.6,57.5,1,1,112.5);

	this.instance_23 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_23.setTransform(138.6,57.5,1,1,112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_23}]},33).to({state:[]},6).wait(4));

	// Ball_extend_yellow
	this.instance_24 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_24.setTransform(138.7,-57.3,1,1,67.5);

	this.instance_25 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_25.setTransform(138.7,-57.3,1,1,67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},35).to({state:[]},6).wait(3));

	// Ball_extend_yellow
	this.instance_26 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_26.setTransform(106.1,-106,1,1,45);

	this.instance_27 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_27.setTransform(106.1,-106,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},37).to({state:[]},6).wait(2));

	// Ball_extend_yellow
	this.instance_28 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_28.setTransform(57.5,-138.5,1,1,22.5);

	this.instance_29 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_29.setTransform(57.5,-138.5,1,1,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},39).to({state:[]},6).wait(1));

	// Ball_extend_yellow
	this.instance_30 = new lib.Ball_extend_B_yellow("synched",0,false);
	this.instance_30.setTransform(0,-150);

	this.instance_31 = new lib.Ball_extend_inverse_B_yellow("synched",0,false);
	this.instance_31.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30}]}).to({state:[{t:this.instance_31}]},41).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,0.5,0.5);


(lib.Circle_anim_multiExtensions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Circle__anim_extend
	this.instance = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance.setTransform(-2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(30));

	// Circle__anim_extend
	this.instance_1 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_1.setTransform(-1.8,0,0.898,0.898);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(31));

	// Circle__anim_extend
	this.instance_2 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_2.setTransform(-1.8,0,0.898,0.898);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(32));

	// Circle__anim_extend
	this.instance_3 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_3.setTransform(-2,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(33));

	// Circle__anim_extend
	this.instance_4 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_4.setTransform(-1.8,0,0.898,0.898);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(35));

	// Circle__anim_extend
	this.instance_5 = new lib.Circle__anim_extend_blur("synched",0,false);
	this.instance_5.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.BigGridWave_sequential = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.BigGrid_wave_b_1("synched",0,false);
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_1 = new lib.BigGrid_wave_b_2("synched",0,false);
	this.instance_1.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_2 = new lib.BigGrid_wave_b_3("synched",0,false);
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_3 = new lib.BigGrid_wave_b_4("synched",0,false);
	this.instance_3.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_3}]},20).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-962.5,-602.5,3845,2405);


(lib.Boxes_contract_inverse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 15
	this.instance = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(16));

	// レイヤー 13
	this.instance_1 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_1.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(18));

	// レイヤー 11
	this.instance_2 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_2.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(20));

	// レイヤー 9
	this.instance_3 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_3.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(22));

	// レイヤー 7
	this.instance_4 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_4.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(24));

	// レイヤー 6
	this.instance_5 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_5.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(26));

	// レイヤー 3
	this.instance_6 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_6.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(28));

	// レイヤー 1
	this.instance_7 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_7.setTransform(600,600,1,1,0,0,0,600,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// レイヤー 14
	this.instance_8 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_8.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_8.alpha = 0.789;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).wait(17));

	// レイヤー 12
	this.instance_9 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_9.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_9.alpha = 0.789;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).wait(19));

	// レイヤー 10
	this.instance_10 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_10.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_10.alpha = 0.789;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).wait(21));

	// レイヤー 8
	this.instance_11 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_11.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_11.alpha = 0.789;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).wait(23));

	// レイヤー 5
	this.instance_12 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_12.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_12.alpha = 0.789;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).wait(25));

	// レイヤー 4
	this.instance_13 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_13.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_13.alpha = 0.789;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).wait(27));

	// レイヤー 2
	this.instance_14 = new lib.Box_anim_contract_inverse("synched",0,false);
	this.instance_14.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_14.alpha = 0.789;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599,599,3,3);


(lib.Boxes_contract = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 15
	this.instance = new lib.Box_anim_contract("synched",0,false);
	this.instance.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(16));

	// レイヤー 13
	this.instance_1 = new lib.Box_anim_contract("synched",0,false);
	this.instance_1.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(18));

	// レイヤー 11
	this.instance_2 = new lib.Box_anim_contract("synched",0,false);
	this.instance_2.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(20));

	// レイヤー 9
	this.instance_3 = new lib.Box_anim_contract("synched",0,false);
	this.instance_3.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(22));

	// レイヤー 7
	this.instance_4 = new lib.Box_anim_contract("synched",0,false);
	this.instance_4.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(24));

	// レイヤー 6
	this.instance_5 = new lib.Box_anim_contract("synched",0,false);
	this.instance_5.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(26));

	// レイヤー 3
	this.instance_6 = new lib.Box_anim_contract("synched",0,false);
	this.instance_6.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(28));

	// レイヤー 1
	this.instance_7 = new lib.Box_anim_contract("synched",0,false);
	this.instance_7.setTransform(600,600,1,1,0,0,0,600,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// レイヤー 14
	this.instance_8 = new lib.Box_anim_contract("synched",0,false);
	this.instance_8.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_8.alpha = 0.789;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).wait(17));

	// レイヤー 12
	this.instance_9 = new lib.Box_anim_contract("synched",0,false);
	this.instance_9.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_9.alpha = 0.789;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).wait(19));

	// レイヤー 10
	this.instance_10 = new lib.Box_anim_contract("synched",0,false);
	this.instance_10.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_10.alpha = 0.789;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).wait(21));

	// レイヤー 8
	this.instance_11 = new lib.Box_anim_contract("synched",0,false);
	this.instance_11.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_11.alpha = 0.789;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).wait(23));

	// レイヤー 5
	this.instance_12 = new lib.Box_anim_contract("synched",0,false);
	this.instance_12.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_12.alpha = 0.789;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).wait(25));

	// レイヤー 4
	this.instance_13 = new lib.Box_anim_contract("synched",0,false);
	this.instance_13.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_13.alpha = 0.789;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).wait(27));

	// レイヤー 2
	this.instance_14 = new lib.Box_anim_contract("synched",0,false);
	this.instance_14.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_14.alpha = 0.789;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,1210.1,1210);


(lib.GridMaking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.BigGrid_make_a("synched",0);
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).to({_off:true},15).wait(80).to({_off:false,x:1080,y:660,loop:false},0).to({_off:true},2).wait(286));

	// レイヤー 1
	this.instance_1 = new lib.BigGrid_make_a("synched",0);
	this.instance_1.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_2 = new lib.BigGrid_change("synched",0,false);
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_3 = new lib.BigGrid_wave("synched",0);
	this.instance_3.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_4 = new lib.BigGrid_leave_a("synched",0,false);
	this.instance_4.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_5 = new lib.BigGridWave_sequential("synched",0,false);
	this.instance_5.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_4,p:{startPosition:0}}]},24).to({state:[{t:this.instance_4,p:{startPosition:48}}]},48).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_5}]},80).to({state:[]},2).wait(286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3842.5,-2402.5,9605,7205);


(lib.Box_seq_animForPm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Boxes_contract("synched",0);
	this.instance.setTransform(0,-600,1,1,0,0,0,600,600);

	this.instance_1 = new lib.Boxes_open("synched",0,false);
	this.instance_1.setTransform(0,-600,1,1,0,0,0,600,600);

	this.instance_2 = new lib.Boxes_contract_inverse("synched",0);
	this.instance_2.setTransform(0,-600,1,1,-90,0,0,600,600);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},74).to({state:[{t:this.instance_2}]},16).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},4).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,startPosition:10},10).to({scaleX:1,scaleY:1,startPosition:14},4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605,-1205,1210.1,1210);


// stage content:



(lib.CjsAbstract = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nobuteru.png
	this.instance = new lib.NobuteruScene("synched",0);
	this.instance.setTransform(945.7,553.1,1,1,0,0,0,867.1,527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208));

	// Circle_anim_multiExtensions
	this.instance_1 = new lib.Circle_anim_multiExtensions("synched",0);
	this.instance_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(208));

	// CircleOfBallsExtension_A_Yellow
	this.instance_2 = new lib.CircleOfBallsExtension_A_Yellow("synched",0);
	this.instance_2.setTransform(960,540,2.203,2.203);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(208));

	// Box_seq_animForPm
	this.instance_3 = new lib.Box_seq_animForPm("synched",0);
	this.instance_3.setTransform(960.1,540.9,1.597,0.899,0,0,0,1.1,-599.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(208));

	// GridMaking
	this.instance_4 = new lib.GridMaking("synched",0);
	this.instance_4.setTransform(902.3,1138.5,1,1,0,0,0,902.3,1138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(208));

	// ShrinkingBox
	this.instance_5 = new lib.ShrinkingBox("synched",0);
	this.instance_5.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208));

	// PileUpTiles
	this.instance_6 = new lib.PileUpTiles("synched",0,false);
	this.instance_6.setTransform(2056.3,1884.4,1,1,0,0,0,485.1,1143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(208));

	// LineAnim_forPM
	this.instance_7 = new lib.LineAnim_forPM("synched",0);
	this.instance_7.setTransform(0,1080,1,1,0,0,0,0,1080);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2882.5,-1862.5,9605,7205);

})(cjsLib_abs = cjsLib_abs||{}, cjsImages_abs = cjsImages_abs||{}, createjs = createjs||{}, ss = ss||{});
var cjsLib_abs, cjsImages_abs, createjs, ss;