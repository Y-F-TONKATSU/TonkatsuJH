$(function(){
	
	var canvas = $('.bgCanvas').get(0);
	var ch = new CanvasHandler(canvas);
	var ctx = ch.getContext();
	
	var timer;
	
	$(canvas).css('zIndex', -1);
	
	ch.fitCanvas();
	
	
	$('p').css({
		'width':'50%',
	});
	
	var border = function(el){
		
		ch.clear();
		
		if(timer){timer.clearInterval();}
		
		var offset = 10000;
		
		timer = setInterval(function(){
			
		
			$(el).each(function(){
				
				var rnd = 0;//Math.random() * 10 - 5;
			
				if(offset === 0){
					rnd = 0;
					timer.clearInterval();
				}
				
				var left = $(this).offset().left + rnd - offset;
				var top = $(this).offset().top - $(window).scrollTop() + rnd - offset;
				var width = $(this).width() + rnd + offset;
				var height = $(this).height() + rnd + offset;
				var right = left + width;
				var bottom = top + height;
				var color = ('black');
				
				box(left, top, right, bottom , color);
				
			});
			
			offset-= 1000;
			
		}, 100);
		
	}
	
	var box = function(left, top, right, bottom , color){
		
		ctx.strokeStyle = color;
		
		ctx.beginPath();
		ctx.moveTo(left, top);
		ctx.lineTo(left, bottom);
		ctx.lineTo(right, bottom);
		ctx.lineTo(right, top);
		ctx.closePath();
		ctx.stroke();
			
	}
	
	border($('p'));
	
	
	$(window).scroll(function(){
		border($('p'));
	});
	
});
