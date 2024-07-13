// packages ( need to use Jest and Inquirer )
const inquirer = require('inquirer');


// user questions
const questions = [
{
    type: confirm,
    name: fileType,
    message: 'SVG',
},
{
    type: list,
    name: shape,
    choices: [circle, square, triangle],
},
{
    type: input,
    name: backgroundColor,
    message: 'Enter color for background color' ,
},
{
    type: input,
    name: fontColor,
    message: 'Enter color for text color',
},

]

function logo () {
    inquirer
    // asking for user input
    .prompt(questions)
    .then(answers => {
        return render(answers);
    })
    .catch((error) => {
        console.log(error)
    })




};

function render(answers) {
console.log('we made it here');
console.log(answers);

}; 



logo();