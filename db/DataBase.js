import fetch from "node-fetch";
import {isEmpty} from "../functions/isEmpty.js";

export class DataBase {

    constructor() {
        this.name = '';
    }

    async getRow(id) {
        const today = new Date();
        const timeStamp = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
        const responses = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
        const data = await responses.json();
        if (!isEmpty(data)) {
            console.log(data.id + "| " + timeStamp + "| " + this.name)
        }
    }
}
