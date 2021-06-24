export class Bubble {
    constructor() {
        this.x = 0;
        this.y = 0;
        console.log("Bubble was created!");
        this.create();
    }
    create() {
        this.div = document.createElement("bubble");
        document.body.appendChild(this.div);
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.y--;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.y + this.div.clientHeight < 0) {
            this.y = window.innerHeight;
            this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        }
    }
}
//# sourceMappingURL=bubble.js.map