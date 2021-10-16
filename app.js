const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const readMe = generatePage(title,github);

// fs.writeFile('./sampleREADME.md', readMe, err => {
//     if (err) throw err;
//     console.log('Readme complete! Check out your readme.md to see the output!');
//   });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?'
    }
  ])
  .then(answers => console.log(answers));