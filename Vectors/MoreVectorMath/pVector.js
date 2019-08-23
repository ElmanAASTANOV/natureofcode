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
}