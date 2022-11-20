const express = require('express');
const router = express.Router();
var db = require('../helpers/db');
var path = require('path');



router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../../", "static/login.html"));
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let valid = undefined;

  // let query = `SELECT name, password FROM users WHERE name = "${username}" AND password = "${password}"`;
  let query = 'SELECT * FROM Users WHERE name = "' + username + '" AND password = "' + password + '";'
  console.log('login-query: ' + query);

  
  // db.connection.query("SELECT * FROM users", (err, rows, fields) => {
  //   if (err) throw err;
  //   console.log(rows);
  // });

  
  db.connection.execute(query, (err, rows, fields) => {
    if (err) {
      console.log(err);
      throw err
    };
    valid = rows.length > 0;
    console.log(rows.length)
    console.log(valid);
    console.log('user: ', rows[0]);
    res.send((valid ? `welcome user ${username}` : 'bad authentification') + "\n");
  });
});

module.exports = router;