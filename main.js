var voiceList = document.querySelector('#voiceList')
var textInput = document.querySelector('#txtInput')
var btnSpeak = document.querySelector('#btSpeak')

var tts = window.speechSynthesis;
var voices = [];

getVoices();

if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = getVoices;
}

btnSpeak.addEventListener('click', ()=>{
    )};

function getVoices(){
    voices = tts.getVoices();
    voiceList.innerHTML = '';
    voices.forEach((voice)=>{
        var listItem = document.createElement('option')
        listItem.textContent = voice.name;
        listItem.setAttribute('data-language, voice.language')
        listItem.setAttribute('data-name, voice.name')
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = 0;
}