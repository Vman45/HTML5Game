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
        var gameContainer = document.getElementById("game-container");
        gameContainer.style.backgroundImage = "url('splashscreen.png')";
        // create div container
        var div = document.createElement('div');
        div.className = 'game-layer';
        div.id = this.id;

        // play button
        var playButton = document.createElement('img');
        playButton.className = "play_but";
        playButton.src = "FruitWars/images/icons/play.png";
        playButton.alt = "Play game";

        var breakLine = document.createElement("br");

        // setting button
        var settingButton = document.createElement('img');
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

// var sceneSplash = new SceneSplash("scene-splash");