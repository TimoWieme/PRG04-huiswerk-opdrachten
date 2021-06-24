export class Shark{
    private x : number
    private y : number
    private verticalSpeed : number = 0
    private isCurrent : boolean
    private div : HTMLElement

    constructor() {
        this.create()
    }

    public setIsCurrent(current = true) : void {
        this.isCurrent = current;
    }

    public getClientRect() : DOMRect {
        return this.div.getBoundingClientRect();
    }

    public create() {
        console.log("Shark was created!")

        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))

        this.div = document.createElement("shark")
        document.body.appendChild(this.div)

        this.x = 100
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update() {
        //TODO: add fix to stop propagation in non active class

        // Add the vertical speed to the y-value
        this.y += this.verticalSpeed
        // Draw the shark on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public onKeyDown(e: KeyboardEvent): void {
        //TODO: add fix to stop propagation in non active class

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

    public onKeyUp(e: KeyboardEvent): void {
        //TODO: add fix to stop propagation in non active class
        
        // Check if ArrowUp or ArrowDown key has been released
        if(e.key == "ArrowUp" || e.key == "ArrowDown") {
            // Make the vertical speed 0
            this.verticalSpeed = 0
        }
    }
}