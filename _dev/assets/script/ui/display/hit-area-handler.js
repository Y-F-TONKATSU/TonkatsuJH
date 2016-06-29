var HitAreaHandler;

(function(){
	
	var hitAreaIds = [];
	
	HitAreaHandler = function(div){
		if(!div){div = $('#navigation')}
		this.div = div;
	};
	
	HitAreaHandler.prototype = {
		
		setEventHitArea:function(id, rect, ref, callBack){
			this.setHitArea(id, rect, ref, callBack, true);
		},
		
		setHitArea:function(id, rect, ref, callBack, isEvent){
			
			var hitArea;
			
			if(_.isFunction(ref)){
				callBack = ref;
				ref = '';
				hitArea = $('<a id="hitArea_' + id + '"' + ref + '></a>');
			} else if(_.isObject(ref)){
				hitArea = ref;
				$(hitArea).attr('id', 'hitArea_' + id);
			} else {
				ref = ' href="' + ref + '"';
				hitArea = $('<a id="hitArea_' + id + '"' + ref + '></a>');
				if(ref.indexOf('http') === 7){
					$(hitArea).attr('target', '_blank')
				}
			}
			
			if(isEvent){
				$(hitArea).addClass('eventHitArea');
			}
			
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
			
			if(callBack){
				$(hitArea).click(callBack);
			}
			
			$(this.div).append(hitArea);
			
			hitAreaIds.push(id);
					
		},
		
		removeHitArea:function(id){
			
			$('#hitArea_' + id).remove();
			
		},
		
		getHitArea:function(id){
			
			return $('#hitArea_' + id);
			
		}
	}

})();
