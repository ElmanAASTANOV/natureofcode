
function setup(){
    createCanvas(1400, 800)
    background(51)
    frameRate(1)
}

function draw(){
    loadPixels()

    let xoff = 0.0;
    for (let x = 0; x < width; x++) {
        let yoff = 0.0;

        for (let y = 0; y < height; y++) {

            let bright = map(noise(xoff,yoff), 0, 1, 0 ,255);
            set(x,y,color(bright));
            yoff+=0.01;
        }
        xoff+=0.01;
    }

    updatePixels()
}
