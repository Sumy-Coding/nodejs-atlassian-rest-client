const axios = require('axios');
const https = require('https');
const { authData, CONF_URL } = require('./DATA')

module.exports = function getPage(pageId) {

    console.log('>>> Initiating REST request...');

    axios.get(`${CONF_URL}/rest/api/content/${pageId}`, {
        headers: {
        "Authorization": `Basic ${authData}`
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })}).then(res => {
        console.log(res.data);
    });
}