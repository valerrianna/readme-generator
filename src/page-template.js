module.exports = templateData => {
    console.log(templateData);

    return `# ${templateData.title}

## Licensing
[![license](https://img.shields.io/badge/license-${templateData.license}-blue)](https://shields.io)

## Description
${templateData.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${templateData.installation}

## Usage
${templateData.usage}

## License 
${templateData.license}

## Contributing 
${templateData.contribution}

## Tests 
${templateData.test}

## Questions
Github Username: [${templateData.username}](https://github.com/${templateData.username})

How to reach me for additional questions: <${templateData.email}>
`
}