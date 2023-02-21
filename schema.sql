DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title
    salary
    department_id INT 
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
)

CREATE TABLE employees()