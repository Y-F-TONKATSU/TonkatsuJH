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
		{src:"images/og.jpg", id:"og"},
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


(lib.og = function() {
	this.initialize(img.og);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1262,1262);


(lib.tunnel = function() {
	this.initialize(img.tunnel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.トゥイーン26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EAKcAiaQnwgCkCkBQkGkCgCnmQgBh7APiJQATiFAjilQhrBVh/BnQh9BniwCVQiuCTj/DdQhAB7g5BqIh0DdQg7BvhPCQIpdlMQH9umHfv2QHcv1GwwnIKvEtQjaHkioFwQinFyiTE3QiSE3iZExQA5gxBdhLQBahKB4hlICUh5IIhE6QgrEYgVDHQgVDGAACaQgCETBSB2QBVB5C3gCQDaACC6haQC4haC/jQQC/jTDnlrIFgK/QlYHzl9DvQl4Dtm+AAIgMgBg");
	this.shape.setTransform(6.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.6,-409.9,545.3,819.9);


(lib.トゥイーン24 = function(mode,startPosition,loop) {
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


(lib.トゥイーン22 = function(mode,startPosition,loop) {
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


(lib.トゥイーン1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AnPFnQgNhCgGhLQgFhMAAhhQgBhOAFhSQAFhUAKhaQAKhbAQhqICuAWQgfCWgPB9QgOB+AABrIAAAjIACAnIAQgZIAOgXIARgaIAOgYIBOBdQgpBHgdA9QgcA9gRA2IAHAmIAKArIiQAuQgVhAgNhAgAAtHCQhAgBg0gXQg1gWgegoQgggogBgwQABgqAgghQAeghA2gSQA3gUBDAAQANAAAMACIAeACIgDhkIgDg+IgEg8QgtAFglADQgjACgnAAQgjAAgegBQgegCgigDIgUiXIBVAHQAsACAwAAIA6gBIBAgEIgFj0ICqAAIACDOQAagKAUgPQAVgPANgQIBvBhQgUAjgwAcQgwAdhIASIABA3IACBXIAFCWQBDAeA0AcQA2AbAuAcIhZCOIg8gsIgrgfIgogbQgVBBgyAdQgxAdhYAAIgDAAgAgeD+QgZAJAAAPQABASAbALQAaAMAlAAQAoABAQgNQARgOACgjQgQgHgSgCQgTgEgYAAQgmABgaAIg");
	this.shape.setTransform(63.9,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRHVQg7gFgogMQgpgNgdgUQgpgcgWgqQgVgpgBg0QAAhKAzhEQAyhGBvhJQgHgggGgzIgKhxQgEg9gDhBQgDhAgBg7ICsAIIgBAsIAAAoQAABTACA+QADA9AGAvIBLgwIAlgYIAegRIBcCZQhAAdg1AZIhdAsQAEAZAGAcQAGAcAHASIiAA+IgSgtIgMgmQgxAhgWAfQgWAeABAiQgBAcAPAQQARAQAnAGQAnAGBFAAQBUAABJgIQBKgHBGgRIAjCuQhCALhEAFQhEAGhJAAQhTAAg7gGg");
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


(lib.Nanika = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjIFyIDtgRIAADoIjbAdgAinhVQBogjAygyQAygzAAhBQAAgzgegeQgcgehCgOQhEgNhvAAIA/i9QDpACB3BIQB2BJAACPQAABuhABTQhBBTiAA0IgJDRIioAUg");
	this.shape.setTransform(150.8,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj0IoQg2geg4g/IA4ilQAoAlAfAWQAfAXAQAAQAQgBARglQASglAOg7QAPg8AJhEQAKhEAAg9QABgygNgUQgMgVgdABIgMABIgTACIgQADIgUADIgWADQg7C5hHChQhJChhMB5IinhrQArg/AuhRQArhQAnhYQAnhXAchRIhxAYIhXAQIgmi4IBugUIBFgLIA3gJIBCgKQAXhUAVhYQAThYAMhMIDCAiQgTBbgRBBQgRBBgPA0IAigDIAagBQBuAAA3BAQA3BBAACEQAABUgOBbQgOBdgXBRQgXBSgeA4QgcA3gmAeQgoAdgrAAQgzAAg0gfgAHaDMIgNgeQglAEgnAJQgmAIgkAKIhIh4IA9gaIAqgSIAwgTQgphIg3hOQg4hNg/hGICQhaQB4BzBYB7QBYB7A3CBIi2B3IgOgog");
	this.shape_1.setTransform(3.4,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AErKVIhSjQQAUAEAdACQAdACAcAAQATABAGgJQAHgIgBgXIAAr1IovAtIgKh1QgbA1giA4QgiA3gqA8IBXAAIgKMiIjIAAIARqVQgYAdgVAWQgVAXgSARIh9isQA8gzBBhWQBChXA6hoQA7hoAohpIDCBIIgdA+QgNAbgMAXIM/hAIAQC2Ih3AIIAAM7QACBMgVAnQgUApg3AOQg0AOhhAAIgHAAgAiCFfIgno0ICjAAIAEApIEogXIgWHPIj0ANIAEBGgAAGgSIALCRIBogGIAHiUg");
	this.shape_2.setTransform(-151.3,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.1,-116.2,454.2,232.5);


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


(lib.ニーチェ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// フリードリヒ・ニーチェ
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,255,255,0.2)").ss(1,1,1).p("ApaggQAAgPAAgJQABgJAAgFQAAgFAAgDQABgDAAgDQABgBABgEQACgEABgEQABgEAAgCQAAgBAAgCQgBgBgCgCQgLgIgIgEQgHgDgFgBQgFgBgDAAQgKABgDACQgDACABAAQAAABACABQACACADACQAGAEADAFQAEAFABAHQABAIAAALQAAAbgBAcQgBAbgBAaQAAAPAAAHQgBAIAAADQgBAEgCAFQgBADgBADQAAACAAADQAAADACAHQABAHAGAKQAFAHADADQADADAEAAQAEAAAFgFQAEgFAAgPQAAgCAAgFQAAgFAAgGQAAgGAAgFQAAgGAAgCQgBgdAAgWQAAgUAAgPQAFACAJAEQAKAEALAJQAMAGAJAOQAGAJAEADQAEAEAGAAQAGAAADgDQAEgCABgEQACgEAAgDQgBgMgLgJQgKgKgVgIQgUgIgdgCgAoWh4QAMAFAIAHQAJAHAHAKQACAEADADQACACAFAAQAEAAADgCQACgDAAgFQAAgJgHgGQgHgHgKgEQgKgDgLAAQgEAAgDAAQgDAAgCABgAlOB+QAFgBALgEQAMgEANgIQAOgIANgOQAMgOAKgVQADgIADgKQADgJACgOQACgLAAgVQABgVAAggQAAgFABgDQABgCACgCQACgEABgCQABgCAAgCQAAgCgCgCQgCgCgDgCQgLgHgKgEQgJgEgJAAQgGAAgFACQgGABAAACQAAABABABQABAAABAAQAGADACABQADACACADQACADABAHQACAHABAKQABAJAAAKQABAKAAAIQAAAngHAcQgHAdgLASQgLATgNALQgNAMgMAHgAgwgHQABgJABgMQAAgMACgMQABgMACgIQAAgBABgEQABgEACgDQABgEAAgBQAAgEgHgGQgHgGgLgEQgKgFgMAAQgFAAgFABQgDABAAABQAAABAAAAQAAABAAAAIACABQABABACABQABABABAAQAFACADAEQADAFABAJQABAKAAATQABATAAAgQAAADAAAHQAAAIAAALQAAALABAKQAAAJAAAFQABAEACAFQABAGAEAFQACAGAGAEQAFAFAKACQAJADALACQAMACAKAAQAJABAHAAQAZAAATgBQATgCAMgEQAKgFABgIQgBgGgFgEQgFgEgHgDQgHgCgFAAQgCAAgCAAQgCABgDABQgCABgFACQgFACgJABQgJACgLABQgLABgKABQgHAAgGAAQgTAAgJgJQgJgJAAgRQAAgCAAgFQAAgGABgHQAAgGAAgGQAAgGABgDQAWgCASgGQAQgGASgHQARgHAUgKQAEgCADgBQADgBACgBQAIgBACgBQADAAgBgDQAAgDgDgGQgEgGgGgGQgHgHgHgEQgIgFgJAAQgDAAAAABIgBABQABABABACQACABAAABQACADABABQABABAAACQAAACgCACQgBACgBABQgBACgHAGQgIAHgMAJQgNAIgNAJQgRAJgUAFgARfB/QAFgBAKgDQAIgCAMgFQALgFANgJQAQgLAKgPQAKgQAGgTQAGgUACgXQAFAAAIgBQAHAAAJAAQAIAAAHAAIALAAQADAAAFABQAGAAAGABQAGABAEAAQAFAAABAAQACAAACAAQADAAACgCQACgDAAgEQAAgGgHgGQgFgFgHgEQgIgDgFAAQAAAAgBAAQAAAAgBAAQgCAAgDACQgEABgBABQgDABgCAAQgDABgFAAQgGABgKABQgKAAgSABQABgIABgHQABgHACgCQABgCABgBQABgBgBgBQABgBgBgCQgCgBgDgDQgFgCgJgFQAFgCALgDQALgEARgGQABAAACgBQACgBABAAQABAAACABQADAAAAAAQADAAABgBQABgBAAgCQAAgDgEgEQgCgEgDgDQgDgEgFgEQgFgEgIgEQgHgDgLAAQgCAAgBAAQgBAAAAABQAAABABABQABABAAAAQABACABACQABABAAACQAAACgCACQgBABgBABQgNAJgSAIQgSAIgTAGQgSAGgRAEQgQAEgJACIAAADQAEAAADAAQADAAAFAAQAPAAAOgBQAOgBALgCQALgCAGgBQAGAEADAHQACAHABAHQABAIAAAGQgFAAgKACQgKABgOACQgMACgNABQgNACgKABQgLABgGAAQgFAAgFgBQgDgCgDgCQgCgBgCgBQgBgBgBAAQgBAAAAABQgBAAAAABQAAACADAGQAEAFAFAFQAGAGAGAFQAFAFAGAAQACAAABAAQABgBACgBQABAAACgBQADgBACgCQADgBABAAQAYgHATgDQATgCALAAQgBAFgBAJQgBAKgCALQgCALgDAJQgJAXgSARQgSARgWAMgAXrBGQgBgFAAgGQgBgHAAgGQAAgHAAgFQAAgFAAgCQAAgHAAgEQAAgEACgBQAAgCACgDQABgDAAgBQAAgCgDgBQgDgDgDgCQADAAAGAAQAHgBAHAAQAIgBAGAAQAGgBADAAQACAAAEgBQADgCADgCQADgCAAgDQAAgDgGgEQgFgEgGgCQgHgDgEAAQgBAAgEACQgEABgDACQgDACgBAAQgDABgIACQgIABgKACQgKABgKABQgKABgGAAQgKAAgIgCQgIgCgKgEQABAJAFAGQAFAHAFADQAFACABAAQABAAAEAAQADAAABAAQACgBAFAAQAFgBAFAAQAFgBAEAAQAEADABADQABAEAAAIQAAACAAAHQAAAIAAAKQAAAKAAAIQAAAIAAADQgCAAgGABQgFAAgGABQgGABgFABQgFAAgCABQgFAAgIABQgHAAgIAAQgHAAgFgBQgFgBgDgBQgBgBgCAAQgCgBgCgBQgDgBAAAAQABAJAFAHQAGAIAGAEQAFAFADAAQACAAADgCQADgBABgBQADgBAMgDQALgCAXgDQAXgCAkAAQADAAAHAAQAHAAAJAAQAIABAIABQACAAACAAQAEAAACAAQAFAAADgBQACgCABgCQABgCAAgBQAAgEgGgEQgFgEgGgDQgGgDgDAAQgBAAgGAAQgFABgFABQgFABgBAAQgEABgJABQgJAAgOABgAMRgbQABAPAFAJQAEAIAGAGQAGAFAFACQAFACABAAQACAAAFgBQAEgCAFgBQAEgBADAAQACgBAKgBQAKgBANgBQAMAAAOgCQAMAAAKgBQAKgBAEAAQAGAAAJABQAJABAJABQAJABAIABQAEAAAEABQAFAAACAAQAFAAADgCQADgCAAgEQAAgFgGgEQgFgGgHgEQgIgEgEgBQgCABgEAAQgEACgDAAQgEABgBAAQgHABgNAAQgOABgQABQgSABgQABQgQABgOAAQgNABgGAAQgOAAgJgDQgJgDgFgEQgHgFgEgEgAIjgpQABAAAFgBQAFgBAGgBQAHgCAHgBQAFgBADAAQAGgBAKgBQAKgBALgBQALgBAMgBQALAAAJAAQALAAADgCQADgCAAgGQAAgDgFgFQgFgFgHgEQgHgEgGAAQgEAAgDABQgDABgHADQgHACgLACQgLACgNACQgNABgMABQgLABgFAAQgKAAgGgBQgGgBgDgCQgCgBgDgCQgFgDgBAAQgCAAgBAAQAAABAAACQAAADABADQABAEAEAFQAEAFAJAIQAFADADACQADACADAAgAH9BUQACgBADgBQAEgBADgCQADgCACAAQABgBAOgDQAMgDAXgDQAWgDAdgBQAMAAAJAAQAIABAGAAQAGABAFAAQAGABAHABQAFABAHABQAIABAGAAQAEAAADgBQAFgBADgDQACgCAAgFQAAgFgEgEQgEgFgIgDQgGgDgIgCQgHgBgFgBQgCAAgCABQgBAAgDACQgEABgFAAQgFABgCAAQgRAAgOABQgOABgMABQgNAAgOACQgOABgSABQgDAAgFABQgGABgGAAQgGABgGAAQgGABgCAAQgDAAgFAAQgEAAgFgCQgFgBgDgDQgCgBgCgDQgEgDgBAAQgBAAgBABQAAABAAABQAAAEADAIQAEAHAGAHQAHAHAGAFQAGAFAGABgAEtgcQgNAAgIAIQgIAIAAAMQAAALAIAIQAIAIANABQAMgBAIgIQAIgIAAgLQAAgMgIgIQgIgIgMAAgAmBhiQABABADACQADABABABQAEADADAGQADAFACAMQABAMAAAWQAAAEAAAFQAAAFgBAGQAAAFgBADQgCAGgBADQAAACAAABQAAADACAFQACAEADAGQADAFAFADQAEAEAEAAQAFAAACgDQACgEABgKQAAgKAAgRQAAgDAAgHQAAgHgBgGQAAgHAAgDQAAgMABgIQABgIADgFQAAgCABgCQABgCAAgBQAAgDgHgFQgHgGgKgEQgJgEgJAAQgCAAgDAAQgDABgCAAQgDABAAACgAoohZQADACAFAEQAGAFAGAGQAGAGAFAJQACAFADADQACADAFAAQAFAAACgDQADgDAAgEQAAgFgFgIQgFgHgMgGQgMgGgTgBgAv1gbQABAPAEAJQAFAIAGAGQAFAFAFACQAFACACAAQACAAAFgBQAEgCAFgBQAEgBACAAQADgBAKgBQAKgBAMgBQANAAANgCQANAAAKgBQAKgBADAAQAHAAAJABQAJABAJABQAJABAHABQAEAAAFABQAEAAADAAQAFAAADgCQADgCAAgEQAAgFgGgEQgFgGgHgEQgIgEgEgBQgCABgEAAQgEACgDAAQgEABgCAAQgGABgOAAQgNABgRABQgRABgQABQgRABgNAAQgNABgGAAQgOAAgJgDQgJgDgGgEQgGgFgEgEgAzSB+QAFgBALgEQAMgEANgIQAOgIANgOQAMgOAKgVQADgIADgKQADgJACgOQABgLABgVQABgVAAggQAAgFABgDQABgCACgCQACgEABgCQABgCAAgCQAAgCgCgCQgCgCgDgCQgLgHgKgEQgJgEgJAAQgGAAgFACQgGABAAACQAAABABABQABAAABAAQAGADACABQADACACADQACADABAHQACAHABAKQABAJAAAKQABAKAAAIQAAAngHAcQgHAdgLASQgLATgNALQgNAMgMAHgA0FhiQABABADACQADABABABQAEADADAGQADAFACAMQABAMAAAWQAAAEAAAFQAAAFgBAGQAAAFgBADQgCAGgBADQAAACAAABQAAADACAFQACAEADAGQADAFAFADQAEAEAEAAQAFAAACgDQACgEABgKQAAgKAAgRQAAgDAAgHQAAgHgBgGQAAgHAAgDQAAgMABgIQABgIADgFQAAgCABgCQABgCAAgBQAAgDgHgFQgHgGgKgEQgJgEgJAAQgCAAgDAAQgDABgCAAQgDABAAACgA4yBxQAhgBAagMQAagLAUgUQAUgUAOgZQAOgYAIgcQADgKADgGQADgHAHgEQAGgEADgBQABgCAAgDQAAgCgEgFQgDgFgGgGQgFgFgFgDQgFgEgEAAQgBAAgCABQgDACgDACQgCABgCABQgDABgKACQgJACgNABQgNACgPABQgOACgMABQgNABgIABQgJAAgBAAQgHAAgHgCQgHgCgFgFQgBgBgCgDQgCgCgBgBQgBAAgBABQgBAAAAACQAAAKAEAIQAFAIAFAFQAFAFADACQAFAEACACQADABADAAQAAAAABAAQABAAABgBQABAAADgCQADgCACAAQAEgCAMgDQALgCAOgCQAOgDANgCQANgCAJgBQAJgBAAAAQACAAAAAAQABABAAACQAAAAgBAKQgCAJgEAPQgEAPgIAPQgLAZgSAWQgRAWgWAPQgWAQgbAJg");
	this.shape.setTransform(123,15,0.831,0.831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("ARfB8QAWgMASgRQARgRAKgXIAFgUIADgVIABgOIgdACQgUADgYAHIgDABIgFADIgDABIgDACIgDAAQgGAAgGgFIgLgLIgJgKIgDgIIAAgBIACgBIADABIACACIAHAEQAFABAFAAIARgBIAWgDIAagDIAYgDIAPgCIgCgOQAAgHgDgHQgDgHgFgEIgSADIgZADQgOABgOAAIgIAAIgHAAIAAgDIAZgGIAjgKQATgGARgIQATgIANgJIACgCIACgEIgBgDIgCgEIgBgBIgBgCIABgBIADAAQAKAAAIADQAHAEAGAEQAFAEACAEIAGAHQADAEAAADIgBADIgDABIgDAAIgDgBIgDABIgDABIgcAKIgQAFIANAHIAGAEIAAADIAAACIgCADQgCACgBAHIgCAPIAcgBIAQgCIAIgBIAEgBIAGgCIAEgCIACAAIACAAQAEAAAHADQAIAEAGAFQAGAGAAAGQAAAEgCADIgFACIgEAAIgGAAIgLgBIgLgBIgIgBIgLAAIgQAAIgQAAIgMABQgDAXgFAUQgFATgLAQQgKAPgQALQgNAJgLAFIgVAHIgNAEgAptB7IgIgKQgGgKgBgHIgCgKIAAgFIADgGIACgJIABgLIAAgWIACg1IABg3IgBgTQgBgHgDgFQgDgFgHgEIgFgEIgCgCIACgCQADgCALgBIAIABIAMAEQAHAEALAIIADADIAAADIgBAGIgCAIIgCAFIgBAGIgBAIIgBAOIAAAYQAdACAVAIQAUAIAKAKQALAJABAMIgCAHQgBAEgDACQgEADgFAAQgHAAgDgEQgFgDgFgJQgKgOgMgGQgKgJgLgEIgOgGIAAAjIABAzIAAAIIABALIAAALIAAAHQAAAPgFAFQgFAFgEAAIgBAAQgDAAgDgDgAlPB8QAMgHAOgMQAMgLALgTQAMgSAGgdQAHgcAAgnIgBgSIgBgTIgCgRQgCgHgCgDIgEgFIgJgEIgBAAIgBgCQgBgCAGgBIALgCQAJAAAKAEQAJAEALAHIAFAEQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIgBAEIgDAGIgCAEIgBAIIgBA1IgDAgIgEAXIgHASQgKAVgMAOQgNAOgNAIQgOAIgMAEIgQAFgAzTB8QAMgHAOgMQAMgLALgTQAMgSAGgdQAHgcAAgnIgBgSIgBgTIgCgRQgCgHgCgDIgEgFIgJgEIgBAAIgBgCQgBgCAGgBIALgCQAJAAAKAEQAJAEALAHIAFAEQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIgBAEIgDAGIgCAEIgBAIIgBA1IgDAgIgEAXIgHASQgKAVgMAOQgNAOgNAIQgOAIgMAEIgQAFgA4yBvQAbgJAWgQQAXgPARgWQARgWALgZQAIgPAEgPIAGgYIABgKIgBgDIgBAAIgKABIgWADIgbAFIgZAEIgQAFIgFACIgDACIgCABIgCAAQgDAAgCgBIgIgGIgIgHQgFgFgFgIQgDgIgBgKIACgCIABgBIADADIAEAEQAFAFAGACQAHACAHAAIAKAAIAVgCIAbgDIAbgDIAWgDIAOgDIADgCIAGgEIADgBQAEAAAFAEIAKAIIAJALQAFAFAAACQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABIgJAFQgGAEgDAHQgEAGgDAKQgIAcgNAYQgPAZgTAUQgVAUgZALQgaAMgiABgAgBBnIgVgCIgVgFQgJgCgGgFQgFgEgDgGQgEgFgCgGIgCgJIAAgOIgBgVIAAgTIAAgKIAAgzQgBgTgBgKQgBgJgDgFQgDgEgFgCIgCgBIgDgCIgCgBIAAgBIAAgBQAAAAAAAAQAAAAABgBQAAAAABAAQABgBAAAAIAKgBQALAAALAFQALAEAHAGQAHAGAAAEIgBAFIgDAHIgBAFIgDAUIgCAYIgCAVQAUgFARgJIAagRIATgQIAJgIIACgDQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIgBgDIgDgEIgCgCIgCgDIABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAJAAAIAFQAHAEAHAHIAKAMQAEAGgBADQABAAAAABQgBABAAAAQAAABAAAAQgBAAgBAAIgKACIgFACIgHADIglARQgRAHgRAGQgSAGgWACIAAAJIgBAMIAAANIAAAHQgBARAJAJQAJAJAUAAIANAAIAUgCIAUgDIAOgDIAHgDIAFgCIAEAAQAFAAAHACQAHADAFAEQAFAEABAGQgBAIgLAFQgLAEgTACQgUABgYAAIgQgBgAWCBiQgFgEgGgIQgFgHgCgJIAEABIAEACIADABIAHACQAGABAHAAIAPAAIANgBIAHgBIALgCIALgBIAIgBIAAgLIAAgSIAAgSIAAgJIgBgMQgBgDgEgDIgJABIgKABIgIABIgDAAIgFAAIgGgCQgFgDgGgHQgEgGgBgJIASAGQAHACALAAIAQgBIAUgCIASgDIALgDIAEgCIAHgDIAFgCQAEAAAHADQAGACAFAEQAFAEABADQgBADgCACIgGAEIgHABIgIABIgOABIgOABIgJAAIAGAFQADABAAACIgCAEIgBAFIgBAFIAAALIAAAHIAAAMIAAANIABALIAXgBIANgCIAGgBIAKgCIAHAAQACAAAHADQAGADAFAEQAGAEAAAEIgBADIgDAEQgDABgFAAIgGAAIgEAAIgRgCIgPAAIgKAAQgkAAgXACQgXADgLACIgPAEIgEACIgFACQgDAAgGgFgAHxBOQgGgFgHgHIgKgOQgDgIAAgEIAAgCIACgBIAFADIADAEQAEADAFABIAJACIAIAAIAIgBIAMgBIAMgBIAIgBIAhgCIAagCIAagCIAegBIAIgBIAJgBIAEgCIAEgBIAMACIAPAFQAGADAFAFQAFAEAAAFQAAAFgDACQgDADgFABIgHABIgOgBIgMgCIgNgCIgLgBIgOgBIgVAAQgdABgXADQgVADgNADIgPAEIgFACIgHADIgFACQgFgBgHgFgAliAhQgFgDgDgFIgFgKIgCgIIAAgDIAEgJIABgIIAAgLIABgJQgBgWgBgMQgCgMgDgFQgDgGgEgDIgEgCIgDgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABgBIAFgBIAFAAQAJAAAKAEQAJAEAHAGQAHAFAAADIgBADIgBAEQgCAFgCAIIAAAUIAAAKIAAANIAAAKIAAAbQgBAKgBAEQgCADgFAAQgFAAgEgEgAzmAhQgFgDgDgFIgFgKIgCgIIAAgDIAEgJIABgIIAAgLIABgJQgBgWgBgMQgCgMgDgFQgDgGgEgDIgEgCIgDgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABgBIAFgBIAFAAQAJAAAJAEQAKAEAHAGQAHAFAAADIgBADIgBAEQgCAFgCAIIAAAUIAAAKIAAANIAAAKIAAAbQgBAKgBAEQgCADgFAAQgFAAgEgEgAEYATQgIgIAAgLQAAgMAIgIQAIgIANAAQAMAAAIAIQAIAIAAAMQAAALgIAIQgIAIgMABQgNgBgIgIgAMsASQgGgCgFgFQgGgGgFgIQgEgJgBgPIALAJQAFAEAJADQAJADAOAAIATgBIAegBIAhgCIAfgCIAUgBIAFgBIAHgCIAGgBQAFABAHAEQAHAEAGAGQAFAEAAAFQABAEgEACQgDACgFAAIgHAAIgJgBIgQgCIgSgCIgPgBIgOABIgWABIgaACIgXACIgMACIgHABIgJADIgHABIgGgCgAvaASQgGgCgFgFQgGgGgFgIQgEgJgBgPIALAJQAFAEAJADQAJADAOAAIATgBIAegBIAhgCIAfgCIAUgBIAFgBIAHgCIAGgBQAFABAHAEQAHAEAGAGQAFAEAAAFQABAEgEACQgDACgFAAIgHAAIgJgBIgQgCIgSgCIgPgBIgOABIgWABIgaACIgXACIgMACIgHABIgJADIgHABIgGgCgAIdgrIgHgFIgOgNQgEgFgBgEIAAgGIAAgDIACAAQABAAAFADIAEADQAEACAGABIAQABIARgBIAYgCIAYgEIARgEIALgEIAHgBQAGAAAHAEQAIAEAEAFQAFAFAAADQAAAGgDACQgEACgKAAIgVAAIgWACIgVACIgQACIgIABIgOADIgLACIgGABQgDAAgDgCgAoEgxIgFgIQgFgJgGgGIgLgLIgJgGQAUABALAGQAMAGAFAHQAFAIAAAFQAAAEgCADQgDADgEAAQgFAAgDgDgAnthUIgFgHQgHgKgJgHQgIgHgMgFIAGgBIAGAAQALAAAKADQALAEAGAHQAHAGAAAJQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_1.setTransform(123,15,0.831,0.831);

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


(lib.何も阻む物が無い = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AgOAaQgHgEgEgHQgEgHAAgIQAAgHAEgHQAEgHAHgEQAHgEAHAAQAIAAAHAEQAHAEAEAHQAEAHAAAHQAAAIgEAHQgEAHgHAEQgHAEgIAAQgHAAgHgEgAgJgRQgFADgDAFQgDAEAAAFQAAAIAGAGQAHAHAHAAQAJgBAGgGQAGgGAAgIQAAgIgGgGQgGgGgJAAQgEAAgFADg");
	this.shape.setTransform(213.5,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("AhHBHQALgUAHgRQAIgRAEgOIAGgVIgEAAIgHABIgEABIgGABIgGAAIgCgTIAOAAIAKgBIAKgBIADgSIACgWIAXAGIACABIAAACIAAABIgBACIgCACIAAAEIgBADIgBAHIgCAGQAHgBAGgDIAPgHIAAAVIgTAHIgOADQgHAYgJAaQgJAZgMAYgAAQBMQgHgBgHgCQgFgDgEgGQgEgGAAgKIAAgEIABgHIARACIgBADIAAAFIAAACIACADIAIADIAJACIAGAAQAMAAAIgCIAMgCIADAVIgMACIgWABIgQgBgAAKgNIAPgBIAJgBIAKAAIALAAIAHABIAAARQgKgBgNAAIgdACgAAkgyIgJgIIAIgIIAJAIIAHAIIgIAIIgHgIgAA5g7IgJgIIAJgJIAJAIIAGAIIgJAIIgGgHg");
	this.shape_1.setTransform(199.2,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("AhTBFQAPgCANgFQAOgGAJgLIgTAAIAAhJIBpAAIAABJIgcAAIAAALQAAAEACABQABACAFAAIAUAAQAEAAACgCQACgDABgEIACgKIATALIgDAOQgCAHgEAEQgFAEgGAAIgtAAQgIAAgEgEQgEgEAAgGIAAgZIgbAAIAOAFIACABIABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgFAAQgCAEgGAFQgGAGgMAHQgMAGgSAGgAgdAdIA9AAIAAgHIg9AAgAgdAKIA9AAIAAgGIg9AAgAgdgGIA9AAIAAgGIg9AAgAhSgLIAAgoIAhAAIgFgKIgHgKIASgLIAJALIAIAMIgPAIIAlAAIgEgKIgFgJIgFgKIASgJIAGAKIAEAJIAFALIgTAIIAbAAIAJgQIAHgRIASAGIADABIACACIACACQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgFACIgDAFIgEAIIgDAFIAlAAIAAAmIgXAAIAAgVIh4AAIAAAXg");
	this.shape_2.setTransform(179.1,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFFF").s().p("AhVBKQAGgHAEgIIAGgNIAFgNIATAJIACACQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAABIgBAAIgDABIgBAAIgHASQgFALgIAJgAgWBVIgHgBQgEgCgCgCQgDgCAAgEIAAgnIAVABIADABIABABIAAABIgCABIgBABIAAABIAAARQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAEACIADAAIAXAAIAGAAQADgBADgFQACgDABgJIASALIgBAIQAAAEgEAGIgDAEQgCACgEABQgEACgIAAgAA5A7QgGgIgGgFIAUgNIAGAKIAJANIAIANIgTAMQgGgNgGgJgAgBAwIgJgLIANgLIAKAMIAIAKIgRAKIgFgKgAhXAZIAIgQQAEgJACgJQACgLAAgSIAAgNIgBgOIBPAAIgBgKIAAgJIAUABIAEABQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIgCACIgDACIAAADIAAAFIAAADIAWAAIgFgEIgGgHIARgJIAHAHIAHAIIgJAFIAaAAIAAAVIg5AAIAFASIAFALIAGgNIAHgPIASAJIADACIABABIgBABIgCAAIgBABIgBAAQgDAJgFAHIgKANIAGAEQADADADABQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBIACgFIAAgFIASAJIgBAHIgEAKQgCAFgDAEQgDADgFAAIgGgBQgFgBgGgDQgGgEgIgIIgJAKIgKAHIgQgNIghAAIAAAGIgRAAIAAgpIA0AAIAAAhIAIgGQAFgEAIgIIgGgIQgDgGgCgJQgDgJgCgMIg9AAIAAAbIgDATQgCAJgDAJQgDAHgFAIgAgeAGIAWAAIAAgJIgWAAgAgtgXIAAgPIAyAAIAAAPg");
	this.shape_3.setTransform(159.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FFFF").s().p("AgeBFIAPgFQAIgDAIgGQAJgGAIgKQAHgIAEgKQAEgJAAgLQAAgHgEgFQgCgEgFgCIgHgCQgGAAgJADIgPAGIgSAIIgNAFIgJgWIAOgFIAUgHIAVgGQALgDAKAAIAHABIAKADQAFACAEAFQAGAHABAHQACAIAAAHQABANgGAPQgFAPgKAMQgIAKgKAGQgJAHgJAEIgOAGgAAMg6IgRgCIgVgCIgBgZIAUAEIARACIAUABIgCAXIgQgBg");
	this.shape_4.setTransform(139,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FFFF").s().p("Ag0BAIgGgEQgLgLgFgRQgFgTAAgaIABgWIACgRIADgNIAWAGIADABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEABIgCANIgBANIgBATQAAASADAKQACAJAEAEQADAEACAAQADAAACgEIAGgJIAEgKIAEgIIARAPIgLAVQgGAKgGAHQgHAGgIABQgEgBgEgCgAAwgDQgFgPgGgLQgFgMgGgHIAVgKIAMASQAGAKAGARQAGAOADAXIgYAHQgDgVgFgNg");
	this.shape_5.setTransform(119.5,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FFFF").s().p("AgOBRIgOgCIgKgFQgLgGgFgJQgFgJAAgKQAAgMAGgJQAGgJAJgHQAJgFAMgHIgIgJIgEgJIgCgFIgCgIIgDgOIgEgXIAagEIAAAOIACARQABAJADAHIAFAJIAFAFIAOgHIAKgFIALgFIAPgHIAHAZIgeAKIgaAJIgQAKIgKAHQgGAFgEAFQgEAGAAAGQAAAIAFAEQAFAFAIADQAIACALAAQAOAAAPgDQAQgCAPgEIAAAZIgXADQgPACgTAAIgRgBg");
	this.shape_6.setTransform(99,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FFFF").s().p("Ag0BAIgGgEQgLgLgFgRQgFgTAAgaIABgWIACgRIADgNIAWAGIADABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEABIgCANIgBANIgBATQAAASADAKQACAJAEAEQADAEACAAQADAAACgEIAGgJIAEgKIAEgIIARAPIgLAVQgGAKgGAHQgHAGgIABQgEgBgEgCgAAwgDQgFgPgGgLQgFgMgGgHIAVgKIAMASQAGAKAGARQAGAOADAXIgYAHQgDgVgFgNg");
	this.shape_7.setTransform(79.5,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FFFF").s().p("AgYBEQgBgIgDgJIASgEIAFAQQADAIAAALIgUAFQAAgKgCgJgAhTBJQAJgHAHgIQAIgIAFgJIAQANIACABIAAACIgBABIgBAAIgDABIgBABIgPASIgKAJgAA2BDIgLgLIAPgNIAOANIANAQIgRAOQgHgMgHgHgAAMBBIgFgNIARgFIAEAHIAFALIADANIgTAGQgCgLgDgIgAhLAlIAAgTIAWAAIAAgXIgdAAIAAgTIAdAAIAAgWIgHAGIgGAGIgUgKQANgJAJgLQAJgLAFgLIAXAHIACAAIABACIAAABIgEACIgDACIgDAEIBwAAIAAATIgUAAIAAAZIAdAAIAAATIgdAAIAAAXIAWAAIAAATgAAaASIAMAAIAAgXIgMAAgAgCASIAKAAIAAgXIgKAAgAghASIAMAAIAAgXIgMAAgAAagYIAMAAIAAgZIgMAAgAgCgYIAKAAIAAgZIgKAAgAghgYIAMAAIAAgZIgMAAg");
	this.shape_8.setTransform(59,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FFFF").s().p("AhXBEIAQgZQAGgNAFgNIAJgaIgKADIgIAEIgJACIgHgWIAMgCIAMgCIAOgDIABgMIABgMIAAgOIAYADIADABQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgCABIgBACIgBADIgBAHIgBAFIgCAIIAHgBIAIAAQAKAAAFAEQAFAEADAGQADAHABAGQABAIgBAFQAAAOgCANQgBAMgFAKQgDAJgFAFQgBADgFACQgFADgJAAIgJAAIgHgBIgEgWIAFABIAIABIAIgBQAEgBACgDQADgFACgGIAEgNIACgNIAAgJQAAgKgDgEQgFgFgJAAIgGAAIgEABIgKAiQgGAQgHAOQgHANgIAOgAAcAEQAFgBADgBQAEgBAAgCQAAgEgHgMQgHgLgQgTIAQgLIAKAMIANAQQAFAKAFAJQAEAJAAAHQAAAFgDAEQgCADgFACIgIADIgGABgAAxgwIgJgIIALgIIAIAIIAIAJIgLAIIgHgJgABGg8IgIgIIAKgIQAJAHAHAKIgLAIIgHgJg");
	this.shape_9.setTransform(40.3,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FFFF").s().p("AgXBGIAMgJQAHgGAGgIQAIgKAJgNQAJgNAEgLIAHgSIACgOIgHAAQgGARgGAOQgHAMgHALQgIALgHAJIgRgKIAIgJIAJgKIAIgOIAGgMIAEgKIACgJIgFAAIgIAOIgDAHIgTgJIAEgHIAFgFIgNAAIAAAfIAIgDIAIgEIAAATIgEACIgFABIgHADIAABEIgVAAIAAg9IgHADIgFADIgEABIgCABIgDAAIgDADIgCACIgBgBIAAgCIgEgXIALgDIAJgDIALgCIAAgjIgMAAIgDALIgCAJIgUgHIAEgNIAFgRIABgXIAWADIACABIABABIAAABIgBABIgDACIgBABIAAADIgBADIAAADIAIAAIAAgeIAXABIACAAIABABIgBACIgBABIgCABIgBABIAAAXIARAAIAAALIAFgLIADgMIADgSIAXADIACABIAAABIgBACIgBABIgCABIgBADIgCAGIgCAGIgCAHIBFAAIAAAbIAAAbIgCAcIgEAXQgCAKgEAGQgEAHgIADQgIADgOABIgKgZIAKABIAFAAQAFAAACgCQADgCACgEQACgEACgHIACgWIABgVIAAgdIgBAAIgEAVQgDALgHAQQgIARgNASQgNASgSAQg");
	this.shape_10.setTransform(18.8,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FFFF").s().p("AgYBRIgMgDQgGgCgFgDQgEgEAAgHIABgGIAAgGIgGgCQgDgBgEgDQgEgDgDgGQgDgGAAgJQAAgMAEgHQAEgEAFgDQAGgDAGgCIAIAAIABgIIAAgGIgOACIgQAAIgDgVIANAAIALAAIAKgBIAAgWIgBgMIAXACIAEABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIgBACIgBABIgCABIAAACIgCAUIAOgCIAIgEIAJgDIAAAVIgQAFIgPADIgBAIIAAAKIAAALIACACQABACAAAEQAAAFgCAFIgEAMIgEAMIgCAKQAAAEAEACQADACAKAAQARAAAKgCQAKgCADgEQAEgEAAgFIgCgKQgBgGgGgMIATgGQAGALACAIQADAIABAGIAAAGQAAAJgDAGQgEAGgEACIgGADIgRAEIgUACIgPABIgLAAgAg0AJQgDAEAAAGQAAAEABACQABABAAAAQAAABABAAQAAAAABABQAAAAABAAIADABQADAAACgCIAEgHIACgIQAAgDgDgDQgCgCgDAAQgEAAgEAFgAAzgeIgKgJIgOgKIANgSIASAPIAQAQIgOAQIgJgKg");
	this.shape_11.setTransform(-0.5,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FFFF").s().p("AhVBVIAAipIA+AAIAMAMIgDAHIgEAJIgIAOIgFAKIgDAGIgDAFIAIALIAHAPQADAKABAKIgBAIQgBAFgDAGQgDAGgGAEQgGAEgHABIgKABIgJgTIAAAsgAhAAlIADAAIAEABIAFgBIAFgDQADgCABgDQACgDAAgEQgBgJgDgJIgHgNIgIgLIAUgpIgYAAgAgmBSIAAgVIAcAAIAAiRIBTAAIAACRIANAAIAAAVgAAIA9IAsAAIAAgcIgsAAgAAIAMIAsAAIAAgZIgsAAgAAIgkIAsAAIAAgaIgsAAg");
	this.shape_12.setTransform(-20.4,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66FFFF").s().p("AgIBTQgIgCgHgFQgIgEgFgJQgEgJAAgNIAAgNIACgKIgMgDIgNgEIADgUIALAEIAIACIAIACIADgLIAGgQIgLgCIgJgCIgKgCIACgXIALAEIAKADIANADIAFgPIAEgLIADgKIAVAIIADACQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgFABIgDAHIgEAJIgDAHIAJABIAIAAIAJAAIgFAVIgGAAIgJAAIgMgBIgDALIgFANIAGABIAFAAIAMAAIALgBIgEAVIgHABIgMAAIgJAAIgHgBIgCAJIgBAKIABAJQACAEADAEQAFAEAFABIAHABQAJAAAIgDQAJgCAFgHQAGgHAAgMQAAgHgCgGIgDgKIgEgHIASgIIAHAJIAEAOQADAIAAALQgBANgFAJQgFAJgIAGQgKAGgKACQgKADgJAAIgOgBg");
	this.shape_13.setTransform(-40.9,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FFFF").s().p("Ag+BWIAAhgIgBABIgBACIgDADIgDADIgTgLIAIgKIAJgLIAKgPQAHgNADgJIAEgOIAUAGIAEACIABACIgBABIgBABIgCACIgBABIgGAOIgGAKIAEAEIAAACIAAACIgBABIgCACIgBADIAAB1gAAdA+IAIABIAFAAQAFAAACgCQADgCAAgDIAAhpIhLAAIAAgWIBxAAIAAAWIgRAAIAABzQAAAIgDAEQgDADgJACIgUACgAgZAzIAAhSIA9AAIAABEIgoAAIAAAOgAgEAQIATAAIAAgaIgTAAg");
	this.shape_14.setTransform(-61.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-16.3,310.8,34.3);


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


(lib.それは力が高まり = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AgJAHQgMgLgPgNIATgTQAQAJAMANQAOANAMARIgaAVQgKgQgKgOg");
	this.shape.setTransform(121.9,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("AgIBVQAHgFAHgJQAKgKAKgSQAHgQAEgRQAEgPAAgRIgBgJIgBgSIgBgYIgDgbIAeAAIACAAQABABABAAQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBAAIABAFIAAAGIABAEIACAbIABAaIgBATQgBAJgDAPQgDAOgHAPQgJAVgJAMIgRATgAg6AqQgFgQgDgRQgDgPAAgRIABgeIADgZIADgTIAcABIACABQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIgCACIgCACQgBACgDAIIgDATIgBAVIgBARIABAIIABAIIAGgQIAIgUIASALIgPAjQgIAUgGASg");
	this.shape_1.setTransform(104.1,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("Ag+BcQgPgJAAgPIABgJQACgFAGgHQAFgGAMgEQAMgEAVABIAHAAIAAgYIgHAAIgKABIgJAAQgRAAgJgGQgJgFAAgFQABgGAEgGIALgLIALgIIAPAMQgEACgCADQgDACAAACQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAHABIAJAAIAIgBIAAgfIgZABIgUACIgUACIAAgbIAYAAIATgBIAVAAIgBgiIAdADIAEACIACABIgBACIgCACIgCACIgCADIAAAEIAAANIAUgBIAPAAIANgBIAQgBIgBAaIgmAAIgaABIAAAdIATgCIAQgDIATgDIAAAZIgMACIgRACIgYADIAAAJIABAJIAAALIAUAGIAUAJIAXANIgQAYIgPgKIgOgIIgRgHQAAANgDAHQgDAIgJAEQgGAEgQAAQgagBgPgIgAgpA8QgGADAAAFQABAEAEACIAIACIAGAAQAIAAAEgBQAEgCAAgEIABgLIgFgBIgHAAQgMAAgGADg");
	this.shape_2.setTransform(79.2,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFFF").s().p("AA6BtIgLgZIAEAAIAEABIAFAAQAGgBACgBQABgBAAgGIAAg4IiKAAIAABWIgcAAIAAhqIDDAAIAABZQgBAJgHAGQgGAFgNAAgAgtBZIAAg6IBeAAIAAAxIhFAAIAAAJgAgUA9IAsAAIAAgNIgsAAgAg7gIIAAgxIB3AAIAAAxgAgfgaIA/AAIAAgOIg/AAgAhphDIAAgXIBbAAIAAgSIAdADIADAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIgBABIgCACIgCABIAAACIAAAHIBaAAIAAAXg");
	this.shape_3.setTransform(54.1,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FFFF").s().p("AhtBUQALgQAJgPQAIgPAGgQIALghIgMAEIgLAEIgLADIgJgcIAQgDIAOgCIASgEIABgPIABgOIAAgTIAeAFIAEABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAACIgCABIgDACIgBADIgBAJIgBAIIgCAJIAIgBIALgBQAMABAGAEQAHAFAEAIQADAIABAJIABAPQAAATgCAQQgDAQgFALQgEAMgGAGQgCAEgHADQgHADgLAAIgKgBIgIAAIgHgbIAIABIAJABQAGAAAEgCQAEgBAEgEQAEgGADgHIAEgRIACgQIAAgMQAAgMgEgGQgFgFgLAAIgIAAIgGABQgGAYgHATQgGAUgJARQgIARgLARgAAjAFIAKgDQAEgBAAgDQAAgFgIgOQgIgPgUgXIAUgOIAMAOIAQAVQAHAMAGALQAFAMAAAIQAAAHgEAFQgDAEgFADIgKADIgJACgAA9g9IgLgLIAOgKIAKALIAJALIgNAKIgJgLgABXhMIgJgKIANgJQAKAIAJANIgPAKIgIgMg");
	this.shape_4.setTransform(30.5,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FFFF").s().p("AhmBTQAbgMAQgOQAQgQAIgRQAJgRAEgOQADgQABgOIhIAAIAAgdIBJAAIAAgZIgBgQIAaADIAIABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIAAABIgCABIgCAEIgCACIgBAIIAAALIgBAIIBcAAIgBAzQgBAYgEAgQgCAXgGANQgGANgNAFQgNAGgXABIgMgfIAKABIAJABQAKgBAFgDQAFgDACgFIADgOQAEgeABgUIABgiIg+AAQgCATgEATQgEATgJAUQgJATgRASQgQARgYANg");
	this.shape_5.setTransform(3.6,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FFFF").s().p("AheA7QgCgUAAgUQAAgbAEgdQAEgeAIgdIAXAKIAEACQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAIAAABIgBAAIgDACIgCAAIgCAFIgCAIIgBAFIgDAOIgDAVIgDAYIgBAQIAAAGIABAKIABALIAKgQIAQALIgHAPIgJAUQgDALgCAKIgWAEQgGgTgCgTgAAGBgQgGgBgIgDQgJgDgGgIQgHgHAAgNQAAgMAGgHQAGgHAKgDQAIgEAMAAIAIAAIAHABIgBgYIgCgPIgBgQIgWACIgVAAIAAgZIAJABIAMAAIAMAAIALgBIAAgNIAAgJIAAgKIABgPIAcAFIAFABIABACIgCACIgCACQgCAFAAAHIgDATIAJgCIAMgDQAGgDAFgDIAAAbQgIADgJACIgPADIABAXIABASIACAXIALAFIANAIIATALIgOAZQgHgGgGgFIgOgJQAAAKgCAHQgEAHgIAFQgJADgQABIgLgBgAgCA1QgFADAAAFQAAAEAFAEQAEACALAAQAIAAADgCQAEgBABgFIAAgKIgIgCIgKAAQgJAAgEACg");
	this.shape_6.setTransform(-20.1,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FFFF").s().p("AgzAsIgHAKIgGAJIgIAMIgagRIAQgQIAPgTIAQgXIABgUIgMAEIgKAEIgKADIgNgbQAPgCAMgDQALgEAHgCIABg2IAZACIAFABQAAABAAAAQAAAAABAAQAAAAAAABQAAAAAAABIgCACIgCACIgCAKIgBAXIAQAPIgGAMIAKgJQAFgFAHgFIANgJQAIgDAGgBQAHAAAFAEQAHADAEAHQAEAGAAAKIAAAFIAAALIgDAXIgCASIgBALIAAAGQAAALADACQACAEAFAAQAFAAAHgFQAHgEAHgKIAIAcQgIAJgLAHQgKAHgMgBQgMABgFgGQgGgFgDgIQgCgHgBgGIgBgJIABgNIACgUIACgSIAAgOIAAgHQgBgEgDgCQgCgDgDAAQgIAAgJAGQgHAHgIAKIgSAUIAAAgIABAdIABAdIgcACg");
	this.shape_7.setTransform(-45.8,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FFFF").s().p("AAiBsQgJgCgKgDQgKgEgHgGQgKgIgFgJQgFgJAAgLIAAgIQABgGAEgJQADgKAIgKQAGgLAOgJIgcAGIgeAEIgcAGIgFABIgFACIgFgaIAKAAIAPgCIAPgCIAJgCIAKgIIAPgOIAPgTIAQgSIghAFIgWABIgLgZIANABIAPAAQATAAAQgDQATgCASgGIANAVIgMAKIgQAPIgSARIgPARIALgCIASgDIALgDIARgEIAQgDIALgDIAAAbIgTAEQgKADgLAGQgLAGgMALQgJAJgGAKQgFAJAAAMQAAALAGAGQAFAHAIADQAIADAJABIAOAAIgFAbIgQgBg");
	this.shape_8.setTransform(-71.1,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.6,-12.2,237.5,41.8);


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


(lib.CircleExtention = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.TealCircle("synched",0);
	this.instance.setTransform(384.1,240.1,0.087,0.087,0,0,0,180.1,180.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:179.8,regY:179.8,scaleX:2.97,scaleY:2.97,x:383.4,y:239.4},11,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367.1,223.1,33.9,33.9);


(lib.TextAnimTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 何か
	this.instance = new lib.Nanika("synched",0);
	this.instance.setTransform(195.2,74.9,2.295,2.295);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({scaleX:1,scaleY:1},3).wait(4).to({startPosition:0},0).to({scaleX:0.22,scaleY:0.22,x:509,y:47},5).wait(1));

	// とは
	this.instance_1 = new lib.Toha("synched",0);
	this.instance_1.setTransform(174.3,71.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(5).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.6,scaleY:0.6,x:-103.5,y:85.3},4).to({startPosition:0},4).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:456.2,y:18.8},5).wait(1));

	// つ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD3CD4").s().p("AptNfQJfg3G1ilQG1iiDuj7QDuj8ADlAQAAkdiDiFQiFiGkWABQj9AAoWBwQoUBxsBDTQiVArhcAXQheAVg/AIQg+AIg6AAQg8AAgygIQgxgIg3gQIiWs1QBxA3BJAUQBMAWBWAAQAtAAAvgGQAsgFBMgNIDSgtQFEhGFPg/QFRg/E4gvQE1gxD2gaQD5gdCPAAQJsAFFcFKQFcFJAGJKQACHGkFFYQkDFdoZEDQkqCNlKBkQlJBjlnA5g");
	this.shape.setTransform(389,153.8);

	this.instance_2 = new lib.トゥイーン1("synched",0);
	this.instance_2.setTransform(401.9,105.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.トゥイーン18("synched",0);
	this.instance_3.setTransform(418.2,17.4,0.114,0.114,0,0,0,0.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[]},11).to({state:[{t:this.shape}]},6).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({_off:true,regX:0.9,regY:0.5,scaleX:0.11,scaleY:0.11,x:418.2,y:17.4},5).wait(1));

	// か
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CE904").s().p("As0c4Qizhni8jSIC6onQCGB9BqBJQBpBMA0AAQA2gDA4h8QA7h7AwjGQAyjGAfjkQAgjkAAjQQACingphEQgnhFhiACQgWAAgTADQgUAAgtAHIg2AKIhCAKQgfACgoAIQjIJujtIbQjxIakBGUIouljQCTjSCVkQQCTkNCCkmQCCkkBfkSQjLAsiwAkQiwAjhxATIiCppIFyg/QCJgWBdgRIC1geQBbgPCEgTQBOkXBDkpQBCklAnj/IKLBzQhCEwg5DaQg4DagzCtQBJgHAqgCQAsgFAqAAQF0AAC4DXQC4DYgBG7QABEcgvEyQgsE1hPEQQhOEShiC6QhiC6iCBiQiEBiiRAAQioAAixhngAY0KrQgUgxgYg0Qh7APiCAdQiBAbh5AiIjwmRQB+g2BNggQBNgiBCgbICchAQiGj1i4kDQi6kEjVjpIHiktQGSGBElGbQEmGbC4G1IpfGMIguiGg");
	this.shape_1.setTransform(395,18.5);

	this.instance_4 = new lib.トゥイーン22("synched",0);
	this.instance_4.setTransform(383.9,0.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.トゥイーン23("synched",0);
	this.instance_5.setTransform(388.4,2.7,0.114,0.114,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},8).to({state:[]},4).to({state:[{t:this.shape_1}]},17).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_5}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({_off:true,regX:0.5,regY:0.5,scaleX:0.11,scaleY:0.11,x:388.4,y:2.7},5).wait(1));

	// ん
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("EAKdAiaQnxgCkCkBQkGkCgDnmQAAh7AQiJQARiFAkilQhsBVh9BnQh+BnivCVQivCTj/DdQhAB7g5BqIhzDdQg8BvhQCQIpclMQH+umHev2QHbv1GxwnIKvEtQjbHkinFwQinFyiTE3QiTE3iYExQA5gxBdhLQBahKB4hlICTh5IIiE6QgsEYgUDHQgVDGABCaQgDETBSB2QBVB5C2gCQDbACC5haQC5haC/jQQC/jTDnlrIFgK/QlYHzl9DvQl4Dtm+AAIgLgBg");
	this.shape_2.setTransform(138.1,112.6);

	this.instance_6 = new lib.トゥイーン24("synched",0);
	this.instance_6.setTransform(131.9,101.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.トゥイーン26("synched",0);
	this.instance_7.setTransform(345.8,11.3,0.114,0.114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},4).to({state:[]},4).to({state:[{t:this.shape_2}]},21).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_7}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).to({_off:true,scaleX:0.11,scaleY:0.11,x:345.8,y:11.3},5).wait(1));

	// と
	this.instance_8 = new lib.TO_in("synched",0,false);
	this.instance_8.setTransform(-57,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},4).wait(25).to({_off:false,startPosition:5},0).wait(7).to({startPosition:5},0).to({regX:0.5,scaleX:0.11,scaleY:0.11,x:311.8,y:-4.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.6,-695,925.2,1391.2);


(lib.Aphorism_Nietzsche = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// それは力が高まり、 
	this.instance = new lib.それは力が高まり("synched",0);
	this.instance.setTransform(1191.4,92,4.264,4.264,0,0,0,0.2,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({x:-74.9},6).to({regX:0,regY:0,scaleX:1,scaleY:1,x:417.2,y:132.8},5).wait(17));

	// 何も阻む物が無いという感覚だ。 
	this.instance_1 = new lib.何も阻む物が無い("synched",0);
	this.instance_1.setTransform(1316.6,239.5,3.094,3.094,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:-124.6},6).to({regY:0,scaleX:1,scaleY:1,x:335,y:201.7},5).wait(14));

	// フリードリヒ・ニーチェ
	this.instance_2 = new lib.ニーチェ("synched",0);
	this.instance_2.setTransform(1630.9,21.9,9.978,9.978,0.1,0,0,0.8,-0.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({scaleX:7.55,scaleY:7.55,rotation:6.6,x:-1369.2,y:-149.4},5).to({startPosition:0},1).to({regX:0.1,regY:0.1,scaleX:5.14,scaleY:5.14,rotation:13.2,x:-726.2,y:-188.2},4).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:277.7,y:273.1},4,cjs.Ease.get(1)).wait(9));

	// TONKATSU
	this.instance_3 = new lib.TextAnimTest("synched",0,false);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.6,-695,925.2,1391.2);


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
	this.initialize(mode,startPosition,loop,{"in":0,"stop":37});

	// ShareButtons_in
	this.instance = new lib.ShareButtons_in("synched",0,false);
	this.instance.setTransform(412.1,205.9,0.4,0.4,0,0,0,914.5,236.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:236.2,x:385.6,y:283.2,startPosition:15},15).wait(53));

	// レイヤー 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(5,1,1).p("Egv/gifMBf/AAAMAAABE/Mhf/AAAg");
	this.shape.setTransform(384,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.3,-123.8,619.4,587.1);


(lib.Tunnel = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 9
	this.instance = new lib.Polar_multi("synched",0);
	this.instance.setTransform(419.9,255.5,0.017,0.009,21.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({scaleX:0.47,scaleY:0.26,rotation:21.8,x:419.8,y:255.9,alpha:0.602,startPosition:29},29,cjs.Ease.get(1)).to({regX:0.3,regY:0.4,scaleX:0.48,scaleY:0.26,rotation:22,y:255.8,alpha:0,startPosition:33},4,cjs.Ease.get(-1)).wait(1));

	// MainText_in
	this.instance_1 = new lib.MainText_in("synched",0,false);
	this.instance_1.setTransform(384,225.3,1,1,0,0,0,384,54.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.MainText_stay();
	this.instance_2.setTransform(384,59.1,1,1,0,0,0,384,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},26).to({state:[{t:this.instance_1}]},21).to({state:[{t:this.instance_2}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(21).to({startPosition:21},0).to({_off:true,y:59.1,mode:"independent"},12,cjs.Ease.get(-1)).wait(1));

	// MainTitleText
	this.instance_3 = new lib.MainTitleText("synched",0);
	this.instance_3.setTransform(674.2,59.1,1,1,0,0,0,55.6,24.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(34));

	// レイヤー 11
	this.instance_4 = new lib.og();
	this.instance_4.setTransform(23,7,0.107,0.107);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).wait(34));

	// レイヤー 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("Aj5DmIHznL");
	this.shape.setTransform(359,263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AkBDpIIDnR");
	this.shape_1.setTransform(355,265.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AkZDzIIznl");
	this.shape_2.setTransform(343.2,274.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AlCEEIKFoI");
	this.shape_3.setTransform(323.6,288.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("Al7EcIL3o3");
	this.shape_4.setTransform(296.1,308.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AnDE7IOIp1");
	this.shape_5.setTransform(260.7,334.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AodFgIQ7q/");
	this.shape_6.setTransform(217.4,365.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AqGGMIUNsX");
	this.shape_7.setTransform(166.3,402.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("Ar/G/IX/t+");
	this.shape_8.setTransform(107.4,444.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AuJH5IcTvx");
	this.shape_9.setTransform(40.6,493.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,204,255,0.8)").ss(10,1,1).p("AwjI6MAhHgRz");
	this.shape_10.setTransform(-34.1,547.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},26).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(23));

	// Aphorism_Nietzsche
	this.instance_5 = new lib.Aphorism_Nietzsche("synched",0,false);
	this.instance_5.setTransform(302.7,155.9,1,1,0,0,0,99.9,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// レイヤー 3
	this.instance_6 = new lib.CircleExtention("synched",0,false);
	this.instance_6.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({regY:240.1,scaleX:0.3,scaleY:0.3,x:384.1,y:240.1,alpha:0.199,startPosition:11},15).to({regX:384.2,regY:240.3,scaleX:0.62,scaleY:0.62,x:384.2,y:240.2},12).wait(1));

	// レイヤー 2
	this.instance_7 = new lib.CircleExtention("synched",0,false);
	this.instance_7.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({scaleX:0.55,scaleY:0.55,alpha:0.199,startPosition:11},18).to({scaleX:0.67,scaleY:0.67},12).wait(1));

	// レイヤー 1
	this.instance_8 = new lib.CircleExtention("synched",0,false);
	this.instance_8.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({regX:383.9,scaleX:0.77,scaleY:0.77,y:240.1,alpha:0.199,startPosition:11},21).to({regX:384,regY:240.1,scaleX:0.72,scaleY:0.72},12).wait(1));

	// レイヤー 5
	this.instance_9 = new lib.TunnelBg2("single",0);
	this.instance_9.setTransform(384,240,1,1,0,0,0,384,240);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).to({regX:383.9,regY:239.8,scaleX:5.75,scaleY:5.75,x:383.5,y:239.6,alpha:0,mode:"synched"},33,cjs.Ease.get(-1)).wait(1));

	// レイヤー 8
	this.instance_10 = new lib.ColorFilter4_in("synched",0,false);
	this.instance_10.setTransform(384,240);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).wait(13));

	// レイヤー 7
	this.instance_11 = new lib.IndexBg("synched",0);
	this.instance_11.setTransform(384.1,240,0.066,0.066,0,0,0,384.1,240);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({regX:384,scaleX:1,scaleY:1,x:384},33,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.8,-538.2,925.2,1391.2);


// stage content:



(lib.navigation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Tunnel
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
p.nominalBounds = new cjs.Rectangle(67.2,-298.2,1010.5,1391.1);

})(cjsNavigationLib = cjsNavigationLib||{}, cjsNavigationImages = cjsNavigationImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsNavigationLib, cjsNavigationImages, createjs, ss;