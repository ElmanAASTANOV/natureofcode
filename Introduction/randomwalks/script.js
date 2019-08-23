var walker;

function setup() {
    createCanvas(640, 300)
    frameRate(500)
    background(215);

    walker = new Walker()
}


function draw() {
    
   walker.display();
   walker.step();

}
