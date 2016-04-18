Animators.CJS_ANIMATOR = function(fg, bg, progress, div){
	
	if(!fg){
		console.log('!!! Canvas is undefined!');
		return false;	
	}
	
	var scene = $(div).attr('data-cjs-scene');
	console.log('Current CJS Scene is:' + scene);
		
}

