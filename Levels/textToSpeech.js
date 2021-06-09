window.addEventListener("load", init);
let voices = [];
let synth = window.speechSynthesis;

function init(){
/*
let answerbtn = document.getElementsByClassName("answerButton");
answerbtn[0].addEventListener("click", speak);
answerbtn[1].addEventListener("click", speak);
answerbtn[2].addEventListener("click", speak);
 */
    window.addEventListener("click", speak);
}

function speak(e) {
    let txtInput = "";
    voices = synth.getVoices();
    console.log(e.target);
    if (e.target.tagName === "H1"){
        txtInput = e.target.innerHTML;
    }
    else if (e.target.tagName === "INPUT"){
        txtInput = e.target.value;
    }
    else if (e.target.tagName === "IMG"){
        txtInput = e.target.alt;
    }
    else{
    }
    console.log(txtInput);
    if (voices != null){
        let toSpeak = new SpeechSynthesisUtterance();
        toSpeak.text = txtInput;
        voices.forEach((voice) => {
            if (voice.name === 'Google Nederlands') {
                toSpeak.voice = voice;
                toSpeak.volume = 1;
                toSpeak.rate = 0.75;
                toSpeak.pitch = 1;
                console.log(toSpeak);
            }
        });
        synth.speak(toSpeak);
    }
    if (voices == null){
        console.log("FUCK")
    }
}

