"use strict";
class Level {
    constructor() {
        this.completed = false;
        this.currentLevel = 0;
        this.answerA = document.getElementById("a");
        this.answerB = document.getElementById("b");
        this.answerC = document.getElementById("c");
        this.questions = document.getElementById("questions");
        let storedstring = localStorage.getItem('currentLevel');
        console.log(storedstring);
        this.currentLevel = Number(storedstring);
        switch (this.currentLevel) {
            case 0:
                this.answerA.setAttribute("value", "AA");
                this.answerB.setAttribute("value", "A");
                this.answerC.setAttribute("value", "OE");
                break;
            case 1:
                this.answerA.setAttribute("value", "OO");
                this.answerB.setAttribute("value", "BB");
                this.answerC.setAttribute("value", "CC");
                break;
            default:
                break;
        }
        this.questions.addEventListener("click", (e) => this.correct(e));
        console.log("Hallo");
        if (storedstring) {
            let storedData = JSON.parse(storedstring);
        }
    }
    correct(e) {
        const imggood = document.getElementById("good");
        const imgwrong = document.getElementById("wrong");
        console.log(e);
        let knop = e.target;
        console.log(knop.defaultValue);
        if (knop.defaultValue == "AA") {
            console.log("Succes!!!");
            imggood.style.display = "block";
            imgwrong.style.display = "none";
            localStorage.setItem('levelsComplete', JSON.stringify(this.currentLevel + 1));
            setTimeout(function () {
                location.href = "../";
            }, 3000);
        }
        else {
            console.log("Pech");
            imgwrong.style.display = "block";
            imggood.style.display = "none";
        }
    }
}
new Level();
//# sourceMappingURL=level.js.map