(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 768,
	height: 480,
	fps: 24,
	color: "#00FF00",
	webfonts: {},
	manifest: [
		{src:"images/bagguet.png", id:"bagguet"},
		{src:"images/cooking_hdr.png", id:"cooking_hdr"},
		{src:"images/cup_soup.png", id:"cup_soup"},
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
		{src:"images/experimental_back.jpg", id:"experimental_back"},
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
		{src:"images/nobuteru_butt.png", id:"nobuteru_butt"},
		{src:"images/nobuteru_butt_upper.png", id:"nobuteru_butt_upper"},
		{src:"images/nobuteru_panel_skin.png", id:"nobuteru_panel_skin"},
		{src:"images/tuna.png", id:"tuna"},
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


(lib.cooking_hdr = function() {
	this.initialize(img.cooking_hdr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,213);


(lib.cup_soup = function() {
	this.initialize(img.cup_soup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,448);


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


(lib.experimental_back = function() {
	this.initialize(img.experimental_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,1800);


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


(lib.nobuteru_butt = function() {
	this.initialize(img.nobuteru_butt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,437);


(lib.nobuteru_butt_upper = function() {
	this.initialize(img.nobuteru_butt_upper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,437);


(lib.nobuteru_panel_skin = function() {
	this.initialize(img.nobuteru_panel_skin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,168);


(lib.tuna = function() {
	this.initialize(img.tuna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,439);


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


(lib.トゥイーン1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.experimental_back();
	this.instance.setTransform(-960,-1200,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-1200,1920,2400);


(lib.wordFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgPPoQgOgPAAgUQAAgVAOgPQAPgOATAAQAUAAAPAOQAPAPAAAUIAAABQAAAUgPAPQgPAPgUAAQgTAAgPgPgAiQPmQgOgOAAgVIAAgBQAAgUAOgOQAPgPAVAAQAUAAAPAPQAPAPAAAUIAAABQgBAUgOAOQgPAPgUAAQgVAAgPgPgAByPlQgOgOgBgTIAAgCQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAOAAAUIAAABQAAAVgPAOQgOAPgVAAQgUAAgPgPgAkQPhQgPgOAAgVIAAgDQABgSAOgOQAPgPAUAAQAVAAAOAPQAPAPAAAUIAAADQgBATgOANQgOAPgVAAQgUAAgPgPgADzPfQgNgOgBgSIAAgDQAAgVAOgPQAPgOAVAAQAUAAAPAOQAOAOABATIAAADQAAAUgPAPQgPAPgUAAQgVAAgPgPgAmRPYQgOgOAAgVIAAgEQABgSANgNQAPgPAVAAQAUAAAPAPQAPAPAAAUIgBAFQgBARgNANQgPAPgUAAQgVAAgPgPgAF1PUQgNgNgBgRIAAgFQAAgUAOgPQAPgPAVAAQAUAAAPAPQANANACARIAAAFQAAAVgPAOQgPAPgUAAQgVAAgPgPgAoQPLQgPgOAAgVIABgGQACgRAMgMQAPgPAUAAQAVAAAOAPQAPAPAAAUIAAAGQgCARgNAMQgOAPgVAAQgUAAgPgPgAH3PFQgMgMgCgRIAAgGQAAgVAOgPQAPgOAVAAQAUAAAPAOQAMANACAQIABAHQAAAUgPAPQgPAPgUAAQgVAAgPgPgAqQO5QgPgOAAgVIABgIQACgPAMgMQAPgPAUAAQAVAAAOAPQAPAPAAAUIAAAIQgDAPgMAMQgOAPgVAAQgUAAgPgPgAJ4OxQgLgMgDgPIAAgIQAAgVAOgPQAPgOAVAAQAUAAAPAOQALAMADAPIABAJQAAAUgPAPQgPAPgUAAQgVAAgPgPgAsPOiQgPgOAAgVIABgKQADgOALgLQAPgPAUAAQAVAAAOAPQAPAPAAAUIAAAKQgDAOgMALQgOAPgVAAQgUAAgPgPgAL4OXQgKgKgDgOIgBgLQAAgUAOgPQAPgPAVAAQAUAAAPAPQALALADANIABALQAAAVgPAOQgPAPgUAAQgVAAgPgPgAuNOGQgPgPAAgUQAAgHACgGQADgMAKgLQAPgOAUAAQAVAAAOAOQAPAPAAAVIgBAMQgDANgLAKQgOAPgVAAQgUAAgPgPgAN3N5QgKgKgDgNQgBgGAAgGQAAgVAOgPQAPgOAVAAQAUAAAPAOQAKAKADAMQACAHAAAHQAAAUgPAPQgPAPgUAAQgVAAgPgPgAwKNkQgPgOAAgVQAAgIACgHQAEgLAJgJQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAHgBAHQgEAMgKAJQgOAPgVAAQgUAAgPgPgAP1NUQgJgJgEgLQgCgHAAgIQAAgUAPgPQAPgPAUAAQAVAAAOAPQAJAJAEAKQACAIAAAIQAAAVgPAOQgOAPgVAAQgUAAgPgPgAyGM8QgOgOAAgVQAAgJADgIQADgKAIgIQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAJgDAHQgDALgJAIQgPAPgUAAQgVAAgPgPgARwMpQgIgIgDgKQgDgIAAgJQAAgUAOgPQAPgPAVAAQAUAAAPAPQAIAIADAJQAEAJAAAJQAAAVgPAOQgPAPgUAAQgVAAgPgPgA0AMOQgPgPAAgUQAAgLAEgJQAEgJAHgHQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAKgDAIQgEAJgIAIQgOAPgVAAQgUAAgPgPgATpL4QgHgHgEgIQgDgJAAgLQAAgUAOgPQAPgPAVAAQAUAAAPAPQAHAHADAHQAFAKAAALQAAAVgPAOQgPAPgUAAQgVAAgPgPgA12LZQgOgOAAgVQAAgMAFgKQADgHAGgGQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAMgFAJQgEAIgGAGQgPAPgUAAQgVAAgPgPgAVeLBQgGgGgEgHQgFgKAAgMQAAgVAPgPQAPgOAUAAQAVAAAOAOQAGAGAEAHQAFAKAAANQAAAUgPAPQgOAPgVAAQgUAAgPgPgA3nKfQgOgOAAgVQAAgNAGgMQADgFAFgFQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAANgGALQgEAGgFAFQgPAPgUAAQgVAAgPgPgAXQKDQgFgFgDgGQgHgLAAgNQAAgVAPgPQAPgOAUAAQAVAAAOAOIAIAJQAHAMAAAPQAAAUgPAPQgOAPgVAAQgUAAgPgPgA5UJeQgOgPAAgUQAAgQAJgNIAFgHQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAPgIALIgHAJQgPAPgUAAQgVAAgPgPgAY8I7IgGgGQgIgNAAgQQAAgUAOgPQAPgPAVAAQAUAAAPAPIAEAFQALANAAARQAAAVgPAOQgPAPgUAAQgVAAgPgPgA67ITQgOgPAAgUQAAgTAMgOIACgDQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAARgLANIgEAFQgPAPgUAAQgVAAgPgPgAaiHpIgDgCQgMgOAAgTQAAgUAPgPQAPgPAUAAQAVAAAOAPIABABQAOAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPgA8ZG8QgOgOAAgVQAAgUAOgPIACgCQAOgNAUAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgPAPgUAAQgVAAgPgPgAb/GNIgDgCQgPgPAAgUQAAgVAPgPQAPgOAUAAQARAAANAKIAFAEQAPAPAAAVQAAAUgPAPQgOAPgVAAQgSAAgOgNgA9qFZQgOgPAAgUQAAgVAOgPIAKgHQALgHAPAAQAUAAAPAOQAPAPAAAVQAAAUgPAPIgGAFQgNAKgQAAQgVAAgPgPgAdPEmQgGgEgFgFQgOgOAAgVQAAgUAOgPQAPgPAVAAQALAAAKAFQAHADAHAHQAPAPAAAUQAAAVgPAOQgPAPgUAAQgOAAgLgGgA+mDoQgOgPAAgUQAAgVAOgPQAJgIAKgEQAIgCAJAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgHAHgIADQgJAFgLAAQgVAAgPgPgAeICwQgMgEgJgJQgPgPAAgUQAAgVAPgPQAPgOAUAAIAKABQAOACALALQAPAPAAAVQAAAUgPAPQgOAPgVAAQgHAAgHgCgA/GBrQgPgOAAgVQAAgUAPgPQANgNASgBIAEgBQAVAAAOAPQAPAPAAAUQAAAVgPAOQgLAMgPADIgJAAQgUAAgPgPgAekAxQgUgBgOgOQgOgOAAgUQAAgTAOgPQAOgOAUgBIACAAQAUAAAPAPQAPAPAAATQAAAUgPAOQgPAPgUAAIgCAAgA+ogGQgSgBgOgOQgPgPAAgUQAAgVAPgPQAPgOAUAAIAIAAQAQADALALQAPAPAAAVQAAAUgPAPQgOAPgVAAIgDAAgAdzhcQgOgOAAgVQAAgUAOgPQAKgJALgEQAHgCAIAAQAUAAAPAPQAPAPAAAUQAAAVgPAOQgLAMgPACIgJABQgVAAgPgPgA+WiHQgMgEgJgJQgOgOAAgVQAAgUAOgPQAPgPAVAAQAKAAAJAEQAJAEAHAHQAPAPAAAUQAAAVgPAOQgPAPgUAAQgIAAgHgCgAdFjWQgPgOAAgVQAAgUAPgPQAFgFAFgDQALgHAOAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgGAHgIAEQgJAEgMAAQgUAAgPgPgA9mkAIgKgIQgPgOAAgVQAAgUAPgPQAPgPAUAAQAQAAANAJIAGAGQAPAPAAAUQAAAVgPAOQgOAPgVAAQgOAAgLgHgAb+lBQgOgPAAgUQAAgVAOgPIADgCQAOgMATAAQAUAAAPAOQAPAPAAAVQAAAUgPAPIgGAFQgNAKgQAAQgVAAgPgPgA8dlsIgCgDQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAVgPAOQgOAPgVAAQgTAAgOgMgAammfQgOgPAAgUQAAgTAMgOIACgDQAPgOAVAAQAUAAAPAOQAPAPAAAVQAAAUgPAPQgPAPgUAAQgVAAgPgPgA6/nIIgDgCQgMgOAAgTQAAgUAPgPQAPgPAUAAQAVAAAOAPIAFAFQAKANAAARQAAAVgPAOQgOAPgVAAQgUAAgPgPgAZDnwQgPgPAAgUQAAgQAJgNIAGgHQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAARgLANIgEAFQgOAPgVAAQgUAAgPgPgA5VoVIgGgHQgJgMAAgQQAAgVAPgPQAPgOAUAAQAVAAAOAOIAHAJQAIAMAAAPQAAAUgPAPQgOAPgVAAQgUAAgPgPgAXYo3QgOgOAAgVQAAgNAGgMQADgFAFgFQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAPgIAMIgHAIQgPAPgUAAQgVAAgPgPgA3lpZQgFgFgDgFQgHgLAAgOQAAgUAPgPQAPgPAUAAQAVAAAOAPQAGAFADAGQAGALAAANQAAAVgPAOQgOAPgVAAQgUAAgPgPgAVpp1QgPgOAAgVQAAgMAFgKQAEgHAGgGQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAANgGALQgDAGgGAFQgOAPgVAAQgUAAgPgPgA10qTQgGgGgDgHQgFgKAAgMQAAgVAOgPQAPgOAVAAQAUAAAPAOQAGAHAEAIQAFAJAAAMQAAAUgPAPQgPAPgUAAQgVAAgPgPgAT1qsQgPgOAAgVQAAgLAEgJQAEgIAHgHQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAALgEAKQgEAIgHAGQgOAPgVAAQgUAAgPgPgAz8rIQgHgHgEgJQgEgJAAgKQAAgVAPgPQAPgOAUAAQAVAAAOAOQAIAIAEAKQADAIAAAKQAAAUgPAPQgOAPgVAAQgUAAgPgPgAR8reQgOgOAAgVQAAgJADgIQADgKAIgIQAPgPAVAAQAUAAAPAPQAPAPAAAUQAAAKgEAIQgDAKgIAHQgPAPgUAAQgVAAgPgPgAyCr2QgIgIgEgKQgDgIAAgJQAAgVAPgPQAPgOAUAAQAVAAAOAOQAJAJAEALQACAHAAAJQAAAUgPAPQgOAPgVAAQgUAAgPgPgAQCsJQgPgOAAgVQAAgIACgHQAEgLAJgJQAPgPAUAAQAVAAAOAPQAPAPAAAUQAAAJgCAHQgEALgJAIQgOAPgVAAQgUAAgPgPgAwGseQgJgJgDgLQgCgIAAgHQAAgVAOgPQAPgOAVAAQAUAAAPAOQAJAKAEAMQACAHAAAHQAAAUgPAPQgPAPgUAAQgVAAgPgPgAOFsuQgPgPAAgUQAAgHACgGQADgNAKgKQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAHgCAGQgDAMgKAKQgOAPgVAAQgUAAgPgPgAuHtAQgKgKgDgNQgCgGAAgGQAAgVAPgPQAPgOAUAAQAVAAAOAOQALALADANIABAMQAAAUgPAPQgOAPgVAAQgUAAgPgPgAMHtOQgPgOAAgVIABgKQADgOALgLQAPgPAUAAQAVAAAOAPQAPAPAAAUIgBAMQgDANgLAKQgOAPgVAAQgUAAgPgPgAsHtdQgLgKgDgPIgBgKQAAgUAPgPQAPgPAUAAQAVAAAOAPQAMALADAPIAAAJQAAAVgPAOQgOAPgVAAQgUAAgPgPgAKItnQgPgPAAgUIABgJQACgPAMgMQAPgOAUAAQAVAAAOAOQAPAPAAAVIgBAJQgCAPgMALQgOAPgVAAQgUAAgPgPgAqGt0QgMgLgCgPIgBgJQAAgUAPgPQAPgPAUAAQAVAAAOAPQAMAMADAQIAAAHQAAAVgPAOQgOAPgVAAQgUAAgPgPgAIIt8QgPgOAAgVIABgHQACgQAMgMQAPgPAUAAQAVAAAOAPQAPAPAAAUIAAAIQgDAPgMAMQgOAPgVAAQgUAAgPgPgAoFuGQgMgMgCgQIgBgHQAAgUAPgPQAPgPAUAAQAVAAAOAPQANANACARIAAAFQAAAVgPAOQgOAPgVAAQgUAAgPgPgAGHuMQgOgOAAgVIAAgEQABgSANgNQAPgPAVAAQAUAAAPAPQAPAPAAAUIAAAGQgCARgNAMQgPAPgUAAQgVAAgPgPgAmDuTQgNgNgBgRIAAgFQAAgUAOgPQAPgPAVAAQAUAAAPAPQANANACATIAAADQAAAVgPAOQgPAPgUAAQgVAAgPgPgAEGuXQgOgOAAgVIAAgDQABgSANgOQAPgPAVAAQAUAAAPAPQAPAPAAAUIgBAEQgBASgNANQgPAPgUAAQgVAAgPgPgAkAubQgOgOgBgSIAAgDQAAgVAPgPQAPgOAUAAQAVAAAOAOQAOAOABATIAAADQAAAUgPAPQgOAPgVAAQgUAAgPgPgACFueQgPgOAAgVIAAgBQABgUAOgOQAPgPAUAAQAVAAAOAPQAPAPAAAUIAAADQgBATgOANQgOAPgVAAQgUAAgPgPgAh+ugQgOgOAAgUIAAgBQAAgUAOgPQAPgPAVAAQAUAAAPAPQAOAOABAVIAAAAQAAAVgPAOQgPAPgUAAQgVAAgPgPgAADuhQgMgOAAgVQAAgUAMgPQAPgPAVAAQAUAAAPAPQAPAPAAAUIAAABQgBAUgOAOQgPAPgUAAQgVAAgPgPg");
	this.shape.setTransform(196.1,96.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4PEIAAgBQAAgUgPgPQgOgPgVAAQgUAAgPAPQgOAOgBAUIgcgBIAAgDQAAgUgPgPQgPgPgUAAQgVAAgPAPQgNAOgBASIgdgBIAAgFQAAgUgPgPQgOgPgVAAQgUAAgPAPQgNANgBASIgcgDIAAgGQAAgUgPgPQgPgPgUAAQgVAAgPAPQgMAMgCARIgdgEIABgIQAAgUgPgPQgPgPgUAAQgVAAgPAPQgLAMgCAPIgdgFIABgKQAAgUgPgPQgPgPgUAAQgVAAgPAPQgKALgDAOIgcgGIABgMQAAgVgPgPQgPgOgUAAQgVAAgPAOQgKALgDAMIgcgHQACgHAAgHQAAgUgPgPQgPgPgUAAQgVAAgPAPQgJAJgDALIgcgJQACgHAAgJQAAgUgPgPQgOgPgVAAQgUAAgPAPQgIAIgEAKIgdgLQAEgIAAgKQAAgVgPgPQgPgOgUAAQgVAAgPAOQgHAHgDAJIgagMQAEgJAAgMQAAgUgPgPQgOgPgVAAQgUAAgPAPQgGAGgEAHIgYgMQAGgLAAgNQAAgUgPgPQgOgPgVAAQgUAAgPAPQgFAFgDAFIgXgOQAHgLAAgPQAAgVgPgPQgOgOgVAAQgUAAgPAOIgGAHIgWgQQAKgNAAgRQAAgVgPgPQgOgOgVAAQgUAAgPAOIgDADIgVgTQAPgOAAgVQAAgUgPgPQgOgPgVAAQgTAAgOANIgSgWIAFgFQAPgPAAgUQAAgVgPgPQgOgOgVAAQgOAAgMAHIgNgZQAIgDAGgHQAPgPAAgUQAAgVgPgPQgOgOgVAAQgIAAgIACIgHgbQAPgDALgMQAPgOAAgVQAAgUgPgPQgPgPgUAAIgFABIAAgXIAAgGIADAAQAUAAAPgPQAPgPAAgUQAAgVgPgPQgMgLgPgDIAGgdQAHACAIAAQAVAAAOgPQAPgOAAgVQAAgUgPgPQgHgHgIgEIANgbQAMAHAOAAQAUAAAPgPQAPgOAAgVQAAgUgPgPIgHgGIAUgYQAOAMATAAQAUAAAPgPQAPgOAAgVQAAgUgPgPIAXgVIACACQAPAPAVAAQAUAAAPgPQAPgOAAgVQAAgRgLgNIAagTIAFAHQAPAPAVAAQAUAAAPgPQAPgPAAgUQAAgPgIgMIAagQQADAFAFAFQAPAPAVAAQAUAAAPgPQAPgOAAgVQAAgNgGgLIAYgMQAEAHAGAGQAPAPAUAAQAVAAAOgPQAPgPAAgUQAAgMgEgJIAcgNQADAJAHAHQAPAPAVAAQAUAAAPgPQAPgPAAgUQAAgKgEgIIAdgLQADAKAIAIQAPAPAVAAQAUAAAPgPQAPgPAAgUQAAgJgDgHIAdgJQAEALAJAJQAPAPAUAAQAVAAAOgPQAPgPAAgUQAAgHgBgHIAdgIQADANAKAKQAPAPAVAAQAUAAAPgPQAPgPAAgUIgBgMIAegHQADAPAKAKQAPAPAVAAQAUAAAPgPQAPgOAAgVIgBgJIAfgFQACAPALALQAPAPAVAAQAUAAAPgPQAPgOAAgVIgBgHIAegEQACAQAMAMQAPAPAVAAQAUAAAPgPQAPgOAAgVIAAgFIAfgDQABARANANQAPAPAUAAQAVAAAOgPQAPgOAAgVIAAgDIAfgCQABASANAOQAPAPAVAAQAUAAAPgPQAPgPAAgUIAAgDIAegBQABAUAOAOQAPAPAUAAQAVAAAOgPQAPgOAAgVIAAAAIAfgBQAAAVANAOQAPAPAUAAQAVAAAOgPQAPgOAAgUIAeABIAAABQAAAVAOAOQAPAPAVAAQAUAAAPgPQAOgNABgTIAdABIAAADQAAAVAPAOQAPAPAUAAQAVAAAOgPQAOgNABgSIAeADIgBAEQAAAVAPAOQAPAPAUAAQAVAAAOgPQANgMACgRIAdADIAAAHQAAAVAOAOQAPAPAVAAQAUAAAPgPQAMgMACgPIAeAEIgBAJQAAAUAOAPQAPAPAVAAQAUAAAPgPQALgLADgPIAdAGIgBAKQAAAVAOAOQAPAPAVAAQAUAAAPgPQAKgKAEgNIAcAHQgBAGAAAHQAAAUAOAPQAPAPAVAAQAUAAAPgPQAKgKADgMIAdAJQgCAHAAAIQAAAVAOAOQAPAPAVAAQAUAAAPgPQAJgIADgLIAcAKQgDAIAAAJQAAAVAPAOQAPAPAUAAQAVAAAOgPQAIgHAEgKIAcAMQgEAJAAALQAAAVAOAOQAPAPAVAAQAUAAAPgPQAHgGADgIIAaAMQgFAKAAAMQAAAVAOAOQAPAPAVAAQAUAAAPgPQAFgFAEgGIAYANQgHAMAAANQAAAVAPAOQAPAPAUAAQAVAAAOgPIAHgIIAYAPQgJANAAAQQAAAUAOAPQAPAPAVAAQAUAAAPgPIAEgFIAWASQgMAOAAATQAAAUAPAPQAPAPAUAAQAVAAAOgPIAUAVIgCACQgPAPAAAVQAAAUAPAPQAPAPAUAAQARAAANgKIAQAYQgGADgFAFQgOAPAAAUQAAAVAOAOQAPAPAVAAQALAAAKgEIALAcQgMAEgJAJQgPAPAAAUQAAAVAPAOQAPAPAUAAIAKgBIADAdQgTABgOAOQgPAPAAATQAAAUAPAOQAOAOATABIgDAeIgKgBQgVAAgPAOQgOAPAAAVQAAAUAOAPQAKAJAMAEIgMAdQgJgFgMAAQgUAAgPAPQgPAPAAAUQAAAVAPAOQAFAFAFAEIgRAaQgNgKgRAAQgVAAgPAOQgOAPAAAVQAAAUAOAPIADACIgVAXIgBgBQgPgPgUAAQgVAAgPAPQgOAPAAAUQAAATAMAOIgYATIgFgFQgOgPgVAAQgUAAgPAPQgPAPAAAUQAAAQAJANIgZAQIgHgJQgPgOgUAAQgVAAgPAOQgOAPAAAVQAAANAGALIgaAPQgDgHgGgGQgPgOgUAAQgVAAgPAOQgOAPAAAVQAAAMAFAKIgaAMQgEgHgHgHQgOgPgVAAQgUAAgPAPQgPAPAAAUQAAALAEAJIgcALQgEgJgIgIQgOgPgVAAQgUAAgPAPQgPAPAAAUQAAAJADAIIgdAKQgDgKgJgJQgPgPgUAAQgVAAgPAPQgOAPAAAUQAAAIACAHIgdAIQgEgMgKgKQgOgOgVAAQgUAAgPAOQgPAPAAAVQAAAGACAGIgeAHQgDgNgLgLQgOgPgVAAQgUAAgPAPQgPAPAAAUIABALIgdAGQgDgPgMgMQgOgOgVAAQgUAAgPAOQgPAPAAAVIABAIIgeAFQgCgQgNgNQgOgOgVAAQgUAAgPAOQgPAPAAAVIABAGIgfAEQgCgRgNgNQgOgPgVAAQgUAAgPAPQgPAPAAAUIABAFIgfADQgBgTgOgOQgOgOgVAAQgUAAgPAOQgPAPAAAVIAAADIgdACQgBgUgOgOQgPgPgUAAQgVAAgPAPQgOAPAAAUIAAACIgfAAQAAgUgPgPQgOgOgVAAQgUAAgNAOQgPAPAAAVIgdgBg");
	this.shape_1.setTransform(195.9,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-5,401.7,203.1);


(lib.トゥイーン73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.tuna();
	this.instance.setTransform(-360,-219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-219.5,720,439);


(lib.PanelSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru_panel_skin();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,168);


(lib.PanelScreenBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#44FF6D").ss(1,1,1).p("AhKjkQBGAHApgCQAEABBoAfQAGABAKABQAKAFAEAYQAGAcAEB2QAECQgLA2QgNA9gpgFQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYg");
	this.shape.setTransform(18.7,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006400").s().p("AB8DwQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYQBGAHApgCQAEABBoAfIAQACQAKAFAEAYQAGAcAEB2QAECQgLA2QgMA5glAAIgFgBg");
	this.shape_1.setTransform(18.7,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.4,50.3);


(lib.PanelButtonBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1.5,1,1).p("AC4hAQAPAEABAAQACAAACAFQADAEADAUIAAACQgBAFAAAEQgCAVgDAaQgFAygCAKQgVAggGAIQgGAIggACQgfABhYgeQhVgeh5gGAC4hAQAAABABABQADAFgFgIQAAAAABABgAioiIQDMAkBGAVQAaAIAxAFQABAAABABAioiIQgOAagIAEIgSAYQACAbgDApQAAAnAQAvAioiIQgJASAAALQAAAKAFBvQAAAFgBAAQAmAHA/AFQAnADDmA1AisAOQgCADgIAYQgJAZgCAG");
	this.shape.setTransform(21.1,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#999999","#CCCCCC"],[0,1],-20.3,1,19.6,1).s().p("AALAgQhVgeh5gEIALgfIAKgbQAAAFgBAAQAmAHA/AFQAnADDnAzIgbAoQgHAIgfACIgEAAQggAAhUgdg");
	this.shape_1.setTransform(21.3,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#999999","#CCCCCC"],[0,1],-3.5,9.2,1.1,9.2).s().p("AgKAOQgBAAAWgcQgMAZgIADIgBAAg");
	this.shape_2.setTransform(3,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#999999","#CCCCCC"],[0,1],-2,0,2.1,0).s().p("AgTARQADgngBgbIARgZQAGgDAOgbQgJASAAAMIAFB5IgKAbIgJAeQgQguAAgpg");
	this.shape_3.setTransform(2.1,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#999999","#CCCCCC"],[0,1],-19.5,0,19.6,0).s().p("AhYA4Qg/gEgmgHQABAAAAgGIgFh4QAAgMAJgSQDMAkBGAWQAaAHAxAFIACABQABACABABQABACAAAAQAAABAAgBQAAAAgBgBIgBgDIAQAEQACAAACAFQADAEADAUIAAACIgBAHIgFAyQgFAxgCAKQjmg0gngEg");
	this.shape_4.setTransform(22.7,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,44.2,29.5);


(lib.PanelBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#191938").ss(1,1,1).p("AGEsBQAnEhgCEdQgBB3gFDtQABDPAfCUQANAnAWA4QAMAfAcBEIAyBzQAHAMAOAZQANAXAEARQABAJAEAUQACAJAHAOQAIARADAGQADAJACAXAqDvwQAYAOAlAGQABAABAAIQAkADBwATQGFBNFrBm");
	this.shape.setTransform(68.9,105.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006DFF").ss(3.4,1,1).p("AGGtJQAQAIAKAKQAFAFAIAJAF+tQQlFhKlshDQi4gih4gTQgbAAgQAPQgKAKgEANIASBaIAAgDQABADAAAAQAcBbAXCCQAuD9AAEgQAACbgYDhQgSCngOBLQgVBsgfB0QgZBfAAADQAAAhAXAJQATAHBMABQESAHETArQCGAWCMAvQCKAtDDAfQAcAGARAAQAjAAAMgMQAFgGAAgOQAAhahvjqQgvhfgbh1QggiHAAiGQAEiNACoWIgUjoQAAgDAAgCQgGhDgEgIQgKgUgCgF");
	this.shape_1.setTransform(68.7,104.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0023FF").ss(1,1,1).p("AGduNIAIAHIAnAgIAEADAHMtmQgLAIgUAhQgEAGgEAGQgYAmgbAgApqvPQFBA6FLBPQCmAnCgAmQACACAEAFQADAEABADQAFALgBAKQgSBIAABMQAREEAAATQABBBABCcQACCeAECPQABAvAmClQAsDEApBEQAdAxATAyQAYA9AOAbQAZAwAEAq");
	this.shape_2.setTransform(65.6,110.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(2.4,1,1).p("AAAAAIAAAA");
	this.shape_3.setTransform(3.6,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#999999","#CCCCCC"],[0,1],-63.8,0,68.4,0).s().p("AExOEQiNgviHgWQkSgrkSgGQhMgCgSgHQgYgJAAghQAAgEAaheQAfh0AVhtQAOhKASinQAYjfAAidQAAkgguj9QgYiBgchcQFCA6FLBPIFGBNQAEAAADAEQADAEgBAHQADACACAHQABAGgBAFIAAgDQAAgJgFgIQAAgEgDgEIgGgHIAGAHQADAEAAAEQAFAIAAAJIAAADQgSBJAABLQAREFAAASIACDdQABCeAECPQACAvAmClQAsDEAoBEQAdAxAUAyQAYA9AOAbQAYAwAFAqQjEgeiJgug");
	this.shape_4.setTransform(63.8,110.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#999999","#CCCCCC"],[0,1],-18.1,-0.8,22.1,-0.8).s().p("ABTOpQgEgrgZgvQgOgbgYg+QgRgygdgxQgphDgsjEQgmilgBgwQgEiOgCifIgCjcQAAgTgRkEQAAhMAShIQABgFgBgHQgBgHgDgCQAcghAYglIAHgNQAUggALgJIAEAEQABAFALAUQAEAHAFBDIAAgCIgBgCIgDASQAABNAZCTQgCIYgECLQAACGAgCGQAZB1AuBgQBwDqAABaQAAAOgGAFQgLAMgjAAQgRAAgcgFgAhTBKQABDPAgCTQANAoAVA4IAnBjIAyBzIAVAlQANAWADASIAFAcQADAJAHAPIAKAXQADAIACAXQgCgXgDgIIgKgXQgHgPgDgJIgFgcQgDgSgNgWIgVglIgyhzIgnhjQgVg4gNgoQggiTgBjPQAGjtABh3IAAgWQAAkSglkWQAlEWAAESIAAAWQgBB3gGDtIAAAAgAhyutQAQAIAKAKIANANg");
	this.shape_5.setTransform(119.3,114.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#999999","#CCCCCC"],[0,1],-56,-0.9,50.2,-0.9).s().p("AHICoQgDgFgEAAIlGhNQlLhOlBg5IgBgDIAAADIgShZQAEgOAKgKQAQgPAbAAQB4ATC4AiQFsBEFFBIIAIAGIAnAgQgLAIgUAhIgHANQgYAlgcAhQAAgGgDgEgAnLhtIBBAIQAkADBvATQGFBNFrBkQlrhkmFhNQhvgTgkgDIhBgIQglgGgYgOQAYAOAlAGg");
	this.shape_6.setTransform(56.7,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,140.6,212);


(lib.Meter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#070000").ss(0.8,1,1).p("ACfA0QANAGAGABIAiAAQgBABgBACACkgZQgJAHgNAFIgKAFQgDAFgDABIgBAAQAAAAgBAAQgCABAAABQAAgBADgBACRB9QAOAFAGABIALAAIAWAFIANAFQAGADAIACIAkAGQAIACAGACIAOACIAJADAAeigQgDAHgBAQIgDAJQAAAEgBAHIgHAfQgDANAAAIQAAgEABgBQABgBADAAAhKhlQAEAOAAAUQgCAGACAGIACAAQAAgCABgBAB9hOQgGAKgOAMQgRAPgGAGAjvAGQAMABAHADQADABABAAQACABAFABQABAAAFACQANAFAFADQADACACAAQACABABgBAkpBOQAHACAPACQADABAIABQAFABALAAQADAAAEAAQAFAAACAAQAEACAHABQACAAAFAAQAFgBACABQADABAHADIADAAQACgBACABQACAAADACQADABAFAAQAFAAACAAQACACACAAAi3g3IAdAZQADADADABIAEACIADAEQACACACAAQABgDAAgE");
	this.shape.setTransform(29.9,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgDBhIgOgCQgLgCgLgIIgMgIQgIgGgJgLIgHgKQgFgGgBgFIAAgaIAIgaQAIgUAOgLQAGgDAEgBIAGABQAHgFAJgBIAOABIAEAAQACgCABgCIAAgDIACgDIAFgKIADgFIACgFIACgEIADgEIAGgFIADgCIACABIAAgBQAGACACADIABAFIAAAhIgBADIgBACIABAEIABABQAHAEAIAGQAaAUABAXQABAMgFAKQABABABAAQAAAAAAABQABAAAAABQAAAAAAAAIABAGIgBAHIgCAEIAAADIgDAGIgBAFIgDAFIAAAEQAAADgEAEIgBAEQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgFABIgBAAIgJADIgFADIgGABIgaAAQgBACgDABIgCAAIgHgBgAhBAbQAAAEADAGQAFAKALAJQAIAIALAIIAHAEQAGACAHAAIAJABIAFgBIAYgBIAEAAIAHgDIAKgEIAEgIIACgEIAAgEIADgDIgBAAQgSAOgSADQgKABgNgCQgWgEgOgIQgVgLgFgSIgCgJQgCAGAAAEgAA7ASIgIAEQgFADgHAIIgHAEIgGAGIgBADIgFAFQAHgBAFgCQAIgDAHgGQAJgGAEgGQAFgHAAgIQgBAEgFACgAAvgKQACADgBAFIgCACQgCACgFACIgJADIgbATIgIAKIgDAEIgCAEIgCACIAMADIAJACIAAgBQgDgBAAgDQgBgEABgCIADgDQAKgKAEgDIAKgIIAJgIIAGgEIAEgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAQAFAAADACQADACABADQgBgFgDgFQgGgLgKgJIgKgGQgIgFgHgBIgIgCIgBAIQgCADgFACIgFADIgFAEQgCACgGADIgCABIgBADIgEADIgFADIgCACIgDADIgGAEQgEACgCAAIgDAAQADAPAFAFQADAEAFADIAFADIgBgEIABgEIACgDIABgEIAIgFIAEgEIAEgEIAGgFIAagRIAHgFQAEgCADAAQAEABADAEgAgWgjQgFACgFAEIgCACQgFAFgFAKQgEAHAAAEIAQgQIAIgHIAGgCIAKgIIgDAAIgEgCIgCAAIgFABgAgfATQgBgDAAgEIABgEQABgEAEgCIAIgDQAGgHADgCIAHgEIAGgDIAHgFQAEgFACAAQABAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAHADQADADABADQACAGgEACIgFADQgDABgGAEIgJADIgGABIgFAFIgNANQgEADgDAAQgDAAgDgDg");
	this.shape_1.setTransform(28.2,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.7,34.2);


(lib.Cup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.cup_soup();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,523,448);


(lib.Crouton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACqisQABgBAignQAjgnAKgDAjHjgQAqAFAvgUQA4gXAXgDQARgCApgTQAogTAKAAAgnjoIBUgCQACAAASAJQAOAIAngHAhPiiQASgEAegEQAagDAHAAQAFAAAVAEQAWAEAFAAQAHAAAFgDQAFgCAGgEAjSiYQAaAFAyAPQAiAKAYAAQAiAAAdgLQAagKAjABAjbAEQAHAAAegEQAZgDAFAAQASAAAqAIQAqALAbAAQBAAAAPgJACehoQABAJgHArQgFAqAAABQACAMgGAQQgGASAAAGQAAAGAHAbQAFAbAAAEQAAALAGARQAFARAAAOQAAAWgUAcAEWjeQACAOAAAZQAAASgGAOQgGAPAAAHQAAALAKArQALArAAAHQAAANAKAbQALAcAAACQAAAEgIAPQgHAPgFAHADQiYQAFARACAoQAEAiAUAMQATANAAASQABAKgBAYAA8kkICIAAAkOiiIACAfQAAAFgGASQgGATAAAKQAAAIAFAOQAFAPAAAGQACAjAAAtQAAAQgNAiQgOAngEA4QgDAkACAiQABAQgKAfAjvEUICAgCQAUAAArALQAqALARAAQAOAAAHgHQACgCAQgVAizBoQA2ATAfACQAUACArgCQAPAAAJAFQAIAGAHAAQADAAAIgGQAJgGASAAQAKAAALABQAAABABAGQABAHgBAFAC+gCIgCBGQAAALAFAFQAGAFABAOADQDqQARgVAUghQARgdAGgR");
	this.shape.setTransform(44,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AB3ESQgcgMgSgTQgBgYgKgVQgKgWAAgCQANhXAAgPQAAgRgGgiQgFghgBhAQgRAChbAFIhrAEQggAAgWgNQgdgRgRgsQgEgVAAgQQAAgmAigeQAhgdAmgBQCGgDBegHQAuAAAcAaQAQANAWAYIAeAPQAeARALASQALARACAkQAAAIgLBGIAGAlQAGAlAAAPIADBFQABAugGAfQgRBahYgBQgPAAgXgKg");
	this.shape_1.setTransform(50.6,42.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFA8").s().p("Ah5DsQgogNgTgVQgLgMgLgZQgMgZAAgNQAAg7A1gcQgXgmAAgVQARg0AAgEQgHgJgHgNQgOgZAAgUQAAgbAOgeQAVgtAngBQASArAdARQAVANAgAAIBpgEQBegFARgCQAABAAGAjQAFAiAAARQAAAQgMBUQAAACAKAWQAKAVABAYQACAigXAdQgdAlg0AAQgFAAgogIQgogHgRAAIhVAZQgQAAgfgKg");
	this.shape_2.setTransform(36.5,53.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,13.8,65.4,64.2);


(lib.Blackout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,56,56,0.6)").s().p("Ekr/C7fMAAAl2+MJX+AAAMAAAF2+gEhjOhKfQlnFmAAH7QAAH6FnFmQFlFmH7AAQH6AAFmlmQFnlmAAn6QAAn7lnlmQlmlmn6AAQn7AAllFmg");
	this.shape.setTransform(1920,1200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2400);


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


(lib.トゥイーン102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AmTFsQB+hXBChfQBEhfAWhpQAYhrgGh9ICKAIIAYABQAGACgBAHQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABIgFAGIgKAKQgGAGgCAEQgBADgCAVIgDAtIgEAhQgQB/gmBeQgoBegwBBQgyBAgrAnQgsAmgaARgAA0gXQA5gzA4g/QA5hAAxhRIrtAAIAAiCIMlAAQANAAALgKQAMgJAGgHIBuBvQgdAtgyBEQgwBFg+BLQg8BKhCBCg");
	this.shape.setTransform(1.3,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AliE3IAAhuIEoAAIAAmQIjeAAIAAhvIIyAAIAABvIjeAAIAAGQIEnAAIAABug");
	this.shape.setTransform(-0.2,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AkmHvIgNgTIg/hzQCWg+B+hOQB6hOBshqQBshoBkiRIBfBzQghAzhDBPQhDBQh1BlQhTBFhIAwQhIAwhAAiQhAAig3AbQgEACgBACQgDADgBAGIgGARQgDAEgEAAQgIgBgJgMgAkxg6Qg5gghMgYIBEh4QBDAVA7AeQA7AfA2AqIhLBvQgpgcg6gfgAi7lTQg6gdhAgTIBFh4QBEAUA6AeQA5AdAxAlIhEB4Qg1gog6gcg");
	this.shape.setTransform(1.2,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AhxHkQg4AAgtgSQgtgRgdgZQgVgTgPgYQgOgZgJgrQgJgqgDhGQgFhFAAhrIABhIIADhyIACiBIABh0QABg0gCgZICgAXQAWADAIAFQAKAFAAAGQgBAHgJAIIgYAUQgDAKgEAnIgJBfIgIB3IgHB3QgCA3AAAoIAABHQABAqAFAnQAFAnALAWIALAPQALAMAXALQAXAMAmAAQAjACA6gVQA4gVBDg7QBEg7A7hyIB2BhQgYAjgiArQghArgtAtQgsArg8AoQhMAwg8APQg4ANglAAIgIAAg");
	this.shape.setTransform(6.7,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AhxHkQg4AAgtgSQgtgRgdgZQgVgTgPgYQgOgZgJgrQgJgqgDhGQgFhFAAhrIABhIIADhyIACiBIABh0QABg0gCgZICgAXQAWADAIAFQAKAFAAAGQgBAHgJAIIgYAUQgDAKgEAnIgJBfIgIB3IgHB3QgCA3AAAoIAABHQABAqAFAnQAFAnALAWIALAPQALAMAXALQAXAMAmAAQAjACA6gVQA4gVBDg7QBEg7A7hyIB2BhQgYAjgiArQghArgtAtQgsArg8AoQhMAwg8APQg4ANglAAIgIAAg");
	this.shape.setTransform(6.7,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AktHEQg/gZgagnQgagmABgqQABg1AggqQAigqA+gZQA/gZBYAAQAdAAAXACIAjADIgEiKIgChmIgBhTIAAhWIAAhsIAAhVICOAUQAGABALADQAKAEACAIQAAADgDADQgCADgLAGQgGAEgDAEQgEADgBAHIgDAkIgCA5IgBA1QAMACAKAAIAcAAQBogBA5gOQA5gOAagMIAACMQhCAPg3AHQg5AGgpAAIgogBQgWAAgSgCIAABDIAAA8QABAcACAoIAFBfQBEAWA3AWQA2AWAyAcQAzAbA4AnIhMB5QgogfglgYQglgZgpgWQgpgWg0gWQAEA7gQAqQgQAqgzAWQgwAWhgAAQhtAAg+gZgAjuD/QgfASAAAbQACAYAXAOQAXANAeAFQAeAFAVAAQAvgBAUgRQAUgRAEgaQAFgZgBgbIgtgHQgbgDgigBQg5ABgeARg");
	this.shape.setTransform(-0.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AktHEQg/gZgagnQgagmABgqQABg1AggqQAigqA+gZQA/gZBYAAQAdAAAXACIAjADIgEiKIgChmIgBhTIAAhWIAAhsIAAhVICOAUQAGABALADQAKAEACAIQAAADgDADQgCADgLAGQgGAEgDAEQgEADgBAHIgDAkIgCA5IgBA1QAMACAKAAIAcAAQBogBA5gOQA5gOAagMIAACMQhCAPg3AHQg5AGgpAAIgogBQgWAAgSgCIAABDIAAA8QABAcACAoIAFBfQBEAWA3AWQA2AWAyAcQAzAbA4AnIhMB5QgogfglgYQglgZgpgWQgpgWg0gWQAEA7gQAqQgQAqgzAWQgwAWhgAAQhtAAg+gZgAjuD/QgfASAAAbQACAYAXAOQAXANAeAFQAeAFAVAAQAvgBAUgRQAUgRAEgaQAFgZgBgbIgtgHQgbgDgigBQg5ABgeARg");
	this.shape.setTransform(-0.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ai4GfQAkgKAzgTQAzgTA2gkQA3gkAzg8QAmgvAZg6QAYg6ABhCQgCgygSgcQgTgcgZgKQgZgKgTABQgmABgzAPQgyAPg2AWQg3AXgxAXIhSAmIg3iJIBZgjQA4gVBCgVQBDgUBBgOQBEgOA6gBQARgBAbAEQAbAFAfAOQAfAOAbAeQAgAlALAvQAKAugBAoQAABcggBYQgfBXg7BJQg0A9g5AnQg4Ang1AWQgzAYgqAOgABNlkQg2gEg8gGQg+gGg/gJIgKiUQBEARA5AIQA1AJA4AEQA4ADBEABIgRCHQgmgBg2gDg");
	this.shape.setTransform(-1.4,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ai4GfQAkgKAzgTQAzgTA2gkQA3gkAzg8QAmgvAZg6QAYg6ABhCQgCgygSgcQgTgcgZgKQgZgKgTABQgmABgzAPQgyAPg2AWQg3AXgxAXIhSAmIg3iJIBZgjQA4gVBCgVQBDgUBBgOQBEgOA6gBQARgBAbAEQAbAFAfAOQAfAOAbAeQAgAlALAvQAKAugBAoQAABcggBYQgfBXg7BJQg0A9g5AnQg4Ang1AWQgzAYgqAOgABNlkQg2gEg8gGQg+gGg/gJIgKiUQBEARA5AIQA1AJA4AEQA4ADBEABIgRCHQgmgBg2gDg");
	this.shape.setTransform(-1.4,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("ACBHVQgxgNg2gYQg1gXgxgnQgwgmggg6Qgfg5AAhQQABhNAbhCQAbhEAog4QAng4AmgnQAkgoAXgUQhyAJh1AMQh1AMhsATIgYiOQBqAAB0gJQB1gHBzgPQB0gOBrgUQBrgUBZgaIAACQQgaABgpAIQgoAHg1AYQg2AYhCA0Qg1ArgvA4QguA4gbA9QgdA8AAA9QgBAVAGAdQAHAdAUAfQARAfAmAbQAlAaAnANQAmALAiAEQAiADAaAAIgrCXQgdgFgxgNg");
	this.shape.setTransform(-1,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("ACBHVQgxgNg2gYQg1gXgxgnQgwgmggg6Qgfg5AAhQQABhNAbhCQAbhEAog4QAng4AmgnQAkgoAXgUQhyAJh1AMQh1AMhsATIgYiOQBqAAB0gJQB1gHBzgPQB0gOBrgUQBrgUBZgaIAACQQgaABgpAIQgoAHg1AYQg2AYhCA0Qg1ArgvA4QguA4gbA9QgdA8AAA9QgBAVAGAdQAHAdAUAfQARAfAmAbQAlAaAnANQAmALAiAEQAiADAaAAIgrCXQgdgFgxgNg");
	this.shape.setTransform(-1,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AjbHHQgsgSgZgYQgTgQgOgbQgOgbgKgtQgJgtgFhJQgEhIAAhsIAAhDIAAhrIAAh4IAAhsIAAhIICZASIALACQAJABAIAEQAIADABAHQgBAJgKAIIgRAPQgEAFgEAjQgEAjgDA2IgHBzIgFB6IgBBnQAABVADAtQAEAuAHAUQAGAUAIAJQAXAcAbAIQAbAIAVgBQAwABA7gaQA7gbA9g9QA8g9AxhlIByBeQghAygsA4QgrA4g5AxQg4AyhHAgQhEAfhXACQg/gCgsgSgACXjuQgagYgggZIAyg4QAlAdAZAWQAZAXAYAdIgzA4QgZgdgbgZgAEKlSQgagXgmgfIAyg5QAhAaAaAXQAZAXAcAgIg0A4QgVgZgZgYg");
	this.shape.setTransform(7.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AjbHHQgsgSgZgYQgTgQgOgbQgOgbgKgtQgJgtgFhJQgEhIAAhsIAAhDIAAhrIAAh4IAAhsIAAhIICZASIALACQAJABAIAEQAIADABAHQgBAJgKAIIgRAPQgEAFgEAjQgEAjgDA2IgHBzIgFB6IgBBnQAABVADAtQAEAuAHAUQAGAUAIAJQAXAcAbAIQAbAIAVgBQAwABA7gaQA7gbA9g9QA8g9AxhlIByBeQghAygsA4QgrA4g5AxQg4AyhHAgQhEAfhXACQg/gCgsgSgACXjuQgagYgggZIAyg4QAlAdAZAWQAZAXAYAdIgzA4QgZgdgbgZgAEKlSQgagXgmgfIAyg5QAhAaAaAXQAZAXAcAgIg0A4QgVgZgZgYg");
	this.shape.setTransform(7.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ah8FUQAhgWAcgZQAcgYAWgiQg1gcgcgrQgdgrgNgxQgMgxgEgrQghAngWAwQgXAuAAA1QAAAZAEATIAKAhIhXAhQgehWgNhIQgNhHgCgvQgDgvAAgQQAAhAAIg/QAHhBAOg+IBfAUQADAAAJADQAIAEACAIQgBADgFAEIgJAGQgIAHgGAXQgHAXgFAdQgFAegDAcQgDAaAAASQAAAOACASIAEAlQATgfAZgiQAbggApgmQABgUAIgnQAGgoAQgqQAQgqAfgdQAegfAvgBQAyACAcAWQAcAWANAdQAMAcAEAUQAWADAlAIQAlAJAmAYQAnAYAaAyQAbAxABBRQAAAygMAnQgMAngRAbQgRAbgRAQQgiAhgkAQQgkAQgiAFQggAHgaAAQgPAegdAkQgdAlgxApgACbh2IABAvQAABdgKA1QgJA2gJAeQAugIAdgZQAdgWAQgfQAPgeAGgdQAHgagBgQQAAgegMggQgMgfgbgYQgcgZgrgKIACA+gAAAiTQgZAMgiAYIAAAmQAAAiAFAnQAGAoATAlQAUAlAnAaQAGgRAFgbQAGgZAEgpQAEgnAAg/IgBg8QAAgXgCgOQgdAJgXANgAgXkfQgLAPgGASQgGARgCALQATgLAUgIQARgKAbgIIgGgPQgFgIgGgJQgGgGgJgBQgPAAgLAPg");
	this.shape.setTransform(-0.4,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ah8FUQAhgWAcgZQAcgYAWgiQg1gcgcgrQgdgrgNgxQgMgxgEgrQghAngWAwQgXAuAAA1QAAAZAEATIAKAhIhXAhQgehWgNhIQgNhHgCgvQgDgvAAgQQAAhAAIg/QAHhBAOg+IBfAUQADAAAJADQAIAEACAIQgBADgFAEIgJAGQgIAHgGAXQgHAXgFAdQgFAegDAcQgDAaAAASQAAAOACASIAEAlQATgfAZgiQAbggApgmQABgUAIgnQAGgoAQgqQAQgqAfgdQAegfAvgBQAyACAcAWQAcAWANAdQAMAcAEAUQAWADAlAIQAlAJAmAYQAnAYAaAyQAbAxABBRQAAAygMAnQgMAngRAbQgRAbgRAQQgiAhgkAQQgkAQgiAFQggAHgaAAQgPAegdAkQgdAlgxApgACbh2IABAvQAABdgKA1QgJA2gJAeQAugIAdgZQAdgWAQgfQAPgeAGgdQAHgagBgQQAAgegMggQgMgfgbgYQgcgZgrgKIACA+gAAAiTQgZAMgiAYIAAAmQAAAiAFAnQAGAoATAlQAUAlAnAaQAGgRAFgbQAGgZAEgpQAEgnAAg/IgBg8QAAgXgCgOQgdAJgXANgAgXkfQgLAPgGASQgGARgCALQATgLAUgIQARgKAbgIIgGgPQgFgIgGgJQgGgGgJgBQgPAAgLAPg");
	this.shape.setTransform(-0.4,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("ABLHEQgigVgPgcQgOgcgEgXQgCgWAAgEQAAgMADgbIAJg7IAIg5QAEgZAAgIQgBgggQgQQgQgPgbAAQghAAgeAOQgfAOgYAVQgZAVgRAUQgPANgpBHQgqBIg1CQIiUgqICRkZIBgi4IA9h3IAohRIAfhCIAihKIAXgzIAQgoICGBIQAHADAKAIQALAHACAIIgEAHQgDADgDABIgOADQgKADgDACQgJAEgcAsQgcAsgjBHQgkBHgnBXQAwgRAggEQAfgFAHABQA2ABAgAUQAhAVAQAeQAQAhgBAmQAAALgDAaIgKA5IgJA5QgFAaAAANQAAAfAOANQANAMAXAAQAegBAfgTQAfgSAcgdQAcgdAYgfQAXgfAQgYIBPByQgRAbgaAkQgcAjgmAiQgnAjg0AXQg0AXhEAAQg8gBgjgVg");
	this.shape.setTransform(0.3,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("ABLHEQgigVgPgcQgOgcgEgXQgCgWAAgEQAAgMADgbIAJg7IAIg5QAEgZAAgIQgBgggQgQQgQgPgbAAQghAAgeAOQgfAOgYAVQgZAVgRAUQgPANgpBHQgqBIg1CQIiUgqICRkZIBgi4IA9h3IAohRIAfhCIAihKIAXgzIAQgoICGBIQAHADAKAIQALAHACAIIgEAHQgDADgDABIgOADQgKADgDACQgJAEgcAsQgcAsgjBHQgkBHgnBXQAwgRAggEQAfgFAHABQA2ABAgAUQAhAVAQAeQAQAhgBAmQAAALgDAaIgKA5IgJA5QgFAaAAANQAAAfAOANQANAMAXAAQAegBAfgTQAfgSAcgdQAcgdAYgfQAXgfAQgYIBPByQgRAbgaAkQgcAjgmAiQgnAjg0AXQg0AXhEAAQg8gBgjgVg");
	this.shape.setTransform(0.3,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン56_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AiAGuQg5gWgogoQgWgWgQgaQgOgagKgnQgKgngFg7ICgAAQACA9AUAkQATAlAfAPQAfAPAkAAQA+AAAogoQAngoABhFQgBhKgqggQgqgghFAAIhDAAIAAhpIBDAAQA+gBAkgkQAkgkABg3QAAgWgKgcQgKgcgbgVQgcgVgxgBQgwABgcASQgbAQgNAaQgNAagDAYQgEAYAAAQIiRAAQAAghAIgnQAIgnAdgvQAog9BAggQBAggBNgBQBEAAA/AbQA9AaAnA0QAoAzABBKQgBA8gUAlQgUAlgYAVQgYATgPAHQAYAOAeAaQAeAYAWAqQAWAqACBBQgCBZgqA+QgqBAhFAiQhGAhhRABQhFAAg4gYg");
	this.shape.setTransform(-0.1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-92.8,70.9,185.7);


(lib.トゥイーン56_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AkxG+QAKhOAbg+QAbg/A4g8QA4g9BihHQA+gvAlghQAkgjAPggQAQghgBglQgBhAgmgoQglgog7gCQgtACgaATQgZAUgMAeQgMAfgDAgQgDAhAAAZIiZAAQAAgZAFgnQAEgoAOgsQAOgtAfgoQAegoA0gZQA1gZBPgBQBaABBDAlQBCAkAlBAQAkA+ABBOQgCBGgcA0QgeAzgwArQgwAqg6AnQg6ApggAcQgiAcgVAcQgVAcgRAkIGUAAIAAB+g");
	this.shape.setTransform(-0.1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-92.8,70.9,185.7);


(lib.トゥイーン56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAqG2IAApgIjrAAIAAhyIBFAAQAhAAAngOQAngPAfghQAhghAOg6ICBAAIAANrg");
	this.shape.setTransform(-9.5,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-92.8,70.9,185.7);


(lib.トゥイーン55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAqG2IAApgIjrAAIAAhyIBFAAQAhAAAngOQAngPAfghQAhghAOg6ICBAAIAANrg");
	this.shape.setTransform(-9.5,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-92.8,70.9,185.7);


(lib.トゥイーン54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AA8G2IANjCIi0AAIgMDCIhQAAIAOjCIiUAAIAAiOICeAAIANjKIiUAAIAAiPICeAAIAPjCIBPAAIgODCICzAAIANjCIBRAAIgPDCICUAAIAACPIieAAIgODKICWAAIAACOIigAAIgMDCgAhfBmICyAAIAOjKIi0AAg");
	this.shape.setTransform(-0.1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-92.8,79.8,185.7);


(lib.トゥイーン52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AiJGjQg4gighg1Qgig2gRg8QgQg8gFg3QgGg1AAgkQAAgpAFg9QAGg7AQhAQARg/Ahg3QAig2A3gjQA4giBSgBQBSACA5AiQA4AkAjA4QAsBJAQBUQAQBUgCBUQABAigFA3QgEA3gQA/QgQA+ghA5QghA4g4AjQg5AkhVABQhRgBg4gigABLEqQAfgdAQhHQARhHAAh/QAAhmgMhBQgKhAgTgiQgUgjgagLQgZgNgcAAQgpgBgfAbQgfAagRBHQgSBHAACCQAABmALBBQAKBAAUAjQATAiAaANQAZAMAcAAQAsABAfgcg");
	this.shape.setTransform(-0.1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-92.8,70.9,185.7);


(lib.トゥイーン50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AiJGjQg4gighg1Qgig2gRg8QgQg8gFg3QgGg1AAgkQAAgpAFg9QAGg7AQhAQARg/Ahg3QAig2A3gjQA4giBSgBQBSACA5AiQA4AkAjA4QAsBJAQBUQAQBUgCBUQABAigFA3QgEA3gQA/QgQA+ghA5QghA4g4AjQg5AkhVABQhRgBg4gigABLEqQAfgdAQhHQARhHAAh/QAAhmgMhBQgKhAgTgiQgUgjgagLQgZgNgcAAQgpgBgfAbQgfAagRBHQgSBHAACCQAABmALBBQAKBAAUAjQATAiAaANQAZAMAcAAQAsABAfgcg");
	this.shape.setTransform(-0.1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-92.8,70.9,185.7);


(lib.トゥイーン48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAqG2IAApgIjrAAIAAhyIBFAAQAhAAAngOQAngPAfghQAhghAOg6ICBAAIAANrg");
	this.shape.setTransform(-9.5,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-92.8,70.9,185.7);


(lib.トゥイーン46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AkrGWQAmgTA8glQA9glBIg+QBGg/BIhfQAzhFAgg6QAgg8ARgvQASgvAJghIkyAAQgdAtg2BDQg3BEhZBWIh3hQQBWhGBBhPQBChPAthPQAthRAYhIIB5AvQAHABAMAHQALAHACAKQgBAHgIADQgJADgNADQgFAOgJARIgTAiIENAAQALAAAOgHQANgGAPgKIBhBzQgSAMgNANQgOANgHATQgVA7gbBBQgbBBgoBFQgoBHg6BMQg9BOg8A2Qg6A3g1AlQg0AkgoAYg");
	this.shape.setTransform(-0.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AgHFEIAArWICKARQAIAAAMADQAMADABAJQAAAEgCAEIgLAKIgHAHIgHAIIAAIKQA0gdA6gyQA7gyA2g5QA2g8Aog7IBRB4Qg8BPhLBOQhLBMhPBBQhQBAhJApgAoWExQAsgZAtgiQAtgkAmg0QAmg1AXhPQAYhLAAhwQAAhUgFg6QgEg6gEgbICSAKQAQAAAJAFQAJADAAAKQAAADgDADIgOAMQgGAFgBADQgBADAAAEIAACGIgBBPIgBAuIgEAlQgMBagcBHQgdBGgnAzQgmA0goAkQgoAlgiAag");
	this.shape.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AklHbIAAu1ICQAZIAQAFQALAEABALQAAADgIAHIgOANQgIAGgBADIAAE8IA5hZIA5AZQAbAMAhAUQAiATAzAhQAuAfAiAZQAhAXAZAVIAxAqIhfBzQgsgqg3grQg2gsg+goQhAgnhIgeIAAIFg");
	this.shape.setTransform(15,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AlMG6QgHgGgHgMIhUiQQAwgKBEgWQBDgVBTgqQBTgpBfhHQBbhGBFhEQBGhHAvg8QAwg8AaglIBTB4QgYAggoAyQgnAxg6A7Qg7A8hPBBQheBMhJAwQhKAvhEAhQhEAhhJAfIgIAZQgEALgHABQgFAAgHgFgAk5kHQg+gmhIggIBKhxQA8AaBDAmQBCAmA6AvIhPBzQgzgrg9gmg");
	this.shape.setTransform(2.5,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAqFIQAcgHAkgOQAkgNAogaQAngZAlgrQAkgsATgtQATgtAHgnQAGglgBgbQACgygUg4QgSg4gygwQgmgjgmgRQgngRghgFQghgFgXgCQgUCPgbBpQgZBngbBGQgbBHgVAoQgSAngYAoQgYAogcAcQgcAbggABQgRAAgmgUQgmgUgqgoQgrgpgeg8Qgeg9gBhQQAAhjAnhbQAnhbBGhHQBHhIBhgpQBggpBzgBQB+ABBlA1QBkA1A7BhQA7BiABCHQAABNgVA/QgVBAgiAyQgvBBg0AqQg0ArgwAYQgwAYghAMgAiYkYQgmATgrApQgrAqgaAvQgbAwgMAvQgMAsAAAlQAAAwAPAhQAOAhASARQASAQAMAAQASgBAXghQAWghAXg3QAXg2AVhBQAVhCAQhDQAPhDAHg5QgbAIgmASg");
	this.shape.setTransform(0,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Al5H9IAAohIgTAYIgVAUIh3hIQA/hEArg/QArg+AghIQAghKAfhiICdAlQAGADADADQADAEAAACQAAAEgDAEQgDAEgEADQgNAHgFAFQgGAFgEALIgTAsIgVAtQgMAXgTAkIARAIIAEAFQACAEAAADQAAAHgFAFIgIAIQgFACgGAGQgHAGgBAHIAALFgABDH9IAArTIgpAAQghBAgfArQgfAtgiAnIh/hEQA8g9Apg8QApg7AfhHQAehHAbhfICOArQAFACADADQAEADAAAFIgCAFQgBADgFADIgMAGIgLAHIgJAUIgPAmIgKAbIHAAAIAACBIlLAAIAAB5IESAAIAAB4IkSAAIAAB5IE4AAIAACFIk4AAIAADkg");
	this.shape.setTransform(-2.7,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AgtGbQAigXArgvQAvguAthXQAlhLAShSQAShQAAhTIgBgnQgBghgDg2QgDg0gGhAQgGhBgKhCICRAAQAEgBAKADQAKACACAMQgCAHgJAHQgKAGgBAJIACAVIADAeIACAWQAGA/AEBBQAFBAAAA8QAAAkgFA3QgFA1gQBEQgPBEghBLQgrBgguA6QgtA7giAhgAkbDPQgchPgNhSQgNhRAAhTQABhKAGhEQAGhFAHg2IAOhaICDAHQAGAAAJADQAJADABAIQAAAHgHAEIgKAIQgJAJgIAnQgJAogFA1QgGA1gEAxQgDAyAAAcQAAAZABAQIAHAiIAehMQARgsAXgzIBUA3QgnBZgjBYQgiBagbBdg");
	this.shape.setTransform(-0.3,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AADF9IAoACIA1ABQAiABAXgMQAXgMAQgjQATgmAKhNQALhOgFhoIj+AAQgNAogQAtQgQAtgcAyQgcAygrA2QgqAzgoAjQgpAjglAXQgnAZgjAUIhrhmQAtgVAwgcQAxgdAwgrQAwgtAshEQAuhHAThDQAUhBAFg+QAFg9AAg3IlzAAIAAh/IGzAAIAAirICYANQAFgBAHADQAJAEAAAHQAAAHgJAGIgRAPIAAB1IG1AAIAAB/In5AAQgBAfgDAdIgGBAIFxAAQAEBtgEBhQgFBigYBfQgVBOggAsQghAsg1ATQg0AThSACg");
	this.shape.setTransform(-0.5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAqFIQAcgHAkgOQAkgNAogaQAngZAlgrQAkgsATgtQATgtAHgnQAGglgBgbQACgygUg4QgSg4gygwQgmgjgmgRQgngRghgFQghgFgXgCQgUCPgbBpQgZBngbBGQgbBHgVAoQgSAngYAoQgYAogcAcQgcAbggABQgRAAgmgUQgmgUgqgoQgrgpgeg8Qgeg9gBhQQAAhjAnhbQAnhbBGhHQBHhIBhgpQBggpBzgBQB+ABBlA1QBkA1A7BhQA7BiABCHQAABNgVA/QgVBAgiAyQgvBBg0AqQg0ArgwAYQgwAYghAMgAiYkYQgmATgrApQgrAqgaAvQgbAwgMAvQgMAsAAAlQAAAwAPAhQAOAhASARQASAQAMAAQASgBAXghQAWghAXg3QAXg2AVhBQAVhCAQhDQAPhDAHg5QgbAIgmASg");
	this.shape.setTransform(0,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AAqFIQAcgHAkgOQAkgNAogaQAngZAlgrQAkgsATgtQATgtAHgnQAGglgBgbQACgygUg4QgSg4gygwQgmgjgmgRQgngRghgFQghgFgXgCQgUCPgbBpQgZBngbBGQgbBHgVAoQgSAngYAoQgYAogcAcQgcAbggABQgRAAgmgUQgmgUgqgoQgrgpgeg8Qgeg9gBhQQAAhjAnhbQAnhbBGhHQBHhIBhgpQBggpBzgBQB+ABBlA1QBkA1A7BhQA7BiABCHQAABNgVA/QgVBAgiAyQgvBBg0AqQg0ArgwAYQgwAYghAMgAiYkYQgmATgrApQgrAqgaAvQgbAwgMAvQgMAsAAAlQAAAwAPAhQAOAhASARQASAQAMAAQASgBAXghQAWghAXg3QAXg2AVhBQAVhCAQhDQAPhDAHg5QgbAIgmASg");
	this.shape.setTransform(0,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ag1HyQgygKgsgcQgtgcgcg0Qgbg0gChSQABgmAEgjQAFgjAFgbQghgGgmgKQgmgJgqgPIAUiCIA/AWIAxAOIAyAKIAThDIAehdIg/gNIg0gLIg7gPIALiLQAhAOAeAKQAeALAhAIQAiAJAsAIIAfhZIAWhDQAKgeAIgeICIA0QAIACAJAFQAJAGACAKQgBAKgLABIgZAFIgWArIgWAzIgTAvIAzABIAwAAIA6AAIgcCBQgUABgWAAQgWAAgggCIhOgIIgXBDQgMAlgPA3IAgADIAtABQAoAAAggCQAhgCAlgFIggCDIgqADQgcACgsAAQgfAAgZgDIgwgDIgKA0QgEAegBAcQgBAaAJAdQAIAcAXAXQAbAYAeAGQAdAGAYAAQAzAAAygRQAygRAigpQAigpABhIQgBgpgKgjQgKgkgMgbQgNgagIgNIBvg5QAQAaASAjQASAmANAwQAOAyAAA9QgBBOgfA3QghA4gzAiQg0Ajg8AQQg8ARg6AAIgEAAQgpAAgwgKg");
	this.shape.setTransform(-0.5,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ag1HyQgygKgsgcQgtgcgcg0Qgbg0gChSQABgmAEgjQAFgjAFgbQghgGgmgKQgmgJgqgPIAUiCIA/AWIAxAOIAyAKIAThDIAehdIg/gNIg0gLIg7gPIALiLQAhAOAeAKQAeALAhAIQAiAJAsAIIAfhZIAWhDQAKgeAIgeICIA0QAIACAJAFQAJAGACAKQgBAKgLABIgZAFIgWArIgWAzIgTAvIAzABIAwAAIA6AAIgcCBQgUABgWAAQgWAAgggCIhOgIIgXBDQgMAlgPA3IAgADIAtABQAoAAAggCQAhgCAlgFIggCDIgqADQgcACgsAAQgfAAgZgDIgwgDIgKA0QgEAegBAcQgBAaAJAdQAIAcAXAXQAbAYAeAGQAdAGAYAAQAzAAAygRQAygRAigpQAigpABhIQgBgpgKgjQgKgkgMgbQgNgagIgNIBvg5QAQAaASAjQASAmANAwQAOAyAAA9QgBBOgfA3QghA4gzAiQg0Ajg8AQQg8ARg6AAIgEAAQgpAAgwgKg");
	this.shape.setTransform(-0.5,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ah1HEQgxgWgagmQgagkAAguQABgjASgkQAVglAngZQAngZA7gBQA8ABAvAaQAvAaAgAgQAgAhAQAWQAOgMATgVQASgVAOgfQAOgfABgrQgCg7gggiQgfgjgtgNQgsgPgpABQgoAAglAJQgjAJgXAKQglAVgtAlQgtAlgrAqQgrAqgiAkIhlhqQA+guBCg4QBDg3BMhPQBOhQBdhzQgjAIgjAGQgnAHgxAEQgyAEhHAAIgciGIAoADIAyADIAtABQASAAAqgDQArgDA0gHQA2gHA3gLQA3gMArgQIA/BgIgwApQgWASgaAaQgaAZgoApIhpBqIAsgEIArgCIAdgBQBSACA8AmQA8AmAgA6QAgA8ABBDQgBBLggA+QggA+g4AuQg3AthHAZQhIAZhQAAQhJAAgzgXgAhKEKQgNAJgFAMQgEAMAAAIQAAAUAPANQAPALAYAFQAVAFAVAAQAcgBAVgDIAhgHQgIgPgQgWQgOgVgYgRQgWgRgjgBQgYAAgNAJg");
	this.shape.setTransform(-1.8,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ah1HEQgxgWgagmQgagkAAguQABgjASgkQAVglAngZQAngZA7gBQA8ABAvAaQAvAaAgAgQAgAhAQAWQAOgMATgVQASgVAOgfQAOgfABgrQgCg7gggiQgfgjgtgNQgsgPgpABQgoAAglAJQgjAJgXAKQglAVgtAlQgtAlgrAqQgrAqgiAkIhlhqQA+guBCg4QBDg3BMhPQBOhQBdhzQgjAIgjAGQgnAHgxAEQgyAEhHAAIgciGIAoADIAyADIAtABQASAAAqgDQArgDA0gHQA2gHA3gLQA3gMArgQIA/BgIgwApQgWASgaAaQgaAZgoApIhpBqIAsgEIArgCIAdgBQBSACA8AmQA8AmAgA6QAgA8ABBDQgBBLggA+QggA+g4AuQg3AthHAZQhIAZhQAAQhJAAgzgXgAhKEKQgNAJgFAMQgEAMAAAIQAAAUAPANQAPALAYAFQAVAFAVAAQAcgBAVgDIAhgHQgIgPgQgWQgOgVgYgRQgWgRgjgBQgYAAgNAJg");
	this.shape.setTransform(-1.8,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AjFHOQAkgXAigdQAigdAbgkQAagkAOgrIgjAIQgPAEgOAAQgZAAgagJQgZgJgXgTQgkghgOgtQgNgsABgtQgBhCAWgwQAVgzAqgcQArgcA9gBQARABANACIAaAHIgChaIiAAIQhJAFhSAGQhRAIhMAJIAAiKIBdgBICIgDQBTgCB8gHIgChLQgBgwgGhBICDAIQAVABAIAEQAHAEAAAIQAAAGgCADQgDAEgGAEIgIAJQgCADABAEIAAB7IBngGIBMgFIBDgFIBQgHIAACBIhaABIhnADIiFAFIAACoQAKAVALAjQAMAhABA3QABAcgMA9QgLA9gnBSQgrBTgrA2QgqA2ghAggAhugFQgWAbgBAxQABAjAKAWQALAWAOAKQAQAKAOAAQAOABATgLQATgLAPgXQANgZAAgrQABgTgFgUQgEgUgMgPQgJgJgMgEQgMgEgLAAQgkAAgXAcg");
	this.shape.setTransform(-0.1,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("ACEUYQhDh/hZi+QhZi8hWjzQhSjrgYiJQgYiLADgvQABhpAYgpQAXgrAXgRIAAk+IkTkXIjSjVIi6i3IAAj0ICjCsICLCSICbCiIDWDfIAAjpQAAgHgEgJQgDgJgMgWQgNgWgFgMQgFgMAAgKQgCgRARAIQAPAJAqAoIEPD9QgKBxgDBXIgFCKQEBEHCqCsQCoCoBvBuIDAC+IAAEGQifiuimixQilixiYidIkHkPIgFCkQAaARAbAWQAcAXAjAgQB/B+BWCKQBVCJAtCJQAtCMAAB9QABBVgcA5QgbA4hLgKQgvgLg1giQg1gkgygxQgegdgfglIhHhWQAcBtA2B5QA3B6BGB7QBGB8BMB2gAgTC6QgJAeAAAmQACBQAdBNQAfBNAnA5QAoA8AcAZQAcAdAgAMQAeALAVgUQAWgUABhDQgBhbgthkQgvhhhKhLQgYgXgYgQQgYgSgTAAQgbABgJAeg");
	this.shape.setTransform(0.2,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-300.5,255.3,601);


(lib.トゥイーン22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AlAGDQgWgLgQgQQg+g8gfhuQgehtAAipQABhMAFg3QAEg3AJgrQAIgrAKgnICEAjQAHACAKAFQAKAGABAKQAAAKgKAFQgKAGgPAEQgGAhgGAlQgFAlgDAwQgDAwAABBQABByAPA8QAPA8ATAVQASAVANgBQARAAARgUQAQgVAQgeQAPgdANggIAWg0IBjBYQggBIghA9QghA9gnAlQglAlgxABQgcAAgXgNgAEigbQgehcghhCQgjhCgfgwIB7g8QAeAoAoBDQAnBDAkBjQAjBhARCKIiQAlQgRh8gehZg");
	this.shape.setTransform(1.9,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AHTNRQhagnhDhcQhFhdg3iAQg4iAg2iUIDChIIAjBqQAVA+AaA/QAbA+AcAwQAeAvAfANQAYAMAlgVQAlgVAihaQAihaAMjDQAGhvgBhSQgBhSgGhDQgGhCgJg9QgcgUgSgQQgRgQABgRQACgSATAAQASgCAOADID5ApQAPBLALBPQALBPAEBgQAEBggHCBQgQEghCCiQhCCih6A2QgfANgrADIgMAAQgmAAgugSgAuOicQAtjcBMiMQBKiNBQhSQBRhSA7gtIDhDGQhAA3hGBWQhFBVg/CEQhBCEgsDCg");
	this.shape.setTransform(-4.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.6,-205.1,249.2,410.3);


(lib.トゥイーン20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ai4GfQAkgKAzgTQAzgTA2gkQA3gkAzg8QAmgvAZg6QAYg6ABhCQgCgygSgcQgTgcgZgKQgZgKgTABQgmABgzAPQgyAPg2AWQg3AXgxAXIhSAmIg3iJIBZgjQA4gVBCgVQBDgUBBgOQBEgOA6gBQARgBAbAEQAbAFAfAOQAfAOAbAeQAgAlALAvQAKAugBAoQAABcggBYQgfBXg7BJQg0A9g5AnQg4Ang1AWQgzAYgqAOgABNlkQg2gEg8gGQg+gGg/gJIgKiUQBEARA5AIQA1AJA4AEQA4ADBEABIgRCHQgmgBg2gDg");
	this.shape.setTransform(-1.4,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("Ai4GfQAkgKAzgTQAzgTA2gkQA3gkAzg8QAmgvAZg6QAYg6ABhCQgCgygSgcQgTgcgZgKQgZgKgTABQgmABgzAPQgyAPg2AWQg3AXgxAXIhSAmIg3iJIBZgjQA4gVBCgVQBDgUBBgOQBEgOA6gBQARgBAbAEQAbAFAfAOQAfAOAbAeQAgAlALAvQAKAugBAoQAABcggBYQgfBXg7BJQg0A9g5AnQg4Ang1AWQgzAYgqAOgABNlkQg2gEg8gGQg+gGg/gJIgKiUQBEARA5AIQA1AJA4AEQA4ADBEABIgRCHQgmgBg2gDg");
	this.shape.setTransform(-1.4,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AktHEQg/gZgagnQgagmABgqQABg1AggqQAigqA+gZQA/gZBYAAQAdAAAXACIAjADIgEiKIgChmIgBhTIAAhWIAAhsIAAhVICOAUQAGABALADQAKAEACAIQAAADgDADQgCADgLAGQgGAEgDAEQgEADgBAHIgDAkIgCA5IgBA1QAMACAKAAIAcAAQBogBA5gOQA5gOAagMIAACMQhCAPg3AHQg5AGgpAAIgogBQgWAAgSgCIAABDIAAA8QABAcACAoIAFBfQBEAWA3AWQA2AWAyAcQAzAbA4AnIhMB5QgogfglgYQglgZgpgWQgpgWg0gWQAEA7gQAqQgQAqgzAWQgwAWhgAAQhtAAg+gZgAjuD/QgfASAAAbQACAYAXAOQAXANAeAFQAeAFAVAAQAvgBAUgRQAUgRAEgaQAFgZgBgbIgtgHQgbgDgigBQg5ABgeARg");
	this.shape.setTransform(-0.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.トゥイーン15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB0000").s().p("AktHEQg/gZgagnQgagmABgqQABg1AggqQAigqA+gZQA/gZBYAAQAdAAAXACIAjADIgEiKIgChmIgBhTIAAhWIAAhsIAAhVICOAUQAGABALADQAKAEACAIQAAADgDADQgCADgLAGQgGAEgDAEQgEADgBAHIgDAkIgCA5IgBA1QAMACAKAAIAcAAQBogBA5gOQA5gOAagMIAACMQhCAPg3AHQg5AGgpAAIgogBQgWAAgSgCIAABDIAAA8QABAcACAoIAFBfQBEAWA3AWQA2AWAyAcQAzAbA4AnIhMB5QgogfglgYQglgZgpgWQgpgWg0gWQAEA7gQAqQgQAqgzAWQgwAWhgAAQhtAAg+gZgAjuD/QgfASAAAbQACAYAXAOQAXANAeAFQAeAFAVAAQAvgBAUgRQAUgRAEgaQAFgZgBgbIgtgHQgbgDgigBQg5ABgeARg");
	this.shape.setTransform(-0.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-92.8,124.2,185.7);


(lib.ForeImage = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.cooking_hdr();
	this.instance.setTransform(0,796.7,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,796.7,1920,426);


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


(lib.Tuna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.tuna();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,439);


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


(lib.Body_back_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru_butt_upper();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392,437);


(lib.Body_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.nobuteru_butt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392,437);


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


(lib.Ring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("ATGAAQAAH6lmFmQlmFmn6AAQn5AAlmlmQlmlmAAn6QAAn4FmlnQFmlmH5AAQH6AAFmFmQFmFnAAH4g");
	this.shape.setTransform(122.3,122.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,254.6,254.5);


(lib.Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtfNgQlmlmAAn6QAAn5FmlmQFmlmH5AAQH6AAFmFmQFmFmAAH5QAAH6lmFmQlmFmn6AAQn5AAlmlmg");
	this.shape.setTransform(122.3,122.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.6,244.5);


(lib.Circle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

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


(lib.WordFrame_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.wordFrame();
	this.instance.setTransform(196,96.5,0.065,0.065,0,0,0,196,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183,90,26,13.1);


(lib.PanelDisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B60000").ss(1,1,1).p("AiQgQQALgCAQAAQAJAAASABQAqABAhAEQAYACBFAMIBDAOQAAACgDAB");
	this.shape.setTransform(19.1,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B60000").ss(1,1,1).p("AilAMQAehFA2g7QgOBrALBkQAEAUAEAGQAshoAsh6QgGBAAHBkQACAYADAXQACgBACgDQADgFABAAQAhhZAwhTIgEBfQAAAkADATQAbg8AZgdQAEgFAEgE");
	this.shape_1.setTransform(18.9,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B60000").ss(1,1,1).p("AifAAIAkg1QABACAAAJQgBAZAGAkQAEAQADAEQALgdAKgOQANgXARgPQAHgHAFACQAEAIACAMQABADABARQADAZAJAMQAEAEABAAQADAAACgDQACgCABgBQAIgWAEgGQAHgPALgJQAHgHAFAEQADACAAAFIAPApAAsAZQABgCABgCQAhg1AHgLIAAAVQAAAyAEAaQAEgEACgHQARgcANgMQAFgDAKgIQAFgCAOgMQgCAIgCAPQAAATAEASQgCAAAAAC");
	this.shape_2.setTransform(18.2,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B60000").ss(1,1,1).p("AihgCQADgLAGgDQAGgGAJAGIAGAHQAEAHAHgFQAFgIAEgBQAEgDAGAEQAEACACAGQAIALAHAAQAFABAIgFQAJgHAGAAQAGABAHAKQAGAKADACQAHADANgFQAMgGAFABQAEAAAHADQAHADADABQAEAAAOgEQALgFAIAGQABABAEAEQABAAAGgCQAGgDAKABQAFABAMADQATAGAhgK");
	this.shape_3.setTransform(19.6,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B60000").ss(1,1,1).p("ABmhCQAGADAEAIQABADAEAFQAGAKAAAEIAAAMABHAfQACACAGAFQAEAEAAAEQAAAFgCAEQgEAKAAAMQAAAOAIAHQAKAJARgCQAEgCAHgBAg/hmQACAAAAAAIABACQAAABgCgBQAAgBgBgBgAh6hNIAKAAQAAgDAFAAQAJgCANgOQACgBAFgCQADgCACgCQABgBAEABQADABACAAAhTAyQAKAGARAAQAUACAOgBIAOgEQAEgCAFgIQALgNAEgO");
	this.shape_4.setTransform(16.5,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B60000").ss(1,1,1).p("AB9gIQAGAGAAAEABaguQgCAugJAkIgEAPQgDAJgJAMAAygqQABAHABAOQABALgCAJQAAABgHAQQgFAFgBAEQgDAEgCAHQgEAPABAFQACAFAGAIQAHAIABAEAhAhzQgEATgZAVQgJAHgHADIgKAEQgJADgCAAQABgCAAgCAg5hdQALAFAJAKQAIAHAAABQAEAEABAFQACALgHAJIgEAIIgHAIQgMAJgLAFQgKAFgPAAQgDAFgEAAABoB0QAFgEAGgKQABgCAFgFQADgMAEgFABZAFQAPALACAdQADAJgDALIgCAGAAKg7QAAAxgZAgQgbAigmAA");
	this.shape_5.setTransform(20.4,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABkApIgCgBIgBAAIgCgBIAAgCIAAgDIADgBIACAAIAEgBIAGgDIAGgFIAHgFQAGgFAFgGQAGgHADgGIACgCIACgBIACACIABADIgBADIgDADIgEAGIgEAFQgEAGgGAFIgPAKIgIAFIgEABIgBAAgAAaAlIgDgBIAAgCIAAgCIAAgDIACgUIACgbIABgHIABgEIAAgBIAAgBIABgBIACgBIABABIACABIAAACIAAACIAAANIgBADIAAAEIAIAGIAJADIAJAFIADABIAAACIgBADQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBgBIgCgBIgMgHQgGgDgFgDIAAAJIgBAGIAAADIAAAEIgBAHIAAAEIAAACIAAAAIgCACIgDAAgAglAfIgCgBIgBgDIAAgBIABgCIAEg5IABgCIADgBIADABIAAADIgDA1IAFgEIAGgIIAEgIIAEgIIABgBIACgBIADABIACADIgCAEIgCADIgCAGIgJAMQgFAFgEADIgFADIgEAAgAhNAcIgBgEIAAgBIACgCIAMgHIAGgHIACgHIACgbIACgCIADgBIACABIAAABIABABIAAAAIgDAcIgBAGIgDAFIgEAEIgFAFIgFAEIgFADIgDABIgCgBgAiSAYIgBgDIABgCIAAgBIABgBIACAAQARgGAKgLQALgLAFgSIgJAAIgNgBQgDAGgEAFQgGAFgHAFIgCABIgCABIgCgBIgBgDIABgCIABgBIAAAAIACgBQAGgDADgEQAFgEACgEQACgEAAgDQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIADABIAAACIAAABIAMAAQAGABADgBIACgBIACAAIADABIAAADIAAAFIgDAHIgEAHIgDAHIgHAJQgEAFgEADIgKAIIgHADIgGADIgEABIgCgBgAB1gHIgEgBIgJgCIgIgDIgHgDIgCgCIAAgCIAAgDIADgBIABABIABAAIADABIAGADIAJADIAIACIADABIAAADIgBADIgCABIgBgBg");
	this.shape_6.setTransform(18.3,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// レイヤー 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF91").s().p("AB8DwQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYQBGAHApgCQAEABBoAfIAQACQAKAFAEAYQAGAcAEB2QAECQgLA2QgMA5glAAIgFgBg");
	this.shape_7.setTransform(18.7,24.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#709C00").s().p("AB8DwQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYQBGAHApgCQAEABBoAfIAQACQAKAFAEAYQAGAcAEB2QAECQgLA2QgMA5glAAIgFgBg");
	this.shape_8.setTransform(18.7,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(4));

	// PanelScreenBody
	this.instance = new lib.PanelScreenBody();
	this.instance.setTransform(18.7,24.1,1,1,0,0,0,18.7,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,38.4,49.3);


(lib.PanelButton_ice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#070000").ss(0.8,1,1).p("ABWAKQAGgEADAAQAEgCAEAFQACABABAFQABAEADABQADACAEgCQAIAAAJADAADgIQAAADADACQACADAHAJQACACAAACAgBgcQAEAAANABIgbAgABBgUQAAAHgFANAAhAUQAFgMAPgbIAAgFQgBAAgBgBQgJgCgEAAQgGAKgCAEABNgQQAAATgIAPQgIAQgLAAAChAFQgBAGgFAKQgDAEgDAFQgFAFgCADQgFAGgBAHQAZgDADABACqAkQgBAFgCAKIAAAcAhohDIADAEQABAAAAABQABACAAACQACAAAAABQABAAgBACQgEADgBACQgEABAAAEQAAADABACQACAGgCAEAifgDQgFACgDABQgDAHADADQABAEAGACQANAFASAAQATAAAKgHQADAAAAgDQAAgDgCgCQgBgEgGgCAiTgNQgEAAgEADQAAAFADACIAFADQACAAAGABQAEACAIABQAMAAAEgEQADgDgBgBQACgBAAgCQgCgCgBgBQgCgDgDAAAg7gdQAAAEABAJQgBAHgCAFQgBAEgIAGQgCADgDgBAgLgnQAAAGgHAEQgCABgBABQgGADgIAAAhIgtIAbAAQAGAAAHACQgEADgJAKQgDACgBgBAgVgbQgFAPgDAMQgBABAAAEIAAABAiYhNQACABABAEQABADgCACQgEADgBABQgBABAAAEQAAACAEAHAiGhOIAEAEIAEAFIgGAEIAAADQAAABACAEIAAACAh/ggQABACAAACIAHAIQACABAAACQAAACgCABQgHAIgJgCQgCAAgCgBQgCAAAAgDQgBgBAAgCQAAgDABgBQABAAABgBQADAAABgCQAGgEACgGgAh/gmQAAADAAAD");
	this.shape.setTransform(21.9,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PanelButtonBase
	this.instance = new lib.PanelButtonBase();
	this.instance.setTransform(21.1,13.8,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,43.7,29);


(lib.PanelButton_french = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#191938").ss(1,1,1).p("AB6ghQgDACgDABQgGACgIgBIgHAAIgFABAB0geQgCADgEALQAAABgCADQADAAACAAQADAAABgBIACAAQACgCAAADABYgRQACABASAEQgCACgDAEQAAACgDACIgBACIgDAAQgCADAAABAgCg9QgCAHgFALQgEAKABAEQACgCAFAAQABgBACgBQADAAACgBIABABQACgDAEAAAAmgvQADADAEACQABgCACAAAAhgXQAFACAGgCQADAAACgBIAQgHAACAdQAIgEABAAQADACACAEIAAAEQABABACgBIADAAQAFgDACAAQAGgCACABQABAAACADQACADACAFIACADABPAZQACABAEAAQAFAAABABQACADAIgBIABACIgCABQgNANgGAGQgEAEgCABQgGADgCACACQAzQAAADgDACIgCAFIgBAFIgBAEQAAABgBABQgBADAAABACWAfQgBAGgCADQgBACgBADIgBAGQANAFAHAEQABABABABABbAtQACAGAEAEQADADADACQABABADAEAg5hEIAQAEQACABAEABQABAAAAABIAEgBQADAAAAABQgKAOgKAGQAAACgEACQgDADABADAhng6QgRAqAAACQgCAHgDAEIAEAAIAIADQAHACACADQAHgSAGgOQAAgDADgCIAEAAQACgBADgFIABgIQgCgFgEAAQgBgCgDgBQgDgBgDABQgBgDAAgBAiNhJQgBgBgCAAQAGACAHADAiQhKQgKgCgCACQgEABgDADQgDADACAEQAAACADAAQABACACAAQAEABgCAEQAAAFgDAMQgBAGgBAMIAAADQABACABAAQAJADAKAAQAIgTACgRQABgLADgGAgaAKQACACADAEQAGADABADAgaAKQgDAEgDAGQgEAJgCAGQgCACgBACAgQgGQgFAGgFAK");
	this.shape.setTransform(21.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PanelButtonBase
	this.instance = new lib.PanelButtonBase();
	this.instance.setTransform(21.1,13.8,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,43.7,29);


(lib.PanelButton_fax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#070000").ss(1,1,1).p("AB3gRQAAACAAACQgBAJgDAEQgFAIgGAAAB3gNQAFADAIACQAFABAJABQAFACABADQABABgCAHQgNAYgUAVIgDAAAgBgDQACABAGgDIAVgBQAEgBAHAAQgIAHgHACQgFAFgGgBAgvglQAaAAAOACIABACIAAABQgQAigTANQgDAAAAABAADAGQAEAFAAAGQABABgCAFQgFANgGgDAA1ADQADAHgCACIgBAEIAAACABHABIAAAPACUAjQAFAAALABIADAAQABABAAABQAAACgBAAQgDAEgGAGIgFAFIgFAFQgCABgCABQgCABgDAAACZA3QAGAFAJAMABdABQAAAUgIAOQgIAOgLAAAhqgXQAAgJALgSQAGAHAAAIQABAEAAAFIgBAJQgBAOgEAKQgBAEgBABQgDADgCgCQgBgFgFgIAiXgiQAGAEAIAAIADAAQACAAABACQAEAAACABIAJAAQABABADAAQADAAAAADAiYgKQADAAAGABQADAAAGACIAKAAQADAAAEABQACAAABABIAEAEAiIhHIAAAjIAZAAIAAgjgAiXgiQABgHABgFIAAgEIgBgCQgCgDgEAAIgEAFIgGAlQgBADAAAHQACAEAEABQACAAACgBQACgBAAgCQAAgEABgBAiXgfQAAgBAAgCAiOAMQABACAHACQAEAAAKACAiMgDQgLAXgDAHQARAFANABIAMgbAiIACQANAFAGAB");
	this.shape.setTransform(22.4,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PanelButtonBase
	this.instance = new lib.PanelButtonBase();
	this.instance.setTransform(21.1,13.8,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,43.7,29);


(lib.PanelButton_curry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#070000").ss(1,1,1).p("ABHAaQAGgFAKAAQALABAFAHQACABAGAKQAFAGAFADQALACAGgEQADAAAGgCQAFgDAEAAAgfgRQAVAGAKADQAAAEgEAEQgRAigEAKIgCgDAAYgHQAAAKgGASQgHAYgCAHQAcgLAQgKAhagwQgEAGAAAGQAAADACABAh1g0QABAGgBAEQgDAEAAACQAAADAFAAAhlgGQgKAGgIAKIgDABAhbgCQgFACgFAFIgIALQAJgBAHgEQALgEAAgHQAAgFgLgFQgKgFgPAAQgPAAgLAFQgKAFAAAFQAAAHAKAEQALAFAPAAQAFAAAEAAAg5gYQAPAEALADQgLAbgPAZAgYglQgDALgEAJAiAgLQgMAKgEACQgDADAAABAiJg0QgCADAAAGQAAAEABAHAhvgJQgMAHgOAL");
	this.shape.setTransform(22.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PanelButtonBase
	this.instance = new lib.PanelButtonBase();
	this.instance.setTransform(21.1,13.8,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,43.7,29);


(lib.PanelButton_crouton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#191938").ss(1,1,1).p("AB1AEQACACABACIAEACABaA4QAdgDAegXQARgMADgCQABgCADgBAA4AKQgCADgBACQgBAEgFAFQgCACgCAFQgIAQgDAEABGgOQgBAJgGAFQgDAAgBAEIgCAEQgBABAAABQAGAFAEAGQADADgCAEIAEAAAgIghQgBABgHANQgCAEgGAIIgVAaQgJAMgIADAAIgZQgWAbgOAhQAbgLAKgFQABAAADgDAg+gyQABAAAJAFQAEACAJAEQABADgGACQgBABgCADQgDACgBADQgJALgVATQgLAKgHABAhCgyIgKALQgDACgCAAQgJAIgJAEIgBAAIABgBQAAAAAAABAhxgrQgBACgBABAhugnQgEAJAAAUIAAAFQAAABgBABQAAABAAABQgCABgBAAQgLAGgDADIAAAAAiogoQABgCAYgNQAFAEAKACIAGAEQAGADABACQgGAJgLAIIAAAAQADANgDAOQgBADABACAiogoQAHAEALAFQAGADALAEIABABAiogoQgCAGAAALIAAAMQAAAAgBADQAAABgBACIAAACAirgIQAMAIAKADQABABAFABQADACACADIAGgB");
	this.shape.setTransform(22.9,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PanelButtonBase
	this.instance = new lib.PanelButtonBase();
	this.instance.setTransform(21.1,13.8,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,43.7,29);


(lib.PanelButton_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#070000").ss(1,1,1).p("ABgAAQAAgCgDgDQgCgDgEAAQgEAAgDADQgDADAAACQAAAEADADQADADAEAAQAEAAACgDQADgDAAgEgABcAgQAFgDAJAAQAJAAAFAGIADAHQAEAHAIAAQAGAAAEgCIASgHAAbAAQgEAIgDAJQgEAIAAAGQAAAGAEAHQANAEAXgCAgqgVQAYAAAZAHQADAAAAABIAAABIgRAvQgCAEgBABQgCADgDgDAAbAAQAFACAJACQACAAAEgBQAEAAACABQACAAABAAQAGAAABgCAAlgTQgEAHgGAMAg5AkQADABAcAEQAEAAABABQABAAACACIADAAAhrgcQAHABAPAFQgOAqgDAMQgKgEgNACQgFAAAAgDAiigwIAAA9IAwAAIAAg9g");
	this.shape.setTransform(22.7,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PanelButtonBase
	this.instance = new lib.PanelButtonBase();
	this.instance.setTransform(21.1,13.8,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,43.7,29);


(lib.Panel_share = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AILB0QgdgGhQgXQl8hsmOgnIg1gHIAAABQgEACgJgBIgrgEQgagDgegFIh6gVQgNgCgFgFQgFgDgBgFQgCgFADgEQADgFAHgBQAGgBAHACIB6AWQA8AJAZABQAIAAAHACQAGgBAIAAQG3AoGrB6QBBASAWAFQAyALAogBIAIABQADgCAEAAQABAAAAAAQAAAAAAAAQABAAAAAAQgBAAAAgBIAOAAQAIAAAEADQAIADgBAHQAAAIgKADQgDABgLAAQgFAFgNAAIgEAAQgwAAg8gNg");
	this.shape.setTransform(60.5,173.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// レイヤー 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJNQNQjDgeiKgvIAAAAQiMguiGgVIAAAAQkTgskSgHIAAAAQhMgBgSgIIAAAAQgYgIAAghIAAAAQAAgDAZhfIAAAAQAfh0AWhsIAAAAQAOhLARinIAAAAQAYjhAAibIAAAAQAAkggtj9IAAAAQgYiCgchbIAAAAIgBAAIABAAIgBgDIAAAAIAAADIgShZQAEgOALgKIAAAAQAPgPAbAAIAAAAQB4ATC4AiIAAAAQFsBEFFBJIAAAAIAIAHQARAIAKAKIAAAAIAMAOIAAAAIAEAEQACAEAKAVIAAAAQAEAHAFBDIAAAAIABAGIAAAAIAUDnIgBEkIAAAAICHOsQBNCtAABLIAAAAQAAAOgGAGIAAAAQgLAMgjAAIAAAAQgQAAgdgGgAGtspg");
	mask.setTransform(61.2,80.7);

	// レイヤー 2
	this.instance = new lib.PanelSkin();
	this.instance.setTransform(63.9,84.3,1.167,1.167,19.2,0,0,90,84);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:89.9,regY:84.2,scaleX:0.96,scaleY:1.01,rotation:0,skewX:21,skewY:12.8,x:60,y:92.2},4).to({regX:90,regY:84,scaleX:1,scaleY:1,rotation:19.2,skewX:0,skewY:0,x:75.3,y:267.7},5).wait(11));

	// Buttons
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA/AuIgDgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgCIACgCIAAAAIACAAIAJgFQADgCABgFQACgEAAgHIACgPQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIACgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAABABQAAAAAAABIgCALQAMgFAHgGQAIgDADgKIgTgBIgJgBIgOgBIgKgBIgEAAIgCAAIgCAAIgDgCQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgBIACgCIABgBIACAAIADABIAFAAIAIABIAEAAIAGABIAIABIALABIARABIACgBIACgBQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIgCAFIgDAGQgDADgEADQgEAEgFADIgKAFIgJADIgCAJIgEAHQgCAEgEACIgJAEIgCABIgBAAgAASAmIgBAAIgCAAIgCgBIgDAAIgKgBIgLgBIgKgBIgIAAIAAAAIgEgCQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgDIACgBIABAAIACAAIAHABIAHABIADAAIAEAAIADghIgLgBIgFgBIgCgBIgBgDIABgCIADgBIACABIADAAIAEABIABAAIABAAIAFAAIAGAAIANACIAEABIABACIgBADIgCABIgFAAIgGgBIgFgBIgCAiIAMABIADAAIAEABIACAAIACABQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBACIgDABIgCAAgAh2AbQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAGgBIAJgDIAIgFIAHgFIAJgGIAHgLIAHgMIABgDIADAAIADABIABADIgCAEIgDAIIgFAHIgFAFQgFAHgIAGQgIAGgLAEIgIADIgGABIgEgCgAhggIIgHgBIgIgBIgHgCIgFgBIgDgBIAAgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIADgBIABAAIACABIAGABIAJACIAJABIADABQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAACIgCACIgBAAIgCAAgAhagdIgGgBIgIgCIgIgCIgGgCIgBgBIgBAAIgBgCIgBgCIACgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAAAAIACABIAIADIAJACIAIACIAEABIABADIgCADIgCABIgBAAg");
	this.shape_1.setTransform(72,101.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

	// レイヤー 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AF1jDIAAIjQgBAbgbAGIqeiBQgpgIgFg4IgBoWQgBgwApAHIKTB/QAyAUgEApg");
	this.shape_2.setTransform(47.3,45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AlFEAQgpgIgFg4IgBoWQgBgwApAHIKTB/QAyAUgEApIAAIjQgBAbgbAGg");
	this.shape_3.setTransform(47.3,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(20));

	// レイヤー 4
	this.instance_1 = new lib.Meter();
	this.instance_1.setTransform(30.3,143,0.852,0.852,0,0,0,29.9,16.2);

	this.instance_2 = new lib.Meter();
	this.instance_2.setTransform(82.3,152,0.762,0.762,0,0,0,29.9,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#44FF6D").ss(1,1,1).p("AhKjkQBGAHApgCQAEABBoAfQAGABAKABQAKAFAEAYQAGAcAEB2QAECQgLA2QgNA9gpgFQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYg");
	this.shape_4.setTransform(72,114.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#070000").ss(0.8,1,1).p("AiDjTQACAAACAAQAEAAADAAIAFABQACABAEAAQABAAACAAQAGAAADAAAhtjRQAAABgBACQAAABAAABQgBACgCADQgBABgBACIAGgBQACAAAFAAQAFAAADABQADABABABQABACAAACQAAAOgGAKAhrjdQgBAGAAAEQgBABAAABAhti6IAAAAQgBAAgBAAAhqi6QgBAAgCAAQAAADAAAEQABAAAAAAQABAAADgBQABAAABABAhti6QABAAACAAAhljCQAAAEgDADQgBAAgBABIAFgBAh5i6QADABAGgBQABAAAAAAIABAAQAAAAABAAAh5jAQAAABADACQADABAEACAh5ixQAFgBAFAAQABgBABAAQAAACABADQAAACgBABAg/jEQAAACgBABQgCAGgEAGQgFAIgJAEQgCABgCABAh/jEQAAABAAABQAAAAgBAHQgCAJgCAGQACABgEACAiVh6QgGADgGAEQABAEgCAJQgKAtgEAXQAAAFgHA7QgBAHgCALQAAAGgBAIQgBARgDAbQAAAQADAGQAEAIAIAFIArAdQAYAPARAFQAQAGAYgBQAOAAAagBQAMADAJgDQAMgDAHgLQABABACABQABAAACACAiVh6QAAgBABgBQALgHASgDQAZgCAhAIQA5APAfAWQAHAFAGAFQAKAHAFAKQAEAKAAANQAAAcgEAgQgDAdgIA6IgHAjQgFAZgBAQAh/jEIAMAAAiBjJQACACAAADAgEjSQgBAIgGABQgCACgFABQgDABgDABQgDACgDAAAAAjRQABAFAHADQAHAFAFABQAFABADACAAGi9QAEAAAEgBIAAgBQgEAAgEACgAgCiwQAAAAABAAQAHAAAGAAQAFAAACAAAgCi9QACADgBAFIgBAFIgCAFQgBADAAACAgQi/QAHACAHAAQADAAAFAAAgfisQADADAFADQACAAABAAQABABACABAgiieQAJgBARAAQAOgBALABQAEAAADACQABAAABABAAKipIACAFAhSjDQADAAAHAAQABAAABAAQAFAAACgBQABAAAAAAQAIAAADAAAg9i6QAAAHAGAFQAHAGAIAAAgwgHIACgPQADgIAAgGQAAgCAAgBQABgIABgEQABgBAAgCQABgGAAgGQgBgIgBgHQgDgBgDAAQgFgBgCADQgDADgCAGQgIAYgBAMAgYiwQAIABAOgBABqicQgEANACAKACRhXQAKgEAJgJQAPgQAAgWQAAgXgPgPQgQgQgWAAQgWAAgPAQQgQAPAAAXQAAAWAQAQQAIAJAKAEAB9h+QABAAABgCQACgBAHgKIABgFQAAgFgDgEQgCgCgBgBQgFAHAAADQgBACAAACAgvjOQABACAFAHAg9jRQAAAHgCAGACViSQgCADAAAHIAAAFIAFACQAEgCABgDQADgEAAgDQAAgBAAgEQABgDgBgCQgDgFgDACACkgDQAAgHgDgFQgDgEgEAAQgEAAgDAEQgDAFAAAHQAAAFADAFQADAFAEAAQAEAAADgFQADgFAAgFgAB6gaIANADQACACAEAAABmgjQgNANAAAQQAAARAPANQAPANAVAAQAWAAAPgNQAPgNAAgRQAAgSgPgMQgPgNgWAAQgOAAgLAFACIA+QAJAAAEAAQABACgBADQAAABAAAAQAAABAAAAIAAgCIAAAAACDBAIgHANIABAAQAAAAgBAAQAGAAAHAFQADAAAAADQAAABgBABQgBABABABQgEADgGADQgEACgBAAQgDgCgCgFACuBVQAAgQgMgMQgMgLgQAAQgRAAgMALQgLAMAAAQQAAARALALQAMAMARAAQAQAAAMgMQAMgLAAgRgACgC2QAAgRgLgMQgLgLgPAAQgQAAgLALQgKAMAAARQAAAQAKAMQALAMAQAAQAPAAALgMQALgMAAgQgAB3gYIgEASQAFgDAEADIABAAQAEADgCADQAAACgBAAQgEAFgCAAQgEADgFgDAgxhCQAAAAAAABQgCAEgCAEQgBADgBACQgGAPgFAOQgMAggIAhQAAAAAAABQAAABAAACQgBAAAAABQAAABAAAAQAAAGAAADQACAFACAAIABAAQAAACAAACIAHgGQgCALgCAOQAAABAAABQgBACAAACQACABABAAQAEABACgDQADgFABgCIAIgkIAAgBQACgMADgJQACgNADgJIAAgDIABgHIgBADAgxhCQAAABAAABQgDAQgFATQgBABAAABQgJAegDAQQAAADABADQgIAYgEAIQgCADABACAg3g0QgEAOgDANQgNAtgIAqQgBAFAAAEQgCAFACAEQABAHAEgCAg1AMQABgDABgDQABgEABgCQACgFABgCQgCAMgDAPQgCACgBADQgBAAAAAAQACgJACgKQABgGABgEQgCAHgCAJQgCAIgCAJIAAAAQgBADgBACIABgFQADgKACgHgAg3AZIAAAAAg3AZQgBACgBACAgxgbQgJAOgIAbQgCAFgBAGAhAA5IAAABQgBACgBAEQgCAFgBAGIADgNQABgCABgCAg7AiQgNAYAAARIABAAQACgGADgHgAg7AvQgDAIgEAJABtClQACAAAFABQAFAAADgCQAEgCACAAQAAACgDAFQgDAGAAACQAAAFgCADQgCAEAAABQgBACgBABQgBAEACADAgzAUQgDAOgFANAhAA5QAFgNAEgTAg5AdQgDANgEAPAhDhCQgGAZgEAbQgDANgCAMQgDAPgBARAiVh6QgKAhgHA1QgCATAAADQgCANgEAaQgCAQAAAOQgBAFAAAGQgCAhALAVQAKAUAlAOQAMADAYAIQAVAHAQABQAOABAdgCQASABAPAHAhXAvQgBAGAAACQAAACABAAQgBAFAAACIgDAIQAAALAKAHIABABQgBADACADQABgBABgEQADgHADgKABtC7QABACAIAEQACABABABQACACACgCAhDAgQgEAMgEAQAgvhSQAAAGgCAK");
	this.shape_5.setTransform(27.6,106.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006400").s().p("AB8DwQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYQBGAHApgCQAEABBoAfIAQACQAKAFAEAYQAGAcAEB2QAECQgLA2QgMA5glAAIgFgBg");
	this.shape_6.setTransform(72,114.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.instance_1}]}).wait(20));

	// body
	this.instance_3 = new lib.PanelBody();
	this.instance_3.setTransform(59.6,84.7,1,1,0,0,0,68.6,104.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-23.6,140.6,214.4);


(lib.Panel_crouton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AILB0QgdgGhQgXQl8hsmOgnIg1gHIAAABQgEACgJgBIgrgEQgagDgegFIh6gVQgNgCgFgFQgFgDgBgFQgCgFADgEQADgFAHgBQAGgBAHACIB6AWQA8AJAZABQAIAAAHACQAGgBAIAAQG3AoGrB6QBBASAWAFQAyALAogBIAIABQADgCAEAAQABAAAAAAQAAAAAAAAQABAAAAAAQgBAAAAgBIAOAAQAIAAAEADQAIADgBAHQAAAIgKADQgDABgLAAQgFAFgNAAIgEAAQgwAAg8gNg");
	this.shape.setTransform(60.5,173.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// レイヤー 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJNQNQjDgeiKgvIAAAAQiMguiGgVIAAAAQkTgskSgHIAAAAQhMgBgSgIIAAAAQgYgIAAghIAAAAQAAgDAZhfIAAAAQAfh0AWhsIAAAAQAOhLARinIAAAAQAYjhAAibIAAAAQAAkggtj9IAAAAQgYiCgchbIAAAAIgBAAIABAAIgBgDIAAAAIAAADIgShZQAEgOALgKIAAAAQAPgPAbAAIAAAAQB4ATC4AiIAAAAQFsBEFFBJIAAAAIAIAHQARAIAKAKIAAAAIAMAOIAAAAIAEAEQACAEAKAVIAAAAQAEAHAFBDIAAAAIABAGIAAAAIAUDnIgBEkIAAAAICHOsQBNCtAABLIAAAAQAAAOgGAGIAAAAQgLAMgjAAIAAAAQgQAAgdgGgAGtspg");
	mask.setTransform(61.2,80.7);

	// レイヤー 2
	this.instance = new lib.PanelSkin();
	this.instance.setTransform(75.3,267.7,1.003,1.003,19.2,0,0,90,84);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// PanelDisplay
	this.instance_1 = new lib.PanelDisplay("synched",0,false);
	this.instance_1.setTransform(72.1,114.4,1,1,0,0,0,18.7,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// レイヤー 4
	this.instance_2 = new lib.Meter();
	this.instance_2.setTransform(30.3,143,0.852,0.852,0,0,0,29.9,16.2);

	this.instance_3 = new lib.Meter();
	this.instance_3.setTransform(82.3,152,0.762,0.762,0,0,0,29.9,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#070000").ss(0.8,1,1).p("AiDjTQACAAACAAQAEAAADAAIAFABQACABAEAAQAAABgBACQAAABAAABQgBACgCADQgBABgBACIAGgBQACAAAFAAQAFAAADABQADABABABQABACAAACQAAAOgGAKAhrjdQgBAGAAAEQgBABAAABQABAAACAAQAGAAADAAAhti6IAAAAQAAADAAAEQAAACABADQAAACgBABAhqi6QgBAAgCAAQgBAAgBAAAhti6QABAAACAAAhljCQAAAEgDADQgBAAgBABIAFgBAh5jAQAAABADACQADABAEACIABAAQAAAAABAAAh5i6QADABAGgBQABAAAAAAAh5ixQAFgBAFAAQABgBABAAQABAAAAAAQABAAADgBQABAAABABAg/jEQAAACgBABQgCAGgEAGQgFAIgJAEQgCABgCABAh/jEQAAABAAABQAAAAgBAHQgCAJgCAGQACABgEACAiVh6QAAgBABgBQALgHASgDQAZgCAhAIQA5APAfAWQAHAFAGAFQAKAHAFAKQAEAKAAANQAAAcgEAgQgDAdgIA6IgHAjQgFAZgBAQAiVh6QgGADgGAEQABAEgCAJQgKAtgEAXQAAAFgHA7QgBAHgCALQAAAGgBAIQgBARgDAbQAAAQADAGQAEAIAIAFIArAdQAYAPARAFQAQAGAYgBQAOAAAagBQAMADAJgDQAMgDAHgLQABABACABQABAAACACAh/jEIAMAAAiBjJQACACAAADAgEjSQgBAIgGABQgCACgFABQgDABgDABQgDACgDAAAAAjRQABAFAHADQAHAFAFABQAFABADACAAGi9QAEAAAEgBIAAgBQgEAAgEACgAgCiwQAAAAABAAQAHAAAGAAQAFAAACAAAgCiwIgCAFQgBADAAACAgQi/QAHACAHAAQACADgBAFIgBAFAgfisQADADAFADQACAAABAAQABABACABAgiieQAJgBARAAQAOgBALABQAEAAADACQABAAABABAAKipIACAFAgCi9QADAAAFAAAhSjDQADAAAHAAQABAAABAAQAFAAACgBQABAAAAAAQAIAAADAAAg9i6QAAAHAGAFQAHAGAIAAAgvhSQgFgBgCADQgDADgCAGQgIAYgBAMAgwgHIACgPQADgIAAgGQAAgCAAgBQABgIABgEQABgBAAgCQABgGAAgGQgBgIgBgHQgDgBgDAAQAAAGgCAKQAAABAAABQgDAQgFATQgBABAAABQgJAegDAQQAAADABADQgIAYgEAIQgCADABACQAAACAAACIAHgGQgCALgCAOQAAABAAABQgBACAAACQgBADACADQABgBABgEQAEABACgDQADgFABgCIAIgkIAAgBQACgMADgJQACgNADgJIAAgDIABgHIgBADAgYiwQAIABAOgBAB9h+QABAAABgCQACgBAHgKIABgFQAAgFgDgEQgCgCgBgBQgFAHAAADQgBACAAACACRhXQAKgEAJgJQAPgQAAgWQAAgXgPgPQgQgQgWAAQgWAAgPAQQgQAPAAAXQAAAWAQAQQAIAJAKAEABqicQgEANACAKAg9jRQAAAHgCAGAgvjOQABACAFAHACViSQgCADAAAHIAAAFIAFACQAEgCABgDQADgEAAgDQAAgBAAgEQABgDgBgCQgDgFgDACAB6gaIANADQACACAEAAABmgjQgNANAAAQQAAARAPANQAPANAVAAQAWAAAPgNQAPgNAAgRQAAgSgPgMQgPgNgWAAQgOAAgLAFACkgDQAAgHgDgFQgDgEgEAAQgEAAgDAEQgDAFAAAHQAAAFADAFQADAFAEAAQAEAAADgFQADgFAAgFgACVBDQAAABAAAAQAAABAAAAIAAgCgACIA+QAJAAAEAAQABACgBADACDBAIgHANIABAAQAAAAgBAAQAGAAAHAFQADAAAAADQAAABgBABQgBABABABQgEADgGADQgEACgBAAQgDgCgCgFACuBVQAAgQgMgMQgMgLgQAAQgRAAgMALQgLAMAAAQQAAARALALQAMAMARAAQAQAAAMgMQAMgLAAgRgACgC2QAAgRgLgMQgLgLgPAAQgQAAgLALQgKAMAAARQAAAQAKAMQALAMAQAAQAPAAALgMQALgMAAgQgAB3gYIgEASQAFgDAEADIABAAQAEADgCADQAAACgBAAQgEAFgCAAQgEADgFgDAgxhCQAAAAAAABQgCAEgCAEQgBADgBACQgEAOgDANQgNAtgIAqQgBAFAAAEQgCAFACAEQABAHAEgCAg3g0QgGAPgFAOQgMAggIAhQAAAAAAABAg1AMQABgDABgDQABgEABgCQACgFABgCQgCAMgDAPQgCACgBADQgBAAAAAAQACgJACgKQABgGABgEQgCAHgCAJQgCAIgCAJAg3AZQgBACgBACIAAAAQgBADgBACIABgFQADgKACgHAg3AZIAAAAAgxgbQgJAOgIAbQgCAFgBAGAhAA5IAAABQgBACgBAEQgCAFgBAGIADgNQABgCABgCAg7AiQgNAYAAARIABAAQACgGADgHgAg7AvQgDAIgEAJABtClQACAAAFABQAFAAADgCQAEgCACAAQAAACgDAFQgDAGAAACQAAAFgCADQgCAEAAABQgBACgBABQACABABABQACACACgCAg5AdQgDANgEAPQAFgNAEgTAgzAUQgDAOgFANAiVh6QgKAhgHA1QgCATAAADQgCANgEAaQgCAQAAAOQgBAFAAAGQgCAhALAVQAKAUAlAOQAMADAYAIQAVAHAQABQAOABAdgCQASABAPAHAhDhCQgGAZgEAbQgDANgCAMQgDAPgBARQAAABAAACQgBAAAAABQAAABAAAAQAAAGAAADQACAFACAAIABAAAhXAvQgBAGAAACQAAACABAAQgBAFAAACIgDAIQAAALAKAHIABABQACABABAAQADgHADgKABtC7QABACAIAEQgBAEACADAhDAgQgEAMgEAQ");
	this.shape_1.setTransform(27.6,106.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_3},{t:this.instance_2}]}).wait(20));

	// Buttons
	this.instance_4 = new lib.PanelButton_ice();
	this.instance_4.setTransform(73,75.7,1,1,0,0,0,21.1,13.8);

	this.instance_5 = new lib.PanelButton_copy();
	this.instance_5.setTransform(71,22.2,1,1,0,0,0,21.1,13.8);

	this.instance_6 = new lib.PanelButton_fax();
	this.instance_6.setTransform(26,13.1,1,1,0,0,0,21.1,13.8);

	this.instance_7 = new lib.PanelButton_curry();
	this.instance_7.setTransform(28.5,68.3,1,1,0,0,0,21.1,13.8);

	this.instance_8 = new lib.PanelButton_french();
	this.instance_8.setTransform(28.9,40.6,1,1,0,0,0,21.1,13.8);

	this.instance_9 = new lib.PanelButton_crouton();
	this.instance_9.setTransform(73,48.2,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(20));

	// body
	this.instance_10 = new lib.PanelBody();
	this.instance_10.setTransform(59.6,84.7,1,1,0,0,0,68.6,104.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-21.3,140.6,212);


(lib.Panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AILB0QgdgGhQgXQl8hsmOgnIg1gHIAAABQgEACgJgBIgrgEQgagDgegFIh6gVQgNgCgFgFQgFgDgBgFQgCgFADgEQADgFAHgBQAGgBAHACIB6AWQA8AJAZABQAIAAAHACQAGgBAIAAQG3AoGrB6QBBASAWAFQAyALAogBIAIABQADgCAEAAQABAAAAAAQAAAAAAAAQABAAAAAAQgBAAAAgBIAOAAQAIAAAEADQAIADgBAHQAAAIgKADQgDABgLAAQgFAFgNAAIgEAAQgwAAg8gNg");
	this.shape.setTransform(60.5,173.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// レイヤー 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJNQNQjDgeiKgvIAAAAQiMguiGgVIAAAAQkTgskSgHIAAAAQhMgBgSgIIAAAAQgYgIAAghIAAAAQAAgDAZhfIAAAAQAfh0AWhsIAAAAQAOhLARinIAAAAQAYjhAAibIAAAAQAAkggtj9IAAAAQgYiCgchbIAAAAIgBAAIABAAIgBgDIAAAAIAAADIgShZQAEgOALgKIAAAAQAPgPAbAAIAAAAQB4ATC4AiIAAAAQFsBEFFBJIAAAAIAIAHQARAIAKAKIAAAAIAMAOIAAAAIAEAEQACAEAKAVIAAAAQAEAHAFBDIAAAAIABAGIAAAAIAUDnIgBEkIAAAAICHOsQBNCtAABLIAAAAQAAAOgGAGIAAAAQgLAMgjAAIAAAAQgQAAgdgGgAGtspg");
	mask.setTransform(61.2,80.7);

	// レイヤー 2
	this.instance = new lib.PanelSkin();
	this.instance.setTransform(63.9,84.3,1.167,1.167,19.2,0,0,90,84);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:89.9,regY:84.2,scaleX:0.96,scaleY:1.01,rotation:0,skewX:21,skewY:12.8,x:60,y:92.2},4).to({regX:90,regY:84,scaleX:1,scaleY:1,rotation:19.2,skewX:0,skewY:0,x:75.3,y:267.7},5).wait(11));

	// レイヤー 4
	this.instance_1 = new lib.Meter();
	this.instance_1.setTransform(30.3,143,0.852,0.852,0,0,0,29.9,16.2);

	this.instance_2 = new lib.Meter();
	this.instance_2.setTransform(82.3,152,0.762,0.762,0,0,0,29.9,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#44FF6D").ss(1,1,1).p("AhKjkQBGAHApgCQAEABBoAfQAGABAKABQAKAFAEAYQAGAcAEB2QAECQgLA2QgNA9gpgFQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYg");
	this.shape_1.setTransform(72,114.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070000").ss(0.8,1,1).p("AiDjTQACAAACAAQAEAAADAAIAFABQACABAEAAQAAABgBACQAAABAAABQgBACgCADQgBABgBACIAGgBQACAAAFAAQAFAAADABQADABABABQABACAAACQAAAOgGAKAhrjdQgBAGAAAEQgBABAAABQABAAACAAQAGAAADAAAhti6IAAAAQgBAAgBAAAhqi6QgBAAgCAAQAAADAAAEQABAAAAAAQABAAADgBQABAAABABAhti6QABAAACAAAhljCQAAAEgDADQgBAAgBABIAFgBAh5i6QADABAGgBQABAAAAAAIABAAQAAAAABAAAh5jAQAAABADACQADABAEACAh5ixQAFgBAFAAQABgBABAAQAAACABADQAAACgBABAg/jEQAAACgBABQgCAGgEAGQgFAIgJAEQgCABgCABAh/jEQAAABAAABQAAAAgBAHQgCAJgCAGQACABgEACAiVh6QgGADgGAEQABAEgCAJQgKAtgEAXQAAAFgHA7QgBAHgCALQAAAGgBAIQgBARgDAbQAAAQADAGQAEAIAIAFIArAdQAYAPARAFQAQAGAYgBQAOAAAagBQAMADAJgDQAMgDAHgLQABABACABQABAAACACAiVh6QAAgBABgBQALgHASgDQAZgCAhAIQA5APAfAWQAHAFAGAFQAKAHAFAKQAEAKAAANQAAAcgEAgQgDAdgIA6IgHAjQgFAZgBAQAh/jEIAMAAAiBjJQACACAAADAgEjSQgBAIgGABQgCACgFABQgDABgDABQgDACgDAAAAAjRQABAFAHADQAHAFAFABQAFABADACAAGi9QAEAAAEgBIAAgBQgEAAgEACgAgCiwQAAAAABAAQAHAAAGAAQAFAAACAAAgCiwIgCAFQgBADAAACAgQi/QAHACAHAAQACADgBAFIgBAFAgfisQADADAFADQACAAABAAQABABACABAgiieQAJgBARAAQAOgBALABQAEAAADACQABAAABABAgCi9QADAAAFAAAAKipIACAFAhSjDQADAAAHAAQABAAABAAQAFAAACgBQABAAAAAAQAIAAADAAAg9i6QAAAHAGAFQAHAGAIAAAgwgHIACgPQADgIAAgGQAAgCAAgBQABgIABgEQABgBAAgCQABgGAAgGQgBgIgBgHQgDgBgDAAQgFgBgCADQgDADgCAGQgIAYgBAMAgYiwQAIABAOgBABqicQgEANACAKACRhXQAKgEAJgJQAPgQAAgWQAAgXgPgPQgQgQgWAAQgWAAgPAQQgQAPAAAXQAAAWAQAQQAIAJAKAEAB9h+QABAAABgCQACgBAHgKIABgFQAAgFgDgEQgCgCgBgBQgFAHAAADQgBACAAACAgvjOQABACAFAHAg9jRQAAAHgCAGACViSQgCADAAAHIAAAFIAFACQAEgCABgDQADgEAAgDQAAgBAAgEQABgDgBgCQgDgFgDACACkgDQAAgHgDgFQgDgEgEAAQgEAAgDAEQgDAFAAAHQAAAFADAFQADAFAEAAQAEAAADgFQADgFAAgFgAB6gaIANADQACACAEAAABmgjQgNANAAAQQAAARAPANQAPANAVAAQAWAAAPgNQAPgNAAgRQAAgSgPgMQgPgNgWAAQgOAAgLAFACIA+QAJAAAEAAQABACgBADQAAABAAAAQAAABAAAAIAAgCIAAAAACDBAIgHANIABAAQAAAAgBAAQAGAAAHAFQADAAAAADQAAABgBABQgBABABABQgEADgGADQgEACgBAAQgDgCgCgFACuBVQAAgQgMgMQgMgLgQAAQgRAAgMALQgLAMAAAQQAAARALALQAMAMARAAQAQAAAMgMQAMgLAAgRgACgC2QAAgRgLgMQgLgLgPAAQgQAAgLALQgKAMAAARQAAAQAKAMQALAMAQAAQAPAAALgMQALgMAAgQgAB3gYIgEASQAFgDAEADIABAAQAEADgCADQAAACgBAAQgEAFgCAAQgEADgFgDAgxhCQAAAAAAABQgCAEgCAEQgBADgBACQgGAPgFAOQgMAggIAhQAAAAAAABQAAABAAACQgBAAAAABQAAABAAAAQAAAGAAADQACAFACAAIABAAQAAACAAACIAHgGQgCALgCAOQAAABAAABQgBACAAACQACABABAAQAEABACgDQADgFABgCIAIgkIAAgBQACgMADgJQACgNADgJIAAgDIABgHIgBADAgxhCQAAABAAABQgDAQgFATQgBABAAABQgJAegDAQQAAADABADQgIAYgEAIQgCADABACAg3g0QgEAOgDANQgNAtgIAqQgBAFAAAEQgCAFACAEQABAHAEgCAg1AMQABgDABgDQABgEABgCQACgFABgCQgCAMgDAPQgCACgBADQgBAAAAAAQACgJACgKQABgGABgEQgCAHgCAJQgCAIgCAJIAAAAQgBADgBACIABgFQADgKACgHgAg3AZIAAAAAg3AZQgBACgBACAgxgbQgJAOgIAbQgCAFgBAGAhAA5IAAABQgBACgBAEQgCAFgBAGIADgNQABgCABgCAg7AiQgNAYAAARIABAAQACgGADgHgAg7AvQgDAIgEAJABtClQACAAAFABQAFAAADgCQAEgCACAAQAAACgDAFQgDAGAAACQAAAFgCADQgCAEAAABQgBACgBABQgBAEACADAgzAUQgDAOgFANAhAA5QAFgNAEgTAg5AdQgDANgEAPAhDhCQgGAZgEAbQgDANgCAMQgDAPgBARAiVh6QgKAhgHA1QgCATAAADQgCANgEAaQgCAQAAAOQgBAFAAAGQgCAhALAVQAKAUAlAOQAMADAYAIQAVAHAQABQAOABAdgCQASABAPAHAhXAvQgBAGAAACQAAACABAAQgBAFAAACIgDAIQAAALAKAHIABABQgBADACADQABgBABgEQADgHADgKABtC7QABACAIAEQACABABABQACACACgCAhDAgQgEAMgEAQAgvhSQAAAGgCAK");
	this.shape_2.setTransform(27.6,106.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006400").s().p("AB8DwQjbgVgvgNQgqgLgBgjQgBglAEiCQAEiFgBgzQgBgeAFgGQATgZBSAYQBGAHApgCQAEABBoAfIAQACQAKAFAEAYQAGAcAEB2QAECQgLA2QgMA5glAAIgFgBg");
	this.shape_3.setTransform(72,114.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1}]}).wait(20));

	// Buttons
	this.instance_3 = new lib.PanelButton_ice();
	this.instance_3.setTransform(73,75.7,1,1,0,0,0,21.1,13.8);

	this.instance_4 = new lib.PanelButton_copy();
	this.instance_4.setTransform(71,22.2,1,1,0,0,0,21.1,13.8);

	this.instance_5 = new lib.PanelButton_fax();
	this.instance_5.setTransform(26,13.1,1,1,0,0,0,21.1,13.8);

	this.instance_6 = new lib.PanelButton_curry();
	this.instance_6.setTransform(28.5,68.3,1,1,0,0,0,21.1,13.8);

	this.instance_7 = new lib.PanelButton_french();
	this.instance_7.setTransform(28.9,40.6,1,1,0,0,0,21.1,13.8);

	this.instance_8 = new lib.PanelButton_crouton();
	this.instance_8.setTransform(73,48.2,1,1,0,0,0,21.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(20));

	// body
	this.instance_9 = new lib.PanelBody();
	this.instance_9.setTransform(59.6,84.7,1,1,0,0,0,68.6,104.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-23.6,140.6,214.4);


(lib.CroutonShowers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CroutonShower
	this.instance = new lib.Crouton("synched",0,false);
	this.instance.setTransform(40.7,74.5,1.045,0.876,-151.3,0,0,42.9,52.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:43.1,regY:52.6,scaleX:0.73,scaleY:1.03,rotation:2542.4,x:326.9,y:479.8},6,cjs.Ease.get(1)).wait(16));

	// CroutonShower
	this.instance_1 = new lib.Crouton("synched",0,false);
	this.instance_1.setTransform(53.4,45.7,1.045,0.876,-176.5,0,0,43,52.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({regX:43.1,regY:52.6,scaleX:0.73,scaleY:0.77,rotation:2568.4,x:198.9,y:483},6,cjs.Ease.get(1)).wait(17));

	// CroutonShower
	this.instance_2 = new lib.Crouton("synched",0,false);
	this.instance_2.setTransform(27.9,90.5,1.045,0.876,-30.8,0,0,43,52.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({regX:43.1,regY:52.6,scaleX:0.73,scaleY:0.77,rotation:2526.6,x:106.1,y:1129.4},22,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// CroutonShower
	this.instance_3 = new lib.Crouton("synched",0,false);
	this.instance_3.setTransform(53.5,45.7,1.045,0.876,-30.8,0,0,43,52.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regX:43.1,regY:52.6,scaleX:0.73,scaleY:0.77,rotation:2526.6,x:294.9,y:431.8},6,cjs.Ease.get(1)).wait(19));

	// CroutonShower
	this.instance_4 = new lib.Crouton("synched",0,false);
	this.instance_4.setTransform(37.5,80.9,1.045,0.876,-30.8,0,0,43,52.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({regX:43.1,regY:52.6,scaleX:0.73,scaleY:0.77,rotation:2526.6,x:189.3,y:457.4},6,cjs.Ease.get(1)).wait(20));

	// CroutonShower
	this.instance_5 = new lib.Crouton("synched",0,false);
	this.instance_5.setTransform(50.2,23.4,0.981,0.576,8.9,0,0,42.9,52.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({regX:43.1,regY:52.6,scaleX:0.73,scaleY:0.77,rotation:2886.6,x:230.9,y:431.8},6,cjs.Ease.get(1)).wait(21));

	// CroutonShower
	this.instance_6 = new lib.Crouton("synched",0,false);
	this.instance_6.setTransform(27.9,84.2,1,1,-19.5,0,0,43,52.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({regX:43.1,regY:52.6,rotation:2563.8,x:272.5,y:444.6},6,cjs.Ease.get(1)).wait(21));

	// CroutonShower
	this.instance_7 = new lib.Crouton("synched",0,false);
	this.instance_7.setTransform(47.1,29.7,1,1,-9,0,0,43.1,52.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({regY:52.6,rotation:2524.6,x:771.7,y:1283},24,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// CroutonShower
	this.instance_8 = new lib.Crouton("synched",0,false);
	this.instance_8.setTransform(21.4,45.8,1,1,30.5,0,0,43,52.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({regX:43.1,regY:52.6,rotation:2884.6,x:221.3,y:460.6},6,cjs.Ease.get(1)).wait(23));

	// CroutonShower
	this.instance_9 = new lib.Crouton("synched",0,false);
	this.instance_9.setTransform(31.1,109.8,1,1,-1.5,0,0,43,52.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({regY:52.6,rotation:2551.8,x:240.4,y:479.8},6,cjs.Ease.get(1)).wait(24));

	// CroutonShower
	this.instance_10 = new lib.Crouton("synched",0,false);
	this.instance_10.setTransform(51.6,-6.6,1,1,-32.5,0,0,43,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:2581.6,x:291.5,y:482.9},6,cjs.Ease.get(1)).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.8,-49.6,70.5,79.8);


(lib.Bagguet_Swing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Body("synched",0);
	this.instance.setTransform(92.5,252.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30.7},9).to({rotation:-2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,505);


(lib.Title006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// う
	this.instance = new lib.トゥイーン65("synched",0);
	this.instance.setTransform(1403.1,146.9,0.163,0.163);
	this.instance._off = true;

	this.instance_1 = new lib.トゥイーン66("synched",0);
	this.instance_1.setTransform(1402.1,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1402.1},11).wait(1));

	// よ
	this.instance_2 = new lib.トゥイーン67("synched",0);
	this.instance_2.setTransform(1283.1,146.9,0.179,0.179);
	this.instance_2._off = true;

	this.instance_3 = new lib.トゥイーン68("synched",0);
	this.instance_3.setTransform(1282.1,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},11).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1282.1},11).wait(3));

	// し
	this.instance_4 = new lib.トゥイーン69("synched",0);
	this.instance_4.setTransform(1163.1,146.9,0.147,0.147);
	this.instance_4._off = true;

	this.instance_5 = new lib.トゥイーン70("synched",0);
	this.instance_5.setTransform(1162.1,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},11).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1162.1},11).wait(5));

	// トゥイーン 102
	this.instance_6 = new lib.トゥイーン102("synched",0);
	this.instance_6.setTransform(1051.6,146.9,0.064,0.064,0,0,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,skewY:0,x:1050.6},11).wait(7));

	// トゥイーン 101
	this.instance_7 = new lib.トゥイーン101("synched",0);
	this.instance_7.setTransform(931.6,146.9,0.064,0.064,0,0,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,skewY:0,x:930.6},11).wait(9));

	// トゥイーン 100
	this.instance_8 = new lib.トゥイーン100("synched",0);
	this.instance_8.setTransform(810.6,146.9,0.065,0.065);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1},11).wait(11));

	// 1
	this.instance_9 = new lib.トゥイーン56_3("synched",0);
	this.instance_9.setTransform(1428.7,146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({startPosition:0},0).to({y:1378.9},14,cjs.Ease.get(-1)).wait(2));

	// ん
	this.instance_10 = new lib.トゥイーン58("synched",0);
	this.instance_10.setTransform(1295.4,146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({startPosition:0},0).to({y:1378.9},14,cjs.Ease.get(-1)).wait(4));

	// ゅ
	this.instance_11 = new lib.トゥイーン60("synched",0);
	this.instance_11.setTransform(1175.4,146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({startPosition:0},0).to({y:1378.9},14,cjs.Ease.get(-1)).wait(6));

	// じ
	this.instance_12 = new lib.トゥイーン62("synched",0);
	this.instance_12.setTransform(1055.4,146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({startPosition:0},0).to({y:1378.9},14,cjs.Ease.get(-1)).wait(8));

	// て
	this.instance_13 = new lib.トゥイーン64("synched",0);
	this.instance_13.setTransform(935.4,146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:1378.9},14,cjs.Ease.get(-1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(873.3,54,590.9,185.7);


(lib.Title005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.トゥイーン56_3();
	this.instance.setTransform(523.1,550.1,16.268,16.268);
	this.instance.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:1428.7,y:146.9,alpha:1,mode:"synched",startPosition:0},10,cjs.Ease.get(1)).to({scaleX:1.58,scaleY:1.58},2).to({scaleX:1,scaleY:1},2).wait(1));

	// レイヤー 2
	this.instance_1 = new lib.トゥイーン56_2("synched",0);
	this.instance_1.setTransform(1428.7,146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.36,scaleY:0.36,y:1148.5},6,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// ん
	this.instance_2 = new lib.トゥイーン58("synched",0);
	this.instance_2.setTransform(1295.4,146.9);

	this.instance_3 = new lib.トゥイーン57("synched",0);
	this.instance_3.setTransform(1295.4,146.9,0.276,0.276);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:0.28,scaleY:0.28,rotation:360},4).to({_off:false,scaleX:1.1,scaleY:1.1},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false,rotation:720},4).to({_off:true,scaleX:1.1,scaleY:1.1},5,cjs.Ease.get(1)).wait(6));

	// ゅ
	this.instance_4 = new lib.トゥイーン60("synched",0);
	this.instance_4.setTransform(1175.4,146.9);

	this.instance_5 = new lib.トゥイーン59("synched",0);
	this.instance_5.setTransform(1175.4,146.9,0.279,0.279);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,scaleX:0.28,scaleY:0.28,rotation:360},5).to({_off:false,scaleX:1.24,scaleY:1.24},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false,rotation:720},5).to({_off:true,scaleX:1.24,scaleY:1.24},5,cjs.Ease.get(1)).wait(5));

	// じ
	this.instance_6 = new lib.トゥイーン62("synched",0);
	this.instance_6.setTransform(1055.4,146.9);

	this.instance_7 = new lib.トゥイーン61("synched",0);
	this.instance_7.setTransform(1055.4,146.9,0.206,0.206);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,scaleX:0.21,scaleY:0.21,rotation:360},6).to({_off:false,scaleX:1.26,scaleY:1.26},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false,rotation:720},6).to({_off:true,scaleX:1.26,scaleY:1.26},5,cjs.Ease.get(1)).wait(4));

	// て
	this.instance_8 = new lib.トゥイーン64("synched",0);
	this.instance_8.setTransform(935.4,146.9);

	this.instance_9 = new lib.トゥイーン63("synched",0);
	this.instance_9.setTransform(935.4,146.9,0.206,0.206);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,scaleX:0.21,scaleY:0.21,rotation:360},7).to({_off:false,scaleX:1.21,scaleY:1.21},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false,rotation:720},7).to({_off:true,scaleX:1.21,scaleY:1.21},5,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-960.4,1517.8,3020.9);


(lib.Title004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.トゥイーン56_2();
	this.instance.setTransform(523.1,550.1,16.268,16.268);
	this.instance.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:1428.7,y:146.9,alpha:1,mode:"synched",startPosition:0},10,cjs.Ease.get(1)).to({scaleX:1.58,scaleY:1.58},2).to({scaleX:1,scaleY:1},2).wait(1));

	// レイヤー 2
	this.instance_1 = new lib.トゥイーン56("synched",0);
	this.instance_1.setTransform(1428.7,146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.36,scaleY:0.36,y:1148.5},6,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// ん
	this.instance_2 = new lib.トゥイーン58("synched",0);
	this.instance_2.setTransform(1295.4,146.9);

	this.instance_3 = new lib.トゥイーン57("synched",0);
	this.instance_3.setTransform(1295.4,146.9,0.276,0.276);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:0.28,scaleY:0.28,rotation:360},4).to({_off:false,scaleX:1.1,scaleY:1.1},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false,rotation:720},4).to({_off:true,scaleX:1.1,scaleY:1.1},5,cjs.Ease.get(1)).wait(6));

	// ゅ
	this.instance_4 = new lib.トゥイーン60("synched",0);
	this.instance_4.setTransform(1175.4,146.9);

	this.instance_5 = new lib.トゥイーン59("synched",0);
	this.instance_5.setTransform(1175.4,146.9,0.279,0.279);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,scaleX:0.28,scaleY:0.28,rotation:360},5).to({_off:false,scaleX:1.24,scaleY:1.24},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false,rotation:720},5).to({_off:true,scaleX:1.24,scaleY:1.24},5,cjs.Ease.get(1)).wait(5));

	// じ
	this.instance_6 = new lib.トゥイーン62("synched",0);
	this.instance_6.setTransform(1055.4,146.9);

	this.instance_7 = new lib.トゥイーン61("synched",0);
	this.instance_7.setTransform(1055.4,146.9,0.206,0.206);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,scaleX:0.21,scaleY:0.21,rotation:360},6).to({_off:false,scaleX:1.26,scaleY:1.26},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false,rotation:720},6).to({_off:true,scaleX:1.26,scaleY:1.26},5,cjs.Ease.get(1)).wait(4));

	// て
	this.instance_8 = new lib.トゥイーン64("synched",0);
	this.instance_8.setTransform(935.4,146.9);

	this.instance_9 = new lib.トゥイーン63("synched",0);
	this.instance_9.setTransform(935.4,146.9,0.206,0.206);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,scaleX:0.21,scaleY:0.21,rotation:360},7).to({_off:false,scaleX:1.21,scaleY:1.21},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false,rotation:720},7).to({_off:true,scaleX:1.21,scaleY:1.21},5,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-960.4,1517.8,3020.9);


(lib.Title003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.トゥイーン55();
	this.instance.setTransform(523.1,550.1,16.268,16.268);
	this.instance.alpha = 0.441;

	this.instance_1 = new lib.トゥイーン56("synched",0);
	this.instance_1.setTransform(1428.7,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,x:1428.7,y:146.9,alpha:1,mode:"synched",startPosition:0},9,cjs.Ease.get(1)).wait(1));

	// ん
	this.instance_2 = new lib.トゥイーン57("synched",0);
	this.instance_2.setTransform(1295.4,146.9,0.276,0.276);
	this.instance_2._off = true;

	this.instance_3 = new lib.トゥイーン58("synched",0);
	this.instance_3.setTransform(1295.4,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},5).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(4));

	// ゅ
	this.instance_4 = new lib.トゥイーン59("synched",0);
	this.instance_4.setTransform(1175.4,146.9,0.279,0.279);
	this.instance_4._off = true;

	this.instance_5 = new lib.トゥイーン60("synched",0);
	this.instance_5.setTransform(1175.4,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},5).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(3));

	// じ
	this.instance_6 = new lib.トゥイーン61("synched",0);
	this.instance_6.setTransform(1055.4,146.9,0.206,0.206);
	this.instance_6._off = true;

	this.instance_7 = new lib.トゥイーン62("synched",0);
	this.instance_7.setTransform(1055.4,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},5).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(2));

	// て
	this.instance_8 = new lib.トゥイーン63("synched",0);
	this.instance_8.setTransform(935.4,146.9,0.206,0.206);
	this.instance_8._off = true;

	this.instance_9 = new lib.トゥイーン64("synched",0);
	this.instance_9.setTransform(935.4,146.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-960.4,1153.4,3020.9);


(lib.Title002_out_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// の
	this.instance = new lib.トゥイーン30("synched",0);
	this.instance.setTransform(1540,126);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:720},8,cjs.Ease.get(-1)).to({scaleX:2.01,scaleY:2.01,x:1820.1,y:-122.1},2).wait(9));

	// も
	this.instance_1 = new lib.トゥイーン28("synched",0);
	this.instance_1.setTransform(1420,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:720},9,cjs.Ease.get(-1)).to({scaleX:3.54,scaleY:3.54,x:977.9,y:1566.3},5).wait(5));

	// る
	this.instance_2 = new lib.トゥイーン26("synched",0);
	this.instance_2.setTransform(1300,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:720},10,cjs.Ease.get(-1)).to({scaleX:2.64,scaleY:2.64,x:-508.4,y:494.1},3).wait(6));

	// す
	this.instance_3 = new lib.トゥイーン24("synched",0);
	this.instance_3.setTransform(1180,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:720},11,cjs.Ease.get(-1)).to({x:1004,y:-102.1},2).wait(6));

	// い
	this.instance_4 = new lib.トゥイーン22("synched",0);
	this.instance_4.setTransform(1060,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:720},12,cjs.Ease.get(-1)).to({scaleX:3.59,scaleY:3.59,x:2200.3,y:1630.4},6).wait(1));

	// う
	this.instance_5 = new lib.トゥイーン20("synched",0);
	this.instance_5.setTransform(940,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:720},12,cjs.Ease.get(-1)).to({scaleX:4.28,scaleY:4.28,x:-16.2,y:1474.3},6).wait(1));

	// よ
	this.instance_6 = new lib.トゥイーン16("synched",0);
	this.instance_6.setTransform(820,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:720},12,cjs.Ease.get(-1)).to({scaleX:1.65,scaleY:1.65,x:31.8,y:-130.1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(757.9,33.1,844.2,185.7);


(lib.Title002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// の
	this.instance = new lib.トゥイーン29("synched",0);
	this.instance.setTransform(-436.3,109.9,2.885,2.419,0,0,-153.3);
	this.instance._off = true;

	this.instance_1 = new lib.トゥイーン30("synched",0);
	this.instance_1.setTransform(1540,126);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,skewY:0,x:1540,y:126},6,cjs.Ease.get(1)).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},6,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,x:1603.1},3).to({scaleX:1,scaleY:1,x:1540},2).to({scaleX:1.05,scaleY:1.05,x:1556.5},2).to({scaleX:1,scaleY:1,x:1540},2).wait(1));

	// も
	this.instance_2 = new lib.トゥイーン27("synched",0);
	this.instance_2.setTransform(-401.8,64.8,3.666,3.017,0,0,-139.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.トゥイーン28("synched",0);
	this.instance_3.setTransform(1420,126);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,skewY:0,x:1420,y:126},6,cjs.Ease.get(1)).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},6,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,x:1462.1},4).to({scaleX:1,scaleY:1,x:1420},2).to({scaleX:1.05,scaleY:1.05,x:1431},2).to({scaleX:1,scaleY:1,x:1420},2).wait(1));

	// る
	this.instance_4 = new lib.トゥイーン25("synched",0);
	this.instance_4.setTransform(-422.1,54.2,3.649,2.854,0,0,-146.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.トゥイーン26("synched",0);
	this.instance_5.setTransform(1300,126);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,skewY:0,x:1300,y:126},6,cjs.Ease.get(1)).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},6,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,x:1321.1},5).to({scaleX:1,scaleY:1,x:1300},2).to({scaleX:1.05,scaleY:1.05,x:1305.5},2).to({scaleX:1,scaleY:1,x:1300},2).wait(1));

	// す
	this.instance_6 = new lib.トゥイーン23("synched",0);
	this.instance_6.setTransform(-423.1,72.9);
	this.instance_6._off = true;

	this.instance_7 = new lib.トゥイーン24("synched",0);
	this.instance_7.setTransform(1180,126);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true,x:1180,y:126},6,cjs.Ease.get(1)).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},6,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18},6).to({scaleX:1,scaleY:1},2).to({scaleX:1.05,scaleY:1.05},2).to({scaleX:1,scaleY:1},2).wait(1));

	// い
	this.instance_8 = new lib.トゥイーン21("synched",0);
	this.instance_8.setTransform(-391.6,32.5,1.25,1,0,0,36.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.トゥイーン22("synched",0);
	this.instance_9.setTransform(1060,126);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true,scaleX:1,skewY:0,x:1060,y:126},6,cjs.Ease.get(1)).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},6,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,x:1039},7).to({scaleX:1,scaleY:1,x:1060},2).to({scaleX:1.05,scaleY:1.05,x:1054.5},2).to({scaleX:1,scaleY:1,x:1060},2).wait(1));

	// う
	this.instance_10 = new lib.トゥイーン19("synched",0);
	this.instance_10.setTransform(-405.5,64.8,2.964,2.736,0,-13.2,-156.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.トゥイーン20("synched",0);
	this.instance_11.setTransform(940,126);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,skewX:0,skewY:0,x:940,y:126},6,cjs.Ease.get(1)).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},6,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,x:898},8).to({scaleX:1,scaleY:1,x:940},2).to({scaleX:1.05,scaleY:1.05,x:929},2).to({scaleX:1,scaleY:1,x:940},2).wait(1));

	// よ
	this.instance_12 = new lib.トゥイーン15("synched",0);
	this.instance_12.setTransform(-454,92.2,4,2.438,0,0,-154.9);

	this.instance_13 = new lib.トゥイーン16("synched",0);
	this.instance_13.setTransform(820,126);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,scaleX:1,scaleY:1,skewY:0,x:820,y:126},6,cjs.Ease.get(1)).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:false},6,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,x:756.9},9).to({scaleX:1,scaleY:1,x:820},2).to({scaleX:1.05,scaleY:1.05,x:803.5},2).to({scaleX:1,scaleY:1,x:820},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-679,-239.4,450,663.2);


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 方
	this.instance = new lib.トゥイーン32("synched",0);
	this.instance.setTransform(-293.5,136.1,2.728,2.728);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:1326.9,y:118.1},14).to({scaleX:1.09,scaleY:1.09,x:1796.4},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1746.6},2).wait(1));

	// り
	this.instance_1 = new lib.トゥイーン34("synched",0);
	this.instance_1.setTransform(-620.9,136.1,2.728,2.728);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:1250.8,y:118.1},13).to({scaleX:1.09,scaleY:1.09,x:1666},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1626.6},2).wait(1));

	// 作
	this.instance_2 = new lib.トゥイーン36("synched",0);
	this.instance_2.setTransform(-948.3,136.1,2.728,2.728);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:1174.8,y:118.1},12).to({scaleX:1.09,scaleY:1.09,x:1535.7},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1506.6},2).wait(1));

	// の
	this.instance_3 = new lib.トゥイーン38("synched",0);
	this.instance_3.setTransform(-1275.7,136.1,2.728,2.728);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:1098.7,y:118.1},11).to({scaleX:1.09,scaleY:1.09,x:1405.3},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1386.6},2).wait(1));

	// ン
	this.instance_4 = new lib.トゥイーン40("synched",0);
	this.instance_4.setTransform(-1603,136.1,2.728,2.728);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:1022.7,y:118.1},10).to({scaleX:1.09,scaleY:1.09,x:1275},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1266.6},2).wait(1));

	// ト
	this.instance_5 = new lib.トゥイーン42("synched",0);
	this.instance_5.setTransform(-1930.5,136.1,2.728,2.728);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:946.6,y:118.1},9).to({scaleX:1.09,scaleY:1.09,x:1144.7},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1146.6},2).wait(1));

	// ル
	this.instance_6 = new lib.トゥイーン44("synched",0);
	this.instance_6.setTransform(-2257.8,136.1,2.728,2.728);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:870.6,y:118.1},8).to({scaleX:1.09,scaleY:1.09,x:1014.3},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1026.6},2).wait(1));

	// ク
	this.instance_7 = new lib.トゥイーン46("synched",0);
	this.instance_7.setTransform(-2585.2,136.1,2.728,2.728);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:794.5,y:118.1},7).to({scaleX:1.09,scaleY:1.09,x:884},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:906.6},2).wait(1));

	// 1
	this.instance_8 = new lib.トゥイーン48("synched",0);
	this.instance_8.setTransform(-2948.9,136.1,2.728,2.728);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:710,y:118.1},6).to({scaleX:1.09,scaleY:1.09,x:739.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:773.3},2).wait(1));

	// 0
	this.instance_9 = new lib.トゥイーン50("synched",0);
	this.instance_9.setTransform(-3130.9,136.1,2.728,2.728);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:667.7,y:118.1},5).to({scaleX:1.09,scaleY:1.09,x:666.8},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:706.6},2).wait(1));

	// 0
	this.instance_10 = new lib.トゥイーン52("synched",0);
	this.instance_10.setTransform(-3312.9,136.1,2.728,2.728);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:625.5,y:118.1},4).to({scaleX:1.09,scaleY:1.09,x:594.3},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:639.9},2).wait(1));

	// #
	this.instance_11 = new lib.トゥイーン54("synched",0);
	this.instance_11.setTransform(-3507,136.1,2.728,2.728);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:580.4,y:118.1},3).to({scaleX:1.09,scaleY:1.09,x:517},16,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:568.7},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.Tuna_spring_stuck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.トゥイーン73("synched",0);
	this.instance.setTransform(206.4,235.3,0.937,1,0,0,0,-166.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.7,scaleX:0.7,rotation:-17,x:187.6,y:235.2},13).to({regY:15.8,scaleX:0.94,rotation:0,x:206.4,y:235.3},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.5,0,674.3,439);


