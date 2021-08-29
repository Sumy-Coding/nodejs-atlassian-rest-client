// const username = 'cdhi5yfb';
const username = 'beastiehut@gmail.com';
const password = 'RtuJhOJZADwGBrJzofpBFCB8';
const bassdevqa = 'https://bassdevqa.netcracker.com';
const du = 'https://confluence-datacenter.du.ae';
const bht = 'https://beastiehut.atlassian.net/wiki';
const cloudToken = 'RtuJhOJZADwGBrJzofpBFCB8';

module.exports = {
  authData: Buffer.from(`${username}:${password}`).toString('base64'),
  CONF_URL: bht,
  cloudToken,
};
