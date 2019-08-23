var loc;
var vel;



function setup() {
    createCanvas(640, 360)
    loc = new pVector(100, 100);
    vel = new pVector(2.5, 5);
}

function draw() {
   background(200)
   loc.add(vel);

   if( (loc.x > width) || (loc.x < 0) ){
       vel.x *=-1;
   }
   if( (loc.y > height) || (loc.y < 0) ){
    vel.y *=-1;
    }

    stroke(0);
    fill(175)
    //sphere(30,loc.x, loc.y)
    ellipse(loc.x, loc.y, 16, 16)

}

