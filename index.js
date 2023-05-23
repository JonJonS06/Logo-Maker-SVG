const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');


class Svg {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextEl(text, color) {
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeEl(shape) {
        this.shapeEl = shape.render();
    }
}

function promptUser() {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'text',
            message: 'Please enter the text for your logo. (Maximum of three(3) characters)'
            },
            {
            type: 'input',
            name: 'text-color',
            message: 'Please choose a text color. (Enter a keyword or hexadecimal)'
            },
            {
            type: 'input',
            name: 'shape',
            message: 'Please select a shape for your logo.',
            choices: ['Circle', 'Square', 'Triangle']
            },
            {
            type: 'input',
            name: 'shape-color',
            message: 'Please choose a color for your logo. (Enter a keyword or hexidecimal)'
            },    
        ]);
        
        then((answers) => {
            if (answers.text.length > 3) {
                console.log('Please enter no more than three(3) characters');
                promptUser();
            }
            else {
                writeToFile('logo.svg', answers);
            }
        })   
}

function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => err ? console.log(err) : console.log('Generated logo.svg'));
}
promptUser();
