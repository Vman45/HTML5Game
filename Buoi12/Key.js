class Key extends Entity {
    constructor(x, y, width, height, type){
        super();
        [this.x, this.y] = [x, y];
        [this.height, this.width] = [height, width];
        this.type = type;
    }
    update() {

    }
    
    render() {
        let ctx = gameEngine.context;

        if(this.type == "white"){
            ctx.beginPath();
            ctx.fillStyle = this.type;
            ctx.strokeStyle = "back";
            ctx.fillStyle = "white";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.strokeStyle = "back";
            ctx.rect(this.x, this.y, this.width / 2, this.height * 0.6);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }

    }
}

class Piano extends Entity {

    constructor(x, y, width, height, color, quantityOfKey){
        super();
        [this.x, this.y] = [x, y];
        [this.width, this.height] = [width, height];
        this.color = color;
        this.numberOfkey = quantityOfKey;
        this.rightIndent = 30;
        this.keyWidth = (this.width - 2 * this.rightIndent) / this.numberOfkey;
    }

    render() {
        let ctx = gameEngine.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    genarateKey() {
        let blackKeys = [];
        let whiteKeys = [];
        let keys = [];
        let white = 0
        for(let i = 0; i < keyNotes.length; i++){
            if(keyNotes[i].name.includes('s')) {
                keyNotes[i].x = this.rightIndent + white * this.keyWidth - this.keyWidth / 4;
                keyNotes[i].type = "black";
                blackKeys.push(keyNotes[i]);
                // console.log(blackKeys);
            } else {
                //toa do x theo so luong phim trang (ca den va trang do phim o data sap xep dung theo thu tu nen moi duoc vay)
                keyNotes[i].x = this.rightIndent + white++ * this.keyWidth;
                keyNotes[i].type = "white";
                whiteKeys.push(keyNotes[i]);
                // console.log(whiteKeys);
                // keys.push(keyNotes[i]);
            }
        }

        console.log(whiteKeys);
        console.log(blackKeys);

        //push phim den con lai vao keys
        // for(let i = 0; i < blackKeys.length; i++){
            // keys.push(blackKeys[i]);
        // }

        //khoi tao obj key voi toa do x da duoc luu them owr vong lap ben tren
        for(let i = 0; i < keyNotes.length; i++){
            let key = new Key(keyNotes[i].x, 10, this.keyWidth, 100, keyNotes[i].type);
            keys.push(key);

            if(keyNotes[i].type == "white"){
                key.render();
            }
        }
        for(let i = 0; i < keys.length; i++){
            if(keys[i].type == "black"){
                keys[i].render();
            }
        }

        console.log(keys);
    }
}