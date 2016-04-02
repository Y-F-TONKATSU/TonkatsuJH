var Tonkatsu = {};

var urlHandler;
var displayHandler;
var bgManager;

Tonkatsu.init = function(){
	urlHandler = new UrlHandler();
	displayHandler = new DisplayHandler();
	domHandler = new DomHandler();
	bgHandler = new BackgroundHandler($('.foreground'), $('.background'));
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
