const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const readMe = generatePage(title,github);

// fs.writeFile('./sampleREADME.md', readMe, err => {
//     if (err) throw err;
//     console.log('Readme complete! Check out your readme.md to see the output!');
//   });

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
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
  
  promptUser().then(answers => console.log(answers));