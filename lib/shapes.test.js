const { Circle, Square, Triangle } = require('./shapes');


describe('Circle Test', () => {
    test('Test for a circle with a purple background', () => {
        const shape = new Circle();
        shape.setColor('purple');
        expect(shape.render()).toEqual(
            '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="purple" />' 
        );
    });
});

describe('Square Test', () => {
    test('Test for a square with a blue background', ()=> {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<rect x="50" height="200" width="200" fill="blue" />'
        );
    });
});

describe('Triangle Test', () => {
    test('Test for a yellow triangle', () => {
        const shape = new Triangle();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(
            "<polygon points='0, 200 300, 200 150, 0' fill='yellow' />"
        );
    });
});