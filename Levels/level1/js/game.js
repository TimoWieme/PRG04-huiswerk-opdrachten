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
    if (e.target.defaultValue == "AA") {
        console.log("Succes");
    }
    else {
        console.log("Pech");
    }
}
//# sourceMappingURL=game.js.map