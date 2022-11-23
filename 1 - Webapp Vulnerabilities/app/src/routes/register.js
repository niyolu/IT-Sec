const express = require('express');
const router = express.Router();
const db = require('../helpers/db');

router.post('/', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const user_exists_query = `SELECT * FROM users WHERE name = ${username}`;
    db.connection.query(user_exists_query, (err, rows, fields) => {
        if (err || rows.length > 0) {
        res.status(500).send("Failed to register");
        };
    });

    const insert_user_query = `INSERT INTO users (email, password, name) VALUES ('${email}', '${password}', '${username}')`;
    db.connection.query(user_exists_query, (err, rows, fields) => {
        if (err) {
        res.status(500).send("Failed to register");
        };
    });

    req.session.isAuth = valid;
});


module.exports = router;
