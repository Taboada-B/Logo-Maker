// packages ( need to use Jest and Inquirer )
const inquirer = require('inquirer');
const { emitKeypressEvents } = require('readline');
const {render} = require('./utl/generateFile')

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
    {
        type: 'input',
        name: 'message',
        message: 'What would you like the logo to say? '
    }

]

function logo() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            if (answers.fileType) {
                return render(answers)
            }
            else {
                return console.log('This program is to make an SVG logo');
            }
        })
        .catch((error) => {
            console.error('There was an error:', error);
        });
}

logo();