"use strict";
class Game {
    constructor() {
        this.answerA = document.getElementById("a");
        this.answerB = document.getElementById("b");
        this.answerC = document.getElementById("c");
        this.questions = document.getElementById("questions");
        this.answerA.setAttribute("value", "AA");
        this.answerB.setAttribute("value", "A");
        this.answerC.setAttribute("value", "OE");
        this.questions.addEventListener("click", correct);
    }
}
new Game;
function correct(e) {
    const answerGiven = document.getElementById("answerGiven");
    console.log(answerGiven);
    if (e.target.defaultValue == "AA") {
        console.log("Succes!!!");
        answerGiven.innerText = "U heeft het goed";
    }
    else {
        console.log("Pech");
        answerGiven.innerText = "Helaas";
    }
}
//# sourceMappingURL=game.js.map