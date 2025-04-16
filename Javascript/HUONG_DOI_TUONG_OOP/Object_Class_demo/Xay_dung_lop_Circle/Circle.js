class Circle {
    constructor(radius = 0.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setColor(color) {
        this.color = color ;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

var c = new Circle(3, 'red')

console.log(c.getRadius());
console.log(c.getColor());
console.log(c.getArea());
