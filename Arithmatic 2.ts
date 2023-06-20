class Circle{
    Radius : number;
    pie : number;
        constructor(r:number, p ?: number){
        this.Radius = r;
        this.pie = 3.14;
        }
        
        AreaofCircle() : number{
            return this.Radius * this.Radius*this.pie
        }

        }
class CircleX extends Circle{
    constructor(Data : number){
        super(Data)
}
Calculatecircumferance() : number{
    let ans : number =0;
    ans = 2*this.pie*this.Radius;
    return ans
}
}

    var AA = new Circle(20);
    console.log(AA.AreaofCircle())

    var BB = new CircleX(25);
    console.log(BB.Calculatecircumferance())