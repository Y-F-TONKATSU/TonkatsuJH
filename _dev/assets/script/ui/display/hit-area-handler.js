var HitAreaHandler;

(function(){
	
	var hitAreaIds = [];
	
	HitAreaHandler = function(div){
		if(!div){div = $('#navigation')}
		this.div = div;
	};
	
	HitAreaHandler.prototype = {
		
		setHitArea:function(id, rect, ref, callBack){
			
			if(_.isFunction(ref)){
				callBack = ref;
				ref = '';
			} else {
				ref = ' href="' + ref + '"';
			}
			
			var hitArea = $('<a id="hitArea_' + id + '"' + ref + '></a>');
			
			var objRect = DisplayUtil.getObjectRect(rect);
			
			$(hitArea).css({
				'position':'fixed',
				'width': objRect.width,
				'height': objRect.height,
				'top': objRect.top,
				'left': objRect.left,
				'pointerEvents':'auto',
				'cursor':'pointer'
			});
			
			$(hitArea).click(callBack);
			
			$(this.div).append(hitArea);
			
			hitAreaIds.push(id);
					
		},
		
		removeHitArea:function(id){
			
			$('#hitArea_' + id).remove();
			
		}
	}

})();
