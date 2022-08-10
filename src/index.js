const getPage = require("./getPage");
const getChildren = require("./getChildren");
const getDescendants = require("./getDescendants");
const getSpacePagesByLabel = require("./getSpacePagesByLabel");
const getScrollSpaceTemplates = require("./scroll-templates");
const createPage = require("./createPage");
const deleteLabel = require("./deleteLabel");
const getPageLabels = require("./getPageLabels");
const getPageCloud = require("./cloud/getPageCloud");
const createComment = require("./createComment");

//http://localhost:7190/pages/editpage.action?pageId=1901014
const PAGE_ID = 1901077;

// todo GET /rest/api/content/{id}/restriction/byOperation
// todo GET /rest/api/space/{spaceKey}/content
// todo GET /rest/api/content/{id}/child/attachment
// todo DELETE /rest/api/content/{id}/label/...

async function init() {
  // == GET
  // getPage(PAGE_ID)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));

  // == SCROLL
  // getScrollSpaceTemplates('COG');
  //   getDescendants(PAGE_ID).then((res) => console.log(res.data));
  //   getSpacePagesByLabel("TEST", "test").then((res) => console.log(res.data));

  // ====== Create Page =====
  createPage("JS", "JS test", "this is body", PAGE_ID)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

  // ====== Create comment ======
  // createComment('TEST', 'test title', 'rest comment!', 1000, PAGE_ID).then(
  //   (res) => console.log(res.data)
  // );

  // == Labels
  // getPageLabels(PAGE_ID).then((res) => {
  //   for (label of res.data.results) {
  //     deleteLabel(PAGE_ID, label.name);
  //   }
  // });

  // deleteLabel(7962799, "error-template").then((res) => console.log(res.data));

  //   ---- CLOUD ---
  // getPageCloud(PAGE_ID).then((res) => console.log(res.data));
}

// init
init();
