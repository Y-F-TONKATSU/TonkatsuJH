console.log('Start Script');

var Tonkatsu = {};

var urlHandler;
var domHandler;
var scrollHandler;
var animationHandler;

var FPS = 24;
var BASE_TITLE = 'とんかつ騎士団の公式ホームページ';
var BASE_URL = 'http://ton-katsu.net/';

var gCjsEvents = {};
var gCjsOptions = {};

var BUTTON_COLORS = {
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
}

Tonkatsu.init = function(){
	
	$('#splashScreen').remove();
	
	urlHandler = new UrlHandler();
	
	domHandler = new DomHandler();
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
			
			var url = ContentsUtil.getLink(urlHandler.getCurrentHashString());
			console.log(url);
			if(_.isEmpty(url)){
				url = BASE_URL;
			}
			console.log(url + "!!!");
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
			animationHandler.loadCjs(options, BUTTON_COLORS[urlHandler.getCurrentCategory()]);
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
	
	/*var URL_LIST = {
		'#!id=writing000001':'contents/writing/1608/w000001.html',
		'#!id=experimental000019':'contents/experimental/1604/e000019_crouton/main.html',
		'#!id=experimental000020':'contents/experimental/1608/e000020_ant/main.html',
		'#!id=experimental000021':'contents/experimental/1609/e000021_noc_000/main.html',
	}
	
	if(URL_LIST[location.hash]){
		
		$.ajax({
			'url': URL_LIST[location.hash],
			'dataType':'html',
		}).done(_.bind(function(result) {
			
			var newDoc = $('<div></div>');
			newDoc.html(result);
			
			var title = $(newDoc).find('title').text();
			$('title').text(title + ' - ' + BASE_TITLE);
			
			$('article').html($(newDoc).find('article').html());
			console.log($(newDoc).find('article').html());
			
			Tonkatsu.start();
			
		}, this));
		
	} else {
		
		setTimeout(Tonkatsu.start, 10);
			
	}
	*/
	

});

