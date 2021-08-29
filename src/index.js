const getPage = require('./get-page');
const getChildren = require('./getChildren');
const getDescendants = require('./getDescendants');
const getSpacePagesByLabel = require('./getSpacePagesByLabel');
const getScrollSpaceTemplates = require('./scroll-templates');
const createPage = require('./getPage');
const deleteLabel = require('./deleteLabel');
const getPageLabels = require('./getPageLabels');
const getPageCloud = require('./cloud/getPageCloud');

const PAGE_ID = 78020757;

async function init() {
  getPage(PAGE_ID).then((res) => console.log(res.data));
  // getScrollSpaceTemplates('COG');
  //   getDescendants(PAGE_ID).then((res) => console.log(res.data));
  //   getSpacePagesByLabel("TEST", "test").then((res) => console.log(res.data));
  // createPage("TEST", "test 876", "this is body", PAGE_ID).then((res) =>
  //   console.log(res.data)
  // );
  // getPageLabels(PAGE_ID).then((res) => {
  //   for (label of res.data.results) {
  //     deleteLabel(PAGE_ID, label.name);
  //   }
  // });

  // deleteLabel(7962799, "error-template").then((res) => console.log(res.data));

  //   ---- CLOUD ---

  // getPageCloud(PAGE_ID).then((res) => console.log(res.data));
}
init();
