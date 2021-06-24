export class Fish {
    x : number = 0
    y : number = 0
    speed : number = 5
    div : HTMLElement

    constructor() {
        console.log("Fish was created!")
        this.create()
    }

    create() {
        this.div = document.createElement("fish")
        document.body.appendChild(this.div)

        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        this.speed = Math.random() * 5 + 1

    }
    
    update() {
        // Move the fish (x-value) to the left. 
        this.x = this.x - this.speed
        // Check if the fish is completely outside the screen (left side)
        if(this.x + this.div.clientWidth < 0) {

        
            // Place the fish on the right side outside the screen
            this.x = window.innerWidth
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight
            ))
        }   
        

        // Draw the fish on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

    }
}