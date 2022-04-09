// Import the Manager class
const Employee = require("./Employee");

// Manager class
class Manager extends Employee {
    constructor(officeNumber)
    
    getOfficeNumber = () => this.officeNumber;

     // Method to get employee role
    getRole = () => "Manager";
}