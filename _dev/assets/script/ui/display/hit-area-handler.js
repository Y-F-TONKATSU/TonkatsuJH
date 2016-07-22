var HitAreaHandler;

(function(){
	
	HitAreaHandler = function(div){
		if(!div){div = $('#navigation')}
		this.div = div;
	};
	
	HitAreaHandler.prototype = {
		
		setEventHitArea:function(class, rect, ref, callBack){
			this.setHitArea(class, rect, ref, callBack, true);
		},
		
		setHitArea:function(class, rect, ref, callBack, isEvent){
			
			var hitArea;
			
			if(_.isFunction(ref)){
				callBack = ref;
				ref = '';
				hitArea = $('<a class="hitArea_' + class + '"' + ref + '></a>');
			} else if(_.isObject(ref)){
				hitArea = ref;
				$(hitArea).attr('class', 'hitArea_' + class);
			} else {
				ref = ' href="' + ref + '"';
				hitArea = $('<a class="hitArea_' + class + '"' + ref + '></a>');
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
			
		},
		
		removeHitArea:function(class){
			
			$('.hitArea_' + class).remove();
			
		},
		
		getHitArea:function(class){
			
			return $('.hitArea_' + class);
			
		}
	}

})();
