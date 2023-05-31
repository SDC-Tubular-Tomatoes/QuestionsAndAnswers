/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const redis = require('redis');

const client = redis.createClient(6379);
client.connect();
console.log(client.isOpen);
client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.error('Error occurred in Redis client: ', err);
});

module.exports = client;

// const redis = require('redis');

// async function run() {
//   const client = redis.createClient();

//   await client.connect();

//   console.log(client.isOpen); // this is true

//   await client.disconnect();
// }

// run();