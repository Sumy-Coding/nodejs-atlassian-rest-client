import {confluenceHost, cloudAuthData} from "../data.js";

export async function getPage(pageId) {
    console.log('  >>> Initiating [getPage] request...');

    const resp = await fetch(`${confluenceHost}/rest/api/content/${pageId}`, {
        headers: {
            Authorization: `Basic ${cloudAuthData}`,
        },
    });

    return await resp.json();
}
