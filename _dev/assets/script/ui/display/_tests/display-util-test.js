var testDisplayUtil = function(){
	
	mochaSetup();
	
	suite('DisplayUtil', function() {
		
		test('getWidth()/getHeight()', function() {
			$('#width').text(DisplayUtil.getWidth());
			$('#height').text(DisplayUtil.getHeight());
		});
		
		test('getLonger()', function() {
			$('#longer').text(DisplayUtil.getLonger());
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
		
		test('getStageRect()', function() {
			
			var rect = DisplayUtil.getStageRect();
			
			$('#stage').css({
				'backgroundColor':'yellow',
				'opacity':0.2,
				'position':'fixed',
			});
			
			DisplayUtil.rectToCss(rect, $('#stage'));
			
		});
		
		test('getObjectRect()', function() {
			
			var rect = DisplayUtil.getObjectRect({
				left:480,
				top:300,
				width:960,
				height:600
			});
			
			$('#object').css({
				'backgroundColor':'red',
				'opacity':0.2,
				'position':'fixed',
			});
			
			DisplayUtil.rectToCss(rect, $('#object'));
			
		});
		
		test('getElemRect()', function() {
			
			var rect = DisplayUtil.getElemRect($('#elem'));
			
			$('#elem').css({
				'backgroundColor':'blue',
				'opacity':0.2,
				'position':'fixed',
			});
			
			DisplayUtil.rectToCss(rect, $('#elem'));
			
		});
		
	});
	
	$(function(){
		
		mocha.run();
		$(window).resize(function(){
			location.reload();
		})
		
	});
	
}();