var Clock;

(function(){
	
	var _canvas, _context;
	
	var FONT_HEIGHT = 15;
	var NUM_MARGIN = 20;
	var DEFAULT_MARGIN = 40;
	
	var HANDS_LENGTH = {
		'sec': 0.9,
		'min': 0.7,
		'hour': 0.5
	};
	
	var HANDS_COLORS = {
		'sec': 0.9,
		'min': 0.7,
		'hour': 0.5
	};
	
	var REFRESH_RATE = 1000;
	
	Clock = function(canvas, margin){
		
		if(!canvas){
			canvas = $('.canvas').get(0);
		}
		this.setCanvas(canvas);
		
		if(!margin){
			margin = DEFAULT_MARGIN;
		}
		this._margin = margin;
			
	}
	
	Clock.prototype.getCenterX = function(){
		return this.getCanvasWidth() / 2;
	};
	
	Clock.prototype.getCenterY = function(){
		return this.getCanvasHeight() / 2;
	};
	
	Clock.prototype.getCanvas = function(){
		return _canvas;
	}
	
	Clock.prototype.setCanvas = function(val){
		_canvas = val;
		_context = _canvas.getContext('2d');
	}
	
	Clock.prototype.getContext = function(){
		return _context;
	}
	
	Clock.prototype.getCanvasWidth = function(){
		return parseInt($(_canvas).attr('width'));
	}
	
	Clock.prototype.getCanvasHeight = function(){
		return parseInt($(_canvas).attr('height'));
	}
	
	Clock.prototype.getRadius = function(){
		return this.getCanvasWidth() / 2 - this._margin;
	}
	
	Clock.prototype.getHandRadius = function(){
		return this.getRadius() + NUM_MARGIN;
	}
	
	Clock.prototype.clearCanvas = function(){
		_context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight())
	}
	
	Clock.prototype.drawCircle = function(){
		
		_context.beginPath();
		_context.arc(this.getCenterX(), this.getCenterY(), this.getRadius(), 0, Math.PI * 2, true);
		_context.stroke();
	}
	
	Clock.prototype.drawCenterBit = function(){
		
		_context.beginPath();
		_context.arc(this.getCenterX(), this.getCenterY(), this.getRadius() / 10, 0, Math.PI * 2, true);
		_context.fill();
	}
	
	Clock.prototype.getHandLength = function(handType){
		
		return this.getRadius() * HANDS_LENGTH[handType];
		
	}
	
	Clock.prototype.drawNums = function(){
		
		var nums = [];
		for (var i = 0; i < 12; i++){
			nums.push(i + 1);
		}
		
		var that = this;
		var angle = 0;
		var numWidth = 0;
		$(nums).each(function(index, element) {
			angle = Math.PI / 6 * (element - 3);
			numWidth = _context.measureText(element).width;
			var x = that.getCanvasWidth() / 2 + Math.cos(angle) * that.getHandRadius() - numWidth / 2;
			var y = that.getCanvasHeight() / 2 + Math.sin(angle) * that.getHandRadius() + FONT_HEIGHT / 3;
			_context.fillText(element, x, y);
		});
		
	};
	
	Clock.prototype.drawHand = function(handType, dir){
		
		var angle = (Math.PI * 2) * (dir / 60) - Math.PI / 2;
		_context.moveTo(this.getCenterX(), this.getCenterY());
		_context.lineTo(
			this.getCenterX() + Math.cos(angle) * this.getHandLength(handType),
			this.getCenterY() + Math.sin(angle) * this.getHandLength(handType)
		);
		_context.stroke();
		
	};
	
	Clock.prototype.dateToDirection = function(date){
		
		if(!date){return null};
		
		var dir = {
			sec: date.getSeconds(),
			min: date.getMinutes(),
			hour: ((date.getHours() % 12) * 5 + date.getMinutes() / 12)
		}
		
		return dir;
		
	}
	
	Clock.prototype.drawHands = function(date){
		var dir = this.dateToDirection(date);
		this.drawHand('hour', dir.hour);
		this.drawHand('min', dir.min);
		this.drawHand('sec', dir.sec);
	}
	
	Clock.prototype.drawClock = function(){
		var that = this;
		setInterval(function(){
			that.clearCanvas();
			that.drawCircle();
			that.drawNums();
			that.drawCenterBit();
			that.drawHands(new Date());
		}, REFRESH_RATE);
	}
	
})();