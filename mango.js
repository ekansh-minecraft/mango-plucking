class Mango
{
    constructor(x,y,width,height,world){

      var options = {

          isStatic :true,
          restitution :0,
          friction :1,

      }

      this.x = x 
      this.y = y 
      this.w = width 
      this.h = height
        
      this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
      World.add(world,this.body)

    


     
     var mangoIm

     mangoIm = loadImage("mango.png")

     this.mango = createSprite(this.x,this.y,this.w,this.h)

     this.mango.addImage("mango",mangoIm)

     this.mango.scale = 0.10
    }

    display()
     {
        this.mango.x = this.body.position.x
        this.mango.y = this.body.position.y
     }

}
