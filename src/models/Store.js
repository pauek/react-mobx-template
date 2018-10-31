
import { observable, computed } from "mobx";

export default class Store {
    options = ["world", "there"];
    index = 0;

    @observable name = "world";

    constructor() {
        this.name = this.options[this.index];
        setInterval(() => {
            this.index = (this.index + 1) % this.options.length;
            this.name = this.options[this.index];
        }, 1000);
    }
}
