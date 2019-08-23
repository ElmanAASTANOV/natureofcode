class pVector{
    x;
    y;
    constructor (_x, _y){
        this.x = _x;
        this.y = _y;
    }

    static add(v1, v2){
        return new pVector(v1.x + v2.x, v1.y + v1.y);
    }

    static sub(v1, v2){
        return new pVector(v1.x - v2.x, v1.y - v1.y);
    }

    static mult(v, n){
        return new pVector(v.x * n, v.y * n);
    }

    static div(v, n){
        return new pVector(v.x / n, v.y / n);
    }

    add(v){
        this.y += v.y;
        this.x += v.x;
    }

    sub(v){
        this.x-= v.x;
        this.y-= v.y;
    }

    mult(n){
        this.x*=n;
        this.y*=n;
    }

    div(n){
        this.x/=n;
        this.y/=n;
    }

    mag(){
        return sqrt(this.x * this.x + this.y * this.y)
    }

    normalize(){
        let m = this.mag();
        if(m !==0){
            this.div(m)
        } 
    }

    limit(max){
        if(this.mag() > max){
            this.normalize();
            this.mult(max);
        }
    }
}