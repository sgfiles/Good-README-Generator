const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "Name",
        message: "What is the Name of your Project?",
    },
    {
        type: "input",
        name: "Motivation",
        message: "What was your motivation to build?",
    },
    {
        type: "input",
        name: "Learn",
        message: "What did you learn?",
    },
    {
        type: "input",
        name: "Installation",
        message: "Steps required to install?",
    },
    {
        type:"input",
        name:"Usage",
        message:"What is the expected use?",
    },
    {
        type: "input",
        name: "Credit",
        message:"List your collaborators.",
    },
    {
        type:"input",
        name:"Features",
        message:"What are your project's features?"
    },
    {
        type:"input",
        name:"Deployed",
        message:"Enter link for deployed application.",
    },
    {
        type:"input",
        name:"Email",
        message:"What is your email?",
    },
];
// TODO:Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, generateMarkdown(data),(err) => err ? 
     console.error(err) : 
     console.log("README created."))
}

//TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
         console.log(answers);
         writeToFile("README.md", answers)
     })
 }

// TODO: Create a function to initialize app 

// Function call to initialize app
init();
