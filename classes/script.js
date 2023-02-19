'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width); // супер завжди має бути першою строчкою в суперконструкторі
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// const long = new Rectangle(13, 4);
// console.log(square.calcArea());
// console.log(long.calcArea());