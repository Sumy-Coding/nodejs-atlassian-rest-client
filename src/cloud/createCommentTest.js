import {createComment} from "./createComment.js";

const data = {
    spaceId: "35913735",
    pageId: "35913877",
    body: "asdasd",
    parentId: "",
    title: "comment"
}

createComment(data.spaceId, data.title, data.body, data.parentId, data.pageId)
    .then((result) => {
        console.log(result);
    })
