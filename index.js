// Require classes
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Questions = require("./src/questions");
// const questions = require("./src/questions.json");

// Collect information for the manager
function collectManagementInfo() {
    return new Promise((resolve, reject) => {
        const managementQuestions = new Questions(true);
        // console.log(managementQuestion.getQuestions());
        inquirer.prompt(managementQuestions.getQuestions()).then(resolve).catch(reject);
    });
}

// Collect information for the team
function collectTeamInfo() {
    const staffQuestions = new Questions(false);
    // console.log(staffQuestion.getQuestions());
    inquirer.prompt(staffQuestions.getQuestions()).catch((err) => console.error(err));
}

function init() {
    // Testing class plumbing
    const ryan = new Engineer("Ryan", 123, "ryan@me.com", "ryan@github");
    const ginsu = new Intern("Ginsu", 789, "ginsu.eddy@gmail.com", "UofW");
    const barbara = new Manager("Barbara", 456, "blmeelens@gmail.com", "212-888-7777");

    console.log(`${ryan.getId()}  |  ${ryan.getGitHubUser()}`);
    console.log(`${ginsu.getId()}  |  ${ginsu.getSchool()}`);
    console.log(`${barbara.getId()}  |  ${barbara.getOfficeNumber()}`);

    console.log("Welcome to the team profile builder");

    // Collection information for the manager
    collectManagementInfo().then(collectTeamInfo);
    // Add information collected to a team array

    // Then collect information for the team
    // Ask if you want to add team members
    // If yes, then

    // Add information collected to a team array
    // Keep looping until there is a no

    // If no, then build the team page
}

init();