(lib.Tuna_spring_attack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.トゥイーン73("synched",0);
	this.instance.setTransform(665.2,235.3,1.116,1,0,0,0,305.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:305.1,scaleX:0.84,x:622.9},14).to({x:638.7},2).to({x:605.9},2).to({x:594.4},2).to({x:618.4},2).to({x:597.6,y:227.4},2).to({x:641.5},2).to({x:622.9,y:235.3},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,0,803.3,439);


(lib.Tuna_spring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.トゥイーン73("synched",0);
	this.instance.setTransform(665.2,235.3,1.116,1,0,0,0,305.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:305.1,scaleX:0.84,x:622.9},11).to({regX:305.2,scaleX:1.12,x:665.2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,0,803.3,439);


(lib.Tuna_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.トゥイーン73("synched",0);
	this.instance.setTransform(360,219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,skewX:-3.1,skewY:-1.3},9).to({scaleX:0.98,skewX:-0.3,skewY:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,439);


(lib.Nobuteruru_rolling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Body
	this.instance = new lib.Body_back("synched",0);
	this.instance.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Hair
	this.instance_1 = new lib.Hair("synched",0);
	this.instance_1.setTransform(142.4,220,0.668,0.789,0,-8.7,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Brow_L
	this.instance_2 = new lib.Brow_L("synched",0);
	this.instance_2.setTransform(85.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// Brow_R
	this.instance_3 = new lib.Brow_R("synched",0);
	this.instance_3.setTransform(188.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// Eye_L
	this.instance_4 = new lib.Eye_L("synched",0);
	this.instance_4.setTransform(88.4,300.8,0.668,0.789,0,-8.7,0,55.6,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:26.5,scaleY:0.79,rotation:360,skewX:-26.6,skewY:-18,y:300.7},19).wait(1));

	// Eye_R
	this.instance_5 = new lib.Eye_R("synched",0);
	this.instance_5.setTransform(199.4,302.7,0.668,0.789,0,-8.7,0,56.1,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:26.1,scaleY:0.79,rotation:360,skewX:-26.6,skewY:-18},19).wait(1));

	// Nose
	this.instance_6 = new lib.Nose("synched",0);
	this.instance_6.setTransform(154,349.2,0.668,0.789,0,-8.7,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// Face
	this.instance_7 = new lib.Face_Extrude("synched",0);
	this.instance_7.setTransform(162,349.6,0.668,0.789,0,-8.7,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,102.5,411.9,828.1);


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


(lib.Nobuteru_Back_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Body
	this.instance = new lib.Body_back_upper("synched",0);
	this.instance.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,493.6,392,437);


(lib.Nobuteru_Back_swing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Body
	this.instance = new lib.Body_back("synched",0);
	this.instance.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.7,x:215.2,y:711},4).to({regX:207.9,rotation:1.3,x:225.3,y:711.9},4).wait(1));

	// Hair
	this.instance_1 = new lib.Hair("synched",0);
	this.instance_1.setTransform(142.4,220,0.668,0.789,0,-8.7,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:186.1,scaleX:0.61,scaleY:0.73,skewY:5.7,x:153.4,y:243.5},4).to({scaleX:0.66,scaleY:0.78,skewX:-8.6,skewY:1,x:144.7,y:224.6},4).wait(1));

	// Brow_L
	this.instance_2 = new lib.Brow_L("synched",0);
	this.instance_2.setTransform(85.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.61,scaleY:0.73,skewY:5.7,x:101.8,y:271.6},4).to({regX:63.4,scaleX:0.66,scaleY:0.78,skewX:-8.6,skewY:1,x:89,y:259.7},4).wait(1));

	// Brow_R
	this.instance_3 = new lib.Brow_R("synched",0);
	this.instance_3.setTransform(188.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.61,scaleY:0.73,skewY:5.7,x:195.9,y:280.9},4).to({regX:63.4,regY:33.4,scaleX:0.66,scaleY:0.78,skewX:-8.6,skewY:1,x:190.2,y:261.5},4).wait(1));

	// Eye_L
	this.instance_4 = new lib.Eye_L("synched",0);
	this.instance_4.setTransform(88.4,300.8,0.668,0.789,0,-8.7,0,55.6,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:26.5,scaleX:0.61,scaleY:0.73,skewY:5.7,x:104,y:311.7},4).to({scaleX:0.66,scaleY:0.78,skewX:-8.6,skewY:1,x:91.5,y:303},4).wait(1));

	// Eye_R
	this.instance_5 = new lib.Eye_R("synched",0);
	this.instance_5.setTransform(199.4,302.7,0.668,0.789,0,-8.7,0,56.1,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:56.2,regY:25.9,scaleX:0.61,scaleY:0.73,skewY:5.7,x:205.4,y:323.4},4).to({regX:56.1,scaleX:0.66,scaleY:0.78,skewX:-8.6,skewY:1,x:200.6,y:306.9},4).wait(1));

	// Nose
	this.instance_6 = new lib.Nose("synched",0);
	this.instance_6.setTransform(154,349.2,0.668,0.789,0,-8.7,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:70.4,scaleX:0.61,scaleY:0.73,skewY:5.7,x:164,y:361.4},4).to({scaleX:0.66,scaleY:0.78,skewX:-8.6,skewY:1,x:156,y:351.6},4).wait(1));

	// Face
	this.instance_7 = new lib.Face_Extrude("synched",0);
	this.instance_7.setTransform(162,349.6,0.668,0.789,0,-8.7,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.61,scaleY:0.73,skewY:5.7,x:171.4,y:362.5},4).to({regX:183.4,scaleX:0.66,scaleY:0.78,skewX:-8.6,skewY:1,x:163.9,y:352.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,102.5,411.9,828.1);


(lib.Nobuteru_Back_shock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Body
	this.instance = new lib.Body_back("synched",0);
	this.instance.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},5,cjs.Ease.get(0.99)).to({startPosition:0},4,cjs.Ease.get(0.99)).to({startPosition:0},4).to({startPosition:0},6,cjs.Ease.get(0.99)).wait(1));

	// Hair
	this.instance_1 = new lib.Hair("synched",0);
	this.instance_1.setTransform(142.4,220,0.668,0.789,0,-8.7,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:150.6,scaleX:0.53,scaleY:0.63,x:141.9,y:164.1},5,cjs.Ease.get(0.99)).to({scaleX:0.61,scaleY:0.72,skewX:-8.6,x:148.8,y:165.8},4,cjs.Ease.get(0.99)).to({scaleX:0.53,scaleY:0.63,skewX:-8.7,x:141.9,y:164.1},4).to({regY:150.5,scaleX:0.67,scaleY:0.79,x:142.4,y:220},6,cjs.Ease.get(0.99)).wait(1));

	// Brow_L
	this.instance_2 = new lib.Brow_L("synched",0);
	this.instance_2.setTransform(85.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:63.6,scaleX:1.06,scaleY:1.25,x:59,y:238.7},5,cjs.Ease.get(0.99)).to({scaleX:1.32,scaleY:0.99,skewX:-8.6,x:41.8,y:248.1},4,cjs.Ease.get(0.99)).to({scaleX:1.06,scaleY:1.25,skewX:-8.7,x:59,y:238.7},4).to({regX:63.5,scaleX:0.67,scaleY:0.79,x:85.9,y:256.7},6,cjs.Ease.get(0.99)).wait(1));

	// Brow_R
	this.instance_3 = new lib.Brow_R("synched",0);
	this.instance_3.setTransform(188.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:63.6,scaleX:1.16,scaleY:1.37,x:213.4,y:230.4},5,cjs.Ease.get(0.99)).to({regX:63.7,scaleX:1.6,scaleY:1.05,skewX:-8.6,x:229.4,y:246.3},4,cjs.Ease.get(0.99)).to({regX:63.6,scaleX:1.16,scaleY:1.37,skewX:-8.7,x:213.4,y:230.4},4).to({regX:63.5,scaleX:0.67,scaleY:0.79,x:188.9,y:256.7},6,cjs.Ease.get(0.99)).wait(1));

	// Eye_L
	this.instance_4 = new lib.Eye_L("synched",0);
	this.instance_4.setTransform(88.4,300.8,0.668,0.789,0,-8.7,0,55.6,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:55.5,scaleX:1.62,x:39.2,y:303.2},5,cjs.Ease.get(0.99)).to({regX:55.4,scaleX:1.84,skewX:-8.6,x:58.3},4,cjs.Ease.get(0.99)).to({regX:55.5,scaleX:1.62,skewX:-8.7,x:39.2},4).to({regX:55.6,scaleX:0.67,x:88.4,y:300.8},6,cjs.Ease.get(0.99)).wait(1));

	// Eye_R
	this.instance_5 = new lib.Eye_R("synched",0);
	this.instance_5.setTransform(199.4,302.7,0.668,0.789,0,-8.7,0,56.1,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:56,scaleX:1.73,x:238},5,cjs.Ease.get(0.99)).to({regX:55.9,scaleX:2.08,skewX:-8.6,x:216.6},4,cjs.Ease.get(0.99)).to({regX:56,scaleX:1.73,skewX:-8.7,x:238},4).to({regX:56.1,scaleX:0.67,x:199.4},6,cjs.Ease.get(0.99)).wait(1));

	// Nose
	this.instance_6 = new lib.Nose("synched",0);
	this.instance_6.setTransform(154,349.2,0.668,0.789,0,-8.7,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:2.06,scaleY:0.39,x:153.9},5,cjs.Ease.get(0.99)).to({scaleX:1.29,scaleY:0.61,skewX:-8.6,x:102.5},4,cjs.Ease.get(0.99)).to({scaleX:2.06,scaleY:0.39,skewX:-8.7,x:153.9},4).to({scaleX:0.67,scaleY:0.79,x:154},6,cjs.Ease.get(0.99)).wait(1));

	// Face
	this.instance_7 = new lib.Face_Extrude("synched",0);
	this.instance_7.setTransform(162,349.6,0.668,0.789,0,-8.7,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:183.6,regY:211.1,scaleX:0.52,scaleY:0.85,skewX:16.5,skewY:25.2,x:133.6,y:341.4},5,cjs.Ease.get(0.99)).to({scaleX:0.6,scaleY:0.82,skewX:-6.1,skewY:2.7,x:149.4,y:345.9},4,cjs.Ease.get(0.99)).to({scaleX:0.52,scaleY:0.85,skewX:16.5,skewY:25.2,x:133.6,y:341.4},4).to({regX:183.5,regY:211,scaleX:0.67,scaleY:0.79,skewX:-8.7,skewY:0,x:162,y:349.6},6,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,102.5,411.9,828.1);


