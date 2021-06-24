//TODO: add public/private keywords

import { Fish } from "./fish.js"
import { Shark } from "./shark.js"

export class Aquarium {
    // Variabelen zijn private want je gebruikt ze alleen in aquarium
    private fish: Fish[] = []
    private shark: Shark

    private name: string
    private kills: number
    private isCurrent: boolean

    private div: HTMLElement
    private scoreElement : HTMLElement


    constructor() {
        this.kills = 0
        this.isCurrent = false
        this.create()

        this.scoreElement = document.createElement("score")
        document.body.appendChild(this.scoreElement)
    }

    // Public want je kan het vanuit de game aanroepen (setters en getters zijn public)
    public setName(name: string): void {
        this.name = name;
        console.log(`Aquarium was named ${this.name}!`)
    }

    public setIsCurrent(current = true): void {
        this.isCurrent = current
        //TODO: set shark to isCurrent, to disable functionality
    }

    // Vanuit de gaeme wil je deze informatie, dus public
    public getKills(): number {
        return this.kills;
    }

    // Deze functie wordt toevallig alleen vanuit het aquarium aangeroepen, dus private
    private create(): void {
        console.log("Aquarium was created!")

        this.div = document.createElement("background")
        this.div.style.filter = `hue-rotate(${Math.random() * 360}deg)`
        document.body.appendChild(this.div)

        // Create the fish
        for (let i = 0; i < (Math.random() * 10); i++) {
            this.fish.push(new Fish())
        }

        // Create the shark
        this.shark = new Shark()
    }

    public update(): void {
        // update the fish
        for (const fish of this.fish) {
            // update fish
            fish.update()
            //TODO: check collision
            if (!fish.isDead) {
                let hit = (this.checkCollision(this.shark.getClientRect(), fish.getClientRect()))
                if (hit) {
                    // Kill Fish
                    fish.killFish()
                    this.kills++
                    this.scoreElement.innerText = `Kills :${this.kills}`;
                    console.log(this.kills)
                }

            }
        }
        // update the shark
        this.shark.update()
    }

    private checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
}