USE employee_db;


INSERT INTO departments (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Human Resources');
                
                
    --  create role data and define schema 

INSERT INTO roles (title, salary, department_id)
VALUES ('job1', 1, 1),
       ('job2', 2, 2),
       ('job3', 3, 3);
                
INSERT INTO employees (firstName, lastName, role_id, manager_id)
VALUES ('emp1', 'emp1l', 1, NULL),
       ('emp2', 'emp2l', 1, 1),
       ('emp3', 'emp3l', 2, 2);
       
                