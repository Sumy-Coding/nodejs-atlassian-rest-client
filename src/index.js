const getPage = require("./get-page");
const getChildren = require("./getChildren");
const getDescendants = require("./getDescendants");
const getSpacePagesByLabel = require("./getSpacePagesByLabel");
const getScrollSpaceTemplates = require("./scroll-templates");
const createPage = require("./createPage");

const PAGE_ID = 1101617403;

async function init() {
  // getPage(PAGE_ID);
  // getScrollSpaceTemplates('COG');
  //   getDescendants(PAGE_ID).then((res) => console.log(res.data));
  //   getSpacePagesByLabel("TEST", "test").then((res) => console.log(res.data));
  createPage("TEST", "test 876", "this is body", PAGE_ID).then((res) =>
    console.log(res.data)
  );
}
init();
