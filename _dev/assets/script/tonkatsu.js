console.log('Start Script');

var Tonkatsu = {
	
	'FPS':24,
	'BASE_TITLE':'とんかつ騎士団の公式ホームページ',
	'BASE_URL':'http://ton-katsu.net/',
	'BUTTON_COLORS':{
		'writing':{
			'r': 255,
			'g': 255,
			'b': 38,
		},
		'experimental':{
			'r': 0,
			'g': 189,
			'b': 16,
		},
	},
};

var urlHandler;
var domHandler;
var scrollHandler;
var animationHandler;

var gCjsEvents = {};
var gCjsOptions = {};

Tonkatsu.init = function(){
	
	$('#splashScreen').remove();
	
	urlHandler = new UrlHandler();
	
	domHandler = new DomHandler(Tonkatsu.BASE_TITLE);
	domHandler.initElems($('.autoInit'));
	domHandler.initFullScreenElems($('.full'));
	
	if(animationHandler){
		animationHandler.destroy();
	}
	
	animationHandler = new AnimationHandler({
		'menu':$('#menuCanvas'),
		'fore':$('#foreground'),
		'back':$('#background'),
		'lower':$('#lowerBackground'),
	}, $('#navigation_hitarea'), $('#menu_hitarea'));
	animationHandler.init(Tonkatsu.FPS);
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
			
			var url = ContentsUtil.getLink(urlHandler.getCurrentHashString());
			console.log(url);
			if(_.isEmpty(url)){
				url = Tonkatsu.BASE_URL;
			}
			console.log(url + "!!!");
			var title = ContentsUtil.getTitle(urlHandler.getCurrentHashString());
			if(!title){
				title = Tonkatsu.BASE_TITLE;
			}
			
			domHandler.showShare(url, title, function(){
				//onHideListenr
				animationHandler.exitShareMode();
			});
			
			animationHandler.shareMode('menu', url, title);
			
		},
	});
	
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
			animationHandler.loadCjs(options, Tonkatsu.BUTTON_COLORS[urlHandler.getCurrentCategory()]);
			Tonkatsu.onHashChanged();
		}
	});
	
	urlHandler.addChangePageListener(_.bind(domHandler.changeTo, domHandler));
	urlHandler.addChangeOptionListener(_.bind(domHandler.changeOption, domHandler));
	urlHandler.addChangePageListener(_.bind(animationHandler.changeTo, animationHandler));
	
	console.log('Init Complete');
	
};

Tonkatsu.onHashChanged = function(e){
	
	var hash = location.hash;
	
	if(hash.indexOf('#') === 0){
		
		var hash = String(location.hash).substring(1);//remove '#'
		
		if(hash.indexOf('!') === 0){
			hash = hash.substring(1);//remove '!'
		}
		hash = hash.substring(3);//remove 'id='
		
	} else {
		
		var param = window.location.search;
		if(param.length > 0){
			hash = param.substring(4);
		}
		
	}
	
	console.log('Hash Change Event Triggerrd:' + hash);
	
	urlHandler.changeTo(hash);

};

var windowWidth;
var windowHeight;

Tonkatsu.onResize = function(e){
	if(Math.abs(windowWidth - window.innerWidth) > 10 ||
		Math.abs(windowHeight - window.innerHeight) > 10){
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		domHandler.hideMenu();
		domHandler.hideShare();
		Tonkatsu.init();
		Tonkatsu.onHashChanged();
	}
};

Tonkatsu.start = function(){
	
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	Tonkatsu.init();
	Tonkatsu.onHashChanged();
	$(window).resize(Tonkatsu.onResize);
	$(window).on('hashchange', Tonkatsu.onHashChanged);

};

$(window).load(function(){
	
	console.log('Doc Load Complete');
		
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	
	setTimeout(Tonkatsu.start, 10);
	
});

