// Import the Engineer class
const Employee = require("./Employee");

// Engineer class
class Engineer extends Employee {
    constructor(gitHubUser)
    
    // TODO Question - could we add a const to getGigHubUser? 
    getGitHubUser = () => {
        // TODO Question - since it is in curly braces do we need the return statement here? Also, can we remove the variables?
        this.gitHubUser;
    }

     // Method to get employee role
    getRole = () => "Engineer";
}