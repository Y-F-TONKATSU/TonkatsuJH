var testAnimationHandler = function(){
	
	mochaSetup();
	
	suite('AnimationHandler', function() {
		
		var ah;
		
		setup(function(){
			
			$('#fore, #back').empty();
			
			ah = new AnimationHandler({
				'fore':$('#fore'),
				'back':$('#back'),
			});
			
		});
		
		test('AnimationHandler()', function() {
			assert(_.isFunction(AnimationHandler), 'コンストラクタ関数 AnimationHandler() が存在する。');
		});
						
		test('_getNewCanvasHandler()', function() {
			
			var ch = ah._getNewCanvasHandler('fore', 'foreTest');
			
			assert.strictEqual(1, $('#fore').find('canvas').length, 'フォアグラウンドに Canvas を作成した。');
			
			var ch2 = ah._getNewCanvasHandler('back', 'backTest');
			
			assert.strictEqual(1, $('#back').find('canvas').length, 'バックグラウンドに Canvas を作成した。');
			
			assert.strictEqual(DisplayUtil.RATIO_X, parseInt($('#fore').find('canvas').attr('width')), 'Canvas の横解像度がステージの横解像度に等しい');
			assert.strictEqual(DisplayUtil.RATIO_Y, parseInt($('#fore').find('canvas').attr('height')), 'Canvas の縦解像度がステージの縦解像度に等しい');
			assert(ch instanceof CanvasHandler, 'CanvasHandler が返される');
			
			var canvas = ch.getCanvas();
			
			assert.strictEqual($('#fore').find('canvas').get(0), canvas, 'CanvasHandler に作成された canvas がセットされている');
			assert.strictEqual('foreTest', $(canvas).attr('id'), 'Canvas に指定した id がセットされている');
			
			
		});
						
		test('addTask()', function() {
			
			var ch = ah._getNewCanvasHandler('fore', 'foreTest');
			
			ah.init();
			
						
		});
						
						
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();