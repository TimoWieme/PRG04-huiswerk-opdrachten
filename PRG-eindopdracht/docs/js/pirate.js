import { gameObject } from "./gameObject.js";
export class Pirate extends gameObject {
    constructor(tagName) {
        super("Pirate");
        console.log("Pirate was created!");
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.x -= 3;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        super.update();
    }
}
//# sourceMappingURL=pirate.js.map