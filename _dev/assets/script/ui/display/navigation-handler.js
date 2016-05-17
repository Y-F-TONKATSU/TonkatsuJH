var NavigationHandler;

(function(){
	
	var ZI_NAVIGATION = 2000;
	
	NavigationHandler = function(events){
		this.buttons = [];
		this.hitAreaHandler = new HitAreaHandler($('#navigation'));

	};
	
	NavigationHandler.prototype = {
		
		putButtons:function(ch){
			
			var canvas = ch.getCanvas();
			$(canvas).css({
				'zIndex': ZI_NAVIGATION
			});
			
			this.homeButton = new cjsNavigationLib.navigation().homeButton;
			this.shareButton = new cjsNavigationLib.navigation().shareButton;
			this.menuButton = new cjsNavigationLib.navigation().menuButton;
			
			this.buttons.push(this.homeButton, this.shareButton, this.menuButton);		
			this.stage = new createjs.Stage(canvas);
			_.each(this.buttons, _.bind(function(button){
				this.stage.addChild(button);
			}, this));
			this.stage.update();
			
			createjs.Ticker.setFPS(cjsNavigationLib.properties.fps);
			createjs.Ticker.addEventListener("tick", this.stage);
			createjs.Ticker.addEventListener("tick", _.bind(function(e){
				_.each(this.buttons, function(button){
					var label = button.currentLabel;
					if(label.indexOf('stop') >= 0){
						button.stop();
					}
				});
			}, this));
			
			this.showHomeButton();
			this.showMenuButton();
			this.showShareButton();
			
		},
		
		showHomeButton:function(){
			
			this.homeButton.gotoAndPlay('start');
			
			this.hitAreaHandler.setHitArea('home', {
				width:200,
				height:200,
				left:20,
				top:300
			}, '#top000000');
				
		},
		
		showMenuButton:function(){
			
			this.menuButton.gotoAndPlay('start');
			
			this.hitAreaHandler.setHitArea('menu', {
				width:200,
				height:200,
				left:20,
				top:520
			}, '#top');
				
		},
		
		showShareButton:function(){
			
			this.shareButton.gotoAndPlay('start');
			
			this.hitAreaHandler.setHitArea('share', {
				width:200,
				height:200,
				left:20,
				top:740
			}, 'index.html');
				
				
		},
		
		hideHomeButton:function(){
			
			this.homeButton.gotoAndPlay('end');
			this.hitAreaHandler.removeHitArea('home');
						
		},
		
		hideMenuButton:function(){
			
			this.menuButton.gotoAndPlay('end');
			this.hitAreaHandler.removeHitArea('menu');
						
		},
		
		hideShareButton:function(){
			
			this.shareButton.gotoAndPlay('end');
			this.hitAreaHandler.removeHitArea('share');
						
		}
		
		
	}
	
})();
