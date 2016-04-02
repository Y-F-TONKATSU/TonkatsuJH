var testDisplayHandler = function(){
	
	mochaSetup();
	
	suite('DisplayHandler', function() {
		
		var dh;
		
		setup(function(){
			dh = new DisplayHandler();
		});
		
		test('DisplayHandler()', function() {
			assert.strictEqual('function', typeof DisplayHandler, 'コンストラクタ関数 DisplayHandler() が存在する。');
		});
		
		test('getWidth()/getHeight()', function() {
			$('#width').text(dh.getWidth())
			$('#height').text(dh.getHeight())
		});
		
		test('getOrientation()', function() {
			if(dh.getWidth() >= dh.getHeight()){
				assert.strictEqual('landscape', dh.getOrientation(), '横向き');
				$('#orientation').text('横向き');
			} else {
				assert.strictEqual('portrait', dh.getOrientation(), '縦向き');
				$('#orientation').text('縦向き');
			}

		});
		
		test('getSize()', function() {
			
			if(dh.getOrientation() === 'landscape'){
				
				if(dh.getWidth() < dh.THRESHOLD.small){
					assert.strictEqual('small', dh.getSize(), 'モバイル(横)を検出できる');
				} else if (dh.getWidth() < dh.THRESHOLD.medium){
					assert.strictEqual('medium', dh.getSize(), 'タブレット(横)を検出できる');
				} else {
					assert.strictEqual('large', dh.getSize(), 'PC(横)を検出できる');
				}
			
			} else {
				
				if(dh.getHeight() < dh.THRESHOLD.small){
					assert.strictEqual('small', dh.getSize(), 'モバイル(縦)を検出できる');
				} else if (dh.getHeight() < dh.THRESHOLD.medium){
					assert.strictEqual('medium', dh.getSize(), 'タブレット(縦)を検出できる');
				} else {
					assert.strictEqual('large', dh.getSize(), 'PC(縦)を検出できる');
				}
			
			}
			
			$('#size').text(dh.getSize());
		});
		
	});
	
	$(function(){
		
		mocha.run();
		$(window).resize(function(){
			location.reload();
		})
		
	});
	
}();