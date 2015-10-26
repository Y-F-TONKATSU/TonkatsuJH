var testCanvasHandler = function(){
	
	mochaSetup();
	
	suite('CanvasHandler', function() {
		
		setup(function(){
			
		});
		
		test("CanvasHandler()", function() {
			assert.strictEqual("function", typeof _, "_が存在する。");
		});
		
		test("each() 単にシーケンスをイテレートする", function() {
			var x = 0;
			_.each([1, 2, 3], function(v){x+=v;})	;
			assert.strictEqual(6, x, "each で配列に入った数字を全て加算できる");
			var str = 'TON';
			var str2 = 'KATSU';
			_.each(str2, function(v){str += v;})	;
			assert.strictEqual('TONKATSU', str, "each で文字列に入った文字を全て連結できる");
			str = 'TON';
			str2 = 'KATSU';
			_.each(str2, function(v){str += v + '!';})	;
			assert.strictEqual('TONK!A!T!S!U!', str, "each で文字列に入った文字全てに ! をつけて連結できる");
			var str3 = '';
			_.each({a:1, b:2, c:3}, function(v, k){str3 += k + v});
			assert.strictEqual('a1b2c3', str3, "each でオブジェクトのキーと値の一覧を作れる");
			
		});
				
		test("map() シーケンスをイテレートして、各戻り値の配列を返す", function() {
			assert.strictEqual([2, 3, 4].toString(), _.map([1, 2, 3], function(v){return v+1;}).toString(), "map で配列内の数値を全て +1 できる");
			assert.strictEqual(['-T-', '-O-', '-N-', '-K-', '-A-', '-T-', '-S-', '-U-'].toString() , _.map('TONKATSU', function(v){return '-' + v + '-';}).toString(), "map で配列内の文字の前後に - を付けられる");
			var o = {
				't':'o',
				'n':'k',
				'a':'tsu'		
			};
			var r = _.map(o, function(v, k){return k + v});
			r = r[0] + r[1] + r[2];
			assert.strictEqual('tonkatsu', r, "map でオブジェクトのキーと値を連結した文字列の配列を作れる");
		});
				
		test("reduce() シーケンスの各値を memo に凝縮する", function() {
			assert.strictEqual(10, _.reduce([1, 2, 3], function(memo, num){return memo + num;}, 4), "reduce で配列内の数値を足して一つの数値にできる");
			assert.strictEqual('abc', _.reduce({a:1, b:2, c:3}, function(memo, v, k){return memo + k;}, ''), "reduce でオブジェクト内のキーを一つの文字列にまとめる");
		});
				
		test("reduceRight() 右から左に作用する reduce", function() {
			assert.strictEqual(4 / 2 / 1, _.reduceRight([1, 2, 4], function(memo, num){return memo / num;}), "reduceRight で配列内の数値を足して一つの数値にできる");
			assert.strictEqual(1 / 2 / 4, _.reduce([1, 2, 4], function(memo, num){return memo / num;}), "reduce とは違う結果になる");
		});
				
		test("find() シーケンスを捜査して predicate 関数をパスする最初の値を返す", function() {
			assert.strictEqual(2, _.find([1, 2, 3, 4, 5, 6], function(v){return v % 2 == 0;}), "find で配列の中から最初の偶数を取り出せる");
		});
				
		test("filter() シーケンスを捜査して predicate 関数をパスするすべての値を格納した配列を返す", function() {
			assert.strictEqual([2, 4, 6].toString(), _.filter([1, 2, 3, 4, 5, 6], function(v){return v % 2 == 0;}).toString(), "filter で配列の中から偶数だけを取り出せる");
		});
				
		test("where() オブジェクトの配列から特定のキーと値のペアを持ったオブジェクトを抽出し、抽出されたオブジェクトの配列を返す", function() {
			var data = [
				{name:'TONKATSU', favorite:'curry', age:100},
				{name:'Asahara', favorite:'melon', age:100},
				{name:'Namayuba', favorite:'curry', age:50}
			];
			var r = _.where(data, {	favorite:'curry'});
			assert(r.length == 2 && r[0].name == 'TONKATSU' && r[1].name == 'Namayuba',"where でオブジェクトの配列から favorite の値が curry のオブジェクトだけを取り出せる");
			r = _.where(data, {	favorite:'curry', age:100});
			assert(r.length == 1 && r[0].name == 'TONKATSU',"where でオブジェクトの配列から favorite の値が curry のオブジェクトだけを取り出せる");
		});
				
		test("findWhere() オブジェクトの配列から特定のキーと値のペアを持った最初のオブジェクトを返す", function() {
			var data = [
				{name:'TONKATSU', favorite:'curry', age:100},
				{name:'Asahara', favorite:'melon', age:100},
				{name:'Namayuba', favorite:'curry', age:50}
			];
			var r = _.findWhere(data, {	favorite:'curry'});
			assert(r.name == 'TONKATSU',"where でオブジェクトの配列から favorite の値が curry のオブジェクトだけを取り出せる");
		});
		
		test("reject() シーケンスから predicate 関数が true を返す値を排除して、残った値の配列を返す", function() {
			var s = [1, 2, 3, 4, 5, 6];
			var r = _.reject(s, function(v){return v % 2 == 0;});
			r = r[0] + r[1] + r[2];
			assert.strictEqual(9, r, "reject で配列の中から偶数を排除できる");
			s = {
				a:'abc',
				b:'bcd',
				c:'cde',
				d:'def'
			};
			var r = _.reject(s, function(v, k){return v.indexOf('c') >= 0;});
			assert.strictEqual(r[0], 'def', "reject でオブジェクトの中から値に文字 c を含むアイテムを排除できる");
		});
				
		test("every() シーケンス内の全ての要素が predicate 関数をパスするなら true を返す", function() {
			assert.strictEqual(true, _.every([2, 4, 6, 8, 10, 12], function(v){return v % 2 == 0;}), "全て偶数なら true");
			assert.strictEqual(false, _.every([1, 2, 3, 4, 5, 6], function(v){return v % 2 == 0;}), "全て偶数でなければ false");
			var o = {
				'a':'TONKATSU',
				'b':'FILLETKATSU',
				'c':'TUNATKATSU',
			};
			assert.strictEqual(true, _.every(o, function(v, k){return v.indexOf('KATSU') >= 0;}), "すべての値が文字列 KATSU を含んでいれば true");
			o.d = 'UNKO';
			assert.strictEqual(false, _.every(o, function(v, k){return v.indexOf('KATSU') >= 0;}), "すべての値が文字列 KATSU を含んでいれば true");
		});
				
		test("some() シーケンス内の1つ以上の要素が predicate 関数をパスするなら true を返す", function() {
			assert.strictEqual(true, _.some([1, 2, 3, 4, 5, 6], function(v){return v % 2 == 0;}), "偶数が一つでもあれば true");
			assert.strictEqual(false, _.some([1, 3, 5, 7, 9, 11], function(v){return v % 2 == 0;}), "偶数が一つも無ければ false");
			var o = {
				'a':'TONKATSU',
				'b':'FILLETKATSU',
				'c':'TUNATKATSU',
			};
			assert.strictEqual(true, _.some(o, function(v, k){return v.indexOf('FILLET') >= 0;}), "文字列 FILLET を含む値があれば true");
			assert.strictEqual(false, _.some(o, function(v, k){return v.indexOf('UNKO') >= 0;}), "すべての値が文字列 UNKO を含んでいなければ false");
		});
				
		test("contains() シーケンス内に第2引数で指定した値が存在するなら true を返す", function() {
			assert.strictEqual(true, _.contains([1, 2, 3, 4, 5, 6], 4), "配列内に 4 があれば true");
			assert.strictEqual(false, _.contains([1, 3, 5, 7, 9, 11], 4), "配列内に 4 がなければ false");
			var o = {
				'a':'TONKATSU',
				'b':'FILLETKATSU',
				'c':'TUNATKATSU',
			};
			assert.strictEqual(true, _.contains(o, 'TONKATSU'), "値が文字列 TONKATSU である要素があるなら true");
			assert.strictEqual(false, _.contains(o, 'a'), "値が文字列 a である要素がないなら false");
		});
				
		test("invoke() 配列内の全ての要素に対して第2引数で指定した文字列と同じメソッド名のメソッドを実行させて、各返り値の配列を返す 第3引数以降でメソッドに渡す引数を指定できる", function() {
			assert.strictEqual([[1, 5, 7], [1, 2, 3]].toString(), _.invoke([[5, 1, 7], [3, 2, 1]], 'sort').toString(), "invoke で配列内の配列全てを Array.prototype.sort できる");
			assert.strictEqual(['pon', 'kapsu'].toString(), _.invoke(['ton', 'katsu'], 'replace', 't', 'p').toString(), "invoke で配列内の文字列全てに String.prototype.replace できる");
			var F = function(v){
				this.prop = v;
			};
			F.prototype = {
				m:function(v){
					this.prop += v;
					return this;
				},
			}
			f = new F('ton');
			g = new F('fillet');
			var r = _.invoke([f, g], 'm', 'katsu');
			r = r[0].prop + ',' + r[1].prop;
			assert.strictEqual('tonkatsu,filletkatsu', r, "自作クラスの自作メソッドを invoke できる");
			var r = _.invoke({'a':f, 'b':g}, 'm', 'Hiroba');
			r = r[0].prop + ',' + r[1].prop;
			assert.strictEqual('tonkatsuHiroba,filletkatsuHiroba', r, "オブジェクトに対しても実行できる(返り値は配列)");
		});
		
		test("pluck() オブジェクトの配列から、全てのオブジェクトの指定したキーの各値を格納した配列を返す", function() {
			var data = [
				{name:'TONKATSU', favorite:'curry', age:100},
				{name:'Namayuba', age:50},
				{name:'Asahara', favorite:'melon', age:100}
			];
			var r = _.pluck(data, 'age');
			assert.strictEqual(250, r[0] + r[1] + r[2], "age の値を全て抽出できる");
			r = _.pluck(data, 'favorite');
			assert.strictEqual('curry', r[0], "favorite の値を抽出できる");
			assert.strictEqual(undefined, r[1], "指定したキーが設定されていない場合 undefined が格納される");
			assert.strictEqual('melon', r[2], "favorite の値を抽出できる");
		});
		
		test("max/min() シーケンスの要素をイテレートして、返り値が最大のものを返す", function() {
			var data = [
				{name:'Super Unko Max', age:10},
				{name:'Super Mach X', age:50},
				{name:'Asahara', age:100}
			];
			var r = _.max(data, function(v){return v.name.length});
			assert.strictEqual('Super Unko Max', r.name, "一番長い名前のオブジェクトを選べる");
			r = _.min(data, function(v){return v.name.length * v.age});
			assert.strictEqual('Super Unko Max', r.name, "名前の長さと年齢の積が最小のオブジェクトを選べる");
		});
		
		test("sortBy() シーケンスの要素をイテレートして、返り値の小さい順に並び替える", function() {
			var data = [
				{name:'Super Unko Max', age:10},
				{name:'Super Mach X', age:100},
				{name:'Asahara', age:50}
			];
			var r = _.sortBy(data, function(v){return v.age});
			assert.strictEqual(true, r[0].name === 'Super Unko Max' && r[2].name === 'Super Mach X', "年齢順に並べ変える");
			r = _.sortBy(data, function(v){return v.name});
			assert.strictEqual(true, r[0].name === 'Asahara' && r[2].name === 'Super Unko Max', "アルファベット順に並べ変える");
		});
		
		test("groupBy() シーケンスをイテレートして、イテレーターの返り値をキーとして、それと同じ返り値を持つアイテムの配列を値とするオブジェクトを返す。イテレーターの代わりに文字列を指定すると、プロパティの値ごとにグループ分けされる", function() {
			var data = [
				{name:'Tonkatsu', favorite:'curry', age:100},
				{name:'Namayuba', favorite:'curry', age:50},
				{name:'Asahara', favorite:'melon', age:50},
			];
			
			var r = _.groupBy(data, 'favorite');
			assert.strictEqual(true, r.curry[0].name === 'Tonkatsu', "カレー好きのリストを作れる");
			assert.strictEqual(true, r.curry[1].name === 'Namayuba', "カレー好きのリストを作れる");
			assert.strictEqual(true, r.melon[0].name === 'Asahara', "メロン好きをカレー好きから分離できる");
			
			var r = _.groupBy(data, function(v){return v.age;});
			assert.strictEqual(true, r[100][0].name === 'Tonkatsu', "年齢別にグループ分けできる");
			assert.strictEqual(true, r[50][0].name === 'Namayuba', "年齢別にグループ分けできる");
			assert.strictEqual(true, r[50][1].name === 'Asahara', "年齢別にグループ分けできる");
			
		});
		
		test("indexBy() groupBy と同様だが、値が配列ではなくオブジェクトそのものである(返り値がユニークであることを想定)", function() {
			var data = [
				{name:'Tonkatsu', favorite:'curry', age:100},
				{name:'Namayuba', favorite:'curry', age:50},
				{name:'Asahara', favorite:'melon', age:50},
			];
			
			var r = _.indexBy(data, 'favorite');
			assert.strictEqual('Asahara', r.melon.name, "favorite の値をキーとしたオブジェクトが作れる");
			assert.strictEqual('Namayuba', r.curry.name, "キーがユニークでない場合は後に見つかったもので上書きされる");
			
		});
		
		test("countBy() 返り値をキーとして、それと同じ値を返したアイテムの数を値とするオブジェクトを返す", function() {
			var data = [
				{name:'Tonkatsu', favorite:'curry', age:100},
				{name:'Namayuba', favorite:'curry', age:50},
				{name:'Asahara', favorite:'melon', age:50},
			];
			
			var r = _.countBy(data, 'favorite');
			assert.strictEqual(1, r.melon, "メロン好きの人数を特定できる");
			assert.strictEqual(2, r.curry, "カレー好きの人数を特定できる");
			
		});
		
		test("shuffle() シーケンスの順序をシャッフルした配列を返す", function() {
			assert(true, "Untestable..");
		});
		
		test("sample() シーケンスの中からランダムに要素を選んで返す", function() {
			var r = _.sample([1, 2, 3, 4]);
			assert(r === 1 || r === 2 || r === 3 || r === 4, '配列の中のどれかを返す');
			r = _.sample('abcdefg', 2);
			assert.strictEqual(2, r.length, '文字列の中から2文字を選んで配列を返す');
		});
		
		test("toArray() ArrayLikeObject を Array にする", function() {
			var r = function(a, b){return arguments;}(1, 2);
			assert.strictEqual(2, r.length, 'arguments は ArrayLikeObject');
			assert.strictEqual(undefined, r.slice, 'arguments は ArrayLikeObject');
			assert.strictEqual(2, _.toArray(r).slice(1)[0], 'arguments を Array に変換できる');
		});
		
		test("size() シーケンスの要素の数を返す", function() {
			assert.strictEqual(3, _.size([1, 2, 3]), '配列の長さがわかる');
			assert.strictEqual(4, _.size({a:0, b:1, c:2, d:3}), 'オブジェクトの要素数がわかる');
		});
		
		test("partition() シーケンスの要素を predicate 関数をパスするものとしないものとで、2つの配列に分けた配列を返す", function() {
			var r = _.partition([1, 2, 3, 4, 5], function(v){return v % 2 === 0;});
			assert.strictEqual(2, _.size(r[0]), '偶数の要素は2つ');
			assert.strictEqual(3, _.size(r[1]), '奇数の要素は3つ');
			r = _.partition({a:'a', b:'b', c:'x', d:'d'}, function(v, k){return v === k;});
			assert.strictEqual(3, _.size(r[0]), 'キーと値が同じ要素は1つ');
			assert.strictEqual(1, _.size(r[1]), 'キーと値が違う要素は3つ');
			assert.strictEqual('x', r[1][0], '違うのは x');
		});
		
		test("first() 配列の最初の要素を返す", function() {
			assert.strictEqual(1, _.first([1, 2, 3, 4, 5]), '配列の最初の要素を返す');
			assert.strictEqual(2, _.first([1, 2, 3, 4, 5], 2)[1], '配列の最初の2つの要素を返す');
			assert.strictEqual(undefined, _.first([1, 2, 3, 4, 5], 2)[2], '配列の最初の2つの要素を返す');
		});
		
		test("initial() 配列の最後の一つ前までの要素の配列を返す", function() {
			assert.strictEqual(4, _.initial([1, 2, 3, 4, 5]).length, '配列の最後の一つ前までの要素の配列を返す');
		});
		
		test("last() 配列の最後の要素を返す", function() {
			assert.strictEqual(5, _.last([1, 2, 3, 4, 5]), '配列の最後の要素を返す');
		});
		
		test("rest() 配列の最初の要素以外の配列を返す", function() {
			assert.strictEqual(4, _.rest([1, 2, 3, 4, 5]).length, '配列の最初の要素以外の配列を返す');
			assert.strictEqual(2, _.rest([1, 2, 3, 4, 5])[0], '配列の最初の要素以外の配列を返す');
		});
		
		test("compact() 配列から undefined, null, false, 0, 空文字列 を取り除いた配列を返す", function() {
			assert.strictEqual(5, _.compact([1, 2, 3, 4, 5]).length, 'falsy な値がないときは単にコピーを返す');
			assert.strictEqual(4, _.compact(['', 2, 3, 4, 5]).length, '空文字列を取り除く');
			assert.strictEqual(4, _.compact([1, null, 3, 4, 5]).length, 'null を取り除く');
			assert.strictEqual(4, _.compact([1, 2, undefined, 4, 5]).length, 'null を取り除く');
			assert.strictEqual(4, _.compact([1, 2, 3, false, 5]).length, 'false を取り除く');
			assert.strictEqual(4, _.compact([1, 2, 3, 4, 0]).length, '0 を取り除く');
		});
		
		test("flatten() ネストされた配列を展開する。第2引数(shallow)に true を指定すると一段階しか展開しない", function() {
			assert.strictEqual(5, _.flatten([[[5]]])[0], '何段階でも展開する');
			assert.strictEqual(5, _.flatten([[[5]]], true)[0][0], '一段階しか展開しない');
		});
		
		test("without() 配列から第2引数以下で指定した値を取り除く", function() {
			assert.strictEqual(2, _.without([0, 1, 2, 3, 4], 1, 2, 3).length, '5つの値を持った配列から3つを取り除く');
			assert.strictEqual('e', _.without(['a', 'b', 'c', 'd', 'e'], 'a', 'b', 'c', 'd')[0], '5つの値を持った配列から4つを取り除く');
		});
		
		test("union() 複数の配列の要素からユニークな要素を取り出した配列を返す", function() {
			assert.strictEqual([3, 2, 1, 0, 4, 5].toString(), _.union([3, 2, 1, 0], [4, 3, 2, 1], [5, 4, 3, 2]).toString(), 'ユニークな数字を取り出して並び替える');
		});
		
		test("intersection() 複数の配列の要素から共通する要素を取り出した配列を返す", function() {
			assert.strictEqual([3, 2].toString(), _.intersection([3, 2, 1, 0], [4, 3, 2, 1], [5, 4, 3, 2]).toString(), '共通する数字だけを取り出して並び替える');
		});
		
		test("difference() 配列から第2引数以下で指定した配列の各要素と同じ要素を取り除く", function() {
			assert.strictEqual([3, 0].toString(), _.difference([3, 2, 1, 0], [4, 2], [5, 1]).toString(), 'ユニークな数字だけを取り出して並び替える');
		});
		
		test("uniq() 配列から同じ要素を取り除く", function() {
			assert.strictEqual([3, 2, 1, 0].toString(), _.uniq([3, 2, 1, 0, 2, 1]).toString(), '同じ数字を消す');
		});
		
		test("zip() 複数の配列から同じインデックスの要素を取り出して組にした配列の配列を返す", function() {
			var r = _.zip([1, 2, 3],[4, 5, 6],[7, 8, 9]);
			assert.strictEqual([1, 4, 7].toString(), r[0].toString(), '同じインデックスが組になっている');
			assert.strictEqual([2, 5, 8].toString(), r[1].toString(), '同じインデックスが組になっている');
			assert.strictEqual([3, 6, 9].toString(), r[2].toString(), '同じインデックスが組になっている');
		});
		
		test("unzip() 配列の配列から同じインデックスの要素を取り出して組にした配列の配列を返す", function() {
			var r = _.unzip([[1, 2, 3],[4, 5, 6],[7, 8, 9]]);
			assert.strictEqual([1, 4, 7].toString(), r[0].toString(), '同じインデックスが組になっている');
			assert.strictEqual([2, 5, 8].toString(), r[1].toString(), '同じインデックスが組になっている');
			assert.strictEqual([3, 6, 9].toString(), r[2].toString(), '同じインデックスが組になっている');
		});
		
		test("object() 複数の配列からオブジェクトを作って返す", function() {
			var r = _.object(['a', 'b', 'c'],[1, 2, 3]);
			assert.strictEqual(1, r.a, '2つの配列のインデックス 0 からキーと値を取る');
			assert.strictEqual(2, r.b, '2つの配列のインデックス 1 からキーと値を取る');
			assert.strictEqual(3, r.c, '2つの配列のインデックス 2 からキーと値を取る');
			var r = _.object([['a', 1], ['b', 2], ['c', 3]]);
			assert.strictEqual(1, r.a, '3つの配列をもつ配列の1番目の配列からキーと値を取る');
			assert.strictEqual(2, r.b, '3つの配列をもつ配列の2番目の配列からキーと値を取る');
			assert.strictEqual(3, r.c, '3つの配列をもつ配列の3番目の配列からキーと値を取る');
		});
		
		test("indexOf() 配列の中から第2引数と同じ要素を探して見つかった最初のインデックスを返す", function() {
			assert.strictEqual(2, _.indexOf(['a', 'b', 'c'], 'c'), '文字列 c のインデックスを返す');
			assert.strictEqual(2, _.indexOf(['a', 'b', 'c', 'c'], 'c'), '2つある場合最初のインデックスを返す');
			assert.strictEqual(-1, _.indexOf(['a', 'b', 'c', 'c'], 'd'), '見つからない時は -1 を返す');
		});
		
		test("lastIndexOf() 配列の中から第2引数と同じ要素を探して見つかった最初のインデックスを返す", function() {
			assert.strictEqual(2, _.lastIndexOf(['a', 'b', 'c'], 'c'), '同じ要素がないなら indexOf と同じ');
			assert.strictEqual(3, _.lastIndexOf(['a', 'b', 'c', 'c'], 'c'), '2つある場合最後のインデックスを返す');
			assert.strictEqual(-1, _.lastIndexOf(['a', 'b', 'c', 'c'], 'd'), '見つからない時は -1 を返す');
		});
		
		test("sortedIndex() 第2引数の値が配列の中で何番目かを返す。第3引数で判定に使うキー値か predicate 関数を指定できる", function() {
			assert.strictEqual(2, _.sortedIndex(['a', 'b', 'd'], 'c'), '文字列 c は2番目の要素');
			assert.strictEqual(2, _.sortedIndex([1, 2, 4, 5, 6], 3), '3 は 2 の次に来る');
			assert.strictEqual(1, _.sortedIndex([1, 5, 4, 2, 1], 3), '最初に見つかった自分より大きい値のインデックスを返す');
			assert.strictEqual(2, _.sortedIndex([1, 2, 3, 2, 1], 3), '最初に見つかった自分と同じ値のインデックスを返す');
			
			var data = [
				{name:'a', score:30, age:10},
				{name:'b', score:40, age:30},
				{name:'d', score:10, age:40},
			];
			
			assert.strictEqual(1, _.sortedIndex(data, {name:'c', score:40, age:20}, 'age'), 'オブジェクトの配列の場合、第3引数でキー値を指定できる');
			assert.strictEqual(2, _.sortedIndex(data, {name:'c', score:40, age:20}, 'name'), 'オブジェクトの配列の場合、第3引数でキー値を指定できる');
			assert.strictEqual(1, _.sortedIndex(data, {name:'c', score:40, age:20}, function(v){return v.score + v.age}), 'オブジェクトの配列の場合、第3引数で predicate 関数を指定できる');
			assert.strictEqual(3, _.sortedIndex(data, {name:'c', score:100, age:20}, function(v){return v.score + v.age}), 'オブジェクトの配列の場合、第3引数で predicate 関数を指定できる');
		});
				
	});
	
	$(function(){
		
		mocha.run();
		
	})
	
}();