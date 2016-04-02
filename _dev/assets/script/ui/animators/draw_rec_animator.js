var DRAW_REC_ANIMATOR = function(fg, bg, div, frame, baseLeft, baseTop){
	
	if(!fg){
		console.log('!!! Canvas is undefined!');
		return false;	
	}
	
	var TOTAL_FRAMES = 100;
	
	var fctx = fg.getContext();
	var progress = (frame / TOTAL_FRAMES);
	var position = $(div).position();
	
	var width =  $(div).width();
	var height =  $(div).height();
	
	var left = position.left + parseInt($(div).css('marginLeft'), 10);
	var right = left + width;
	var top = position.top + parseInt($(div).css('marginTop'), 10);
	var bottom = top + height;
	
	fctx.beginPath();
	fctx.moveTo(left, top);
	fctx.lineTo(
		left + width * progress,
		top
	);
	fctx.moveTo(right, top);
	fctx.lineTo(
		right,
		top + height * progress
	);
	fctx.moveTo(right, bottom);
	fctx.lineTo(
		right - width * progress,
		bottom
	);
	fctx.stroke();
	fctx.moveTo(left, bottom);
	fctx.lineTo(
		left,
		bottom - height * progress
	);
	fctx.stroke();
	
	return frame < TOTAL_FRAMES;
		
}
