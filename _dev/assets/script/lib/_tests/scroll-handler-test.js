var testScrollHandler = function(){
	
	mochaSetup();
	
	suite('ScrollHandler', function() {
		
		var scrollHandler;
		
		var showScreenRect = function(){
			
			var target = $('#yellow');
			var rect = scrollHandler.getElemRect(target);
			var rectStr = _.reduce(rect, function(memo, v, k){
				return memo + k + ': ' + v + '<br>';
			}, '要素のスクリーン上の位置が表示される<br>');
			$(target).html(rectStr);
			
			var result = '';
			
			var onScreenRect = scrollHandler.getElemRect($('#orange'));
			
			if(scrollHandler.isOnScreen(onScreenRect)){
				result += 'オレンジの div 全体がスクリーン上にある<br>';
			} else {
				result += 'オレンジの div 全体がスクリーン上にない<br>';
			}
			
			if(scrollHandler.isOffScreen(onScreenRect)){
				result += 'オレンジの div 全体がスクリーン外にある<br>';
			} else {
				result += 'オレンジの div 全体がスクリーン外にない<br>';
			}
			
			if(scrollHandler.isTopHidden(onScreenRect)){
				result += 'オレンジの div が画面上にはみ出している<br>';
			} else {
				result += 'オレンジの div が画面上にはみ出していない<br>';
			}
			
			if(scrollHandler.isBottomHidden(onScreenRect)){
				result += 'オレンジの div が画面下にはみ出している<br>';
			} else {
				result += 'オレンジの div が画面下にはみ出していない<br>';
			}
						
			if(scrollHandler.isCenter(onScreenRect)){
				result += 'オレンジの div が真ん中辺りにある<br>';
			} else {
				result += 'オレンジの div が真ん中辺りにない<br>';
			}
			
			result += 'アクティブなのは' + $(scrollHandler.getActiveSection()).attr('id') + '<br>';			

			$('#log').html(result);

		}
		
		setup(function(){
			scrollHandler = new ScrollHandler($('#parent'));
		});
		
		test("ScrollHandler()", function() {
			assert.strictEqual("function", typeof ScrollHandler, "コンストラクタ関数 ScrollHandler() が存在する。");
		});
				
		test("getParent()", function() {
			assert.strictEqual('parent', $(scrollHandler.getParent()).attr('id'), 'getParent() で親要素を取得した');
		});
								
		test("isOnScreen()", function() {
		});
								
		test("setScrollListener()", function() {
			scrollHandler.setScrollListener(showScreenRect);
			scrollHandler.triggerScroll();
		});
								
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();