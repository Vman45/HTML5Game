var sceneManager = {
    scenes: [],
    currentScene: null,

    addScene: function(scene) {
        sceneManager.scenes.push(scene);
    },

    transition: function (scene) {
        if(sceneManager.currentScene != "null"){
            sceneManager.currentScene = scene;
            sceneManager.currentScene.remove();
            sceneManager.currentScene.load(); 
            sceneManager.currentScene.render(); 
        }else{
            sceneManager.currentScene = scene;
            sceneManager.currentScene.load(); 
            sceneManager.currentScene.render();  
        }
    },
}

class Scene {
    constructor() {
        sceneManager.scenes.push(this);
    }

    load() {
        console.log("Please implement load function");
    }

    render() {
        console.log("Please implement render function");
    }

    remove() {
        console.log("Please implement render function");
    }
}

class SceneSplash extends Scene {
    constructor(id) {
        super();
        this.id = id;

        this.initHTML();
    }

    initHTML() {
        let gameContainer = document.getElementById("game-container");
        gameContainer.style.backgroundImage = "url('splashscreen.png')";
        // create div container
        let div = document.createElement('div');
        div.className = 'game-layer';
        div.id = this.id;

        // play button
        let playButton = document.createElement('img');
        playButton.className = "play_but";
        playButton.src = "FruitWars/images/icons/play.png";
        playButton.alt = "Play game";

        let breakLine = document.createElement("br");

        // setting button
        let settingButton = document.createElement('img');
        settingButton.className = "setting_but";
        settingButton.src = "FruitWars/images/icons/settings.png";
        settingButton.alt = "Settings";

        // wrap them together
        gameContainer.appendChild(div);
        div.appendChild(playButton);
        div.appendChild(breakLine);
        div.appendChild(settingButton);
    }

    load() {

    }

    render() {
        document.getElementById(this.id).style.display = "block";
    }

    remove() {
        document.getElementById(this.id).style.display = "none";
    }
}

// Tạo scene chọn màn

// class Levels extends Scene {
//     constructor(id) {
//         super();
//         this.id = id;

//         this.initHTML();
//     }

//     initHTML(){
//         let gameContainer = document.getElementById("game-container");
//         gameContainer.style.backgroundImage = "url('splashscreen.png')";
//         // create div container
//         let div = document.createElement('div');
//         div.className = 'game-layer';
//         div.id = this.id;

//         // create div container
//         let div = document.createElement('div');
//         div.className = 'game-layer';

//         //create level 1
//         let level_1 = document.createElement('span');
//         span.className = 'level_1';
//         level_1.src = "FruitWars/images/icons/level.png";
//         level_1.alt = "level 1";

//         //create level 1
//         let level_2 = document.createElement('span');
//         span.className = "level_2";
//         level_1.src = "FruitWars/images/icons/level.png";
//         level_1.alt = "level 2";
//     }

//     load() {

//     }

//     render() {
//         document.getElementById(this.id).style.display = "block";
//     }

//     remove() {
//         document.getElementById(this.id).style.display = "none";
//     }
// }