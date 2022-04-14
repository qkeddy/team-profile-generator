// Import the Manager class
const Employee = require("./Employee");

// Manager class
// TODO add constructor validation
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method to get office number
    getOfficeNumber = () => this.officeNumber;

    // Method to get employee role
    getRole = () => "Manager";

    // Return staff object
    getInfo = () => {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            officeNumber: this.officeNumber,
        };
    };
}

//Export the class
module.exports = Manager;
