import { Pokemon } from "./pokemon";

export class Water extends Pokemon{

    public bubble() : void
    {
        console.log('Bubble!')
    }

    public waterGun() : void
    {
        console.log('Watergun!')
    }
}