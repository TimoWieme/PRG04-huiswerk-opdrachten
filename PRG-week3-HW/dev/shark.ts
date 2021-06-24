export class Shark{
    x : number
    y : number
    div : HTMLElement

    verticalSpeed : number = 0
    onKeyDownHandler(e: KeyboardEvent): any{
        console.log(e.key)
        switch  (e.key){
            case "ArrowUp":
                //omhoog zwemmen
                this.verticalSpeed = - 5
            break;
            case "ArrowDown":
                //omlaag zwemmen
                this.verticalSpeed = 5
                break;
            default:
                break;
        }
    }

    onKeyUpHandler(e: KeyboardEvent): any{
        if(e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0
        }
    }

    constructor() {
        console.log("Fish was created!")
        
        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUpHandler(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDownHandler(e))
        this.create()
    }

    create() {
        this.div = document.createElement("shark")
        document.body.appendChild(this.div)

        // generate x and y values
        this.x = 100
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    update() {
        // Add the vertical speed to the y-value
        this.y += this.verticalSpeed
        // Draw the shark on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

    }

    onKeyDown(e: KeyboardEvent): void {
        // log the keyboard
        console.log(e.key)

        // Check if the key in the event (e.key) matches the desired input
        
            // When the "ArrowUp" key is pressed
        
                // Give the vertical speed a negative value
        
        
            // When the "ArrowDown" key is pressed
        
                // Give the vertical speed a positive value
        
        
        
    }

    onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        
            // Make the vertical speed 0
        
        
    }
}