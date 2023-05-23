const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');



const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter the text for your logo. (Maximum of three(3) characters)',
        validate: function (value) {
            if (value.length > 0 && value.length < 4) {
                return true;
            }
            else {
                return `Please enter between 1-3 characters.`
            }    
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a text color. (Enter a keyword or hexadecimal)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo.',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please choose a color for your logo. (Enter a keyword or hexidecimal)'
    },
];

function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => err ? console.log(err) : console.log('Generated logo.svg'));
};


function init() {
    inquirer.prompt(questions)
        .then(({text, textColor, shape, shapeColor}) => {
            if (shape === 'Circle') {
                svgShape = new Circle(shapeColor, text, textColor);
            } else if (shape === 'Square') {
                svgShape = new Square(shapeColor, text, textColor);
            } else if (shape === 'Triangle') {
                svgShape = new Triangle(shapeColor, text, textColor);
            } else {
                console.log('Invalid Shape');
            }

            writeToFile('logo.svg', svgShape.renderSVG())
        })
};


init();