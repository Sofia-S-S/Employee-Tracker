const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@Ne18mne!",
  database: "employee_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

/* start the app */
function start() {
  inquirer
    .prompt({
      name: "whatToDo",
      type: "list",
      message: "What whould you like to do?",
      choices: [
        "AddDepartment",
        "AddRole",
        "AddEmployee",
        "ViewDpartments",
        "ViewRoles",
        "ViewEmployees",
        "ViewEmployeesByDepartment",
        "UpdateDepartment",
        "UpdateRole",
        "UpdateEmployee",
        "ViewEmployeesByManager",
        "UpdateEmployeeRole",
        "DeleteDepartment",
        "DeleteRole",
        "DeleteEmployee",
        "ViewBudgetByDepartment"
      ]
    })
    .then(answer => {
      /* based on their answer run the correct function */
      if (answer.whatToDo === "AddDepartment") {
        console.log("You choose to add a new department");
        addDepartment();
      } else if (answer.whatToDo === "AddRole") {
        console.log("You choose to add a new role");
        addRole();
      } else if (answer.whatToDo === "AddEmployee") {
        console.log("You choose to add a new employee");
        addEmployee();
      } else if (answer.whatToDo === "ViewDepartments") {
        console.log("You choose to view all departments");
        viewDepartments();
      } else if (answer.whatToDo === "ViewRoles") {
        console.log("You choose to view all roles");
        viewRoles();
      } else if (answer.whatToDo === "ViewEmployees") {
        console.log("You choose to view all employees");
        viewEmployees();
      } else if (answer.whatToDo === "ViewEmployeesByDepartment") {
        console.log("You choose to view all employees");
        viewEmployeesByDepartment();
      } else if (answer.whatToDo === "UpdateDepartment") {
        console.log("You choose to update a department");
        updateDepartment();
      } else if (answer.whatToDo === "UpdateRole") {
        console.log("You choose to update a role");
        updateRole();
      } else if (answer.whatToDo === "UpdateEmployees") {
        console.log("You choose to update an employee");
        updateEmployee();
      } else if (answer.whatToDo === "UpdateEmployeeRole") {
        console.log("You choose to update an employee role");
        updateEmployeeRole();
      } else if (answer.whatToDo === "ViewEmployeesByManager") {
        console.log("You choose to see a list of Employees");
        viewEmployeesByManager();
      } else if (answer.whatToDo === "DeleteDepartment") {
        console.log("You choose to delete a department");
        deleteDepartment();
      } else if (answer.whatToDo === "DeleteRole") {
        console.log("You choose to delete a Role");
        deleteRole();
      } else if (answer.whatToDo === "DeleteEmployee") {
        console.log("You choose to delete a Employee");
        deleteEmployee();
      } else if (answer.whatToDo === "ViewBudgetByDepartment") {
        console.log("You choose to delete a Employee");
        viewBudgetByDepartment();
      }
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "What is a name of a new department ?"
      }
    ])
    .then(answer => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.newDepartment
        },
        err => {
          if (err) throw err;
          console.log("New department has been added");
        }
      );
      connection.end();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "newTitle",
        type: "input",
        message: "What is a title of a new role ?"
      },
      {
        name: "newSalary",
        type: "input",
        message: "What whould be a salary for that role ?"
      },
      {
        name: "newDepId",
        type: "input",
        message: "Enter an ID of department this role belongs to ?"
      }
    ])
    .then(answer => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.newTitle,
          salary: answer.newSalary,
          department_id: answer.newDepId
        },
        err => {
          if (err) throw err;
          console.log("New role has been added");
        }
      );
      connection.end();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "newFname",
        type: "input",
        message: "What is a employee first name ?"
      },
      {
        name: "newLname",
        type: "input",
        message: "What is a employee last name ?"
      },
      {
        name: "newRoleId",
        type: "input",
        message: "Enter an ID of a new employee's role"
      },
      {
        name: "newManId",
        type: "input",
        message: "Enter an ID of a new employee's manager or zero"
      }
    ])
    .then(answer => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.newFname,
          last_name: answer.newLname,
          role_id: answer.newRoleId,
          manager_id: answer.newManId
        },
        err => {
          if (err) throw err;
          console.log("New employee has been added");
        }
      );
      connection.end();
    });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
