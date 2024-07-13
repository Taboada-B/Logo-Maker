// packages ( need to use Jest and Inquirer )
const inquirer = require('inquirer');
const { emitKeypressEvents } = require('readline');
const { logoData } = require('./utl/generateFile')

// user questions
const questions = [
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
        message: 'What would you like the logo to say? Three characters or less.'
    },
   
]

function logo() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            console.log(answers.message.legnth)
            if (answers.message.length <= 3 && answers.message.length > 0) {
                return logoData(answers)
            }
            else {
                return console.log('Logo must be greater than 0 characters and less than 4 characters');
            }
        })
        .catch((error) => {
            console.error('There was an error:', error);
        });
}

logo();