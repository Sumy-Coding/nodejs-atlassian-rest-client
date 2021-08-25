const username = 'anma0513';
const password = ''

module.exports = {
    authData: Buffer.from(`${username}:${password}`).toString('base64'),
    CONF_URL: 'https://bassdevqa.netcracker.com'
}
