import {randomFromTo} from "./randomFromTo.js";

export async function asyncData (db) {
    let n = await db;
    for (let j = 0; j < 50; j++) {
        await n.getRow(randomFromTo(1, 50));
    }

    return true;
}