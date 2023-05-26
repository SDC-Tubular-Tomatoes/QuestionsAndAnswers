/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const pgpModule = require('pg-promise');

const pgp = pgpModule();

const connection = {
  host: process.env.HOST,
  port: process.env.SQLPORT,
  database: process.env.DATABASE,
  user: process.env.USER,
};

const db = pgp(connection);
db.connect('SELECT * FROM reviews')
  .then(() => console.log('CONNECTED TO THE DATABASE SUCCESSFULLY...'))
  .catch((err) => console.log('FAILED TO CONNECT TO THE DATABASE', err));

module.exports.db = db;
