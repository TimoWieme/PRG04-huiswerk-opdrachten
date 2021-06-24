import { Fish } from "./fish.js";
import { Shark } from "./shark.js";
class Game {
    constructor() {
        console.log("Game was created!");
        this.fish = new Fish();
        this.shark = new Shark();
        this.gameLoop();
    }
    gameLoop() {
        this.fish.update();
        this.shark.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map