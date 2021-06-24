# CMTTHE04 Week 2

- Werken met Typescript
- Compileren project van DEV naar DOCS
- Werken met Classes

<br>
<br>
<br>

## Voorbereiding

- [Installeer Visual Studio Code en Typescript](https://github.com/HR-CMGT/Typescript#werkomgeving)
- Download de code uit deze oefening. Druk op CMD + SHIFT + B en kies voor `watch mode`.
- Kijk of de `.js` files in de `docs/js` map zijn aangemaakt.
- Open `index.html` via localhost. Tip: gebruik [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

<br>
<br>
<br>

## Opdracht

- We gebruiken de [finished code van week 1](https://github.com/HR-CMGT/CMTTHE04-Week1-oefening1-completed) als uitgangspunt. We gaan dit nabouwen met behulp van Classes. 
- Verplaats de code die één Fish en één Bubble tekent naar de classes `fish.ts` en `bubble.ts`
- De code van de oude `createFish` en `createBubble` functies plaats je nu in de `constructor` van die classes.
- De event listeners laten we nog even weg.
- Nu kan je in `game.ts` een fish en een bubble aanmaken met:
```
let fish = new Fish()
let bubble = new Bubble()
```
- Maak 30 fishes en bubbles.
- De fish heeft nog steeds een random kleur en positie.
- De bubble heeft een random positie.

<br>
<br>
<br>

## Event Listeners

Je kan binnen een class werken met `addEventListener`. Om de juiste functie aan te roepen gebuik je de **arrow notatie** en het keyword **this**: `() => this.doSomething()`. In dit voorbeeld zie je dat de `fish` zijn `killFish` functie aanroept na een click:

```typescript
class Fish {
    
    constructor() {
        let element = document.createElement("fish")
        document.body.appendChild(element)
        element.addEventListener("click", () => this.killFish())
    }

    killFish() {
        console.log("This fish is dead 🐠💀")
    }
}
```

## Properties

We willen vanuit de `killFish` functie het HTML element aanpassen dat we in de constructor hebben aangemaakt. Om daar nog bij te kunnen maken we het HTML Element  een `property` van de `fish` class. Het datatype van deze property is `HTMLElement`. *Dit type kan je altijd makkelijk vinden door met de muis over de variabele te bewegen.*

```typescript
class Fish {
    
    div:HTMLElement

    constructor() {
        this.div = document.createElement("fish")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", () => this.killFish())
    }

    killFish() {
        this.div.classList.add("dead")
    }
}
```

<br>
<br>
<br>

## Opdracht

- Geef de bubble een click handler die het html element weghaalt. Dit kan je doen met `element.remove()`
- Speel het "plop" geluidje als de bubble wordt verwijderd
