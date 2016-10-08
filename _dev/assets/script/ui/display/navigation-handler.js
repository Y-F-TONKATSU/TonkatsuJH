var NavigationHandler;

(function(){
	
	var BUTTON_SIZE = 80;
	var PADDING = 8;
	var MARGIN_TOP = 120;
	
	var NavigationButton = function(clickListener, mc){
		this.onClick = clickListener;
		this.mc = mc;
	}
	
	var buttonAnimator = function(ch, button, delta){
		
		var comp = true;
		
		var ctx = ch.getContext();
		
		ctx.save();
		
		ch.setWidth(5);
		
		_.each(button.color, function(v, k){
			
			var goal = button.colorGoal[k];
			
			if(Math.abs(goal - v) < 1){
				button.color[k] = goal;
			} else if(goal > v){
				button.color[k] += delta / 100;
				comp =false;
			} else if(goal < v){
				button.color[k] -= delta / 100;
				comp =false;
			}
			
		});
		
		_.each(button.shape, function(v, k){
			
			var goal = button.shapeGoal;
			
			if(goal === k){
				if(button.shape[k] < 1){
					button.shape[k] += delta / 10000;
					comp = false;
				} else {
					button.shape[k] = 1;
				}
			} else {
				if(button.shape[k] > 0){
					button.shape[k] -= delta / 10000;
					comp = false;
				} else {
					button.shape[k] = 0;
				}
			}
			
			ch.setFillStyle(button.color);
			
			if(button.shape[k] > 0){
				
				if(k === 'circle'){
					ch.drawShape(function(ctx){
						ctx.arc(button.centerX, button.centerY, button.shape[k] * BUTTON_SIZE * 0.5, 0, Math.PI * 2);
					}, true, true);
				} else if (k === 'rect'){
					var pad = (1 - button.shape[k]) * BUTTON_SIZE * 0.5;
					ch.drawShape(function(ctx){
						ctx.rect(button.x + pad , button.y + pad, button.shape[k] * BUTTON_SIZE, button.shape[k] * BUTTON_SIZE);
					}, true, true);
				}
			}
			
		});
		
		
		ctx.restore();
		
		return comp;
		
	}
	
	NavigationButton.prototype = {
		'duration':1000,
		'color':{
			'r':255,
			'g':255,
			'b':255,
		},
		'colorGoal':{
			'r':255,
			'g':255,
			'b':255,
		},
		'shape':{
			'circle':0,
			'rect':1,
		},
		shapeGoal:'circle',
		'state':'stop',
		'x':0,
		'y':0,
		'centerX':0,
		'centerY':0,
	}
	
	NavigationHandler = function(events, hitAreaHandler){
		
		this._ch = null;
		
		this.inactivate();
		
		this._buttons = [];
		this._hitAreaHandler = hitAreaHandler;
		
		this._homeButton = new NavigationButton(events.onHomeClicked, new gCjsNavigationLib.navigation().homeButton);
		this._menuButton = new NavigationButton(events.onMenuClicked, new gCjsNavigationLib.navigation().menuButton);
		this._shareButton = new NavigationButton(events.onShareClicked, new gCjsNavigationLib.navigation().shareButton);
		
		this._homeButton.x = PADDING;
		this._menuButton.x = PADDING;
		this._shareButton.x = PADDING;
		
		this._homeButton.centerX = PADDING + BUTTON_SIZE / 2;
		this._menuButton.centerX = PADDING + BUTTON_SIZE / 2;
		this._shareButton.centerX = PADDING + BUTTON_SIZE / 2;
		
		this._homeButton.y = MARGIN_TOP;
		this._menuButton.y = MARGIN_TOP + PADDING + BUTTON_SIZE;
		this._shareButton.y = MARGIN_TOP + (PADDING + BUTTON_SIZE) * 2;
		
		this._homeButton.centerY = MARGIN_TOP + BUTTON_SIZE / 2;
		this._menuButton.centerY = MARGIN_TOP + PADDING + BUTTON_SIZE + BUTTON_SIZE / 2;
		this._shareButton.centerY = MARGIN_TOP + (PADDING + BUTTON_SIZE) * 2 + BUTTON_SIZE / 2;
		
		this._buttons.push(this._homeButton, this._shareButton, this._menuButton);		
		
		this._stage = null;
		
	};
	
	NavigationHandler.prototype = {
		
		destroy:function(){
			
			this._homeButton = null;
			this._menuButton = null;
			this._shareButton = null;
			
			if(this._stage === null){
				return;
			}
			
			this._stage.removeAllChildren();
			
			this._ch.clear();
			
			this.draw = function(){};
			
		},
		
		activate:function(){
			this.isAactive = true;
		},
		
		inactivate:function(){
			this.isAactive = false;
		},
		
		setButtonColors:function(color){
			
			_.each(this._buttons, _.bind(function(button){
				
				button.colorGoal = color;
				
			}, this));
			
			this.activate();
			
		},
		
		draw:function(e){
			
			if(!this.isAactive){return;}
			
			this.inactivate();
			
			this._ch.clear();

			_.each(this._buttons, _.bind(function(button){
				
				var complete = buttonAnimator(this._ch, button, e.delta);
				
				if(!complete){this.activate();}
				
				var label = button.mc.currentLabel;
				if(label.indexOf('stop') >= 0){
					button.mc.stop();
					button.state = 'stop';
				} else {
					this.activate();				
				}
			}, this));
					
 			this._stage.update(e);
			
		},
		
		putButtons:function(ch){
			
			this._ch = ch
			var canvas = ch.getCanvas();
			
			this._stage = new createjs.Stage(canvas);
			this._stage.clear();
			this._stage.autoClear = false;
			
			_.each(this._buttons, _.bind(function(button){
				this._stage.addChild(button.mc);
			}, this));
			
			this.showHomeButton();
			this.showMenuButton();
			this.showShareButton();
			
		},
		
		showHomeButton:function(){
			
			this._homeButton.mc.gotoAndPlay('start');
			
			this._hitAreaHandler.setHitArea('home', {
				width:BUTTON_SIZE,
				height:BUTTON_SIZE,
				left:PADDING,
				top:MARGIN_TOP
			}, '#index', this._homeButton.onClick);
							
			this.activate();
			
		},
		
		showMenuButton:function(){
			
			this._menuButton.mc.gotoAndPlay('start');

			this._hitAreaHandler.setHitArea('menu', {
				width:BUTTON_SIZE,
				height:BUTTON_SIZE,
				left:PADDING,
				top:MARGIN_TOP + PADDING + BUTTON_SIZE
			}, this._menuButton.onClick);
							
			this.activate();
			
		},
		
		showShareButton:function(){
			
			this._shareButton.mc.gotoAndPlay('start');
			
			this._hitAreaHandler.setHitArea('share', {
				width:BUTTON_SIZE,
				height:BUTTON_SIZE,
				left:PADDING,
				top:MARGIN_TOP + (PADDING + BUTTON_SIZE) * 2
			}, this._shareButton.onClick);
							
			this.activate();
				
		},
		
		hideHomeButton:function(){
			
			this._homeButton.mc.gotoAndPlay('end');
			this._hitAreaHandler.removeHitArea('home');
							
			this.activate();
			
		},
		
		hideMenuButton:function(){
			
			this._menuButton.mc.gotoAndPlay('end');
			this._hitAreaHandler.removeHitArea('menu');
							
			this.activate();
			
		},
		
		hideShareButton:function(){
			
			this._shareButton.mc.gotoAndPlay('end');
			this._hitAreaHandler.removeHitArea('share');
							
			this.activate();
			
		}
		
		
	}
	
})();
