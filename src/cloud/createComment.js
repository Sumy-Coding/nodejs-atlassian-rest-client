import {confluenceHost, cloudAuthData} from "../data.js";

export async function createComment(
    spaceId,
    title,
    body,
    parentId,
    pageId
) {

    console.info(">>> Initiating [CREATE Comment] request...");

    const data = {
        type: "comment",
        title: title,
        space: {id: spaceId},
        body: {
            storage: {
                value: body,
                representation: "storage",
            },
        },
        container: {
            id: pageId,
            type: "page",
        },
    };

    const resp = await fetch({
        method: "POST",
        url: `${confluenceHost}/rest/api/content`,
        headers: {
            Authorization: `Basic ${cloudAuthData}`,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    });

    console.log(resp.status)

    return resp.json();
}
