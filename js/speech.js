export class Speech {
    constructor() {
        this.synth = window.speechSynthesis;
    }
    speak(text) {
        if (this.synth.speaking) {
            return;
        }
        if (text !== '') {
            let utterThis = new SpeechSynthesisUtterance(text);
            utterThis.lang = 'NL-NL';
            this.synth.speak(utterThis);
        }
    }
}
//# sourceMappingURL=speech.js.map