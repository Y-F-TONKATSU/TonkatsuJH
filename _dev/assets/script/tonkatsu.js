var Tonkatsu = {};

var urlHandler;
var displayHandler;

Tonkatsu.init = function(){
	urlHandler = new UrlHandler();	
	displayHandler = new DisplayHandler();	
};

$(function(){
	Tonkatsu.init();
});

$(window).on('hashchange', function(e) {
	
	var hash = String(location.hash).substring(1);
	
	urlHandler.changeTo(hash);
			
});
	
