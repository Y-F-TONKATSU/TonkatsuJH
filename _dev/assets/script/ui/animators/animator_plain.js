if(!Animators){var Animators = {};}

Animators.plain = {
	
	'scriptStream_init':function(){
		
		$.ajax({
			'url': 'assets/text/script-stream.txt',
			'dataType':'text',
		}).done(_.bind(function(result) {
			
			this.vars.text = result.toString();
			
		}, this));
		
	},
	
	'scriptStream':function(e, doc){
		
		if(this.vars.text){
			var text = this.vars.text.substring(this.vars.scroll, this.vars.scroll+10000);
			$(doc).text(text);
		}
				
	},
	
}