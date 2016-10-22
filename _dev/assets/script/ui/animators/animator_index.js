if(!Animators){var Animators = {};}
	
(function(){
	
	var ORIGIN_X = 384;
	var ORIGIN_Y = 240;
	
	Branch = function(parent, level){
		if(parent){
			this.parent = parent;
		} else {
			this.x = ORIGIN_X;
			this.y = ORIGIN_Y;
		}
		this.rotation = Math.random() * Math.PI * 2;
		this.rotationSpeed = Math.floor(Math.random() * 200 - 100) / 10000
		this.branchList = [];
		this.level = level;
		if(level > 0){
			for (var i = 0; i < level; i++){
				this.branchList.push(new Branch(this, level - 1));
			}
		}
	};
	
	Branch.prototype = {
		'draw':function(ch, ctx, image, grow){
			
			ctx.save();
			
			ch.setStrokeStyle(255, 255, 255, 1);
			ch.setWidth(0.3);
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.getDx(), this.getDy());
			ctx.stroke();
			if(image){
				var sizeX = 37 * (this.level + 1) * 0.4 * grow;
				var sizeY = 53 * (this.level + 1) * 0.4 * grow;
				ctx.save();
				ctx.translate(this.getDx(), this.getDy());
				ctx.rotate(Math.PI * 2 * this.rotation);
				ctx.drawImage(image, -sizeX * 0.5, -sizeY * 0.5, sizeX, sizeY);
				ctx.restore();
			} else {
				ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
			}
			
			ctx.restore();
			
			_.each(this.branchList, function(branch){
				branch.draw(ch, ctx, image, grow);
			});
		},
		
		'getDx':function(){
			return this.x + 100 * Math.cos(this.rotation);
		},
		
		'getDy':function(){
			return this.y + 100 * Math.sin(this.rotation);
		},
		
		'update':function(delta){
			
			this.rotation += this.rotationSpeed;
			
			if(this.parent){
				this.x = this.parent.getDx();
				this.y = this.parent.getDy();	
			} else {
				//this.x += Math.floor(Math.random() * 100 - 50) / 100;
				//this.y += Math.floor(Math.random() * 100 - 50) / 100;
			}
			
			_.each(this.branchList, function(branch){
				branch.update(delta);
			});
			
		}
				
	};
	
	var IndexAnt = function(ch, pos){
		
		this._ch = ch;
		
		this._pos = pos	;
		
		var vx = Math.random();
		var vy = 1 - Math.random();
		if(Math.random() > 0.5){vx = -vx;}
		if(Math.random() > 0.5){vy = -vy;}
		this._vector = {
			'x':vx,
			'y':vy
		};
		
		this._r = Math.floor(Math.random() * 255);
		this._g = Math.floor(Math.random() * 255);
		this._b = Math.floor(Math.random() * 255);
		this._rc = 1;
		this._gc = 1;
		this._bc = 1;
		
		this._speed = Math.random() * 2 + 1;
		this._stamina = Math.floor(Math.random() * 120) + 120;
	};
	
	IndexAnt.prototype = {
		
		'update':function(){
			
			this._pos.x += this._vector.x * (Math.random() * this._speed + this._speed * 0.5);
			this._pos.y += this._vector.y * (Math.random() * this._speed + this._speed * 0.5);
			
			if(this._r > 250){
				this._rc = -3;
			}
			if(this._g > 250){
				this._gc = -3;
			}
			if(this._b > 250){
				this._bc = -3;
			}
			
			if(this._r < 10){
				this._rc = 3;
			}
			if(this._g < 10){
				this._gc = 3;
			}
			if(this._b < 10){
				this._bc = 3;
			}
			
			this._r += this._rc;
			this._g += this._gc;
			this._b += this._bc;
			
			var ch = this._ch;
			
			ch.setFillStyle(this._r, this._g, this._b, 1);
			ch.drawShape(_.bind(function(ctx){
				ctx.arc(this._pos.x, this._pos.y, 3, 0, Math.PI * 2);
			}, this), false, true);
			
			this._stamina -=1;
			
		},
		
		'isDead':function(){
			
			return this._stamina <= 0;
			
		},
		
	};
	
	var IndexDot = function(ch, pos){
		
		this._ch = ch;
		this._pos = pos;
		
	}
	
	IndexDot.prototype = {
		
		'update':function(){
			
			this._pos.x += Math.random() * 2 - 1;
			this._pos.y += Math.random() * 2 - 1;
			
			this._ch.setFillStyle(255, 255, 0, 1);
			this._ch.drawShape(_.bind(function(ctx){
				ctx.arc(this._pos.x, this._pos.y, 3, 0, Math.PI * 2);
			}, this), false, true);
			
		},
		
	};
	
	Animators.index = {
		
		'default':function(){
		},
		
		'nobuteru':function(e){
			
			var ctx = this.ch.getContext();
				
			if(!this.vars.tree){
				
				var max = 5;
				if(DisplayUtil.getSize() !== 'large'){
					max = 3;
				}
				
				this.vars = {
					'imageLoaded':false,
					'image':new Image(),
					'tree': new Branch(null, max),
					'MAX_BRANCH':max,
					'grow':0
				};
				this.vars.image.src = 'contents/experimental/1604/e000019_crouton/images/face.png';
				this.vars.image.onload = _.bind(function(){
					this.vars.imageLoaded = true;
				}, this);
			}
			
			this.vars.tree.update(e.delta);
			if(this.vars.imageLoaded){
				if(this.vars.grow < 1){
					this.vars.grow += 0.001;
				}
				this.vars.tree.draw(this.ch, ctx, this.vars.image, this.vars.grow);		
			} else {
				this.vars.tree.draw(this.ch, ctx);		
			}
			
		},
			
		'nobuteru_fore_init':function(e){
			
			this.vars.stage = new createjs.Stage(this.ch.getCanvas());
			
			CjsUtil.load({
				'images':gCjsWidgetImages,
				'manifest':	[
					{src:"assets/images/thumb/ex000019.png", id:"widget_crouton"},
				],
				'completeListener':_.bind(function(){
					this.vars.root = new gCjsWidgetLib.Nobuteru();	
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update();
				}, this)
			});
			
		},
		
		'nobuteru_fore':function(e){
			
			if(this.vars.root){
				if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
					this.vars.root.stop();
				}
				this.vars.stage.update(e);
			}
			
		},
		
		'ex000020_init':function(e){
			
			this.vars.ants = [];
			
		},
		
		'ex000020':function(e){
			
			if(Math.random() > 0.8){
				this.vars.ants.push(new IndexAnt(this.ch, {
					'x':this.ch.getCanvasWidth() * 0.5, 
					'y':this.ch.getCanvasHeight() * 0.5
				}));
			}
			
			_.each(this.vars.ants, function(ant){
				ant.update();
			});
			
			this.vars.ants = _.reject(this.vars.ants, function(ant){
				return ant.isDead();
			});
			
		},
			
		'ex000020_fore_init':function(e){
			
			this.vars.stage = new createjs.Stage(this.ch.getCanvas());
			
			CjsUtil.load({
				'images':gCjsWidgetImages,
				'manifest':	[
					{src:"assets/images/thumb/ex000020.png", id:"ex000020"},
				],
				'completeListener':_.bind(function(){
					this.vars.root = new gCjsWidgetLib.Ex000020();	
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update();
				}, this)
			});
			
		},
		
		'ex000020_fore':function(e){
			
			if(this.vars.root){
				if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
					this.vars.root.stop();
				}
				this.vars.stage.update(e);
			}
			
		},
		
		'w000001_fore':function(e){
			
			if(this.vars.root){
				if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
					this.vars.root.stop();
				}
				this.vars.stage.update(e);
			}
			
		},
		
		'w000002_fore':function(e){
			
			if(this.vars.root){
				if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
					this.vars.root.stop();
				}
				this.vars.stage.update(e);
			}
			
		},
		
		'w000001_fore_init':function(e){
			
			this.vars.stage = new createjs.Stage(this.ch.getCanvas());
			
			CjsUtil.load({
				'images':gCjsWidgetImages,
				'manifest':	[
					{src:"assets/images/thumb/tech.png", id:"tech"},
				],
				'completeListener':_.bind(function(){
					this.vars.root = new gCjsWidgetLib.w000001();	
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update();
				}, this)
			});
			
		},
		
		'w000002_fore_init':function(e){
			
			this.vars.stage = new createjs.Stage(this.ch.getCanvas());
			
			CjsUtil.load({
				'images':gCjsWidgetImages,
				'manifest':	[
					{src:"assets/images/thumb/w000002.png", id:"thumb_w000002"},
				],
				'completeListener':_.bind(function(){
					this.vars.root = new gCjsWidgetLib.w000002();	
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update();
				}, this)
			});
			
		},
		
		'ex000021_init':function(e){
			
			this.vars.dots = [];
			
			_.times(20, _.bind(function(){
				this.vars.dots.push(new IndexDot(this.ch, {
					'x':this.ch.getCanvasWidth() * Math.random(), 
					'y':this.ch.getCanvasHeight() * Math.random()
				}));
			}, this));
			
		},
		
		'ex000021':function(e){
			
			_.each(this.vars.dots, function(dot){
				dot.update();
			});
			
		},
			
		'ex000021_fore':function(e){
			
			if(this.vars.root){
				if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
					this.vars.root.stop();
				}
				this.vars.stage.update(e);
			}
			
		},
		
		'ex000021_fore_init':function(e){
			
			this.vars.stage = new createjs.Stage(this.ch.getCanvas());
			
			CjsUtil.load({
				'images':gCjsWidgetImages,
				'manifest':	[
					{src:"assets/images/thumb/ex000021.png", id:"ex000021"},
				],
				'completeListener':_.bind(function(){
					this.vars.root = new gCjsWidgetLib.Ex000021();	
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update();
				}, this)
			});
			
		},
		
		'ex000022_init':function(e){
			
			this.vars.dots = [];
			
			_.times(20, _.bind(function(){
				this.vars.dots.push(new IndexDot(this.ch, {
					'x':this.ch.getCanvasWidth() * Math.random(), 
					'y':this.ch.getCanvasHeight() * Math.random()
				}));
			}, this));
			
		},
		
		'ex000022':function(e){
			
			_.each(this.vars.dots, function(dot){
				dot.update();
			});
			
		},
			
		'ex000022_fore':function(e){
			
			if(this.vars.root){
				if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
					this.vars.root.stop();
				}
				this.vars.stage.update(e);
			}
			
		},
		
		'ex000022_fore_init':function(e){
			
			this.vars.stage = new createjs.Stage(this.ch.getCanvas());
			
			CjsUtil.load({
				'images':gCjsWidgetImages,
				'manifest':	[
					{src:"assets/images/thumb/ex000022.png", id:"ex000022"},
				],
				'completeListener':_.bind(function(){
					this.vars.root = new gCjsWidgetLib.Ex000022();	
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update();
				}, this)
			});
			
		},
		
		'main':function(){
						
		},
		
		'main_fore_init':function(e){
			
			this.vars.stage = new createjs.Stage(this.ch.getCanvas());
			
			CjsUtil.load({
				'images':gCjsNavigationImages,
				'manifest':	[
					{src:"assets/images/index_bg/lw.png", id:"lw"}
				],
				'completeListener':_.bind(function(){
					if($('#indexMainTitle').data('complete') === 'true'){
						this.vars.root = new gCjsNavigationLib.Tunnel_fore_complete();	
					} else {
						this.vars.root = new gCjsNavigationLib.Tunnel_fore();	
					}
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update(e);
				}, this)
			});
			
		},
		
		'main_fore':function(e){
			
			if(this.vars.root){
				if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
					this.vars.root.stop();
				}
				$('#indexMainTitle').data('complete', 'true');
				this.vars.stage.update(e);
			}
									
		},
			
	};
	
})();