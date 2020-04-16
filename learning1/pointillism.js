let img;
let smallPoint;

let x = 0;
let y = 0;

function preload() {
	img = loadImage('../assets/two-brown.jpg')
}

function setup() {
	createCanvas(600, 400)
	img.resize(600, 400)
	smallPoint = 20;
	// imageMode(CENTER)
	noStroke();
	background(255);
	img.loadPixels();
	// frameRate(8)
}

function draw() {
	let pointillize = smallPoint
	let x = floor(random(img.width));
	let y = floor(random(img.height));
	let pix = img.get(x, y);
	fill(pix, 128);
	ellipse(x, y, pointillize, pointillize)

	//==========================
	//this is for effect when showing sliding openof image
	//=============================

	// if(y >=height) {
	// 	y = 0;
	// }
	// if(x >= width) {
	// 	x = 0;
	// 	y += 20;
	// }
	// let pix = img.get(x, y, 20, 20)
	// image(pix, x, y)
	// x += 20;
}
