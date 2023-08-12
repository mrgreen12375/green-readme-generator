// created cosnt for inquirer and fs
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs=require('fs');
// created objects for the question asked to make the readme
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter description of your project:',
        name: 'description'
    },
    {   //npm install
        type: 'input',
        message: 'Enter the installation script:',
        name: 'installation'
    },
    {   //node index.js
        type: 'input',
        message: 'Enter the usage:',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select license:',
        name: 'license',
        choices: ['Apache', 'GPL', 'MIT','None']
    },
    {
        type: 'input',
        message: 'Enter the contributors (seperate by commas):',
        name: 'contributing'
    },
    {   //npm run test
        type: 'input',
        message: 'Enter the test script:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'email'
    },
];
// created switch statement to make the license and badge
// created the elements that will display based off the answers to the object questions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    switch (data.license) {
        case 'Apache':
            license='[![License](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/licenses/apache)'
            break;
        case 'GPL':
            license='[![License: GPL 3.0](https://img.shields.io/badge/License-GPL-blue.svg)](https://opensource.org/licenses/gpl)'
            break;
        case 'MIT':
            license='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/mit)'
            break;
        default: license=''
            break;
    }
    const contents = `
# ${data.title}
${license}
## Description\n${data.description}
## Table of contents
- [Installation](#Insallation)
- [Usage](#Usage)
- [Contribution](#Contributing)
- [Test](#Test)
- [Questions](#Questions)
## Installation\n${data.installation}
## Usage\n${data.usage}
## Contributing\n${data.contributing}
## Test\n${data.test}
## Questions
GitHub Username: [${data.github}](https://github.com/${data.github})\n
Email Address: [${data.email}](${data.email})`;
    fs.writeFileSync(fileName, contents)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {writeToFile('readme.md', answers)}) 
        .catch(error => {
            if(error){
                throw error
            }
        })
}

// Function call to initialize app
init();