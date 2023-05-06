var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const {expressjwt} = require('express-jwt');
const config = require('config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
var membersRouter = require('./routes/members');
var projectsRouter = require('./routes/projects');

const uri = config.get("dbChain");
mongoose.connect(uri);

const db = mongoose.connection;

var app = express();

db.on('open', ()=> {
  console.log("Conection ok");
})
db.on('error', ()=> {
  console.log("Connection not ok");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const jwtKey = config.get("secret.key");

app.use(expressjwt({secret:jwtKey, algorithms:['HS256']})
   .unless({path:["/login"]}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/members', membersRouter);
app.use('/projects', projectsRouter);


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

module.exports = app;
