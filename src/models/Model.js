
import { observable, computed } from "mobx";

export default class Model {
    possible_worlds = ["world", "there"];
    index = 0;

    @observable name = "world";

    constructor() {
        this.name = this.possible_worlds[this.index];
        setInterval(() => {
            this.index = (this.index + 1) % this.possible_worlds.length;
            this.name = this.possible_worlds[this.index];
        }, 1000);
    }
}
