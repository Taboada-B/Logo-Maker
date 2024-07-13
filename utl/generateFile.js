const fs = require('fs');

//first function data is sent from index.js
function logoData(answers) {
    // deconstructing object
    const { filetype, shape, backgroundColor, fontColor, message, fontSize } = answers;
    // dynamically making filename
    const fileName = 'logo.svg';
    // initializing data
    let background = '';
    // picking shape

    switch (shape) {
        case 'circle':
            background =
                `<circle cx="150" cy="100" r="100" fill="${backgroundColor}"/>
                    <text x="150" y="110" font-size="${fontSize}" text-anchor="middle" fill="${fontColor}">
                        <tspan font-weight="bold">${message}</tspan>
                    </text>`;
            break;
        case 'square':
            background =
                `<rect x="50" y="0" width="200" height="200" fill="${backgroundColor}"/>
                    <text x="150" y="110" font-size="${fontSize}" text-anchor="middle" fill="${fontColor}">
                        <tspan font-weight="bold">${message}</tspan>
                    </text>/>`;
            break;
        case 'triangle':
            background =
                `<polygon points="150, 0 275,200 25,200" fill="${backgroundColor}" />
                    <text x="150" y="120" font-size="${fontSize}" text-anchor="middle" fill="${fontColor}">
                        <tspan font-weight="bold">${message}</tspan>
                    </text>`;
            break;
    };

    // writing svg file data
    const SVGfile =
        `<svg width="300" height="200">
        ${background}
        </svg>`
    generateFile(fileName, SVGfile)
};


function generateFile(fileName, SVGfile) {
    fs.writeFile(fileName, SVGfile, (err) => {
        if (err) throw err;
        console.log(`Successfully written to ${fileName}`);
    });
};

module.exports = {
    logoData
};
