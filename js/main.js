//evenlistener to check if the page is loaded
window.addEventListener("load", init)

//all global variables
const levelContainer = document.querySelector("#levelsDiv")
const allLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const background = ["jungle", "ice"]
let checkCompleted = []
let tempNumber;
let levelPage;
let levelRedirect = "Levels/level"


function init(){
    console.log("Page is Loaded");

    //making variables of the div's 
    let startDiv = document.getElementById("start")
    let levels = document.getElementById("levelsDiv")
    //add event listener to check if a button is clicked
    startDiv.addEventListener("click", playButton)
    levels.addEventListener("click", level)

    //Check if LocalStorage is available in the browser
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    levelsLoop()
}

function levelsLoop(){
    //for loop for all levels
    for (let i = 0; i < allLevels.length; i++){
        createLevels(i)
    }
}

function createLevels(index){
    //Create div for the levels
    const levelDiv = document.createElement("button");
    //add card to the class list
    levelDiv.classList.add("levels")
    levelDiv.classList.add(`${background[index]}`)
    //add a dataset with value from the For loop
    levelDiv.dataset.index = index + 1
    //add Text in levelDiv
    levelDiv.innerText = allLevels[index]
    //Append levelDiv to the levelContainer
    levelContainer.appendChild(levelDiv);

    let storedString = localStorage.getItem('levelsComplete');
    if(storedString) {
        checkCompleted = storedString
        console.log(checkCompleted)
    }
}

function playButton(e){
    //check if the play button is clicked
    if (e.target.className == "play-button" || "play-button-outside") {
        console.log("Button was Clicked")
        //add 1 number to go to the next game
        tempNumber = checkCompleted.length + 1
        //add the number for the right page
        levelPage = levelRedirect + tempNumber
        //redirect to the page
        console.log(checkCompleted.length)
        window.location.href = levelPage
    }
}

function level(e){
    //check if the level button is clicked
    if (e.target.className == "levels") {
        console.log("Button was Clicked")
        //set the index of the button to a variable
        tempNumber = e.target.dataset.index
        //add the number for the right page
        levelPage = levelRedirect + tempNumber
        //redirect to the page
        window.location.href = levelPage
    }
}