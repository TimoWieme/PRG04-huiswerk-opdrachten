"use strict";
class TussenLevel {
    constructor() {
        console.log("Hey");
        window.addEventListener("load", (e) => this.init());
    }
    init() {
        console.log("Page is Loaded");
        this.playAudio();
    }
    playAudio() {
        let audio = new Audio();
        audio.src = "./audio/theo-audio.mp3";
        audio.load();
        audio.play();
    }
<<<<<<< HEAD
})

level1Button.addEventListener('click', function(){
    console.log("Button clicked")
    window.location.replace("./levels/index.html")
})
=======
}
new TussenLevel();
//# sourceMappingURL=tussenlevel.js.map
>>>>>>> 96b5ad65ad0554866b04f44a4f9eaa5cd246a176
