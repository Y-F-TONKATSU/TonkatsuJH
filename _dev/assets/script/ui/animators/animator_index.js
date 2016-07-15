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
	
	Animators.index = {
		
		'default':function(){
		},
		
		'nobuteru':function(){
			
			var ctx = this.ch.getContext();
				
			if(!this.vars.tree){
				console.log('init');
				this.vars = {
					'imageLoaded':false,
					'image':new Image(),
					'tree': new Branch(null, 5),
					'MAX_BRANCH':4,
					'grow':0
				};
				this.vars.image.src = 'contents/experimental/1604/e000019_crouton/images/face.png';
				this.vars.image.onload = _.bind(function(){
					this.vars.imageLoaded = true;
				}, this);
			}
			
			this.vars.tree.update();
			if(this.vars.imageLoaded){
				if(this.vars.grow < 1){
					this.vars.grow += 0.001;
				}
				this.vars.tree.draw(this.ch, ctx, this.vars.image, this.vars.grow);		
			} else {
				this.vars.tree.draw(this.ch, ctx);		
			}
			
		},
			
		'nobuteru_fore':function(){
			
			if(!this.vars.stage){
				
				this.vars.stage = new createjs.Stage(this.ch.getCanvas());
				
				var loader = new createjs.LoadQueue(false);
				
				loader.addEventListener("fileload", function (evt) {	
					if (evt.item.type == "image") { cjsWidgetImages[evt.item.id] = evt.result; }	
				});
				
				loader.addEventListener("complete", _.bind(function(){
					this.vars.root = new cjsWidgetLib.widget();	
					this.vars.stage.addChild(this.vars.root);
					this.vars.stage.autoClear = false;
					this.vars.stage.update();
				}, this));
				
				loader.loadManifest( [
					{src:"assets/images/widget/widget_crouton.png?1467622305148", id:"widget_crouton"}
				]);
				
			} else {
				
				if(this.vars.root){
					if(this.vars.root.currentFrame === this.vars.root.totalFrames - 1){
						this.vars.root.stop();
					}
					this.vars.stage.update();
				}
									
				
			}
			
		},
			
	};
	
})();