const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [title, github] = profileDataArgs;

const generatePage = (title, github) => {
    return `
    #${title}
    ##${github}
    `;
};

fs.writeFile('./readme.md', generatePage(title, github), err => {
    if (err) throw err;
    console.log('Readme complete! Check out your readme.md to see the output!');
  });