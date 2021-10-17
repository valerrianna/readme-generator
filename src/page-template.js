module.exports = templateData => {
    console.log(templateData);

    return `# ${templateData.title}

## Licensing
[![license](https://img.shields.io/badge/license-${templateData.licensing}-blue)](https://shields.io)

## Description
${templateData.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${templateData.installation}

## Usage
${templateData.usage}

## License:
${templateData.licensing}

## Contributing
${templateData.contribution}

## Tests
${templateData.tests}

## Questions
Github Username: [${templateData.username}](https://github.com/${templateData.username})

How to reach me for additional questions: <${templateData.email}>
`
}