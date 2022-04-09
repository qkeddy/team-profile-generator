// Questions module
const questions =
    // Array of questions for inquirer to parse.
    [
        {
            name: "fullName",
            message: "Please enter the employee's full name\n",
            type: "input",
        },
        {
            name: "id",
            message: "Please enter the employee's id\n",
            type: "input",
        },
        {
            name: "email",
            message: "Please enter the employee's email\n",
            type: "input",
        },
    ];


module.exports = questions;