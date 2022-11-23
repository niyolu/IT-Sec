CREATE DATABASE IF NOT EXISTS ponyfarm;
USE ponyfarm;
CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), password VARCHAR(255), name VARCHAR(255));
CREATE TABLE IF NOT EXISTS posts(id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), text VARCHAR(999));
INSERT INTO users (email, password, name) VALUES ('admin@example.com', 'password', 'Admin');
INSERT INTO posts (username, text) VALUES ('Admin', 'Welcome to <blog name>, please behave and stuff');