const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [title, github] = profileDataArgs;


fs.writeFile('./sampleREADME.md', generatePage(title, github), err => {
    if (err) throw err;
    console.log('Readme complete! Check out your readme.md to see the output!');
  });