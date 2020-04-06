function setup() {
	createCanvas(600, 400)
	noFill()
	stroke(255)
}

function draw() {
	background(0)
	for (let i=0; i<200; i+=20) {
		bezier(
			mouseX - i/2, 40 + i,
			410, 20,
			440, 300,
			240-i/16, 300+i/8
		)
	}
}