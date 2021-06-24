export class Fish {
    constructor() {
        this._x = 0;
        this.y = 0;
        console.log("Fish was created!");
        this.create();
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    create() {
        this.div = document.createElement("fish");
        document.body.appendChild(this.div);
        this._x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this._x = this._x - 5;
        if (this._x + this.div.clientWidth < 0) {
            this._x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        this.div.style.transform = `translate(${this._x}px, ${this.y}px)`;
    }
    killFish() {
        this.div.classList.add("dead");
    }
}
//# sourceMappingURL=fish.js.map