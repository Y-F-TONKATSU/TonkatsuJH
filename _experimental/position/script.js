$(function(){
	
	var ch = new CanvasHandler($('canvas').get(0));
	ch.fitCanvas();
	
	var getAbsPosition = function(elem){
		var scrollTop = $(window).scrollTop();
		var scrollLeft = $(window).scrollLeft();
		var elemTop = $(elem).offset().top;
		var elemLeft = $(elem).offset().left;
		return {
			'left' : elemLeft - scrollLeft,
			'top' : elemTop - scrollTop,
		}
	}	
	
	var playList = [];
	var playBackList = [];
	
	var getActiveElems = function(){
		
		playList = [];
		playBackList = [];
		
		var buffer = 100;
		
		var scrollTop = $(window).scrollTop();
		var scrollBottom = scrollTop + $(window).height();
		$('.log').each(function(){
			var elemTop = $(this).offset().top;
			var elemBottom= elemTop + $(this).height();
			if(scrollTop <= elemTop + buffer &&
			scrollBottom >= elemBottom - buffer){
				playList.push(this);
			} else {
				playBackList.push(this);
			}
		});

	}
	
	$(window).scroll(getActiveElems);
	
	var current = 0;
	var TOTAL_FRAMES = 999;
	
	var isAtStart = function(elem){
		return $(elem).data('frame') <= 0;
	}
	
	var gotoStart = function(elem){
		$(elem).data('frame', 0);
	}
	
	var isAtEnd = function(elem){
		return $(elem).data('frame') >= TOTAL_FRAMES;
	}
	
	var gotoEnd = function(elem){
		$(elem).data('frame', TOTAL_FRAMES);
	}
	
	var playFrame = function(elem, delta){
		var frame = $(elem).data('frame');
		$(elem).data('frame', frame + delta);
	}
	
	var playBackFrame = function(elem, delta){
		var frame = $(elem).data('frame');
		$(elem).data('frame', frame - delta);
	}
	
	var step = function(timestamp) {
		
		ch.clear();
		
		var delta = (timestamp - current);
		
		processAnimationList(playList, isAtEnd, playFrame, gotoEnd, delta);
		processAnimationList(playBackList, isAtStart, playBackFrame, gotoStart, delta);
					
		current = timestamp;
		window.requestAnimationFrame(step);
		
	}
	
	var processAnimationList = function(list, isAtStop, progress, gotoStop, delta){
		
		for(var i = list.length - 1; i >= 0; i--){
				
			var elem = list[i];
			progress(elem, delta);
			
			if(isAtStop(elem)){
				gotoStop(elem);
				//list.splice(i, 1);
			}
			updateElem(elem);
		}

	}
	
	
	var LEFT_MIN = -500;
	var LEFT_MAX = 400;
	
	var updateElem = function(elem){
		var frame = $(elem).data('frame');
		var left = LEFT_MIN + (frame / TOTAL_FRAMES) * (LEFT_MAX - LEFT_MIN);
		var opacity = frame / TOTAL_FRAMES;
		$(elem).css('opacity', opacity)
		.css('left', left);	
		
		var pos = getAbsPosition(elem);
		
		var rnd = Math.random() * 20;
		
		var ctx = ch.getContext();
		ctx.beginPath();
		ctx.moveTo(pos.left + rnd, pos.top + rnd);
		ctx.lineTo(pos.left + $(elem).width() + rnd, pos.top + rnd);
		ctx.lineTo(pos.left + $(elem).width() + rnd, pos.top + $(elem).height() + rnd);
		ctx.lineTo(pos.left + rnd, pos.top + $(elem).height() + rnd);
		ctx.lineTo(pos.left + rnd, pos.top + rnd);
		ctx.stroke();
		
	}
	
	$('.log').each(function(){
		$(this).data('frame', 0);
		updateElem(this);
	});
	
	getActiveElems();
	
	window.requestAnimationFrame(step);
	
});
