(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/experimental_back.jpg", id:"experimental_back"},
		{src:"images/nobuteru_butt.png", id:"nobuteru_butt"}
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



(lib.experimental_back = function() {
	this.initialize(img.experimental_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,1800);


(lib.nobuteru_butt = function() {
	this.initialize(img.nobuteru_butt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,437);


(lib.トゥイーン4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.experimental_back();
	this.instance.setTransform(-1384.1,-900,1.922,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1384.1,-900,2768.3,1800);


(lib.トゥイーン3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.experimental_back();
	this.instance.setTransform(-1384.1,-900,1.922,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1384.1,-900,2768.3,1800);


(lib.トゥイーン2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru_butt();
	this.instance.setTransform(-196,-218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-218.5,392,437);


(lib.トゥイーン1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru_butt();
	this.instance.setTransform(-196,-218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-218.5,392,437);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B60000").ss(1,1,1).p("Aw4w4MAhxAAAMAAAAhxMghxAAAg");
	this.shape.setTransform(108.2,108.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Aw4Q5MAAAghxMAhxAAAMAAAAhxg");
	this.shape_1.setTransform(108.2,108.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,218.3,218.3);


(lib.シンボル1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.トゥイーン1("synched",0);
	this.instance.setTransform(196,218.5);

	this.instance_1 = new lib.トゥイーン2("synched",0);
	this.instance_1.setTransform(196,738.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:738.7},4).to({_off:false,y:218.5},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true,y:218.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392,437);


(lib.fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Scene001_start:0,Scene001_stop:47,Scene002_start:62,Scene002_stop:100});

	// レイヤー 1
	this.instance = new lib.シンボル1();
	this.instance.setTransform(470.7,558.9,1,1,0,0,0,196,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1520.3},23).to({x:470.7},24).wait(15).to({x:-293.5,y:326.8},0).to({x:1683,y:1255.1},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274.7,340.4,392,437);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Scene001_start":0,"Scene001_stop":47,"Scene002_start":62,"Scene002_stop":100});

	// レイヤー 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgtGQQgTgTAAgcQAAgcATgSQASgUAbAAQAcAAASAUQATASAAAcQAAAcgTATQgSATgcAAQgbAAgSgTgAgRCXIAAguQAAhogYiOQgXiSAAgzQAAgmATgXQASgTAbAAQAgAAAOAXQATAdAAAcQAAAzgXCSQgYCOAABoIAAAug");
	this.shape.setTransform(1256.3,264.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgtGQQgTgTAAgcQAAgcATgSQASgUAbAAQAcAAASAUQATASAAAcQAAAcgTATQgSATgcAAQgbAAgSgTgAgRCXIAAguQAAhogYiOQgXiSAAgzQAAgmATgXQASgTAbAAQAgAAAOAXQATAdAAAcQAAAzgXCSQgYCOAABoIAAAug");
	this.shape_1.setTransform(1136.3,264.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgtGQQgTgTAAgcQAAgcATgSQASgUAbAAQAcAAASAUQATASAAAcQAAAcgTATQgSATgcAAQgbAAgSgTgAgRCXIAAguQAAhogYiOQgXiSAAgzQAAgmATgXQASgTAbAAQAgAAAOAXQATAdAAAcQAAAzgXCSQgYCOAABoIAAAug");
	this.shape_2.setTransform(1016.3,264.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiwGjQgrgqABgqQAAgmAbgcQAhghBCAAQBPAABABCQAqAqAOBLQBagTBBhBQBGhHAAhiQAAhshBhAQhLhLiIAAQiUAAibCZQg9A9glA9QgKATgXAAQgTAAAAgqQAAgmAlghQAigcGVnAQAOgJgXgFQhvAThwAlQghATgTAAQgJAAgmgcQgugmgFguQAAgYATATQAcAqBBAAQA+AAANgFQBegOBXgSQAvgKAXgTQAKgOAOAAQAXAAAdAYQAXATAAAOQAAAJgqAOQg0AXkNEeQgOAYAbgOQBjgmBlAAQCbAABdBeQBCBAAABrQAAB/hLBLQhxBxjNAAQiCAAgzg0gAi6FPQAAAcAcAcQAqAqCUAAQgEhUgogrQgmglgzAAQhVAAAABCg");
	this.shape_3.setTransform(907.1,265.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ai2H/QA4gqAqgvQBlh1AFikQgkA4g9AAQgzAAgqgqQghghAAhCQAAg/AvgvQAlgmA5AAQAqAAAfATIAAibQj3Amh6AlQgvAOgSAKQgdAOgXgTQg0gmgXhGQAAgXATASQAXArBCAAQBBAACIgYQBsgTCQgOIAAh+QAAhshcgJQgTgKATgJQBPgJAtAgQAYAOATAdQASAXgXAJQgOAOAACSQDTgOBGgKQAcgEBCgOQAXgFAYATQAzAqAFAOQAJAcglgJQhegYiRAAQhZAAh6AKIAADJQAOAtAABUQAAEokACDIgIABQgMAAALgPgAiHgfQgYAfAAAvQAABLAmAhQAOAOAgAAQAhAAATgTQAogqAAhLQAAhlhNAAQg0AAgXAlg");
	this.shape_4.setTransform(801.2,264.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Am1HNQG3iaC3oCQAJgcgYAAQhnAJmoA0QgTAEgXATQgFAOgOAAQgOAAgvgqQglghgFglQAAgYASATQAUAhA8AAQAlAAIHgqQA5gKAOghQA3AdAmAlQAYAYAAAOQAAAOgiAAQggAAgFASQjOIHnXCIQgdAAATgYgAFBkaQgighAAgzQAAg0AighQAgghA0AAQAzAAAiAhQAgAhAAA0QAAAzggAhQgiAhgzAAQg0AAggghgAFYmwQgcAcAAAmQAAAlAcAcQAYAYAlAAQAmAAAXgYQAcgcAAglQAAgmgcgcQgXgYgmAAQglAAgYAYg");
	this.shape_5.setTransform(685.1,259.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ak+E+QHAi3CImRQAJgcgugXQgTgKAcgEQAqAEAcATQBCAqAAAcQAAAKgYAAQgXAAgOAgQi8GNmxCNQgdAAATgYgAj4hYQgSgzgOgTQgcgqg9gqQgKgKAOgEQAmAJAvAcQAlAXAYAYQAlAlgFAhQgEAmgYAAQgXAAgKgYgAgpixQgchBgYgdQgXgXg0ghQgOgOATAAQA4AKA4AlQBFAvAAA9QAAAhgaAAQgYAAgJgYg");
	this.shape_6.setTransform(583.2,282.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AjDG6QgOghASg9QAOifgEosQAAgvgOgXQgOgTg0gFQgTgJATgKQAhgJA4AOQAmAOAcATQAcATAAASQAAAOgTAFQgTAFAAATQgOB5AFCIQA4AFBcAYQBxAgBBAyQBGA4AAAmQAAAqggAAQgTAAghgqQheh4jahCIAAIGQAAA0gXAAQgdAAgSgqg");
	this.shape_7.setTransform(505.3,264.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Am0FVQHFjvDFl5QAEgTgXAAQleAvgSAcQgKAOgOAAQgJAAghgcQhGg9AJghQAAgXATASQAXArAvAAQBxAAEzgmIAqghQAmAYAgAcQATAOAAATQAAAOgqAAQhZCMhiB2QCfAxBiBjQBQBPAAAvQAAAqglAAQgTAAgcgvQgrhGg4g4QhBhChohBQjoDqkeB1IgMABQgaAAAYgUg");
	this.shape_8.setTransform(416.9,264.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AADFQQiPh1AAjBQAAiwC1iRQAXgTgXAAQiQAciDAcQg4AKg5AcQgqATgOgFQgXgFgYgSQgzgmgFgqQAJghAKAcQAXAqBLgEQAmAABZgTQD0gqDxgvQBLgOAcgYQAdgXAgAXQA0AmAFAFQAXAXghAJQkigJh/B/Qh4B5AAB4QAACNBeBeQBgBiB/AFQAvAAAOATQATAXAAATQAAAXgmAAQiDAAh6higAFCgvQghhLhZg4QgJgOAOAFQBPAOA9AvQAcAXAKAhQAJAlgcAKQgHACgFAAQgTAAgLgagAG8h6QghhLhZg4QgKgOAOAFQBQAOA9AvQAcAXAKAhQAJAlgcAKQgHACgFAAQgTAAgLgag");
	this.shape_9.setTransform(314.7,265.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhHGZQipAAhUhiQg0g9gOhZQAKgTAJAXQAXA9AvAvQBQBQCbAAIDjAAQBLAAArgJQAqgKAEAAQAdAAAcAmQAcAlg9AAImkAAgAi8ihQBGg4BegqQhxgJg9gdQhPglgmg9QAAgXATASQBGBQDYAAQCZAAAqgOQATgFASATQAOAOAOATQAYAhgqAAIhjAAQg4AAgvAOQhcAchwA9QgLAFgEAAQgIAAAJgPg");
	this.shape_10.setTransform(211.7,264.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhHGZQipAAhUhiQg0g9gOhZQAKgTAJAXQAXA9AvAvQBQBQCbAAIDjAAQBLAAArgJQAqgKAEAAQAdAAAcAmQAcAlg9AAImkAAgAi8ihQBGg4BegqQhxgJg9gdQhPglgmg9QAAgXATASQBGBQDYAAQCZAAAqgOQATgFASATQAOAOAOATQAYAhgqAAIhjAAQg4AAgvAOQhcAchwA9QgLAFgEAAQgIAAAJgPg");
	this.shape_11.setTransform(121.2,264.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},47).to({state:[]},1).wait(53));

	// レイヤー 2
	this.instance = new lib.シンボル2();
	this.instance.setTransform(1466.2,929.4,1,1,0,0,0,108.2,108.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B60000").ss(1,1,1).p("EA1JAAAQAARWvkMRQvlMR2AAAQ1/AAvlsRQvjsRAAxWQAAxVPjsRQPlsRV/AAQWAAAPlMRQPkMRAARVg");
	this.shape_12.setTransform(696.2,500.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("EgljAdnQvlsRAAxWQAAxVPlsRQPksRV/AAQWAAAPkMRQPlMRAARVQAARWvlMRQvkMR2AAAQ1/AAvksRg");
	this.shape_13.setTransform(696.2,500.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.shape_13},{t:this.shape_12}]},43).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:312.5},19).to({_off:true},43).wait(39));

	// レイヤー 1
	this.instance_1 = new lib.トゥイーン3("synched",0);
	this.instance_1.setTransform(720,900);

	this.instance_2 = new lib.トゥイーン4("synched",0);
	this.instance_2.setTransform(720,375.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:375.9},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-664.1,0,2768.3,1800);


// stage content:



(lib.test = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.foreground = new lib.fg();
	this.foreground.setTransform(470.7,558.9,1,1,0,0,0,470.7,558.9);

	this.timeline.addTween(cjs.Tween.get(this.foreground).wait(20));

	// レイヤー 4
	this.background = new lib.bg();
	this.background.setTransform(787.4,900,1,1,0,0,0,787.4,900);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295.9,600,2768.3,1800);

})(cjsLib = cjsLib||{}, cjsImages = cjsImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsLib, cjsImages, createjs, ss;