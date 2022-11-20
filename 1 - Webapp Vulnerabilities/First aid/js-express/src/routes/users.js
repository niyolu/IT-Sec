var express = require('express');
var db = require('../helpers/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  db.connection.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    }

    response.send(res);
  });
});

module.exports = router;
