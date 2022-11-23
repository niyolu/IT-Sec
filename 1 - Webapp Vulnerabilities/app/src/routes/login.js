const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const path = require('path');

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
    const valid = rows.length > 0;
    const user = rows[0];
    
    req.session.isAuth = valid;
    
    console.log('rows', rows)
    
    // add session logic
    res.send((valid ? `welcome user ${user.name}` : 'bad authentification') + "\n");
  });
});

module.exports = router;
