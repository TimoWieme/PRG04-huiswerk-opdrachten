class Level {
    completed = false
    currentLevel = 0
    images = ["../images/aap2.jpg", "../images/vos.jpg"]

    webserviceURL : string = '../webservice/index.php';

    div:HTMLElement
    answerA = document.getElementById("a")
    answerB = document.getElementById("b")
    answerC = document.getElementById("c")

    questionsDiv = document.getElementById("questions")

    constructor() {
        let storedstring = localStorage.getItem('currentLevel')
        console.log(storedstring);
        this.currentLevel = Number(storedstring)
        

        //TODO GET THE QUESTIONS 
        this.fetchQuestions()
        
        // get the Title ID
        let title = document.getElementById("title")
        // Create the Title for the level + the Class
        let level = document.createElement("h1")
        level.classList.add("title")
        level.innerHTML = `Level ${this.currentLevel + 1}`
        //append Title to page
        title?.appendChild(level)

        let fotodiv = document.getElementById("foto")
        let img = document.createElement('img')
        img.classList.add("foto")
        img.setAttribute('src', `${this.images[this.currentLevel]}`)
        fotodiv?.appendChild(img)
        console.log(img)
        
        switch (this.currentLevel) {
            //letters aanpassen 
            case 0:
                this.answerA!.setAttribute("value", "AA")
                this.answerB!.setAttribute("value", "A")
                this.answerC!.setAttribute("value", "OE")        
                break;
            case 1:
                this.answerA!.setAttribute("value", "O")
                this.answerB!.setAttribute("value", "E")
                this.answerC!.setAttribute("value", "I")
                break;
            default:
                break;
        }
        
        this.questionsDiv!.addEventListener("click", (e:MouseEvent) => this.correct(e))        
        
        if (storedstring){
            let storedData = JSON.parse(storedstring)
            // More Code ...
        }
    }

    // Fetch not working in live server!!
    fetchQuestions(){
        console.log("Fetching data");
        fetch(this.webserviceURL)
            .then((response) => {
                if (!response.ok) {
                   throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(data => console.log(data))
        // .then(this.succesHandler)
        // .catch(this.errorHandler)
    }
    succesHandler(data: any) {
        let fetchedQuestions = data
        console.log(fetchedQuestions);
    }

    errorHandler(data:any){
        console.log(data);
    }

    correct(e:MouseEvent) {
        const imggood = document.getElementById("good")!
        const imgwrong = document.getElementById("wrong")!
        console.log(e);
        let knop = e.target as HTMLInputElement
        console.log(knop.defaultValue)
        //TODO ARRAY OF RIGHT ANSWERS
        if (knop.defaultValue == "AA" || knop.defaultValue == "OO"){
            console.log("Succes!!!");
            imggood.style.display = "block"
            imgwrong.style.display = "none"
            
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
