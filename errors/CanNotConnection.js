export class CanNotConnection extends Error {
    constructor() {
        super("Can not connection to given db");
    }
}