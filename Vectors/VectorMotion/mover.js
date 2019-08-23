class Mover {
    loc;
    vel;
    acc;
    topspeed;

    constructor() {
        this.loc = new pVector(random(width / 2), random(height / 2));
        this.vel = new pVector(0, 0);
        this.acc = new pVector(0,0);
        this.topspeed = 10;
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.topspeed);
        this.loc.add(this.vel);
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.loc.x, this.loc.y, 16, 16);
    }

    checkEdges() {
        if (this.loc.x > width) {
            this.loc.x = 0;
        } else if (this.loc.x < 0) {
            this.loc.x = width;
        }
        if (this.loc.y > height) {
            this.loc.y = 0;
        } else if (this.loc.y < 0) {
            this.loc.y = height;
        }
    }
}