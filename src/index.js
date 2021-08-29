const getPage = require('./getPage');
const getChildren = require('./getChildren');
const getDescendants = require('./getDescendants');
const getSpacePagesByLabel = require('./getSpacePagesByLabel');
const getScrollSpaceTemplates = require('./scroll-templates');
const createPage = require('./createPage');
const deleteLabel = require('./deleteLabel');
const getPageLabels = require('./getPageLabels');
const getPageCloud = require('./cloud/getPageCloud');
const createComment = require('./createComment');

const PAGE_ID = 78020757;

// todo GET /rest/api/content/{id}/restriction/byOperation
// todo GET /rest/api/space/{spaceKey}/content
// todo GET /rest/api/content/{id}/child/attachment
// todo DELETE /rest/api/content/{id}/label/...

async function init() {
  // getPage(PAGE_ID)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));
  // getScrollSpaceTemplates('COG');
  //   getDescendants(PAGE_ID).then((res) => console.log(res.data));
  //   getSpacePagesByLabel("TEST", "test").then((res) => console.log(res.data));
  // ====== Create Page =====
  createPage('TEST', 'test 876', 'this is body', PAGE_ID).then((res) =>
    console.log(res.data)
  );
  // ====== Create comment ======
  // createComment('TEST', 'test title', 'rest comment!', 1000, PAGE_ID).then(
  //   (res) => console.log(res.data)
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
