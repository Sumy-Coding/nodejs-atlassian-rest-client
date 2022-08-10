const axios = require("axios");
const https = require("https");
const { authData, CONF_URL } = require("./data");

module.exports = async function createPage(space, title, body, parent_id) {
  console.log(">>> Initiating REST request...");

  data = {
    type: "page",
    title: title,
    space: { key: space },
    body: {
      storage: {
        value: body,
        representation: "storage",
      },
    },
    ancestors: [{ id: parent_id }],
  };

  // console.log(authData);
  console.log(JSON.stringify(data));

  return await axios.post(`${CONF_URL}/rest/api/content`, {
    headers: {
      Authorization: `Basic ${authData}`,
      "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    data: JSON.stringify(data),
  });
};
