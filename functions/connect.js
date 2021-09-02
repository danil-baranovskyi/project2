import {sleep} from "./sleep.js";
import {MongoDb, MySql, PostgreSql} from "../db/index.js";
import {CanNotConnection} from "../errors/CanNotConnection.js";

const allowedDatabases = [
    MySql, PostgreSql, MongoDb
]

export async function connect (db) {
    let dbCopy;
    if (allowedDatabases.includes(db)) {
        dbCopy = new db();
    } else {
        throw new CanNotConnection;
    }
    console.log("Preparing connection to ", dbCopy.name , "...")
    await sleep(5);
    console.log("Connection to ", dbCopy.name , "done successfully!!!")
    return dbCopy
}

