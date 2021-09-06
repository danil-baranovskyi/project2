import {connect} from "./functions/connect.js";
import {CanNotConnection} from "./errors/CanNotConnection.js";
import {asyncData} from "./functions/asyncData.js";
import {getDbArr} from "./functions/getDbArr.js";

async function asyncDbConnection(dbArr) {

    return Promise.all(dbArr.map(e => connect(e)))
}

let dbArr = [];

try {
    dbArr = await asyncDbConnection(getDbArr());
} catch (e) {
    if (e instanceof CanNotConnection) {
        console.log("Unknown name of Data Base");
    }
}

dbArr.map(e => asyncData(e));