// const webserviceURL = './webservices/index.php';

class Game {
    div:HTMLElement
    answerA = document.getElementById("a")
    answerB = document.getElementById("b")
    answerC = document.getElementById("c")

    questions = document.getElementById("questions")

    constructor() {
        this.answerA!.setAttribute("value", "AA")
        this.answerB!.setAttribute("value", "A")
        this.answerC!.setAttribute("value", "OE")
        this.questions!.addEventListener("click", correct)
    }

    
}
new Game

function correct(e:any) {
    const imggood = document.getElementById("good")!
    const imgwrong = document.getElementById("wrong")!
    
    // console.log(e);
    if (e.target.defaultValue == "AA"){
        console.log("Succes!!!");
        imggood.style.display = "block"
        imgwrong.style.display = "none"
        localStorage.setItem('levelsComplete', JSON.stringify(1));
        setTimeout(function() {
            location.href = "../../"
        }, 3000)
        //TODO Remove LocalStorage to go to the next level
    } else {
        console.log("Pech");
        imgwrong.style.display = "block"
        imggood.style.display = "none"
    }
}

// function fetchQuestions() {
//     console.log(webserviceURL)
//     fetch(webserviceURL)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         })
//         .then(log)
//         .catch(log);
// }
//
// function log(data:any) {
//     let getQuestions:any = data
//     console.log(data)
// }