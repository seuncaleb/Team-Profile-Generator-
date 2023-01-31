const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// arrays of questions for mangers, employees, and Interns
const mangerQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is your  name?",
  },

  {
    type: "input",
    name: "Id",
    message: "what is your  ID?",
  },

  {
    type: "input",
    name: "Email",
    message: "what is your  email address?",
  },

  {
    type: "input",
    name: "Number",
    message: "what is your  Office number?",
  },
];

const InternQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is Intern  name?",
  },

  {
    type: "input",
    name: "Id",
    message: "what is Intern  ID?",
  },

  {
    type: "input",
    name: "Email",
    message: "what is Intern  email address?",
  },

  {
    type: "input",
    name: "school",
    message: "what is Intern  school",
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is Employee  name?",
  },

  {
    type: "input",
    name: "Id",
    message: "what is Employee  ID?",
  },

  {
    type: "input",
    name: "Email",
    message: "what is Employee  email address?",
  },

  {
    type: "input",
    name: "github",
    message: "what is Employee  github username?",
  },
];

const options = [
  {
    type: "list",
    name: "type",
    message: "what do you want to add?",
    choices: ["Add an Intern", "Add an Engineer", "Finish building the team"],
  },
];


// function asking the first set of questions to the manger when they first open the application 
askMore();

async function askMore() {
  await inquirer.prompt(mangerQuestions).then((answers) => {
    const managerOne = new Manager(
      answers.name,
      answers.Id,
      answers.Email,
      answers.Number
    );
    console.log(managerOne);
  });

  repeat();
}

// function to repeat questions when user picks option to either employee or intern
async function repeat() {
  repeatQuestion();
}


// functions that display option for employee or intern
async function repeatQuestion() {
  await inquirer.prompt(options).then((answers) => {
    if (answers.type === "Add an Engineer") {
      inquirer
        .prompt(employeeQuestions)
        .then((answers) => {
          const engineerOne = new Engineer(
            answers.name,
            answers.Id,
            answers.Email,
            answers.Number,
            answers.github
          );
          console.log(`picked add an engineer named ${engineerOne.name}`);
        })
        .then(repeat);
    } else if (answers.type === "Add an Intern") {
      inquirer
        .prompt(InternQuestions)
        .then((answers) => {
          const internOne = new Intern(
            answers.name,
            answers.Id,
            answers.Email,
            answers.Number,
            answers.school
          );
          console.log(`picked add an intern named ${internOne.id} `);
        })
        .then(repeat);
    } else if (answers.type === "Finish building the team") {
      console.log("she wants the end");
    } else {
      console.log("something is wrong");
    }
  });
}

//Manager.getOfficeNumber()