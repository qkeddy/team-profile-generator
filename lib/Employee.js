// Employee class
// TODO add constructor validation

class Employee {
    // Constructor to receive employee details
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method to get employee name
    getName = () => this.name;
    

    // Method to get employee ID
    getId = () => this.id;


    // Method to get employee email
    getEmail = () => this.email;

    // Method to get employee role
    getRole = () => "Employee";
    
}

//Export the class
module.exports = Employee;
