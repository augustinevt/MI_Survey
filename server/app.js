var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, '../build'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static('/static/js'));
// app.use(express.static(path.join(__dirname, '/static/css')));
// app.use("/static/css", express.static(__dirname + '../build/static/css'));
// app.use(express.static('../public'));

// app.use('/static', express.static(path.join(__dirname, './../public')))
app.use('/static/css', express.static(path.join(__dirname, './../build/static/css')))
app.use('/static/js', express.static(path.join(__dirname, './../build/static/js')))


// app.use(express.static(path.join(__dirname, '/build')));
// app.use(express.static(path.join(__dirname, '/build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// app.get('/', function(req, res, next) {
//   res.render('index');
// });
app.use('/', index);

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
  res.redirect('/');
});

module.exports = app;
