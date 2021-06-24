import { gameObject } from "./gameObject.js";
export class Pirateship extends gameObject {
    constructor(tagName) {
        super("pirateShip");
        this.x = 50;
        this.y = 15;
    }
    update() {
        this.x += 3;
        if (this.x + this.div.clientWidth > 1800) {
            this.x = -50;
            this.y = 15;
        }
        super.update();
    }
}
//# sourceMappingURL=pirateship.js.map