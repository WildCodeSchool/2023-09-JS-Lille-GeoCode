DROP DATABASE geocode;

CREATE DATABASE geocode;

USE geocode;

CREATE TABLE person(
id INT PRIMARY KEY AUTO_INCREMENT,
lastname VARCHAR(80),
firstname VARCHAR(80),
email VARCHAR(200),
gender VARCHAR(80),
birthday DATE,
city VARCHAR(80),
zipcode INT,
password VARCHAR(80),
is_admin BOOLEAN DEFAULT FALSE;

CREATE TABLE admin(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES person(id));

CREATE TABLE visitor(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES person(id));

CREATE TABLE user(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES person(id));

CREATE TABLE car(
id INT PRIMARY KEY AUTO_INCREMENT,
brand VARCHAR(80),
model VARCHAR(80),
plug_type VARCHAR(80));

CREATE TABLE station(
id INT PRIMARY KEY AUTO_INCREMENT,
station_name VARCHAR(80),
adress VARCHAR(255),
y_latitude DECIMAL(10, 8),
x_longitude DECIMAL(11, 8)),
station_id_fr VARCHAR(80);

CREATE TABLE charge_point(
id INT  PRIMARY KEY AUTO_INCREMENT,
operator_name VARCHAR(80),
max_power INT,
accessibility VARCHAR(80),
station_id INT ,
charge_point_id_fr VARCHAR(80),
FOREIGN KEY (station_id) REFERENCES station(id));

CREATE TABLE form(
id INT PRIMARY KEY AUTO_INCREMENT,
firstname VARCHAR(80),
lastname VARCHAR(80),
email VARCHAR(160),
date DATE,
type VARCHAR(80),
title VARCHAR(80),
content VARCHAR(160),
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(user_id));

CREATE TABLE booking_list(
id INT PRIMARY KEY AUTO_INCREMENT,
date DATE,
charge_point_id INT,
car_id INT,
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (car_id) REFERENCES car(id),
FOREIGN KEY (charge_point_id) REFERENCES charge_point(id));

CREATE TABLE type(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(80));

CREATE TABLE list_type(
id INT PRIMARY KEY AUTO_INCREMENT,
charge_point_id INT,
type_id INT,
FOREIGN KEY (charge_point_id) REFERENCES charge_point(id),
FOREIGN KEY (type_id) REFERENCES type(id));