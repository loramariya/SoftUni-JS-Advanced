class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'Red');
let rect2 = new Rectangle(5, 10, 'Orange');
console.log(rect.calcArea());
console.log(rect2.calcArea());

