class Level {
    completed = false
    // aanpassen later
    currentLevel = 0

    div:HTMLElement
    answerA = document.getElementById("a")
    answerB = document.getElementById("b")
    answerC = document.getElementById("c")

    questions = document.getElementById("questions")

    constructor() {
        let storedstring = localStorage.getItem('currentLevel')
        console.log(storedstring);
        this.currentLevel = Number(storedstring)

        //TODO LEVELS OPHALEN
        switch (this.currentLevel) {
            //letters aanpassen 
            case 0:
                this.answerA!.setAttribute("value", "AA")
                this.answerB!.setAttribute("value", "A")
                this.answerC!.setAttribute("value", "OE")        
                break;
            case 1:
                this.answerA!.setAttribute("value", "OO")
                this.answerB!.setAttribute("value", "BB")
                this.answerC!.setAttribute("value", "CC")
                break;
            default:
                break;
        }

        
        this.questions!.addEventListener("click", (e:MouseEvent) => this.correct(e))

        console.log("Hallo");
        
        
        if (storedstring){
            let storedData = JSON.parse(storedstring)
            // More Code ...
        }
    }

    correct(e:MouseEvent) {
        const imggood = document.getElementById("good")!
        const imgwrong = document.getElementById("wrong")!
        console.log(e);
        let knop = e.target as HTMLInputElement
        console.log(knop.defaultValue)
        //TODO ARRAY OF RIGHT ANSWERS
        if (knop.defaultValue == "AA"){
            console.log("Succes!!!");
            imggood.style.display = "block"
            imgwrong.style.display = "none"
            
            //TODO SENT the checkCompled in the localstorage
            localStorage.setItem('levelsComplete', JSON.stringify(this.currentLevel + 1));
            setTimeout(function() {
                location.href = "../"
            }, 3000)
        } else {
            console.log("Pech");
            imgwrong.style.display = "block"
            imggood.style.display = "none"
        }
    } 
}
new Level()