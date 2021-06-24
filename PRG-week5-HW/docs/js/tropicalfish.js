import { Fish } from "./fish.js";
export class TropicalFish extends Fish {
    constructor(tagName) {
        super(tagName);
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
    killFish() {
        this.div.classList.add("dead");
    }
}
//# sourceMappingURL=tropicalfish.js.map