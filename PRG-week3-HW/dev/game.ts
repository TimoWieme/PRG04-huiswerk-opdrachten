import { Fish } from "./fish.js"
import { Shark } from "./shark.js"

class Game {
    // store fish in array
    fish : Fish
    shark: Shark

    constructor() {
        console.log("Game was created!")
        
        // Create the fish
        this.fish = new Fish()
        // Create the shark
        this.shark = new Shark()

        this.gameLoop()
    }

    gameLoop() {
        // update the fish

        this.fish.update()
            // check collision between shark and fish

        // update the shark
        this.shark.update()
        
        requestAnimationFrame(() => this.gameLoop())
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

new Game()