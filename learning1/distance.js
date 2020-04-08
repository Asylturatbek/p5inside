function setup() {
	createCanvas(600, 400)
}

function draw() {
	background(204);

	push()
	translate(width/2, height/2);
	let a = atan2(mouseY -height/2, mouseX -width/2)
	rotate(a);
	fill('#DBF432')
	rect(-60, -10, 120, 20)
	pop()

	let x1 = 30;
	let y1 = 350;
	let x2 = mouseX;
	let y2 = mouseY;

	line(x1, y1, x2, y2)
	ellipse(x1, y1, 10, 10)
	ellipse(x2, y2, 10, 10)

	let d = int(dist(x1, y1, x2, y2))

	push()
	translate((x2+x1)/2, (y2+y1)/2)
	rotate(atan2(y2-y1, x2-x1));
	text(nfc(d,1), 0, -5)
	pop()
}