var testClock = function(){
	
	mochaSetup();
	
	suite('Clock', function() {
		
		var clock;
		
		setup(function(){
			clock = new Clock($('.canvas0').get(0), 100);
			clock.clearCanvas();
		});
		
		test("Clock()", function() {
			assert.strictEqual("function", typeof Clock, "コンストラクタ関数 Clock が存在する。");
			assert($(clock.getCanvas()).length > 0, "Canvas の取得に成功している");
			assert(clock.getContext(), "コンテクストの取得に成功している");
		});
		
		test("setCanvas()", function() {
			assert.strictEqual(true, function(){
				clock.setCanvas($('.canvas1').get(0));
				$(clock.getCanvas()).css('border', 'solid');
				return true;
			}(), "描画対象を canvas1 に変更した");
		});
		
		test("Support Measure Funcs", function() {
			assert.strictEqual(400, clock.getCanvasWidth(), "width 400 の Canvas だと 400 を返す");
			assert.strictEqual(300, clock.getCanvasHeight(), "height 300 の Canvas だと 300 を返す");
			assert.strictEqual(100, clock.getRadius(), "width 400 の Canvas に margin 100 だと radius は 100");
		});
		
		test("drawCircle()", function() {
			assert(function(){
				clock.setCanvas($('.canvas2').get(0));
				clock.drawCircle();
				return true;
			}(), "円が表示された");
		});
		
		test("clearCanvas()", function() {
			assert(function(){
				clock.setCanvas($('.canvas3').get(0));
				clock.drawCircle();
				clock.clearCanvas();
				return true;
			}(), "円が表示されない");
		});
		
		test("drawNums()", function() {
			assert(function(){
				clock.setCanvas($('.canvas4').get(0));
				clock.drawNums();
				return true;
			}(), "数値が描画された");
		});
		
		test("drawCenterBit()", function() {
			assert(function(){
				clock.setCanvas($('.canvas5').get(0));
				clock.drawCenterBit();
				return true;
			}(), "中央に点が描画された");
		});
		
		test("getHandLength()", function() {
			assert.strictEqual(100 * 0.9, clock.getHandLength('sec'), "秒針の長さは 100 * 0.9");
			assert.strictEqual(100 * 0.7, clock.getHandLength('min'), "分針の長さは 100 * 0.7");
			assert.strictEqual(100 * 0.5, clock.getHandLength('hour'), "時針の長さは 100 * 0.5");
		});
		
		test("drawHand()", function() {
			assert(function(){
				clock.setCanvas($('.canvas6').get(0));
				clock.drawHand('sec', 15);
				return true;
			}(), "3 時方向に秒針が描画された");
			assert(function(){
				clock.setCanvas($('.canvas7').get(0));
				clock.drawHand('min', 30);
				return true;
			}(), "6 時方向に分針が描画された");
			assert(function(){
				clock.setCanvas($('.canvas8').get(0));
				clock.drawHand('hour', 45);
				return true;
			}(), "9 時方向に時針が描画された");
		});
		
		test("dateToDirection()", function() {
			
			var testDate = new Date('Sun, 12 Apr 2015 15:30:45 +0900');
			var dir = clock.dateToDirection(testDate);
			
			assert.strictEqual(dir.sec, 45, "秒針の角度は9時の方向");
			assert.strictEqual(dir.min, 30, "分針の角度は6時の方向");
			assert.strictEqual(dir.hour, 35 / 2, "時針の角度は3時30分の方向");
			
		});
				
		test("drawHands()", function() {
			
			var testDate = new Date('Sun, 12 Apr 2015 15:10:45 +0900');
			
			assert(function(){
				clock.setCanvas($('.canvas9').get(0));
				clock.drawHands(testDate);
				return true;
			}(), "15:10:45 を指している");
			
		});
				
		test("drawClock()", function() {
			
			assert(function(){
				clock.setCanvas($('.canvas0').get(0));
				clock.drawClock();
				return true;
			}(), "時計が動いている");
			
		});
				
	});
	
	$(function(){
		
		mocha.run();
		
	})
	
}();