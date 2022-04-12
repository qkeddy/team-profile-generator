// Questions module

// Pass into the questioning if it is a manager, engineer, or intern
class Questions {
    constructor(isManagement) {
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
        // Array of questions for a manager
        if (isManagement) {
            // Assemble one type of questions
            const specificQuestions = [
                {
                    name: "managerPhone",
                    message: "Please enter the managers's telephone number.\n",
                    type: "input",
                },
            ];
            // Assemble questions
            const staffQuestions = [].concat(generalQuestions, specificQuestions);
            this.staffQuestions = staffQuestions;
        } else {
            // Assemble a different type of questions
            const employeeTypeQuestion = [
                {
                    name: "employeeTitle",
                    message: "Please select employee type\n",
                    choices: ["Engineer", "Intern", "No one else to add"],
                    type: "list",
                },
            ];
            const specificQuestions = [
                {
                    name: "engineer",
                    message: "Please enter the engineer's GitHub ID.\n",
                    type: "input",
                    when: (answers) => answers.employeeTitle === "Engineer",
                },
                {
                    name: "intern",
                    message: "Please enter the interns's school.\n",
                    type: "input",
                    when: (answers) => answers.employeeTitle === "Intern",
                },
            ];
            // Assemble questions
            const staffQuestions = [].concat(employeeTypeQuestion, generalQuestions, specificQuestions);
            this.staffQuestions = staffQuestions;
        }
    }
    getQuestions = () => this.staffQuestions;
}

module.exports = Questions;
