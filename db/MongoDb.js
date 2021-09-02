import {DataBase} from "./DataBase.js";

export class MongoDb extends DataBase {
    constructor() {
        super()
        this.name = "MongoDb";
    }
}