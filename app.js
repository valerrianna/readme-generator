// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please explain the installation process.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['Apache', 'GNU-General-Public', 'MIT', 'None']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Are there any contributing guidelines?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Are there any test instructions?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      }
    ]);
  };
  
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// Function call to initialize app
promptUser()
.then(readMeData => {
    const readMe = generatePage(readMeData);
    fs.writeFile('./sampleREADME.md', readMe, err => {
      if (err) throw new Error(err);

      console.log('Readme complete! Check out your readme.md to see the output!');
    });
});