var testShareUtil = function(){
	
	mochaSetup();
	
	suite('ShareUtil', function() {
		
		setup(function(){
		});
		
		test("Twitter", function() {
			var tw = ShareUtil.getTweetTag('http://ton-katsu.net/', 'Title');
			$('#share').append(tw);
			var tw2 = ShareUtil.getTweetTag('http://ton-katsu.net/', 'Title2');
			$('#share').append(tw2);
			ShareUtil.render();
		});
		
		test("Facebook", function() {
			var fb = ShareUtil.getFbLikeTag('http://ton-katsu.net/', 'Title');
			$('#share').append(fb);
			var fb2 = ShareUtil.getFbLikeTag('http://ton-katsu.net/', 'Title');
			$('#share').append(fb2);
			ShareUtil.render();
		});
		
		test("GooglePlus", function() {
			var gp = ShareUtil.getGooglePlusTag('http://ton-katsu.net/');
			$('#share').append(gp);
			var gp2 = ShareUtil.getGooglePlusTag('http://ton-katsu.net/');
			$('#share').append(gp2);
			ShareUtil.render();
		});
		
		test("HatenaDiary", function() {
			var hd = ShareUtil.getHatenaTag('http://ton-katsu.net/', 'Title');
			$('#share').append(hd);
			var hd2 = ShareUtil.getHatenaTag('http://ton-katsu.net/', 'Title2');
			$('#share').append(hd2);
			ShareUtil.render();
		});
		
				
	});
	
	$(function(){
		
		ShareUtil.init();
		
		mocha.run();
		
	})
	
}();