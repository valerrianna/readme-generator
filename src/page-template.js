const generatePage = (title, github) => {
    return `# ${title} 
    ## ${github}`;
};

module.exports = generatePage;