function setup(){
    createCanvas(640, 360)
}

function draw(){
    background(255)

    let mouse = new pVector(mouseX, mouseY);
    let center = new pVector(width/2, height/2);
    
    mouse.sub(center);
    
    mouse.normalize();
    mouse.mult(50);

    translate(width/2,  height/2)
    line(0,0, mouse.x, mouse.y)
}