(lib.Nobuteru_Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Body
	this.instance = new lib.Body_back("synched",0);
	this.instance.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Hair
	this.instance_1 = new lib.Hair("synched",0);
	this.instance_1.setTransform(142.4,220,0.668,0.789,0,-8.7,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Brow_L
	this.instance_2 = new lib.Brow_L("synched",0);
	this.instance_2.setTransform(85.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Brow_R
	this.instance_3 = new lib.Brow_R("synched",0);
	this.instance_3.setTransform(188.9,256.7,0.668,0.789,0,-8.7,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Eye_L
	this.instance_4 = new lib.Eye_L("synched",0);
	this.instance_4.setTransform(88.4,300.8,0.668,0.789,0,-8.7,0,55.6,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Eye_R
	this.instance_5 = new lib.Eye_R("synched",0);
	this.instance_5.setTransform(199.4,302.7,0.668,0.789,0,-8.7,0,56.1,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Nose
	this.instance_6 = new lib.Nose("synched",0);
	this.instance_6.setTransform(154,349.2,0.668,0.789,0,-8.7,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Face
	this.instance_7 = new lib.Face_Extrude("synched",0);
	this.instance_7.setTransform(162,349.6,0.668,0.789,0,-8.7,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,102.5,411.9,828.1);


(lib.Nobuteru_Appear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hair
	this.instance = new lib.Hair("synched",0);
	this.instance.setTransform(203.9,148.5,1,1,0,0,0,186,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3},10).to({rotation:0},9).wait(1));

	// Mouse_D
	this.instance_1 = new lib.Mouse_D("synched",0);
	this.instance_1.setTransform(196.5,449.1,1,1,0,0,0,63.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:462.1},10).to({y:449.1},9).wait(1));

	// Brow_L
	this.instance_2 = new lib.Brow_L("synched",0);
	this.instance_2.setTransform(111,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:8.9,y:190.6},10).to({rotation:0,y:195.6},9).wait(1));

	// Brow_R
	this.instance_3 = new lib.Brow_R("synched",0);
	this.instance_3.setTransform(265,195.6,1,1,0,0,0,63.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-9.7,y:195.5},10).to({rotation:0,y:195.6},9).wait(1));

	// Eye_L
	this.instance_4 = new lib.Eye_L("synched",0);
	this.instance_4.setTransform(104.5,252.1,1,1,0,0,0,55.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},10).to({startPosition:0},9).wait(1));

	// Eye_R
	this.instance_5 = new lib.Eye_R("synched",0);
	this.instance_5.setTransform(270,254.6,1,1,0,0,0,56,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:26.1,rotation:-9.2},10).to({regY:26,rotation:0},9).wait(1));

	// Nose
	this.instance_6 = new lib.Nose("synched",0);
	this.instance_6.setTransform(191.5,314.1,1,1,0,0,0,74.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-15},10).to({rotation:0},9).wait(1));

	// Face
	this.instance_7 = new lib.Face("synched",0);
	this.instance_7.setTransform(203.4,314.6,1,1,0,0,0,183.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:183.6,regY:211.1,rotation:3,x:203.5,y:314.7},10).to({regX:183.5,regY:211,rotation:0,x:203.4,y:314.6},9).wait(1));

	// Leaf
	this.instance_8 = new lib.Leaf("synched",0);
	this.instance_8.setTransform(202.5,746.2,1,1,0,0,0,89.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:7.7,x:171.1,y:722.5},10).to({rotation:0,x:202.5,y:746.2},9).wait(1));

	// Body
	this.instance_9 = new lib.Body_1("synched",0);
	this.instance_9.setTransform(227.9,712.1,1,1,0,0,0,208,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:208.1,rotation:7.7,x:190,y:702.2},10).to({regX:208,rotation:0,x:227.9,y:712.1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,-2,418,932.6);


(lib.Nobuter_panel_rattle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Panel_crouton
	this.instance = new lib.Panel_crouton("single",19);
	this.instance.setTransform(1153.8,2112.2,3.795,3.806,0,-19.4,-15,52.8,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1161.8},0).wait(1));

	// Nobuteruru_rolling
	this.instance_1 = new lib.Nobuteruru_rolling("synched",0,false);
	this.instance_1.setTransform(1076.2,1734.5,4.139,4.139,-5.2,0,0,224.3,506.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1084.2,startPosition:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,61.3,2009,3499.4);


