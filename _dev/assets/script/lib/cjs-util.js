var CjsUtil;

(function(){
	
	CjsUtil = {
		
		//options - 
		//	images
		//	manifest
		//	completeListener
		//	progressListener
		'load':function(options, that){
			
			var loader = new createjs.LoadQueue(false);
			
			loader.addEventListener("fileload", function (evt) {	
				if (evt.item.type == "image") { options.images[evt.item.id] = evt.result; }
				if(options.fileloadListener){options.fileloadListener()}
			});
			console.log(options);
			if(options.widgetId){
				loader.addEventListener("complete", _.bind(function(){
					that.vars.root = new gCjsWidgetLib[options.widgetId]();	
					that.vars.stage.addChild(that.vars.root);
					that.vars.stage.autoClear = false;
					that.vars.stage.update();
				}, that));
			} else {
				loader.addEventListener("complete", options.completeListener);
			}
			
			if(options.progressListener){
				loader.addEventListener('progress', options.progressListener);
			}
			
			loader.loadManifest(options.manifest);
				
		}
		
	}

})();