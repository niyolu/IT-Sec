var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Express' });
});

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});

router.post('/', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

module.exports = router;
