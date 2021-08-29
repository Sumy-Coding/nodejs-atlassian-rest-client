const dotenv = require('dotenv');
// const username = 'cdhi5yfb';
dotenv.config();
const username = process.env.username;
const password = process.env.password;
const bhPpassword = process.env.bhPpassword;
const bassdevqa = process.env.bassdevqa;
const du = process.env.du;
const bh = process.env.bh;
const cloudToken = process.env.cloudToken;

module.exports = {
  authData: Buffer.from(`${username}:${password}`).toString('base64'),
  CONF_URL: bh,
};
