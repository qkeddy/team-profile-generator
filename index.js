// Require classes
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { buildMgmtQuestions, buildStaffQuestions } = require("./src/questions");
const { buildCards } = require("./src/build-cards")
const { buildTeamPage } = require("./src/create-page")

const teamInfo = [];

// Collect information for the Staff
function addStaffFunction() {
    inquirer
        .prompt(buildStaffQuestions())
        .then((answers) => {
            if (answers.employeeTitle == "Engineer") {
                teamInfo.push(new Engineer(answers.fullName, answers.id, answers.email, answers.gitHubUser));
                // Recursively call the add staff function for the next staff addition
                addStaffFunction();
            } else if (answers.employeeTitle == "Intern") {
                teamInfo.push(new Intern(answers.fullName, answers.id, answers.email, answers.school));
                // Recursively call the add staff function for the next staff addition
                addStaffFunction();
            } else {
                // The employee title did not match any of the prior cases, so no more team members need to be added, and now build the HTML page. 
                const teamCards = buildCards(teamInfo); 

                // Build and write primary page
                buildTeamPage(teamCards);

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
            // Call the add staff function
            addStaffFunction();
        })
        .catch((err) => console.error(err));
}

    
init();
