// Import the Intern class
const Employee = require("./Employee");

// Intern class
class Intern extends Employee {
    constructor(school)
    
    getSchool = () => this.school;

     // Method to get employee role
    getRole = () => "Intern";
}