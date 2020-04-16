function setup() {
	createCanvas(600, 400);
	background(0)
	noStroke();

	let gridSize = 40;

	for(let x=gridSize; x<=width-gridSize; x+=gridSize){
		for(let y=gridSize; y<=height-gridSize; y+=gridSize){
			fill(255);
			rect(x-1, y-1, 3, 3);
			stroke(255, 50);
			line(x, y, width / 2, height / 2);
		}
	}
}