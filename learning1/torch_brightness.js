let index;

function preload() {
	img = loadImage('../assets/two-brown.jpg')
}


function setup() {
	createCanvas(600, 800);
	background(120)
	//for machine density issues we specify pixel density
	pixelDensity(1)
	img.resize(600, 400)
	img.loadPixels()
}

function draw() {
	loadPixels();
	for (let y=0; y<=400; y++) {
		for (let x=0; x<=width; x++) { 
			//getting the 1d location from 2d;
			//because we have 4 arguments(r,g,b,a)
			// of each pixel
			//we will be multiplying it by 4 to get to
			//next pixel location
			let loc = (x + y*width)*4;

			let r,g,b;
			r = img.pixels[loc]

			let maxdist = 50;
			let d = dist(x, y, mouseX, mouseY);
			let adjustbrightness = (255 * (maxdist - d))/maxdist
			r += adjustbrightness;

			r = constrain(r, 0, 255);

			index = (y* width + x) *4

			pixels[index+0] = r;
			pixels[index+1] = r;
			pixels[index+2] = r;
			pixels[index+3] = 255;		
		}
	}
	updatePixels()
}