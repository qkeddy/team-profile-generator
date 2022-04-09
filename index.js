// Require classes
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const questions = require("./src/questions");
const questions = require("./src/questions.json");


// import questions from "./src/Questions.js";



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
inquirer.prompt(questions).catch((err) => console.error(err));
