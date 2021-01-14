class Ground
{
    constructor(x,y,width,height,world)
    {

        var options = {
          
            isStatic :true,
            restitution :0,
            friction :1
        }

        this.x = x
        this.y = y
        this.w = width
        this.h = height

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world, this.body)

        this.ground = createSprite(this.x,this.y,this.w,this.h)
        this.ground.shapeColor = "green"
    }
    display()
    {
        this.ground.x = this.body.position.x
        this.ground.y = this.body.position.y
    }
}