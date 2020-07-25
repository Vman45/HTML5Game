class Entity {
    constructor() {
        gameEngine.addEntity(this);
    }

    update() {
        console.log("Please implement update method");
    }

    render() {
        console.log("Please implement render method");
    }
}

class Ball extends Entity {
    constructor(x, y, radius, color){
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 0;
        this.angle = Math.PI;
    }

    draw(){
        gameEngine.context.beginPath();
        gameEngine.context.fillStyle = ball.color;
        gameEngine.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        gameEngine.context.fill();
        gameEngine.context.closePath();
    }

    update(){
        console.log("This is update method of Ball");
        this.speed = 2;
        this.x += this.speed;
        console.log(this.x);
    }
    
    render(){
        console.log("This is render method of Ball");
    }
}