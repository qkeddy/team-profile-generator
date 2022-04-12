// Require classes
//const { template } = require("@babel/core");
const inquirer = require("inquirer");
//const { resolve } = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { buildMgmtQuestions, buildStaffQuestions } = require("./src/questions");

const teamInfo = [];

// Collect information for the Staff
function addStaffFunction() {
    inquirer
        .prompt(buildStaffQuestions())
        .then((answers) => {
            if (answers.employeeTitle == "Engineer") {
                teamInfo.push(new Engineer(answers.fullName, answers.id, answers.email, answers.gitHubUser));
                addStaffFunction();
            } else if (answers.employeeTitle == "Intern") {
                teamInfo.push(new Intern(answers.fullName, answers.id, answers.email, answers.school));
                addStaffFunction();
            } else {
                // If no more team members need to be added, then build HTML page
                console.log(teamInfo);
                // generate HTML code
            }
        })
        .catch((err) => console.error(err));
}

function init() {
    // Collect information for the manager
    inquirer
        .prompt(buildMgmtQuestions())
        .then((answers) => {
            teamInfo.push(new Manager(answers.fullName, answers.id, answers.email, answers.managerPhone));
            addStaffFunction();
        })
        .catch((err) => console.error(err));
}


init();