(lib.Nobuter_panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Panel_crouton
	this.instance = new lib.Panel_crouton("synched",0,false);
	this.instance.setTransform(1153.8,2112.2,3.795,3.806,0,-19.4,-15,52.8,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// Nobuteruru_rolling
	this.instance_1 = new lib.Nobuteruru_rolling("synched",0,false);
	this.instance_1.setTransform(1076.2,1734.5,4.139,4.139,-5.2,0,0,224.3,506.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,61.3,2009,3499.4);


(lib.Butt_rattle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Body_back_upper("synched",0);
	this.instance.setTransform(887.5,972,4.138,4.138,-5.1,0,0,196,218.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:913.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1774.9,1944);


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


(lib.Hemajiro_Banzai_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouse
	this.instance = new lib.Mouse_1("synched",0);
	this.instance.setTransform(366.2,324.8,1,0.723,0,0,0,100.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.63,skewX:14.2,x:355.8,y:332.8},9).to({scaleY:0.72,skewX:0,x:366.2,y:324.8},6).wait(1));

	// Nose
	this.instance_1 = new lib.Nose_2("synched",0);
	this.instance_1.setTransform(363.2,275.6,1,0.723,0,0,0,54.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.63,skewX:14.2,x:363.3,y:291.6},9).to({scaleY:0.72,skewX:0,x:363.2,y:275.6},6).wait(1));

	// Eye_R
	this.instance_2 = new lib.Eye_R_2("synched",0);
	this.instance_2.setTransform(425.7,233.3,1,0.723,0,0,0,20,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:19.9,regY:19.1,scaleY:0.63,skewX:14.2,x:434.6,y:256.2},9).to({regX:20,regY:19,scaleY:0.72,skewX:0,x:425.7,y:233.3},6).wait(1));

	// Eye_L
	this.instance_3 = new lib.Eye_L_2("synched",0);
	this.instance_3.setTransform(305.1,228.9,1,0.723,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.63,skewX:14.2,x:315.1,y:252.5},9).to({scaleY:0.72,skewX:0,x:305.1,y:228.9},6).wait(1));

	// Hand_R
	this.instance_4 = new lib.Hand_R("synched",0);
	this.instance_4.setTransform(480.9,146.4,1.139,1,-76.7,0,0,11,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.11,scaleY:0.94,rotation:0,skewX:-75.9,skewY:-63.9,x:508.3,y:183.9},9).to({scaleX:1.14,scaleY:1,rotation:-76.7,skewX:0,skewY:0,x:480.9,y:146.4},6).wait(1));

	// Hand_L
	this.instance_5 = new lib.Hand_L("synched",0);
	this.instance_5.setTransform(224.2,151,1.149,1,74.7,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.96,scaleY:1.07,rotation:0,skewX:75.6,skewY:88.8,x:258.3,y:190.5},9).to({scaleX:1.15,scaleY:1,rotation:74.7,skewX:0,skewY:0,x:224.2,y:151},6).wait(1));

	// Foot_R
	this.instance_6 = new lib.Foot_R("synched",0);
	this.instance_6.setTransform(436.1,406.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1.03,skewX:14.2,x:401.2,y:418.4},9).to({scaleY:1,skewX:0,x:436.1,y:406.6},6).wait(1));

	// Foot_L
	this.instance_7 = new lib.Foot_L("synched",0);
	this.instance_7.setTransform(266.1,401.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1.03,skewX:14.2,x:234.7,y:413.4},9).to({scaleY:1,skewX:0,x:266.1,y:401.6},6).wait(1));

	// Face
	this.instance_8 = new lib.Face_2("synched",0);
	this.instance_8.setTransform(351.1,234.3,1,0.723,0,0,0,186.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.63,skewX:14.2,x:360,y:257},9).to({scaleY:0.72,skewX:0,x:351.1,y:234.3},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.6,0.9,373,512.7);


