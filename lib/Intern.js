// Import the Intern class
const Employee = require("./Employee");

// Intern class
// TODO add constructor validation
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method to get school
    getSchool = () => this.school;

    // Method to get employee role
    getRole = () => "Intern";

    // Return staff object
    getInfo = () => {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school,
        };
    };
}

//Export the class
module.exports = Intern;
