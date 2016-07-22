var CjsUtil;

(function(){
	
	CjsUtil = {
		
		//options - 
		//	images
		//	manifest
		//	completeListener
		//	progressListener
		'load':function(options){
			
			var loader = new createjs.LoadQueue(false);
			
			loader.addEventListener("fileload", function (evt) {	
				if (evt.item.type == "image") { options.images[evt.item.id] = evt.result; }
				if(options.fileloadListener){options.fileloadListener()}
			});
			
			loader.addEventListener("complete", options.completeListener);
			
			if(options.progressListener){
				loader.addEventListener('progress', options.progressListener);
			}
			
			loader.loadManifest(options.manifest);
				
		}
		
	}

})();