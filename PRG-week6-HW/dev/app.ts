import { Grass } from "./grass";
import { Trainer } from "./trainer";
import { Water } from "./water";

export class App{
    private trainer: Trainer

    constructor(){
        this.trainer = new Trainer('Ash')
        let squirtle = new Water()
        let bulbasaur = new Grass()

        this.trainer.addPokemon(squirtle)
        this.trainer.addPokemon(bulbasaur)

        this.trainer.getPokemon
    }
}

new App()