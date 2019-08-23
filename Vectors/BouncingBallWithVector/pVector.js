class pVector{
    x;
    y;
    constructor (_x, _y){
        this.x = _x;
        this.y = _y;
    }

    add(v){
        this.y += v.y;
        this.x += v.x;
    }
}