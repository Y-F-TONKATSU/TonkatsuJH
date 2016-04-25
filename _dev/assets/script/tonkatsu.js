var Tonkatsu = {};

var urlHandler;
var displayHandler;
var domHandler;
var domUtil;
var bgHandler;

var Animators = {};

Tonkatsu.init = function(){
	
	urlHandler = new UrlHandler();
	displayHandler = new DisplayHandler();
	domHandler = new DomHandler();
	domUtil = new DomUtil($('#mainDoc'));
	bgHandler = new BackgroundHandler($('#foreground'), $('#background'));
	
	urlHandler.setChangePageListener(domHandler.changeTo);
	
	bgHandler.startAnimationLoop();
	
	console.log('Init Complete');
	
};

Tonkatsu.onHashChanged = function(e){

	var hash = String(location.hash).substring(1);
	urlHandler.changeTo(hash);

};

$(window).load(function(){
	Tonkatsu.init();
	Tonkatsu.onHashChanged();
	
});

$(window).on('hashchange', Tonkatsu.onHashChanged);
