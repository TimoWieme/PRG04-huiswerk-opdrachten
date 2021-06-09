//evenlistener to check if the page is loaded
window.addEventListener("load", init)

//all global variables
const levelContainer = document.querySelector("#levelsDiv")
const allLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const background = ["/images/jungle.jpeg", "/images/ice.jpeg"]
let currentLevel = 0
let tempNumber;
let levelPage;

function init(){
    console.log("Page is Loaded");

    //making variables of the div's 
    let main = document.getElementById("main")
    //add event listener to check if a button is clicked
    main.addEventListener("click", level) 

    //Check if LocalStorage is available in the browser
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    checkProgress()
    levelsLoop()
}

function checkProgress(){
    let storedstring = localStorage.getItem('levelsComplete')
    if (storedstring){
        let storedData = JSON.parse(storedstring)
        currentLevel = Number(storedData)
        console.log(currentLevel);
    } else {
        currentLevel = 0
    }
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

    levelDiv.classList.add("locked")
    levelDiv.classList.add(`${background[index]}`)
    //add a dataset with value from the For loop
    levelDiv.dataset.index = index + 1
    //add Text in levelDiv
    levelDiv.innerText = allLevels[index]
    if (currentLevel < index) {
        levelDiv.style.backgroundImage = `url("/images/lock.png"), url("${background[index]}")`
    } else {
        levelDiv.style.backgroundImage = `url(), url("${background[index]}")`
    }
    //Append levelDiv to the levelContainer
    levelContainer.appendChild(levelDiv);
}


// function playButton(e){
//     //TODO MAKE IT WORK
//     //check if the play button is clicked
// }

function level(e){
    //check if the level button is clicked
    if (e.target.className.includes("levels")) {
        console.log("level was Clicked")
        console.log(e);
        //set the index of the button to a variable
        tempNumber = e.target.dataset.index
        console.log(tempNumber);
        //redirect to the page
        localStorage.setItem('currentLevel', currentLevel.toString())
        window.location.href = "Levels"
    } if (e.target.className.includes("play-button", "play-button-outside")) {
        console.log("Playbutton was Clicked")
        console.log(e);

        //redirect to the page change 0
        localStorage.setItem('currentLevel', currentLevel.toString())
        
        window.location.href = "Levels"
    }
}