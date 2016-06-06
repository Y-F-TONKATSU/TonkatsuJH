var DocAnimator = {
	
	 frameIn:{
		
		'fromLeft':function(elem, duration, callBack){
			
			var left = DisplayUtil.getElemRect(elem).left;
			
			$(elem).show().scrollTop(0).css({
				'left': -DisplayUtil.getWidth(),
			}).animate({
				'left': left
			}, duration, callBack)
			.data({
				'state':'visible'
			});
		
		}
	},
	
	frameOut:{
		
		'fromLeft':function(elem, duration, callBack){
			
			var left = DisplayUtil.getElemRect(elem).left;
			
			$(elem).show().scrollTop(0).css({
				'left':left,
			}).animate({
				'left': -DisplayUtil.getWidth()
			}, duration, callBack)
			.data({
				'state':'hidden'
			});
		}
	}
	
};
