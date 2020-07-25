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

    update(){
        console.log("This is update method of Ball");
    }
    
    render(){
        console.log("This is render method of Ball");
    }
}