// Require various modules

import inquirer from "inquirer";
import questions from "./src/Questions.js";


// const Employee = require("./lib/Employee");
// TODO Question - what is the difference between an import/export vs. module export & require syntax? Can we use them here?  If so, how?
// import Engineer from "./lib/Engineer";
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");

import Employee from "./lib/Employee.js";
import Engineer from "./lib/Engineer.js";
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");



// Testing class plumbing
const ryan = new Engineer("Ryan", 123, "ryan@me.com", "ryan@github");
// const ginsu = new Intern("Ginsu", 789, "ginsu.eddy@gmail.com", "UofW");
// const barbara = new Manager("Barbara", 456, "blmeelens@gmail.com", "212-888-7777");

console.log(ryan.getGitHubUser());
console.log(ryan.getId()); 

// console.log(ginsu.getSchool());
// console.log(ginsu.getId()); 

// console.log(barbara.getOfficeNumber());
// console.log(barbara.getId()); 


// // Test inquirer
inquirer
    .prompt(questions)
    .catch((err) => console.error(err));
