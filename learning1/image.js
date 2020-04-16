let img;

function preload() {
	img = loadImage('../assets/two-brown.jpg')
	smallImg = loadImage('../assets/yellow-banana.jpg')
}

function setup() {
	createCanvas(600, 400);

	img.resize(600, 400);
	smallImg.resize(600, 400);
}

function draw() {
	image(img, 0,0)

	image(smallImg, width/2, height/2, smallImg.width/2, smallImg.height/2)
}
