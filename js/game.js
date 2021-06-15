"use strict";
class Game {
    constructor() {
        this.allLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.background = ["images/jungle.jpeg", "images/ice.jpeg"];
        this.currentLevel = 0;
        this.webserviceURL = 'webservice/index.php';
        console.log("Hey");
        window.addEventListener("load", (e) => this.init());
    }
    init() {
        console.log("Page is Loaded");
        let main = document.getElementById("main");
        this.levelContainer = document.querySelector("#levelsDiv");
        main === null || main === void 0 ? void 0 : main.addEventListener("click", (e) => this.level(e));
        if (typeof window.localStorage === "undefined") {
            console.error('Local storage is not available in your browser');
            return;
        }
        this.fetchQuestions();
        this.checkProgress();
        this.levelsLoop();
    }
    fetchQuestions() {
        console.log("Fetching data");
        fetch(this.webserviceURL)
            .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(data => console.log(data))
            .catch(data => console.log(data));
    }
    checkProgress() {
        let storedstring = localStorage.getItem('levelsComplete');
        if (storedstring) {
            let storedData = JSON.parse(storedstring);
            this.currentLevel = Number(storedData);
        }
        else {
            this.currentLevel = 0;
        }
    }
    levelsLoop() {
        for (let i = 0; i < this.allLevels.length; i++) {
            this.createLevels(i);
        }
    }
    createLevels(index) {
        var _a;
        const levelDiv = document.createElement("button");
        levelDiv.classList.add("levels");
        levelDiv.classList.add("locked");
        levelDiv.classList.add(`${this.background[index]}`);
        levelDiv.dataset.index = index + 1;
        levelDiv.innerText = this.allLevels[index];
        if (this.currentLevel < index) {
            levelDiv.style.backgroundImage = `url("images/lock.png"), url("${this.background[index]}")`;
        }
        else {
            levelDiv.style.backgroundImage = `url(), url("${this.background[index]}")`;
        }
        (_a = this.levelContainer) === null || _a === void 0 ? void 0 : _a.appendChild(levelDiv);
    }
    level(e) {
        let level = Number(e.target.dataset.index);
        if (level <= this.currentLevel + 1) {
            this.tempNumber = e.target.dataset.index - 1;
            localStorage.setItem('currentLevel', this.tempNumber.toString());
            window.location.href = "Levels";
        }
        if (e.target.className.includes("play-button", "play-button-outside")) {
            localStorage.setItem('currentLevel', this.currentLevel.toString());
            window.location.href = "Levels";
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map