import { Player } from "./player.js"
import { Bomb } from "./bomb.js"
import { Pirate } from "./pirate.js"
import { Pirateship } from "./pirateship.js"

class Game {

    private player: Player
    private pirate: Pirate[] = []
    private bomb: Bomb[] = []
    private pirateship: Pirateship[] = []

    constructor(){
        console.log('Game was created!')

        // Maak de player aan
        this.player = new Player()
        // Maak piraten aan
        this.pirate.push(new Pirate("pirate"))
        // Maak de piratenboten aan
        this.pirateship.push(new Pirateship("pirateship"))

        this.gameLoop()
    }
    
    private gameLoop() : void {

        // Update de piraten
        for (const pirate of this.pirate){
            pirate.update()
        }
        //Update de piratenboten
        for (const ship of this.pirateship){
            ship.update()
        }

        // this.pirateship.update()

        //Update de player
        this.player.update()
        requestAnimationFrame(() => this.gameLoop())


    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
}

new Game()