// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs=require('fs');
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
    {
        type: 'input',
        message: 'Enter the installation script',
        name: 'installation'
    },
    {
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
    {
        type: 'input',
        message: 'Enter the test script',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter the Frequently asked questions',
        name: 'faq'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const contents = `
# ${data.title}
## Description\n${data.description}
## Table of contents
- [Insallation](#Insallation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contributing)
- [Test](#Test)
- [FAQ](#FAQ)
## Insallation\n${data.installation}
## Usage\n${data.usage}
## License\n${data.license}
## Contributing\n${data.contributing}
## Test\n${data.test}
## FAQ\n${data.faq}`;
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