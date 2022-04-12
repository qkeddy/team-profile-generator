// General questions
const generalQuestions = [
    {
        name: "fullName",
        message: "Please enter the employee's full name\n",
        type: "input",
        when: (answers) => answers.employeeTitle !== "No one else to add",
    },
    {
        name: "id",
        message: "Please enter the employee's id\n",
        type: "input",
        when: (answers) => answers.employeeTitle !== "No one else to add",
    },
    {
        name: "email",
        message: "Please enter the employee's email\n",
        type: "input",
        when: (answers) => answers.employeeTitle !== "No one else to add",
    },
];

// Management questions
const managementQuestions = [
    {
        name: "managerPhone",
        message: "Please enter the managers's telephone number.\n",
        type: "input",
    },
];

// Staff questions
const staffQuestions = [
    {
        name: "gitHubUser",
        message: "Please enter the engineer's GitHub ID.\n",
        type: "input",
        when: (answers) => answers.employeeTitle === "Engineer",
    },
    {
        name: "school",
        message: "Please enter the interns's school.\n",
        type: "input",
        when: (answers) => answers.employeeTitle === "Intern",
    },
];

// Add staff menu questions
const employeeTypeQuestion = [
    {
        name: "employeeTitle",
        message: "Please select employee type\n",
        choices: ["Engineer", "Intern", "No one else to add"],
        type: "list",
    },
];

const buildStaffQuestions = () => [].concat(employeeTypeQuestion, generalQuestions, staffQuestions);

const buildMgmtQuestions = () => [].concat(generalQuestions, managementQuestions);

module.exports = { buildMgmtQuestions, buildStaffQuestions };
