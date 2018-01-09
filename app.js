var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var users = require('./routes/users');
var book = require('./routes/book');
var pvd = require('./routes/pvd')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'dominic ming is watching', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use('/', index);
app.use('/api/user', users);
app.use('/api/book', book);
app.use('/api/pvd', pvd);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({done: false, error:res.locals.error})
});

module.exports = app;
