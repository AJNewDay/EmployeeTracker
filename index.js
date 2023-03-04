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
    .prompt([
      {
        type: "input",
        message: "What is the role called?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the role's salary?",
        name: "roleSal",
      },
      {
        type: "input",
        message: "What is the department id?",
        name: "dptId",
      },
    ])

    .then((answer) => {
      // console.log(answer.roleName);
      let newRole = answer.roleName;
      let newSal = answer.roleSal;
      let newId = answer.dptId;
      db.query("INSERT INTO roles SET ?", {
        title: newRole,
        salary: newSal,
        department_id: newId,
      });
      console.log(answer.roleSal);
      menu();
      // db.query("INSERT INTO roles SET ?", { salary: newSal });
    });
}
// .then(() => {
//   let query = "SELECT * FROM roles";
//   db.query(query, function (err, res) {
// console.log("Your role has been added!");
// console.table(res);
// menu();
// inquirer
//   .prompt({
//     type: "input",
//     message: "What is the role's salary?",
//     name: "roleSal",
// })
// .then((answer) => {
//   console.log(answer.roleSal);
//   let newSal = answer.roleSal;
//   db.query("INSERT INTO roles SET ?", { salary: newSal });
// })
// .then(() => {
//   let query = "SELECT * FROM roles";
//   db.query(query, function (err, res) {
//     console.table(res);
//   })
// })

function addEmployee() {
  //console.log("dpt added");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's 1st name?",
        name: "empName1",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "empName2",
      },
      {
        type: "input",
        message: "What is the employee's role id?",
        name: "roleId",
      },
      {
        type: "input",
        message: "What is the employee's manager id?",
        name: "manId",
      },
    ])

    .then((answer) => {
      let newName1 = answer.empName1;
      let newName2 = answer.empName2;
      let newRoleId = answer.roleId;
      let newManId = answer.manId;
      db.query("INSERT INTO employees SET ?", {
        firstName: newName1,
        lastName: newName2,
        role_id: newRoleId,
        manager_id: newManId,
      });
      menu();
    });
}

function updateEmployeeRole() {
  console.log("employee role udated");
}

menu();
