window.addEventListener("load", init)
console.log("Page is Loaded");

const levelContainer = document.querySelector("#levelsDiv")
const allLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function init(){
    // let startDiv = document.getElementById("start")
    // let levels = document.getElementById("levels")
    // startDiv.addEventListener("click", hey)
    // levels.addEventListener("click", hey)

    levelsLoop()
}

function hey(e){
    console.log(e);
    
}

function levelsLoop(){
    for (let i = 0; i < allLevels.length; i++){
        console.log(`Created card ${i}`);
        createLevels(i)
    }
}

function createLevels(index){
    //Create div for the levels
    const levelDiv = document.createElement("button");
    //add card to the class list
    levelDiv.classList.add("levels")
    //add a dataset with value from the For loop
    levelDiv.dataset.index = index + 1
    //add Text in levelDiv
    levelDiv.innerText = allLevels[index]
    //Append levelDiv to the levelContainer
    levelContainer.appendChild(levelDiv);
    console.log("Level Created")

}