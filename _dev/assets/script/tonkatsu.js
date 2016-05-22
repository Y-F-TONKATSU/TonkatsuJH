var Tonkatsu = {};

var urlHandler;
var domHandler;
var scrollHandler;
var bgHandler;

var Animators = {};

Tonkatsu.init = function(){
	
	ShareUtil.init();
	
	urlHandler = new UrlHandler();
	domHandler = new DomHandler();
	domHandler.initDoc('#mainDoc');
	domHandler.initDoc('#indexContainer');
	scrollHandler = new ScrollHandler($('#mainDoc'));
	bgHandler = new BackgroundHandler($('#foreground'), $('#background'));
	bgHandler.putShadow();
	bgHandler.putNavigationButtons({
		'onHomeClick':function(e){
			urlHandler.changeTo('index');
		},
	});
	
	urlHandler.addChangePageListener(_.bind(domHandler.changeTo, domHandler));
	urlHandler.addChangePageListener(_.bind(bgHandler.setNavigationButtonState, bgHandler));
	urlHandler.addChangePageListener(_.bind(bgHandler.changeTo, bgHandler));
	urlHandler.addChangeOptionListener(_.bind(domHandler.changeOption, domHandler));
	
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