(lib.Hemajiro_Banzai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouse
	this.instance = new lib.Mouse_1("synched",0);
	this.instance.setTransform(366.2,324.8,1,0.723,0,0,0,100.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.63,skewX:14.2,x:355.8,y:332.8},14).to({scaleY:0.61,skewX:5.8,x:362},2).to({scaleY:0.61,skewX:0,x:366.2},2).to({scaleY:0.61,skewX:8.6,x:360},2).to({skewX:4.7,skewY:-4,x:362.7,y:332.5},2).to({scaleX:1.01,scaleY:0.62,skewX:12.1,skewY:-3.9,x:358.4},2).to({regX:100.6,scaleX:1,scaleY:0.61,skewX:4.7,skewY:-4,x:362.9},2).to({scaleX:0.99,scaleY:0.61,skewX:-2,x:366.7},2).wait(1));

	// Nose
	this.instance_1 = new lib.Nose_2("synched",0);
	this.instance_1.setTransform(363.2,275.6,1,0.723,0,0,0,54.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.63,skewX:14.2,x:363.3,y:291.6},14).to({scaleY:0.61,skewX:5.8,x:363.2},2).to({scaleY:0.61,skewX:0},2).to({scaleY:0.61,skewX:8.6,x:363.3},2).to({skewX:4.7,skewY:-4,x:363.2,y:291.1},2).to({scaleX:1.01,scaleY:0.62,skewX:12.1,skewY:-3.9,x:364.3},2).to({scaleX:1,scaleY:0.61,skewX:4.7,skewY:-4,x:363.2},2).to({scaleX:0.99,scaleY:0.61,skewX:-2,x:362.2},2).wait(1));

	// Eye_R
	this.instance_2 = new lib.Eye_R_2("synched",0);
	this.instance_2.setTransform(425.7,233.3,1,0.723,0,0,0,20,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:19.9,regY:19.1,scaleY:0.63,skewX:14.2,x:434.6,y:256.2},14).to({scaleY:0.61,skewX:5.8,x:429.2},2).to({scaleY:0.61,skewX:0,x:425.6},2).to({scaleY:0.61,skewX:8.6,x:431.1},2).to({skewX:4.7,skewY:-4,x:428.4,y:251.2},2).to({scaleX:1.01,scaleY:0.62,skewX:12.1,skewY:-3.9,x:434.8},2).to({scaleX:1,scaleY:0.61,skewX:4.7,skewY:-4,x:428.4},2).to({scaleX:0.99,scaleY:0.61,skewX:-2,x:422.8},2).wait(1));

	// Eye_L
	this.instance_3 = new lib.Eye_L_2("synched",0);
	this.instance_3.setTransform(305.1,228.9,1,0.723,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.63,skewX:14.2,x:315.1,y:252.5},14).to({regX:20.1,scaleY:0.61,skewX:5.8,x:309.2},2).to({scaleY:0.61,skewX:0,x:305.2},2).to({scaleY:0.61,skewX:8.6,x:311.2},2).to({regX:20,regY:19.9,skewX:4.7,skewY:-4,x:308.5,y:255.7},2).to({scaleX:1.01,scaleY:0.62,skewX:12.1,skewY:-3.9,x:314.4},2).to({scaleX:1,scaleY:0.61,skewX:4.7,skewY:-4,x:308.5},2).to({scaleX:0.99,scaleY:0.61,skewX:-2,x:303.4},2).wait(1));

	// Hand_R
	this.instance_4 = new lib.Hand_R("synched",0);
	this.instance_4.setTransform(480.9,146.4,1.139,1,-76.7,0,0,11,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.11,scaleY:0.94,rotation:0,skewX:-75.9,skewY:-63.9,x:508.3,y:183.9},14).to({scaleX:1.06,scaleY:0.98,skewX:-76.4,skewY:-71.4,x:491.8},2).to({scaleX:1.03,scaleY:1,rotation:-76.7,skewX:0,skewY:0,x:480.9},2).to({scaleX:1.07,scaleY:0.97,rotation:0,skewX:-76.2,skewY:-68.8,x:497.3},2).to({regY:62.1,skewX:-80.2,skewY:-72.7,x:489.6,y:174.5},2).to({scaleX:1.12,scaleY:0.94,skewX:-80,skewY:-66.1,x:506.2},2).to({scaleX:1.07,scaleY:0.97,skewX:-80.2,skewY:-72.7,x:489.5},2).to({scaleX:1.04,scaleY:0.99,skewX:-80.4,skewY:-79,x:475},2).wait(1));

	// Hand_L
	this.instance_5 = new lib.Hand_L("synched",0);
	this.instance_5.setTransform(224.2,151,1.149,1,74.7,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.96,scaleY:1.07,rotation:0,skewX:75.6,skewY:88.8,x:258.3,y:190.5},14).to({scaleX:0.97,scaleY:1.03,skewX:75.1,skewY:80.2,x:243},2).to({scaleX:0.99,scaleY:1,rotation:74.7,skewX:0,skewY:0,x:232.7},2).to({scaleX:0.96,scaleY:1.04,rotation:0,skewX:75.3,skewY:83.1,x:248.1},2).to({regY:71.4,skewX:71.3,skewY:79.1,x:241.5,y:198.2},2).to({regY:71.5,scaleX:0.95,scaleY:1.08,skewX:72.1,skewY:86.6,x:254.8,y:198.3},2).to({regY:71.4,scaleX:0.96,scaleY:1.04,skewX:71.3,skewY:79.1,x:241.4,y:198.2},2).to({scaleX:0.99,scaleY:1,skewX:70.6,skewY:72.8,x:229.6},2).wait(1));

	// Foot_R
	this.instance_6 = new lib.Foot_R("synched",0);
	this.instance_6.setTransform(436.1,406.6,1,1,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1.03,skewX:14.2,x:401.2,y:418.4},14).to({scaleY:1,skewX:5.8,x:420.4},2).to({scaleY:1,skewX:0,x:433.2},2).to({scaleY:1.01,skewX:8.6,x:414},2).to({skewX:4.7,skewY:-4,x:422.6,y:414.2},2).to({scaleX:1.01,scaleY:1.03,skewX:12.1,skewY:-3.9,x:407.3},2).to({scaleX:1,scaleY:1.01,skewX:4.7,skewY:-4,x:422.6},2).to({regX:27.4,scaleX:0.99,scaleY:1.01,skewX:-2,x:435.8},2).wait(1));

	// Foot_L
	this.instance_7 = new lib.Foot_L("synched",0);
	this.instance_7.setTransform(266.1,401.6,1,1,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1.03,skewX:14.2,x:234.7,y:413.4},14).to({scaleY:1,skewX:5.8,x:253.1},2).to({scaleY:1,skewX:0,x:265.4},2).to({scaleY:1.01,skewX:8.6,x:247},2).to({regY:-0.1,skewX:4.7,skewY:-4,x:255.6,y:420.6},2).to({scaleX:1.01,scaleY:1.03,skewX:12.1,skewY:-3.9,x:239.4},2).to({scaleX:1,scaleY:1.01,skewX:4.7,skewY:-4,x:255.6},2).to({regX:39.9,scaleX:0.99,scaleY:1.01,skewX:-2,x:269.7},2).wait(1));

	// Face
	this.instance_8 = new lib.Face_2("synched",0);
	this.instance_8.setTransform(351.1,234.3,1,0.723,0,0,0,186.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.63,skewX:14.2,x:360,y:257},14).to({scaleY:0.61,skewX:5.8,x:354.7},2).to({regX:186.6,scaleY:0.61,skewX:0,x:351.2},2).to({regX:186.5,scaleY:0.61,skewX:8.6,x:356.5},2).to({skewX:4.7,skewY:-4,x:354,y:257.1},2).to({scaleX:1.01,scaleY:0.62,skewX:12.1,skewY:-3.9,x:359.7},2).to({scaleX:1,scaleY:0.61,skewX:4.7,skewY:-4,x:354.1},2).to({scaleX:0.99,scaleY:0.61,skewX:-2,x:349.1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.6,0.9,373,512.7);


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


(lib.Dameo_Banzai_attack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hand_R
	this.instance = new lib.Hand_R("synched",0);
	this.instance.setTransform(429.8,62.9,1,1,-75.7,0,0,11.1,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:61.9,scaleX:0.97,scaleY:1.05,rotation:0,skewX:-76.4,skewY:-88.1,x:394.7},13).to({regY:62,scaleX:0.98,scaleY:1.03,skewX:-76.1,skewY:-81.8,x:412.3},2).to({scaleX:0.97,scaleY:1.05,skewX:-76.3,skewY:-86.3,x:399.8},2).to({regY:61.9,scaleX:0.99,scaleY:1.01,skewX:-75.9,skewY:-78.3,x:422.2},2).to({scaleX:1.01,scaleY:0.99,skewX:-75.6,skewY:-74,x:434.7},2).to({startPosition:0},2).to({regX:11,skewX:-81.3,skewY:-79.7,x:418.2,y:49.5},2).to({regY:61.8,scaleX:1.04,scaleY:0.97,skewX:-81.1,skewY:-72.1,x:441.2},2).to({scaleX:1.02,scaleY:0.98,skewX:-81.2,skewY:-75.5,x:431},2).wait(1));

	// Hand_L
	this.instance_1 = new lib.Hand_L("synched",0);
	this.instance_1.setTransform(147.4,86.1,1,1,72.7,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:71.6,scaleX:1.08,scaleY:0.94,rotation:0,skewX:71.5,skewY:62,x:117.5},13).to({scaleX:1.04,scaleY:0.97,skewX:72.2,skewY:67.1,x:132.4},2).to({scaleX:1.07,scaleY:0.95,skewX:71.7,skewY:63.4,x:121.7},2).to({scaleX:1.01,scaleY:0.99,skewX:72.5,skewY:70.3,x:140.9},2).to({scaleX:0.99,scaleY:1.01,skewX:72.9,skewY:74.4,x:151.6},2).to({startPosition:0},2).to({regY:71.5,skewX:67.2,skewY:68.7,x:138.9,y:100.9},2).to({scaleX:0.95,scaleY:1.06,skewX:68.3,skewY:76,x:154.7},2).to({scaleX:0.97,scaleY:1.04,skewX:67.8,skewY:72.7,x:147.7},2).wait(1));

	// Foot_R
	this.instance_2 = new lib.Foot_R("synched",0);
	this.instance_2.setTransform(362.5,347.9,1,1.372,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.41,skewX:-12.5,x:390.7},13).to({scaleY:1.38,skewX:-6.3,x:376.6},2).to({regX:27.4,scaleY:1.4,skewX:-10.8,x:386.6},2).to({scaleY:1.37,skewX:-2.7,x:368.5},2).to({scaleY:1.37,skewX:1.8,x:358.3},2).to({skewX:1.8},2).to({skewX:-3.9,skewY:-5.8,x:370.7,y:340.7},2).to({scaleX:1.01,skewX:4.2,skewY:-5.7,x:352.7},2).to({scaleX:1.01,scaleY:1.37,skewX:0.6,x:360.8},2).wait(1));

	// Foot_L
	this.instance_3 = new lib.Foot_L("synched",0);
	this.instance_3.setTransform(200.4,338.9,1,1.171,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.2,skewX:-12.5,x:226.7},13).to({scaleY:1.18,skewX:-6.3,x:213.5},2).to({scaleY:1.19,skewX:-10.8,x:222.9},2).to({scaleY:1.17,skewX:-2.7,x:206},2).to({scaleY:1.17,skewX:1.8,x:196.6},2).to({skewX:1.8},2).to({skewX:-3.9,skewY:-5.8,x:208.9,y:347.9},2).to({scaleX:1.01,skewX:4.2,skewY:-5.7,x:189.9},2).to({scaleX:1.01,scaleY:1.17,skewX:0.6,x:198.3},2).wait(1));

	// damehema_0012_mouse_dame.png
	this.instance_4 = new lib.Mouse("synched",0);
	this.instance_4.setTransform(306.5,246,1,0.672,0,0,0,86.5,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.69,skewX:-12.5,x:312.1},13).to({scaleY:0.68,skewX:-6.3,x:309.3},2).to({scaleY:0.68,skewX:-10.8,x:311.4},2).to({scaleY:0.67,skewX:-2.7,x:307.7},2).to({skewX:1.8,x:305.6},2).to({skewX:1.8},2).to({regY:35,skewX:-3.9,skewY:-5.8,x:308.1,y:244.5},2).to({scaleX:1.01,skewX:4.2,skewY:-5.7,x:303.7},2).to({scaleX:1.01,scaleY:0.67,skewX:0.6,x:305.7},2).wait(1));

	// damehema_0011_nose_dame.png
	this.instance_5 = new lib.Nose_1("synched",0);
	this.instance_5.setTransform(300,182.9,1,0.672,0,0,0,35,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.69,skewX:-12.5,x:291.6},13).to({scaleY:0.68,skewX:-6.3,x:295.8},2).to({scaleY:0.68,skewX:-10.8,x:292.8},2).to({scaleY:0.67,skewX:-2.7,x:298.2},2).to({skewX:1.8,x:301.1},2).to({skewX:1.8},2).to({skewX:-3.9,skewY:-5.8,x:297.3,y:182.1},2).to({scaleX:1.01,skewX:4.2,skewY:-5.7,x:301.7},2).to({regX:35.1,scaleX:1.01,scaleY:0.67,skewX:0.6,x:299.8},2).wait(1));

	// damehema_0010_eye_dame_R.png
	this.instance_6 = new lib.Eye_L_1("synched",0);
	this.instance_6.setTransform(249,131.1,1,0.672,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.69,skewX:-12.5,x:229.1},13).to({scaleY:0.68,skewX:-6.3,x:239.1},2).to({scaleY:0.68,skewX:-10.8,x:232},2).to({scaleY:0.67,skewX:-2.7,x:244.8},2).to({skewX:1.8,x:251.8},2).to({skewX:1.8},2).to({regX:18.1,skewX:-3.9,skewY:-5.8,x:243.1,y:135.6},2).to({scaleX:1.01,skewX:4.2,skewY:-5.7,x:254.1},2).to({scaleX:1.01,scaleY:0.67,skewX:0.6,x:249.2},2).wait(1));

	// damehema_0009_eye_dame_L.png
	this.instance_7 = new lib.Eye_R_1("synched",0);
	this.instance_7.setTransform(347,133.1,1,0.672,0,0,0,20,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:20.1,scaleY:0.69,skewX:-12.5,x:327.7},13).to({scaleY:0.68,skewX:-6.3,x:337.4},2).to({scaleY:0.68,skewX:-10.8,x:330.5},2).to({scaleY:0.67,skewX:-2.7,x:342.9},2).to({skewX:1.8,x:349.8},2).to({skewX:1.8},2).to({skewX:-3.9,skewY:-5.8,x:340.8,y:127.8},2).to({scaleX:1.01,skewX:4.2,skewY:-5.7,x:352.8},2).to({scaleX:1.01,scaleY:0.67,skewX:0.6,x:347.5},2).wait(1));

	// damehema_0013_face_dame.png
	this.instance_8 = new lib.Face_1("synched",0);
	this.instance_8.setTransform(282.5,199.2,1,0.672,0,0,0,158.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.69,skewX:-12.5,x:277.7},13).to({scaleY:0.68,skewX:-6.3,x:280.1},2).to({regX:158.6,scaleY:0.68,skewX:-10.8,x:278.5},2).to({regX:158.5,scaleY:0.67,skewX:-2.7,x:281.5},2).to({skewX:1.8,x:283.1},2).to({skewX:1.8},2).to({regY:170.6,skewX:-3.9,skewY:-5.8,x:281,y:200.3},2).to({scaleX:1.01,skewX:4.2,skewY:-5.7,x:282.9},2).to({scaleX:1.01,scaleY:0.67,skewX:0.6,x:282.1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.4,-48.3,370.4,537.6);


(lib.Dameo_Banzai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hand_R
	this.instance = new lib.Hand_R("synched",0);
	this.instance.setTransform(429.8,62.9,1,1,-75.7,0,0,11.1,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:61.9,scaleX:0.97,scaleY:1.05,rotation:0,skewX:-76.4,skewY:-88.1,x:394.7},9).to({regY:62,scaleX:1,scaleY:1,rotation:-75.7,skewX:0,skewY:0,x:429.8},6).wait(1));

	// Hand_L
	this.instance_1 = new lib.Hand_L("synched",0);
	this.instance_1.setTransform(147.4,86.1,1,1,72.7,0,0,118.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:71.6,scaleX:1.08,scaleY:0.94,rotation:0,skewX:71.5,skewY:62,x:117.5},9).to({regY:71.5,scaleX:1,scaleY:1,rotation:72.7,skewX:0,skewY:0,x:147.4},6).wait(1));

	// Foot_R
	this.instance_2 = new lib.Foot_R("synched",0);
	this.instance_2.setTransform(362.5,347.9,1,1.372,0,0,0,27.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.41,skewX:-12.5,x:390.7},9).to({scaleY:1.37,skewX:0,x:362.5},6).wait(1));

	// Foot_L
	this.instance_3 = new lib.Foot_L("synched",0);
	this.instance_3.setTransform(200.4,338.9,1,1.171,0,0,0,40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.2,skewX:-12.5,x:226.7},9).to({scaleY:1.17,skewX:0,x:200.4},6).wait(1));

	// damehema_0012_mouse_dame.png
	this.instance_4 = new lib.Mouse("synched",0);
	this.instance_4.setTransform(306.5,246,1,0.672,0,0,0,86.5,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.69,skewX:-12.5,x:312.1},9).to({scaleY:0.67,skewX:0,x:306.5},6).wait(1));

	// damehema_0011_nose_dame.png
	this.instance_5 = new lib.Nose_1("synched",0);
	this.instance_5.setTransform(300,182.9,1,0.672,0,0,0,35,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.69,skewX:-12.5,x:291.6},9).to({scaleY:0.67,skewX:0,x:300},6).wait(1));

	// damehema_0010_eye_dame_R.png
	this.instance_6 = new lib.Eye_L_1("synched",0);
	this.instance_6.setTransform(249,131.1,1,0.672,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.69,skewX:-12.5,x:229.1},9).to({scaleY:0.67,skewX:0,x:249},6).wait(1));

	// damehema_0009_eye_dame_L.png
	this.instance_7 = new lib.Eye_R_1("synched",0);
	this.instance_7.setTransform(347,133.1,1,0.672,0,0,0,20,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:20.1,scaleY:0.69,skewX:-12.5,x:327.7},9).to({regX:20,scaleY:0.67,skewX:0,x:347},6).wait(1));

	// damehema_0013_face_dame.png
	this.instance_8 = new lib.Face_1("synched",0);
	this.instance_8.setTransform(282.5,199.2,1,0.672,0,0,0,158.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.69,skewX:-12.5,x:277.7},9).to({scaleY:0.67,skewX:0,x:282.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.4,-48.3,370.4,537.6);


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


(lib.RingPopupAndFill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.Blackout();
	this.instance.setTransform(1575.5,748.2,1,1,0,0,0,1920,1200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},11).wait(1));

	// レイヤー 4
	this.instance_1 = new lib.Circle();
	this.instance_1.setTransform(1025.1,358.4,0.071,0.071,0,0,0,122.4,122.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regX:122.3,regY:122.3,scaleX:1,scaleY:1,y:358.5,alpha:1},10,cjs.Ease.get(1)).to({alpha:0},7).wait(1));

	// レイヤー 3
	this.instance_2 = new lib.Ring();
	this.instance_2.setTransform(1025.1,358.4,0.163,0.163,0,0,0,122.3,122.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,y:358.5},8,cjs.Ease.get(0.98)).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1004.4,337.7,41.4,41.4);


