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

describe('logoData', () => {
    beforeEach(() => {
        fs.writeFile.mockClear(); // Clear any previous mock calls
    });

    it('should generate SVG for a circle shape', () => {
        const answers = {
            shape: 'circle',
            backgroundColor: 'red',
            fontColor: 'white',
            message: 'ABC'
        };

        logoData(answers);

        expect(fs.writeFile).toHaveBeenCalledWith(
            'ABC.svg',
            expect.stringContaining('<circle cx="150" cy="100" r="100" fill="red"/>'),
            expect.any(Function)
        );
    });

    it('should generate SVG for a square shape', () => {
        const answers = {
            shape: 'square',
            backgroundColor: 'blue',
            fontColor: 'yellow',
            message: 'AB'
        };

        logoData(answers);

        expect(fs.writeFile).toHaveBeenCalledWith(
            'AB.svg',
            expect.stringContaining('<rect x="50" y="0" width="200" height="200" fill="blue"/>'),
            expect.any(Function)
        );
    });

    it('should log an error for a message longer than 3 characters', () => {
        const answers = {
            shape: 'circle',
            backgroundColor: 'green',
            fontColor: 'black',
            message: 'Long'
        };

        console.log = jest.fn(); // Mock console.log

        logoData(answers);

        expect(console.log).toHaveBeenCalledWith('Logo must be greater than 0 characters and less than 4 characters');
    });
});