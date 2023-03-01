const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Changes23!",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
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
      if (answer.view === "view employees") {
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
  db.query("SELECT * FROM departments", (err, data) => {
    console.table(data);
    menu();
  });
}
function viewRoles() {
  db.query("SELECT * FROM roles", (err, data) => {
    console.table(data);
    menu();
  });
}
function viewEmployee() {
  db.query("SELECT * FROM employees", (err, data) => {
    console.table(data);
    menu();
  });
}
function addDepartment() {
  //console.log("dpt added");
  inquirer
    .prompt({
      type: "input",
      message: "What is the dept name?",
      name: "deptName",
    })
    .then((answer) => {
      console.log(answer.deptName);
      let newDepartment = answer.deptName;
      db.query("INSERT INTO departments SET ?", { name: newDepartment });
    })
    .then(() => {
      let query = "SELECT * FROM departments";
      db.query(query, function (err, res) {
        console.log("Your department has been added!");
        console.table(res);
        menu();
      });
    });
}
function addRole() {
  //console.log("dpt added");
  inquirer
    .prompt({
      type: "input",
      message: "What is the role called?",
      name: "roleName",
    })
    .then((answer) => {
      console.log(answer.roleName);
      let newRole = answer.roleName;
      db.query("INSERT INTO roles SET ?", { title: newRole });
    })
    .then(() => {
      let query = "SELECT * FROM roles";
      db.query(query, function (err, res) {
        console.log("Your role has been added!");
        console.table(res);
        menu();
      });
    });
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
