// TODO: Include packages needed for this application

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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );