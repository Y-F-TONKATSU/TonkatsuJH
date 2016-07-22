var Tonkatsu = {};

var urlHandler;
var domHandler;
var scrollHandler;
var animationHandler;

var FPS = 24;
var BASE_TITLE = 'とんかつ中学のホームページ';
var BASE_URL = 'ton-katsu.net/';

Tonkatsu.init = function(){
	
	urlHandler = new UrlHandler();
	
	domHandler = new DomHandler();
	domHandler.initElems($('.autoInit'));
	
	animationHandler = new AnimationHandler({
		'menu':$('#menuCanvas'),
		'fore':$('#foreground'),
		'back':$('#background'),
		'lower':$('#lowerBackground'),
	}, $('#navigation_hitarea'), $('#menu_hitarea'));
	animationHandler.init(FPS);
	animationHandler.putShadow($('#shadow'));
	animationHandler.putNavigationButtons($('#navigationCanvas'), {
		'onHomeClicked':function(){
			domHandler.resetIndex();
		},
		'onMenuClicked':function(){
			domHandler.showMenu(function(){
				//onHideListenr
				animationHandler.exitMenuMode();
			});
			animationHandler.menuMode('menu');
		},
		'onShareClicked':function(){
			
			var url = ContentsUtil.getUrl(urlHandler.getCurrentHashString());
			if(!url){
				url = BASE_URL;
			} else {
				url = BASE_URL + url;
			}
			
			var title = ContentsUtil.getTitle(urlHandler.getCurrentHashString());
			if(!title){
				title = BASE_TITLE;
			}
			
			domHandler.showShare(url, title, function(){
				//onHideListenr
				animationHandler.exitShareMode();
			});
			
			animationHandler.shareMode('menu', url, title);
			
		},
	});
	animationHandler.setForgetRate(0);
	
	scrollHandler = new ScrollHandler($('#mainDoc'));
	indexScrollHandler = new ScrollHandler($('#indexContainer'));
	var triggerScroll = function(){
		if(!(urlHandler.getCurrentCategory() === 'top')){
			var activeElem = scrollHandler.getActiveSection();
			animationHandler.setActiveElem(activeElem);
		}
	}
	var indexTriggerScroll = function(){
		if(urlHandler.getCurrentCategory() === 'top'){
			var activeElem = indexScrollHandler.getActiveSection();
			animationHandler.setActiveElem(activeElem);
		}
	}
	scrollHandler.setScrollListener(triggerScroll);
	indexScrollHandler.setScrollListener(indexTriggerScroll);
	
	animationHandler.setOnCjsInitListener(triggerScroll);
	
	domHandler.setLoadCompleteListener(function(options){
		if(options === 'index'){
			indexTriggerScroll();
			animationHandler.indexMode('lower', 'back', 'fore', Animators.index);
			animationHandler.cancelLoadingCjs();
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
