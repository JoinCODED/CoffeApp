import { extendObservable, action, observable } from "mobx";
class myStore {
    constructor() {
        extendObservable(this, {
            current: [],
            detail: {},
            header: "The Coffe App",
            shop: {
                name: ""
            },
            get cart() {
                let amount = 0;
                this.current.map(
                    (item) => amount = amount+item.quantity
                )
                return amount
            }
        }
    )}
}
export default new myStore()
