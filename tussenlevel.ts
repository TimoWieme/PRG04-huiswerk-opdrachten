class TussenLevel {
    constructor() {
        console.log("Hey");
        window.addEventListener("load", (e) => this.init());
    }
    init() {
        console.log("Page is Loaded");
        this.playAudio()
    }


    playAudio(){
        let audio = new Audio();
        audio.src = "./audio/theo-audio.mp3"
        audio.load()
        audio.play()
    }
}
new TussenLevel()
