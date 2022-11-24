const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const { save_session } = require('../helpers/sessionstore');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../../", "static/login.html"));
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = `SELECT name, password FROM users WHERE name = "${username}" AND password = "${password}"`;
  console.log('login-query: ' + query);
  
  db.connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log(err);
      throw err
    };
    if (rows.length == 0) {
      res.send('bad authentification');
    }
    const user = rows[0];
    const db_username = user.name;

    const SID = uuidv4();
    save_session(db_username, SID);
    res.cookie('session', SID, { signed: false });
    res.send(`welcome user ${db_username}`);
  });
});

module.exports = router;
