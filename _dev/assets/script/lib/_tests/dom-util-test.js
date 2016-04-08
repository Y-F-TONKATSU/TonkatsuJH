var testDomUtil = function(){
	
	mochaSetup();
	
	suite('DomUtil', function() {
		
		var du;
		
		var showScreenRect = function(){
			
			var target = $('#getScreenRect');
			var rect = du.getScreenRect(target);
			var rectStr = _.reduce(rect, function(memo, v, k){
				return memo + k + ': ' + v + '<br>';
			}, '要素のスクリーン上の位置が表示される<br>');
			$(target).html(rectStr);
			
			if(du.isOnScreen($('#isOnScreen'))){
				$('#log').text('オレンジの div がスクリーン上にある');
			} else {
				$('#log').text('オレンジの div がスクリーン上にない');
			}

			
		}
		
		setup(function(){
			du = new DomUtil(window);
		});
		
		test("DomUtil()", function() {
			assert.strictEqual("function", typeof DomUtil, "コンストラクタ関数 DomUtil() が存在する。");
		});
				
		test("isOnScreen()", function() {
		});
								
		test("getScreenRect()", function() {
			$(du.getParent()).scroll(showScreenRect);
			showScreenRect();
		});
								
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();