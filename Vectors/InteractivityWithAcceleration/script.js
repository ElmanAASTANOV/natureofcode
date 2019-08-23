var mover;
function setup() {
    createCanvas(640, 360);
    mover = new Mover();
    frameRate(60)
}

function draw() {
    background(240);
    mover.update();
    mover.checkEdges();
    mover.display();

    
}