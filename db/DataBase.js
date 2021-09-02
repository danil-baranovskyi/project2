import {sleep} from "../functions/sleep.js";

export class DataBase {

     async getRow(id){
         await sleep(0.5)
         console.log("some data on index: ", id)
         return id;
    }
}
