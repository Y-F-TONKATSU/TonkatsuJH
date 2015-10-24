var CompositionManager;

(function(){
	
	var SIDE_BAR_RATIO = 100 * 3 / 16;
	var MAIN_RATIO = 100 - SIDE_BAR_RATIO;
	
	var _elements = {
		'foreground':'',
		'main':'',
		'sidebar':'',
		'background':''
	};
	
	CompositionManager = function(){
		
	};
	
	CompositionManager.prototype.setElement = function(role, el){
		
		_elements[role] = el;
		
	};
		
	CompositionManager.prototype.getElement = function(role){
		
		if(_elements[role]){
			return _elements[role];
		} else {
			return _elements;
		}
		
	};
		
	CompositionManager.prototype.initElements = function(){
		
		/*
		$(_elements.background)
		.add(_elements.foreground)
		.css({
			'width':'100%',
			'height':'100%',
			'pointerEvents':'none'
		})
		.add(_elements.main)
		.add(_elements.sidebar)
		.css({
			'position':'absolute'
		});
		*/
	};
		
	CompositionManager.prototype.compose = function(orientation, size){
		
		console.log(orientation, size);
		
		if(orientation === 'landscape'){
			
			$(_elements.main).css({
				width:MAIN_RATIO + '%',
				height:'100%',
				top:'0%',
				left:SIDE_BAR_RATIO + '%',
			});
			
			$(_elements.sidebar).css({
				width:SIDE_BAR_RATIO + '%',
				height:'100%',
				top:'0%',
				left:'0%'
			});
			
		} else if(orientation === 'portrait'){
			
			$(_elements.main).css({
				width:'100%',
				height:MAIN_RATIO + '%',
				top:'0%',
				left:'0%'
			});
			
			$(_elements.sidebar).css({
				width:'100%',
				height:SIDE_BAR_RATIO + '%',
				top:MAIN_RATIO + '%',
				left:'0%'
			});
			
		}
		
	};
		
})();