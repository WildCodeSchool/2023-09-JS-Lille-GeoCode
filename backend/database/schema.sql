DROP DATABASE geocode;

CREATE DATABASE geocode;

USE geocode;

CREATE TABLE person(
id INT PRIMARY KEY AUTO_INCREMENT,
firstname VARCHAR(80),
lastname VARCHAR(80),
gender VARCHAR(80),
email VARCHAR(200),
birthday DATE,
city VARCHAR(80),
postcode INT,
zipcode INT,
password VARCHAR(80),
status VARCHAR(80));

CREATE TABLE admin(
user_id INT PRIMARY KEY,
FOREIGN KEY (user_id) REFERENCES person(id));

CREATE TABLE visitor(
user_id INT PRIMARY KEY,
FOREIGN KEY (user_id) REFERENCES person(id));

CREATE TABLE user(
user_id INT PRIMARY KEY,
FOREIGN KEY (user_id) REFERENCES person(id));

CREATE TABLE car(
id INT PRIMARY KEY AUTO_INCREMENT,
brand VARCHAR(80),
model VARCHAR(80),
plug_type VARCHAR(80));

CREATE TABLE station(
id INT PRIMARY KEY AUTO_INCREMENT,
operator_name VARCHAR(80),
stationv_name VARCHAR(80),
adress VARCHAR(80),
latitude DECIMAL(10, 8),
longitude DECIMAL(11, 8));

CREATE TABLE charge_point(
id INT  PRIMARY KEY AUTO_INCREMENT,
compagny_name VARCHAR(80),
max_power INT,
accessibility VARCHAR(80),
more_info VARCHAR(200),
update_date DATE,
station_id INT ,
FOREIGN KEY (station_id) REFERENCES station(id));