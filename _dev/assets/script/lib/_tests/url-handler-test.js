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
			assert.strictEqual(uh.validateHash('kinema000001_tonkatsu'), true, "オプション付きハッシュを認識する");
			assert.strictEqual(uh.validateHash('kinema000001_tonk^atsu'), false, "特殊文字の入ったオプションを弾く");
			assert.strictEqual(uh.validateHash('kinema000001_aaaaaaaaaaaaaaaaaaaaaa'), false, "長過ぎるオプションを弾く");
			assert.strictEqual(uh.validateHash('kinema000001tonkatsu'), false, "アンダースコアのないオプションを弾く");
			assert.strictEqual(uh.validateHash({
				category:'kinema',
				id:'123456',
				option:'_curry'
			}), true, "オプション _curry を受け入れる");
			assert.strictEqual(uh.validateHash({
				category:'kinema',
				id:'123456',
				option:'_cu?rry'
			}), false, "オプション _cu?rry を受け入れない");
			assert.strictEqual(uh.validateHash({
				category:'kinema',
				id:'123456',
				option:'_aaaaaaaaaaaaaaaaaaaaaa'
			}), false, "長過ぎるオプションを受け入れない");
			assert.strictEqual(uh.validateHash({
				category:'kinema',
				id:'123456',
				option:'aaa'
			}), false, "アンダースコアのないオプションを受け入れない");
			
		});
				
		test("processHashString()", function() {
			assert.strictEqual(uh.processHashString('writing000001').category, 'writing', "writing000001 のカテゴリを writing と認識する");
			assert.strictEqual(uh.processHashString('writing000001').id, '000001', "writing000001 のコンテンツ番号を 000001 と認識する");
			assert.strictEqual(uh.processHashString('tonkatsu123456'), null, "不正な値の場合、null を返す");
		});
				
		test("setCurrentHash()/getCurrentHash()/getCurrentCategory()/getCurrentId()", function() {
			
			uh.setCurrentHash('image024680');
			
			assert.strictEqual(uh.getCurrentHash().category, 'image', "image024680 をセットすると、getCurrentHash はカテゴリ image を返す");
			assert.strictEqual(uh.getCurrentHash().id, '024680', "image024680 をセットすると、getCurrentHash はコンテンツ 024680 を返す");
			
			uh.setCurrentHash({
				category:'kinema',
				id:'123456',
				option:''
			});
			
			assert.strictEqual(uh.getCurrentHash().category, 'kinema', "ID オブジェクトを直接渡すことが出来る");
			assert.strictEqual(uh.getCurrentHash().id, '123456', "ID オブジェクトを直接渡すことが出来る");
			assert.strictEqual(uh.getCurrentCategory(), 'kinema', "getCurrentCategory でカテゴリを取得できる");
			assert.strictEqual(uh.getCurrentId(), '123456', "getCurrentCategory でコンテンツ番号を取得できる");
			
			uh.setCurrentHash('apps?02468');
					
			assert.strictEqual(uh.getCurrentHash().category, 'top', "不正な値を渡すとデフォルト値がセットされる");
			assert.strictEqual(uh.getCurrentHash().id, '000000', "不正な値を渡すとデフォルト値がセットされる");
			
			uh.setCurrentHash({
				category:'image',
				id:'!02468',
				option:''
			});
			
			assert.strictEqual(uh.getCurrentHash().category, 'top', "不正な値を渡すとデフォルト値がセットされる");
			assert.strictEqual(uh.getCurrentHash().id, '000000', "不正な値を渡すとデフォルト値がセットされる");
			
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
			
			assert.strictEqual(uh.getCurrentHash().category, 'top', "不正な値を渡すとデフォルト値がセットされる");
			assert.strictEqual(uh.getCurrentHash().id, '000000', "不正な値を渡すとデフォルト値がセットされる");
			
			uh.changeTo({
				category:'image',
				id:'!02468',
				option:''
			});
			
			assert.strictEqual(uh.getCurrentHash().category, 'top', "不正な値を渡すとデフォルト値がセットされる");
			assert.strictEqual(uh.getCurrentHash().id, '000000', "不正な値を渡すとデフォルト値がセットされる");			
			
		});
				
		test("isSameCont", function() {
			
			assert(!uh.isSameCont('image024680'), "何もセットしていないと isSameCont は false を返す");
			
			uh.setCurrentHash('image024680');
			
			assert(uh.isSameCont('image024680'), "image024680 をセットして isSameCont に image024680 を渡すと true が返る");
			
			uh.changeTo({
				category:'image',
				id:'024680',
				option:''
			});
			
			assert(uh.isSameCont('image024680'), "ID オブジェクトと文字列を isSameHash で比較できる");
			assert(!uh.isSameCont('image024681'), "ID が違うと false");
			assert(!uh.isSameCont('apps024680'), "カテゴリが違うと false");
			
		});
				
		test("changeTo()/addChangePageListener()", function() {
			
			var x = 1;
			
			uh.addChangePageListener(function(){
				x += 1;		
			});
			
			assert.strictEqual(x, 1, "リスナーが呼び出されていない");
			
			uh.changeTo('image024680');
			
			assert.strictEqual(x, 2, "changeTo() によってリスナーが呼び出された");
			
			uh.changeTo('image024680');
			
			assert.strictEqual(x, 2, "同じ ID で changeTo を呼び出してもリスナーは呼ばれない");
			
			uh.addChangePageListener(function(){
				x += 5;		
			});
			
			uh.changeTo('image024681');
			
			assert.strictEqual(x, 8, "リスナーを追加できる");
			
			uh.clearChangePageListeners();
			
			uh.changeTo('image024682');
			
			assert.strictEqual(x, 8, "リスナーを全削除できる");
			
			uh.addChangePageListener(function(e){
				x = e;		
			});
			
			uh.changeTo('image024683');
			
			assert.strictEqual(x.category, 'image', "ハッシュオブジェクトがリスナーの引数として渡される");
			assert.strictEqual(x.id, '024683', "ハッシュオブジェクトがリスナーの引数として渡される");
		});
				
	});
	
	$(function(){
		
		mocha.run();
		
	});
	
}();