const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const { get_user } = require('../helpers/sessionstore');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../", "static/reset.html"));
});


router.get('/', (req, res) => {
    const user = get_user(req.cookies['session']);
    console.log("changing password for user " + user);
    let new_password = req.query.new_password;
    const query = `UPDATE users SET password = '${new_password}' WHERE name = '${user}';`;

    db.connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send("Failed to change password");
            return;
        };
        res.send("changed password");
    });
});

module.exports = router;
