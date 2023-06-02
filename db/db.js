/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const pgpModule = require('pg-promise');

const pgp = pgpModule();

const connection = {
  user: process.env.SQLUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.SQLPORT,
  password: process.env.SQLPASSWORD,
};

const db = pgp(connection);
db.connect()
  .then(() => console.log('CONNECTED TO THE DATABASE SUCCESSFULLY...'))
  .catch((err) => console.log('FAILED TO CONNECT TO THE DATABASE', err));

module.exports.db = db;
