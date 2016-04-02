var testMainDoc = function(){
	
	mochaSetup();
	
	suite('MainDoc', function() {
		
		var md;
		
		setup(function(){
			md = new MainDoc();
		});
		
		test('MainDoc()', function() {
			assert.strictEqual('function', typeof MainDoc, 'コンストラクタ関数 MainDoc() が存在する。');
		});
				
		test('getActiveElems()', function() {
			assert.strictEqual(3, md.getActiveElems().length, 'アクティブな要素の数が取得できる');
		});
				
	});
	
	$(function(){
		
		mocha.run();
		$(window).resize(function(){
			location.reload();
		})
		
	});
	
}();