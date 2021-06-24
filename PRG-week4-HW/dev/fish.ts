//TODO: add public/private keywords

export class Fish {
    
   private x : number = 0
   private y : number = 0
   private div : HTMLElement

    // fish is dead?
   public isDead : boolean

    constructor() {
        console.log("Fish was created!")

        this.create()
    }

   public getClientRect() : DOMRect {
        return this.div.getBoundingClientRect();
    }

   public getIsDead() : boolean {
        return this.isDead;
    }

   public create() : void {
        this.div = document.createElement("fish")
        this.div.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(this.div)

        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update() : void {
        // Move the fish (x-value) to the left. 
        this.x -= 3

        // Check if the fish is completely outside the screen (left side)
        if(this.x + this.div.clientWidth < 0) {
            // Place the fish on the right side outside the screen
            this.x = window.innerWidth
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        }

        // Draw the fish on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

   public killFish() : void {
        this.isDead = true;
        this.div.classList.add("dead")
    }
}