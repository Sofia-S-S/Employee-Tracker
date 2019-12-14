-- Drops the department_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE department
(
  id INT NOT NULL
  AUTO_INCREMENT,
  name VARCHAR
  (30) NOT NULL,
  PRIMARY KEY
  (id)
);


  -- Creates the table "role" within employee_db --
  CREATE TABLE role
  (
    id INT NOT NULL
    AUTO_INCREMENT,
  title VARCHAR
    (30) NOT NULL,
        salary DECIMAL
    (10,4),
        department_id INT NOT NULL
    ,
  PRIMARY KEY
    (id)
    );


    -- Creates the table "employee" within employee_db --
    CREATE TABLE employee
    (
      id INT NOT NULL
      AUTO_INCREMENT,
  first_name VARCHAR
      (30) NOT NULL,
last_name VARCHAR
      (30) NOT NULL,
            role_id INT NOT NULL,
            manager_id INT NULL,
  PRIMARY KEY
      (id)
);