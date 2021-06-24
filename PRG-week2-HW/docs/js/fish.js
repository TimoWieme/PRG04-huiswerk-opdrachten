export class Fish {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 5;
        console.log("Fish was created!");
        this.create();
    }
    create() {
        this.div = document.createElement("fish");
        document.body.appendChild(this.div);
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.speed = Math.random() * 5 + 1;
    }
    update() {
        this.x = this.x - this.speed;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=fish.js.map