function setup() {
	createCanvas(640, 480);
}

var r;
var t = 0;
function draw() {
	r = Math.sin(t) * 100;
	console.log(r);
	ellipse(320, 240, r, r);
	t += Math.PI / 100;
}

