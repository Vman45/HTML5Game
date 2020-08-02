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
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        } else {
            ctx.beginPath();
            ctx.fillStyle = this.type;
            ctx.strokeStyle = "back";
            ctx.rect(this.x + this.width * 0.75, this.y, this.width / 2, this.height * 0.6);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }

    }
}

class Piano extends Entity {

    constructor(x, y, width, height, color, quantityOfKey) {
        super();
        [this.x, this.y] = [x, y];
        this.color = color;
        this.numberOfkey = quantityOfKey;
        this.rightIndent = 10;
    }

    render() {
        let ctx = gameEngine.context;
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    genarateKey() {
        let blackKeys = [];
        let whiteKeys = [];
        let keys = [];
        for(let i = 0; i < keyNotes.length; i++){
            if(keyNotes[i].name.includes('s')) {
                keyNotes[i].x = this.rightIndent + whiteKeys.length * Key.width- Key.width / 4;
                keyNotes[i].type = "black";
                blackKeys.push(keyNotes[i]);
            } else {
                whiteKeys.push(keyNotes[i]);
                //toa do x theo so luong phim trang (ca den va trang do phim o data sap xep dung theo thu tu nen moi duoc vay)
                keyNotes[i].x = this.rightIndent + whiteKeys.length * Key.width;
                keyNotes[i].type = "white";
                keys.push(keyNotes[i]);
            }
        }

        //push phim den con lai vao keys
        for(let i = 0; i < blackKeys.length; i++){
            keys.push(blackKeys[i]);
        }

        //khoi tao obj key
        for(let i = 0; i < keys.length; i++){
            let key = new Key(keyNotes[i].x, 10, 40, 100, keys.type);
            key.render();
        }
    }
}