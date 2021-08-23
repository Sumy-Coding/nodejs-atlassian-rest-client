const axios = require('axios');
const https = require('https');
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

console.log('Initiating REST request...');
let username = 'anma0513';
let password = 'i21IasiNC'

// rl.question('Password?', (pass) => {
//     password = pass;
//     rl.close();
// });

// rl.on("close", function () {
//     console.log("\nBYE BYE !!!\n");

//     process.exit(0);

// });

let authData = Buffer.from(`${username}:${password}`).toString('base64');

axios.get('https://bassdevqa.netcracker.com/plugins/servlet/scroll-office/api/templates?spaceKey=COG', {
    headers: {
        "Authorization": `Basic ${authData}`
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
})
    .then(res => {
        let templates = res.data;
        for (template of templates) {
            console.log(template.name);
            console.log(template.spaceKey);
            console.log(template.type);
            console.log(template.creator);
            console.log('============');
        }
    })
    .catch(err => console.log(err));
