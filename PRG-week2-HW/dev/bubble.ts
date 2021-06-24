export class Bubble {
    x : number = 0
    y : number = 0
    div : HTMLElement

    constructor() {
        console.log("Bubble was created!")
        this.create()
    }

    create() {
        this.div = document.createElement("bubble")
        document.body.appendChild(this.div)

        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))

    }

    update(){
        this.y --
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        if(this.y + this.div.clientHeight < 0) {

        
            // Place the fish on the right side outside the screen
            this.y = window.innerHeight
            // Generate a random y-value
            this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth
            ))
        } 
    }


}