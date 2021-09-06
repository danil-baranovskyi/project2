import {MongoDb, MySql, PostgreSql} from "../db/index.js";

export const getDbArr = () => {
    return [
        MySql, PostgreSql, MongoDb
    ]
}