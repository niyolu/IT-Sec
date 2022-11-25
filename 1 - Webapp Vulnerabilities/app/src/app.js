var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieSession = require('cookie-session')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var db = require('./helpers/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var postsRouter = require('./routes/posts');
var registerRouter = require('./routes/register');
var resetRouter = require('./routes/reset');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser())

// app.use(cookieSession({
//   name: 'session',
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 1000 * 60 * 60,
//     secure: false
//   },
//   keys: ["wat"]
// }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/register', registerRouter);
app.use('/reset', resetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.connect();

module.exports = app;
