// Import the Engineer class
const Employee = require("./Employee");

// Engineer class
class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email);
        this.gitHubUser = gitHubUser;
    }

    // Return GitHub use name
    getGitHubUser = () => this.gitHubUser;

    // Method to get employee role
    getRole = () => "Engineer";

    // Return staff object
    getInfo = () => {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            gitHubUser: this.gitHubUser
        };
    };
}

//Export the class
module.exports = Engineer;
