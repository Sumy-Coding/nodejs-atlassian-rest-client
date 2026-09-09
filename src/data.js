import dotenv from "dotenv";

dotenv.config();

export const username = process.env.ATLAS_USER;
export const dcToken = process.env["DC_TOKEN"];
export const cloudToken = process.env['ATLAS_TOKEN'];
export const confluenceHost = process.env["ATLAS_HOST"];
export const cloudAuthData = Buffer.from(`${username}:${cloudToken}`).toString("base64");
