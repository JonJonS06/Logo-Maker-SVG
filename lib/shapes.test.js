const { Circle, Square, Triangle } = require('./shapes');


describe('Circle Test', () => {
    test('Test for a circle with a purple background', () => {
        const shape = new Circle();
        shape.setColor('purple');
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="purple" />' 
        );
    });
});

describe('Square Test', () => {
    test('Test for a square with a blue background', ()=> {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="blue" />'
        );
    });
});

describe('Triangle Test', () => {
    test('Test for a yellow triangle', () => {
        const shape = new Triangle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(
            "<polygon points='150, 18 244, 182 56, 182' fill='yellow' />"
        );
    });
});