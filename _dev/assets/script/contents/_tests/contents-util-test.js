var testContentsUtil = function(){
	
	mochaSetup();
	
	suite('ContentsUtil', function() {
		
		setup(function(){
		});
		
		test('ContentsUtil()', function() {
			assert(_.isObject(ContentsUtil), 'オブジェクト ContentsUtil が存在する。');
		});
		
		test('getWidget()', function() {
			var el = ContentsUtil.getWidget('experimental000019');
			assert.strictEqual('クルトンの作り方', $(el).find('.widget_title').text(), 'ウィジェットを取得した');
			var el2 = ContentsUtil.getWidget({
				'category':'experimental',
				'id':'000019'
			});
			assert.strictEqual('クルトンの作り方', $(el2).find('.widget_title').text(), 'オブジェクトを渡してウィジェットを取得した');
		});
		
		test('getTitle()', function() {
			var title = ContentsUtil.getTitle('experimental000019');
			assert.strictEqual('クルトンの作り方', title, 'タイトルを取得した');
		});
		
		test('getUrl()', function() {
			var url = ContentsUtil.getUrl('experimental000019');
			assert.strictEqual('contents/experimental/1604/e000019_crouton/main.html', url, 'URL を取得した');
		});
		
		test('getRandomAphorism()', function() {
			$('#aphorism').append(ContentsUtil.getRandomAphorism());
		});
		
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();