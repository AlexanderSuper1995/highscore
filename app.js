var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// database 
 console.count(app); 
// rest api  
app.get('/api/games', function(req, res, next) {
 

  res.send("Hello, World!");
});
app.get('/test', function( res) {
 
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Details of user ${userId}`);
  });
  res.send("Hello, World!");
});
app.delete('/', function(req, res, next) {
  const DataId = req.params.id;
  res.send(`Delete data ${DataId}`);
});
app.post('/', function(req, res, next) {
  
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
console.debug(app)
 
module.exports = app;
