const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Changes23!",
    database: "books_db",
  },
  console.log(`Connected to the book_db database.`)
);

function menu() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to view?",
      name: "view",
      choices: [
        "view departments",
        "view roles",
        "view employees",
        "add department",
        "add role",
        "add employee",
        "update employee role",
      ],
    })
    .then((answer) => {
      if (answer.view === "view departments") {
        viewDepartments();
      }
      if (answer.view === "view roles") {
        viewRoles();
      }
      if (answer.view === "view employee") {
        viewEmployee();
      }
      if (answer.view === "add department") {
        addDepartment();
      }
      if (answer.view === "add role") {
        addRole();
      }
      if (answer.view === "add employee") {
        addEmployee();
      }
      if (answer.view === "update employee role") {
        updateEmployeeRole();
      }
    });
}

function viewDepartments() {
  console.log("SHOWING ALL DEPARTMENT INFO");
  //SELECT * FROM departments;
  db.query("SELECT * FROM department_name", (err, data) => {
    console.table(data);
    menu();
  });
}
function viewRoles() {
  console.log("These are the roles.");
}
function viewEmployee() {
  console.log("Showing employees");
}
function addDepartment() {
  console.log("dpt added");
}
function addRole() {
  console.log("role added");
}
function addEmployee() {
  console.log("employee added");
}
function updateEmployeeRole() {
  console.log("employee role udated");
}

// {
//   type: "checkbox",
//   message: "What languages do you know?",
//   name: "stack",
//   choices: ["HTML", "CSS", "JavaScript", "MySQL"],
// },
// {
//   type: "list",
//   message: "What is your preferred method of communication?",
//   name: "contact",
//   choices: ["email", "phone", "telekinesis"],
// },
// ])
// .then()
// const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

// inquirer
//   .prompt([
//     {
//       message: "What is your name",
//       type: "input",
//       name: "myName",
//     },
//     {
//       message: "What is your age",
//       type: "input",
//       name: "myAge",
//     },
//   ])
//   .then((answer) => {
//     console.log(answer);
//   });

menu();

// const obj = {
//   name: "aaron",
//   occupation: "coder",
//   favFood: "ice cream",
//   age: 25,
//   hobbies: ["swimming", "hiking", "sports"],
//   school: { name: "U of Rich", location: "Richmond VA" },
// };

// console.log(obj.school.name);