/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

module.exports = (req, res, next) => {
  console.log('THIS IS URL: ', req.url);
  console.log('THIS IS BODY: ', req.body);
  console.log('THIS IS QUERY: ', req.query);
  console.log('THIS IS METHOD: ', req.method);
  console.log('THIS IS PARAMS: ', req.params);
  console.log('THIS IS PROTOCOL: ', req.protocol);
  console.log('THIS IS ORIGINAL URL: ', req.originalUrl);
  next();
};
