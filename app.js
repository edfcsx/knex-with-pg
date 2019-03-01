/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const stickers = require('./api/stickers');

app.use('/api/v1/stickers', stickers);

// catch 404 and forward to error handler
// eslint-disable-next-line func-names
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development',
  });
});

module.exports = app;
