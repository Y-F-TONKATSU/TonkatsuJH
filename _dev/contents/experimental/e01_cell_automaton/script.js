Tonkatsu.Contents.Experimental.CellAutomaton = function (){
	
	trace("Start Cell Automaton Cont!");
	
	var _doc = $("#cont .experimental");
	var _cellContainer = $(_doc).find("#screen");
	var _startButton = $(_doc).find("#startButton");
		
	
	var _cellState = {};
	var _cellList = {};
	
	var _timer;
	
	var CELL_SIZE = 5;
	var CELL_NUM_X = 48;
	var CELL_NUM_Y = 27;
	
	var COLOR_LIVE = "black";
	var COLOR_DIE = "white";
	var COLOR_LIST = [COLOR_DIE, COLOR_LIVE];
	var REFRESH_RATE = 1000;
	
	var init = function(){
				
		$(_cellContainer).empty();
		
		for (var x = 0; x < CELL_NUM_X; x++){
			
			for (var y = 0; y < CELL_NUM_Y; y++){
				
				_cellState[x + "-" + y] = Math.floor(Math.random() * 2);
				
				var newCell = $("<div class='cell'></cell>").css({
					"position":"absolute",
					"width":CELL_SIZE + "px",
					"height":CELL_SIZE + "px",
					"left": x * CELL_SIZE + "px",
					"top": y * CELL_SIZE + "px",
					"backgroundColor":COLOR_LIST[_cellState[x + "-" + y]],
				})
				.appendTo(_cellContainer);
				
				_cellList[x + "-" + y] = newCell;
				
			}
			
		}
		
	};
		
	var nextState = function(){
		
		var next = {};
		
		var cells = $(_doc).find("#screen");
		
		for (var x = 0; x < CELL_NUM_X; x++){
			
			for (var y = 0; y < CELL_NUM_Y; y++){
				
				next[x + "-" + y] = getNextCellState(x, y);
				
				$(_cellList[x + "-" + y]).css({
					"backgroundColor":COLOR_LIST[next[x + "-" + y]],
				});
				
			}
			
		}
		
		_cellState = next;
		
	}
	
	var getNextCellState = function(x, y){
		
		var current = _cellState[x + "-" + y];
		
		var liveCells = 0;
		
		if(y > 0){
			liveCells += _cellState[x + "-" + (y - 1)];
			if(x > 0){liveCells += _cellState[(x - 1) + "-" + (y - 1)];}
			if(x < CELL_NUM_X - 1){liveCells += _cellState[(x + 1) + "-" + (y - 1)];}
		}
		if(y < CELL_NUM_Y - 1){
			liveCells += _cellState[x + "-" + (y + 1)];
			if(x > 0){liveCells += _cellState[(x - 1) + "-" + (y + 1)];}
			if(x < CELL_NUM_X - 1){liveCells += _cellState[(x + 1) + "-" + (y + 1)];}
		}
		if(x > 0){liveCells += _cellState[(x - 1) + "-" + y];}
		if(x < CELL_NUM_X - 1){liveCells += _cellState[(x + 1) + "-" + y];}
		
		if(liveCells == 3 || (current == 1 && liveCells == 2)){
			return 1;
		} else {
			return 0;
		}
		
	}
	
	var play = function(){
		
		init();
		
		if(_timer) _timer.clearInterval();
		_timer = setInterval(nextState, REFRESH_RATE);
		
	};
	
	var setCss = function(){
		
		$(_doc).css({
			"backgroundColor":"gray",
		}).find("h2").css({
			"text-align":"center",
		});
		
		var w = CELL_SIZE * CELL_NUM_X;
		var h = CELL_SIZE * CELL_NUM_Y;
		
		$(_cellContainer)
		.css({
			"position":"relative",
			"margin":"0 auto",
			"width":w + "px",
			"height":h + "px",
			"backgroundColor":COLOR_LIVE,
		});
		
		$(_startButton)
		.css({
			"position":"relative",
			"margin":"0 auto",
			"width":"30%",
			"padding":"1px 8px",
			"borderRadius":"5px",
			"box-shadow":"0px 0px 10px #c3e1ff",
			"backgroundColor":"white",
			"fondSize":"140%",
			"cursor":"pointer",
			"text-align":"center",
		});
		
	}
	
	var starter = function(){
		
		setCss();
		
		$(_startButton).click(play);
		
	}();
	
}();