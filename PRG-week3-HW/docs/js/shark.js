export class Shark {
    constructor() {
        this.verticalSpeed = 0;
        console.log("Fish was created!");
        window.addEventListener("keyup", (e) => this.onKeyUpHandler(e));
        window.addEventListener("keydown", (e) => this.onKeyDownHandler(e));
        this.create();
    }
    onKeyDownHandler(e) {
        console.log(e.key);
        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
            default:
                break;
        }
    }
    onKeyUpHandler(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
    }
    create() {
        this.div = document.createElement("shark");
        document.body.appendChild(this.div);
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.y += this.verticalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    onKeyDown(e) {
        console.log(e.key);
    }
    onKeyUp(e) {
    }
}
//# sourceMappingURL=shark.js.map