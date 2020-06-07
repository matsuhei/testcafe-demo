import { RequestHook } from "testcafe";

export class myRequestHook extends RequestHook {
    constructor () {
        super();
    }

    async onRequest (e) {
        e.requestOptions.headers['test'] = 'User';
        e.requestOptions.headers['test2'] = 'User';        
    }

    async onResponse (e) {

    }
}
