// Import the Manager class
const Employee = require("./Employee");

// Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method to get office number
    getOfficeNumber = () => this.officeNumber;

    // Method to get employee role
    getRole = () => "Manager";
}

//Export the class
module.exports = Manager;
