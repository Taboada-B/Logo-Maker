const fs = require('fs');

//first function data is sent from index.js
function logoData(answers) {
    // deconstructing object
    const {shape, backgroundColor, fontColor, message} = answers;
    // dynamically making filename
    const fileName = `${message}.svg`;
    // initializing data
    let SVGimage = '';
    // picking shape

    switch (shape) {
        case 'circle':
            SVGimage=
                `<circle cx="150" cy="100" r="100" fill="${backgroundColor}"/>
                    <text x="150" y="120" font-size="72" text-anchor="middle" fill="${fontColor}">
                        <tspan font-weight="bold">${message}</tspan>
                    </text>`;
            break;
        case 'square':
            SVGimage=
                `<rect x="50" y="0" width="200" height="200" fill="${backgroundColor}"/>
                    <text x="150" y="120" font-size="86" text-anchor="middle" fill="${fontColor}">
                        <tspan font-weight="bold">${message}</tspan>
                    </text>`;
            break;
        case 'triangle':
            SVGimage=
                `<polygon points="150, 0 275,200 25,200" fill="${backgroundColor}" />
                    <text x="150" y="150" font-size="48" text-anchor="middle" fill="${fontColor}">
                        <tspan font-weight="bold">${message}</tspan>
                    </text>`;
            break;
    };

    // writing svg file data
    const SVGfile =
        `<?xml version="1.0" standalone="no"?>

        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
        "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <style> text {font-family: Arial, sans-serif;} </style>
        
        ${SVGimage}
        </svg>`
        
    generateFile(fileName, SVGfile)
};


function generateFile(fileName, SVGfile) {
    fs.writeFile(fileName, SVGfile, (err) => {
        if (err) throw err;
        console.log(`Generated ${fileName}`);
    });
};

module.exports = {
    logoData
};
