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
	
	urlHandler.addChangePageListener(domHandler.changeTo);
	urlHandler.addChangePageListener(bgHandler.setNavigationButtonState);
	urlHandler.addChangePageListener(bgHandler.clearMain);
	urlHandler.addChangeOptionListener(domHandler.changeOption);
	
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
