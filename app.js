// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)', 
        // validate: titleInput => {
        //     if (titleInput) {
        //       return true;
        //     } else {
        //       console.log('Please enter a title for your project!');
        //       return false;
        //     }
        //   }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project. (Required)',
        // validate: descriptionInput => {
        //     if (descriptionInput) {
        //       return true;
        //     } else {
        //       console.log('Please enter a description for your project!');
        //       return false;
        //     }
        //   }
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
// .then(promptProject)
.then(readMeData => {
    const readMe = generatePage(readMeData);
    fs.writeFile('./sampleREADME.md', readMe, err => {
      if (err) throw new Error(err);

      console.log('Readme complete! Check out your readme.md to see the output!');
    });
});