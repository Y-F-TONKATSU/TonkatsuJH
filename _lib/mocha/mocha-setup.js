var assert;
var expect;

var mochaSetup = function(){
	mocha.setup('bdd');
	mocha.setup('tdd');
	assert = chai.assert;
	// expectの機能を読み込み
	expect = chai.expect;
	// shouldの機能を読み込み
	chai.Should();
}
