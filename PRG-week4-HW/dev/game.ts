
import { Aquarium } from "./aquarium.js"

class Game {
    // Alles private, want game is eigenaar van iedereen. En niemand heeft wat nodig uit game
    private aquarium : Aquarium[] = []
    private currentAquariumKey : number

    // Constructor mag je geen private of public geven
    constructor() {
        console.log("Game was created!")

        //TODO: create aquarium and set current
        this.nextAquarium()
        
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        this.gameLoop()
    }

    // Wordt alleen aangeroepen in Game Object, dus private
    private nextAquarium() : void {
        // remove current aquarium as current
        //TODO: set current aquarium to not active
        if(this.aquarium.length >= 1){
        this.aquarium[this.aquarium.length -1].setIsCurrent(false)
        }

        // create new aquarium
        //TODO: create new aquarium, push to array of aquariums and set active
        let temp = new Aquarium()
        temp.setIsCurrent()
        this.aquarium.push(temp)
    }

    private gameLoop() {
        //TODO: update aquarium
        this.aquarium[this.aquarium.length - 1].update()

        //TODO: update kills
        
        requestAnimationFrame(() => this.gameLoop())
    }
    // Wordt alleen aangeroepen vanuit object game, dus private
    private onKeyUp(e: KeyboardEvent) : void {
        // Check if ArrowRight
        if(e.key == "ArrowRight") {
            this.nextAquarium();
        }
    }
} 

new Game()