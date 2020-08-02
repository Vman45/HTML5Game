var sceneManager = {
    scenes: [],
    currentScene: null,

    addScene: function(scene) {
        sceneManager.scenes.push(scene);
    },

    transition: function (scene) {
        console.log(sceneManager.currentScene);
        console.log(sceneManager.scenes);
        if(sceneManager.currentScene == null){
            sceneManager.currentScene = scene;
            sceneManager.currentScene.load();
            sceneManager.currentScene.render();
        }else{
            sceneManager.currentScene.remove();
            sceneManager.currentScene = scene;
            sceneManager.currentScene.load();
            // console.log(sceneManager.currentScene);
            // console.log(sceneManager.scenes);
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
    constructor(id) {//vay id nay minh truyen vao luc' nao` vay. Hay no' tu lay' ten class cho vao`???
        super();//khi class con co them thuoc tinh thi ta phai them cau nay
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
        playButton.setAttribute('onClick', 'sceneManager.transition(sceneLevelSelection);');


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

class sceneLevelSelection extends Scene {
    constructor(id) {
        super();
        this.id = id;

        this.initHTML();
    }

    initHTML() {
        let gameContainer = document.getElementById("game-container");

        //create div
        let div = document.createElement('div');
        div.className = 'game-layer';
        div.id = this.id

        //level button
        // for(let i = 0; i < levels.data.length; i++){
            for(let i = 0; i < 2; i++){
            console.log('co chay vao day khong cung');
            let level = document.createElement('input');
            level.type = "button";
            level.value = i + 1;
            level.src = "FruitWars/images/icons/level.png";
            level.alt = "level";
            level.setAttribute('onClick', `sceneManager.currentLevel.number =   ${i + 1}; secneManager.trasition(sceneLevel);`);
            div.appendChild(level);
        }

        gameContainer.appendChild(div);
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