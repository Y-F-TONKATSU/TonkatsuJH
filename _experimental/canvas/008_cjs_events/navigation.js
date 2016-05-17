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
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6,1,1).p("AAAjlIAAHL");
	this.shape.setTransform(0,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,6,52.1);


(lib.TextShare_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AGggBIBsgHACKgcIgJAIAgRg1QgPAVAWA8An9hUIgOBiAkOgBIAABW");
	this.shape.setTransform(60.8,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AFqASICdgcAIMgnIiyAWAFzADIC3gVADfgoQgvAXg6gFIgJAIAgviOQgFBzAWA8QAWCHAQArAlFisQAiA7ABB0IAUCOAoTjSQANAUABAiQABAigWAfQgWAfALAWIAGBT");
	this.shape_1.setTransform(62.8,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ACTAcQA6AGAvgYIgCAmAIjgGIixATAGaBqICdgfAGQA3IC2gWACTAcIAAAjACTAcIgKAIAgEjNQgUDlAWA+QAUCGA/BoAkGA3QAiBBADgjQAAA9AFB/AkJizQAgBqADCMQABAAgBABIAFARAn8lDQASC5ABAiQACAigWAfQgWAgAKATIAGBVIhCBmAkGA3IAPDQAkzi9QAsCAABB0");
	this.shape_2.setTransform(60,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AEKAIIANCTAG8AXICYAIAEKAIQAngSABgKAIxghIixAVQDpABitAiQCnA4jKAtICdgfAChAaIgFCgAChAaIgKAIABmAEQgSgHBNAdAgZA2IAjAeQAWCGA/BnAgZA2QANDqA9AmAj3A1QAhBAAEgjQgBA+AkBmAi5icQgiBRAECMQAAAAAAABIAFAQAntlFQASC5gRAbQgRAbgLAjQgLAkAYAZIAHBVIAhCJQg1gghLA8Aj3A1IAPDQAEKAIQgvAYg6gGAgZA2QgthGBPi/QgTDkAUA/Akki/QArCAACB0");
	this.shape_3.setTransform(58.5,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("ADuAQIA1EBAFzAeIDLADAI5g9IjGAHQDaAzjaAhQDaA6jaAtID9AhADuAQQAngSAMgzACFAiIAzESACFAiIgJAIABfhbQgmBdBMAgAANBRQgICQBxA2Ag0A+IBBATAg0A+QgkDNBtBCAkTA9QAiBAADgjQgBA9A9BIAiPhoQhnAlADCLQAAABAAAAIAFARAm+lMQg5DIgRAaQgQAbgMAkQgLAjAZAaIBgAsQA2CFhQAyQhUglhLAUAkTA9IgKCsADuAQQgvAXg6gFAlyifQBeBoABB0Ag0A+QguhHBRi+QgUDkAyA0");
	this.shape_4.setTransform(61.3,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("ADYANIAcDFADYANQAngSgIgyAFdAYQCYA6iYBhIEHgDAJphgIkMgIQCBAuiBBSIDzAFABvAfIgJAIACvhdQghgCgnALQhEBUBMAfIAVDDAhKA7QgthGBQhbQgUCABLAhAilhqQhnAkBnBuQhgBsA9BJAhKA7IBaAAQgfCkBMg5AhKA7QgjDNA8gIAlWArQg1CXBYAlAm2j/QhXB4gnAJQgnAKgLAjQgMAkBGA8QCOhYguCFQB2CqiQAMQhUglgehaAlWArQBQBRBhhUADYANQgvAYg6gGAmIihQBeBngsBl");
	this.shape_5.setTransform(63.5,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("AGGgHICZAFAIkiLIieACIAACCIAACaICtgEAEBgRIA1CbAEBgRQAngUAggpQhIhFhwAfIAIB0IgJAHAghAbIAhihIA5CgIAtBrAh8iLIAACSIAACNAghAbIBagBAghAbIgKB5ACYAAIALCPAmNhIQgUhZg4AIQg4AIgVAZQgjAqBGA/IBgAqQBlBCiJA5QhKAXgehbAktiLIAACWIgFCEAktALICxgEAEBgRQgvAVg6gE");
	this.shape_6.setTransform(59.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TextMenu_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AE9BQQAMhiBXASQBYAPBsA8AjxBgIAAkIAmlgiIhLDLIhzi3AAWgSICgg7");
	this.shape.setTransform(64.3,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AG+hBQANgEAUACABzhRIBAgYAlmALIgtBfIhLgjAiUAhIAKhe");
	this.shape_1.setTransform(55,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAohRIA8BdICgg6IBQB2AGLCYQAMiMBXASQBYARgWBjAkliOIh9FXIiRlXAioDtIAFhuIAAkHIgKhk");
	this.shape_2.setTransform(56.5,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AGcAUQAPBrBcACQA5AAALhoAA5hSIBQhCICgENIA8gzAiSgFIAACDIAjA7AiSgFIAAiFIAeg8Ajsg7IgohVIh9FXIiRlXIgoBnAiSgFIA3AA");
	this.shape_3.setTransform(54.8,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AGhhHIAKBdQAPBqBcADQA5AAALhpIgFhmACYAlIAAi3ICgEMIAAiyAiDgEIAAiEIBug8AiDgEIAACDIBzBGAjJALIg8iZIh9DfIiRjfIhGDIAiDgEIB9ge");
	this.shape_4.setTransform(53.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AF8iNIAKCuQAOBqBcADQA6AAALhpIAFitABzCKIAAkSICgENIAAkDAipAFIAACFICuAAAipAFIAAiDIC9AAAkrB6IAAj+IiHDgIiHjgIAAEFAipAFIClAA");
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
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AB7AbIADAoAE3gIIAHAnAGHgFIAFATAmLhOIADB/AhUBPQADAAACgBQAugLgTAAQgRAAgKAL");
	this.shape_1.setTransform(40.6,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AB2AiIAMBaAFBAAIACBZAGRAAIgBBHAmQh+IAMDpAgjB/QAIgDgVAAQgjAAgjAA");
	this.shape_2.setTransform(40.2,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AE8g7IAHCVAB2gcIANCaAGHg0IAKB8AmQh9IANDpAgJBiQgSAcgUAAQgkAAgZgkIgKgOAmHgXIAugE");
	this.shape_3.setTransform(40.1,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AB2hkIANDkAGMhtIAFC4AEyh/IARDbAmQh6IANDoAmHgVICXgEAAYAtQgzBTgUAAQgkAAgZgkQgZgiAAgy");
	this.shape_4.setTransform(40.1,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("ABjhgIAMDkAAOgLQACALAAANQAAAxgXAjQgZAjgjAAQgjAAgZgjQgZgjAAgxABvhgIAaAwAD6g3IAhhMAF5hpIAEC4AEfh6IARDbAmjh2IANDpAmagQICXgEAj9hEIgBA0AGBgUIAVgEAGBBlIAjgKAFxh6IAdgG");
	this.shape_5.setTransform(42,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("ABNhgIANDlAglhRQAEAFAFAGQAZAjAAAwQAAAygZAiQgZAkgjAAQgjAAgZgkQgZgiAAgyQAAgwAZgjQADgEAEgFABahgIA9BvADfAEIAmiHAFkhpIAEC5AEKh6IAQDbAm4h1IAMDoAkRh6IgDCXAmwgQICXgEAFch6IA2gKAFsgUIBAgJAFsBmIBNgX");
	this.shape_6.setTransform(44.2,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("ABDheIBrDEIBAjnADzh4IARDbAFNhnIAEC5ACuBmIADAGAgaAPQAAAygZAiQgZAkgjAAQgjAAgZgkQgZgiAAgyQAAgwAZgjQAZgjAjAAQAjAAAZAjQAZAjAAAwgAA3heIAMDlAnPh0IAMDpAkoh4IARDxAnHgOICXgEAFVgSIBbgOAFVBnIB7gjAFFh4IBOgO");
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
	this.shape_15.graphics.f("#020202").s().p("ACuIcQg9g9AAhXQAAgsAQgmQAPgkAegdQA9g+BXABQBWgBA9A+QA+A9AABWQAABXg+A9Qg9A+hWgBQhXABg9g+gAn2DQQg9g9AAhXQAAhUA9g9QA9g+BXAAQBWAAA9A+QATASANAUIgGAEIAGgEIABADQAdAtAAA7QAAAygUApIgBABQgPAegaAaQg9A+hWgBQhXABg9g+gAivgvIAAAAgABgiGQgagagSgeIgCgCIAAgBQgig8AAhKQAAhxBQhRQBRhPBxAAQByAABQBPQBQBRAABxQAAByhQBPQhQBRhyAAQhxAAhRhRg");
	this.shape_15.setTransform(60.3,47.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(15.8,1,1).p("AA7jtIjGB9IgFAEAiBBXIESCX");
	this.shape_16.setTransform(56.7,53.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020202").s().p("ACcIuQg9g9AAhXQAAgsAQgmQAPgkAegeQA+g9BWAAQBXAAA9A9QA9A9AABXQAABXg9A9Qg9A9hXAAQhWAAg+g9gAoIDhQg9g8AAhXQAAhVA9g9QA+g9BWAAQBXAAA9A9QASATANAUIACADQAcAtAAA7QAAAxgUAqIAAABQgPAdgaAaQg9A+hXAAQhWAAg+g+gAjGgaIAFgDgAA2hbQgdgegUghIAAAAIgDgEIAAgBQgkhDAAhTQAAiABYhbQBbhaCAAAQCAAABaBaQBbBbAACAQAAB/hbBbQhaBbiAAAQiAAAhbhbg");
	this.shape_17.setTransform(62.1,45.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020202").s().p("AC1IVQg9g9AAhXQAAgsAQgmQAPgkAegeQA+g9BWAAQBXAAA9A9QA9A9AABXQAABXg9A9Qg9A9hXAAQhWAAg+g9gAnvDIQg9g8AAhXQAAhVA9g9QA+g9BWAAQBXAAA9A9QASATANAUIACADQAcAvAAA5QAAAxgUAqIAAABQgPAdgaAaQg9A+hXAAQhWAAg+g+gAitgzIAFgDgAByiXQgYgZgRgcIAAAAIgCgDIAAAAQggg5AAhGQAAhrBLhNQBMhLBsAAQBrAABMBLQBMBNAABrQAABrhMBMQhMBMhrAAQhsAAhMhMg");
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
	this.shape_4.graphics.f().s("#000000").ss(12,1,1).p("ArNC5IUcgKAuUiGQNohkPBBk");
	this.shape_4.setTransform(71.6,36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(12,1,1).p("Ag7F/ICAgLAqblJQKHhmKEBcAuXAyIcvhY");
	this.shape_5.setTransform(72.8,55.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(12,1,1).p("AkNGOIHKgLArjA3IXHg6AojliQH7hSHuBI");
	this.shape_6.setTransform(74.8,55.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(12,1,1).p("AnSlaIOjAAAprFbITXgWAnogPIPwAA");
	this.shape_7.setTransform(69.7,55.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(12,1,1).p("AnilaIOkAAAn4gPIPxAAAskFbIZJgW");
	this.shape_8.setTransform(71.3,55.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(12,1,1).p("Am1lzIOkAAAnLgoIPxAAAurF0IdXgM");
	this.shape_9.setTransform(66.8,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(12,1,1).p("AnXlkIOjAAAqOFlIUdggAntgZIPwAA");
	this.shape_10.setTransform(70.2,56.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(12,1,1).p("AnygKIPwAAAn9FWIP7gMAnclVIOjAA");
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
	this.shape_3.graphics.f().s("#000000").ss(7,1,1).p("AAdgqQAEBUg7ABAgbArIgCAA");
	this.shape_3.setTransform(91.2,108.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(8,1,1).p("AjuHtQg6AuB8ATIjvAAAGcIzIjeAAIgBAAAixoyIFgAAAC8IzIlogF");
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
	this.shape_10.graphics.f().s("#000000").ss(8,1,1).p("AhvIuIl+gDAOUHLIjjBMAJHIrIlOAIIlogFAhrDGQjADnC8CBArWokIMZgOILjAmAp9IoIkWgy");
	this.shape_10.setTransform(63.3,56.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(7,1,1).p("AhSjeQFLC/lLD+");
	this.shape_11.setTransform(96.5,90.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(8,1,1).p("AOwDgIkvCSAh8IuIjtAAIiggmAJjH5IihA1IjWAFIlogFAtlokIOcgOIOXAcAhGA/QmxE+F7CxAqPHOIk+h9");
	this.shape_12.setTransform(64.5,56.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(7,1,1).p("AjdinQDoj8CKEJQCTDwiTDN");
	this.shape_13.setTransform(73.2,83.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(8,1,1).p("AOmh8Il1DBAikIuIjtAAIhziPAHWGGIg8CoIjWAFIlogFAuNmJIOcipINaDBAivBnQidEoCoCfAqjC2IkCiI");
	this.shape_14.setTransform(68.5,56.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(7,1,1).p("Ai5jlIFzANIAAG+");
	this.shape_15.setTransform(69.5,89.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(8,1,1).p("AMVhUIlgAjAjVIuIjtAAIhLnUAGgB4Ig3G2IjWAFIlogFAstkRIMNkhINOE+AjgBnIALHHAnzg5Ij4gP");
	this.shape_16.setTransform(73.4,56.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(8,1,1).p("AioIuIjtAAIAAqfIkbAAIK7nBIKmHFIkbgEIAAKfIjWAFgAizBnIALHH");
	this.shape_17.setTransform(68.9,56.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_17},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.1,-4,21.1,120.7);


(lib.OuterCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("APoAAQAAGekmEkQkkEmmeAAQmdAAklkmQklkkAAmeQAAmdElklQElklGdAAQGeAAEkElQEmElAAGdg");
	this.shape.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,208,208);


(lib.InnerCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArCLDQklklAAmeQAAmdElklQElklGdAAQGeAAElElQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");
	this.shape.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Line_in_out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Line();
	this.instance.setTransform(0,67.8,1,0.099,0,0,0,0,22.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23,scaleY:1,y:23,alpha:1},3,cjs.Ease.get(1)).to({regY:22.9,scaleY:0.2,rotation:-2,x:0.2,y:-13,alpha:0},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,65.2,6,5.1);


(lib.ButtonBase_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Line_in_out
	this.instance = new lib.Line_in_out("synched",0,false);
	this.instance.setTransform(100.6,102.1,1,1,-30,0,0,4,171.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_1 = new lib.Line_in_out("synched",0,false);
	this.instance_1.setTransform(100.7,102.1,1,1,-60,0,0,4,171.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_2 = new lib.Line_in_out("synched",0,false);
	this.instance_2.setTransform(100.7,102,1,1,-90,0,0,4,171.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_3 = new lib.Line_in_out("synched",0,false);
	this.instance_3.setTransform(100.7,102.1,1,1,-120,0,0,4,171.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_4 = new lib.Line_in_out("synched",0,false);
	this.instance_4.setTransform(100.7,102.1,1,1,-150,0,0,4,171.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_5 = new lib.Line_in_out("synched",0,false);
	this.instance_5.setTransform(100.7,102.1,1,1,180,0,0,4,171);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_6 = new lib.Line_in_out("synched",0,false);
	this.instance_6.setTransform(100.7,102,1,1,150,0,0,4,171.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_7 = new lib.Line_in_out("synched",0,false);
	this.instance_7.setTransform(100.7,102,1,1,120,0,0,4,171.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_8 = new lib.Line_in_out("synched",0,false);
	this.instance_8.setTransform(100.7,102,1,1,90,0,0,4,171);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_9 = new lib.Line_in_out("synched",0,false);
	this.instance_9.setTransform(100.6,102,1,1,60,0,0,4,171.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_10 = new lib.Line_in_out("synched",0,false);
	this.instance_10.setTransform(100.6,102.1,1,1,30,0,0,4,171.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// Line_in_out
	this.instance_11 = new lib.Line_in_out("synched",0,false);
	this.instance_11.setTransform(100.7,102.1,1,1,0,0,0,4,171.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({_off:true},6).wait(1));

	// レイヤー 1
	this.instance_12 = new lib.OuterCircle();
	this.instance_12.setTransform(100,100,2.141,2.141,0,0,0,100,100);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,alpha:1},11,cjs.Ease.get(1)).wait(2));

	// レイヤー 3
	this.instance_13 = new lib.InnerCircle();
	this.instance_13.setTransform(100,100,0.12,0.12,0,0,0,100,100);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,alpha:1},11,cjs.Ease.get(0.99)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-122.6,445.2,445.2);


(lib.ButtonShare_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,stop:12});

	// TextShare
	this.instance = new lib.TextShare_in_a("synched",0,false);
	this.instance.setTransform(103.4,149.5,1,1,0,0,0,57,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// IconShare
	this.instance_1 = new lib.IconShare_in_a("synched",0,false);
	this.instance_1.setTransform(101.8,77.1,1,1,0,0,0,68.9,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// ButtonBase
	this.instance_2 = new lib.ButtonBase_in_a("synched",0,false);
	this.instance_2.setTransform(100,100,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-122.6,445.2,445.2);


(lib.ButtonMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"stop":12});

	// TextMenu
	this.instance = new lib.TextMenu_in_a("synched",0,false);
	this.instance.setTransform(104.5,142.7,1,1,0,0,0,57,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// IconHome
	this.instance_1 = new lib.IconMenu_in_a("synched",0,false);
	this.instance_1.setTransform(101.8,77.1,1,1,0,0,0,68.9,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// ButtonBase
	this.instance_2 = new lib.ButtonBase_in_a("synched",0,false);
	this.instance_2.setTransform(100,100,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-122.6,445.2,445.2);


(lib.ButtonHome_in_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"stop":12});

	// TextHome_in
	this.instance = new lib.TextHome_in("synched",0,false);
	this.instance.setTransform(105.5,158,1,1,0,0,0,46.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// IconHome
	this.instance_1 = new lib.IconHome_in("synched",0,false);
	this.instance_1.setTransform(101.8,77.1,1,1,0,0,0,68.9,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// ButtonBase
	this.instance_2 = new lib.ButtonBase_in_a("synched",0,false);
	this.instance_2.setTransform(100,100,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-122.6,445.2,445.2);


// stage content:
(lib.navigation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ButtonHome
	this.homeButton = new lib.ButtonHome_in_a();
	this.homeButton.setTransform(151.4,400,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.homeButton).wait(2));

	// ButtonMenu
	this.menuButton = new lib.ButtonMenu();
	this.menuButton.setTransform(157.5,618.1,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(2));

	// ButtonShare
	this.shareButton = new lib.ButtonShare_in_a();
	this.shareButton.setTransform(155.2,836.2,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.shareButton).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(888.8,777.4,451.3,881.4);

})(cjsNavigationLib = cjsNavigationLib||{}, cjsNavigationImages = cjsNavigationImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsNavigationLib, cjsNavigationImages, createjs, ss;