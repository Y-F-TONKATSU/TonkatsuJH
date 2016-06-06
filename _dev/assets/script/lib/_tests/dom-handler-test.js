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
				
		test('InitElems()', function() {
			
			var main = $('#main');
			var sub = $('#sub1, #sub2');
			
			DisplayUtil.setStageRect(main);
			$(main).css({
				'position':'fixed',
				'backgroundColor':'yellow',
				'opacity':0.2
			});
			
			$(sub).css({
				'position':'fixed',
				'backgroundColor':'red',
				'opacity':0.8
			});
			
			dh.initElems($('.autoInit'));
			
		});
				
	});
	
	$(function(){
		
		mocha.run();
		$(window).resize(function(){
			location.reload();
		})
		
	});
	
}();