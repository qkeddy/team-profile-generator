// Import the Engineer class
// const Employee = require("./Employee");
import Employee from "./Employee.js";

// Engineer class
export default class Engineer extends Employee {

// class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email);
        this.gitHubUser = gitHubUser;
    }

    // Return GitHub use name
    getGitHubUser = () => this.gitHubUser;

    // Method to get employee role
    getRole = () => "Engineer";
}

//Export the class
// module.exports = Engineer;
