var ShareUtil = function(){
	
	var _fbApiInit = false;
	
	var self = {};
	
	self.init = function(){
		
		$(".fb-comments").css({
			position:"relative",
			zIndex:$taz.SNS,
		});
		
		window.fbAsyncInit = function() {
		// init the FB JS SDK
		FB.init({
		  appId      : '303809516397647',                        // App ID from the app dashboard
		  channelUrl : '//ton-katsu.net/channel.html', // Channel file for x-domain comms
		  status     : true,                                 // Check Facebook Login status
		  xfbml      : true                                  // Look for social plugins on the page
		});
		
		// Additional initialization code such as adding Event Listeners goes here
		_fbApiInit = true;
		
		};
		
		// Load the SDK asynchronously
		(function(d, s, id){
		 var js, fjs = d.getElementsByTagName(s)[0];
		 if (d.getElementById(id)) {return;}
		 js = d.createElement(s); js.id = id;
		 js.src = "//connect.facebook.net/ja_JP/all.js";
		 fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=303809516397647";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		
	}
	
	self.getFbCommentTag = function(url, width){
		
		return $('<fb:comments class="fb-comment inner" data-href="' + url + '" data-width="' + width + '"></fb:comments>');
		
	}
	
	self.getFbLikeTag = function(url, width){
		
		if($gm.getDisplaySize() == 2){
			var showFace = "false"
		} else{
			var showFace = "true"
		}
		
		return $('<div class="fb-like" data-href="' + url + '" data-width="' + width + '" data-show-faces="' + showFace + '"></div>');
		
	}
	
	self.getTweetTag = function(url, title){
		
		return $('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + url +'" data-lang="ja"  data-text="' + title + '">ツイート</a>');
		
	}

	self.getGooglePlusTag = function(url){

		return $('<div class="g-plusone" data-href="' + url + '" data-size="medium" data-annotation="inline" data-width="200">+1</div>');
		
	}
	
	self.getMixiTag = function(url, title){
		
		return $('<a href="http://mixi.jp/share.pl" class="mixi-check-button" data-href="' + url + '" data-key="b6732ee25d9312d9295403f0f578cd1361fd6551" data-text="' + $ta.baseInfo.SITE_NAME + '">mixiチェック</a>');
		
	}
	
	self.getMixiLikeTag = function(url){
		
		return $('<div data-plugins-type="mixi-favorite" data-service-key="b6732ee25d9312d9295403f0f578cd1361fd6551" data-size="medium" data-href="' + url + '" data-show-faces="true" data-show-count="true" data-show-comment="true" data-width=""></div>');
		
	}
	
	self.getHatenaTag = function(url, title){
		
		return $('<a href="http://b.hatena.ne.jp/entry/' + url + '" class="hatena-bookmark-button" data-hatena-bookmark-title="' + title + '" data-hatena-bookmark-layout="simple-balloon" title="このエントリーをはてなブックマークに追加"><img class="noEdit" src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>');
		
	}
	
	self.render = function(url){
		
		//FB
		var interval = setInterval(function(){
			if(_fbApiInit == true){
				FB.XFBML.parse();
				trace("FB Unit Initiated");
				clearInterval(interval);
			}
		}, 3000)
		
		
		//Twitter
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');	
		
		if(window.twttr){window.twttr.widgets.load();}
		
		//Google+
		window.___gcfg = {lang: 'ja'};
		(function() {
			var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			po.src = 'https://apis.google.com/js/plusone.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();
		
		/*mixi
		if(window.__MIXI_PLUGINS__){window.__MIXI_PLUGINS__._init();}
		
		$("body").append($('<script type="text/javascript" src="http://static.mixi.jp/js/share.js"></script>'));	
		(function(d) {var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true;s.src = '//static.mixi.jp/js/plugins.js#lang=ja';d.getElementsByTagName('head')[0].appendChild(s);})(document);
		*/
		
		//hatena
		$("body").append($('<script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>'));	
		
	}
	
	self.getCurrentUrl = function(){
		
		return _currentUrl;
		
	}
	
	return self;
	
}();
			