(lib.RingPopupAndAway = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.Blackout();
	this.instance.setTransform(1575.5,748.2,1,1,0,0,0,1920,1200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(1));

	// レイヤー 3
	this.instance_1 = new lib.Ring();
	this.instance_1.setTransform(1025.1,358.5,1,1,0,0,0,122.3,122.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:7.55,scaleY:7.55,x:1025.5,y:358.8,alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344.5,-451.8,3840,2400);


(lib.Circle__anim_extend_blur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.Circle_1("synched",0);
	this.instance.setTransform(2,0);
	this.instance.alpha = 0.68;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:35.94,scaleY:35.94,x:1.7,alpha:0.629},7,cjs.Ease.get(-1)).to({scaleX:127.53,scaleY:127.53,x:0,alpha:0},7).wait(9));

	// レイヤー 1
	this.instance_1 = new lib.Circle_1("synched",0);
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


(lib.Foreground = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Scene001_start:0,Scene001_stop:128,Scene002_start:145,Scene002_stop:164,Scene003_start:176,Scene003_stop:194,Scene004_start:204,Scene004_stop:363,Scene005_start:384,Scene005_stop:499,Scene006_start:508,Scene006_stop:638,"Scene001_start":0,"Scene001_stop":128,"Scene002_start":145,"Scene002_stop":164,"Scene003_start":176,"Scene003_stop":194,"Scene004_start":204,"Scene004_stop":363,"Scene005_start":384,"Scene005_stop":499,"Scene006_start":508,"Scene006_stop":638});

	// ex2
	this.instance = new lib.Title("single",22);
	this.instance.setTransform(873.9,55.2,1,1,0,0,0,786.6,105.7);
	this.instance._off = true;

	this.instance_1 = new lib.Title002_out_2("synched",0,false);
	this.instance_1.setTransform(1050,55.2,1,1,0,0,0,786.6,105.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},145).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance_1}]},19).to({state:[]},18).wait(460));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145).to({_off:false},0).wait(1).to({startPosition:22},0).to({regY:105.6,scaleX:0.2,scaleY:0.2,x:2084.2,y:53.2},10).to({_off:true},1).wait(497));

	// Title
	this.instance_2 = new lib.Title("synched",0,false);
	this.instance_2.setTransform(873.9,55.2,1,1,0,0,0,786.6,105.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Title002("synched",0,false);
	this.instance_3.setTransform(1050,55.2,1,1,0,0,0,786.6,105.7);

	this.instance_4 = new lib.Title003("synched",0,false);
	this.instance_4.setTransform(1202,39.2,1,1,0,0,0,786.6,105.7);

	this.instance_5 = new lib.Title004("synched",0,false);
	this.instance_5.setTransform(1202,39.2,1,1,0,0,0,786.6,105.7);

	this.instance_6 = new lib.Title005("synched",0,false);
	this.instance_6.setTransform(1202,39.2,1,1,0,0,0,786.6,105.7);

	this.instance_7 = new lib.Title006("synched",0,false);
	this.instance_7.setTransform(1202,39.2,1,1,0,0,0,786.6,105.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},85).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},17).to({state:[]},31).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_6}]},180).to({state:[{t:this.instance_7}]},115).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({mode:"single",startPosition:22},43).to({_off:true},17).wait(509));

	// Logo
	this.instance_8 = new lib.UnkoPadLogo_Appear("synched",0,false);
	this.instance_8.setTransform(631.2,605.8,1.3,1.3,0,0,0,260.1,57.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.UnkoPadLogo("synched",0);
	this.instance_9.setTransform(541.2,586.1,0.954,0.954,0,0,0,260.1,57.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({_off:true,regY:57.6,scaleX:0.95,scaleY:0.95,x:541.2,y:586.1},63).wait(579));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},63).to({regX:259.6,regY:57.5,scaleX:1,scaleY:1,x:290.7,y:80.8},6).wait(573));

	// Box
	this.instance_10 = new lib.WhiteBox("synched",0);
	this.instance_10.setTransform(960,600,1,1.111,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.63,x:1040},6).wait(2).to({scaleX:0.54,x:960},0).to({regX:960.1,scaleX:0.44,scaleY:0.6,y:598.9},4).to({scaleX:0.37,scaleY:0.22,x:615.9,y:600},3).wait(60).to({startPosition:0},0).to({regX:960,scaleX:0.36,scaleY:0.22,x:348,y:117.2},5).wait(4).to({startPosition:0},0).to({scaleX:1,scaleY:0.14,x:960,y:77.1},7).wait(563));

	// Grass
	this.instance_11 = new lib.ForeImage();
	this.instance_11.setTransform(960,996.1,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:797.6},81).wait(95).to({y:836},0).to({y:756},8).wait(20).to({y:940},7).wait(173).to({y:936},0).to({y:622.4},11).wait(113).to({y:902.9},8).wait(138));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1618.8);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.instance_3}]},24).to({state:[]},48).wait(2));

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


