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

// Collect information for the manager
// TODO Question - I tried to make these constants as in the #10-07 example, but that does not work
function collectManagementInfo() {
    return new Promise((resolve, reject) => {
        const managementQuestions = new Questions(true);
        inquirer
            .prompt(managementQuestions.getQuestions())
            .then((answers) => resolve(teamInfo.push(new Manager(answers.fullName, answers.id, answers.email, answers.managerPhone))))
            .catch(reject);
    });
}

// Ask if staff should be added
function addStaff() {
    // TODO Question - the reject doesn't seem to be used
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    name: "addStaff",
                    message: "Do you want to add staff?\n",
                    type: "confirm",
                },
            ])
            .then((answers) => {
                resolve(answers.addStaff);
            })
            .catch((err) => console.error(err));
    });
}

// Collect information for the team
function collectTeamInfo() {
    return new Promise((resolve, reject) => {
        const staffQuestions = new Questions(false);
        inquirer
            .prompt(staffQuestions.getQuestions())
            .then((answers) => {
                // TODO Question - it feels like there is no reason to instantiate these new objects and them push them on to an array. Seems very inefficient. 
                if (answers.employeeTitle == "Engineer") resolve(teamInfo.push(new Engineer(answers.fullName, answers.id, answers.email)));
                if (answers.employeeTitle == "Intern") resolve(teamInfo.push(new Intern(answers.fullName, answers.id, answers.email)));
            })
            .catch((err) => console.error(err));
    });
}

function init() {
    console.log("Welcome to the team profile builder. Lets enter information for the manager.");

    // Collection information for the manager
    collectManagementInfo()
        .then(() => {
            console.log("Thank you for the manager input.");
            let addStaff1 = true;

            // TODO Question - we need a looping structure but, this creates an endless loop
            while (addStaff1) {
                // Ask if a new staff member should be added
                addStaff().then((addStaff_) => {
                    console.log(addStaff1);
                    addStaff1 = addStaff_;
                    console.log(addStaff1);
                    console.log("Now lets build out the team.");
                    // TODO Question - is it possible to move this to a second .then like in the #10-07 example?
                    collectTeamInfo().then(() => {
                        console.log(teamInfo);
                    });
                });
            }
        })

        .catch((err) => console.error(err));
}
init();
