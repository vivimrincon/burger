-- INSTRUCTIONS
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE left_burgers (
    BurgersID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    BurgerName VARCHAR(100) NOT NULL,
    Devoured TINYINT(1)
);

CREATE TABLE right_burgers (
    BurgersEatenID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    BurgersEatenName VARCHAR(100) NOT NULL,
);