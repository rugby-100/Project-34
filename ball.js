class Ball{
    constructor(x,y,radius) {
        var options = {
            density: 10
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.image = loadImage("superhero.png")
        World.add(world,this.body)
        this.radius = radius
    }

    display() {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius*3, this.radius*3)
    }
}