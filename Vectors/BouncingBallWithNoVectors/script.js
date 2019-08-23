var x = 100
var y = 100
var xspeed = 1
var yspeed = 3.3

function setup(){
    createCanvas(640, 300)
    background(200)
}

function draw(){
    background(200)

    x = x + xspeed;
    y = y + yspeed;

    if( (x > width - 8) || (x < 8)){
        xspeed = -xspeed;
    }

    if( (y > height - 8) || (y < 8) ){
        yspeed = -yspeed;
    }

    stroke(0)
    fill(175)
    ellipse(x, y, 16, 16)
}