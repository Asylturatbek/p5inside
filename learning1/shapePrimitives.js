function setup() {
	createCanvas(600, 400)
	background(0)
	noStroke()
	
	fill(204);
	triangle(18, 18, 18, 360, 81, 360);

	fill(104)
	rect(81, 81, 63, 63, 20, 20, 20, 20)

	fill(204)
	quad(189, 18, 216, 18, 216, 360, 144, 360)

	fill(255)
	ellipse(252, 144, 72, 72)

	fill(204)
	triangle(288, 18, 351, 360, 288, 360)

	// fill(255)
	stroke(255)
	noFill()
	arc(469, 300, 250, 250, 
		3.14, TWO_PI-QUARTER_PI)

	fill(255)
	arc(469, 100, 100, 100, 3.14, 6.50)
}

function draw() {

}
