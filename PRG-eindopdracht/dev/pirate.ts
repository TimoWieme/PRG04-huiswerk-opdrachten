import { gameObject } from "./gameObject.js";

export class Pirate extends gameObject{
    constructor(tagName: string)  {
        super("Pirate")
        console.log("Pirate was created!")
        
        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight- this.div.clientHeight))
    }


    public update() : void {
        // Move the pirate (x-value) to the left. 
        this.x -= 3

        // Check if pirate is completely out of the screen on the left side
        if(this.x + this.div.clientWidth < 0) {
            // Place pirate on right side of the screen
            this.x = window.innerWidth
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        }
        super.update()

    }
}