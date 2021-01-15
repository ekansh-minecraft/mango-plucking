class Stone
{
   constructor(x,y,width,height,world)
   {

    var options = {
          
      // 'isStatic' :true,
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }

     this.x = x
     this.y = y
     this.w = width
     this.h = height


     this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
     World.add(world,this.body)


     var stoneIm
     
     stoneIm = loadImage("stone.png")

     this.stone = createSprite(this.x,this.y,this.w,this.h,options)

     this.stone.addImage("stone",stoneIm)

     this.stone.scale = 0.05


   }
   display()
    {
     this.stone.x = this.body.position.x
     this.stone.y = this.body.position.y

    }   
}
