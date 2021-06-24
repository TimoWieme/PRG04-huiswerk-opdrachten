
export class Fish{
    // Fields
    protected x : number = 0
    protected y : number = 0
    protected div: HTMLElement

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(tagName : string){
        this.div = document.createElement(tagName)
        document.body.appendChild(this.div)   
    }

    public update(){
        // Draw the shark on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}