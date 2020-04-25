/*
variables of my version of code
 */
// let d = 50
// let inc = 2
// let minus = -2;
// let plus = 2

let diameter;
let angle = 0;
function setup(){
	createCanvas(710, 400)
	diameter = height -10;
	noStroke()
	fill(255, 204, 0);
	// frameRate(2)
}

function draw() {
	background(0)

	/*
	my version of sine smooth scaling
	 */	
	// ellipse(width/2, height/2, d, d)
	// text(frameCount, 60, 30)
	// text(d, 90, 30)
	// d+=inc
	// if(d==290){
	// 	inc = minus
	// } else if (d==-290){
	// 	inc = plus
	// }
	
	let d1 = 10 + (sin(angle)*diameter) / 2 + diameter / 2;
	// let d1 = 10 + (sin(angle)*diameter);
	let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
	let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

	text(d1, 175, 30)
	text((sin(angle)), 175, 40)

	text(d2, 525, 30)
	text((sin(angle + PI/2)), 525, 40)

	ellipse(0, height/2, d1, d1);
	ellipse(width/2, height/2, d2, d2)
	ellipse(width, height/2, d3, d3)

	angle += 0.02
}