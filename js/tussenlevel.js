var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

playPauseBTN.addEventListener('click', function(){
    console.log("Button clicked")
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pauze &#9208"
    } else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Speel het geluid &#9658;";
    }
})

level1Button.addEventListener('click', function(){
    console.log("Button clicked")
    window.location.replace("./index.html")
})
