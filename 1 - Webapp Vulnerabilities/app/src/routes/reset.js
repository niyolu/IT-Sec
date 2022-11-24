const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const { get_user } = require('../helpers/sessionstore');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    const user = get_user(req.cookies['session']);
    console.log("changing password for user " + user);
    let new_password = req.query.new_password;
    const query = `
        UPDATE users 
        SET 
            password
        WHERE name = ${user};
    `;

    db.connection.query(user_exists_query, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send("Failed to change password");
            return;
        };
        res.send("changed password");
    });
});

module.exports = router;
