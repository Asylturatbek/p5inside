function setup() {
	createCanvas(600, 400)
	textSize(30);
	textAlign(CENTER)
}
let count = 0

function draw() {
	background(100)

	push();
	translate(width *0.2, height *0.5)
	rotate(frameCount / 200)
	polygon(0,0, 82, 3)
	ellipse(0,0, 30, 30)
	point(0,0)
	pop()

	text(frameCount, width/2, 40)
	count += 1
	text('this is custom frameCount', width/2, 70)
	text(count, width/2, 100)

	push()
	translate(width*0.5, height*0.5)
	rotate(frameCount/50)
	polygon(0,0,80, 20)
	pop()

	push()
	translate(width *0.8, height*0.5)
	rotate(frameCount/-100)
	polygon(0,0,70, 7)
	pop()
}

function polygon(x, y, radius, npoints) {
	let angle = TWO_PI/npoints;
	beginShape();
	for (let a = 0; a<TWO_PI; a +=angle) {
		let sx = x +cos(a) * radius;
		let sy = y +sin(a) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE)
}