import { Pokemon } from "./pokemon";

export class Grass extends Pokemon {
    public tackle(): void
    {
        console.log('Tackle!')
    }

    public razorLeaf() : void
    {
        console.log('RazorLeaf!')
    }
}