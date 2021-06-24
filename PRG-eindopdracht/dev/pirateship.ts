import { gameObject } from "./gameObject.js";

export class Pirateship extends gameObject{
    constructor(tagName: string){
        super("pirateShip")

        this.x = 50
        this.y = 15

    }

    public update() : void{
        // Laat de boot naar links gaan op het scherm
        this.x +=3

        //Als de boot helemaal aan de linkerkant van het scherm is:
        if(this.x + this.div.clientWidth > 1800) {
            // Zet de boot dan weer aan de rechterkant van het scherm
            this.x = -50
            // Generate a random y-value
            this.y = 15
        }
        super.update()
    }
}