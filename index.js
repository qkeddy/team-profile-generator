// Require classes
const { template } = require("@babel/core");
const inquirer = require("inquirer");
const { resolve } = require("path");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Questions = require("./src/questions");

const teamInfo = [];

// Collect information for the Staff
function addStaffFunction() {
    const staffQuestions = new Questions(false);
    inquirer
        .prompt(staffQuestions.getQuestions())
        .then((answers) => {
            if (answers.employeeTitle == "Engineer") {
                teamInfo.push(new Engineer(answers.fullName, answers.id, answers.email));
                addStaffFunction();
            } else if (answers.employeeTitle == "Intern") {
                teamInfo.push(new Intern(answers.fullName, answers.id, answers.email));
                addStaffFunction();
            } else {
                console.log(teamInfo);
                // generate HTML code
            }
        })
        .catch((err) => console.error(err));
}

function init() {
    // Collect information for the manager
    const managementQuestions = new Questions(true);
    inquirer
        .prompt(managementQuestions.getQuestions())
        .then((answers) => {
            teamInfo.push(new Manager(answers.fullName, answers.id, answers.email, answers.managerPhone));
            addStaffFunction();
        })
        .catch((err) => console.error(err));

    // Collect information for the team.

    // If no more team members need to be added, then build HTML page
}

init();
