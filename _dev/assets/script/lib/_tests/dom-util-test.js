var testDomUtil = function(){
	
	mochaSetup();
	
	suite('DomUtil', function() {
		
		var du;
		
		var showScreenRect = function(){
			
			var target = $('#yellow');
			var rect = du.getElemRect(target);
			var rectStr = _.reduce(rect, function(memo, v, k){
				return memo + k + ': ' + v + '<br>';
			}, '要素のスクリーン上の位置が表示される<br>');
			$(target).html(rectStr);
			
			var result = '';
			
			var onScreenRect = du.getElemRect($('#orange'));
			
			if(du.isOnScreen(onScreenRect)){
				result += 'オレンジの div 全体がスクリーン上にある<br>';
			} else {
				result += 'オレンジの div 全体がスクリーン上にない<br>';
			}
			
			if(du.isOffScreen(onScreenRect)){
				result += 'オレンジの div 全体がスクリーン外にある<br>';
			} else {
				result += 'オレンジの div 全体がスクリーン外にない<br>';
			}
			
			if(du.isTopHidden(onScreenRect)){
				result += 'オレンジの div が画面上にはみ出している<br>';
			} else {
				result += 'オレンジの div が画面上にはみ出していない<br>';
			}
			
			if(du.isBottomHidden(onScreenRect)){
				result += 'オレンジの div が画面下にはみ出している<br>';
			} else {
				result += 'オレンジの div が画面下にはみ出していない<br>';
			}
						
			if(du.isCenter(onScreenRect)){
				result += 'オレンジの div が真ん中辺りにある<br>';
			} else {
				result += 'オレンジの div が真ん中辺りにない<br>';
			}
			
			result += 'アクティブなのは' + $(du.getActiveSection()).attr('id') + '<br>';			

			$('#log').html(result);

		}
		
		setup(function(){
			du = new DomUtil($('#parent'));
		});
		
		test("DomUtil()", function() {
			assert.strictEqual("function", typeof DomUtil, "コンストラクタ関数 DomUtil() が存在する。");
		});
				
		test("getParent()", function() {
			assert.strictEqual('parent', $(du.getParent()).attr('id'), 'getParent() で親要素を取得した');
		});
								
		test("isOnScreen()", function() {
		});
								
		test("setScrollListener()", function() {
			du.setScrollListener(showScreenRect);
			du.triggerScroll();
		});
								
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();