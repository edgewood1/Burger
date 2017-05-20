CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table events.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);

