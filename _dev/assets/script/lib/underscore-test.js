var testCanvasHandler = function(){
	
	mochaSetup();
	
	suite('UnderScore Learning Tests', function() {
		
		setup(function(){
			
		});
		
		test("_ オブジェクト", function() {
			assert.strictEqual("function", typeof _, "_ が存在する。");
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
			assert(r.name == 'TONKATSU',"findWhere でオブジェクトの配列から favorite の値が curry の最初のオブジェクトを取り出せる");
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
				
		test("findIndex() 第2引数で指定した predicate 関数をパスする最初の要素のインデックスを返す", function() {
			assert.strictEqual(2, _.findIndex([0, 1, 2, 3, 4, 5, 6], function(v){return (v % 3 === 2)}), '最初の3で割って2余る数は2');
			assert.strictEqual(-1, _.findIndex([0, 1, 2, 3, 4, 5, 6], function(v){return (v > 10)}), 'パスする要素がなければ -1 を返す');
		});
		
		test("findLastIndex() 第2引数で指定した predicate 関数をパスする最後の要素のインデックスを返す", function() {
			assert.strictEqual(5, _.findLastIndex([0, 1, 2, 3, 4, 5, 6], function(v){return (v % 3 === 2)}), '最後の3で割って2余る数は5');
		});
		
		test("range() 整数の配列を作って返す", function() {
			assert.strictEqual([0, 1, 2].toString(), _.range(3).toString(), '3つの整数の配列を作る');
			assert.strictEqual([3, 4, 5].toString(), _.range(3, 6).toString(), '3から5までの整数の配列を作る');
			assert.strictEqual([3, 6, 9].toString(), _.range(3, 12, 3).toString(), '3から12までの3ずつ増加する整数の配列を作る');
			assert.strictEqual([3, 0, -3, -6, -9].toString(), _.range(3, -12, -3).toString(), '3から-12までの3ずつ現象する整数の配列を作る');
		});
		
		test("bind() 関数が常に指定したオブジェクトを this として実行されるようにする. 第3引数以降で引数を部分適用できる", function() {
			var f = function(){return this.namae;}
			var tf = _.bind(f, {namae:'tonkatsu'});
			assert.strictEqual(undefined, f(), 'f の this は window');
			assert.strictEqual('tonkatsu', tf(), '無名オブジェクトを f のコンテクストとして設定した');
			var g = function(v, w){return v * w * this.age;}
			var tg = _.bind(g, {age:10}, 5);
			assert.strictEqual(100, tg(2), 'g の第1引数に5を部分適用');
			
		});
		
		test("bindAll() オブジェクトの第2引数以降で名前を指定したメソッドが常にそのオブジェクトを this として実行されるようになる", function() {
			var o = {
				whatsThis:function(){return this},
				onNamae:function(){return this.namae},
				onAge:function(){return this.age},
				namae:'tonkatsu',
				age:10
			}
			var f = o.whatsThis;
			assert.strictEqual(window, f(), 'f の this は window');
			_.bindAll(o, 'whatsThis', 'onNamae', 'onAge');
			assert.strictEqual(window, f(), 'bindAll しても f の this はまだ window');
			var g = o.whatsThis;
			var h = o.onNamae;
			var i = o.onAge;
			assert.strictEqual(o, g(), 'g の this は o');
			assert.strictEqual('tonkatsu', h(), 'コンテクストを無視して o を this にする');
			assert.strictEqual(10, i(), 'コンテクストを無視して o を this にする');
			
		});
		
		test("partial() 引数の部分適用を行う", function() {
			var add = function(a, b){return a + b;}
			var add10 = _.partial(add, 10);
			assert.strictEqual(11, add10(1), '2つの引数を足す関数から1つの引数に10を足す関数を作る');
			var sub = function(a, b){return a - b;}
			var sub10 = _.partial(sub, _, 10);
			assert.strictEqual(10, sub10(20), '_ を指定すると、部分適用を行わない');
		});
		
		test("memoize() 関数が実行結果をキャッシュするようになる", function() {
			var add10 = function(a){return a + 10;}
			var superAdd10 = _.memoize(add10);
			var twenty = superAdd10(10);

			assert.strictEqual(20, twenty, '10を足す関数に10を渡すと戻り値は20');
			assert.strictEqual(twenty, superAdd10.cache['10'], '結果がキャッシュされている');
		});
		
		test("once() 2回目以降の実行を無効化するバージョンの関数を返す", function() {
			var i = 0;
			var f = function(){i++;};
			var onceF = _.once(f);
			assert.strictEqual(0, i, '発火する前の値は0');
			onceF();
			assert.strictEqual(1, i, '1回発火した後の値は1');
			onceF();
			assert.strictEqual(1, i, '2回発火した後の値も1のまま');
			f();
			assert.strictEqual(2, i, 'オリジナルの関数を発火すると2');
		});
		
		test("after() 指定した回数だけ呼ばれた後にのみ一回だけ発火する関数を返す", function() {
			var i = 0;
			var f = function(){i++;};
			var g = _.after(5, f);
			assert.strictEqual(0, i, '関数を1回も呼ばないと i は0');
			g();
			assert.strictEqual(0, i, '関数を1回呼んでも i は0');
			g();
			g();
			g();
			g();
			assert.strictEqual(1, i, '関数を5回呼ぶと i は1');
			g();
			assert.strictEqual(2, i, '関数を6回呼ぶと i は2');
			g();
			assert.strictEqual(3, i, '関数を7回呼ぶと i は3');
		});
		
		test("before() 指定した回数だけ呼ばれた後にのみ一回だけ発火する関数を返す", function() {
			var i = 0;
			var f = function(){i++;};
			var g = _.before(5, f);
			assert.strictEqual(0, i, '関数を1回も呼ばないと i は0');
			g();
			assert.strictEqual(1, i, '関数を1回呼ぶと i は1');
			g();
			g();
			g();
			assert.strictEqual(4, i, '関数を4回呼ぶと i は4');
			g();
			assert.strictEqual(4, i, '関数を5回呼んでも i は4');
			g();
			assert.strictEqual(4, i, '関数を6回呼んでも i は4');
		});
		
		test("wrap() 第1引数の関数を引数に固定したバージョンの第2引数に渡した関数を返す", function() {
			var i = 10;
			var f = function(){return i + 10;};
			var g = _.wrap(f, function(func){i += func() * 5;});
			g();
			assert.strictEqual(110, i, 'i は 110');
		});
		
		test("negate() predicate 関数の審議を逆にしたバージョンを返す", function() {
			var isEven = function(v){return v % 2 === 0;};
			var isOdd = _.negate(isEven);
			assert(isEven(2), '2 は 偶数');
			assert(isOdd(1), '1 は 奇数');
			
		});
		
		test("compose() 複数の関数を渡すとそれらを全て実行する関数を返す.返り値は次に実行される関数の引数になる", function() {
			var getTen = function(){return 10;}
			var multiplyTwo = function(v){return v * 2;}
			var subtractFifteen = function(v){return v - 15;}
			var comp = _.compose(subtractFifteen, multiplyTwo, getTen);
			assert.strictEqual(5, comp(), '10 に 2 を掛けて 15 引く関数を作った');
		});
		
		test("keys() オブジェクトの全てのキーの配列を返す", function() {
			var f = function(){
				this.a = 1;
				this.b = 2;
				this.c = 3;
			};
			f.prototype = {'d':4};
			o = new f();
			assert.strictEqual('a', _.keys(o)[0], '1番目のキーはa');
			assert.strictEqual('b', _.keys(o)[1], '2番目のキーはb');
			assert.strictEqual('c', _.keys(o)[2], '3番目のキーはc');
			assert.strictEqual(4, o.d, 'o はキー d を持っているが');
			assert.strictEqual(undefined, _.keys(o)[3], 'd は配列に含まれない');
			
		});
		
		test("allKeys() オブジェクトの全てのキーの配列を返す", function() {
			var f = function(){
				this.a = 1;
				this.b = 2;
				this.c = 3;
			};
			f.prototype = {'d':4};
			o = new f();
			assert.strictEqual('a', _.allKeys(o)[0], '1番目のキーはa');
			assert.strictEqual('b', _.allKeys(o)[1], '2番目のキーはb');
			assert.strictEqual('c', _.allKeys(o)[2], '3番目のキーはc');
			assert.strictEqual(4, o.d, 'o はキー d を持っていて');
			assert.strictEqual('d', _.allKeys(o)[3], 'd も配列に含まれる');
			
		});
		
		test("values() オブジェクトの全ての値の配列を返す", function() {
			var f = function(){
				this.a = 1;
				this.b = 2;
				this.c = 3;
			};
			f.prototype = {'d':4};
			o = new f();
			assert.strictEqual(1, _.values(o)[0], '1番目の値は1');
			assert.strictEqual(2, _.values(o)[1], '2番目の値は2');
			assert.strictEqual(3, _.values(o)[2], '3番目の値は3');
			assert.strictEqual(4, o.d, 'o は値 4 を持っているが');
			assert.strictEqual(undefined, _.values(o)[3], '4 は配列に含まれない');
			
		});
		
		test("mapObject() オブジェクトのキーと値を引数にとって関数を実行し、返り値をオブジェクトのそれぞれの値に代入したオブジェクトを返す", function() {
			var o =  {
				'unko':'man',
				'maguro':'man',
				'pants':'man',
			};
			var p = _.mapObject(o, function(v, k){
				return k + '-' + v;
			});
			assert.strictEqual('unko-man', p.unko, 'キーと値の文字列を結合して値に代入した');
			assert.strictEqual('maguro-man', p.maguro, 'キーと値の文字列を結合して値に代入した');
			assert.strictEqual('pants-man', p.pants, 'キーと値の文字列を結合して値に代入した');
			
		});
		
		test("pairs() オブジェクトをキー(0)と値(1)の2つのインデックスを持つ配列の配列に変換して返す", function() {
			var o =  {
				'unko':'man',
				'maguro':'man',
				'pants':'man',
			};
			var p = _.pairs(o);
			assert.strictEqual('unko', p[0][0], 'オブジェクトを配列の配列に変換した');
			assert.strictEqual('man', p[0][1], 'オブジェクトを配列の配列に変換した');
			assert.strictEqual('maguro', p[1][0], 'オブジェクトを配列の配列に変換した');
			assert.strictEqual('man', p[1][1], 'オブジェクトを配列の配列に変換した');
			assert.strictEqual('pants', p[2][0], 'オブジェクトを配列の配列に変換した');
			assert.strictEqual('man', p[2][1], 'オブジェクトを配列の配列に変換した');
			
		});
		
		test("invert() オブジェクトのキーと値を入れ替える", function() {
			var o =  {
				'unko':'max',
				'maguro':'man',
				'pants':'master',
			};
			var p = _.invert(o);
			assert.strictEqual('unko', p.max, 'キーと値の文字列を入れ替えた');
			assert.strictEqual('maguro', p.man, 'キーと値の文字列を入れ替えた');
			assert.strictEqual('pants', p.master, 'キーと値の文字列を入れ替えた');
			
		});
		
		test("create() プロトタイプから新しいオブジェクトを作って返す", function() {
			var f = function(){
				this.name = 'unko';
			};
			f.prototype = {
				p:'proto',
				q:'qroto'
			};
			var o = _.create(f.prototype, {p:'curry'});
			
			assert.strictEqual('qroto', o.q, 'プロトタイプが q を持つ新しいオブジェクトを作った');
			assert.strictEqual('curry', o.p, 'p を上書きして新しいオブジェクトを作った');
			
		});
		
		test("functions() オブジェクトが持つ全ての関数の配列を返す", function() {
			var f = function(){
				this.f = function(){};
			};
			f.prototype = {
				g:function(){},
				h:function(){}
			};
			var o = new f();
			
			assert.strictEqual(3, _.functions(o).length, 'オブジェクトが持つ関数を数え上げた');
			
		});
		
		test("findKey() predicate 関数をパスする要素のキーを返す", function() {
			var f = function(){
				this.p = 2;
				this.q = 3;
				this.r = 4;
			};
			f.prototype = {
				s:5,
				t:6
			};
			var o = new f();
			
			assert.strictEqual('q', _.findKey(o, function(v, k){return v % 2 == 1}), '奇数の値を持つキーを見つけた');
			assert.strictEqual(undefined, _.findKey(o, function(v, k){return v % 4 == 1}), 'プロトタイプからは値を見つけない');
			
		});
		
		test("extend() 第2引数のオブジェクトの全てのプロパティを第1引数のオブジェクトにコピーする", function(){
			var person = {
				name:'tonkatsu',
				age:100
			};
			
			var Ability = function(){
				this.specialPower = 'unkomax';
				this.age = 200;
			}
			Ability.prototype = {
				favorite:'curry',
			};
			ability = new Ability();
			
			assert.strictEqual(person.specialPower, undefined, 'extend する前はプロパティがない');
			
			_.extend(person, ability);
			
			assert.strictEqual(person.name, 'tonkatsu', '元からあったプロパティは変わらない');
			assert.strictEqual(person.specialPower, 'unkomax', 'ablility のプロパティがコピーされている');			
			assert.strictEqual(person.age, 200, '元からあったプロパティは上書きされる');
			assert.strictEqual(person.favorite, 'curry', 'プロトタイプのオブジェクトも追加される');
			
		});
		
				
		test("extendOwn() 第2引数のオブジェクトの全てのプロパティを第1引数のオブジェクトにコピーする", function(){
			var person = {
				name:'tonkatsu',
				age:100
			};
			
			var Ability = function(){
				this.specialPower = 'unkomax';
				this.age = 200;
			}
			Ability.prototype = {
				favorite:'curry',
			};
			ability = new Ability();
			
			_.extendOwn(person, ability);
			
			assert.strictEqual(person.name, 'tonkatsu', '元からあったプロパティは変わらない');
			assert.strictEqual(person.specialPower, 'unkomax', 'ablility のプロパティがコピーされている');			
			assert.strictEqual(person.age, 200, '元からあったプロパティは上書きされる');
			assert.strictEqual(person.favorite, undefined, 'プロトタイプのオブジェクトは追加されない');
			
			
		});
		
				
		test("pick() オブジェクトから指定したプロパティを抽出したオブジェクトを返す", function(){
			var person = {
				name:'tonkatsu',
				age:100,
				favorite:'curry',
				unkoA:'A',
				unkoB:'B',
			};
			
			
			var client = _.pick(person, 'name', 'age');
			
			assert.strictEqual(client.name, 'tonkatsu', 'name は抽出されている');
			assert.strictEqual(client.favorite, undefined, 'favoirite は抽出されていない');
			
			var soldier = _.pick(person, function(value, key, object){
				return key.indexOf('unko') >= 0;
			});
			
			assert.strictEqual(soldier.name, undefined, 'name は抽出されていない');
			assert.strictEqual(soldier.unkoA, 'A', 'unko がキーに含まれるプロパティは抽出されている');
			assert.strictEqual(soldier.unkoB, 'B', 'unko がキーに含まれるプロパティは抽出されている');
			
			
		});
		
		test("omit() オブジェクトから指定したプロパティをオミットしたオブジェクトを返す", function(){
			var person = {
				name:'tonkatsu',
				age:100,
				favorite:'curry',
				unkoA:'A',
				unkoB:'B',

			};
			
			
			var client = _.omit(person, 'favorite', 'age');
			
			assert.strictEqual(client.name, 'tonkatsu', 'name はオミットされていない');
			assert.strictEqual(client.favorite, undefined, 'favoirite はオミットされている');
			
			var soldier = _.omit(person, function(value, key, object){
				return key.indexOf('unko') >= 0;
			});
			
			assert.strictEqual(soldier.name, 'tonkatsu', 'name はオミットされていない');
			assert.strictEqual(soldier.unkoA, undefined, 'unko がキーに含まれるプロパティはオミットされている');
			assert.strictEqual(soldier.unkoB, undefined, 'unko がキーに含まれるプロパティはオミットされている');
			
			
		});
		
				
		test("defaults() 指定したプロパティが undefined の時のみ、値を設定する", function(){
			var person = {
				name:'tonkatsu',
				age:100,
				favorite:'curry',
			};
			
			
			var ninja = _.defaults(person, {name:'Hattori' , skill:'unko beam'});
			
			assert.strictEqual(ninja.name, 'tonkatsu', 'name は変更されていない');
			assert.strictEqual(ninja.skill, 'unko beam', 'skill はデフォルト値が設定されている');
			
			
		});
		
		test("clone() オブジェクトの浅いコピーを作る", function(){
			
			var o = {
				name:'unko'
			}
			
			var person = {
				name:'tonkatsu',
				favorite:o,
			};
			
			
			var ninja = _.clone(person);
			
			assert.strictEqual(ninja.name, 'tonkatsu', 'name がコピーされている');
			assert.strictEqual(ninja.favorite.name, 'unko', '参照がコピーされている');
			
			o.name = 'curry';
			
			assert.strictEqual(ninja.favorite.name, 'curry', '参照元の変更を反映');
									
			
		});
		
		test("tap() 関数をラッパーオブジェクトを返すようにして、メソッドチェインに繋げるようにする", function(){
			
			var o = {
				a:1,
				b:2,
				c:3,
			};
			
			var p = _.chain(o)
			.filter(function(value){
					return value % 2 === 0;
				})
			.tap(function(self){
				self.size = _.size(self);
				})
			.value();
			
			assert.strictEqual(p.size, 1, '関数をメソッドチェインに繋げた');
									
			
		});
		
		test("matcher() 指定したオブジェクトに一致するキーと値を持つオブジェクトなら true を返す predicate 関数を返す", function(){
			
			var personA = {
				name:'tonkatsu',
				favorite:'curry'
			};
			
			var personB = {
				name:'tonkatsu',
				favorite:'unko'
			};
			
			var isTonkatsu = _.matcher({'name':'tonkatsu', 'favorite':'curry'});
			
			var list = [personA, personB];
			var filtered = _.filter(list, isTonkatsu);
						
			assert.strictEqual(1, filtered.length, 'predicate 関数で要素がフィルタされた');
			assert.strictEqual('curry', filtered[0].favorite, 'matcher で指定したオブジェクトと同じプロパティを持つ要素が残った');
									
			
		});
		
		test("property() オブジェクトを引数として渡すと、指定した文字列のキーの値を取得する関数を返す", function(){
			
			var o = {
				name:'tonkatsu',
				favorite:'curry'
			};
			
			var getFavorite = _.property('favorite');
			var r = getFavorite(o);
									
			assert.strictEqual('curry', r, 'favorite の値を調べる関数を作った');
									
			
		});
		
		test("propertyOf() 文字列を引数として渡すと、指定したオブジェクトからその文字列をキーとする値を取得する関数を返す", function(){
			
			var o = {
				name:'tonkatsu',
				favorite:'curry'
			};
			
			var getFromObject = _.propertyOf(o);
			var r = getFromObject('favorite');
									
			assert.strictEqual('curry', r, 'favorite の値を調べる関数を作った');
									
			
		});
		
		test("isEqual() オブジェクトを深く比較する", function(){
			
			var o = {
				name:'tonkatsu',
				favorite:'curry'
			};
			
			var p = {
				name:'tonkatsu',
				favorite:'curry'
			};
			
			assert(_.isEqual(o, p), 'オブジェクトのプロパティが全て同じなら true');
			p.favorite = 'unko';
			assert(!_.isEqual(o, p), 'オブジェクトのプロパティが全て同じなら false');									
			
		});
		
		test("isMatch() 第1引数のオブジェクトが、第2引数のオブジェクトの全てのプロパティについて、同じ値を持っていれば true を返す", function(){
			
			var o = {
				name:'tonkatsu',
				favorite:'curry'
			};
			
			var p = {
				favorite:'curry'
			};
			
			var q = {
				favorite:'unko'
			};
			
			var r = {
				name:'tonkatsu',
				age:100
			};
			
			assert(_.isMatch(o, p), 'q のプロパティが全て o と同じなので true');
			assert(!_.isMatch(o, q), 'favorite の値が違うので false');
			assert(!_.isMatch(o, r), 'o は age プロパティを持っていないので false');
			
		});
		
				
		test("isElement() DOM エレメントであれば true を返す", function(){
			
			var o = {
				name:'tonkatsu',
				favorite:'curry'
			};
			
			var e = $('div').get(0);
			var f = $('div');
			
			
			assert(!_.isElement(o), 'o は DOM ではない');
			assert(_.isElement(e), 'e は DOM');
			assert(!_.isElement(f), 'jQuery オブジェクトでは false');
			
		});
		
		test("isEmpty() 空であれば true を返す", function(){
			
			assert(_.isEmpty({}), '空オブジェクトに true を返す');
			assert(_.isEmpty([]), '空配列に true を返す');
			assert(_.isEmpty(""), '空文字列に true を返す');
			
			assert(!_.isEmpty({o:""}), '中身があると false');
			assert(!_.isEmpty([1]), '中身があると false');
			assert(!_.isEmpty("unko"), '中身があると false');
			assert(_.isEmpty(1), 'シーケンシャルデータでなければ true');
		});
		
		test("isArray() 配列であれば true を返す", function(){
			
			assert(!_.isArray({}), '空オブジェクトに false を返す');
			assert(_.isArray([]), '空配列に true を返す');
			assert(!_.isArray(""), '空文字列に false を返す');
			
		});
		
		
		test("isObject() オブジェクトであれば true を返す。配列や関数もオブジェクトとみなされる。", function(){
			
			assert(_.isObject({}), '空オブジェクトに true を返す');
			assert(_.isObject([]), '空配列に true を返す');
			assert(_.isObject(function(){}), '関数オブジェクトに true を返す');
			assert(!_.isObject(""), '空文字列に false を返す');
			
		});
		
		test("isArguments() arguments オブジェクトであれば true を返す。", function(){
			
			var v = function(){
				assert(_.isArguments(arguments), 'arguments オブジェクトに true を返す');
				return arguments;
			}();
			
			assert(_.isArguments(v), '関数の外でも true を返す');
			
			var arguments = {"unko":"0"};
			
			assert(!_.isArguments(arguments), 'arguments でなければ false');
			
			
		});
		
		test("isFunction() 関数であれば true を返す。", function(){
			
			assert(_.isFunction(function(){}), '関数オブジェクトに true を返す');
			assert(!_.isFunction({}), 'ただのオブジェクトに false を返す');
			
		});
		
		test("isString() 文字列であれば true を返す。", function(){
			
			assert(_.isString(""), '空文字列に true を返す');
			assert(!_.isString(function(){}), '関数オブジェクトに false を返す');
			assert(!_.isString({}), 'ただのオブジェクトに false を返す');
			
		});
		
		test("identity() 同じオブジェクトを返す", function(){
			
			var o = {"name":"tonkatsu"};
			
			assert(_.identity(o) === o, '同じオブジェクトに true を返す');
			
		});
		
		test("constant() 引数と同じ値を常に返す関数を返す", function(){
			
			var o = {"name":"tonkatsu"};
			var con = _.constant(o);
			
			assert(con() === o, '関数の実行結果と引数が同じ');
			
		});
		
		test("noop() 常に undefined を返す関数を返す", function(){
			
			assert(_.noop() === undefined, '引数無しで undefined を返す');
			assert(_.noop({}) === undefined, '引数有りで undefined を返す');
			
		});
		
		test("times() 第1引数で指定した回数分だけ、第2引数で指定する関数を実行する", function(){
			
			var n = 0;
			
			var f = function(){
				n++;
			}
			
			_.times(5, f);
			
			assert(n === 5, '関数が5回実行された');
			
			n = 0;
			
			var g = function(index){
				n += index;
			}
			
			_.times(5, g);
			
			assert(n === 10, '引数として実行回数を受け取る');
			
			
		});
		
		test("mixin() 値として関数を持つオブジェクトを渡すと、その関数をそのキーの名前で _ オブジェクトに追加する", function(){
			
			_.mixin({'getUnko': function(x){return x + 'unko'}});
			
			assert(_.getUnko('super') === 'superunko', 'getUnko 関数を追加した');
			
			
		});
		
		test("escape() HTML の特殊文字をエスケープする", function(){
			
			var braces = _.escape("<>");			
			assert(braces === '&lt;&gt;', '山カッコをエスケープした');
			
			var quote = _.escape('"');			
			assert(quote === '&quot;', 'ダブルクォートをエスケープした');
			
			var squote = _.escape("'");			
			assert(squote === '&#x27;', 'シングルクォートをエスケープした');
			
			var amp = _.escape("&");			
			assert(amp === '&amp;', 'アンパサンドをエスケープした');
			
		});
		
		test("unescape() エスケープされた HTML の特殊文字を元に戻す", function(){
			
			var braces = _.unescape("&lt;&gt;");
			console.log(braces);
			assert(braces === '<>', '山カッコを戻した');
			
			var quote = _.unescape('&quot;');			
			assert(quote === '"', 'ダブルクォートを戻した');
			
			var squote = _.unescape("&#x27;");			
			assert(squote === "'", 'シングルクォートを戻した');
			
			var amp = _.unescape("&amp;");			
			assert(amp === '&', 'アンパサンドを戻した');
			
		});
		
		test("result() 第1引数のオブジェクトのプロパティ名を第2引数で指定すると、関数の場合実行結果を返す", function(){
			
			var o = {
				name:'tonkatsu',
				getUnko:function(){return 'unko';}	
			}
			
			assert(_.result(o, 'name') === 'tonkatsu', '第2引数で指定したプロパティを返す');
			assert(_.result(o, 'getUnko') === 'unko', '第2引数で指定した関数を実行する');
			assert(_.result(o, 'getCurry', 'nothing') === 'nothing', 'プロパティがない場合、第3引数で指定したデフォルト値を返す。');
			
		});
		
				
	});
	
	$(function(){
		
		mocha.run();
		
	})
	
}();