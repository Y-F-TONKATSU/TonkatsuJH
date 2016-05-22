var testCanvasHandler = function(){
	
	mochaSetup();
	
	suite('CanvasHandler', function() {
		
		var ch;
		
		setup(function(){
			ch = new CanvasHandler($('.canvas0').get(0));
		});
		
		test("CanvasHandler()", function() {
			assert.strictEqual("function", typeof CanvasHandler, "コンストラクタ関数 CanvasHandler() が存在する。");
			assert($(ch.getCanvas()).length > 0, "Canvas の取得に成功している");
			assert(ch.getContext(), "コンテクストの取得に成功している");
		});
		
		test("setCanvas()", function() {
			assert.strictEqual(true, function(){
				ch.setCanvas($('.canvas1').get(0));
				$(ch.getCanvas()).css('border', 'solid');
				return true;
			}(), "描画対象を canvas1 に変更した");
		});
		
		test("Support Measure Funcs", function() {
			assert.strictEqual(400, ch.getCanvasWidth(), "width 400 の Canvas だと 400 を返す");
			assert.strictEqual(300, ch.getCanvasHeight(), "height 300 の Canvas だと 300 を返す");
			assert.strictEqual(200, ch.getCenterX(), "width 400 の Canvas だと 200 を返す");
			assert.strictEqual(150, ch.getCenterY(), "height 300 の Canvas だと 150 を返す");
			
			ch.setCanvasWidth(800);
			ch.setCanvasHeight(600);
			assert.strictEqual(800, ch.getCanvasWidth(), "width を変更した");
			assert.strictEqual(600, ch.getCanvasHeight(), "height を変更した");
		});
		
		test("clearCanvas()", function() {
			assert(function(){
				ch.setCanvas($('.canvas2').get(0));
				var context = ch.getContext();
				context.beginPath();
				context.arc(ch.getCenterX(), ch.getCenterY(), 100, 0, Math.PI * 2, true);
				context.fill();
				
				ch.setCanvas($('.canvas3').get(0));
				var context = ch.getContext();
				context.beginPath();
				context.arc(ch.getCenterX(), ch.getCenterY(), 100, 0, Math.PI * 2, true);
				context.fill();
				ch.clear();
				return true;
			}(), "キャンバスがクリアされた");
		});
		
		test("toImg()", function() {
			assert(function(){
				var img = $('.targetImg');
				var canvas = $('.canvas4').get(0);
				$(canvas).hide();
				ch.setCanvas(canvas);
				var context = ch.getContext();
				context.beginPath();
				context.arc(ch.getCenterX(), ch.getCenterY(), 100, 0, Math.PI * 2, true);
				context.fill();
				ch.toImg(img);
				return true;
			}(), "canvas 画像が img にコピーされた");
		});
		
		/*
		test("saveFrame()", function() {
			assert(function(){
				var canvas = $('.canvas5').get(0);
				$(canvas).hide();
				ch.setCanvas(canvas);
				var context = ch.getContext();
				context.beginPath();
				context.arc(ch.getCenterX(), ch.getCenterY(), 100, 0, Math.PI * 2, true);
				context.fill();
				ch.saveFrame();
				return true;
			}(), "画像が自動保存される");
		});
		
		test("saveFrame()", function() {
			assert(function(){
				var canvas = $('.canvas6').get(0);
				var ch6 = new CanvasHandler(canvas);
				var context = ch6.getContext();
				
				var duration = 12;
				var time = 0;
				
				var frame = function(){
					context.beginPath();
					context.arc(ch6.getCenterX(), ch6.getCenterY(), 10 * time + 20, 0, Math.PI * 2, true);
					context.fill();
					console.log(ch6.getCanvas());
					ch6.saveFrame();
					if(time < duration){setTimeout(frame, 1000);}
					time++;
				};
				
				frame();
				
				return true;
			}(), "画像が12枚連続で自動保存される");
		});
		*/
		
		test("rgbas()", function() {
			assert.strictEqual('rgba(100, 150, 200, 0.1)', ch.rgbas(100, 150, 200, 0.1), "数値を rgba 文字列に変換できる");
			assert.strictEqual('rgba(100, 150, 200, 0.33333333)', ch.rgbas(100, 150, 200, 1 / 3), "a の値が長過ぎるときは丸める");
		});
		
		test("getRatio()", function() {
			assert.strictEqual(3 / 4, ch.getRatio(), "Canvas の縦横比を取得できる");
		});
		
		test("fitCanvas()", function() {
			ch = new CanvasHandler($('.canvas7').get(0));
			ch.fitCanvas();
			$(ch.getCanvas()).css({
				'backgroundColor':'rgba(100, 150, 200, 0.2)'
			});
		});
		
		test("setStrokeSyle()/setFillStyle()/setWidth()/drawShape()/getLiners", function() {
			ch = new CanvasHandler($('.canvas8').get(0));
			ch.setStrokeStyle(255, 0, 0, 1);
			ch.drawShape(function(ctx){
				ctx.arc(ch.getCenterX(), ch.getCenterY(), ch.getCenterY() / 2, 0, Math.PI * 2);
			}, true, false);
			ch = new CanvasHandler($('.canvas9').get(0));
			ch.setFillStyle(0, 0, 255, 1);
			ch.drawShape(function(ctx){
				ctx.arc(ch.getCenterX(), ch.getCenterY(), ch.getCenterY() / 2, 0, Math.PI * 2);
			}, false, true);
			ch = new CanvasHandler($('.canvas10').get(0));
			ch.setStrokeStyle(0, 255, 0, 0.5);
			ch.drawShape(function(ctx){
				ctx.arc(ch.getCenterX(), ch.getCenterY(), ch.getCenterY() / 2, 0, Math.PI * 2);
			});
			ch = new CanvasHandler($('.canvas11').get(0));
			ch.setStrokeStyle(0, 255, 0, 0.8);
			ch.setWidth(20);
			ch.drawShape(function(ctx){
				ctx.arc(ch.getCenterX(), ch.getCenterY(), ch.getCenterY() / 2, 0, Math.PI * 2);
			});
			ch = new CanvasHandler($('.canvas12').get(0));
			ch.setStrokeStyle(0, 255, 0, 1);
			ch.setWidth(5);
			var cx = ch.getCanvasWidth();
			var cy = ch.getCanvasHeight();
			ch.drawShape(ch.getLiner([cx * 0.2, cy * 0.3, cx * 0.4, cy * 0.28, cx * 0.5, cy * 0.1, 
				cx * 0.6, cy * 0.28, cx * 0.8, cy * 0.3, cx * 0.6, cy * 0.48, cx * 0.75, cy * 0.75,
				cx * 0.5, cy * 0.6, cx * 0.25, cy * 0.75, cx * 0.4, cy * 0.48, cx * 0.2, cy * 0.3]));
		});
		
				
	});
	
	$(function(){

		mocha.run();
		
		$(window).resize(function(){
			location.reload();
		})
		
	});
	
}();