(lib.Background = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Scene001_start":0,"Scene001_stop":128,"Scene002_start":145,"Scene002_stop":164,"Scene003_start":176,"Scene003_stop":194,"Scene004_start":204,"Scene004_stop":363,"Scene005_start":384,"Scene005_stop":499,"Scene006_start":508,"Scene006_stop":638});

	// ex
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgZBoQgCgBAAgDIABgEIACgCIAMgNQAFgGAEgJQADgLAEgKQAEgLABgMIADgVQAAgSgEgRQgEgTgHgPQgHgQgLgJIgCgCIAAgDQAAgDACgCQACgCADAAQAEAAAFAFQAFAFAEAIQAIAMAGAPQAGAPADAPQADARAAANQgBARgEARQgEARgHAQQgIAQgGAKIgKAKQgFADgDAAQgDAAgCgCg");
	this.shape.setTransform(1365,953.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgdBXQgDgDAAgEQAAgDABgCQACgCAFgCQAKgFAHgGQAHgFAEgGIgSgDQgKgCgGgDQgKgEgFgIQgGgHAAgKQAAgIAGgGQAGgIAKgFIASgFQAKgCALgBIABgDIgBgKIAAgFIgWAAIgXAAIgUAAIgOAAIgIAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAAAIgCgDIAAgDQAAgEACgCIAEgDIABAAIAEAAIAMAAIAOAAIARAAIAZAAIAOABIAAgLIgBgHQABgIACgDQABgDAGAAQAEAAADACQACACgBAFIAAAFIAAAGIAAALIAcAAIATgBIACAAIAAAAQAEAAACACQACADAAADIgBAGIgEADIgCAAIgEAAIgFAAIgIAAIgMABIgKAAIgLAAIABAKIAAADIgBAGIABAIIABAQIgBAMQAAANgBAIQgBAJgDAGQgDAGgGAHIgNANIgNAKQgIAEgEAAQgEAAgBgDgAgHgGIgNAEQgGACgEADQgDAEAAAEQAAAGADAEQADAEAHACQAGADAIABIAQACIABgKIAAgLIAAgEIABgGIgBgKIgSACg");
	this.shape_1.setTransform(1350.6,951.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgbBYQgLAAgJgEQgJgEgGgHQgFgHABgJQAAgHADgHQAEgHAIgFQAFgEAGgDIANgFIANgBIADAAIAEAAIAAgCIAAgEIgBgHIABgDIAAgCIgVAAIgUAAIgWAAQgEAAgCgCQgCgDAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADgDIACAAIADgBIAIABIAHAAIAGAAIAKAAIARAAIANAAIABgYIgJABIgFAAIgagBIgMAAIgFAAIgDAAQgLAAAAgJQAAgCACgDIAEgDIABAAIACAAIACAAIAFAAIAGAAIAMABIAXAAIAOgBIABgXQAAgDADgCQACgCACAAQADAAADACQACACAAADIAAAYIAVgBIAUAAIARAAIACAAIABAAQAFAAACACQADACgBAEQAAADgCADQgBACgDABIgLAAIgRAAIgTAAIgSAAIAAAYIAYAAIALgBIAQAAIAJAAQAEAAADACQACACABAEIgCAFQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCABIgEAAIgEAAIgKAAIgPAAIgQAAIgOAAIAAAOIAAANIAFADIAFAGIAOALIAQALIAOAJIAEADIABAEQAAAFgCADQgDADgEAAQgDgBgIgEQgIgFgJgHIgSgQQgCAKgDAHQgDAGgEAEQgFAFgGACQgGACgHAAIgDAAgAgeAlQgIAEgFAFQgFAFAAAGQAAAGAGAEQAGAEAKAAQALABAHgIQAHgHAAgOIAAgFIgHgDIgHgBQgIAAgHADg");
	this.shape_2.setTransform(1330.7,950.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgmBUQgCgDAAgFQAAgDABgBQACgDAFgBQARgHAMgGQAKgHAIgHQAHgHAEgGQAEgGABgJIACgUQABgTgBgSQgBgTgCgNIAAgCIAAgBQAAgEADgCQADgBAFAAQADgBADACQACADAAADIACANIAAAUIABAWIAAAUQgBAOgCAKQgCALgHAJQgGAJgKAJIgMAJIgMAIIgUAJIgFACIgDABIgDAAQgEAAgDgDgAgsAMIgDgEIgDgNQgBgJAAgKIABgOIABgOIADgOIABgCIAAgDIAAgCIgBgDIAAAAIAAgBQAAgDADgDQADgCAFAAQAEAAACAEQADADAAAIIAAADIgBAGIgCANIgCAPIAAALIAAANIACAJIAAACIAAABQAAAFgDADQgCACgFAAQgDAAgCgBg");
	this.shape_3.setTransform(1310.8,950.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAABXQgCgCgBgEIABgGIACgCIACgBIADAAQAYgGANgMQAOgMABgQQAAgKgFgHQgEgIgJgDQgNASgRAQQgOARgTALQgLAGgKADQgKADgIAAQgLAAgHgGQgFgIAAgLQAAgPAJgNQAHgOAPgIQAOgKATgFIAAgDIAAgEIAAgLIABgCIAAgDIAAgDIgXAAIgRgBIgKgBQgEAAgCgCQgDgDABgEQAAgEADgCQABgDAEAAIAFABIAIABIAMABIAOAAIAMABIAAgJIABgIIABgGQABgDACgBQACgCADAAQAFAAACACQADADAAADIgBABIAAACIgBADIAAAHIgBAIIAOAAIATAAIAUAAIAQAAIAJgBIACAAQAFAAADACQACADAAAEQAAAEgCABQgDADgDABIgKAAIgUAAIgbAAIgagBIAAADIgBAKIAAAGIAAADIAJAAIALgBQARAAAOAHQAOAHAIAJQAIALAAAPQgBAPgIANQgHAMgPAJIgKAFIgMAFIgLAEIgIABQgEAAAAgDgAgoAEQgIAEgGAGQgGAGgEAJQgEAHAAAHQAAAGACACQACAEAFAAQAHAAAJgEQAKgEALgHIAAgPIgBgPIABgMQgLACgHAEgAACgHIgIABIAAAJIgBALIABANQAIgIAIgKQAIgJAFgHIgFgBIgFAAIgLABg");
	this.shape_4.setTransform(1291,950.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgYBXQgHgFgIgHIgEgGQgCgCAAgDQABgDADgDQACgDAEAAIAEABIAEAEQADAFAFADQAFAEADAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAEgGIACgNIABgUIAAgXIABgIIgBgLIAAgHIAAgCIAAgBIgCAAIgBAAIgGABIgKAAIgKAAIgEAYIgFATQgDAJgFAHQgFALgIAJIgSAVIgEADIgFABQgEAAgCgDQgDgDAAgEQgBgDACgCQACgDAFgDQAHgHAHgIQAHgJAFgJQAFgJADgHIAEgOIADgTIgFAAIgOAAIgIAAIgDAAIgBAAQgFAAgCgCQgDgDAAgEQAAgFADgBQACgDAFAAIAUAAIAGABIAHAAIABgRIABgTQAAgFADgDQACgDAFAAQAEABACACQADADgBADIAAAIIgBANIgCARIAKgBIAHAAIAKgBIABAAIADAAQAFAAADACQADACABAFIACAJIABAPIgBARQAAATgCAPQgBAQgDAJQgDAKgGAFQgEAFgIAAQgHAAgIgEgABBAdIgIgJIgOgUIgNgSIgIgSIgEgKQABgEACgCQADgCAEgBIAEACIADADIABABIABAFIALAUIAOAVIAOARIADAEIABADQAAAEgDADQgDADgEAAQgCAAgDgCgABCgaIgFgFIgKgMIgMgSQgEgFABgCQAAgDACgCQACgCADAAIADABIADAEIAFAGIAHAKIAHAKIAGAHIABADIABACQAAADgCACQgDACgCAAIgDgBgABWgoIgFgGIgIgMIgNgSQgEgGABgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQACgCADAAIADABIADAEIAFAHIAGAJIAIAKIAGAIIABACIABACQgBADgCACQgCADgDAAIgDgBg");
	this.shape_5.setTransform(1271.1,949.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASBTIgggBIgVgCIgMgCQgIgEgEgFQgEgGABgHQAAgGADgGQADgGAFgFIAYgUIAagTQgOgJgMgKIgWgSIgQgPIgGgHQgCgEAAgDQAAgEADgDQADgDAFAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIADAEQAEAGAIAJIAVATIAgAbIALgJIAJgHIAJgGIADgCIAEgDIAFgFIAFgFIACgDIAEAAQAFAAACADQADADAAAEQAAAEgEAFQgFAEgKAHIgYARIgZARIgWAUQgLAIgGAHIgGAHIgBAEQAAAEACACQACACAGABIARACIAbAAIAVAAIANAAIAIgBIAFgCIADgCIADAAQAEABACACQACADABAEQAAADgCACIgFAEQgDACgGABIgQABIgYAAg");
	this.shape_6.setTransform(1250.3,949.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgBBPQgOAAgNgGQgMgGgIgKQgEgEgBgFIgDgHQABgEACgDQADgCAEgBQABAAAAAAQABABABAAQAAAAABAAQAAAAABABQABABACAFQAGAKAJAGQAKAGANAAQAKAAAJgFQAJgFAHgMIADgEIAFgBQAEAAADACQACADAAADIgBAFQAAADgCADQgFAIgIAGQgIAGgJADQgJADgJAAIgCAAgAAcgPQgCgDAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABgBADgBQAHgEAEgGQAFgFAAgFQAAgHgKgDQgKgDgVAAQgMgBgQACQgQABgPACIgCAAIgBAAQgEAAgBgCQgDgDAAgDQAAgDACgDQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAIARgCIAXgCIAUAAIAXABIARADQALADAGAHQAGAHAAAJQAAAIgFAIQgEAHgJAHIgHAFIgGABQgEAAgCgDg");
	this.shape_7.setTransform(1230.9,949.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgHBSQgVAAgLgHQgLgGAAgMQABgOAOgLQAOgKAZgGIgLgJIgPgJIgFgEIgBgFQAAgEACgDQACgDAEgDIAUgQIAggYIgBgBIgTABIgUABIgVAAIgQAAQgIAAgDgCQgDgCABgFQAAgEACgDQACgCAFABIACAAIAEAAIAFAAIAHAAIAmAAIAkgBIACAAIABAAQAGAAAEADQAEACAAAEIgBAEIgDAEIgBABIgFAEIgPALIgRAOIgQAMIgKAKIALAJQAHADALAGIAXAOQAJAGADAGQAEAFAAAGQAAALgKAJQgJAJgQAFQgOAFgPAAIgDAAgAgEAiQgNAFgGAFQgHAGgBAGQAAAFAFACQAFACANAAQAMABALgDQALgEAHgEQAGgGABgGQAAgDgEgEIgMgJQgSADgKAEg");
	this.shape_8.setTransform(1210.5,949.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgbBQQgIgJAAgPQABgLAGgKQAGgKAKgHQAKgGAJAAIAHABIAIADIgCgOIgDgQIAAgBIAAgBQAAgEADgCQACgCAEgBQADABACACIADADIAAACIABAFIADAOIABALIABAPIAHAHIAFAEIAEAEIACACIABABIABABIAEADIAIAEIAEAEQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAAFgCACQgDADgDAAQgCAAgEgCIgJgHIgDgCIgEgFIgIgHQgGATgMALQgNALgOAAQgNgBgHgJgAgEAgQgGAEgDAGQgEAGAAAIQAAAHADAEQADAEAGAAQAKAAAIgJQAIgKABgRIgIgFQgDgBgEAAQgHAAgEADgAhPAbQgCgDAAgEIAAgDIABgCIAEgEQAKgKAJgLQAJgNAHgOIgJAAIgKAAIgKAAIgFABQgFAAgDgDQgCgCAAgFQAAgDACgCQACgCADgBIABAAIAEAAIAJAAIAVAAIAIAAIgBgOIgCgKIAAgBIAAgBQAAgEADgCQADgDAEAAQAFABACAGQADAHAAAOIAAADIAAAEIAGAAIAJAAIAOgBIAMAAIAKAAIgDgKIgBgHQAAgEADgDQADgCADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABIAAABIABAFQABANAKAMQAJALAQAIQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIABAEQAAAEgCACQgCADgEAAQgDAAgMgJQgHgFgFgFQgFgFgEgGIgHAAIgEAAIgGAAIgHAAIgQABIgLAAIgOABIgQAfQgKANgMAPIgDAEIAAABIgEACIgEABQgEAAgDgDg");
	this.shape_9.setTransform(1191.1,948.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhJBVQgDgCAAgDIgBgJIABgSIAAgWIAAgUIAAgZIABgdIABgXIABgNQABgDADgCQACgCAEAAQAEAAACACQACADAAAEIgBAEIAAAGIgBAbIgBAmIAAAfIAAAcIAAATIAAABIAAABQAAAEgCACQgDADgEAAQgEAAgCgCgAAZBSQgKAAgJgFQgHgFgHgHQgFgGgDgFQgCgFAAgEQAAgEACgDQACgCAEAAIAFABIADABIAAACIABADQACAKAHAFQAHAGAKAAQAMAAAJgGQAIgGADgLIADgDQADgCADAAQAEAAACACQADADAAAEIgCAGIgDAIQgIALgLAGQgKAGgOAAIgCAAgAAugDQgDgDAAgEIABgEIAEgDQAGgFADgGQADgGAAgGQAAgJgIgEQgIgGgQAAQgJAAgIABIgPAGIgDABIgDABQgDgBgDgCQgCgDAAgDQAAgEADgDQACgDAHgCQAGgDAIgBQAJgBALAAQAQABALAEQALAGAGAHQAGAJAAALQAAAJgFAKQgFAJgIAGIgEACIgEABQgEAAgCgCg");
	this.shape_10.setTransform(1170.8,947.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("ABLBaIgDgBIgIgDIgRgGIgSgGIgQgFQgLAGgOAEQgPAFgSACQgRACgSABQgKgBAAgJQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIACAAIAGAAQAWgBAQgCQARgCANgFIgKgCIgKgDIgPgEQgHgBgDgCQgEgDAAgEIACgFIAGgHIAEgEIADgEIgqgBQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADgBIA1ABIADgGIAEgCIADgEQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAADADQADACgBABIAAADIgEAGIBiABQADABABACQACACAAADQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgfAAIgMASIgOAPIAbAHIAYAIQADABACACQACADAAACQAAAEgDACQgDADgDAAIgDAAgAgcAdIgFAGIgCACIAAACIAAABIAEACIAJACIASAEIAPAFIANgNIAMgPIg7gBIgFAFgAg/gIQgHAAgEgDQgDgEAAgHIAAgWQAAgHAEgEQAEgDAHAAIAhAAIAAgQIg0AAQgDgBgCgCQgBgCAAgDQAAgDACgCQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAICnACQADABABACIABAGQAAADgBACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIg1AAIAAAQIAiAAQAHAAADAEQAEADAAAHIgBAXQAAAHgDADQgEAEgHAAgAAfgUIAcABIADgBIABgDIAAgPIgBgDIgDgBIgbAAgAgOgVIAdABIAAgXIgcAAgAg7grIgBADIgBAOIABADQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAbABIAAgXIgaAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABgAgNg5IAdAAIAAgQIgdAAg");
	this.shape_11.setTransform(1150.9,948.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AhaBYQgCgDAAgEQAAgCACgCIADgEQANgFALgHQALgHAMgJIABhYQAAgDADgCQACgDAEAAQAEABADADQACABAAAEIgBBHQAWgVARgZQASgbAMgfQABgDACgCQADgBADAAQAEABACACQADADAAADIgDALQgDAHgFAKQgGANgIAMIgOAUIgPASQgIAJgIAJIgRARIgBAIQAAAEACADQACABAGABIAQABIARgBIAKgBQAEgCABgCQACgDABgHIABgTQAAgGACgCQADgCAEgBIAFABIAEAEIAAADIAAAFQAAARgCAJQgCAMgEADQgCAEgGACQgFABgJABIgXABQgRgBgLgBQgKgCgDgFQgEgDAAgJIgRALIgPAJQgHAEgDgBQgEAAgDgDgABTAyIgFgBIgEgEIAAgBIgCgFIgGgRIgHgRIgIgRIgCgEIAAgDQAAgEADgCQACgDAEABIAFABQADABABAEIAIAPIAIASIAHATIADAKQAAAFgDACQgCACgEAAIgBAAgAhYAvQgDgCAAgEIAAgCIABgDIABgEQAGgMADgQIAHgfQABgFACgDQACgCAEAAQAFAAACACQACADAAAFIgBAHIgCAMIgDANIgCALQgCAIgDAHIgEAMQgBAEgDABQgCACgEAAQgEgBgCgCgAAMgpIgDgBIgEgDIgJgJIgMgIIgRgLIgFgFQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgDADgDQACgDAEABQADAAAIAEQAIAFANAKIAGAFIAIAFIAFAEIADADIAAAFQAAADgCADQgDADgEAAIgDgBg");
	this.shape_12.setTransform(1130.9,947.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AhJBVQgDgCAAgDIgBgJIABgSIAAgWIAAgUIAAgaIABgcIABgXIABgNQABgDADgCQACgCAEAAQAEAAACACQACADAAAEIgBAFIAAAFIgBAbIgBAmIAAAfIAAAcIAAATIAAABIAAACQAAADgCACQgDADgEAAQgEAAgCgCgAAZBSQgKAAgJgFQgHgEgHgIQgFgFgDgGQgCgFAAgEQAAgEACgDQACgCAEAAIAFABIADABIAAACIABADQACAKAHAFQAHAGAKAAQAMAAAJgGQAIgGADgLIADgEQADgBADAAQAEAAACACQADADAAAEIgCAHIgDAHQgIALgLAGQgKAGgOAAIgCAAgAAugDQgDgDAAgDIABgFIAEgDQAGgFADgGQADgFAAgHQAAgIgIgFQgIgGgQAAQgJAAgIABIgPAGIgDABIgDAAQgDAAgDgCQgCgDAAgEQAAgDADgDQACgDAHgCQAGgDAIgBQAJgBALAAQAQABALAEQALAGAGAHQAGAJAAALQAAAKgFAJQgFAJgIAGIgEACIgEACQgEAAgCgDg");
	this.shape_13.setTransform(1282.5,914.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AANBeIgOgBQgGgCgCgCQgCgCAAgDQAAgEACgCQACgDAEAAIABAAIABABIAFABIAHAAQAEAAABgBIABgFIABgqIgrgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgGQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABgBAAAAIBpACQADAAACACQABADAAADQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgtgBIgBAwQAAAKgEADQgFAEgJAAIgDAAgAhZBbQgCgCAAgDIADieQAAgHAEgDQADgEAHAAIAcABQAFAAADACQADADAAAFIgBAIIgDAMIgFAOIgEAMIgBADIgBADIABACIABAEQAHALADAKQADALAAAMQAAAOgGAGQgGAGgOgBIgHAAIgHAAIAAAiQgBADgCACIgGACQgDAAgCgCgAhIhFIgBADIgCBmIAGABIAHAAQAGABADgEQADgDAAgJQAAgJgEgKQgCgIgGgJIgCgEIgBgEIABgEIACgHIAFgOIAEgMIABgIIgBgCIgDgBIgNAAIgDABgABPBUQgDAAgCgBQgCgBgCgEIgKgPIgIgMIgCgDIgBgDQABgDACgDQACgCAEAAIAEABIADADIAJAMIAMARIACAEIAAACQAAAEgDACQgCADgDAAIgBgBgAggBTQgEAAgDgDQgCgCAAgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAEgEIAJgLIAKgOIAEgEIAEgBQAEAAACACQADADAAADQAAADgEAHIgMAPIgJALQgDACgCAAIgBAAgABTAGIgEgBIgFgEQgRgNgLgTQgMgTgGgXIgCgHIAAgEQAAgDACgBQACgCADAAIAEABIADADIAAAAIABACIABAGIAGARIAIARQAHgHAEgGQAEgGAAgCIgBgBIgDgBIgOAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgCAAgDQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQACgCADAAIAaABQAGAAADADQADACAAAEIgBAFIgDAGIgMAOIgMAOIAKANIAMALIAFAEIABAEQAAACgDACQgCADgDAAIgBgBgAgeAFQgDAAgCgCQgCgCAAgCIABgEIAIgEIAHgHIAIgHIgHgGIgIgGIgFAFIgEABQgCAAgCgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIADgEQAJgKAGgLQAGgLAEgLQABgEABgCQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQACABABADIgBACIgBADIASABQAGAAACACQADACAAAFIgCAHIgEAMQgEAKgFAJQgGAKgGAIIAAgBIACAAIAyABQADAAABACQACADAAADQAAADgBACQgCABgDAAIgyAAQgCAAgBgDIgCgFIAAgBIAAgCQgIAJgHAEQgIAGgEAAIAAgBgAgSgwIgDAEIAGAEIAEAEIAGAEIADgEIACgFIgHgHIgIgFIgDAFgAgIhBIgBADIAJAFIAFAFIADgIIACgGIgBgCIgDAAIgNgBIgBAEg");
	this.shape_14.setTransform(1262.8,914);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgHBSQgVAAgLgHQgLgGAAgMQABgOAOgLQAOgKAZgGIgLgJIgPgJIgFgEIgBgFQAAgEACgDQACgDAEgDIAUgQIAggYIgBgBIgTABIgUABIgVAAIgQAAQgIAAgDgCQgDgCABgFQAAgEACgDQACgCAFABIACAAIAEAAIAFAAIAHAAIAmAAIAkgBIACAAIABAAQAGAAAEADQAEACAAAEIgBAEIgDAEIgBABIgFAEIgPALIgRAOIgQAMIgKAKIALAJQAHADALAGIAXAOQAJAGADAGQAEAFAAAGQAAALgKAJQgJAJgQAFQgOAFgPAAIgDAAgAgEAiQgNAFgGAFQgHAGgBAGQAAAFAFACQAFACANAAQAMABALgDQALgEAHgEQAGgGABgGQAAgDgEgEIgMgJQgSADgKAEg");
	this.shape_15.setTransform(1242.2,914.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgVBWQgDgDAAgFQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgCAEgDQASgNAKgOQAKgNABgMIABgPIABgdIgVABIgaAAIgVAAIgSgBIAAAKIAAAGIAAAHQgBAJABAHQABAIADAGQACAFAEAEIADAEIABAEQAAAFgDACQgDAEgEAAQgDgBgCgCIgGgGQgFgIgDgIQgCgIgBgJIAAgKIAAgLIAAgQIABgRIACgOIAAgIQABgDACgCQADgBAEAAQAEAAACACQACADAAAEIAAABIAAABIgBAFIAAAGIgBAFIAsAAQAUAAAVgBIAAgOIAAgLIgBgKIAAgBQAAgEADgCQADgCAEAAQAHAAABAHIABALIAAAUIAAAGIAGAAIAHAAIAIAAIAEgBIAEAAIADAAQAEAAADACQACADAAAEQAAAFgCABQgDACgGAAIgHABIgQAAIgHAAIAAAJIAAAGIgBATIgBAOQAAAGgCAFIgEAJIgIAMIgNAOIgMAOIgJAGIgGACQgEAAgCgDg");
	this.shape_16.setTransform(1223,913.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAtBZQgFgBgCgCQgCgCAAgEQAAgEACgCQADgCAEAAIABAAIABAAIAHABIAGAAQAFABACgCQABgCAAgEIAChYIgxgBQgGAAgEgEQgEgEAAgHIABgjQAAgHAEgEQADgEAIAAIAyABQAIAAADAEQAEAFAAAHIgDCPQAAAGgBADQgCAEgCACIgHADIgOAAIgOgBgAAXgoIABADIAEABIArABIAAgOIgwgBgAAZhKIgBADIAAAJIAvABIAAgJIgBgDIgDgBIgngBIgDABgAhVBXQgCgDAAgDIACibQABgIAEgDQADgEAJAAIAwABQAHAAAEAEQADADABAIIgBAiQAAAIgEADQgFAEgHAAIgugBIgCBqQAAAEgDACQgDACgDAAQgEAAgCgCgAhEglIAqAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIABgDIAAgJIgugBgAhDhLIAAADIAAAJIAtABIAAgJIgBgDIgDgCIgmAAIgDABgAAPBUQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgoIgcAAQgBAIgBAHIgGAMQgEAFgEAEIgJAIQgDACgEAAQgDAAgCgCQgDgCAAgEIABgEIAEgDQAJgGAEgIQAGgIAAgKIgYAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBgCAAgDIACgFQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAYAAIABgYIgTAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgCgCAAgDQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIBgACQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgCABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgSAAIgBAaIAXAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQACACAAADQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgXAAIAAAoQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABQgCACgDAAQgEAAgCgCgAgOAZIAcAAIAAgZIgbAAg");
	this.shape_17.setTransform(1202.6,913.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgZBUQgLgBgGgCQgJgCgFgFQgEgGAAgHQAAgGAEgHQAEgGAKgJQAKgJAQgMIgDgDIgDgCIgDgDIgEgEIgDAAIgDAAIgEAAQgDAAgDAAQgCgDAAgDIABgFIADgFIAHgNIAIgNIgYAAIgPgBIgJAAQgDgBgCgCQgBgCAAgEQAAgDACgDQADgCADAAIABAAIACAAIAKABIAPAAIAKAAIAQABIAEgKIACgGIABgDQABgEACgCQACgCAEAAQAEAAABACQACADgBAEIAAAFIgCAEIgBAJIAbAAIAbgBIAWgBIABAAQADAAACADQACACAAAEQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgOAAIgYABIgaAAIgWAAIgIAOIgIAOIAHAFIAMAJIAFABIAJgFIALgJIAIgFIAEgCIACgEQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEgBQAFAAACACQACACAAAEQAAAEgDAEQgCAEgGADIgIAFIgKAEIgKAHIAMALIAFAGIACAFQgBAEgCACQgDADgEAAIgEgBIgEgDIgGgHIgIgJIgRAOQgIAHgHAHIgDAEIgBAEQAAAEAEACQAEADALABIAcABIAXAAIAQgBIAFgCIAEgCIADgBIADgBQAEAAACADQACACABAEQgBAEgCADQgDADgEACIgMABIgUABIgcABIgZgCg");
	this.shape_18.setTransform(1182.5,912.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AhABSQgIAAgEgDQgFgFAAgJIADiEQgBgJAFgDQAEgFAJAAICHADQADAAACACQACACAAAEQAAADgCACQgCACgDAAIg/gBIAAAhIAuABQAIAAAEAEQAEAEAAAIIAAAiQAAAIgFAEQgFAEgHAAIgvgBIAAAkIBCABQAEAAABADQACABAAAFQAAACgCADQgCACgDAAgAg/A9QAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIAEACIAyAAIABgkIg5gBgAg+APIBwACIAEgBIABgDIAAgbIgBgDIgDgBIhwgCgAg7hDQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABIgBAbIA4ABIABgiIgyAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_19.setTransform(1162.9,912.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("ABSBZQgDAAgGgDQgFgDgHgFIgQgNQgOgOgMgSQgLgSgGgUQgDARgIAPQgIAQgNAMQgJAKgMAJQgMAHgNAGIgDABIgCABQgEgBgDgDQgDgDAAgEIABgEIADgDIABgBIAFgCQAWgKAOgNQAPgOAIgRQAKgQAEgXIhHgBQgEAAgCgDQgCgCAAgEQAAgEACgCQACgCAEAAIBJABIAAgmQAAgEADgCQADgCABAAQAEABADACQADACgBADIAAAnIBKABQAEAAACADQABACAAAEQAAAEgBACQgCACgEAAIhIgBQAIAeASAYQATAYAcAQQAEACABACQACACAAAEQAAAEgCADQgDACgDAAIgCAAg");
	this.shape_20.setTransform(1142.5,911.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAIBmQgFgGgEgJQgIgLgFgPQgGgPgDgPQgEgRABgOQAAgQAEgRQAFgRAHgQQAHgPAHgLIAJgKQAFgDADAAQADAAACACQACACAAADIgBADIgBACIgJAJIgHAJQgDAEgDAHQgFAOgFASQgEARAAAPQgBAMADAOQACAOAFANQADANAGALQAGAKAIAHIACACIAAAEQAAADgCABQgCACgDAAQgDAAgGgEg");
	this.shape_21.setTransform(1128.4,913.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("ABfCOQgEgFAAgIIAAgCIgqgBIgeAAIg4gBIg8ABIAAADQAAAGgFAEQgGADgHABQgHAAgEgEQgEgFAAgHIABgRIABgWIABgSIABgUIAAgQIAAgdIgBggIAAghIAAgaIAAgMIgBgMIAAgIQAAgOAFgHQAFgHAJAAQAGAAAFAEQAEAEAAAGIABAUIABAlIAAAvIgBAyIgBAjIgBAnIApgBIAoABIArAAIAKAAIAKAAIAPABIAbAAIABgTIAAgJIABhFIACg3IACguIgkAAIgUABIgRAAIgsAAIgNAAQgLAAgEgEQgFgEABgIQAAgJAEgEQADgDAJgBIApABIAvAAIAugBQACgEAEgBQAEgCAEAAQAJAAAEAHQAGAGAAAKIgBAJIAAAJIgCAhIgBAoIAAAQIAAAUIgBA5IAAAlIgBAVIAAAKQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgCADgEABQgEADgGAAQgIAAgEgFg");
	this.shape_22.setTransform(1320.2,862.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AiWCgQgEgFAAgIQAAgEACgDQACgEAEgCIACgCIAJgDQBEgcAsg3QAqg0AShPIgaACQgOABgRAAIgeAAQgMAagTAXQgUAYgZARQgGAGgFACQgEACgEgBQgHAAgEgEQgEgFAAgHIABgEQABgEADgCIADgCIAIgGQAWgQAQgRQAPgRAIgQQAIgQgBgMQAAgIAFgFQAFgFAHABQAIAAADADQADAFAAAJIAygBIAsgDIADgCIAFgBIgFgJQgBgEAAgCQAAgFAEgEQADgDAGAAQAEgBACADQADACADAFIAWAnIAPAYIACADIABAEQgBAEgEAEQgDADgFAAQgEAAgCgBIgFgFIgKgOIgKgRQgNA3gVArQgWAugcAgQgXAYgeAVQgeAVgiANIgFACIgEABQgHgBgFgFgACOhMIgJgLIgOgWIgRgeQgGgLABgDQAAgFAEgEQADgCAGAAQAEAAACACQADABADAHIAKASIANAVIANATQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIABADQAAAGgEAEQgDADgGABIgBAAQgDAAgCgCg");
	this.shape_23.setTransform(1286.1,860.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAUCIQgCAAgEgEIgKgMQgJgNgQgRIghgiIgcgcQgEgCgBgEIgBgIQAAgHAFgFQAGgCAIAAQACgBAFABIANALIAdAdIAIAHQAegRAZgXQAagVASgbQARgbAIgdIgvAAIgcAAIgUAAIgVgBIhRgBIgWAAIgNAAIgSgBQgFgBgCgCQgCgCgBgEQgCgDABgDQAAgHADgEQAEgFAFAAIACgBIAFABIAMAAIAXAAIBGABIAyABIAmAAIAdAAIAaAAQAEgEAEgBQADgCADAAQAJABAFAFQAEAFAAAJIgDAQIgHAXQgJAagPAYQgPAYgUASQgPAPgRAOQgSANgWAOIAXAZQAJAJACAFQACAEAAAEQgBAIgFAGQgFAFgIAAIgCAAIgEgBg");
	this.shape_24.setTransform(1248.5,861.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAqCeQgDgCgCgEIgBgDIgCgGIgFgPIgHgXIgLghIgHgUIhHAXIg2AQIgDABIgCAAQgGAAgEgGQgFgFAAgHQAAgEACgDIADgFIAEgBIAIgDIALgDIAVgGIAVgGIAwgOIAUgGIgFgNIgEgKIgGgSIgDgKIgEgMIg2AOIgpAKIgTADQgGAAgDgEQgEgFAAgHQAAgFACgEQACgEAEgCIADgBIAHgCIAQgCIAagGIAdgHIAcgHIgCgGIgDgIIgCgHIgIgYIgEgLIgEgMIgCgFIAAgCQAAgHAFgEQAFgFAIABQAGAAADACQADADADAHIALAeIAHAVIAHASIAbgIIAigKIAhgJIAVgHIADgBIADAAQAHAAAFAFQAEAFAAAHQAAAFgDAEQgCAEgFABIgSAFIgeAJIgkAKIgkAJIAMAjIAKAbIAagHIAsgKIAbgIIALgDIADAAQAHAAAEAEQAEAFAAAGQAAAEgCAEQgCADgDACIgDABIgGACIgZAGIgjAKIgoALIAJAdIAGARIAEAMIAEANIAEANIACAJIACAFIAAAEQAAAHgFAEQgFAEgIAAQgEAAgEgCg");
	this.shape_25.setTransform(1212.1,860.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AhxCfQgFgEAAgKQAAgIAFgFQAGgEAJAAIAAAAQAKAAAPgGQAQgHATgMQATgMASgOQARgPAPgRIATgWQAKgOAJgNIAOgaQACgFAEgDQAEgDAFAAQAHABAEAEQAFAFAAAHQAAAGgIAPQgHAMgNARIgZAiQgOAQgLAMQgPAOgSAMQgPAOgTALQgTAKgRAIIgOAFIgNABQgNAAgGgEgAgjAEIgcgBIgggDIgdgBIgWgEQgHgCgDgEQgDgFAAgGQABgHAFgFQAEgEAHAAIACAAIAHABIAdAEIAkAFIAiABQAJABAFAEQAFAEAAAJQAAADgCAEQgCACgEACIgFACIgDAAIgEAAgABdg6QgDgCgGgHIgUgZIgQgUIgHgLQgCgDABgCQAAgFADgEQAEgEAFAAQAEAAACACIAGAHIALAPIARAVIAQASIADAFIABAEQgBAFgEADQgDAFgGAAIgFgCgACOhQIgFgEIgTgXIgRgUIgKgOIgEgFIgBgFQABgEADgEQAEgDAFgBQAEABACABIAGAHIAVAbIAXAbQAFAEgBAFQAAAFgEAEQgEADgFAAIgEgBgAgrhSIgfgFIgggGIgagHIgFgBIgDgCQgEgCgCgEQgDgEAAgFQABgGAFgFQAEgFAHAAIAEAAIAHACQALAFASADQASAFAUADIAkAEQAIAAAFAEQAFAFgBAIQAAAGgFAEQgFAEgHABQgKAAgPgCg");
	this.shape_26.setTransform(1177.8,858.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AiMCWQgFgFAAgIIABgGQABgEADgCIABAAIAGgDQAOgIAQgNQARgMAOgPQAPgNAJgLQAPgUAKgaQAKgXAEggIgjAAIgXAAIgSAAIgXgBIgKgBIgFgCIgDgGIgBgHQAAgHADgEQAEgEAFAAIABAAIAGgBIAOABIAzAAIARAAIAUABIACgUIAAgQIAAgKIABgLQAAgHADgFQAEgEAHAAQAFAAAEADIAGAFIABAEIAAAHIgBASIgCAkIAcAAIAfAAIAdAAQABgFAEgDQAFgDAGAAQAEABAEACQADACADADIADAGIABAIIAAARIgBAiIgDAmIgDAoIgDAfQgDAcgHAPQgFANgOAGQgNAEgYAAQgRgBgPgCQgOgCgJgFQgKgFAAgLQAAgIAFgEQAEgFAGABIAEAAIAGACQAJADAKACQALACAMABQAPAAAGgFQAGgFACgOQADgNACgYIAFg2QACgcAAgfIgLAAIgGAAIgNAAIgfAAIgOAAIgRAAQgEAigJAYQgIAbgOAXQgPAXgXAWQgPAQgQALQgPANgMAHQgMAHgHAAQgHAAgEgGg");
	this.shape_27.setTransform(1139.7,858.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AhCCmQgFgBgEgEQgDgEgBgHQgBgJAEgGQAFgGAIgBIACAAIACAAIABAAQAHgBAMgIQANgJARgNIAegdIAfggQAbgfAVglQAVgnAMgsQACgHAEgFQAEgEAHAAQAIAAAHAFQAGAGABAJQAAAEgEANIgLAeIgPAiQgHARgIANQgSAegeAiQgdAigjAfQgVAUgPAIQgPAJgMABIgIABIgKgCgAgchnIgpgFIgtgJIglgJQgLgEgFgDQgEgFAAgHQgBgIAFgGQAFgHAIAAIAEAAIAHABIAOAFIAjAIIAuAIQAYADAWACQAGAAAFAEQAFAEABAIQAAAJgFAGQgEAGgGAAIgHAAIgVgBg");
	this.shape_28.setTransform(1713,627.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AikC6QgHgGgBgJQgBgFACgDQACgFADgEQANgNANgUQAMgUAKgYQALgYAGgZQAFgTACgXQADgaAAgcQAAgdgDgcIgBgJIgBgHIgDgFIgCgDIgBgEQAAgIAFgGQAFgGAIgBQAFgBAEADQAFACAFADQADAFADAIQACAIABALQADAfAAAgQAAAhgCAdQgDAagFAUQgGAYgKAbQgLAagNAYQgNAYgMAPIgLALQgFADgEAAIgDAAQgIAAgFgEgACNCcQgHgFgOgNQgRgRgQgUQgQgVgNgWQgNgVgIgUQgIgTgIgdQgIgdgFgdQgGgegCgaQAAgTADgMQAGgMALgBQAIAAAGAEQAGAGABAIIgBAFIgBAHIgCAFIAAAHIABALQACAaAHAdQAFAdAJAbQAJAZAKATQAJASAOAUQAOATAQAQQAPARAPAKQAFAEADAEQACAEAAAFQABAKgFAHQgGAHgJAAIgBAAQgFAAgHgEgABdhaQgNgGgIgLQgIgLgBgPQgCgOAHgMQAGgNALgIQALgIAOgBQAOgCANAHQAMAGAIALQAJALABAOQACAOgHANQgGAMgLAJQgLAIgPABIgEAAQgMAAgKgFgABwilQgLACgHAIQgHAJABALQABAMAIAHQAJAHALgBQAMgCAHgIQAHgIAAgMQgCgLgJgHQgIgHgKAAIgCAAg");
	this.shape_29.setTransform(1672.7,630.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AifCzQgGgGgBgJIABgHQABgDACgDIADgDIAKgGQAegWAagZQAbgZAXgZQAVgbAPgYQAMgWALgXQAMgYAIgXQAIgVADgSIgoAFIgtAGIgwAFIgpAEQgKABgFgEQgGgEAAgJQgBgHADgFQADgGAFgCIADAAIAHgBIASgCIA/gGIA4gGIAsgGIAKgHQAEgCAFAAQAJAAAGAFQAGAFABAKQAAAFgBAHQgBAIgFAMIgLAhQgOAlgQAgQgQAfgSAcIA4AdIAtAaIAqAbQALAIABAKQABAJgGAHQgFAHgJAAIgHAAIgHgEQgLgKgWgOIgzgfQgcgQgfgRIgoAsIgoAnQgTASgPAKQgPALgHABIgBAAQgHAAgGgFg");
	this.shape_30.setTransform(1632,634.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AhCCmQgFgBgEgEQgDgEgBgHQgBgJAEgGQAFgGAIgBIACAAIACAAIABAAQAHgBAMgIQANgJARgNIAegdIAfggQAbgfAVglQAVgnAMgsQACgHAEgFQAEgEAHAAQAIAAAHAFQAGAGABAJQAAAEgEANIgLAeIgPAiQgHARgIANQgSAegeAiQgdAigjAfQgVAUgPAIQgPAJgMABIgIABIgKgCgAgchnIgpgFIgtgJIglgJQgLgEgFgDQgEgFAAgHQgBgIAFgGQAFgHAIAAIAEAAIAHABIAOAFIAjAIIAuAIQAYADAWACQAGAAAFAEQAFAEABAIQAAAJgFAGQgEAGgGAAIgHAAIgVgBg");
	this.shape_31.setTransform(1587.5,639.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgxC2QgGgFgBgJQAAgFABgDIAEgGIACgBIAFgDIAOgFQAUgIASgNQAVgNASgOQATgOALgNQARgSALgaQALgaAEgbIgNABIikATIhIAHQgMAAgHgDQgHgEgBgJQAAgGACgEQADgGAEgDIAEgBIALgBIAXgDIBdgHIBGgIIBBgHQAEgFAFgDQAFgDAGAAQAJgBAGAGQAHAFABAKQABAMgEAUQgEAUgHAUQgHAVgJARQgKATgNAQQgOAQgSAPQgTAPgaAQIgcAQQgMAHgLAFQgMAFgFAAIgBAAQgHAAgFgFgAiUh5QgGAAgDgEQgEgEAAgGQgBgJAFgGQAFgFAJgBIBqgIICsgWQAIgBAGAFQAGAEABAHQAAAFgBAGQgCAFgDACIgEACIgHABIgQACIgSADIgjAEIhCAIIg7AGIglAEIgiACIgQAAIgGAAg");
	this.shape_32.setTransform(1546.3,641.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AguCxQgGgGgBgJQgBgFACgEQABgEADgDIACgCIAJgFQAYgQAVgUQAXgUASgUQASgVAJgTQAMgXAJgZQAJgaAEgcQAFgcgBgaIgUACIhcALIg4AHIgfAEIgQABIgLABIgZACQgHgBgDgCIgFgHQgCgDAAgEQgBgKAGgFQAFgGAJgBIAFAAIAHgBIAMAAIAQgCIA3gFIA4gGIA3gHIArgFIAJgIQAFgCAFAAQAJgBAGAFQAGAGABALIAAAXIgDAhIgEAhQgHAqgNAfQgMAhgUAdQgTAcgeAdQgPAPgRANIgbAWQgNAIgGACQgJAAgGgFg");
	this.shape_33.setTransform(1503.7,645.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgOBoQgCgCAAgCIAAgDIABgCQAHgIAFgHQADgGADgKIAHgVIADgXIABgUQgCgTgGgSQgFgSgHgOQgJgPgMgJIgCgCIAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQACgCADgBQAEAAAGAEIAMANQAHAKAHAPQAHAOAEAQQAEAQACAPQAAAPgCARQgDASgGAQQgGAQgIAMQgFAHgCADQgEAEgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_34.setTransform(1392,374.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("Ag0BWQgDgDAAgDIgKiZQAAgDACgDIAGgDIAHACQADADAAADIAEBEQAPgLANgOIAYgaQAMgNAIgMIADgDIAEgBQAEgBADADQADADAAAEIAAADIgDADIgGAJIgYAaIgcAcIBOBHIACACIABAEQAAAEgCAEQgDADgEAAIgEAAIgDgDIhOhLIgCACIgHAFIgEADIAEBDQAAADgCADQgDACgEAAIgBAAQgDAAgCgBg");
	this.shape_35.setTransform(1381.5,372.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgwBDQgTgVgDgoQgBgYAHgUQAIgUAQgNQAQgMAVgBQATgBARAJQAQAKAKASQALATABAaQACAXgIAVQgIATgPAMQgQALgWACIgEAAQgeAAgSgSgAgChCQgPABgLAKQgMAKgFAQQgGAQABASQACAhAOAPQAOAPAXgBQAQgCALgJQALgJAGgQQAGgPgCgSQgBgUgHgPQgIgOgMgIQgLgHgMAAIgCAAg");
	this.shape_36.setTransform(1365.3,373.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAfBOIgRgDIgOgGQgSgHgKgKQgLgLAAgNQgBgKAIgOQAHgMAPgQQANgQAVgQIgfADIglADIgkACQgDAAgDgCQgCgCAAgEIACgFIACgDIACgBIAFgBIAUgBIAfgCIAegDIAdgCIAYgDIAPgBIABAAQADAAACACQACACABADQAAAEgCADQgCACgCABIgFAAIgIABIgGABQgQALgPAMQgOAMgKAMQgJAMgHAJQgFAKgBAHQABAMAPAIQAMAIAfAGIACABIACAAIACAAIADgBIABAAIABgBQAEAAADADQACACAAAEQABAFgEADQgDADgIAAIgCAAIgLgBgAA4AZIgGgEIgKgMIgNgOQgFgGAAgBQAAgDACgCQACgCADAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABIAEAEIAFAHIAJAIIAIAJIAGAFIABACIAAADQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgCADgDAAIgDgBgABPAHIgFgFIgKgJIgPgRQgEgFABgCQgBgDACgCQACgCAEgBIADABIADAEIAIAJIAKAMIAIAKIAEACIAAABQAAADgCACQgCACgCABIgEgBg");
	this.shape_37.setTransform(1347,375.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AghBWIgNgBQgIgDgEgFQgFgFAAgHQgBgGADgGQACgHAGgGIANgMIAQgQIAQgOIgVgNIgUgOQgKgHgHgGIgLgIIgFgHIgCgFQAAgFADgDQACgDAEAAIAFABIAEADQAEAHAIAHIAXASIAiAXIAWgTIAJgKIgKgMQgEgFAAgCQAAgCACgDQACgCADAAIADAAIADAEIAGAHIAJAJIAIAJIAFAHIACACIAAACQABADgCACQgDADgCAAIgCAAIgDgCIgEgEIgCgCIgEAFIgIAGIgbAWIgZAZIgVAWQgDADAAADIgCAEQABADACACQACACAGABIASAAIAbgCIAVgBIAOgCIAHgBIAEgDIADgBIADgBQAEAAADACQADADAAAEQAAADgCACIgEAFQgDACgGABIgQADIgYACIgfACIgVgBgABLgmIgFgFIgKgLIgOgRQgEgFAAgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQACgCADgBIADABQAAAAAAABQABAAAAAAQABABAAAAQAAABABABIAIAJIAKAMIAJAKIACACIABADQAAADgCACQgCACgDAAIgBAAIgCAAg");
	this.shape_38.setTransform(1327.4,375.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgSBQQgIgIgCgPQAAgLAFgKQAGgLAJgHQAIgHALgBIAHAAIAIACIgDgMIgEgRIgBgBIAAgBQgBgEADgCQADgDADAAQADAAACABIAEADIAAACIACAGIADAPIACAJIADAPIAHAGIAFAEIAFADIACACIABABIAAABIAGACIAHAEIAFAEIAAAEQABAFgCACQgCADgEABIgGgCIgJgGIgEgCIgEgEIgIgHQgFATgLAMQgLAMgQACQgLAAgJgJgAALAaQgGABgFAEQgFAEgCAGQgDAHAAAHQABAIADAEQAEADAEAAQAMgBAGgKQAHgLABgQQgFgEgEgBIgGgBIgCAAgAhKAgQgCgCgBgFIAAgCIABgDIADgEQAKgLAHgMQAJgOAFgOIgIABIgLABIgJABIgGAAQgEAAgEgBQgCgDAAgEQAAgDABgDQACgCADgBIACAAIADAAIAJgBIAUgBIAIgBIgBgOQAAgGgCgEIgBgBIAAgBQgBgEADgDQADgCAEAAQAGgBACAGQADAGABAPIAAADIAAAEIAHAAIAIgBIAPgCIALgCIAKgBIgCgJQgCgEAAgEQAAgEACgCQABgDAEAAIAGABIADAEIAAABIABAFQADANAKAKQAKALARAHIADADIABAEQAAAEgCACQgCADgDABQgEAAgMgIQgIgEgGgFIgKgLIgGABIgEABIgGABIgGAAIgRACIgLABIgNACQgHAQgIAQQgIAPgLAQIgCADIAAABIgEADIgEABIgBAAQgDAAgDgCg");
	this.shape_39.setTransform(1307.4,377.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AhHBVQgFgFgBgIIgIiEQgBgJAEgEQAEgFAJAAICHgJQADAAACABQACADAAADQAAAEgCACQgBACgDAAIg/AEIACAhIAugDQAJgBAEAEQAEAEABAIIACAiQABAIgEAEQgEAFgIAAIguADIACAkIBCgEQADgBADADQABACAAADQABAEgCACQgCACgDABIiLAJIgCAAQgHAAgDgDgAg9AkIACAeQAAABAAAAQAAABABABQAAAAAAABQAAAAABAAIAEABIAygDIgCgjgAhAgPIACAjIBxgHIADgBIAAgEIgCgbIgBgCIgDgBgAg9g/QgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIACAbIA4gEIgCggg");
	this.shape_40.setTransform(1288,379);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AhVBZQgDgCgBgFIABgEIADgDIABgBIAFgCQAUgMANgPQAOgOAIgTQAHgQADgXIhIAFQgDAAgCgCQgCgCAAgEQgBgEACgDQACgCADAAIBJgFIgDgmQAAgEADgCQACgCAEgBQAEAAADACQABACAAAEIACAmIBKgFQADAAADACQACACABAEIgCAHQgCACgDAAIhIAFQAKAdAUAXQAVAXAeANQADABADACQABACAAAEQABAEgDADQgDADgEAAQgDABgGgDIgOgIQgHgEgIgHQgRgNgMgRQgMgRgHgTQgDARgHAQQgHAQgLANQgJALgLAKQgLAIgMAHIgEABIgCABQgEAAgDgDg");
	this.shape_41.setTransform(1267.8,380.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AhLBZIgDgGIACgFQACgDADAAICDgIQAAgBABAAQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIgCgYIiDAIQgDAAgCgCQgCgCgBgDQAAgDACgCQACgDADAAICDgJIgCgVIgBgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABIiBAGIgFgCQgDgBAAgDQAAgDABgDQACgDAEABIBCgFIgEhCQAAgDACgCQACgCAEgBQAEAAABACQADACAAAEIAEBBIA2gDQAIgBAEADQAFAFABAJIAEBEQABAJgEAEQgEAFgJAAIiJAJQgDAAgCgCgAgzgYIgDgCIgBgCIgCgCQgJgOgMgRIgCgDIAAgDQgBgDADgDQACgDAEAAIAFABIAFAEIATAaQAGAJgBACQABAFgDACQgDADgEAAIgEAAgAAkgfQgDgEgBgDIABgEIADgEIAJgPIAKgTIADgEQAAgBABAAQAAgBABAAQAAAAABAAQABgBAAAAQAEAAAEADQADACAAAEQAAAEgDAHQgEAIgHAMIgGALIgGAGIgFABIgBAAQgDAAgCgCg");
	this.shape_42.setTransform(1247.5,381.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AhUBbQgDgCAAgEQAAgEABgCQACgDAEAAIABAAIACABIAGAAIAFAAQAEAAABgCQACgCgBgDIgDgtQgIADgGACIgHACQgEABgCgEQgDgCAAgEQAAgGAEgBIACgBIADgBIAJgEIALgDIgDgtIgXABQgDAAgCgBQgCgDAAgEQAAgEABgCQACgBADgBIAXgBIgCgfQAAgDACgCQACgCAEgBQAEAAACACQACACABADIACAfIAUgBQADgBACACIADAGIgCAGQgCACgDAAIgUACIACAnIAJgCIAFgBIAEgDIACgBIACgBQADABACACQADACAAADQAAABgBADQgCACgGACIgTAJIADA8QABAIgEAEQgEADgKACIgQAAQgGgBgCgCgAgXBSQgCgCAAgEQAAgDACgDQABgBADgBIBugHQADgBACACQACACAAAEQABAEgCACIgFAEIhuAHIgFgDgAgFAoQgFgDAAgIIgHhiQAAgHAEgEQADgEAIgBIA7gEQAIAAAFADQAEADAAAJIAHBhQAAAIgDADQgEAFgIABIg+ADIgCABQgEAAgDgEgAACgOIADAmIABACIADABIAygDIADgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBIgDgmgAAChGIgCABIAAADIABAlIA7gEIgCglIgCgCIgDgBg");
	this.shape_43.setTransform(1227.7,383.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AhVBaQgCgCAAgEQAAgEACgCQABgCADgBIBLgFIgDguIg4AEQgDAAgCgCQgCgCgBgEQAAgEACgCQACgCADgBIA4gDIgCgnIgvADIgGAQIgGAMIgFAGQgCACgDAAQgEABgDgDQgDgDAAgDIAAgCIACgEQAIgPAFgQQAFgQADgSIACgHQACgCAEAAQAEgBADADQACACABAEIgCAKIgCAQIApgCIgDgiQAAgEACgCQADgDAEAAQAEAAADACQABACAAAEIACAhIBCgEIAFACQACADAAADQAAAEgCACQgBADgDAAIhCAEIADAnIA4gDQADAAACACQADACAAAEQAAADgCADQgCACgDAAIg4AEIADAuIBKgFQADAAACACQACACAAAEQABAEgCACIgFADIimALQgDAAgCgCg");
	this.shape_44.setTransform(1208.1,384);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AhCBbQgCgCgBgDIgCgrIgNABQgDAAgDgDQgCgBAAgEQgBgDACgDQACgCAEAAIANgBIgEg4QgBgIAEgEQADgDAJgBIAxgEIgBgVIhKAFQgDAAgCgCQgCgCAAgDQAAgEACgCQABgCADgBICkgLQADAAACADQACABAAADQABAEgDADQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIhLAFIABAVIAygDQAJAAAEADQAEAEAAAHIAFA4IANAAQADgBACACQACACAAAEQAAADgBACQgCADgDAAIgNABIACAcQgBAHgBAFQgCAFgFADIgIACIgMABIgSAAIgKgCQgDgCAAgFQAAgEACgCQADgDAEAAIACAAIADgBIAGABIAHAAIAHAAQAEAAACgCQABgCAAgEIgBgXIhwAGIADArQAAAEgCADQgDACgDAAQgFAAgCgCgAg4ADIABAXIAwgEIgCgWgAAGAAIACAVIAxgCIgCgVgAg2gfIgDABIgBAEIABARIAvgEIgBgUgAAEgiIABAUIAxgCIgBgRQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgCgCg");
	this.shape_45.setTransform(1187.9,385.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AhSBeQgDgDAAgEIAAgCIABgCIADgFIAIgPIAIgUIAIgUQABgDACgCQACgCADAAQAEAAADACQADACAAAEIAAAEIgDAIIgFANIgKAXIgKATIgDAEIgFABQgEAAgDgCgAglBeQgDgDgBgDIABgEIAFgFQAKgKAEgMQAEgMgBgPIgBgXIgJADIgGABQgEAAgCgCQgCgCgBgEIABgDIADgCIACgBIAFgCIAYgIQAJgEAIgFQgJgGgHgJQgJgIgIgLIgNABQgDAAgCgCQgCgCAAgDQAAgDABgCQACgCADgBIAxgDIgBgOQAAgDACgDQADgCADAAQAEAAADACQACACAAADIABAOIA0gDQABgBABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAAEQAAADgCACQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAIgNABQgHAMgHAJQgHAJgIAIIAVAFIAZADQAEAAACACQACACABAEQAAAEgCACQgCACgEAAIgFAAIgKAAIAFBRQABADgCACIgGADQgEAAgCgCQgDgCAAgDIgCgaIg+AEQgDAKgEAHQgEAIgHAGIgFADIgEACQgEAAgCgCgAgBAaIAAADIAAAJIAAAIIA6gEIgBgUgAALgFIgOAGIABAKIA5gEIgBgKIgPgEIgOgGIgOAIgAgGg5QAGAIAGAGIARAMIAOgOQAHgIAFgIgAhBAAIgFgCIgFgFIgGgGIgIgHIgDgDIgBgDQAAgEACgCQADgDAEAAIACAAIAEACIAIAGQAKAIAEAEQAEAFAAADQAAAEgDACQgCABgEAAIgEAAgAg/gvIgEgEIgKgJIgKgIIgCgDIgBgDQAAgEACgCQACgDAEgBQADAAAFADIAOAMIAHAGIADADIABAEQAAAEgDACQgDADgEABIgBAAIgDgBg");
	this.shape_46.setTransform(1167.8,386.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgzBcQgCgCAAgDIgFhPIgHACIgJABIgIACIgGAAQgDAAgCgCQgCgCgBgEQAAgDACgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIABgBIAGAAIACAAIACgBIACAAIAGgIIAHgIIgPgPIgMgMIgDgDIgBgDIACgGQACgDADAAIAFABIAEADIAAABIABABIAKgSIAIgPQABgDADgCQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQAEgBACADQACACAAADQABAEgHALIgSAbIAGAHIAFAEIACACIAIgNIAGgKIAGgLIACgDIAEgCQADAAADACQADADABADIgBADIgEAHQgGAMgJALQgIAMgMANIAOgCIARgCIgBgCIgDgGIgCgDIgBgCIAAgBQABgDABgCIAGgDQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQACABACADIAFAJIAGAKIADAHIABAFQABADgDACQgCADgDAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgCgBAAgEIgCgCIAAgBIgBgCIgBgBIgFABIgHABIgHACIAGBQQAAADgCADQgCACgEAAIgBAAQgDAAgCgCgAgHBTQgCgCAAgDQgBgEACgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAmgDIgCghIggACQgBAAgCgCQgCgBAAgEQAAgDACgDQABgCABAAIAggCIgBgTQgBgCACgDQACgCAEAAQAEAAACACQADABAAADIABASIAfgCQADAAADADQACABAAAEQAAADgBADQgDACgDAAIgfACIACAhIAmgDQADAAADACIACAGIgCAGQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAgBAAIhcAGQgDAAgCgCgAhXBRQgCgDgBgDIABgCIAAgDIADgOIACgOIABgOQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQAFgBACACQACACABAEIAAAJIgCAMIgCANIgCALIAAACIAAABIgDAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEAAgDgBgAgTA/QgCgCgBgEIgGgQIgFgQIAAgCIgBgBQAAgDACgCQACgCADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAIADADIADAIIAFAMIADALIABAGQAAAEgCACQgCACgDAAIgCABIgDgCgAgEABQgDgBAAgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgCAFgCIAHgGIAKgHIAJgHQgJgIgIgKQgJgKgEgMIgIABQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgCgCAAgDQAAgEABgCQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIBMgFQAGgBAEACQADADABAEQAAAFgEAIQgDAIgGAJIgNATQAGAFAKAEIATAGIAEAEQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAEgCADQgCADgDAAQgEAAgIgDIgRgIIgRgKIgOAMIgQAJQgHADgCABQgCAAgCgDgAAJhIQAGAJAHAHQAHAIAIAGIAJgMIAHgLQAEgFgBgDIgBgBIgDgBg");
	this.shape_47.setTransform(1148.2,388.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AAOBlQgGgEgGgIQgHgLgHgOQgHgPgEgQQgFgPgBgQQgBgOADgSQADgSAGgQQAFgPAJgMIAHgLQAEgDADAAQADAAACACQACABAAADIgBADIgBACIgIAKQgDAEgDAFIgDAMQgGAPgDARQgDASABAOQABAOAEANQADAOAFAMQAFANAHAKQAHAKAIAGIACADIABADIgBAEQgCACgDABQgEAAgGgFg");
	this.shape_48.setTransform(1134.1,391);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AiCCZQgIgIgBgPIgQjvQgBgQAHgIQAHgIAQgBID0gQQAGAAAEAEQADADABAGQAAAHgDAEQgDADgGABIhwAHIADA7IBTgFQAPgBAIAHQAHAGABAPIAFA+QAAAPgGAHQgHAIgPABIhTAFIAFBBIB3gIQAGAAADAEQAEADAAAHQABAGgEAFQgDADgFABIj7ARIgEAAQgNAAgHgGgAhvBBIADA2QABAFADADQADACAGAAIBZgGIgFhAgABXgpIjMAOIAEBAIDMgNQAEgBACgCIABgFIgEgyQAAgEgCgCIgEgBIgBAAgAhvhzQgGABgDACQgCAEAAAFIADAwIBkgHIgDg6g");
	this.shape_49.setTransform(1178.1,333.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AiaChQgFgFgBgIQgBgEACgDQACgDADgDIADgBIAHgFQAlgVAYgaQAZgbANghQAOgeAEgqIiAAJQgGAAgEgEQgEgEAAgHQgBgHAEgEQADgEAGgBICCgJIgEhEQAAgHAEgEQAEgEAHgBQAIAAAFADQADAEAAAHIAEBEICGgJQAGAAAEAEQAEAEAAAHQABAHgEAEQgDAFgGAAIiBAJQATA3AkAoQAlAoA2AYQAHADADAEQADAEAAAFQAAAIgEAFQgFAGgHABQgGAAgLgFQgLgEgNgJIgcgUQgegYgWgeQgWgfgNgkQgHAhgMAcQgNAdgUAYQgQAUgUAQQgUARgWAMIgFABIgFABIgBABQgGAAgFgFg");
	this.shape_50.setTransform(1141.9,335.9);

	this.instance = new lib.Hands("synched",0);
	this.instance.setTransform(848.8,871.4,1,1,0,0,0,169.9,78.9);

	this.instance_1 = new lib.RingPopupAndFill("synched",0,false);
	this.instance_1.setTransform(496.6,745.1,1,1,0,0,0,960,540);

	this.instance_2 = new lib.RingPopupAndAway("synched",0,false);
	this.instance_2.setTransform(496.6,745.1,1,1,0,0,0,960,540);

	this.instance_3 = new lib.Butt_rattle();
	this.instance_3.setTransform(292.9,140.8,1,1,0,0,0,887.5,972);
	this.instance_3._off = true;

	this.instance_4 = new lib.Nobuteru_Back_upper();
	this.instance_4.setTransform(567.5,647.6,1.091,1.091,-5.2,0,0,224.2,506.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},156).to({state:[]},20).to({state:[{t:this.instance}]},15).to({state:[]},13).to({state:[{t:this.instance_1}]},140).to({state:[{t:this.instance_2}]},40).to({state:[]},4).to({state:[{t:this.instance_3}]},67).to({state:[{t:this.instance_3}]},17).to({state:[{t:this.instance_3}]},11).to({state:[]},1).to({state:[{t:this.instance_4}]},80).to({state:[]},59).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(455).to({_off:false},0).wait(17).to({x:-615.9,y:115.2},11).to({_off:true},1).wait(171));

	// ex2
	this.instance_5 = new lib.WordFrame_in("synched",0,false);
	this.instance_5.setTransform(1237.9,903.4,1,1,0.6,0,0,196,96.5);

	this.instance_6 = new lib.WordFrame_in("synched",0,false);
	this.instance_6.setTransform(1618.5,635,1,1,-3.7,0,0,196,96.5);

	this.instance_7 = new lib.WordFrame_in("synched",0,false);
	this.instance_7.setTransform(1248,350.4,1,1,-3.2,0,0,196,96.5);

	this.instance_8 = new lib.Nobuteru_Back_upper();
	this.instance_8.setTransform(483.5,647.6,1.091,1.091,-5.2,0,0,224.2,506.1);

	this.instance_9 = new lib.CroutonShowers("synched",0,false);
	this.instance_9.setTransform(588.6,216.5,1,1,0,0,0,45.1,45.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},156).to({state:[]},20).to({state:[{t:this.instance_8}]},46).to({state:[]},107).to({state:[{t:this.instance_9}]},126).to({state:[{t:this.instance_9}]},30).to({state:[{t:this.instance_9}]},13).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_9}]},9).to({state:[]},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(455).to({_off:false},0).wait(30).to({startPosition:30},0).to({x:467.8,y:-52.3},13).wait(10).to({startPosition:29},0).to({x:-594.6},9).to({_off:true},1).wait(137));

	// Cup
	this.instance_10 = new lib.Cup();
	this.instance_10.setTransform(2379.2,780.8,1,1,0,0,0,261.5,224);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(453).to({_off:false},0).to({x:830.4},6).wait(26).to({x:709.6,y:518.4},13).wait(10).to({x:-352.8},9).to({_off:true},1).wait(137));

	// Bagguet
	this.instance_11 = new lib.Bagguet("synched",0);
	this.instance_11.setTransform(-194,583.1,1,1,0,0,0,92.5,252.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Bagguet_Swing();
	this.instance_12.setTransform(1248.8,634.6,0.545,0.545,36.7,0,0,92.7,252.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(145).to({_off:false},0).to({_off:true,regX:92.7,regY:252.6,scaleX:0.55,scaleY:0.55,rotation:36.7,x:1248.8,y:634.6,mode:"independent"},6,cjs.Ease.get(1)).wait(504));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(145).to({_off:false},6,cjs.Ease.get(1)).wait(25).to({regX:92.5,x:1624.5,y:860.5,mode:"synched",startPosition:17},0).to({x:2106.6,y:760.5,startPosition:1},4).to({_off:true},4).wait(471));

	// hema.png
	this.instance_13 = new lib.Hemajiro_Swing();
	this.instance_13.setTransform(1000.1,1097.6,1,0.41,0,85.1,0,335.9,512.3);
	this.instance_13._off = true;

	this.instance_14 = new lib.Hemajiro_Swing2();
	this.instance_14.setTransform(427.2,820.1,1.11,1.109,0,0,-1.6,336.1,258.1);
	this.instance_14._off = true;

	this.instance_15 = new lib.Hemajiro_Banzai_a("synched",0);
	this.instance_15.setTransform(976.8,1082,0.243,0.35,0,0,-2.4,336.2,258);
	this.instance_15._off = true;

	this.instance_16 = new lib.Hemajiro_Banzai("synched",0);
	this.instance_16.setTransform(976.8,1082,0.243,0.35,0,0,-2.4,336.2,258);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(111).to({_off:false},0).to({regX:336,regY:512.4,scaleX:0.7,scaleY:0.7,skewX:0,x:1012.3,y:1105.8},9,cjs.Ease.get(1)).wait(25).to({regY:258,scaleX:1,scaleY:1,x:970.2,y:1549.9,mode:"synched",startPosition:2},6).wait(25).to({x:-530.3,y:759.7,startPosition:5},0).to({x:2316.3,y:747.5,startPosition:4},6).wait(2).to({startPosition:6},0).to({_off:true,regX:336.1,regY:258.1,scaleX:1.11,scaleY:1.11,skewY:-1.6,x:427.2,y:820.1,mode:"independent"},7).wait(464));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(184).to({_off:false},7).wait(13).to({x:407.2},0).to({_off:true,regX:336.2,regY:258,scaleX:0.24,scaleY:0.35,skewY:-2.4,x:976.8,y:1082,mode:"synched",startPosition:0},18).wait(297).to({_off:false,regX:336.1,regY:258.1,scaleX:1.11,scaleY:1.11,skewY:-1.6,x:-396.7,y:683.6,mode:"independent"},0).to({_off:true,regX:336.2,regY:258,scaleX:0.24,scaleY:0.35,skewY:-2.4,x:1060.8,y:1082,mode:"synched",startPosition:0},18).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(204).to({_off:false},18).to({_off:true},32).wait(231).to({_off:false,regX:357.3,regY:268.9,scaleX:0.54,scaleY:0.81,skewY:0,x:1067.8,y:530.1,mode:"independent"},13).wait(10).to({x:1112.6,y:1643.7},9).to({_off:true},1).wait(1).to({_off:false,regX:336.2,regY:258,scaleX:0.24,scaleY:0.35,skewY:-2.4,x:1060.8,y:1082,mode:"synched",startPosition:0},18).to({_off:true},27).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(254).to({_off:false},0).wait(16).to({startPosition:16},0).to({regY:258.1,scaleX:0.43,scaleY:0.45,skewX:10.4,skewY:3.2,x:644.9,y:1088.2,startPosition:23},10).to({regX:336.3,scaleX:0.34,scaleY:0.45,skewX:8.2,skewY:3.8,x:636,y:1083.6,startPosition:24},13).to({regX:336.2,scaleX:0.46,scaleY:0.45,skewX:11,skewY:2.8,x:817.7,y:1078.5,startPosition:25},5).to({scaleX:0.43,scaleY:0.45,skewX:10.4,skewY:3.2,x:2279.6,y:989,startPosition:16},18).to({_off:true},47).wait(122).to({_off:false,regX:357.3,regY:268.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:1284.6,y:1643.6,startPosition:0},0).to({_off:true,regY:268.9,scaleX:0.54,scaleY:0.81,x:1067.8,y:530.1,mode:"independent"},13).wait(66).to({_off:false,regX:336.2,regY:258,scaleX:0.24,scaleY:0.35,skewY:-2.4,x:1060.8,y:1082,mode:"synched",startPosition:16},0).to({regY:258.1,scaleX:0.43,scaleY:0.45,skewX:10.4,skewY:3.2,x:728.9,y:1088.2,startPosition:23},10).to({regX:336.3,scaleX:0.34,scaleY:0.45,skewX:8.2,skewY:3.8,x:720,y:1083.6,startPosition:24},13).to({regX:336.2,scaleX:0.46,scaleY:0.45,skewX:11,skewY:2.8,x:901.7,y:1078.5,startPosition:25},5).to({scaleX:0.43,scaleY:0.45,skewX:10.4,skewY:3.2,x:2363.6,y:989,startPosition:16},18).wait(45));

	// Tuna
	this.instance_17 = new lib.Tuna();
	this.instance_17.setTransform(2178.1,909.7,0.597,0.663,0,0,0,359.9,219.5);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tuna_move();
	this.instance_18.setTransform(1653.3,887.7,0.663,0.663,0,0,0,360,219.5);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tuna_spring("synched",1);
	this.instance_19.setTransform(1019.2,918.9,0.537,0.687,0,3.3,6.8,360.1,219.5);

	this.instance_20 = new lib.Tuna_spring_attack("synched",1);
	this.instance_20.setTransform(1019.2,918.9,0.537,0.687,0,3.3,6.8,360.1,219.5);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tuna_spring_stuck("synched",0);
	this.instance_21.setTransform(701.6,892.8,0.933,0.896,0,14.8,10,304,236.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},145).to({state:[{t:this.instance_18}]},11).to({state:[{t:this.instance_18}]},20).to({state:[{t:this.instance_18}]},8).to({state:[]},1).to({state:[{t:this.instance_18}]},19).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.instance_19,p:{x:1019.2}}]},10).to({state:[{t:this.instance_20}]},32).to({state:[{t:this.instance_20}]},16).to({state:[{t:this.instance_21}]},10).to({state:[{t:this.instance_21}]},13).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_21}]},18).to({state:[]},47).to({state:[{t:this.instance_18}]},156).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.instance_19,p:{x:1103.2}}]},10).to({state:[{t:this.instance_20}]},27).to({state:[{t:this.instance_21}]},10).to({state:[{t:this.instance_21}]},13).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_21}]},18).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(145).to({_off:false},0).to({_off:true,regX:360,scaleX:0.66,x:1653.3,y:887.7},11).wait(499));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(145).to({_off:false},11).wait(20).to({y:899.7},0).to({regY:219.6,scaleX:0.63,scaleY:0.56,x:-226.7,y:797.4},8).to({_off:true},1).wait(19).to({_off:false,regY:219.5,scaleX:1,scaleY:1,x:2361,y:-252},0).to({regX:359.9,scaleX:0.8,scaleY:0.78,skewX:1.5,skewY:-178.5,x:655,y:412.2},8,cjs.Ease.get(1)).to({_off:true,regX:360.1,scaleX:0.54,scaleY:0.69,skewX:3.3,skewY:-353.2,x:1019.2,y:918.9,mode:"synched",startPosition:1},10,cjs.Ease.get(-1)).wait(297).to({_off:false,regX:360,scaleX:1,scaleY:1,skewX:0,skewY:-360,x:2565,y:-252,mode:"independent"},0).to({regX:359.9,scaleX:0.8,scaleY:0.78,skewX:1.5,skewY:-538.5,x:859,y:412.2},8,cjs.Ease.get(1)).to({_off:true,regX:360.1,scaleX:0.54,scaleY:0.69,skewX:3.3,skewY:-713.2,x:1103.2,y:918.9,mode:"synched",startPosition:1},10,cjs.Ease.get(-1)).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(254).to({_off:false},0).wait(16).to({startPosition:17},0).to({_off:true,regX:304,regY:236.8,scaleX:0.93,scaleY:0.9,skewX:14.8,skewY:10,x:701.6,y:892.8,startPosition:0},10).wait(284).to({_off:false,regX:360.1,regY:219.5,scaleX:0.54,scaleY:0.69,skewX:3.3,skewY:6.8,x:1103.2,y:918.9,startPosition:17},0).to({_off:true,regX:304,regY:236.8,scaleX:0.93,scaleY:0.9,skewX:14.8,skewY:10,x:785.6,y:892.8,startPosition:0},10).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(270).to({_off:false},10).to({regX:303.9,scaleX:0.75,scaleY:0.88,skewX:11.8,skewY:12.3,x:681,y:888.3,startPosition:1},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.9,skewX:15.6,skewY:9.1,x:878.2,y:883.2,startPosition:2},5).to({regX:304,scaleX:0.93,scaleY:0.9,skewX:14.8,skewY:10,x:2336.3,y:793.6,startPosition:4},18).to({_off:true},47).wait(201).to({_off:false,x:785.6,y:892.8,startPosition:0},10).to({regX:303.9,scaleX:0.75,scaleY:0.88,skewX:11.8,skewY:12.3,x:765,y:888.3,startPosition:1},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.9,skewX:15.6,skewY:9.1,x:962.2,y:883.2,startPosition:2},5).to({regX:304,scaleX:0.93,scaleY:0.9,skewX:14.8,skewY:10,x:2420.3,y:793.6,startPosition:4},18).wait(45));

	// Panel
	this.instance_22 = new lib.Panel("synched",0,false);
	this.instance_22.setTransform(504.1,747.2,1,1.003,0,-19.4,-15,52.9,83);
	this.instance_22._off = true;

	this.instance_23 = new lib.Nobuter_panel("synched",0,false);
	this.instance_23.setTransform(383.2,372.3,1,1,0,0,0,1010.9,1784.1);

	this.instance_24 = new lib.Nobuter_panel_rattle("synched",0);
	this.instance_24.setTransform(383.2,372.3,1,1,0,0,0,1010.9,1784.1);
	this.instance_24._off = true;

	this.instance_25 = new lib.Panel_share("synched",0,false);
	this.instance_25.setTransform(588.1,747.2,1,1.003,0,-19.4,-15,52.9,83);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},280).to({state:[{t:this.instance_22}]},49).to({state:[{t:this.instance_22}]},15).to({state:[{t:this.instance_23}]},40).to({state:[{t:this.instance_24}]},19).to({state:[{t:this.instance_24}]},40).to({state:[{t:this.instance_24}]},12).to({state:[{t:this.instance_24}]},17).to({state:[{t:this.instance_24}]},11).to({state:[]},1).to({state:[{t:this.instance_25}]},90).to({state:[{t:this.instance_25}]},49).to({state:[{t:this.instance_25}]},15).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(280).to({_off:false},0).wait(49).to({startPosition:19},0).to({regX:52.8,scaleX:3.8,scaleY:3.81,x:526,y:700.4},15).to({_off:true},40).wait(271));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(403).to({_off:false},0).wait(40).to({startPosition:1},0).to({x:182.4,y:-646.6,mode:"independent"},12).wait(17).to({x:-726.4,y:-672.2},11).to({_off:true},1).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(574).to({_off:false},0).wait(49).to({startPosition:19},0).to({regX:52.8,scaleX:10.05,scaleY:8.95,skewX:0.1,skewY:-9,x:691.6,y:868.3},15).wait(17));

	// Nobuteru
	this.instance_26 = new lib.Nobuteru_Appear();
	this.instance_26.setTransform(209.1,1222.6,1,0.058,0,57.2,0,227.3,937.6);
	this.instance_26._off = true;

	this.instance_27 = new lib.Nobuteru_Extrude();
	this.instance_27.setTransform(849,793.4,0.79,0.79,-5.2,0,0,224.1,506);
	this.instance_27._off = true;

	this.instance_28 = new lib.Nobuteru_Back();
	this.instance_28.setTransform(-203.3,567.7,0.79,0.79,-5.2,0,0,224.1,506);
	this.instance_28._off = true;

	this.instance_29 = new lib.Nobuteru_Back_swing("single",0);
	this.instance_29.setTransform(483.6,647.6,1.091,1.091,-5.2,0,0,224.3,506.1);

	this.instance_30 = new lib.Nobuteru_Back_shock("synched",0);
	this.instance_30.setTransform(483.6,647.6,1.091,1.091,-5.2,0,0,224.3,506.1);

	this.instance_31 = new lib.Nobuteruru_rolling();
	this.instance_31.setTransform(483.6,647.7,1.091,1.091,-5.2,0,0,224.3,506.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},115).to({state:[{t:this.instance_26}]},9).to({state:[{t:this.instance_26}]},21).to({state:[{t:this.instance_26}]},6).to({state:[{t:this.instance_26}]},25).to({state:[{t:this.instance_26}]},4).to({state:[{t:this.instance_26}]},4).to({state:[{t:this.instance_27}]},7).to({state:[{t:this.instance_27}]},13).to({state:[{t:this.instance_28}]},8).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29,p:{x:483.6}}]},7).to({state:[{t:this.instance_30,p:{x:483.6}}]},58).to({state:[{t:this.instance_31}]},18).to({state:[{t:this.instance_31}]},31).to({state:[{t:this.instance_31}]},15).to({state:[]},40).to({state:[{t:this.instance_28}]},143).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29,p:{x:567.6}}]},7).to({state:[{t:this.instance_29,p:{x:567.6}}]},27).to({state:[{t:this.instance_30,p:{x:567.6}}]},10).to({state:[{t:this.instance_31}]},18).to({state:[{t:this.instance_31}]},31).to({state:[{t:this.instance_31}]},15).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(115).to({_off:false},0).to({regX:227.2,regY:937.4,scaleX:0.79,scaleY:0.79,skewX:0,x:434.3,y:1193},9,cjs.Ease.get(1)).wait(21).to({regX:224.2,regY:506.1,scaleX:0.42,scaleY:0.42,rotation:-43.2,x:1717,y:373.6},6).wait(25).to({regY:505.9,scaleX:0.54,scaleY:0.54,x:1345.1,y:513.2,mode:"synched",startPosition:0},0).to({x:2263.3,y:387.2,startPosition:3},4).wait(4).to({startPosition:7},0).to({_off:true,regX:224.1,regY:506,scaleX:0.79,scaleY:0.79,rotation:-5.2,x:849,y:793.4,mode:"independent"},7).wait(464));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(184).to({_off:false},7).wait(13).to({rotation:-5.2},0).to({_off:true,x:-203.3,y:567.7},8).wait(443));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(204).to({_off:false},8).wait(3).to({_off:true,regX:224.3,regY:506.1,scaleX:1.09,scaleY:1.09,x:483.6,y:647.6,mode:"single",startPosition:0},7).wait(305).to({_off:false,regX:224.1,regY:506,scaleX:0.79,scaleY:0.79,x:-188,y:547.6,mode:"independent"},0).wait(3).to({x:0.7,y:567.7},0).to({_off:true,regX:224.3,regY:506.1,scaleX:1.09,scaleY:1.09,x:567.6,y:647.6,mode:"single",startPosition:0},7).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(298).to({_off:false},0).wait(31).to({regY:506.1,scaleX:4.14,scaleY:4.14,x:448.4,y:322.3},15).to({_off:true},40).wait(208).to({_off:false,regY:506.2,scaleX:1.09,scaleY:1.09,x:567.6,y:647.7},0).wait(31).to({regY:506.1,scaleX:10.52,scaleY:10.39,rotation:0,skewX:14.9,skewY:-0.1,x:792.4,y:30.7},15).wait(17));

	// dameo.png
	this.instance_32 = new lib.Dameo_Swing();
	this.instance_32.setTransform(1585.9,1101.1,1,0.016,0,61.9,0,285.4,462.3);
	this.instance_32._off = true;

	this.instance_33 = new lib.Dameo_NoHand();
	this.instance_33.setTransform(857.9,934.3,0.955,0.955,0,0,0,285.5,232);

	this.instance_34 = new lib.Dameo_Banzai("synched",0);
	this.instance_34.setTransform(1069.1,1099,0.224,0.323,0,0,0,285.4,232.1);
	this.instance_34._off = true;

	this.instance_35 = new lib.Dameo_Banzai_attack("synched",0);
	this.instance_35.setTransform(1069.1,1099,0.224,0.323,0,0,0,285.4,232.1);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},107).to({state:[{t:this.instance_32}]},10).to({state:[{t:this.instance_32}]},28).to({state:[{t:this.instance_32}]},6).to({state:[{t:this.instance_32}]},25).to({state:[{t:this.instance_32}]},6).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},7).to({state:[{t:this.instance_32}]},13).to({state:[{t:this.instance_34}]},18).to({state:[{t:this.instance_35}]},32).to({state:[{t:this.instance_35}]},16).to({state:[{t:this.instance_35}]},10).to({state:[{t:this.instance_35}]},13).to({state:[{t:this.instance_35}]},5).to({state:[{t:this.instance_35}]},18).to({state:[]},47).to({state:[{t:this.instance_34}]},122).to({state:[{t:this.instance_34}]},13).to({state:[{t:this.instance_34}]},10).to({state:[{t:this.instance_34}]},9).to({state:[]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_34}]},18).to({state:[{t:this.instance_35}]},27).to({state:[{t:this.instance_35}]},10).to({state:[{t:this.instance_35}]},13).to({state:[{t:this.instance_35}]},5).to({state:[{t:this.instance_35}]},18).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(107).to({_off:false},0).to({regY:463.8,scaleX:0.63,scaleY:0.63,skewX:0,x:694,y:1054.9},10,cjs.Ease.get(1)).wait(28).to({regX:285.5,regY:232,scaleX:1,scaleY:1,x:-204.3,y:1430.3,mode:"synched",startPosition:2},6).wait(25).to({x:-330.3,y:536.2,startPosition:5},0).to({x:2247.5,y:478.1,startPosition:4},6).wait(2).to({startPosition:6},0).to({_off:true,scaleX:0.96,scaleY:0.96,x:857.9,y:934.3,mode:"independent"},7).wait(13).to({_off:false},0).to({_off:true,regX:285.4,regY:232.1,scaleX:0.22,scaleY:0.32,x:1069.1,y:1099,mode:"synched",startPosition:0},18).wait(297).to({_off:false,regX:285.5,regY:232,scaleX:0.96,scaleY:0.96,x:2423.2,y:669.3,mode:"independent"},0).to({_off:true,regX:285.4,regY:232.1,scaleX:0.22,scaleY:0.32,x:1153.1,y:1099,mode:"synched",startPosition:0},18).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(204).to({_off:false},18).to({_off:true},32).wait(231).to({_off:false,regX:266.1,regY:220.5,scaleX:1,scaleY:1,x:351.2,y:-319.9},0).to({scaleX:0.63,scaleY:0.79,x:339.2,y:505.7,mode:"independent"},13).wait(10).to({y:-230.3},9).to({_off:true},1).wait(1).to({_off:false,regX:285.4,regY:232.1,scaleX:0.22,scaleY:0.32,x:1153.1,y:1099,mode:"synched",startPosition:0},18).to({_off:true},27).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(254).to({_off:false},0).wait(16).to({startPosition:16},0).to({regX:285.3,regY:232,scaleX:0.39,scaleY:0.42,skewX:10.4,skewY:4.9,x:802.5,y:1123.7,startPosition:20},10).to({scaleX:0.4,scaleY:0.42,skewX:10.3,skewY:1.5,x:772.7,y:1095.9,startPosition:21},13).to({regY:232.1,scaleX:0.53,scaleY:0.42,skewX:13.6,skewY:1.2,x:1001.3,y:1092,startPosition:22},5).to({regY:232,scaleX:0.39,scaleY:0.42,skewX:10.4,skewY:4.9,x:2437.2,y:1024.5,startPosition:12},18).to({_off:true},47).wait(201).to({_off:false,regX:285.4,regY:232.1,scaleX:0.22,scaleY:0.32,skewX:0,skewY:0,x:1153.1,y:1099,startPosition:16},0).to({regX:285.3,regY:232,scaleX:0.39,scaleY:0.42,skewX:10.4,skewY:4.9,x:886.5,y:1123.7,startPosition:20},10).to({scaleX:0.4,scaleY:0.42,skewX:10.3,skewY:1.5,x:856.7,y:1095.9,startPosition:21},13).to({regY:232.1,scaleX:0.53,scaleY:0.42,skewX:13.6,skewY:1.2,x:1085.3,y:1092,startPosition:22},5).to({regY:232,scaleX:0.39,scaleY:0.42,skewX:10.4,skewY:4.9,x:2521.2,y:1024.5,startPosition:12},18).wait(45));

	// ex3
	this.instance_36 = new lib.Circle_anim_multiExtensions("synched",0);
	this.instance_36.setTransform(958,600,1,1,0,0,0,-2,0);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(145).to({_off:false},0).wait(31).to({startPosition:0},0).to({_off:true},15).wait(317).to({_off:false},0).to({_off:true},19).wait(128));

	// GridMaking
	this.instance_37 = new lib.GridMaking("synched",0,false);
	this.instance_37.setTransform(902.2,1138.5,1,1,0,0,0,902.3,1138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({_off:true},115).wait(540));

	// bg
	this.instance_38 = new lib.トゥイーン1("synched",0);
	this.instance_38.setTransform(960,1200);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({y:972.5},124).to({y:965.1},4).wait(17).to({startPosition:0},0).to({y:929.1},19).wait(12).to({startPosition:0},0).to({y:894.1},18).wait(10).to({startPosition:0},0).to({y:578.2},159).wait(21).to({startPosition:0},0).to({y:334.1},114).wait(10).to({startPosition:0},0).to({y:0},130).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3842.6,-2402.5,9605,7205);


// stage content:



(lib.crouton_v006 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// foreground
	this.foreground = new lib.Foreground();
	this.foreground.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.foreground).wait(1));

	// background
	this.background = new lib.Background();
	this.background.setTransform(384,480,0.4,0.4,0,0,0,959.9,1200);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1153,-721,3842,2882);

})(cjsLib = cjsLib||{}, cjsImages = cjsImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsLib, cjsImages, createjs, ss;