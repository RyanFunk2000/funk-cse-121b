const pi = 3.14;
let area = 0;

function circleArea(radius) {
    area = radius * radius * pi;
}

circleArea(3);
console.log("Area1: ", area);
radius = 4;
area = radius * radius * pi;
console.log("Area2: ", area)