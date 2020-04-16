let bg;
let y=0;

function preload() {
	bg = loadImage('../assets/white-headphone.jpg')
}

function setup() {
	createCanvas(600, 400)
	bg.resize(600, 400)
}

function draw() {
	background(bg);

	stroke(0, 0, 0);
	line(0, y, width, y);

	y++;
	if(y>height) {
		y = 0;
	}
}