var Tonkatsu = {};

var urlHandler;
var domHandler;
var scrollHandler;
var bgHandler;

var Animators = {};
var Tweeners = {};

Tonkatsu.init = function(){
	
	ShareUtil.init();
	
	urlHandler = new UrlHandler();
	domHandler = new DomHandler();
	domHandler.initDoc('#share');
	domHandler.initDoc('#menu');
	domHandler.initDoc('#mainDoc');
	domHandler.initDoc('#indexContainer');
	scrollHandler = new ScrollHandler($('#mainDoc'));
	bgHandler = new BackgroundHandler($('#foreground'), $('#background'));
	bgHandler.putShadow();
	bgHandler.putNavigationButtons({
		'onHomeClicked':function(){
		},
		'onMenuClicked':function(){
			domHandler.showMenu();
		},
		'onShareClicked':function(){
			domHandler.showShare();
		},
	});
	
	urlHandler.addChangePageListener(_.bind(domHandler.changeTo, domHandler));
	urlHandler.addChangePageListener(_.bind(bgHandler.setNavigationButtonState, bgHandler));
	urlHandler.addChangePageListener(_.bind(bgHandler.changeTo, bgHandler));
	urlHandler.addChangeOptionListener(_.bind(domHandler.changeOption, domHandler));
	
	console.log('Init Complete');
	
};

Tonkatsu.onHashChanged = function(e){
	
	console.log('Hash Change Event Triggerrd');
	
	var hash = String(location.hash).substring(1);
	urlHandler.changeTo(hash);

};

Tonkatsu.onResize = function(e){
	location.reload();
};

$(window).load(function(){
	Tonkatsu.init();
	Tonkatsu.onHashChanged();
	
});

$(window).resize(Tonkatsu.onResize);
$(window).on('hashchange', Tonkatsu.onHashChanged);
