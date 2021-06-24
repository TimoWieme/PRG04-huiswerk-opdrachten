import { Grass } from "./grass";
import { Pokemon } from "./pokemon";
import { Water } from "./water";

export class Trainer{
    private pokemon: Pokemon[]

    constructor(name: string){
        console.log('Hello')
    }

    public setPokemon(array: Pokemon[]){
        this.pokemon = array
    }

    public addPokemon(monster: Pokemon){
        this.pokemon.push(monster)
    }

    public getPokemon(): Pokemon[]
    {
        return this.pokemon
    }
}

