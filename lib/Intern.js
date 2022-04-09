// Import the Intern class
const Employee = require("./Employee");

// Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method to get school
    getSchool = () => this.school;

    // Method to get employee role
    getRole = () => "Intern";
}

//Export the class
module.exports = Intern;
