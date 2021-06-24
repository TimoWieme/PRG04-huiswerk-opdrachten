export class Fish {
    
    private _x: number = 0
    public get x(): number {
        return this._x
    }
    public set x(value: number) {
        this._x = value
    }
    y : number = 0
    div : HTMLElement

    
    constructor() {
        console.log("Fish was created!")

        this.create()
    }

    create() {
        this.div = document.createElement("fish")
        document.body.appendChild(this.div)

        // Generate a random x and y value within de width and height of the viewport
        this._x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))


    }

    update() {
        // Move the fish (x-value) to the left. 
        this._x = this._x -5
        // Check if the fish is completely outside the screen (left side)
        if(this._x + this.div.clientWidth < 0) {

        
            // Place the fish on the right side outside the screen
            this._x = window.innerWidth
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight
            ))
        }   
        

        // Draw the fish on the right coordinate (x, y)
        this.div.style.transform = `translate(${this._x}px, ${this.y}px)`

    }

    killFish(){
        this.div.classList.add("dead")
    }
}