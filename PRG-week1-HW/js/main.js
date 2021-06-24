

function createFish(){
    let posx = Math.random() * window.innerWidth
    let posy = Math.random() * window.innerHeight
    let hue = Math.floor(Math.random() * 361);

    //Fish aanmaken en toevoegen
    let fish = document.createElement("fish")
    fish.style.transform = `translate(${posx}px, ${posy}px)`
    fish.style.filter = `hue-rotate(${hue}deg)`
    const game = document.querySelector("game")
    game.appendChild(fish)
    
}

function createBubble(){
    let posx = Math.random() * window.innerWidth
    let posy = Math.random() * window.innerHeight
    // bubble element
    let bubble = document.createElement("bubble")
    bubble.style.transform = `translate(${posx}px, ${posy}px)`
    const game = document.querySelector("game")
    game.appendChild(bubble)
}

for(let i = 0; i < 4; i++){
    console.log("Fish & Bubble added")
    createFish()
    createBubble()
}

