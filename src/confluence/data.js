import dotenv from "dotenv";

dotenv.config();

const username = process.env.ATLAS_USER;
const password = process.env['ATLAS_PASS'];
const cloudToken = process.env.cloudToken;

export const authData = Buffer.from(`${username}:${password}`).toString("base64");
export const CONF_URL = "http://localhost:9230";