function viewRoles() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function viewEmployeesByDepartment() {}

function updateDepartment() {
  inquirer
    .prompt([
      {
        name: "depId",
        type: "input",
        message: "Enter an ID of department you would like to update"
      },
      {
        name: "newName",
        type: "input",
        message: "How would you like to renaime this department?"
      }
    ])
    .then(answer => {
      var query = "UPDATE department SET name=? WHERE id=?";
      connection.query(query, [answer.newName, answer.depId], err => {
        if (err) throw err;
        console.log("The department has been updated");
      });
      connection.end();
    });
}

function viewEmployeesByManager() {
  inquirer
    .prompt({
      name: "manId",
      type: "input",
      message: "Enter a manager ID"
    })
    .then(answer => {
      connection.query(
        "SELECT first_name, last_name FROM employee WHERE ? ",
        { manager_id: answer.manId },
        (err, res) => {
          if (err) throw err;
          console.log(res);
        }
      );
      connection.end();
    });
}

function deleteDepartment() {
  connection.query("SELECT * FROM department", (err, res) => {
    inquirer
      .prompt({
        name: "choice",
        type: "rawlist",
        message: "What department would you like to delete?",
        choices: function() {
          let choiceArray = [];
          res.forEach(department => {
            choiceArray.push(department.name);
          });
          return choiceArray;
        }
      })
      .then(answer => {
        connection.query(
          "DELETE FROM department WHERE ?",
          { name: answer.choice },
          err => {
            if (err) throw err;
            console.log("The department has been deleted");
          }
        );
        connection.end();
      });
  });
}

function deleteRole() {
  connection.query("SELECT * FROM role", (err, res) => {
    inquirer
      .prompt({
        name: "choice",
        type: "rawlist",
        message: "What role would you like to delete?",
        choices: function() {
          let choiceArray = [];
          res.forEach(role => {
            choiceArray.push(role.title);
          });
          return choiceArray;
        }
      })
      .then(answer => {
        connection.query(
          "DELETE FROM role WHERE ?",
          { title: answer.choice },
          err => {
            if (err) throw err;
            console.log("The role has been deleted");
          }
        );
        connection.end();
      });
  });
}

function deleteEmployee() {
  connection.query("SELECT * FROM employee", (err, res) => {
    inquirer
      .prompt({
        name: "choice",
        type: "rawlist",
        message: "What employee would you like to delete?",
        choices: function() {
          let choiceArray = [];
          res.forEach(employee => {
            choiceArray.push(employee.last_name);
          });
          return choiceArray;
        }
      })
      .then(answer => {
        connection.query(
          "DELETE FROM employee WHERE ?",
          { last_name: answer.choice },
          err => {
            if (err) throw err;
            console.log("The role has been deleted");
          }
        );
        connection.end();
      });
  });
}

function updateEmployeeRole() {
  connection.query("SELECT * FROM employee", (err, res) => {
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          message: "which employee's role you would like to change?",
          choices: function() {
            let choiceArray = [];
            res.forEach(employee => {
              choiceArray.push(employee.last_name);
            });
            return choiceArray;
          }
        },
        {
          name: "newRole",
          type: "input",
          message: "Enter an ID of new role"
        }
      ])
      .then(answer => {
        var query = "UPDATE employee SET role_id=? WHERE last_name=?";
        connection.query(query, [answer.newRole, answer.choice], err => {
          if (err) throw err;
          console.log("An Employee role has been updated");
        });
        connection.end();
      });
  });
}

function viewBudgetByDepartment() {
  connection.query(
    "SELECT department_id, SUM(salary) FROM employee INNER JOIN role ON employee.role_id = role.id GROUP BY department_id",
    (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    }
  );
}
