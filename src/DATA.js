const username = "cdhi5yfb";
const password = "KRch988btR";
const bassdevqa = "https://bassdevqa.netcracker.com";
const du = "https://confluence-datacenter.du.ae";

module.exports = {
  authData: Buffer.from(`${username}:${password}`).toString("base64"),
  CONF_URL: du,
};
