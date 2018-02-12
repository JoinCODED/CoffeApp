import { extendObservable } from "mobx";
class myStore {
    constructor() {
        extendObservable(this, {
            current: [],
        })
    }
}
export default new myStore()