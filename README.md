# CMTTHE04 Week1 oefening 1

## Voorbereiding

Download of clone deze repository naar je computer. Gebruik [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code om je werk meteen live in localhost te zien! [Bekijk de code v   oorbeelden](#voorbeeld) en begin aan de opdracht.

<br>
<br>
<br>

## Opdracht 1

- Verwijder `<fish>` en `<bubble>` uit de html file
- Vervang `const fish = document.querySelector("fish")` in de javascript file door:
```typescript
let fish = document.createElement("fish")
```
- Voeg de vis vervolgens toe aan de game
```typescript
const game = document.querySelector("game")
game.appendChild(fish)
```
- Plaats je code in een functie.
- Doe nu ditzelfde voor het bubble element.

<br>
<br>
<br>

## Opdracht 2

In deze regels code staan de coördinaten en de kleur van de vis: 
```typescript
fish.style.transform = `translate(200px, 100px)`
fish.style.filter = `hue-rotate(200deg)`
```

- Vervang de x en y waarden van de vis en bubble door [willekeurige waarden](#voorbeeld).
- Geef de vis een willekeurige kleur (`hue-rotate`) tussen 0 en 360
- Zorg dat de vis en bubble wel altijd binnen beeld blijven met `window.innerWidth` en `window.innerHeight`

<br>
<br>
<br>

## Opdracht 3

- Maak een for loop die 50 (of meer? 😱) visjes en bubbles toevoegt. 

<br>
<br>
<br>

## Extra uitdaging

- Voeg een click event listener toe aan elk visje en bubble. 
- Als geklikt wordt op de vis geef je de geklikte vis de CSS class "dead" door `element.classList.add("dead")` te gebruiken.
- Als geklikt wordt op de bubble verwijder je het element met `element.remove()`
- Kan je een "plop" [geluidje](#sound) laten horen als je een bubble wegklikt?

<br>
<br>
<br>

# <a name="voorbeeld"></a> Code voorbeelden 

Semantische HTML elementen
```html
<fish></fish>
<bubble></bubble>
```

CSS voor semantische elementen
```css
fish {
   display: block;
   position:absolute;
   width:100px; height:100px;
   background-image: url(fish.png);
}
```
Aanmaken elementen met javascript
```typescript
const c = document.createElement("car")
document.body.appendChild(c)
```
Positioneren  elementen met javascript
```typescript
c.style.transform = `translate(20px, 20px)`

let posx = 100
let posy = 300
c.style.transform = `translate(${posx}px, ${posy}px)`
```
Random getal tussen 0 en afmeting window
```typescript
let randomPosition = Math.random() * window.innerWidth
```
Een element klikbaar maken:
```typescript
element.addEventListener("click", clickMe)

function clickMe(e){
    console.log(`you clicked on ${e.target}`)
}
```
<a name="sound"></a>Een geluidje afspelen:
```typescript
const plopSound = new Audio('./sound/plop.mp3')
bubble.addEventListener("click", plop)

function plop() {
    plopSound.play()
}
```