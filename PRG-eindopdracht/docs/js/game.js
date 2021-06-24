import { Player } from "./player.js";
import { Pirate } from "./pirate.js";
import { Pirateship } from "./pirateship.js";
class Game {
    constructor() {
        this.pirate = [];
        this.bomb = [];
        this.pirateship = [];
        console.log('Game was created!');
        this.player = new Player();
        this.pirate.push(new Pirate("pirate"));
        this.pirateship.push(new Pirateship("pirateship"));
        this.gameLoop();
    }
    gameLoop() {
        for (const pirate of this.pirate) {
            pirate.update();
        }
        for (const ship of this.pirateship) {
            ship.update();
        }
        this.player.update();
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