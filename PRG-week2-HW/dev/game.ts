import { Bubble } from "./bubble.js"
import { Fish } from "./fish.js"

class Game {
    fish: Fish
    bubble: Bubble
    anotherFish: Fish
    anotherBubble: Bubble
        
        constructor() {
            
            this.fish = new Fish()
            this.anotherFish= new Fish()
            this.bubble = new Bubble()
            this.anotherBubble = new Bubble()
            this.gameLoop()
        }

        gameLoop(){

                this.fish.update()
                this.bubble.update()
                this.anotherFish.update()
                this.anotherBubble.update()
                requestAnimationFrame(() => this.gameLoop())

        }
} 

new Game()