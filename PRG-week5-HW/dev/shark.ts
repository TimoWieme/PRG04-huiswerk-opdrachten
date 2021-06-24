import { Fish } from "./fish.js"

export class Shark extends Fish{
    // Fields
    private verticalSpeed : number = 0

    constructor(tagName: string) {
        super(tagName)
        console.log("Shark was created!")

        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))
        
        this.x = 100
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update() : void {
        // Add the vertical speed to the y-value
        this.y += this.verticalSpeed
        super.update()


    }

    private onKeyDown(e: KeyboardEvent): void {
        // log the keyboard
        // console.log(e.key)

        // Check if the key in the event (e.key) matches the desired input
        switch (e.key) {
            // When the "ArrowUp" key is pressed
            case "ArrowUp":
                // Give the vertical speed a negative value
                this.verticalSpeed = -5
                break
            // When the "ArrowDown" key is pressed
            case "ArrowDown":
                // Give the vertical speed a positive value
                this.verticalSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == "ArrowUp" || e.key == "ArrowDown") {
            // Make the vertical speed 0
            this.verticalSpeed = 0
        }
    }
}