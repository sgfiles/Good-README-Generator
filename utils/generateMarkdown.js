// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Name}
  # Project Name
  ${answers.Name}

  ## ${answers.Motivation}

 

  ## License 
  This app is licensed with MIT.
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [Features](#features)
  - [Deployed](#deployed)
  - [Email](#email)
  
  ## Installation
  Fork and clone repository. Install dependancies by using command npm install. Run this command:

  >node index.js 

  
  ## Usage
  ${answers.Usage}

 ## Credit
 All collaborations are welcome.
 ${answers.Credit}

 ## Features
 ${answers.Features}

  ## Deployed
  https://github.com/sgfiles/Good-README-Generator
  ${answers.Deployed}
 
  ## Email
  Questions about this project may be directed here.
  ${answers.Email}
`;
}

module.exports = generateMarkdown;



