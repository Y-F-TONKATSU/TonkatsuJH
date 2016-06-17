var NavigationHandler;

(function(){
	
	NavigationHandler = function(events){
		this.buttons = [];
		this.hitAreaHandler = new HitAreaHandler($('#navigation'));
		
		this.onHomeClickedListener = events.onHomeClicked;
		this.onMenuClickedListener = events.onMenuClicked;
		this.onShareClickedListener = events.onShareClicked;
		
		this.state = {
			'home':{
				'r':255,
				'g':255,
				'b':255,
			},
			'menu':{
				'r':255,
				'g':255,
				'b':255,
			},
			'share':{
				'r':255,
				'g':255,
				'b':255,
			},
		}
	};
	
	NavigationHandler.prototype = {
			
		putButtons:function(ch){
			
			var canvas = ch.getCanvas();
			
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
		
		_setState:function(key, value){
			
			state[key] = value;
			
		}
		
		showHomeButton:function(){
			
			this.homeButton.gotoAndPlay('start');
			
			this.hitAreaHandler.setHitArea('home', {
				width:80,
				height:80,
				left:8,
				top:120
			}, '#', this.onHomeClickedListener);
			
			this._setState('', '');
				
		},
		
		showMenuButton:function(){
			
			this.menuButton.gotoAndPlay('start');

			this.hitAreaHandler.setHitArea('menu', {
				width:80,
				height:80,
				left:8,
				top:208
			}, this.onMenuClickedListener);
				
		},
		
		showShareButton:function(){
			
			this.shareButton.gotoAndPlay('start');
			
			this.hitAreaHandler.setHitArea('share', {
				width:80,
				height:80,
				left:8,
				top:296
			}, this.onShareClickedListener);
				
				
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
