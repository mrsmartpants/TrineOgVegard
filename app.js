var DocumentDBClient = require('documentdb').DocumentClient;
var config = require('./config');
var Articles = require('./routes/articles');
var ArticleDao = require('./models/articleDao');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);
var docDbClient = new DocumentDBClient(config.host, {
    masterKey: config.authKey
});
var articleDao = new ArticleDao(docDbClient, config.databaseId, config.articleCollectionId);
var articles = new Articles(articleDao);
articleDao.init(function(err){
    console.log(err);
});

app.get('/', articles.getArticles.bind(articles));
app.post('/addArticle', articles.addArticle.bind(articles));
// app.post('/completetask', taskList.completeTask.bind(taskList));
app.set('view engine', 'jade');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;