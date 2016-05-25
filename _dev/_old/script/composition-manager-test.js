var testCanvasHandler = function(){
	
	mochaSetup();
	
	var cm;

	suite('CompositionManager', function() {
		
		setup(function(){
			cm = new CompositionManager();
		});
		
		test("CompositionManager()", function() {
			assert.strictEqual("function", typeof CompositionManager, "コンストラクタ関数 CompositionManager() が存在する。");
		});
		
		test("setElement()/getElement()", function() {
			var el = $('.main').get(0);
			cm.setElement('main', el);
			assert.strictEqual(el, cm.getElement('main'), "要素を main に格納できる。");
			assert.strictEqual(el, cm.getElement()['main'], "要素を main に格納できる。");
		});
		
		/*
		test("initElements()", function() {
			var main = $('.main').get(0);
			var sidebar = $('.sidebar').get(0);
			var foreground = $('.foreground').get(0);
			var background = $('.background').get(0);
			cm.setElement('main', main);
			cm.setElement('sidebar', sidebar);
			cm.setElement('foreground', foreground);
			cm.setElement('background', background);
			cm.initElements();
			assert.strictEqual('absolute', $(main).css('position'), "main 要素の positon が absolute に設定されている。");
			assert.strictEqual('absolute', $(sidebar).css('position'), "sidebar 要素の positon が absolute に設定されている。");
			assert.strictEqual('absolute', $(foreground).css('position'), "foreground 要素の positon が absolute に設定されている。");
			assert.strictEqual(window.innerHeight + 'px', $(foreground).css('height'), "foreground 要素の height が 100% に設定されている。");
			assert.strictEqual(window.innerWidth + 'px', $(foreground).css('width'), "foreground 要素の width が 100% に設定されている。");
			assert.strictEqual('absolute', $(background).css('position'), "background 要素の positon が absolute に設定されている。");
			assert.strictEqual(window.innerHeight + 'px', $(background).css('height'), "background 要素の height が 100% に設定されている。");
			assert.strictEqual(window.innerWidth + 'px', $(background).css('width'), "background 要素の width が 100% に設定されている。");
		});
		*/
		
	});
	
	$(function(){
		
		mocha.run();
		
		$('a').click(function(){
			
			var main = $('.main').get(0);
			var sidebar = $('.sidebar').get(0);
			var foreground = $('.foreground').get(0);
			var background = $('.background').get(0);
				
			cm.setElement('main', main);
			cm.setElement('sidebar', sidebar);
			cm.setElement('foreground', foreground);
			cm.setElement('background', background);
			
			cm.initElements();
			
			var orientation = $(this).parent().attr('class');
			var size = $(this).attr('class');
			
			cm.compose(orientation, size);
			
		});
		
	});
	
}();