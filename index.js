// packages ( need to use Jest and Inquirer )
const inquirer = require('inquirer');


// user questions
const questions = [
    {
        type: 'confirm',
        name: 'fileType',
        message: 'SVG',
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'Enter color for background color',
    },
    {
        type: 'input',
        name: 'fontColor',
        message: 'Enter color for text color',
    },

]



function logo() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            console.log('made it here 1');
            console.log(answers);
            // const fileName = 'README.md';
            // writeToFile(fileName, answers);
            return render(answers);
        })
        .catch((error) => {
            console.error('There was an error:', error);
        });
}

function render(answers) {
    console.log('we made it here 2');
    console.log(answers);

};



logo();