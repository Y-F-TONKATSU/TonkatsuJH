var DRAW_REC_ANIMATOR = function(fg, bg, progress, div){
	
	if(!fg){
		console.log('!!! Canvas is undefined!');
		return false;	
	}
	
	var rect = domUtil.getScreenRect(div);
	
	var fctx = fg.getContext();
	
	fctx.beginPath();
	fctx.moveTo(rect.left, rect.top);
	fctx.lineTo(
		rect.left + rect.width * progress,
		rect.top
	);
	fctx.stroke();
	fctx.moveTo(rect.right, rect.top);
	fctx.lineTo(
		rect.right,
		rect.top + rect.height * progress
	);
	fctx.stroke();
	fctx.moveTo(rect.right, rect.bottom);
	fctx.lineTo(
		rect.right - rect.width * progress,
		rect.bottom
	);
	fctx.stroke();
	fctx.moveTo(rect.left, rect.bottom);
	fctx.lineTo(
		rect.left,
		rect.bottom - rect.height * progress
	);
	fctx.stroke();
	
}

