const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const { save_session } = require('../helpers/sessionstore');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../", "static/register.html"));
});

router.post('/', async (req, res) =>  {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log(`register: ${username}, ${email}, ${password}`);

    const user_exists_query = `SELECT * FROM users WHERE name = '${username}'`;
    
    const query_future = new Promise((resolve, reject) => {
        db.connection.query(user_exists_query, (err, rows, fields) => {
            if (err) {
                res.status(500).send("Failed to register");
                return reject("db", `${err.message}`);
            };
            if (rows.length > 0) {
                res.status(500).send("Failed to register");
                return reject("db");
            };
            console.log("user doesn't exist yet")
            resolve();
        });
    });

    try {
        await query_future;
    }
    catch (error){
        console.log(error);
        console.log("user already exists");
        return
    }

    const insert_user_query = `INSERT INTO users (email, password, name) VALUES ('${email}', '${password}', '${username}')`;
    db.connection.query(insert_user_query, (err, rows, fields) => {
        if (err) {
            console.log(err)
            res.status(500).send("Failed to register");
            return;
        };
        const SID = uuidv4();
        console.log('new SID:', SID);
        save_session(username, SID);
        res.cookie('session', SID, { signed: false });
        res.send("Welcome to BLORG, " + username);
    });
});


module.exports = router;
