const axios = require('axios');
const https = require('https');

console.log('Initiating REST request...');
let username = 'anma0513';
let password = ''
let authData = Buffer.from(`${username}:${password}`).toString('base64');
const CONF_URL = 'https://bassdevqa.netcracker.com'
const PAGE_ID = 1071957752

axios.get(`${CONF_URL}/rest/api/content/${PAGE_ID}`, {
    headers: {
    "Authorization": `Basic ${authData}`
},
httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })}).then(res => {
      console.log(res.data);
  })