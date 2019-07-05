CREATE DATABASE locals_db;

USE DATABASE locals_db;

CREATE TABLE traveller (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR (300),
age INT (10),
username VARCHAR(300),
password VARCHAR(300),
destination VARCHAR (300),
PRIMARY KEY (id)
);

CREATE TABLE local (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (300),
    age INT (10),
    address VARCHAR (300),
    username VARCHAR (300),
    password VARCHAR (300),
    tour_description VARCHAR (2500),
    tour_price INT (10),
    availability VARCHAR (300)
);