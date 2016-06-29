var Tonkatsu = {};

var urlHandler;
var domHandler;
var scrollHandler;
var animationHandler;

var FPS = 24;

Tonkatsu.init = function(){
	
	urlHandler = new UrlHandler();
	
	domHandler = new DomHandler();
	domHandler.initElems($('.autoInit'));
	
	animationHandler = new AnimationHandler({
		'fore':$('#foreground'),
		'back':$('#background'),
	});
	animationHandler.init(FPS);
	animationHandler.putShadow($('#shadow'));
	animationHandler.putNavigationButtons($('#navigationButtonContainer'), {
		'onHomeClicked':function(){
		},
		'onMenuClicked':function(){
			domHandler.showMenu();
		},
		'onShareClicked':function(){
			domHandler.showShare();
		},
	});
	animationHandler.setForgetRate(0);
	
	scrollHandler = new ScrollHandler($('#mainDoc'));
	indexScrollHandler = new ScrollHandler($('#indexContainer'));
	var triggerScroll = function(){
		var activeElem = scrollHandler.getActiveSection();
		animationHandler.setActiveElem(activeElem);
	}
	var indexTriggerScroll = function(){
		var activeElem = indexScrollHandler.getActiveSection();
		animationHandler.setActiveElem(activeElem);
	}
	scrollHandler.setScrollListener(triggerScroll);
	indexScrollHandler.setScrollListener(indexTriggerScroll);
	
	animationHandler.setOnCjsInitListener(triggerScroll);
	
	domHandler.setLoadCompleteListener(function(options){
		if(options === 'index'){
			indexTriggerScroll();
			animationHandler.indexMode('back', Animators.index);
		} else {
			animationHandler.exitIndexMode();
			animationHandler.loadCjs(options);
			Tonkatsu.onHashChanged();
		}
	});
	
	urlHandler.addChangePageListener(_.bind(domHandler.changeTo, domHandler));
	urlHandler.addChangeOptionListener(_.bind(domHandler.changeOption, domHandler));
	urlHandler.addChangePageListener(_.bind(animationHandler.changeTo, animationHandler));
	
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
