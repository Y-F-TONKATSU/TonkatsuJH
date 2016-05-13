var testBackgroundHandler = function(){
	
	mochaSetup();
	
	suite('BackgroundHandler', function() {
		
		var bm;
		
		setup(function(){
			bm = new BackgroundHandler($('#front'), $('#back'));
		});
		
		test('BackgroundHandler(front, back)', function() {
			assert.strictEqual('function', typeof BackgroundHandler, 'コンストラクタ関数 BackgroundHandler() が存在する。');
		});
						
						
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();