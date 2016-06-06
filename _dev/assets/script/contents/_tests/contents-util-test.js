var testContentsManager = function(){
	
	mochaSetup();
	
	suite('ContentsManager', function() {
		
		var cm;
		
		setup(function(){
			cm = new ContentsManager();
		});
		
		test('ContentsManager()', function() {
			assert.strictEqual('function', typeof ContentsManager, 'コンストラクタ関数 ContentsManager() が存在する。');
		});
		
		test('getWidget()', function() {
			assert.strictEqual('CSS Tips - z-index 等 CSS のハマりやすい罠のまとめ',
			$(cm.getWidget('writing000001')).find('.widget_title').text(), 'ハッシュ writing000001 のウィジェットを取得できる');
			assert.strictEqual(18,
			$(cm.getWidget('experimental')).length, '複数のウィジェットを取得できる');
		});
		
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();