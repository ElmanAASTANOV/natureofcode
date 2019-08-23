class Walker {
    x;
    y;
    tx;
    ty;

    constructor() {
        this.x = width / 2;
        this.y = height / 2;

        this.tx = 0;
        this.ty = 1000;
    }

    display() {
        stroke(1);
        fill(color(255, 255, 255))
        point(this.x, this.y);
        
    }

    step() {
        
        this.x = map(noise(this.tx), 0, 1, 0 , width)
        this.y = map(noise(this.ty), 0, 1, 0 , height)

        this.tx+= 0.01;
        this.ty+= 0.01;

    }
}