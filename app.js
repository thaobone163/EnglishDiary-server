const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const accountRouter = require('./routes/account');
const profileRouter = require('./routes/profile');
const courseRouter = require('./routes/course');
const topicRouter = require('./routes/topic');
const lessonRouter = require('./routes/lesson');
const vocabularyRouter = require('./routes/vocabulary');
const storyRouter = require('./routes/story');
const videoRouter = require('./routes/video');
const songRouter = require('./routes/song');
const progressRouter = require('./routes/progress');

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account', accountRouter);
app.use('/profile', profileRouter);
app.use('/course', courseRouter);
app.use('/topic', topicRouter);
app.use('/lesson', lessonRouter);
app.use('/vocabulary', vocabularyRouter);
app.use('/story', storyRouter);
app.use('/video', videoRouter);
app.use('/song', songRouter);
app.use('/progress', progressRouter);

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
