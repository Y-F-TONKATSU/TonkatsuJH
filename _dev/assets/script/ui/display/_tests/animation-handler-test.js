var testAnimationHandler = function(){
	
	mochaSetup();
	
	suite('AnimationHandler', function() {
		
		var ah;
		
		setup(function(){
			
		});
		
		teardown(function(){
			
		});
		
		test('AnimationHandler()', function() {
			
			ah = new AnimationHandler({
				'fore':$('#fore'),
				'back':$('#back'),
			});
		
			assert(_.isFunction(AnimationHandler), 'コンストラクタ関数 AnimationHandler() が存在する。');
			
			assert.strictEqual(1, $('#fore').find('canvas').length, 'フォアグラウンドに Canvas を作成した。');
			
			assert.strictEqual(1, $('#back').find('canvas').length, 'バックグラウンドに Canvas を作成した。');
			
			assert.strictEqual(DisplayUtil.RATIO_X, parseInt($('#fore').find('canvas').attr('width')), 'Canvas の横解像度がステージの横解像度に等しい');
			assert.strictEqual(DisplayUtil.RATIO_Y, parseInt($('#fore').find('canvas').attr('height')), 'Canvas の縦解像度がステージの縦解像度に等しい');
			
			var ch = ah._chList.fore;
			
			assert(ch instanceof CanvasHandler, 'CanvasHandler が返される');
			
			var canvas = ch.getCanvas();
			
			assert.strictEqual($('#fore').find('canvas').get(0), canvas, 'CanvasHandler に作成された canvas がセットされている');
			assert.strictEqual('fore_canvas', $(canvas).attr('id'), 'Canvas にコンテナの id + _canvas が指定されている');
			
			
		});
					
		test('addTask()/removeTask()', function() {
			
			ah.init();
			
			ah.addTask({
				'id':'testTask',
				'docId':'ex000018',
				'containerId': 'fore',
				'options': {
				},
				'tweener':function(){return this.currentTime / this.duration},
				'progress':0,
				'currentTime':0,
				'duration': 1000,
				'ender':function(){return false;},
				'onTicked':function(){
				},
				'onComplete':function(){
				}
			});
			
			assert.strictEqual(1, ah._taskList.length, 'タスクリストにタスクが追加された');
			assert.strictEqual('testTask', ah._taskList[0].id, 'タスクリストにタスクが追加された');
			assert.strictEqual(ah._taskList[0].ch.getCanvas(), $('#fore').find('canvas').get(0), '自動的に CanvasHandler がセットされる');
			
			ah.addTask({
				'id':'testTask2',
				'docId':'ex000018',
				'containerId': 'fore',
				'options': {
				},
				'tweener':function(){return this.currentTime / this.duration},
				'progress':0,
				'currentTime':0,
				'duration': 1000,
				'ender':function(){return false;},
				'onTicked':function(){
				},
				'onComplete':function(){
				}
			});
			
			assert.strictEqual(2, ah._taskList.length, 'タスクリストにタスクがさらに追加された');
			
			ah.addTask({
				'id':'testTask2',
				'docId':'ex000018',
				'containerId': 'back',
				'options': {
				},
				'tweener':function(){return this.currentTime / this.duration},
				'progress':0,
				'currentTime':0,
				'duration': 1000,
				'ender':function(){return false;},
				'onTicked':function(){
					$('#loopTest').html('ちゃんとループしてるよ！');
				},
				'onComplete':function(){
					$('#completeTest').html('ちゃんとタスク完了したよ！');
				}
			});
			
			assert.strictEqual(2, ah._taskList.length, '同じ ID のタスクは上書きされる');
			assert.strictEqual('back', ah._taskList[1].containerId, '同じ ID のタスクは上書きされる');
			
			ah.removeTask('testTask');
			
			assert.strictEqual(1, ah._taskList.length, 'タスクを削除した');
			assert.strictEqual('testTask2', ah._taskList[0].id, '指定した id のタスクが削除されている');
			
		});
						
			
		test('animation', function() {
			
			ah.init();
			
			ah.addTask({
				'id':'testAnim',
				'docId':'ex000018',
				'containerId': 'fore',
				'options': {
				},
				'tweener':function(){return this.currentTime / this.duration},
				'progress':0,
				'currentTime':0,
				'duration': 1000,
				'ender':function(){return false;},
				'onTicked':function(){
					var ctx = this.ctx;
					ctx.beginPath();
					ctx.moveTo(10, 10);
					ctx.lineTo(500, 500 * this.progress);
					ctx.stroke();
				},
				'onComplete':function(){
					ah.removeTask('testAnim');
				}
			});
			
			
		});
						

	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();