module.exports = templateData => {
    console.log(templateData);

    return `# ${templateData.title}
## Description
${templateData.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Contributing](#Contributing)

## Installation
${templateData.installation}

## Usage
${templateData.usage}

## Contributing
${templateData.contribution}

## Tests
${templateData.tests}

## Questions
Github Username: [${templateData.username}](https://github.com/${templateData.username})

How to reach me for additional questions: <${templateData.email}>
`
}