let y;

function setup() {
	createCanvas(600, 400)
	// background(0, 100)
	pg = createGraphics(400, 250)
	// noLoop()
}

function draw() {
	/*
	second argument of fill takes
	tranparency which is how fast
	it is going to become black
	 */
	fill(0, 12)
	rect(0, 0, width, height)
	fill(255)
	noStroke()
	ellipse(mouseX, mouseY, 60, 60)

	pg.background(51)
	pg.noFill()
	pg.stroke(255)
	pg.ellipse(mouseX-100, mouseY-75, 60, 60)

	image(pg, 100, 75)
}
