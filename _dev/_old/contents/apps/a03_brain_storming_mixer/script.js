Tonkatsu.Contents.Apps.BrainStormingMixer = function (stage, mc){
	
	var _mc = mc;
	var _stage = stage;
	
	var getX= function(val){
		
		return val * $gm.getWidth() / $gm.getFlashWidth();
		
	}
	
	var getY= function(val){
		
		return val * $gm.getHeight() / $gm.getFlashHeight();
		
	}
	
	createjs.Ticker.addEventListener("tick", stage);
	
	_mc.addEventListener("tick", function(e){
		var label = mc.timeline.getCurrentLabel();
		
		if(label == "before_stop"){
			
			_stage.enableMouseOver(10);
			
			_mc.shuffleButton.addEventListener("click", function(e){
				mc.gotoAndPlay("shuffle");
			});
			
			_mc.shuffleButton.addEventListener("mouseover", function(e){
                e.target.cursor = 'pointer' 
			});
		}
		
	})
	
	var kill = function(){
	
	}
	
};
