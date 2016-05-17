var testDomHandler = function(){
	
	mochaSetup();
	
	suite('DomHandler', function() {
		
		var dh;
		
		setup(function(){
			dh = new DomHandler();
		});
		
		test('DomHandler()', function() {
			assert.strictEqual('function', typeof DomHandler, 'コンストラクタ関数 DomHandler() が存在する。');
		});
				
	});
	
	$(function(){
		
		mocha.run();
		$(window).resize(function(){
			location.reload();
		})
		
	});
	
}();