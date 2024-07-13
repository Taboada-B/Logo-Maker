const fs = require('fs');

//first function data is sent from index.js
function logoData(answers) {
    // deconstructing object
    const { filetype, shape, backgroundColor, fontColor, message } = answers;
    // dynamically making filename
    const fileName = 'logo.svg';
    // writeMessage(message);
    // initializing data
    let background = '';
    // picking shape and pushing into data
    // background is basic shape and background color

    switch (shape) {
        case 'circle':
            background = `<circle cx="150" cy="100" r="100" fill="${backgroundColor}"/>
                            <text x="150" y="110" font-size="34" text-anchor="middle" fill="${fontColor}">
                                <tspan font-weight="bold">${message}</tspan>
                            </text>`;
            break;
        case 'square':
            background = ` <rect x="50" y="0" width="200" height="200" fill="${backgroundColor}"/>
                            <text x="150" y="110" font-size="34" text-anchor="middle" fill="${fontColor}">
                                <tspan font-weight="bold">${message}</tspan>
                             </text>/>`;
            break;
        case 'triangle':
            background = `<svg id="triangle" viewBox="0 0 100 100"><polygon points="50 15, 100 100, 0 100" fill="${backgroundColor}"/></svg>`;
            break;

        default: background = '<circle cx="25" cy="75" r="20"/>'
            break;
    }

    // writing svg file data
    const SVGfile =
        `<svg width="300" height="200">
        ${background}


        </svg>`


    generateFile(fileName, SVGfile)
};


// function writeMessage(message) {
//     const fontSize = '';
//     if (message.length < 6) {
//         fontSize = '38';
//     }
//     else if (message.length < 10) {
//         fontSize = '34';
//     }
//     else {
//         fontSize = '28';
//     }
//     return fontSize
// };



function generateFile(fileName, data) {

    return console.log(fileName, data);
}

module.exports = {
    logoData
};