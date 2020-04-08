let bug;

function setup() {
	createCanvas(600, 400)
	bug = new Jitter()
}

function draw() {
	background(50, 89, 100);
	bug.move()
	bug.display()
}

class Jitter {
	constructor() {
		this.x = random(width)
		this.y = random(height)
		this.diameter = random(10, 30);
		this.speed = 1;
	}

	move() {
		this.x += random(-this.speed, this.speed)
		this.y +=random(-this.speed, this.speed)

	}

	display() {
		ellipse(this.x, this.y, this.diameter, this.diameter)
	}
}