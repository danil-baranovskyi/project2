import {sleep} from "./sleep.js";

import {CanNotConnection} from "../errors/CanNotConnection.js";
import {randomFromTo} from "./randomFromTo.js";
import {getDbArr} from "./getDbArr.js";

export async function connect(db) {
    if (!getDbArr().includes(db)) {
        throw new CanNotConnection;
    }

    let dbCopy = new db();

    console.log("Preparing connection to ", dbCopy.name, "...");
    await sleep(randomFromTo(1, 3));
    console.log("Connection to ", dbCopy.name, "done successfully!!!");

    return dbCopy;
}