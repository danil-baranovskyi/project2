import {sleep} from "../functions/sleep.js";

export class DataBase {

     async getRow(id){
         let today = new Date();
         let timeStamp = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
         await sleep(0.5)
         console.log("some data on index: ", id, "| time: ", timeStamp)
         return id;
    }
}
