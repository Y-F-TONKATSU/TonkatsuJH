(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 768,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ex000020.jpg", id:"ex000020"},
		{src:"images/widget_crouton.png", id:"widget_crouton"}
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



(lib.ex000020 = function() {
	this.initialize(img.ex000020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.widget_crouton = function() {
	this.initialize(img.widget_crouton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.WidgetImageEx000020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ex000020();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.WidgetImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.widget_crouton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Text_Ex000020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBtQgDgEAAgFIABgFQACgEACgBIACgBIAIgDQAWgLAUgPQATgQAPgSIgRgPIgMgLIgJgGIgHgFQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgGAEgEQAEgDAFAAIAEABIAEADIAOAOIAPALIAKAIQAJgKAHgQQAGgPAGgRQAGgQADgPQgJABgQAAIgoACIgJAAQgIARgMAQQgMARgRAOQgJAKgGADQgFABgFAAQgEAAgDgBQgEgDAAgFIABgFIADgDIACgCIAGgFQAcgVANgTQAOgUgBgPQAAgFADgEQADgDAFgBQAFABAEADQACADAAAGIAsgBIAdgDQACgDADgBIAFgBQAHAAAEADQADAEAAAHIgCAOIgGAVIgJAZIgJAYQgJATgLARQgMARgOAOQgPAPgRAOIgUAMQgLAHgIADQgJAEgEABQgGAAgDgEg");
	this.shape.setTransform(274.6,70.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaANIgXAAIgXgBIgTAAIgJgBQgEAAgCgEQgDgDAAgEQAAgFADgDQADgDAHAAIAEAAIAGAAIAUABIAbAAICIgBQAHAAADACQADAEAAAFQAAADgCADQgDAEgEABIgLAAIgXABIggAAIghABIgcAAg");
	this.shape_1.setTransform(248.7,69.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRBrQgDgDAAgHIAAgFIACgEIACi8QAAgEADgDQAEgDAEAAQAGAAADADQAEADAAAEIgDC1IABABQAmgKAcgaQAfgZAXgnQABgDAEgCQADgCADAAQAFAAADAEQAFAEAAAFQgBAEgFAIIgNATIgTAXQgKALgLAJQgQAPgTALQgUALgUAHIgOADIgKACQgHgBgCgDg");
	this.shape_2.setTransform(224.2,70.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIBKQgIAAgEgCQgDgDAAgFQAAgFACgDQADgCAEgBIAPAAIAbgBIAkAAIANAAIAEgSIAEgTIAFgVIAHggIACgLIglABIgeABIgRAAQgHAAgEgCQgDgDAAgFQAAgDACgDQACgDADgBIAEgBIAJAAIAgABIAQAAIAQgBIAQgBIAFgDIAGgBQAFAAADAEQADADAAAGIAAACIgBADIgBAHIgDAMIgDANIgEATIgHAfIgCAJIgDAPIAMAAIAQAAIAIABIAHAAQAEAAADADQACACABAFIgDAGQgBADgEABIgBAAIgDAAIgJAAIhDAAIgjABIgUAAIgLABIgGAAg");
	this.shape_3.setTransform(197.2,73.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABPBrIgJgCIg+gQIgzgMIgogJQgGgBgBgCQgDgDAAgFQAAgGADgDQAEgEAEgBIAMACIAYAGIAfAHIAgAIIAgAHIAXAGIAIACIAFABQAEACACADQADADAAAFQAAAFgEADQgCAEgGAAIgDAAgAAkANIgdgFIgegHIgegFQgFgBgDgDQgDgDAAgEQABgGADgDQADgEAFAAIADAAIAHABIAQAEIAiAIIAaAEIAUAEQAFAAADADQACADAAADQAAAGgDADQgDAEgGAAIgQgCgAA+g8IgagFIgggGIgfgGIgYgFIgEgBIgCgBIgEgEIgBgGQABgFADgEQADgDAGAAIADAAIAHABIAxAKIApAIIAbAFQAEAAADADQACADAAAFQAAAGgDADQgEAEgFAAIgNgCg");
	this.shape_4.setTransform(170.8,70.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDBoQgEgDAAgHQAAgFAEgEQADgDAHAAIAAAAQAHgBALgEQAKgEAMgHQAMgHAKgIQALgJAIgIQAMgKAKgPQAKgNAJgSQAJgTAGgUQACgEACgCQADgDAEAAQAGABADADQAEADAAAFQAAAEgEAJIgIAUIgLAXIgLATQgPAWgVATQgWAUgaAPIgXALQgKADgIAAQgJAAgDgDgAghgHIgXgCIgWgCIgPgCQgFgBgCgDQgDgDAAgFQABgFADgEQADgDAFAAIACAAIAFABIAVADIAZACIAaABQAGAAAEADQACADAAAGIAAAGIgEAEIgEABIgFABIgUgBgAgUhGIgWgDIgXgEIgTgFIgEgBIgCgBQgDgBgCgDQgCgDAAgDQABgFADgEQADgDAFAAIADAAIAFACIAWAFQANADAOABIAaADQAEAAADADQADADAAAGQAAAFgDADQgEADgDAAIgSgBg");
	this.shape_5.setTransform(144.8,70.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALB1QgDgDAAgEIAAgDIACgCIADgGQAMgQAHgVQAHgUAEgbQADgYABgjIgYAAQgEAAgCgDQgDgCAAgFQAAgFADgCQACgDAEAAIAYAAIAAguQAAgEADgEQADgCAFAAQAEAAADACQADAEAAAEIAAAuIAfAAQAGAAAEACQADACADADIADAEIABAHIAAAQIgBA5IgCAvQgCASgCAJQgCAJgGAFQgHAEgNAAQgSAAgJgDQgHgCAAgIQAAgFADgDQADgDAFAAIACAAIABAAIAJABIAHABQAFAAAEgCQACgDABgGQACgIABgOIACgiIABgyIAAgMQAAgGgBgDQgCgDgEAAIgYAAIAAAfIgBASIgCARIgCARQgGAXgHASQgGATgLANQgDAFgDACQgDACgEAAQgEAAgEgEgAhzByQgDgEAAgFIABgEIAEgEIADgBIAIAAIAGAAIAMgBIAPgBIALgBIAAgWIgvAAQgCAAgDgCQgCgDAAgEQAAgDACgDQACgDADAAIAvAAIAAgPIgiAAQgIgBgFgEQgFgDAAgJIAAguQAAgIAFgEQAEgFAJABIAiAAIAAgPIg0AAQgDgBgCgCQgDgDAAgDQAAgEADgDQACgCADAAIA0AAIAAgRIgJABIgMAAIgOABIgIAAQgGABgDgDQgCgCgBgGQABgDABgCQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIADgBIAGAAIAygCQAYgBATgEIAEgBIABAAQADAAACADQADACAAAFQAAAEgBABQgBADgFABIgNADIgaACIAAASIAvAAQAEAAACACQACADAAAEQAAADgCADQgCACgEABIgvAAIAAAPIAkAAQAHgBAEAFQAEAEAAAIIAAAuQAAAIgEAEQgFAEgGABIgkAAIAAAPIAtAAQADAAACADQACACAAAEQAAAEgCADQgCACgDAAIgtAAIAAATIAHgBIAIAAIAIgBIAHgBIAIgBIACAAIABAAQAFAAACACQADADAAAEQAAAEgCACQgCACgFABIgQACIgbAEIgeADIgZACIgOABQgEAAgDgCgAgnAVIAdAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgKIgjAAgAhaAPIABAFQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAcAAIAAgQIghAAgAgngJIAjAAIAAgKQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgeAAgAhZgXIgBAEIAAAKIAhAAIAAgQIgcAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_6.setTransform(118.6,70.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMBzQgEgCAAgFIAAhjIgSAQQgHAFgDAAQgFgBgDgDQgEgEAAgEQAAgDABgCIAFgGQAUgOAPgQQAPgQAMgTIAFgFQADgBADAAQAFAAADADQAEADAAAEQAAAEgGAJIgWAaIAAB7QAAAFgDACQgDADgFAAQgFAAgDgDgAAhByIgOgBIgLgCQgFgBgCgDQgBgDAAgFQAAgFACgDQADgDAGAAIABAAIADAAIAPABIAMABQAHAAADgCQADgDAAgFIAAhkIhMAAQgEAAgDgDQgCgDAAgFQAAgFACgDQADgDAEAAICGAAQAEAAACADQACADAAAFQAAAFgCADQgCADgEAAIgiAAIAABwQAAAMgHAFQgGAFgQAAIgRAAgAhygyQgDgEAAgEQAAgEABgCQACgDAEgCQAQgLANgKQAMgKALgNIAEgDIAEgBQAFAAADAEQADADAAAEQAAAEgHAJIgXAWIgXASQgKAGgEAAQgFAAgDgDgAgLhTQgEAAgDgDQgCgDAAgFQAAgFACgDQADgCAEgBIByAAQADAAADADQACAEAAAEQAAAFgCADQgDADgDAAg");
	this.shape_7.setTransform(92.9,70.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGBrQgDgDAAgFIABgGIADgDIACgCIADgCQAMgFAIgGIAQgKIAOgNQAMgOAHgPQAGgPAAgOQAAgRgFgPQgFgOgKgLQgKgLgRgHQgQgHgTAAQgSAAgRAIQgSAIgNAPQgNAOgGAQQgGAQAAASQAAAOADAJQADAKAHAHQAGAGAHAEQAFACAHAAQAIABAHgFQAFgFAEgKQAEgIADgNIAEgaIACgdIAAgOQAAgHADgDQADgEAFAAQAFAAADAEQACAEAAAJQAAASgBARIgFAfQgDAPgBALQgHASgNALQgLAJgRABQgMgBgJgEQgLgEgIgJQgLgMgFgPQgGgPAAgQQABgXAIgVQAKgWAQgQQAQgRAVgJQAVgKAWAAQANABAOADQAOADAMAHQANAGAJAHQAJAKAIAMQAGAMAEAOQAEAOAAAPQAAAWgLAVQgKAWgUATQgKAJgLAHQgKAIgKAEQgJAEgFABQgFgBgEgDg");
	this.shape_8.setTransform(66.9,70.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrBvQgDgEgBgGIABgFIADgEIACgBIAGgCQAfgOAQgNQARgNAHgPQAGgPAAgUIAAhmQAAgFAEgDQADgDAFAAQAGAAADADQADADABAFIAABlQgBARgCANQgDAOgGAKQgHALgKAJQgKAKgQAJQgMAKgTAIIgKAFIgEABQgGAAgEgEgAg+AFQgDgDgBgEIAAgCIABgDIAAgPIABgMIAAgLIAAgCIAAgFIgBgMIgBgXIAAgEQABgHADgEQAEgEAFAAQAEAAAEACQADACABADIABAKIAAAVIAAAZIAAAfIgBANQgBADgEACQgDACgFAAQgFAAgDgDg");
	this.shape_9.setTransform(41,70.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBoQgCgDAAgHQgBgDACgCIADgEIACgBIAEgCQAQgHAKgJQAIgHADgNQADgNAAgVIAAgwQAAgFAEgDQADgDAFAAQAFAAADADQACADAAAFIAAAkQAigOATgTQATgTAHgcIg1ACIgbAAIgoAAIgbABIgMAAIgHAAIgEABQgJAAgEgDQgEgDAAgGIAAgFIADgDIAEgDIAFAAIAIAAIAQAAIAVABIAPAAIAQgBIAUAAIAigBIAwgBIAFgEQADgCAEABQAFgBADAEQADADABAGIgCANIgFAOIgHAQQgHAPgJANQgLAMgOALQgNAHgNAGQgNAIgNACQAAARgBAMQgCALgGAJQgHALgKAIQgMAJgNAFIgFACIgEABQgFgBgEgDg");
	this.shape_10.setTransform(15.2,70.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAjQgFgHgHgJIgPgTIgSgSIgEgEIgBgFQABgFADgEQAEgDAEgBIAFACQADABADAEIAPARIAQAQIAPAUIADAEIABAFQgBAFgDADQgEADgFABQgHAAgDgGg");
	this.shape_11.setTransform(362.2,32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBjQgPgIAAgQQAAgRATgOQASgOAhgJIgPgLIgVgMQgEgDgCgCQgCgDAAgEQAAgEADgEIAIgJIAagVIApggIgBgBIgZACIgaABIgbABIgWAAQgKAAgDgCQgEgDAAgGQAAgGADgDQADgDAGAAIADAAIAEABIAHAAIAJAAIAygBIAvgCIADgBIABAAQAIAAAFAEQAFADAAAGIgBAFIgDAFIgCABIgGAFIgTAPIgWASIgVARIgNAMIAPANIAXALIAfASQALAIAFAHQAFAHAAAHQAAAPgMAMQgMAMgUAHQgUAHgXAAQgcAAgNgJgAgFAtQgQAGgJAIQgJAHAAAIQAAAHAHACQAHADAQAAQAQAAAOgEQAOgEAJgHQAIgHABgJQAAgEgFgFQgFgFgLgGQgWAEgPAGg");
	this.shape_12.setTransform(343.2,25.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWB2QgDgCAAgFIAAipIgTAAIgJAYIgKATQgGALgDADQgEACgEAAQgEgBgEgBQgEgDAAgEIABgFIAEgGQANgVAIgXQAKgWAFgZQABgFADgCQACgDADAAQAFAAADADQADADAAAFIgBAGIgCALIgEANIBqAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAIhGAAIAAAlIA/AAQAEAAACADQADACAAAFQAAAFgDADQgCACgEAAIg/AAIAAAlIBBAAQAEAAACACQACADABAFQgBAFgCACQgCADgEAAIhBAAIAAA3QgBAFgDACQgCADgGAAQgFAAgDgDgAhPB2QgDgCAAgFIAAiFIgJAOIgIAJIgGAFIgGABQgEAAgCgDQgEgDAAgDIAAgEIAFgGQAKgMAKgRQAKgRAJgSQAJgTAGgQQACgFACgCQADgCADAAQAFAAAEADQACADAAAEIgCAKIgIASIgJAUIAACtQAAAFgDACQgEADgEAAQgFAAgDgDg");
	this.shape_13.setTransform(317.6,24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgBjIgVgGIgTgIQgYgLgMgPQgMgOAAgRQAAgNALgQQALgRAVgUQASgTAcgTIgpAAIgwABIguAAQgEAAgDgDQgDgDAAgFQAAgDACgDIAEgEIADgBIAGAAIAaAAIApAAIAngBIAngBIAegBIATgBIABAAQAEAAADAEQADADABAEQAAAEgDADQgDAEgDAAIgGABIgLAAIgIABQgWAMgTAOQgUAPgOAPQgOAPgJALQgIANgBAJQAAAQASALQAQAMAnALIAEABIADAAIACAAIACgBIACgBIACAAQAFAAADADQAEAEAAAFQAAAHgFADQgFAEgKAAQgGAAgKgDgABEAhIgHgHIgMgPIgRgVQgEgHAAgDQAAgDADgDQACgCAEgBIAEABIAEAGIAIAKIAKAMIAJALIAGAIIACADIABADQAAADgDADQgDADgDAAIgEgBgABkALIgHgHIgMgOIgRgWQgEgIAAgCQAAgEADgCQACgDAEAAIAEABIAEAFIAJANIANAQIALAOQAAAAABABQAAAAABAAQAAABAAAAQAAAAAAAAIABACQAAAEgDADQgDADgDAAIgBAAIgDgBg");
	this.shape_14.setTransform(291.5,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXA/QgOgFgIgIQgEgEgCgEQgCgEAAgEQAAgEAEgEQAEgEAFAAQADAAACACIAEAEQAGAIAJAFQAKAFAJAAQANAAAHgEQAHgEAAgJQAAgDgDgDQgCgDgIgDQgIgEgNgEQgWgHgKgHQgKgKAAgNQAAgLAGgIQAHgJALgFQALgFAMAAQALAAALADQAKADAHAGQAHAFAAAGQAAAFgDADQgEADgEABIgFgBIgEgEQgFgDgHgDQgHgCgHgBQgJABgHAEQgHAEAAAIQAAAFACADQADADAHADIASAGQAXAHALAHQAMAKgBANQAAASgNALQgOAJgYABQgMgBgNgEg");
	this.shape_15.setTransform(263.8,29);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwA0QgOgOAAgaQAAgSAIgRQAIgRAPgMQAJgHALgEQAKgDAIAAQAGAAAFACQAFADAEAFQABgFADgDQADgCAFAAQAGgBADAEQADADAAAFIAAACIgBAHQgCAQgBATIgBAgQAAAIADAGQADAFAGAEQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQACACAAADQAAAGgEADQgDAFgGAAQgGgBgGgGQgFgFgFgLQgJAMgKAGQgJAFgLABQgYgBgNgPgAgGgoQgIADgHAHQgIAJgFALQgEAKAAANQAAAQAHAIQAHAIANAAQALAAAHgGQAKgIAGgNIAAgSIABgRIABgPQgEgGgEgDQgFgCgFgBQgHABgGADg");
	this.shape_16.setTransform(250.4,29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJBFIgDgCIgBgBIgBgCIgCgHIgGgTIgHgUIgKgXIgNgiIgEgMIgCgEIAAgCQAAgEAEgDQAEgEAEAAQAEAAADACIAEAEIABABIACAHIAHASIANAjIAEAKIAFAOIANgZIAOgeIALgdQACgEACgCQADgCAFAAQAFABADADQAEADAAAFIgBAEIgEAJIgHARQgJAVgLARQgKAVgMATIABAEIABABIAAACQAAAFgEADQgDADgEABIgFgBg");
	this.shape_17.setTransform(236.8,29.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnBBQgEgCAAgDIgBgLIAAgVIgBgZIAAgUIAAgJIgBgFIgBgFQgCgDgDgDQgEgCgGAAQgLAAgLAIQgNAHgOAPIAAAUIAAATIgBAQIgBAQQAAAEgDADQgDAEgGAAQgFAAgDgEQgDgDAAgEIAAgGIAAgOIABgZIAAggIABgjIAAgDIABgDQABgCADgBIAHgCQAEAAAEACQADADAAAFIAAAOQAPgLAOgHQAMgHAMABQAMAAAJAFQAJAGAEAKIADAJIABAMIAAADIgBALIAAAJIAAAFIABAJIAAAOIABAYIAAACQAAAHgDADQgDAFgGAAQgFgBgDgCg");
	this.shape_18.setTransform(222.5,29);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwA0QgOgOAAgaQAAgSAIgRQAIgRAPgMQAJgHALgEQAKgDAIAAQAGAAAFACQAFADAEAFQABgFADgDQADgCAFAAQAGgBADAEQADADAAAFIAAACIgBAHQgCAQgBATIgBAgQAAAIADAGQADAFAGAEQACABABADQACACAAADQAAAGgEADQgDAFgGAAQgGgBgGgGQgFgFgFgLQgJAMgKAGQgJAFgLABQgYgBgNgPgAgGgoQgIADgHAHQgIAJgFALQgEAKAAANQAAAQAHAIQAHAIANAAQALAAAHgGQAKgIAGgNIAAgSIABgRIABgPQgEgGgEgDQgFgCgFgBQgHABgGADg");
	this.shape_19.setTransform(207.3,29);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBhQgWgOgMgYQgMgZAAgfQAAggAMgaQAMgZAWgPQAVgPAZAAQATAAASAJQARAIAOAQIAIALQADAFAAADQgBAFgDAEQgEAEgGAAQgEAAgDgCIgFgJQgIgOgOgIQgOgJgRAAQgSAAgPAMQgQALgJAVQgIAVgBAZQABAYAJATQAJATAPAMQAQALARAAQASAAAPgLQAQgMAKgUIAEgGQADgBAEAAQAFAAAEAEQAEADAAAGQAAADgEAHQgEAGgHAJQgNASgRAIQgRAJgVAAQgZAAgVgOg");
	this.shape_20.setTransform(189.9,24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRBrIgcgCQgKgBgFgDQgKgEgFgHQgFgHgBgJQAAgIAFgHQAEgIAHgHQANgOAQgNIAigZIgigZIgdgXIgVgTQgFgFgCgFQgEgEAAgEQAAgGAFgDQADgEAGAAQADAAACABQADACACADQAEAIALALQALAKARAPIArAhIAOgLIAMgJIALgJIAEgDIAFgDIAHgGIAFgHIAEgDIAEgBQAGAAAEADQADAEABAFQAAAGgGAGQgGAGgMAJIgfAWIggAYIgcAaIgXAUIgIAJQgBADAAADQAAAEACADQAEACAIACQAHABAPABIAjAAIAcAAIARgBIAKgBIAGgDIADgCIAFgBQAFABADADQADADAAAFQABAEgDAEQgCADgEACIgMAEIgUACIggAAIgqAAg");
	this.shape_21.setTransform(157.3,24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMBLQgIgIAAgSIABhHIgOAAIgKABIgIgBIgDgBQgCgBgCgDQgCgDABgDQAAgFACgDQADgDAEgBIABAAIAIABIAGAAIAQgBIABgcQAAgEAEgCQADgDAFgBQADABADACQABACACAEIAAABIAAAAIAAAcIAQgBIAIAAIAMAAIAHgBQAGABADACQADAEAAAFQAAADgCADQgCADgCACIgDAAIgIAAIgWABIgIAAIgIABIgBBHQAAAHACACQADADAGAAQAHAAAIgEQAGgEAHgHIAEgDIAEgBQAFAAADAEQADADAAAFIgBAFIgEAGQgIAJgMAEQgMAFgMAAIgCABQgNAAgIgJg");
	this.shape_22.setTransform(129.8,27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag2BZQgDgDAAgFIAAgIIAAgRIABgcIAAgeIABgdIAAgQIgBgRIAAgHIAAgIIABgDQAAgEAEgDQADgCAFAAQAFAAADADQADACABAFIAAAFQAIgIAKgEQAJgDAIAAQARAAAMAIQAMAIAGAOQAHAPAAAUQAAAVgHAMQgHAPgNAIQgNAIgSAAQgIABgJgEQgIgDgIgHIAAAKIAAAKIgBAQIAAASIAAAFQgBADgDADQgEACgEAAQgFABgDgEgAgQg+QgKAFgGAMIAAAHIAAAGIAAAGIAAAGIAAAKIAAAJQAEAHAJAFQAIAEALABQAQgBAJgMQAJgJAAgUQAAgVgIgLQgIgKgPgBQgKAAgJAHg");
	this.shape_23.setTransform(116.7,31.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIBjQgDgDAAgEIAAhwQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFIAABwQgBAEgDADQgDAEgFAAQgEAAgEgEgAgLhIQgFgEAAgIQAAgHAFgGQAFgEAGAAQAHAAAFAEQAFAGAAAHQAAAIgFAEQgFAGgHAAQgGAAgFgGg");
	this.shape_24.setTransform(104.7,25.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguBAQgDgDAAgEIAAgHIABgWIABgRIAAgQIAAgJIgBgOIgBgLIAAgJIABgIIACgGIAEgDIAGgBQAFAAADACQAEADAAAFIAAAOQAKgMALgHQAIgFALAAQAJAAAHADQAIADAFAGQAFAFAAAGQAAAFgDADQgDAEgGAAIgFgBIgEgEQgDgDgEgDQgDgCgFAAQgHABgJAIQgLAJgMAPIAAATIAAAOIAAAJIgBAIIAAALIAAAHQAAAEgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_25.setTransform(95.7,29);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbA8QgPgJgHgPQgIgPAAgVQAAgRAIgQQAJgPAOgJQAOgJARAAQAMAAAMADQAKAEAIAGQAGAGABAGQAAAFgEADQgEAEgFAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEgEQgGgFgHgDQgIgCgIgBQgRAAgKANQgLAMgBATQABAWALALQAKAMARAAQALAAAHgEQAIgFAEgKQACgDADgBQADgBAEAAQAFAAAEADQADAEAAAFQAAADgCAFIgHAJQgIAIgLAFQgMAEgOABQgRgBgPgHg");
	this.shape_26.setTransform(81.8,29);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghBpQgRgHgLgLQgGgFgCgEQgDgFAAgEQAAgFAEgEQAEgEAGAAQAFgBACACQACACADAFQAHAKANAGQANAHANAAQAWAAAMgJQALgIAAgRQAAgOgLgKQgMgKgagJQgYgIgOgGQgOgJgFgMQgHgMAAgQQAAgQAJgNQAKgNAQgHQAPgIATAAQALAAALAEQALADAKAHQAIAGAGAJIAGAIIABAHQgBAGgDADQgEAEgGAAQgEAAgCgCQgDgCgCgDQgFgOgKgGQgLgGgOAAQgTAAgMAJQgLAJAAAPQAAALAEAHQAEAHAKAGQAKAFAQAGQAjALASAPQASARAAAWQAAAQgJANQgKANgRAHQgQAIgVAAQgRAAgQgGg");
	this.shape_27.setTransform(66,24.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgwA0QgOgOAAgaQAAgSAIgRQAIgRAPgMQAJgHALgEQAKgDAIAAQAGAAAFACQAFADAEAFQABgFADgDQADgCAFAAQAGgBADAEQADADAAAFIAAACIgBAHQgCAQgBATIgBAgQAAAIADAGQADAFAGAEQACABABADQACACAAADQAAAGgEADQgDAFgGAAQgGgBgGgGQgFgFgFgLQgJAMgKAGQgJAFgLABQgYgBgNgPgAgGgoQgIADgHAHQgIAJgFALQgEAKAAANQAAAQAHAIQAHAIANAAQALAAAHgGQAKgIAGgNIAAgSIABgRIABgPQgEgGgEgDQgFgCgFgBQgHABgGADg");
	this.shape_28.setTransform(49.9,29);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJBFIgDgCIgBgBIgBgCIgCgHIgGgTIgHgUIgKgXIgNgiIgEgMIgCgEIAAgCQAAgEAEgDQAEgEAEAAQAEAAADACIAEAEIABABIACAHIAHASIANAjIAEAKIAFAOIANgZIAOgeIALgdQACgEACgCQADgCAFAAQAFABADADQAEADAAAFIgBAEIgEAJIgHARQgJAVgLARQgKAVgMATIABAEIABABIAAACQAAAFgEADQgDADgEABIgFgBg");
	this.shape_29.setTransform(36.2,29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgwA0QgOgOAAgaQAAgSAIgRQAIgRAPgMQAJgHALgEQAKgDAIAAQAGAAAFACQAFADAEAFQABgFADgDQADgCAFAAQAGgBADAEQADADAAAFIAAACIgBAHQgCAQgBATIgBAgQAAAIADAGQADAFAGAEQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQACACAAADQAAAGgEADQgDAFgGAAQgGgBgGgGQgFgFgFgLQgJAMgKAGQgJAFgLABQgYgBgNgPgAgGgoQgIADgHAHQgIAJgFALQgEAKAAANQAAAQAHAIQAHAIANAAQALAAAHgGQAKgIAGgNIAAgSIABgRIABgPQgEgGgEgDQgFgCgFgBQgHABgGADg");
	this.shape_30.setTransform(22.8,29);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoBlQgOgHgHgOIgEgJIgBgGQAAgFAEgEQADgDAFAAIAGABIAEADIAAABIACAEQAGALAIAGQAHAGAKAAQALAAAGgLQAHgKAAgVIAAh/IgNAAIgHgBIgGAAQgEAAgCgDQgCgDgBgEQABgGADgDQADgDAFAAIAHAAIAHAAIALAAIAQAAIAQAAIAJgBIACAAQADAAADAEQADADAAAFQAAAEgCADQgDADgDABIgGAAIgIABIgJAAIAACAQAAAggMAQQgNARgWAAQgQAAgNgIg");
	this.shape_31.setTransform(8.5,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385,93.4);


(lib.Text_Crouton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDCKQgEgEgBgGQABgEABgCQACgDADgCIABgBIAFgEQAXgQAQgRQAPgRAKgVQAJgVAEgZQAFgbAAgkIhZAAQgFAAgDgDQgDgEAAgGQAAgFADgEQACgDAGgBIBzAAIAAgjQAAgGAEgDQAEgEAGAAQAFAAAEAEQAFADAAAGIAAAjIB2AAQAEABAEADQADAEAAAGQAAAFgDAEQgEADgEAAIiPAAIgBAbIgCAWIBjAAIAJABIAIAEQAGAEACAGQACAEAAANQAAAUgCAVQgCAVgEAQQgCARgFAJQgFALgJAFQgKAFgTAAIgRgBIgVgBIgPgCQgFgBgEgEQgDgEAAgFQAAgHADgEQAEgEAFAAIACAAIAEABIAOACIAQABIANAAQAKAAAGgDQAFgEADgIQADgIABgOIAEgcIACgdQAAgHgDgCQgBgDgFAAIhdAAQgDAWgHASQgHATgKAPQgMATgQAPQgQAQgUAMIgGADIgFABQgGgBgEgEg");
	this.shape.setTransform(108.4,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5CEQgEgEAAgIQAAgFACgCQADgDAHgDQAbgLASgKQAQgKANgMQAKgKAGgKQAHgKABgOQADgNAAgTQAAgfgCgcQgBgbgDgWIgBgCIAAgBQAAgGAEgEQAFgDAHAAQAGAAAEADQADADABAGQACAGAAAOIACAfIACAiIAAAfQAAAWgEARQgDARgKAOQgJAOgRAPQgHAHgJAGQgKAGgMAHIgdAOIgIAEIgFACIgEAAQgGAAgFgFgAhEAUQgDgCgBgEQgEgKgCgMQgCgNAAgPIABgVIACgXIADgVIABgFIABgDIAAgDIgCgEIAAgBIAAgCQAAgFAFgDQAFgEAGAAQAIAAADAGQAEAGAAAKIAAAGIgBAJIgDAVIgCAWIgBATIABATQABAIACAFIABAEIAAAEQAAAGgEAEQgFAEgGABQgFgBgDgCg");
	this.shape_1.setTransform(77.2,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaCNQgDgDAAgFIAAjLIgXAAIgLAdIgMAWQgHANgEAFQgEACgFgBQgGAAgEgCQgDgDAAgGIAAgFIAEgHQAQgaAKgaQALgbAGgeQACgGADgCQADgDAEAAQAGAAAEAEQADADAAAFIgBAIIgDANIgFAPIB/AAQAFAAADAEQADAEABAEQAAAGgEAEQgDADgFAAIhUAAIAAAsIBLAAQAFAAADAEQADADAAAGQAAAFgDAEQgDADgFAAIhLAAIAAArIBOAAQAEABADADQACADABAFQgBAGgCADQgDAEgEAAIhOAAIAABCQgBAFgDADQgDADgHAAQgFAAgFgDgAheCNQgEgDAAgFIAAifIgLAPIgKANQgEAEgDABQgCABgDAAQgGAAgDgDQgEgEgBgDIABgGIAGgGQAMgQALgTQANgUAKgXQALgVAHgUQABgGADgCQAEgCAEgBQAHABADADQADADABAGQAAADgEAJIgIAUIgMAZIAADPQAAAFgDADQgEADgGAAQgGAAgDgDg");
	this.shape_2.setTransform(46.2,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHCAQgDgEAAgGQAAgEABgCIADgFIACgCIAFgCIAYgNQAKgGAIgHIAQgPQAQgRAHgRQAIgSAAgSQAAgUgGgSQgGgRgLgMQgNgOgUgIQgUgIgWAAQgVAAgVAJQgVAKgRASQgPAQgHATQgHATAAAXQAAAQAEAMQADALAIAIQAIAIAHADQAHAEAJAAQAKAAAHgGQAHgFAFgMQAEgKADgQQAEgQACgPQACgSAAgRIgBgRQABgHADgEQAEgEAGAAQAGAAADAEQADAFAAALQAAAVgCAVQgBATgEASQgDARgDANQgIAXgOAMQgPALgUAAQgOAAgLgFQgMgFgKgLQgNgOgHgSQgGgRAAgUQAAgbALgZQALgaATgUQATgTAZgMQAZgLAbAAQAQAAARAEQAQAEAPAHQAPAIAKAJQAMALAIAOQAIAPAFARQAEARAAARQAAAagMAaQgNAagYAXQgLALgNAIQgMAJgMAFQgKAFgHABQgHgBgEgDg");
	this.shape_3.setTransform(15.2,29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8B+IgIgBQgDgBgDgEQgCgDAAgGQAAgHADgEQAEgDAGAAIACAAIABAAIABAAQAFAAAKgGQAKgFAMgIIAZgUIAYgWQAWgVASgYQASgcAMggQACgFADgDQAEgCAEAAQAGAAAFAEQAEAFAAAHQAAADgEAJIgKAVIgNAYIgNAUQgQAXgYAXQgXAWgbAUQgSANgLAGQgMAFgJAAIgFAAgAgWhGIgegIIgggJIgbgJQgIgDgCgEQgDgCAAgGQAAgGAEgEQAEgFAGABIADAAIAEACIALADQAJAFAQAEIAhAIIAiAHQAEABADAEQADADAAAGQAAAGgDAEQgEAFgFgBQgGAAgOgCg");
	this.shape_4.setTransform(-15.8,29.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFCHQgFgEAAgHIABgHIAAgJIAChRIABhuIAAgaIAAgOIABgFIAAgCQACgDADgDQAEgCAEAAIAGACQADABADACIADAFIAAAIIAAAGIAAAtIAAAOIAAAQQAOAKASAJIAjASQAUAGARAGQAGACADAEQACADAAAGQAAAHgEAEQgEAFgHAAIgFAAIgJgFQgZgKgUgLQgWgMgUgLIAAAjIAAAWIAAAOIgBANIAAAdIgBAPIAAAGIgBAEQgBAEgEACQgEADgFAAQgGAAgEgEg");
	this.shape_5.setTransform(-43.9,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiECBQgEgFAAgHQAAgEACgCIAHgGQAagSAPgOQAPgOAHgNQAHgNgBgOIADhwQAAgFAEgEQAFgDAGAAQADAAAEACQAEABABADIACAEIAAABIAAABIgEByQAAAMgDAKQgBAJgHAJQgFAJgJALIgRASIgUARQgKAIgIAFQgHAFgEAAQgHAAgEgFgAAMCAQgEgEAAgHIABgFIADgGIAAjiQABgGAEgDQAEgEAFAAQAGAAAEAEQAEADABAGIAADTIABABQAJgGALgNQAKgMAJgRQAKgQAHgSQAIgRADgRQABgFAEgDQADgDAGAAQAGAAAEAEQAFAEgBAGQAAAFgDAJIgHAUIgJAXQgNAdgQAUQgPAVgTANQgJAHgIADQgIADgGAAQgHAAgFgEg");
	this.shape_6.setTransform(-77.8,28.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWCAQgEgFAAgGQAAgDACgDQABgEADgCIADgBIAIgEQA8gaAkgxQAlgwAQhIQgMABgVABIgxACQgMAYgRAVQgRAWgYARIgKAHQgEAAgEAAQgGAAgDgCQgEgEAAgGQAAgEACgDIAEgFIABgBIAHgDQAVgPAPgQQAOgPAIgPQAHgPgBgNQAAgFAEgFQAEgDAGgBQAGAAAEAEQADADAAAGIAAAAIAAABQAZABAWgCQAVgBANgCIAFgFIAIgCQAHABAEAEQAFAFAAAIQAAAGgDAMIgIAbIgLAdIgMAcQgLAXgNASQgNATgQARQgQAQgTAOIgZAQIgXAMQgKAFgEAAQgGAAgEgEg");
	this.shape_7.setTransform(-109.1,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.1,0,252.2,56.1);


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B800CC").s().p("AneHzIAAvmIO9AAIAAPmg");
	this.shape.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,0,96,100);


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


(lib.Box_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Box("synched",0);
	this.instance.setTransform(0.1,50.1,0.142,0.142,-137.1,0,0,1.2,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:49.9,scaleX:1.2,scaleY:1.2,rotation:17.7,x:0.3,y:50.4},7,cjs.Ease.get(-1)).to({regX:0,regY:50,scaleX:1.01,scaleY:1,rotation:0,x:0,y:50},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,40.4,19.7,19.7);


(lib.TitleBar_Ex000020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.Text_Ex000020("synched",0);
	this.instance.setTransform(-409,28.5,1,1,0,0,0,0,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:363.2},14,cjs.Ease.get(1)).to({x:31.2},10,cjs.Ease.get(0.98)).wait(1));

	// レイヤー 12
	this.instance_1 = new lib.Box_in("synched",0,false);
	this.instance_1.setTransform(720,50,1,1,0,0,0,0,50);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(18));

	// レイヤー 11
	this.instance_2 = new lib.Box_in("synched",0,false);
	this.instance_2.setTransform(624,50,1,1,0,0,0,0,50);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(19));

	// レイヤー 8
	this.instance_3 = new lib.Box_in("synched",0,false);
	this.instance_3.setTransform(528,50,1,1,0,0,0,0,50);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(20));

	// レイヤー 7
	this.instance_4 = new lib.Box_in("synched",0,false);
	this.instance_4.setTransform(432,50,1,1,0,0,0,0,50);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(21));

	// レイヤー 6
	this.instance_5 = new lib.Box_in("synched",0,false);
	this.instance_5.setTransform(336,50,1,1,0,0,0,0,50);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(22));

	// Box_in
	this.instance_6 = new lib.Box_in("synched",0,false);
	this.instance_6.setTransform(240,50,1,1,0,0,0,0,50);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(23));

	// Box_in
	this.instance_7 = new lib.Box_in("synched",0,false);
	this.instance_7.setTransform(144,50,1,1,0,0,0,0,50);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(24));

	// Box_in
	this.instance_8 = new lib.Box_in("synched",0,false);
	this.instance_8.setTransform(48,49.5,1,1,0,0,0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,0.4,467,93.4);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:385},10).wait(1));

	// Bar
	this.instance_1 = new lib.Bar();
	this.instance_1.setTransform(1155,65,1,1,0,0,0,385,25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:385},10).wait(1));

	// Bar
	this.instance_2 = new lib.Bar();
	this.instance_2.setTransform(1155,45,1,1,0,0,0,385,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:385},10).wait(3));

	// Bar
	this.instance_3 = new lib.Bar();
	this.instance_3.setTransform(-385,35,1,1,0,0,0,385,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:385},10).wait(3));

	// Bar
	this.instance_4 = new lib.Bar();
	this.instance_4.setTransform(1155,25,1,1,0,0,0,385,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:385},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(770,0,770,10);


(lib.WidgetFrame_ex000020_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.frame_in("synched",0,false);
	this.instance.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// レイヤー 2
	this.instance_1 = new lib.WidgetImageEx000020("single",0);
	this.instance_1.setTransform(150,150,0.04,0.04,90,0,0,150,150);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2,305,304);


(lib.Ex000020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TitleBar
	this.instance = new lib.TitleBar_Ex000020("synched",0,false);
	this.instance.setTransform(400,60,1,1,0,0,0,400,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// レイヤー 4
	this.instance_1 = new lib.WidgetFrame_ex000020_in("synched",0,false);
	this.instance_1.setTransform(250,310,1,1,0,0,0,150,150);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,10.4,467,93.4);


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
	this.instance = new lib.Text_Crouton("synched",0);
	this.instance.setTransform(-140.9,50.5,1,1,0,0,0,0,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:625.3},14,cjs.Ease.get(1)).wait(1));

	// Bar
	this.instance_1 = new lib.Bar_in("synched",0,false);
	this.instance_1.setTransform(385,50,1,1,0,0,0,385,25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("Eg8JAD5IAAnxMB4TAAAIAAHxg");
	this.shape.setTransform(385,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape}]},14).wait(1));

	// Lines
	this.instance_2 = new lib.Lines_in("synched",0,false);
	this.instance_2.setTransform(750,50,1,1,0,0,0,50,50);

	this.instance_3 = new lib.Lines_in("synched",0,false);
	this.instance_3.setTransform(650,50,1,1,0,0,0,50,50);

	this.instance_4 = new lib.Lines_in("synched",0,false);
	this.instance_4.setTransform(550,50,1,1,0,0,0,50,50);

	this.instance_5 = new lib.Lines_in("synched",0,false);
	this.instance_5.setTransform(450,50,1,1,0,0,0,50,50);

	this.instance_6 = new lib.Lines_in("synched",0,false);
	this.instance_6.setTransform(350,50,1,1,0,0,0,50,50);

	this.instance_7 = new lib.Lines_in("synched",0,false);
	this.instance_7.setTransform(250,50,1,1,0,0,0,50,50);

	this.instance_8 = new lib.Lines_in("synched",0,false);
	this.instance_8.setTransform(150,50,1,1,0,0,0,50,50);

	this.instance_9 = new lib.Lines_in("synched",0,false);
	this.instance_9.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-102,1807,304);


(lib.Nobuteru = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(-267,-92,1807,304);


// stage content:



(lib.widget = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ex000020
	this.ex000020 = new lib.Ex000020();
	this.ex000020.setTransform(385,192.7,1,1,0,0,0,385,192.7);

	this.timeline.addTween(cjs.Tween.get(this.ex000020).wait(30));

	// Nobuteru
	this.nobuteru = new lib.Nobuteru();
	this.nobuteru.setTransform(385,192.7,1,1,0,0,0,385,192.7);

	this.timeline.addTween(cjs.Tween.get(this.nobuteru).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,148,1949,304);

})(cjsWidgetLib = cjsWidgetLib||{}, cjsWidgetImages = cjsWidgetImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsWidgetLib, cjsWidgetImages, createjs, ss;