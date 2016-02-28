var testBackgroundManager = function(){
	
	mochaSetup();
	
	suite('BackgroundManager', function() {
		
		var bm;
		
		setup(function(){
			bm = new BackgroundManager($('#front'), $('#back'));
		});
		
		test('BackgroundManager(front, back)', function() {
			assert.strictEqual('function', typeof BackgroundManager, 'コンストラクタ関数 DisplayHandler() が存在する。');
		});
						
		test('getFrontCanvasHandler()', function() {
			var frontCH = bm.getFrontCanvasHandler();
			var backCH = bm.getBackCanvasHandler();
			assert.strictEqual(true, frontCH instanceof CanvasHandler,'コンスタラクタでセットした Div の CanvasHandler を取得した');
			assert.strictEqual(true, frontCH instanceof CanvasHandler,'コンスタラクタでセットした Div の CanvasHandler を取得した');
			assert.strictEqual($('#front').width(),  frontCH.getCanvasWidth(),'Canvas の width が div の width に等しい');
			assert.strictEqual($('#front').height(),  frontCH.getCanvasHeight(),'Canvas の height が div の height に等しい');
			assert.strictEqual($('#back').width(),  backCH.getCanvasWidth(),'Canvas の width が div の width に等しい');
			assert.strictEqual($('#back').height(),  backCH.getCanvasHeight(),'Canvas の height が div の height に等しい');
		});
						
		test('startAnimation()', function() {
			
			var TOTAL_FRAMES = 1000;
			
			bm.startAnimation($('#a'), function(fg, bg, div, frame){
				var fctx = fg.getContext();
				fg.clear();
				var progress = (frame / TOTAL_FRAMES);
				var position = $(div).position();
				
				var width =  $(div).width();
				var height =  $(div).height();
				
				var left = position.left + parseInt($(div).css('marginLeft'), 10) - $('body').scrollLeft();
				var right = left + width;
				var top = position.top + parseInt($(div).css('marginTop'), 10) - $('body').scrollTop();
				var bottom = top + height;
				
				fctx.beginPath();
				fctx.moveTo(left, top);
				fctx.lineTo(
					left + width * progress,
					top
				);
				fctx.moveTo(right, top);
				fctx.lineTo(
					right,
					top + height * progress
				);
				fctx.moveTo(right, bottom);
				fctx.lineTo(
					right - width * progress,
					bottom
				);
				fctx.stroke();
				fctx.moveTo(left, bottom);
				fctx.lineTo(
					left,
					bottom - height * progress
				);
				fctx.stroke();
				
				return frame < TOTAL_FRAMES;
				
			})
		});
						
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();