// const { describe } = require('yargs');
const { logoData } = require('./../index');
const fs = require('fs');

jest.mock('fs');

// describe('logoData', () => {
//     it('should generate SVG file for a circle shape', () => {
//         const answers = {
//             shape: 'circle',
//             backgroundColor: 'black',
//             fontColor: 'gold',
//             message: 'ABC'
//         };
//         logoData(answers);
//        expect(fs.writeFile).toHaveBeenCalledWith(
//         'ABC.svg',
//         expect.stringContaining('<circle cx="150" cy="100" r="100" fill="black"/><text x="150" y="120" font-size="72" text-anchor="middle" fill="${fontColor}"><tspan font-weight="bold">${message}</tspan></text>'),
//         expect.any(Function)
//         ); 
//     });

// });

// shape.test.js
const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {
   

    test('Circle render method', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red"/>');
    });

    test('Square render method', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="green"/>');
    });
    test('Triangle render method', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 0 275,200 25,200" fill="blue" />');
    });
});