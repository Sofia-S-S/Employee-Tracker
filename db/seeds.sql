INSERT INTO department
    (name)
VALUES
    ("managment"),
    ("kitchen"),
    ("bar"),
    ("floor");


INSERT INTO role
    (title, salary, department_id)
VALUES
    ("manager", 50, 1);


INSERT INTO role
    (title, salary, department_id)
VALUES
    ("chef", 50, 2);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("ckook", 30, 2);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("dishwasher", 10, 2);


INSERT INTO role
    (title, salary, department_id)
VALUES
    ("bartender", 40, 3);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("barback", 30, 3);


INSERT INTO role
    (title, salary, department_id)
VALUES
    ("waiter", 35, 4);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("foodrunner", 25, 4);
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("basboy", 25, 4);



INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ("Christian", "White", 1);
INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ("Patrick", "Smith", 1);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("George", "Gonzales", 3, 1);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Nick", "Smith", 2, 1);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Feto", "Lemano", 4, 1);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Clay", "Love", 5, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Alex", "Brown", 6, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Elithabet", "Glown", 7, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Nick", "Tropy", 2, 2);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Alfonso", "Rongazalez", 4, 2);    

