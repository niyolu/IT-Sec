CREATE DATABASE IF NOT EXISTS ponyfarm;
USE ponyfarm;
CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) UNIQUE, password VARCHAR(255), name VARCHAR(255) UNIQUE);
CREATE TABLE IF NOT EXISTS posts(id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), text VARCHAR(999));

INSERT INTO users (email, password, name)
SELECT 'admin@example.com', 'password', 'Admin' FROM DUAL
WHERE NOT EXISTS (SELECT * from users
    WHERE email = 'admin@example.com' AND name = 'Admin' AND password = 'password' LIMIT 1);

INSERT INTO posts (username, text)
SELECT 'Admin',  'Welcome to BLORG, please behave and stuff' FROM DUAL
WHERE NOT EXISTS (SELECT * from posts
    WHERE username = 'Admin' AND text = 'Welcome to <blog name>, please behave and stuff' LIMIT 1);