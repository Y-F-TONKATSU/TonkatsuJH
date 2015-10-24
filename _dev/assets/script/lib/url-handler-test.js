var testUrlHandler = function(){
	
	mochaSetup();
	
	suite('UrlHandler', function() {
		
		var uh;
		
		setup(function(){
			uh = new UrlHandler('');
		});
		
		test("UrlHandler()", function() {
			assert.strictEqual("function", typeof UrlHandler, "コンストラクタ関数 UrlHandler() が存在する。");
		});
				
		test("validateHash()", function() {
			assert.strictEqual(uh.validateHash('top123456'), true, "top123456 を正常なID値と認識する");
			assert.strictEqual(uh.validateHash('writing123456'), true, "writing123456 を正常なID値と認識する");
			assert.strictEqual(uh.validateHash('experimental123456'), true, "experimental000030 を正常なID値と認識する");
			assert.strictEqual(uh.validateHash('apps123456'), true, "apps123456 を正常なID値と認識する");
			assert.strictEqual(uh.validateHash('image123456'), true, "image123456 を正常なID値と認識する");
			assert.strictEqual(uh.validateHash('kinema123456'), true, "kinema123456 を正常なID値と認識する");
			assert.strictEqual(uh.validateHash('123456'), false, "カテゴリが指定されていない ID を弾く");
			assert.strictEqual(uh.validateHash('tonkatsu123456'), false, "不明なカテゴリを弾く");
			assert.strictEqual(uh.validateHash('experimental1234567'), false, "コンテンツ番号が長過ぎる ID を弾く");
			assert.strictEqual(uh.validateHash('top000000tonkatsutonkatsutonkatsu'), false, "長すぎるIDを弾く");
			assert.strictEqual(uh.validateHash('top<000000>'), false, "特殊文字<>を弾く");
			assert.strictEqual(uh.validateHash('top??????'), false, "特殊文字?を弾く");
			assert.strictEqual(uh.validateHash({
				category:'top',
				id:'123456',
			}), true, "{category:top, id:123456} を正常なID値と認識する");
			assert.strictEqual(uh.validateHash({
				category:'writing',
				id:'123456',
			}), true, "{category:writing, id:123456} を正常なID値と認識する");
			assert.strictEqual(uh.validateHash({
				category:'experimental',
				id:'123456',
			}), true, "{category:experimental, id:123456} を正常なID値と認識する");
			assert.strictEqual(uh.validateHash({
				category:'apps',
				id:'123456',
			}), true, "{category:apps, id:123456} を正常なID値と認識する");
			assert.strictEqual(uh.validateHash({
				category:'image',
				id:'123456',
			}), true, "{category:image, id:123456} を正常なID値と認識する");
			assert.strictEqual(uh.validateHash({
				category:'kinema',
				id:'123456',
			}), true, "{category:kinema, id:123456} を正常なID値と認識する");
			assert.strictEqual(uh.validateHash({
				id:'123456',
			}), false, "カテゴリが指定されていない ID を弾く");
			assert.strictEqual(uh.validateHash({
				category:'kinema',
			}), false, "コンテンツ番号が指定されていない ID を弾く");
			assert.strictEqual(uh.validateHash({
				category:'tonkatsu',
				id:'123456',
			}), false, "不明なカテゴリを弾く");
			assert.strictEqual(uh.validateHash({
				category:'image',
				id:'<0000>',
			}), false, "特殊文字<>を弾く");
			assert.strictEqual(uh.validateHash({
				category:'image',
				id:'?0000?',
			}), false, "特殊文字?を弾く");
		});
				
		test("processHashString()", function() {
			assert.strictEqual(uh.processHashString('writing000001').category, 'writing', "writing000001 のカテゴリを writing と認識する");
			assert.strictEqual(uh.processHashString('writing000001').id, '000001', "writing000001 のコンテンツ番号を 000001 と認識する");
			assert.strictEqual(uh.processHashString('tonkatsu123456'), null, "不正な値の場合、null を返す");
		});
				
		test("setHash()/getCurrentHash()/getCurrentCategory()/getCurrentId()", function() {
			
			uh.setHash('image024680');
			
			assert.strictEqual(uh.getCurrentHash().category, 'image', "image024680 をセットすると、getCurrentHash はカテゴリ image を返す");
			assert.strictEqual(uh.getCurrentHash().id, '024680', "image024680 をセットすると、getCurrentHash はコンテンツ 024680 を返す");
			
			uh.setHash({
				category:'kinema',
				id:'123456',
				option:''
			});
			
			assert.strictEqual(uh.getCurrentHash().category, 'kinema', "ID オブジェクトを直接渡すことが出来る");
			assert.strictEqual(uh.getCurrentHash().id, '123456', "ID オブジェクトを直接渡すことが出来る");
			assert.strictEqual(uh.getCurrentCategory(), 'kinema', "getCurrentCategory でカテゴリを取得できる");
			assert.strictEqual(uh.getCurrentId(), '123456', "getCurrentCategory でコンテンツ番号を取得できる");
			
			uh.setHash('apps?02468');
			
			assert.strictEqual(uh.getCurrentHash().category, 'kinema', "不正な値を渡すと何もしない");
			assert.strictEqual(uh.getCurrentHash().id, '123456', "不正な値を渡すと何もしない");
			
			uh.setHash({
				category:'image',
				id:'!02468',
				option:''
			});
			
			assert.strictEqual(uh.getCurrentHash().category, 'kinema', "不正な値を渡すと何もしない");
			assert.strictEqual(uh.getCurrentHash().id, '123456', "不正な値を渡すと何もしない");
		});
				
		test("changeTo()", function() {
			
			uh.changeTo('image024680');
			
			assert.strictEqual(uh.getCurrentHash().category, 'image', "image024680 をセットすると、getCurrentHash はカテゴリ image を返す");
			assert.strictEqual(uh.getCurrentHash().id, '024680', "image024680 をセットすると、getCurrentHash はコンテンツ 024680 を返す");
			
			uh.changeTo({
				category:'kinema',
				id:'123456',
				option:''
			});
			
			assert.strictEqual(uh.getCurrentHash().category, 'kinema', "ID オブジェクトを直接渡すことが出来る");
			assert.strictEqual(uh.getCurrentHash().id, '123456', "ID オブジェクトを直接渡すことが出来る");
			assert.strictEqual(uh.getCurrentCategory(), 'kinema', "getCurrentCategory でカテゴリを取得できる");
			assert.strictEqual(uh.getCurrentId(), '123456', "getCurrentCategory でコンテンツ番号を取得できる");
			
			uh.changeTo('apps?02468');
			
			assert.strictEqual(uh.getCurrentHash().category, 'kinema', "不正な値を渡すと何もしない");
			assert.strictEqual(uh.getCurrentHash().id, '123456', "不正な値を渡すと何もしない");
			
			uh.changeTo({
				category:'image',
				id:'!02468',
				option:''
			});
			
			assert.strictEqual(uh.getCurrentHash().category, 'kinema', "不正な値を渡すと何もしない");
			assert.strictEqual(uh.getCurrentHash().id, '123456', "不正な値を渡すと何もしない");
			
		});
				
		test("changePage()", function() {
			
			assert(false, "changePage を実装した");
			
		});
				
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();