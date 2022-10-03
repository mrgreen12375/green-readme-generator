// created cosnt for inpirer and fs
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs=require('fs');
// created objects for the question asked to make the readme
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Whats the title of you project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter description of your project',
        name: 'description'
    },
    {   //npm install
        type: 'input',
        message: 'Enter the installation script',
        name: 'installation'
    },
    {   //node index.js
        type: 'input',
        message: 'Enter the usage',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select license',
        name: 'license',
        choices: ['none', 'Apache', 'GNU', 'MIT']
    },
    {
        type: 'input',
        message: 'Enter the contributors (seperate by commas)',
        name: 'contributing'
    },
    {   //npm run test
        type: 'input',
        message: 'Enter the test script',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter email address ',
        name: 'email'
    },
];
// created switch statement to make the license and badge
// created the elements that will display based off the answers to the object questions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let license = '';
    switch (data.license) {
        case 'Apache':
            license='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GNU':
            license='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case 'MIT':
            license='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        default:
            break;
    }
    const contents = `
# ${data.title}
${license}
## Description\n${data.description}
## Table of contents
- [Insallation](#Insallation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contributing)
- [Test](#Test)
- [Questions](#Questions)
## Insallation\n${data.installation}
## Usage\n${data.usage}
## Contributing\n${data.contributing}
## Test\n${data.test}
## Questions
[${data.github}](https://github.com/${data.github})\n
[${data.email}](${data.email})`;
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