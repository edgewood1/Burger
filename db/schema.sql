CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table events.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('I wish to be rich');
INSERT INTO wishes (wish) VALUES ('I wish to travel.');
INSERT INTO wishes (wish) VALUES ('I wish to influence');