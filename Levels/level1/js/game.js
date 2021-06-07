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
    const imggood = document.getElementById("good");
    const imgwrong = document.getElementById("wrong");
    if (e.target.defaultValue == "AA") {
        console.log("Succes!!!");
        imggood.style.display = "block";
        imgwrong.style.display = "none";
    }
    else {
        console.log("Pech");
        imgwrong.style.display = "block";
        imggood.style.display = "none";
    }
}
//# sourceMappingURL=game.js.map