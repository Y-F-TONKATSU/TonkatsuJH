var testDisplayUtil = function(){
	
	mochaSetup();
	
	suite('DisplayUtil', function() {
		
		test('getWidth()/getHeight()', function() {
			$('#width').text(DisplayUtil.getWidth())
			$('#height').text(DisplayUtil.getHeight())
		});
		
		test('getOrientation()', function() {
			if(DisplayUtil.getWidth() >= DisplayUtil.getHeight()){
				assert.strictEqual('landscape', DisplayUtil.getOrientation(), '横向き');
				$('#orientation').text('横向き');
			} else {
				assert.strictEqual('portrait', DisplayUtil.getOrientation(), '縦向き');
				$('#orientation').text('縦向き');
			}

		});
		
		test('getSize()', function() {
			
			if(DisplayUtil.getOrientation() === 'landscape'){
				
				if(DisplayUtil.getWidth() < DisplayUtil.THRESHOLD.small){
					assert.strictEqual('small', DisplayUtil.getSize(), 'モバイル(横)を検出できる');
				} else if (DisplayUtil.getWidth() < DisplayUtil.THRESHOLD.medium){
					assert.strictEqual('medium', DisplayUtil.getSize(), 'タブレット(横)を検出できる');
				} else {
					assert.strictEqual('large', DisplayUtil.getSize(), 'PC(横)を検出できる');
				}
			
			} else {
				
				if(DisplayUtil.getHeight() < DisplayUtil.THRESHOLD.small){
					assert.strictEqual('small', DisplayUtil.getSize(), 'モバイル(縦)を検出できる');
				} else if (DisplayUtil.getHeight() < DisplayUtil.THRESHOLD.medium){
					assert.strictEqual('medium', DisplayUtil.getSize(), 'タブレット(縦)を検出できる');
				} else {
					assert.strictEqual('large', DisplayUtil.getSize(), 'PC(縦)を検出できる');
				}
			
			}
			
			$('#size').text(DisplayUtil.getSize());
		});
		
		test('getScreenRatio()', function() {
			
			$('#ratio').text(DisplayUtil.getScreenRatio());
			
		});
		
		test('isOverRatio()', function() {
			var str;
			if(DisplayUtil.isOverRatio()){
				str = '長過ぎる'
			} else {
				str = '長過ぎない'
			}
			$('#over').text(str);
		});
		
	});
	
	$(function(){
		
		mocha.run();
		$(window).resize(function(){
			location.reload();
		})
		
	});
	
}();