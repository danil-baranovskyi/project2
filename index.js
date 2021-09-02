import {connect} from "./functions/connect.js";

import {MongoDb, MySql, PostgreSql} from "./db/index.js";
import {sleep} from "./functions/sleep.js";
import {CanNotConnection} from "./errors/CanNotConnection.js";

function some() {
    return Promise.all([connect(MongoDb), connect(MySql), connect(PostgreSql)])
}
try {
    some().then()
} catch (e) {
    if(e instanceof CanNotConnection) {
        console.log("Unknown name of Data Base")
    }
}
// connect(PostgreSql).then()
// console.log(connect(MongoDb).then())
const MongoDbCopy = new MongoDb()

let today;

for (let i = 0; i < 10; i++){

    today = new Date();
    await MongoDbCopy.getRow(i).then()
    console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds())
}

// console.log(Date.now())
